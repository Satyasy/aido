import { prisma } from "../../lib/prisma";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { signJwt } from "../../lib/jwt";

export async function POST(req: Request) {
    const { username, password } = await req.json();

    const user = await prisma.user.findFirst({
        where: { name: username }
    })

    if (!user || !(await compare(password, user.password))) {
        return NextResponse.json(
            { error: "Username and password are required" },
            { status: 400 }
        );
    }

    const token = signJwt({
        id: user.id,
        username: user.name,
        role: user.role,
    });

    return NextResponse.json(
        {
            success: true,
            message: "User logged in successfully",
            user: {
                id: user.id,
                username: user.name,
                role: user.role,
            },
            type: "Bearer",
            token: token,
        },
        { status: 200 }
    );
}