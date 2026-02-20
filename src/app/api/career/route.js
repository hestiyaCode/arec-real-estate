import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import dbConnect from '@/lib/db';
import Career from '@/models/Career';

export async function POST(req) {
  try {
    await dbConnect();
    const formData = await req.formData();
    
    const name = formData.get('name');
    const email = formData.get('email');
    const reason = formData.get('reason');
    const file = formData.get('resume');

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // 1. Process the file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 2. Create a unique filename to prevent overwriting
    const fileName = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
    const filePath = path.join(process.cwd(), 'public/uploads', fileName);

    // 3. Save to local filesystem
    await fs.writeFile(filePath, buffer);

    // 4. Save metadata to MongoDB (using the relative path for the browser)
    const publicPath = `/uploads/${fileName}`;
    const newApplication = await Career.create({
      name,
      email,
      reason,
      resumeUrl: publicPath,
    });

    return NextResponse.json({ 
      message: "Application submitted!", 
      data: newApplication 
    }, { status: 201 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}