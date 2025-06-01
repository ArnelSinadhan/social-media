import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicPaths = ["/login"];
const protectedPaths = ["/home"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("access_token");
  // 🔒 Redirect unauthenticated users from protected routes
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 🔁 Redirect authenticated users away from public routes
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    if (token) {
      const homeUrl = new URL("/home", req.url);
      return NextResponse.redirect(homeUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/login"],
};
