import connectDB from "../../../../lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    
    // FIX: Next.js 15 mein params ko await karna compulsory hai
    const resolvedParams = await params; 
    const id = resolvedParams.id;

    if (!id) {
      return NextResponse.json({ success: false, message: "ID missing" }, { status: 400 });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found in DB" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error("DEBUG API ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}