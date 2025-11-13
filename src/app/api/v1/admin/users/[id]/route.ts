import { prisma } from "../../../lib/prisma";
import { withAuth } from "../../../lib/middleware";
import { NextRequest, NextResponse } from "next/server";

// GET handler
async function getHandler(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

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
}

// PUT handler
async function putHandler(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

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
}

// DELETE handler
async function deleteHandler(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  await prisma.users.delete({
    where: { id: userId },
  });
  return NextResponse.json({ message: "User deleted successfully" });
}

export const GET = withAuth(getHandler, ["admin", "patient"]);
export const PUT = withAuth(putHandler, ["admin"]);
export const DELETE = withAuth(deleteHandler, ["admin"]);