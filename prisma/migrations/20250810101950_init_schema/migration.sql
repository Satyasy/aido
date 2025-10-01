-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "passwordHash" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) NOT NULL DEFAULT 'patient',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."consultatations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "symptoms" TEXT,
    "diagnosisSummary" TEXT,
    "severity" VARCHAR(50),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consultatations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."symptoms" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "category" VARCHAR(100),

    CONSTRAINT "symptoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."consultatationsSymptoms" (
    "consultationId" INTEGER NOT NULL,
    "symptomId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "consultatationsSymptoms_pkey" PRIMARY KEY ("consultationId","symptomId")
);

-- CreateTable
CREATE TABLE "public"."medicines" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255),
    "description" TEXT,
    "dosage" VARCHAR(100),
    "contraindications" TEXT,
    "isPrescriptionRequired" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."medicineRecommendations" (
    "id" SERIAL NOT NULL,
    "consultationId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "reason" TEXT,
    "confidenceScore" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "medicineRecommendations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."aiLogs" (
    "id" SERIAL NOT NULL,
    "consultaionId" INTEGER NOT NULL,
    "inputText" TEXT,
    "outputText" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aiLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."consultatations" ADD CONSTRAINT "consultatations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."consultatationsSymptoms" ADD CONSTRAINT "consultatationsSymptoms_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "public"."consultatations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."consultatationsSymptoms" ADD CONSTRAINT "consultatationsSymptoms_symptomId_fkey" FOREIGN KEY ("symptomId") REFERENCES "public"."symptoms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medicineRecommendations" ADD CONSTRAINT "medicineRecommendations_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "public"."consultatations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medicineRecommendations" ADD CONSTRAINT "medicineRecommendations_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "public"."medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."aiLogs" ADD CONSTRAINT "aiLogs_consultaionId_fkey" FOREIGN KEY ("consultaionId") REFERENCES "public"."consultatations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
