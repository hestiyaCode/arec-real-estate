import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import Contact from "@/models/contact";

// --- GET Method: Leads fetch karne ke liye (Admin Panel ke liye) ---
export async function GET() {
  try {
    await connectDB();
    const leads = await Contact.find({}).sort({ createdAt: -1 }); // Latest leads upar ayengi
    return NextResponse.json({ success: true, data: leads }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch leads" }, { status: 500 });
  }
}

// --- POST Method: Jo aapne pehle likha tha (Form submit ke liye) ---
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { username, phoneNumber, occupation } = body;

    if (!username || !phoneNumber || !occupation) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await Contact.create({ username, phoneNumber, occupation });
    return NextResponse.json({ message: "Data saved successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error, please try again." }, { status: 500 });
  }
}