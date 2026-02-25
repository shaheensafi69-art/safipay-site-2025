'use client';
import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Loader2, X, MessageSquare, Sparkles, Send, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function SafiVoiceAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [inputText, setInputText] = useState('');
  
  // سیستم هوشمند تشخیص ۸ زبان در پرامپت اصلی
  const [messages, setMessages] = useState<any[]>([
    { 
      role: "system", 
      content: `You are the official assistant of SafiPay. Founded by Shaheen Safi. 
      STRICT RULES:
      1. Detect the user's language automatically.
      2. Respond ONLY in the same language the user used (Persian, Pashto, English, Arabic, Turkish, Russian, German, Uzbek).
      3. Never use extra dots (...) between words. 
      4. Keep answers professional, concise, and friendly.
      5. Information: Partners are Wallester AS and Ding. Services: Virtual VISA, IBAN, E-SIM.` 
    }
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // سیستم سخنگو با تشخیص خودکار لهجه (Voice Accent Detector)
  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // تشخیص زبان برای انتخاب لهجه درست
    if (/[آ-ی]/.test(text)) {
      utterance.lang = 'fa-IR'; // فارسی و پشتو
    } else if (/[а-яА-Я]/.test(text)) {
      utterance.lang = 'ru-RU'; // روسی
    } else if (/[a-zA-Z]/.test(text)) {
      utterance.lang = 'en-US'; // انگلیسی و آلمانی
    } else if (/[ء-ي]/.test(text)) {
      utterance.lang = 'ar-SA'; // عربی
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const getAIResponse = async (userText: string) => {
    if (!userText.trim()) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setIsThinking(true);
    setInputText('');

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await response.json();
      const answer = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: "assistant", content: answer }]);
      speak(answer);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error. Please check your internet (Turn off VPN if needed)." }]);
    } finally {
      setIsThinking(false);
    }
  };

  // مدیریت میکروفون با تشخیص خودکار زبان محیطی (Language Detector)
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser not supported");

    recognitionRef.current = new SpeechRecognition();
    
    // تنظیم خودکار بر اساس لوکیشن سایت (en/fa/ps)
    const currentPath = window.location.pathname;
    if (currentPath.includes('/en')) recognitionRef.current.lang = 'en-US';
    else if (currentPath.includes('/ps')) recognitionRef.current.lang = 'ps-AF';
    else recognitionRef.current.lang = 'fa-IR';

    recognitionRef.current.continuous = false;
    
    recognitionRef.current.onstart = () => setIsListening(true);
    recognitionRef.current.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      getAIResponse(transcript);
    };
    recognitionRef.current.onerror = () => setIsListening(false);
    recognitionRef.current.onend = () => setIsListening(false);
    
    recognitionRef.current.start();
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            className="mb-4 w-80 md:w-96 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-amber-500/20 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[550px]"
          >
            {/* Header */}
            <div className="p-5 bg-amber-500 flex justify-between items-center shrink-0 shadow-lg">
              <div className="flex items-center gap-2 text-black font-black text-[10px] tracking-widest uppercase italic">
                <Sparkles size={14} fill="black" /> Safi AI Multilingual
              </div>
              <div className="flex gap-3">
                <button 
                   onClick={() => setMessages([messages[0]])} 
                   className="text-black/50 hover:text-black transition-colors"
                   title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-black hover:scale-110 transition-transform"><X size={20} /></button>
              </div>
            </div>

            {/* Chat Body */}
            <div ref={chatContainerRef} className="p-6 space-y-4 overflow-y-auto flex-grow bg-white/[0.01] custom-scrollbar scroll-smooth">
              {messages.filter(m => m.role !== 'system').map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-amber-500 text-black rounded-tr-none font-medium' 
                      : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5 italic'
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isThinking && (
                <div className="flex items-center gap-2 text-amber-500/50 text-[10px] italic">
                  <Loader2 size={12} className="animate-spin" /> Safi AI is processing...
                </div>
              )}
            </div>

            {/* Input & Mic Section */}
            <div className="p-5 bg-black/40 border-t border-white/5 space-y-3 shrink-0">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-1 focus-within:border-amber-500/50 transition-all shadow-inner">
                <input 
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && getAIResponse(inputText)}
                  placeholder="Ask in any language..."
                  className="flex-grow bg-transparent border-none text-[11px] text-white focus:outline-none py-3 placeholder:text-white/20"
                />
                <button 
                  onClick={() => getAIResponse(inputText)} 
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              
              <button 
                onClick={isListening ? () => recognitionRef.current.stop() : handleVoiceInput}
                className={`w-full py-4 rounded-2xl flex justify-center items-center gap-3 transition-all duration-300 ${
                  isListening 
                    ? 'bg-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                    : 'bg-amber-500 text-black hover:bg-amber-400 font-black shadow-lg shadow-amber-500/20'
                }`}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  {isListening ? 'Listening...' : 'Push to Talk'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-amber-500 text-black shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/10"
      >
        {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-white border-4 border-amber-500 shadow-sm"></span>
          </span>
        )}
      </button>
    </div>
  );
}