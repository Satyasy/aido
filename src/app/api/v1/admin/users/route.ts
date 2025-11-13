import { prisma } from '../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '../../lib/middleware';

// GET handler
async function getHandler(req: NextRequest) {
  const users = await prisma.users.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
  return NextResponse.json(users);
}

// POST handler
async function postHandler(req: NextRequest) {
  const { email, passwordHash, role } = await req.json();
  if (!email || !passwordHash || !role) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }
  const newUser = await prisma.users.create({
    data: { email, passwordHash, role },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}

export const GET = withAuth(getHandler, ['admin']);
export const POST = withAuth(postHandler, ['admin']);