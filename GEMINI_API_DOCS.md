# Gemini AI API Documentation

API endpoints untuk integrasi Gemini AI dengan sistem konsultasi medis AIDOC.

## Endpoints

### 1. Analyze Consultation
Menganalisis gejala pasien dan memberikan diagnosis dengan AI.

**Endpoint:** `POST /api/v1/gemini/analyze`

**Headers:**
```json
{
  "Authorization": "Bearer <jwt_token>",
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "consultationId": 1
}
```

**Response:**
```json
{
  "consultation": {
    "id": 1,
    "userId": 1,
    "diagnosisSummary": "Berdasarkan gejala yang Anda alami...",
    "severity": "medium",
    "createdAt": "2025-11-12T10:00:00.000Z",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "role": "patient"
    },
    "consultationsSymptoms": [...]
  },
  "aiAnalysis": {
    "diagnosisSummary": "...",
    "severity": "medium",
    "recommendations": [
      "Istirahat yang cukup",
      "Minum air putih 8 gelas per hari"
    ],
    "medicineRecommendations": [
      {
        "medicineName": "Paracetamol",
        "reason": "Untuk menurunkan demam",
        "confidenceScore": 0.85
      }
    ]
  },
  "medicineRecommendations": [...]
}
```

---

### 2. Chat with MediBot
Chat dengan AI untuk pertanyaan kesehatan umum.

**Endpoint:** `POST /api/v1/gemini/chat`

**Headers:**
```json
{
  "Authorization": "Bearer <jwt_token>",
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "message": "Apa penyebab sakit kepala?",
  "consultationId": 1,  // optional
  "conversationHistory": [  // optional
    {
      "role": "user",
      "content": "Saya merasa pusing"
    },
    {
      "role": "assistant",
      "content": "Pusing bisa disebabkan oleh berbagai hal..."
    }
  ]
}
```

**Response:**
```json
{
  "response": "Sakit kepala dapat disebabkan oleh berbagai faktor seperti stress, kurang tidur, dehidrasi, atau kondisi medis lainnya. Jika sakit kepala berlanjut, sebaiknya konsultasi dengan dokter.",
  "timestamp": "2025-11-12T10:00:00.000Z"
}
```

---

### 3. Get Medicine Information
Mendapatkan informasi detail tentang obat menggunakan AI.

**Endpoint:** `POST /api/v1/gemini/medicine/info`

**Headers:**
```json
{
  "Authorization": "Bearer <jwt_token>",
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "medicineName": "Paracetamol"
}
```

**Response:**
```json
{
  "medicine": {
    "id": 1,
    "name": "Paracetamol",
    "description": "Obat untuk menurunkan demam dan meredakan nyeri",
    "dosage": "500mg - 1000mg setiap 4-6 jam, maksimal 4000mg per hari",
    "contraindications": "Hindari jika memiliki gangguan fungsi hati",
    "isPrescriptionRequired": false
  },
  "aiInfo": {
    "name": "Paracetamol",
    "description": "...",
    "dosage": "...",
    "contraindications": "...",
    "sideEffects": "Mual, muntah, reaksi alergi (jarang)"
  }
}
```

---

## Setup

### 1. Install Dependencies
```bash
npm install @google/generative-ai
```

### 2. Environment Variables
Tambahkan di file `.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Get Gemini API Key
1. Kunjungi [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Login dengan akun Google
3. Buat API key baru
4. Copy dan paste ke `.env`

---

## Example Usage

### Menganalisis Konsultasi
```javascript
const response = await fetch('/api/v1/gemini/analyze', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    consultationId: 1
  })
});

const data = await response.json();
console.log(data.aiAnalysis);
```

### Chat dengan MediBot
```javascript
const response = await fetch('/api/v1/gemini/chat', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Apa gejala demam berdarah?',
    consultationId: 1
  })
});

const data = await response.json();
console.log(data.response);
```

---

## Error Handling

Semua endpoint mengembalikan error dalam format:
```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

**Common Status Codes:**
- `200` - Success
- `400` - Bad Request (missing required fields)
- `401` - Unauthorized (invalid or missing token)
- `404` - Not Found
- `405` - Method Not Allowed
- `500` - Internal Server Error

---

## Security

- Semua endpoint dilindungi dengan JWT authentication
- Role-based access control (admin, patient)
- API key Gemini disimpan di environment variables
- Input validation untuk mencegah injection attacks

---

## Notes

- Gemini AI responses dalam bahasa Indonesia
- Severity levels: `low`, `medium`, `high`
- Confidence score range: 0.0 - 1.0
- Semua interaksi AI dilog ke database (aiLogs table)
