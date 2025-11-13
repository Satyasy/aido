import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./jwt";

const PUBLIC_PATHS = ["/api/v1/auth/login", "/api/v1/auth/register"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const token = req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = verifyJwt(token);
  if (!decoded) {
    return NextResponse.json(
      { error: "Invalid token or expired token" },
      { status: 401 }
    );
  }

  if (pathname.startsWith("api/v1/admin") && decoded.role !== "admin") {
    return NextResponse.json(
      { error: "Forbidden: Admins only" },
      { status: 403 }
    );
  }

  if (pathname.startsWith("api/v1/patient") && decoded.role !== "patient") {
    return NextResponse.json(
      { error: "Forbidden: Patients only" },
      { status: 403 }
    );
  }

  return NextResponse.next();
}

export function withAuth(
  handler: (req: NextRequest, context?: any) => Promise<NextResponse>,
  roles: string[] = []
) {
  return async (req: NextRequest, context?: any) => {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded = verifyJwt(token);
    if (!decoded) {
      return NextResponse.json(
        { error: "Invalid token or expired token" },
        { status: 401 }
      );
    }

    if (roles.length && !roles.includes(decoded.role)) {
      return NextResponse.json(
        { error: "Forbidden: Insufficient permissions" },
        { status: 403 }
      );
    }

    (req as any).user = decoded;

    return handler(req, context);
  };
}

export const config = {
    matcher: [
        "/api/v1/:path*",
    ],
}
