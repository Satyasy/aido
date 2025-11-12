import { NextResponse } from "next/server";
import { getMedicineInfoWithGemini } from "../../../lib/gemini";
import { prisma } from "../../../lib/prisma";
import { withAuth } from "../../../lib/middleware";

async function handler(req: Request) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    const { medicineName } = await req.json();

    if (!medicineName) {
      return NextResponse.json(
        { error: "Medicine name is required" },
        { status: 400 }
      );
    }

    // Get medicine info from Gemini
    const medicineInfo = await getMedicineInfoWithGemini(medicineName);

    // Check if medicine exists in database
    let medicine = await prisma.medicines.findFirst({
      where: {
        name: {
          contains: medicineName,
          mode: "insensitive",
        },
      },
    });

    // Update or create medicine in database
    if (medicine) {
      medicine = await prisma.medicines.update({
        where: { id: medicine.id },
        data: {
          description: medicineInfo.description,
          dosage: medicineInfo.dosage,
          contraindications: medicineInfo.contraindications,
        },
      });
    } else {
      medicine = await prisma.medicines.create({
        data: {
          name: medicineInfo.name,
          description: medicineInfo.description,
          dosage: medicineInfo.dosage,
          contraindications: medicineInfo.contraindications,
          isPrescriptionRequired: true,
        },
      });
    }

    return NextResponse.json(
      {
        medicine,
        aiInfo: medicineInfo,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error getting medicine info:", error);
    return NextResponse.json(
      { error: "Failed to get medicine info", details: error.message },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handler, ["admin", "patient"]);
