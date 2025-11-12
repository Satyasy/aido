import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

/**
 * Get Gemini model instance
 * Using gemini-pro as it's the most compatible model
 * Note: If this doesn't work, check your API key permissions at https://makersuite.google.com/app/apikey
 */
export function getGeminiModel(modelName: string = "gemini-2.5-flash") {
  return genAI.getGenerativeModel({ 
    model: modelName,
  });
}

/**
 * Analyze symptoms and provide medical consultation
 */
export async function analyzeSymptomsWithGemini(
  symptoms: Array<{ name: string; description?: string; notes?: string }>
): Promise<{
  diagnosisSummary: string;
  severity: string;
  recommendations: string[];
  medicineRecommendations: Array<{
    medicineName: string;
    reason: string;
    confidenceScore: number;
  }>;
}> {
  try {
    const model = getGeminiModel();

    // Format symptoms untuk prompt
    const symptomsText = symptoms
      .map((s) => `- ${s.name}${s.notes ? `: ${s.notes}` : ""}`)
      .join("\n");

    const prompt = `Anda adalah asisten medis AI yang profesional. Berdasarkan gejala-gejala berikut, berikan analisis medis:

Gejala Pasien:
${symptomsText}

Berikan respons dalam format JSON dengan struktur berikut:
{
  "diagnosisSummary": "Ringkasan diagnosis kemungkinan kondisi medis (dalam bahasa Indonesia)",
  "severity": "low/medium/high",
  "recommendations": ["Rekomendasi 1", "Rekomendasi 2", "..."],
  "medicineRecommendations": [
    {
      "medicineName": "Nama obat",
      "reason": "Alasan penggunaan",
      "confidenceScore": 0.8
    }
  ]
}

Catatan penting:
- Berikan diagnosis yang akurat namun tetap menyarankan konsultasi dengan dokter
- Severity: low (ringan), medium (sedang), high (berat/darurat)
- Rekomendasi harus praktis dan mudah dipahami
- Confidence score antara 0-1
- Hanya rekomendasikan obat yang umum dan aman`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse JSON dari response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Invalid JSON response from Gemini");
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);
    return parsedResponse;
  } catch (error: any) {
    console.error("Error analyzing symptoms with Gemini:", error);
    throw new Error(`Failed to analyze symptoms: ${error.message}`);
  }
}

/**
 * Chat with Gemini AI for medical questions
 */
export async function chatWithGemini(
  message: string,
  userName?: string,
  conversationHistory?: Array<{ role: string; content: string }>
): Promise<string> {
  // List of models to try in order
  const modelsToTry = [
    "gemini-2.5-pro",
    "gemini-2.5-flash"
  ];

  let lastError: any = null;

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });

      const userGreeting = userName ? `Halo ${userName}! ` : '';
      
      let prompt = `Anda adalah MediBot, asisten kesehatan AI yang ramah dan informatif. ${userGreeting}Jawab pertanyaan kesehatan berikut dengan bahasa Indonesia yang mudah dipahami.

PENTING: Format jawaban Anda menggunakan Markdown:
- Gunakan **teks tebal** untuk kata-kata penting atau istilah medis
- Gunakan *teks miring* untuk penekanan ringan
- Gunakan bullet points (- atau *) untuk daftar
- Gunakan angka (1., 2., 3.) untuk langkah-langkah
- Gunakan ### untuk subjudul jika diperlukan

${userName ? `Nama pengguna: ${userName}` : ''}

Pertanyaan: ${message}

Berikan jawaban yang:
- **Akurat** dan berbasis medis
- **Mudah dipahami** oleh orang awam
- Menyarankan **konsultasi dokter** jika diperlukan
- Tidak menggantikan **diagnosis dokter profesional**

Selalu sapa pengguna dengan nama mereka jika tersedia.`;

      // Add conversation history if provided
      if (conversationHistory && conversationHistory.length > 0) {
        const historyText = conversationHistory
          .map((msg) => `${msg.role}: ${msg.content}`)
          .join("\n");
        prompt = `Riwayat percakapan:\n${historyText}\n\n${prompt}`;
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      console.log(`✅ Successfully used model: ${modelName}`);
      return response.text();
    } catch (error: any) {
      console.log(`❌ Model ${modelName} failed:`, error.message);
      lastError = error;
      continue; // Try next model
    }
  }

  // If all models failed
  console.error("Error chatting with Gemini - all models failed:", lastError);
  throw new Error(`Failed to get response. Please check your API key and permissions. Last error: ${lastError?.message}`);
}

/**
 * Get medicine information using Gemini
 */
export async function getMedicineInfoWithGemini(
  medicineName: string
): Promise<{
  name: string;
  description: string;
  dosage: string;
  contraindications: string;
  sideEffects: string;
}> {
  try {
    const model = getGeminiModel();

    const prompt = `Berikan informasi lengkap tentang obat "${medicineName}" dalam format JSON:

{
  "name": "Nama obat",
  "description": "Deskripsi dan kegunaan obat",
  "dosage": "Dosis umum yang direkomendasikan",
  "contraindications": "Kontraindikasi dan peringatan",
  "sideEffects": "Efek samping yang mungkin terjadi"
}

Berikan informasi dalam bahasa Indonesia yang mudah dipahami.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Invalid JSON response from Gemini");
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error: any) {
    console.error("Error getting medicine info from Gemini:", error);
    throw new Error(`Failed to get medicine info: ${error.message}`);
  }
}
