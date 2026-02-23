import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

export async function POST(request) {
  try {
    await dbConnect();
    const formData = await request.formData();
    
    // Handle Image Upload to Vercel Blob
    const imageFile = formData.get("image");
    const blob = await put(imageFile.name, imageFile, {
      access: "public", // Required for public display
    });

    // Save Project Data
    const newProject = await Project.create({
      title: formData.get("title"),
      location: formData.get("location"),
      category: formData.get("category"),
      tag: formData.get("tag"),
      targetYield: formData.get("targetYield"),
      tokenPrice: formData.get("tokenPrice"),
      availableTokens: formData.get("availableTokens"),
      totalValue: formData.get("totalValue"),
      imageUrl: blob.url,
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  const projects = await Project.find({}).sort({ createdAt: -1 });
  return NextResponse.json(projects);
}