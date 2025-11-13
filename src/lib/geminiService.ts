// Gemini AI Service untuk Frontend
// Path: src/lib/geminiService.ts

export interface SymptomAnalysisRequest {
  consultationId: number;
}

export interface SymptomAnalysisResponse {
  consultation: any;
  aiAnalysis: {
    diagnosisSummary: string;
    severity: 'low' | 'medium' | 'high';
    recommendations: string[];
    medicineRecommendations: Array<{
      medicineName: string;
      reason: string;
      confidenceScore: number;
    }>;
  };
  medicineRecommendations: any[];
}

export interface ChatRequest {
  message: string;
  consultationId?: number;
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export interface ChatResponse {
  response: string;
  timestamp: string;
}

export interface MedicineInfoRequest {
  medicineName: string;
}

export interface MedicineInfoResponse {
  medicine: {
    id: number;
    name: string;
    description: string;
    dosage: string;
    contraindications: string;
    isPrescriptionRequired: boolean;
  };
  aiInfo: {
    name: string;
    description: string;
    dosage: string;
    contraindications: string;
    sideEffects: string;
  };
}

/**
 * Analyze symptoms with Gemini AI
 */
export async function analyzeSymptoms(
  consultationId: number,
  token?: string
): Promise<SymptomAnalysisResponse> {
  const { refreshTokenIfNeeded } = await import('./authService');
  const authToken = token || await refreshTokenIfNeeded();
  
  if (!authToken) {
    throw new Error('Authentication required. Please login again.');
  }

  const response = await fetch('/api/v1/gemini/analyze', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ consultationId }),
  });

  if (response.status === 401) {
    const { logout } = await import('./authService');
    logout();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    throw new Error('Session expired. Please login again.');
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to analyze symptoms');
  }

  return response.json();
}

/**
 * Chat with AIDOC AI
 */
export async function chatWithAidoc(
  data: ChatRequest,
  token?: string
): Promise<ChatResponse> {
  // If no token provided, try to get and refresh token
  const { refreshTokenIfNeeded } = await import('./authService');
  const authToken = token || await refreshTokenIfNeeded();
  
  if (!authToken) {
    throw new Error('Authentication required. Please login again.');
  }

  const response = await fetch('/api/v1/gemini/chat', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    // Token expired, redirect to login
    const { logout } = await import('./authService');
    logout();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    throw new Error('Session expired. Please login again.');
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to chat with AIDOC');
  }

  return response.json();
}

/**
 * Get medicine information
 */
export async function getMedicineInfo(
  medicineName: string,
  token?: string
): Promise<MedicineInfoResponse> {
  const { refreshTokenIfNeeded } = await import('./authService');
  const authToken = token || await refreshTokenIfNeeded();
  
  if (!authToken) {
    throw new Error('Authentication required. Please login again.');
  }

  const response = await fetch('/api/v1/gemini/medicine/info', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ medicineName }),
  });

  if (response.status === 401) {
    const { logout } = await import('./authService');
    logout();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    throw new Error('Session expired. Please login again.');
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to get medicine info');
  }

  return response.json();
}
