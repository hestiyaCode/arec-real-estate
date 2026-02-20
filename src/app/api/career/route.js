import { NextResponse } from 'next/server';
import { put } from '@vercel/blob'; // This is the key for Vercel
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

    // 1. Upload to Vercel Blob instead of writing to disk
    // This avoids the "read-only file system" error
    const blob = await put(file.name, file, {
      access: 'private',
    });

    // 2. Save the URL from the blob into your MongoDB
    const newApplication = await Career.create({
      name,
      email,
      reason,
      resumeUrl: blob.url, // Store the web link to the file
    });

    return NextResponse.json({ 
      message: "Application submitted!", 
      data: newApplication 
    }, { status: 201 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server failed to process file" }, { status: 500 });
  }
}