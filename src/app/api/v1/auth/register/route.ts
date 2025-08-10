import { prisma } from "../../lib/prisma";
import hash from "bcryptjs";
import { NextResponse } from "next/server";
import { signJwt } from "../../lib/jwt";

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();

  if (!name || !email || !password || !role) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (!name || !email || !password) {
    return NextResponse.json(
      {
        error: "name, email, and password are required",
        status: "error",
      },
      { status: 400 }
    );
  }

  const existing = await prisma.users.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json(
      { error: "Email already registered" },
      { status: 409 }
    );
  }

  const passwordHash = await hash.hash(password, 10);

  if (role !== "admin" && role !== "patient") {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }
  const user = await prisma.users.create({
    data: {
      name: name,
      email: email,
      passwordHash: passwordHash,
      role: role || "patient",
    },
  });

  const token = signJwt({
    id: user.id,
    name: user.name,
    role: user.role,
  });
  return NextResponse.json(
    {
      success: true,
      message: "User registered successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      type: "Bearer",
      token: token,
    },
    { status: 201 }
  );
}
