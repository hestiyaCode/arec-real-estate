import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { phoneNumber } = await req.json();
    const customerId = process.env.MC_CUSTOMER_ID;
    const authToken = process.env.MC_AUTH_TOKEN;

    if (!phoneNumber) {
      return NextResponse.json({ success: false, message: "Phone number is required" }, { status: 400 });
    }

    const url = `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=${customerId}&flowType=SMS&mobileNumber=${phoneNumber}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'authToken': authToken?.trim(),
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log("Send OTP API Response:", data);

    // FIX: Check for both string "200" and number 200
    if (data.responseCode == 200) { 
      return NextResponse.json({
        success: true, // This is the key for the frontend
        verificationId: data.data?.verificationId,
        message: "OTP Sent Successfully"
      });
    } else {
      return NextResponse.json({
        success: false,
        message: data.message || "Provider failed to send OTP",
        details: data
      }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error", error: error.message }, { status: 500 });
  }
}