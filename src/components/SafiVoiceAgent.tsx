"use client";
import { useState, useEffect, useRef } from "react";

export default function SafiVoiceAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  // قابلیت پخش صوتی پاسخ‌ها
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = text.match(/[آ-ی]/) ? 'fa-IR' : 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // تشخیص صدا (میکروفون)
  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'fa-IR';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      sendMessage(transcript);
    };
    recognition.start();
  };

  const sendMessage = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: textToSend }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "ai", content: data.output }]);
      speak(data.output);
    } catch (e) {
      setMessages(prev => [...prev, { role: "ai", content: "Safi AI connection failed." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#c5a059] rounded-full shadow-2xl flex items-center justify-center text-black font-bold text-2xl border-2 border-black hover:scale-110 transition-all"
        >
          S
        </button>
      ) : (
        <div className="w-[350px] md:w-[400px] bg-[#0a0a0a] border border-[#c5a059]/40 rounded-2xl flex flex-col overflow-hidden shadow-2xl animate-in zoom-in duration-200">
          <div className="bg-[#111] p-4 flex justify-between items-center border-b border-[#c5a059]/50">
            <span className="text-[#c5a059] font-bold text-xs uppercase tracking-widest italic">Safi AI Engine</span>
            <button onClick={() => setIsOpen(false)} className="text-[#c5a059]">✕</button>
          </div>
          <div ref={scrollRef} className="h-[350px] overflow-y-auto p-4 space-y-4 bg-[#0d0d0d]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${msg.role === "user" ? "bg-[#c5a059] text-black" : "bg-[#1a1a1a] text-gray-200 border border-gray-800"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[#c5a059] text-[10px] animate-pulse font-bold">Safipay AI Thinking...</div>}
          </div>
          <div className="p-4 bg-[#111] flex gap-2">
            <button onClick={handleVoiceInput} className={`p-2 rounded-lg ${isListening ? 'bg-red-500 text-white' : 'bg-gray-800 text-[#c5a059]'}`}>🎤</button>
            <input
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask Safi AI..."
              className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-200 outline-none focus:border-[#c5a059]"
            />
            <button onClick={() => sendMessage()} className="text-[#c5a059]">➤</button>
          </div>
        </div>
      )}
    </div>
  );
}