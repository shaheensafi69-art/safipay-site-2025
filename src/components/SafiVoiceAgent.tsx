'use client';
import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Loader2, X, MessageSquare, Sparkles } from 'lucide-react';
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
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const recognitionRef = useRef<any>(null);

  const SAFI_PROMPT = `You are the official voice assistant of SafiPay. Project Details: Partners with Wallester AS and Ding. Services: Virtual VISA, IBAN, E-SIM. Founder: Shaheen Safi. Rules: Short answers, 8 languages support. Answer in the same language as user.`;

  // اتصال به Groq
  const getAIResponse = async (text: string) => {
    setIsThinking(true);
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer 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`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "system", content: SAFI_PROMPT }, { role: "user", content: text }],
          max_tokens: 150
        })
      });
      const data = await response.json();
      const answer = data.choices[0].message.content;
      setAiResponse(answer);
      speak(answer);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsThinking(false);
    }
  };

  // پخش صدا
  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (/[آ-ی]/.test(text)) utterance.lang = 'fa-IR';
    else utterance.lang = 'en-US';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser not supported");

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = 'fa-IR';
    recognitionRef.current.onstart = () => setIsListening(true);
    recognitionRef.current.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      getAIResponse(result);
    };
    recognitionRef.current.onend = () => setIsListening(false);
    recognitionRef.current.start();
  };

  return (
    <div className="fixed bottom-6 left-6 z-[999] flex flex-col items-start">
      
      {/* صفحه چت که باز می‌شود */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-72 md:w-80 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-amber-500/20 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="p-4 bg-amber-500 flex justify-between items-center">
              <div className="flex items-center gap-2 text-black font-black text-xs italic">
                <Sparkles size={14} /> SAFI VOICE AI
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black hover:rotate-90 transition-transform">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-5 space-y-4 max-h-60 overflow-y-auto">
              {transcript && (
                <div className="text-right">
                  <p className="inline-block bg-amber-500/10 text-amber-500 text-[11px] p-2 rounded-xl rounded-tr-none border border-amber-500/20">
                    {transcript}
                  </p>
                </div>
              )}
              {aiResponse && (
                <div className="text-left">
                  <p className="inline-block bg-white/5 text-gray-300 text-[11px] p-3 rounded-xl rounded-tl-none border border-white/5 leading-relaxed">
                    {aiResponse}
                  </p>
                </div>
              )}
              {isThinking && <Loader2 className="animate-spin text-amber-500 mx-auto" size={16} />}
            </div>

            <div className="p-4 border-t border-white/5 text-center">
              <button 
                onClick={handleMicClick}
                className={`w-full py-3 rounded-xl flex justify-center items-center gap-2 transition-all ${isListening ? 'bg-red-500 animate-pulse' : 'bg-white/5 hover:bg-white/10 text-white'}`}
              >
                {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {isListening ? 'Listening...' : 'Push to Talk'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* آیکون کوچک اصلی (سمت چپ) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-110 transition-all duration-300 group relative"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        )}
      </button>
    </div>
  );
}