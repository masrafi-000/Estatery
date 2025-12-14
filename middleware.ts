import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Direct /admin block
  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // 2. Protect admin dashboard
  if (pathname.startsWith("/dashboard/admin")) {
    const { data: session } = await authClient.getSession();

    if (!session) {
      return NextResponse.redirect(new URL("/admin-login", req.url));
    }

    // Role guard
    if (session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/admin/:path*"],
};