import { prisma } from "../../../lib/prisma";
import { withAuth } from "../../../lib/middleware";
import { NextResponse } from "next/server";

async function handler(req: Request, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  if (req.method === "GET") {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } else if (req.method === "PUT") {
    const { email, role } = await req.json();
    if (!email || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { email, role },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(updatedUser);
  } else if (req.method === "DELETE") {
    await prisma.users.delete({
      where: { id: userId },
    });
    return NextResponse.json({ message: "User deleted successfully" });
  } else {
    return NextResponse.json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }
}

export const GET = withAuth(handler, ["admin", "patient"]);