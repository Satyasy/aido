import { prisma } from "../../lib/prisma";
import { withAuth } from "../../lib/middleware";
import { NextResponse } from "next/server";

async function getById(req: Request, { params }: any) {
    try {
        if (req.method === "GET") {
            const consultationId = parseInt(params.id, 10);
            if (isNaN(consultationId)) {
                return NextResponse.json({ error: "Invalid consultation ID" }, { status: 400 });
            }

            const consultation = await prisma.consultations.findUnique({
                where: { id: consultationId },
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

            if (!consultation) {
                return NextResponse.json({ error: "Consultation not found" }, { status: 404 });
            }

            return NextResponse.json(consultation);
        } else {
            return NextResponse.json(
                { error: "Method not allowed" },
                { status: 405 }
            );
        }
    } catch (err: any) {
        return NextResponse.json(
            { error: "Failed to fetch consultation", details: err.message },
            { status: 500 }
        );  
    }
}

async function updateById(req: Request, { params }: any) {
    try {
        if (req.method === "PUT") {
            const consultationId = parseInt(params.id, 10);
            if (isNaN(consultationId)) {
                return NextResponse.json({ error: "Invalid consultation ID" }, { status: 400 });
            }

            const { userId, symptoms } = await req.json();
            if (!userId || !Array.isArray(symptoms) || symptoms.length === 0) {
                return NextResponse.json(
                    { error: "Missing required fields" },
                    { status: 400 }
                );
            }

            const updatedConsultation = await prisma.consultations.update({
                where: { id: consultationId },
                data: {
                    userId,
                    symptoms: JSON.stringify(symptoms),
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

            return NextResponse.json(updatedConsultation);
        } else {
            return NextResponse.json(
                { error: "Method not allowed" },
                { status: 405 }
            );
        }
    } catch (err: any) {
        return NextResponse.json(
            { error: "Failed to update consultation", details: err.message },
            { status: 500 }
        );  
    }
}

async function deleteById(req: Request, { params }: any) {
    try {
        if (req.method === "DELETE") {
            const consultationId = parseInt(params.id, 10);
            if (isNaN(consultationId)) {
                return NextResponse.json({ error: "Invalid consultation ID" }, { status: 400 });
            }

            const existing = await prisma.consultations.findUnique({
                where: { id: consultationId },
            });
            if (!existing) {
                return NextResponse.json({ error: "Consultation not found" }, { status: 404 });
            }

            await prisma.consultations.delete({
                where: { id: consultationId },
            });
            const existingSymptoms = await prisma.consultationsSymptoms.findMany({
                where: { consultationId },
            });
            if (existingSymptoms.length > 0) {
                await prisma.consultationsSymptoms.deleteMany({
                    where: { consultationId },
                });
            }
            const existingRecommendations = await prisma.medicineRecommendations.findMany({
                where: { consultationId },
            });
            if (existingRecommendations.length > 0) {
                await prisma.medicineRecommendations.deleteMany({
                    where: { consultationId },
                });
            }
            const existingAiLogs = await prisma.aiLogs.findMany({
                where: { consultationId: consultationId },
            });
            if (existingAiLogs.length > 0) {
                await prisma.aiLogs.deleteMany({
                    where: { consultationId: consultationId },
                });
            }
            if (existingSymptoms.length > 0 || existingRecommendations.length > 0 || existingAiLogs.length > 0) {
                // Clean up related records if any existed
                await prisma.$transaction([
                    prisma.consultationsSymptoms.deleteMany({
                        where: { consultationId },
                    }),
                    prisma.medicineRecommendations.deleteMany({
                        where: { consultationId },
                    }),
                    prisma.aiLogs.deleteMany({
                        where: { consultationId: consultationId },
                    }),
                ]);
            }
            if (existingSymptoms.length === 0 && existingRecommendations.length === 0 && existingAiLogs.length === 0) {
                // No related records to clean up
                await prisma.consultations.delete({
                    where: { id: consultationId },
                });
            }

            return NextResponse.json({ message: "Consultation deleted successfully" });
        } else {
            return NextResponse.json(
                { error: "Method not allowed" },
                { status: 405 }
            );
        }
    } catch (err: any) {
        return NextResponse.json(
            { error: "Failed to delete consultation", details: err.message },
            { status: 500 }
        );  
    }
}

export const GET = withAuth(getById, ["admin", "patient"]);
export const PUT = withAuth(updateById, ["admin"]);
export const DELETE = withAuth(deleteById, ["admin"]);