import { prisma } from "../../lib/prisma";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { signJwt } from "../../lib/jwt";

export async function POST(req: Request) {
    const { name, password } = await req.json();

    const user = await prisma.users.findFirst({
        where: { name: name }
    })

    if (!user || !(await compare(password, user.passwordHash))) {
        return NextResponse.json(
            { error: "name and password are required" },
            { status: 400 }
        );
    }

    const token = signJwt({
        id: user.id,
        name: user.name,
        role: user.role,
    });

    return NextResponse.json(
        {
            success: true,
            message: "User logged in successfully",
            user: {
                id: user.id,
                name: user.name,
                role: user.role,
            },
            type: "Bearer",
            token: token,
        },
        { status: 200 }
    );
}