import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) return NextResponse.json({ output: "Internal Error" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // دستورالعمل مقتدرانه برای تشخیص خودکار زبان
    const systemInstruction = `
    You are "Safi AI", the official elite spokesperson for SafiPay.
    Founder: Shaheen Safi.
    Management: Mujtaba (Security), Sahel (International Relations).
    
    STRICT LANGUAGE RULE:
    1. Identify the language used by the user in their message.
    2. Respond EXCLUSIVELY in that same language.
    3. If they speak French, reply in French. If German, reply in German. If Persian, reply in professional Persian.
    4. Never explain that you are switching languages; just do it naturally.
    5. Maintain a luxury and authoritative tone in every language.
    
    Services: Virtual Visa Cards (1-min issuance), European IBAN, Global E-SIM.
    `;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemInstruction }] },
        { role: "model", parts: [{ text: "Understood. Safi AI will communicate in the user's preferred language with SafiPay's authority." }] },
      ],
    });

    const result = await chat.sendMessage(message);
    return NextResponse.json({ output: result.response.text() });

  } catch (error) {
    return NextResponse.json({ output: "Safi AI Connection Error" }, { status: 500 });
  }
}