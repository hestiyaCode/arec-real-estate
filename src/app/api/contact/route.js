import connectDB from "@/lib/db";

import { NextResponse } from "next/server";
import Contact from "@/models/contact";
export async function POST(req) {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Get data from frontend
    const body = await req.json();
    const { username, phoneNumber, occupation } = body;

    // 3. Simple Validation
    if (!username || !phoneNumber || !occupation) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // 4. Create new entry in Database
    await Contact.create({ username, phoneNumber, occupation });

    return NextResponse.json(
      { message: "Data saved successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error, please try again." },
      { status: 500 }
    );
  }
}