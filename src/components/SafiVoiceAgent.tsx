"use client";
import { useState, useEffect, useRef } from "react";
// اگر از کتابخانه‌ای مثل next-intl استفاده می‌کنی، اینجا ایمپورت کن، 
// در غیر این صورت از زبانِ انتخابی سایت که در localStorage یا URL هست استفاده می‌کنیم.

export default function SafiVoiceAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // --- مدیریت زبان ظاهر (UI Language) ---
  // فرض می‌کنیم زبان سایت را از پارامتر زبان یا localStorage می‌خوانیم
  const [lang, setLang] = useState("fa"); 

  useEffect(() => {
    // منطق تشخیص زبان فعلی سایت (بسته به تنظیمات قالب تو)
    const currentLang = document.documentElement.lang || "fa";
    setLang(currentLang);
  }, [isOpen]); // وقتی باز می‌شود چک کند زبان سایت چیست

  const translations: any = {
    fa: {
      header: "هسته مرکزی Safi AI",
      placeholder: "درخواست خود را بنویسید...",
      welcome: "چطور می‌توانم به شما کمک کنم؟",
      questions: [
        { label: "💳 ویزاکارت مجازی", text: "چطور می‌توانم در ۱ دقیقه ویزاکارت مجازی بگیرم؟" },
        { label: "🇪🇺 حساب IBAN", text: "شرایط افتتاح حساب IBAN اروپایی چیست؟" },
        { label: "🌐 خرید E-SIM", text: "سیم‌کارت‌های E-SIM شما در کدام کشورها فعال است؟" }
      ]
    },
    en: {
      header: "Safi AI Engine",
      placeholder: "Type your request...",
      welcome: "How can I assist you today?",
      questions: [
        { label: "💳 Virtual Visa", text: "How can I get a virtual Visa card in 1 minute?" },
        { label: "🇪🇺 IBAN Account", text: "What are the requirements for an EU IBAN?" },
        { label: "🌐 Global E-SIM", text: "Which countries do your E-SIMs support?" }
      ]
    },
    fr: {
      header: "Moteur Safi AI",
      placeholder: "Écrivez votre demande...",
      welcome: "Comment puis-je vous aider ?",
      questions: [
        { label: "💳 Carte Visa", text: "Comment obtenir une carte Visa virtuelle en 1 minute ?" },
        { label: "🇪🇺 Compte IBAN", text: "Quelles sont les conditions pour un IBAN européen ?" },
        { label: "🌐 E-SIM", text: "Dans quels pays vos E-SIM sont-elles actives ?" }
      ]
    }
    // می‌توانی زبان‌های دیگر (آلمانی، ترکی و ...) را هم همین‌جا اضافه کنی
  };

  const t = translations[lang] || translations["en"]; // اگر زبان پیدا نشد، انگلیسی نشان بده

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: textToSend }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, currentLang: lang }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "ai", content: data.output }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "ai", content: "Connection Error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[9999] ${lang === 'fa' ? 'font-sans' : 'font-sans'}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="w-14 h-14 bg-gradient-to-tr from-[#c5a059] to-[#8e6d2f] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all">
          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Safi AI" className="w-8 h-8 invert" />
        </button>
      ) : (
        <div className="w-[350px] md:w-[380px] h-[550px] bg-[#050505] border border-[#c5a059]/30 rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-black/80 backdrop-blur-md flex justify-between items-center border-b border-[#c5a059]/20">
            <span className="text-[#c5a059] font-bold text-[10px] tracking-[2px] uppercase">{t.header}</span>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">✕</button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png'), radial-gradient(circle at center, #1a1a1a 0%, #000 100%)` }}>
            {messages.length === 0 && (
              <div className="text-center mt-6 space-y-5">
                <p className="text-[#c5a059]/80 text-[13px] italic">{t.welcome}</p>
                <div className="flex flex-col gap-2">
                  {t.questions.map((q: any, i: number) => (
                    <button key={i} onClick={() => sendMessage(q.text)} className="bg-white/5 border border-white/10 hover:border-[#c5a059]/50 text-white/80 text-[11px] py-3 px-4 rounded-2xl transition-all text-right backdrop-blur-sm">
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${msg.role === "user" ? "bg-[#c5a059] text-black font-semibold" : "bg-white/10 text-gray-100 border border-white/10"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-black border-t border-white/5 flex gap-2">
            <input
              type="text" value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={t.placeholder}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white outline-none"
            />
            <button onClick={() => sendMessage()} className="w-11 h-11 bg-[#c5a059] rounded-xl flex items-center justify-center text-black"> ➤ </button>
          </div>
        </div>
      )}
    </div>
  );
}