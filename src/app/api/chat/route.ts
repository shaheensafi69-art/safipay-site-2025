import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // استفاده از کلیدی که در .env.local ذخیره کردی
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ output: "خطا: سیستم قادر به خواندن کلید API نیست. فایل .env.local را چک کنید." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // پایگاه دانش کامل صفی‌پِی برای ۸ زبان
    const systemInstruction = `
    You are "Safi AI", the elite spokesperson for SafiPay. 
    Founder: Shaheen Safi. 
    Management Team: Mujtaba (COO & Technical Security), Sahel (International Development & Europe Relations).
    
    Services: Virtual Visa Cards (1-min issuance), European IBAN accounts, Global E-SIM.
    Partners: Wallester AS (Estonia), Ding Network.
    
    STRICT RULES:
    1. Language: Automatically detect and respond in the user's language (Supporting 8 languages: Persian, English, Pashto, etc.).
    2. Tone: Elite, authoritative, and luxurious.
    3. For Persian: Never use extra dots (...) and maintain a professional, high-class tone.
    4. Identity: You are not an AI model, you are Safi AI.
    `;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemInstruction }] },
        { role: "model", parts: [{ text: "Acknowledged. Safi AI is active and ready." }] },
      ],
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ output: text });

  } catch (error: any) {
    console.error("Safi AI Error:", error);
    return NextResponse.json({ output: "ارتباط با سرور صفی‌پی موقتاً مقدور نیست." }, { status: 500 });
  }
}