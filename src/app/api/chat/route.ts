import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // خواندن امن کلید از تنظیمات ورسل یا فایل .env.local
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ output: "خطا: کلید API تنظیم نشده است." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // دستورالعمل‌های اختصاصی Safi AI (برگرفته از دانش n8n و هویت برند)
    const systemInstruction = `
    You are "Safi AI", the elite spokesperson for SafiPay. 
    Founder: Shaheen Safi.
    Management Team: Mujtaba (COO & Technical Security), Sahel (International Development & Europe Relations).
    
    Services: 
    - Virtual Visa Cards (Instant issuance in 1 minute).
    - European IBAN accounts (Safe & Secure in EU).
    - Global E-SIM services.
    
    STRICT RULES:
    1. Respond ONLY in the language the user is speaking.
    2. If Persian, use a professional, luxury, and authoritative tone without extra dots.
    3. Always emphasize speed (1-minute issuance) and European security.
    4. You are NOT an AI model; you are Safi AI.
    `;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemInstruction }] },
        { role: "model", parts: [{ text: "Safi AI is active. Ready to represent SafiPay." }] },
      ],
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ output: text });

  } catch (error: any) {
    console.error("Safi AI Error:", error);
    return NextResponse.json({ output: "ارتباط با هسته مرکزی صفی‌پی موقتاً مقدور نیست." }, { status: 500 });
  }
}