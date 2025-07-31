import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Welcome to the Admin Dashboard",
        description: "This is a protected route accessible only by admins.",
        status: "success"
    })
}