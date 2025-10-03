/*
  Warnings:

  - You are about to drop the column `consultaionId` on the `aiLogs` table. All the data in the column will be lost.
  - You are about to drop the `consultatations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `consultatationsSymptoms` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `consultationId` to the `aiLogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."aiLogs" DROP CONSTRAINT "aiLogs_consultaionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."consultatations" DROP CONSTRAINT "consultatations_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."consultatationsSymptoms" DROP CONSTRAINT "consultatationsSymptoms_consultationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."consultatationsSymptoms" DROP CONSTRAINT "consultatationsSymptoms_symptomId_fkey";

-- DropForeignKey
ALTER TABLE "public"."medicineRecommendations" DROP CONSTRAINT "medicineRecommendations_consultationId_fkey";

-- AlterTable
ALTER TABLE "public"."aiLogs" DROP COLUMN "consultaionId",
ADD COLUMN     "consultationId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."consultatations";

-- DropTable
DROP TABLE "public"."consultatationsSymptoms";

-- CreateTable
CREATE TABLE "public"."consultations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "symptoms" TEXT,
    "diagnosisSummary" TEXT,
    "severity" VARCHAR(50),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consultations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."consultationsSymptoms" (
    "consultationId" INTEGER NOT NULL,
    "symptomId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "consultationsSymptoms_pkey" PRIMARY KEY ("consultationId","symptomId")
);

-- AddForeignKey
ALTER TABLE "public"."consultations" ADD CONSTRAINT "consultations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."consultationsSymptoms" ADD CONSTRAINT "consultationsSymptoms_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "public"."consultations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."consultationsSymptoms" ADD CONSTRAINT "consultationsSymptoms_symptomId_fkey" FOREIGN KEY ("symptomId") REFERENCES "public"."symptoms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medicineRecommendations" ADD CONSTRAINT "medicineRecommendations_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "public"."consultations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."aiLogs" ADD CONSTRAINT "aiLogs_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "public"."consultations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
