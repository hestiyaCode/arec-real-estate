import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { verificationId, code } = await req.json();
    
    // Aapka Token (Wahi jo send-otp mein kaam kar raha hai)
    const authToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUIxQ0VGNzlCQkMzQzQwNCIsImlhdCI6MTc3MjE4MTczNywiZXhwIjoxOTI5ODYxNzM3fQ._cCiEQpf-996nj5ka54LJRYSw5e-M3a7C5790JkTF1wPs73e1jvMySL4nQnkgpP2jdG_JQA9pZcXbbc8ZA6RaQ";
    
    // Customer ID (Aapke token ke 'sub' part se extracted)
    const customerId = "C-B1CEF79BBC3C404"; 

    if (!verificationId || !code) {
      return NextResponse.json({ success: false, message: "ID and Code required" }, { status: 400 });
    }

    // URL with ALL parameters (v3 standard)
    const url = `https://cpaas.messagecentral.com/verification/v3/validate?verificationId=${verificationId}&code=${code}&customerId=${customerId}`;

    console.log("Final URL Attempt:", url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'authToken': authToken.trim(),
        'Accept': '*/*'
      }
    });

    const responseText = await response.text();
    console.log("Terminal Log - Status:", response.status);
    console.log("Terminal Log - Body:", responseText);

    if (response.status === 401) {
      return NextResponse.json({ 
        success: false, 
        message: "Auth failed. Token is fine for Send, but maybe blocked for Verify.",
        debug: responseText 
      }, { status: 401 });
    }

    if (!responseText) {
      return NextResponse.json({ success: false, message: "Server returned nothing" }, { status: 500 });
    }

    const data = JSON.parse(responseText);

    return NextResponse.json({
      success: data.responseCode === 200,
      message: data.message || (data.responseCode === 200 ? "Verified" : "Failed"),
      data: data
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}