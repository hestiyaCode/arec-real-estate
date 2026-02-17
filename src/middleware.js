// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("admin_session");
  const { pathname } = request.nextUrl;

  // Agar user dashboard pe ja raha hai aur session nahi hai, toh login pe bhejo
  if (pathname.startsWith("/admin/dashboard") && !session) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Agar user login page pe hai aur session ALREADY hai, toh dashboard pe bhejo
  if (pathname === "/admin/login" && session) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};