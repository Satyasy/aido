# Gemini AI Integration - Setup Summary

## ✅ File yang Telah Dibuat

### 1. Backend API Files

#### `/src/app/api/v1/lib/gemini.ts`
File utility untuk integrasi Gemini AI:
- `analyzeSymptomsWithGemini()` - Menganalisis gejala dan memberikan diagnosis
- `chatWithGemini()` - Chat dengan MediBot AI
- `getMedicineInfoWithGemini()` - Mendapatkan informasi obat

#### `/src/app/api/v1/gemini/analyze/route.ts`
Endpoint untuk menganalisis konsultasi dengan AI:
- `POST /api/v1/gemini/analyze` - Analisis gejala pasien

#### `/src/app/api/v1/gemini/chat/route.ts`
Endpoint untuk chat dengan MediBot:
- `POST /api/v1/gemini/chat` - Chat dengan AI assistant

#### `/src/app/api/v1/gemini/medicine/info/route.ts`
Endpoint untuk informasi obat:
- `POST /api/v1/gemini/medicine/info` - Mendapatkan info obat dari AI

### 2. Frontend Files

#### `/src/lib/geminiService.ts`
Service layer untuk frontend:
- `analyzeSymptoms()` - Call API analisis gejala
- `chatWithMediBot()` - Call API chat
- `getMedicineInfo()` - Call API info obat

#### `/src/components/ChatbotWidget.tsx`
Komponen widget chatbot floating untuk homepage:
- UI chatbot yang interaktif
- Real-time messaging dengan Gemini AI
- Conversation history
- Loading states dan error handling

### 3. Documentation

#### `/GEMINI_API_DOCS.md`
Dokumentasi lengkap API Gemini:
- Endpoint documentation
- Request/Response examples
- Setup instructions
- Error handling guide

---

## 🔧 Setup Instructions

### 1. Install Dependencies
Package sudah diinstall:
```bash
npm install @google/generative-ai
```

### 2. Environment Setup
Update file `.env` dengan Gemini API Key Anda:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/aido
JWT_SECRET=becddb9a8f877209
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Get Gemini API Key
1. Kunjungi: https://makersuite.google.com/app/apikey
2. Login dengan Google account
3. Buat API key baru
4. Copy dan paste ke `.env`

---

## 📋 Features Implemented

### 1. Symptom Analysis
- Menganalisis gejala pasien dengan AI
- Memberikan diagnosis summary
- Menentukan severity level (low/medium/high)
- Rekomendasi tindakan
- Rekomendasi obat dengan confidence score

### 2. AI Chatbot
- Chat interaktif dengan MediBot
- Conversation history
- Respons dalam Bahasa Indonesia
- Medical information yang akurat

### 3. Medicine Information
- Detail informasi obat
- Dosis yang direkomendasikan
- Kontraindikasi
- Efek samping

---

## 🎨 UI Components

### ChatbotWidget
- Floating button di kanan bawah
- Chat window yang smooth
- Real-time messaging
- Auto-scroll
- Loading indicators
- Timestamp untuk setiap message

### HomeScreen Integration
ChatbotWidget sudah diintegrasikan ke HomeScreen:
```tsx
<ChatbotWidget />
```

---

## 🔐 Security

- JWT authentication untuk semua endpoints
- Role-based access control (admin, patient)
- API key tersimpan aman di environment variables
- Input validation
- AI logs tersimpan di database

---

## 📊 Database Integration

Semua interaksi AI dicatat di table `aiLogs`:
- Input text dari user
- Output text dari AI
- Timestamp
- Relation ke consultation

---

## 🚀 Usage Examples

### Analyze Consultation
```typescript
import { analyzeSymptoms } from '@/lib/geminiService';

const result = await analyzeSymptoms(consultationId, token);
console.log(result.aiAnalysis);
```

### Chat with MediBot
```typescript
import { chatWithMediBot } from '@/lib/geminiService';

const response = await chatWithMediBot({
  message: "Apa gejala demam berdarah?",
  conversationHistory: []
}, token);
```

### Get Medicine Info
```typescript
import { getMedicineInfo } from '@/lib/geminiService';

const info = await getMedicineInfo("Paracetamol", token);
console.log(info.aiInfo);
```

---

## 🐛 Troubleshooting

### Error: Missing API Key
Solution: Pastikan `GEMINI_API_KEY` sudah diset di `.env`

### Error: 401 Unauthorized
Solution: Periksa JWT token, pastikan user sudah login

### Error: Cannot find module '@google/generative-ai'
Solution: Run `npm install @google/generative-ai`

---

## 📱 Next Steps

1. ✅ Install dependencies
2. ✅ Setup environment variables
3. 🔄 Get Gemini API key dari Google AI Studio
4. 🔄 Test API endpoints
5. 🔄 Test ChatbotWidget di homepage

---

## 📞 Support

Untuk bantuan lebih lanjut, lihat dokumentasi:
- Gemini API: https://ai.google.dev/docs
- Next.js API Routes: https://nextjs.org/docs/api-routes
- Prisma: https://www.prisma.io/docs
