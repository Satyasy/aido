import { prisma } from '../../lib/prisma';
import { NextResponse } from 'next/server';
import { withAuth } from '../../lib/middleware';

async function handler(req: Request) {
  if (req.method === 'GET') {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return NextResponse.json(users);
  } else if (req.method === 'POST') {
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
  } else {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }
}

export const GET = withAuth(handler, ['admin']);