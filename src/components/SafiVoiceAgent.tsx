"use client";
import { useState, useEffect, useRef } from "react";

export default function SafiVoiceAgent({ currentLang = "en" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ۱. قابلیت تبدیل متن به صدا (Voice Output)
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      // تشخیص خودکار زبان برای لهجه درست صدا
      utterance.lang = text.match(/[آ-ی]/) ? 'fa-IR' : 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // ۲. قابلیت تشخیص صدا (Voice Input/Microphone)
  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("مرورگر شما از قابلیت صوتی پشتیبانی نمی‌کند.");

    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === 'fa' ? 'fa-IR' : 'en-US';
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      handleSendMessage(transcript);
    };
    recognition.start();
  };

  const handleSendMessage = async (textToSend: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: messageText }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, lang: currentLang }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "ai", content: data.output }]);
      speak(data.output); // جواب را صوتی پخش کن
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-[#c5a059] rounded-full shadow-2xl flex items-center justify-center text-black font-bold text-2xl border-2 border-black hover:scale-110 transition-all">S</button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[400px] bg-[#0a0a0a] border border-[#c5a059]/40 rounded-2xl flex flex-col overflow-hidden shadow-2xl animate-in zoom-in duration-200">
          <div className="bg-[#111] p-4 flex justify-between items-center border-b border-[#c5a059]/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#c5a059] rounded-full flex items-center justify-center text-black font-bold text-xs">S</div>
              <span className="text-[#c5a059] font-bold text-xs uppercase tracking-tighter">Safi AI Multi-Agent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#c5a059]">✕</button>
          </div>

          <div ref={scrollRef} className="h-[350px] overflow-y-auto p-4 space-y-4 bg-[#0d0d0d]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${msg.role === "user" ? "bg-[#c5a059] text-black rounded-br-none" : "bg-[#1a1a1a] text-gray-200 border border-gray-800 rounded-bl-none"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#111] border-t border-gray-900 flex gap-2 items-center">
            {/* دکمه میکروفون برای وایس */}
            <button 
              onClick={startListening}
              className={`p-3 rounded-xl transition-all ${isListening ? "bg-red-600 animate-pulse" : "bg-gray-800 text-[#c5a059] hover:bg-gray-700"}`}
            >
              🎤
            </button>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage("")}
              placeholder="..."
              className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-200 outline-none focus:border-[#c5a059]"
            />
            
            <button onClick={() => handleSendMessage("")} className="text-[#c5a059] p-2 hover:scale-110 transition-transform">➤</button>
          </div>
        </div>
      )}
    </div>
  );
}