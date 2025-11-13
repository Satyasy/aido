import { NextResponse } from "next/server";
import { analyzeSymptomsWithGemini } from "../../lib/gemini";
import { prisma } from "../../lib/prisma";
import { withAuth } from "../../lib/middleware";

async function handler(req: Request) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    const { consultationId } = await req.json();

    if (!consultationId) {
      return NextResponse.json(
        { error: "Consultation ID is required" },
        { status: 400 }
      );
    }

    // Get consultation with symptoms
    const consultation = await prisma.consultations.findUnique({
      where: { id: consultationId },
      include: {
        consultationsSymptoms: {
          include: {
            symptom: true,
          },
        },
      },
    });

    if (!consultation) {
      return NextResponse.json(
        { error: "Consultation not found" },
        { status: 404 }
      );
    }

    // Format symptoms for Gemini
    const symptoms = consultation.consultationsSymptoms.map((cs) => ({
      name: cs.symptom.name,
      description: cs.symptom.description || undefined,
      notes: cs.notes || undefined,
    }));

    // Analyze with Gemini
    const aiAnalysis = await analyzeSymptomsWithGemini(symptoms);

    // Update consultation with AI results
    const updatedConsultation = await prisma.consultations.update({
      where: { id: consultationId },
      data: {
        diagnosisSummary: aiAnalysis.diagnosisSummary,
        severity: aiAnalysis.severity,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
        consultationsSymptoms: {
          include: {
            symptom: true,
          },
        },
      },
    });

    // Log AI interaction
    await prisma.aiLogs.create({
      data: {
        consultationId,
        inputText: JSON.stringify(symptoms),
        outputText: JSON.stringify(aiAnalysis),
      },
    });

    // Create medicine recommendations
    const medicineRecommendations = await Promise.all(
      aiAnalysis.medicineRecommendations.map(async (medRec) => {
        // Check if medicine exists
        let medicine = await prisma.medicines.findFirst({
          where: {
            name: {
              contains: medRec.medicineName,
              mode: "insensitive",
            },
          },
        });

        // Create medicine if not exists
        if (!medicine) {
          medicine = await prisma.medicines.create({
            data: {
              name: medRec.medicineName,
              description: medRec.reason,
              isPrescriptionRequired: true,
            },
          });
        }

        // Create recommendation
        return await prisma.medicineRecommendations.create({
          data: {
            consultationId,
            medicineId: medicine.id,
            reason: medRec.reason,
            confidenceScore: medRec.confidenceScore,
          },
          include: {
            medicine: true,
          },
        });
      })
    );

    return NextResponse.json(
      {
        consultation: updatedConsultation,
        aiAnalysis,
        medicineRecommendations,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error analyzing consultation:", error);
    return NextResponse.json(
      { error: "Failed to analyze consultation", details: error.message },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handler, ["admin", "patient"]);
