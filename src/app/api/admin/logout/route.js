import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

  // Clear the cookie by setting maxAge to 0
  response.cookies.set("admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0), // Sets expiration to the past
    path: "/",
  });

  return response;
}