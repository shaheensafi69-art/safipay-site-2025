'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { createClientSideSupabase } from '@/lib/supabase';
import { useRouter, usePathname } from 'next/navigation';
import { Stars, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function UpdatePasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'en';
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const supabase = createClientSideSupabase();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // آپدیت رمز عبور در سوپابیس
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => {
        router.push(`/${lang}/user/login`);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center p-6 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 100] }}>
          <Stars radius={150} count={5000} factor={4} fade speed={1} />
        </Canvas>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[450px] bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
            <ShieldCheck className="text-black w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">
              {isRtl ? 'رمز جدید' : 'NEW PASSWORD'}
            </h1>
            <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]">
              {isRtl ? 'امنیت حساب شما اولویت ماست' : 'SECURE YOUR GATEWAY'}
            </p>
          </div>

          {success ? (
            <div className="space-y-4 animate-pulse">
              <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
                {isRtl ? 'رمز عبور با موفقیت تغییر کرد' : 'PASSWORD UPDATED SUCCESSFULLY'}
              </p>
              <p className="text-zinc-600 text-[10px] uppercase">
                {isRtl ? 'در حال انتقال به صفحه ورود...' : 'REDIRECTING TO LOGIN...'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="w-full space-y-6">
              <div className="relative group text-left">
                <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 transition-colors w-5 h-5`} />
                <input 
                  type="password" required minLength={6}
                  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  placeholder={isRtl ? 'رمز عبور جدید' : 'New Password'}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-7 py-5 outline-none focus:border-amber-500/50 focus:bg-black transition-all text-white font-bold text-sm"
                />
              </div>

              {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tighter">{error}</p>}

              <button 
                type="submit" disabled={loading}
                className="w-full bg-amber-500 text-black font-black py-5 rounded-2xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group"
              >
                <span className="uppercase tracking-widest text-xs">{loading ? 'Updating...' : 'Set New Password'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}