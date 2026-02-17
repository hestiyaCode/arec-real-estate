import connectDB from "../../../lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newBlog = await Blog.create(data);
    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}