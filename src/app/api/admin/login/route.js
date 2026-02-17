import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
console.log(username, password);
  // Environment variables se credentials fetch karein
  const storedUsername = process.env.ADMIN_USERNAME;
  const storedPassword = process.env.ADMIN_PASSWORD;

  if (username === storedUsername && password === storedPassword) {
    const response = NextResponse.json({ message: "Login Successful" }, { status: 200 });

    response.cookies.set("admin_session", "is_logged_in", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}