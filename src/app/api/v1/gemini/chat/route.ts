import { NextResponse } from "next/server";
import { chatWithGemini } from "../../lib/gemini";
import { prisma } from "../../lib/prisma";
import { withAuth } from "../../lib/middleware";

async function handler(req: Request, context?: { user?: any }) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    const { message, consultationId, conversationHistory } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Get user name from context (provided by withAuth middleware)
    const userName = context?.user?.name || undefined;

    // Get response from Gemini with user name
    const response = await chatWithGemini(message, userName, conversationHistory);

    // Log conversation if consultationId is provided
    if (consultationId) {
      await prisma.aiLogs.create({
        data: {
          consultationId,
          inputText: message,
          outputText: response,
        },
      });
    }

    return NextResponse.json(
      {
        response,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error chatting with Gemini:", error);
    return NextResponse.json(
      { error: "Failed to get response", details: error.message },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handler, ["admin", "patient"]);
