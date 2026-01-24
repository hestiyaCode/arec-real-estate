import connectDB from "@/lib/db";
import HeroContact from "@/models/herocontact"; // Import name without hyphen
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // 1. Database se connect karein
    await connectDB();

    // 2. Frontend se data receive karein
    const body = await req.json();
    const { username, phoneNumber, occupation } = body;
    // 3. Validation
    if (!username || !phoneNumber || !occupation) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // 4. Database mein save karein
    // Ab kyunki Model aur Frontend fields same hain (username, phoneNumber), 
    // humein map karne ki zaroorat nahi hai.
    await HeroContact.create({ 
        username, 
        phoneNumber, 
        occupation 
    });

    return NextResponse.json(
      { message: "Request received successfully!" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error in hero-contact route:", error);
    return NextResponse.json(
      { message: "Server error, please try again later." },
      { status: 500 }
    );
  }
}