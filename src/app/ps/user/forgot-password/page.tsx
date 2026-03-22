'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import { createClientSideSupabase } from '@/lib/supabase';

export default function ForgotPasswordPage({ params: { lang } }: any) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClientSideSupabase();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // این دستور کاربر را به صفحه تغییر رمز هدایت می‌کند
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/${lang}/user/update-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
    }
    setIsLoading(false);
  };

  const isFa = lang === 'fa';

  return (
    <main className="min-h-screen bg-[#030303] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[150px] rounded-full" />

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm relative z-10 text-center">
        
        <Link href={`/${lang}`} className="block mb-10">
          <Image src="/logo.png" alt="SafiPay" width={45} height={45} className="mx-auto" />
        </Link>

        {submitted ? (
          <div className="space-y-6">
            <CheckCircle2 size={40} className="mx-auto text-amber-500 animate-pulse" />
            <h1 className="text-white text-3xl font-black italic uppercase tracking-tighter">
              {isFa ? 'ایمیل ارسال شد' : 'EMAIL SENT'}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              {isFa 
                ? `لینک بازنشانی رمز عبور به ${email} ارسال گردید. لطفاً صندوق ورودی خود را چک کنید.`
                : `Password reset link sent to ${email}. Check your inbox.`}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <h1 className="text-white text-3xl font-black italic uppercase tracking-tighter">
              {isFa ? 'بازیابی رمز عبور' : 'RESET PASSWORD'}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              {isFa 
                ? 'ایمیل خود را وارد کنید تا لینک بازیابی را دریافت نمایید.'
                : 'Enter your email to receive a password reset link.'}
            </p>

            <form onSubmit={handleResetPassword} className="space-y-5">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" size={16} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isFa ? 'ایمیل تجاری شما' : 'Your Business Email'}
                  required
                  className="w-full h-12 rounded-xl bg-white/[0.02] border border-white/5 text-white pl-12 pr-4 text-xs tracking-widest hover:border-white/10 focus:border-amber-500/50 outline-none transition-all"
                />
              </div>

              {error && <p className="text-red-500 text-[10px] font-bold uppercase">{error}</p>}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl bg-amber-500 text-black font-black text-xs uppercase tracking-widest hover:bg-white shadow-[0_15px_30px_rgba(245,158,11,0.2)] active:scale-95 transition-all"
              >
                {isLoading 
                  ? (isFa ? 'در حال ارسال...' : 'SENDING...') 
                  : (isFa ? 'ارسال لینک بازیابی' : 'SEND RESET LINK')}
              </button>
            </form>

            <Link href={`/${lang}/user/login`} className="block text-[10px] text-zinc-600 font-bold uppercase tracking-widest hover:text-white transition-colors">
              {isFa ? 'بازگشت به صفحه ورود' : 'BACK TO LOGIN'}
            </Link>
          </div>
        )}
      </motion.div>
    </main>
  );
}