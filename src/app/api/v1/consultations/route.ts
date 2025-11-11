import { prisma } from "../lib/prisma";
import { withAuth } from "../lib/middleware";
import { NextResponse } from "next/server";

async function getAll(req: Request) {
  try {
    if (req.method === "GET") {
      const consultations = await prisma.consultations.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              role: true,
              createdAt: true,
            },
          },
          consultationsSymptoms: {
            include: {
              symptom: true,
            },
          },
          medicineRecommendations: {
            include: {
              medicine: true,
            },
          },
          aiLogs: true,
        },
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json(consultations);
    } else {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to fetch consultations", details: err.message },
      { status: 500 }
    );
  }
}

async function create(req: Request) {
  try {
    if (req.method === "POST") {
      const { userId, symptoms } = await req.json();
      if (!userId || !Array.isArray(symptoms) || symptoms.length === 0) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      const newConsultation = await prisma.consultations.create({
        data: {
          userId,
          consultationsSymptoms: {
            create: symptoms.map((symptom: any) => ({
              symptomId: symptom.symptomId,
              notes: symptom.notes || null,
            })),
          },
          diagnosisSummary: null,
          severity: null,
        },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              role: true,
              createdAt: true,
            },
          },
          consultationsSymptoms: {
            include: {
              symptom: true,
            },
          },
          medicineRecommendations: {
            include: {
              medicine: true,
            },
          },
          aiLogs: true,
        },
      });

      return NextResponse.json(newConsultation, { status: 201 });
    } else {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to create consultation", details: err.message },
      { status: 500 }
    );
  }
}

async function handler(req: Request) {
  if (req.method === "GET") {
    return getAll(req);
  } else if (req.method === "POST") {
    return create(req);
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}

export const GET = withAuth(handler, ["admin"]);
export const POST = withAuth(handler, ["admin", "patient"]);
