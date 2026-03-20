'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ShieldCheck, ExternalLink, Sparkles, MoveRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
// Verwendung der neuen Methode für den Client
import { createBrowserClient } from '@supabase/ssr';

export default function VerifyEmailLandscape() {
  const params = useParams();
  const router = useRouter();
  const locale = params.locale || 'en';

  // Erstellen des Supabase-Clients mit der neuen Methode
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [isResending, setIsResending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleResend = async () => {
    setIsResending(true);
    setStatus('idle');
    
    // Aktuelle Benutzerdaten abrufen, die gerade bestätigt werden
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user?.email) {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: user.email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    } else {
      // Wenn die Session abgelaufen ist, den Benutzer zum Login schicken
      router.push(`/${locale}/login`);
    }
    
    setIsResending(false);
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center px-6 relative overflow-hidden font-sans">
      
      {/* Kosmischer Hintergrund */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-5xl bg-zinc-900/20 border border-white/5 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col md:flex-row min-h-[500px]">
          
          {/* Links: Branding-Bereich */}
          <div className="w-full md:w-[40%] bg-gradient-to-b from-zinc-800/40 to-black p-12 flex flex-col justify-between border-r border-white/5">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  <Sparkles size={20} className="text-black" />
                </div>
                <span className="text-xl font-black italic tracking-tighter uppercase">SAFIPAY</span>
             </div>

             <div className="relative flex justify-center py-10">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-56 h-56 border border-dashed border-amber-500/10 rounded-full"
                />
                <Mail className="text-amber-500 w-24 h-24 relative z-10 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]" />
             </div>

             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                <ShieldCheck size={14} className="text-green-600" /> Ende-zu-Ende verschlüsselt
             </div>
          </div>

          {/* Rechts: Interaktionsbereich */}
          <div className="w-full md:w-[60%] p-12 md:p-20 flex flex-col justify-center bg-black/40">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-[0.85]">
              Identität <br/><span className="text-amber-500 text-6xl md:text-8xl">verifizieren</span>
            </h1>
            <p className="text-zinc-500 text-lg mb-10 max-w-sm leading-relaxed">
              Wir haben einen sicheren Gateway-Link an Ihr Postfach gesendet. Aktivieren Sie Ihren <span className="text-white">Elite-Status</span>, um mit dem internationalen Banking zu beginnen.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://mail.google.com"
                target="_blank"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl hover:bg-amber-500 hover:text-white transition-all shadow-xl active:scale-95"
              >
                POSTFACH ÖFFNEN <ExternalLink size={14} />
              </a>
              
              <button 
                onClick={() => router.push(`/en/user/signup`)}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-6 bg-zinc-900/50 text-zinc-400 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl border border-white/5 hover:border-white/20 transition-all active:scale-95"
              >
                ZURÜCK ZUR REGISTRIERUNG <MoveRight size={14} />
              </button>
            </div>

            {/* Abschnitt für Logik zum erneuten Senden */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-500 text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={14} /> Neuer sicherer Link gesendet!
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-black uppercase tracking-widest">
                    Erneutes Senden fehlgeschlagen. Versuchen Sie es später erneut.
                  </motion.div>
                ) : (
                  <button 
                    onClick={handleResend}
                    disabled={isResending}
                    className="group text-[10px] text-zinc-600 font-bold uppercase tracking-widest hover:text-white transition-all flex items-center gap-2"
                  >
                    {isResending && <Loader2 size={12} className="animate-spin text-amber-500" />}
                    Nicht im Posteingang? <span className="text-amber-500 group-hover:underline">Link erneut senden</span>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}