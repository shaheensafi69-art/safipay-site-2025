"use client";

import React, { useState, useEffect } from 'react';
import { createClientSideSupabase } from '@/lib/supabase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const supabase = createClientSideSupabase();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        setErrorMsg('ایمیل یا رمز عبور اشتباه است');
      } else if (data.user) {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setErrorMsg('خطا در اتصال به شبکه');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020202] relative overflow-hidden font-sans antialiased selection:bg-yellow-500/30" dir="rtl">
      
      {/* --- Galaxy Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#151515_0%,#000_100%)]"></div>
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-40 right-1/3 w-0.5 h-0.5 bg-yellow-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
      </div>

      {/* --- Main Box --- */}
      <div className="relative z-10 max-w-4xl w-[90%] bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse min-h-[580px]">
        
        {/* --- Left Branding (Right in RTL) --- */}
        <div className="w-full md:w-5/12 p-10 flex flex-col justify-between bg-white/[0.02] border-b md:border-b-0 md:border-l border-white/5 text-right">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-14 h-14 bg-black border border-yellow-500/20 rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/logo.png" alt="SafiPay" className="w-10 h-10 object-contain" />
              </div>
              <h1 className="text-xl font-black text-white tracking-tighter uppercase">
                Safi<span className="text-yellow-500">Pay</span>
              </h1>
            </div>
            <h2 className="text-2xl font-bold text-white leading-tight mb-4">
              به شبکه <span className="text-yellow-500 italic">جهانی</span> متصل شوید.
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">
              بانکداری بین‌المللی امن برای مردم عزیز افغانستان.
            </p>
          </div>
          <p className="text-[9px] uppercase tracking-widest text-gray-700 font-bold">
            Safi International Capital LTD
          </p>
        </div>

        {/* --- Right Form --- */}
        <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center text-right">
          
          {/* --- Animated Monkey (Safi Mascot) --- */}
          <div className="flex flex-col items-center mb-10 group">
            <div className="relative w-24 h-24">
              <div className="absolute top-6 -left-2 w-6 h-6 bg-[#4a2e16] rounded-full border-2 border-[#2a1a0a]"></div>
              <div className="absolute top-6 -right-2 w-6 h-6 bg-[#4a2e16] rounded-full border-2 border-[#2a1a0a]"></div>
              <div className="absolute inset-0 bg-[#4a2e16] rounded-[2.5rem] border-2 border-[#2a1a0a] shadow-xl pt-5">
                <div className="w-16 h-12 bg-[#d2b48c] rounded-full absolute top-4 left-1/2 -translate-x-1/2 opacity-95 flex justify-center gap-4 pt-3">
                   <div className="w-3.5 h-3.5 bg-white rounded-full relative flex items-center justify-center">
                      <div className={`w-2 h-2 bg-black rounded-full transition-all duration-300 ${showPassword ? 'scale-0' : 'scale-100 translate-y-0.5'}`}></div>
                      <div className={`absolute w-full h-0.5 bg-[#4a2e16] transition-all duration-300 ${showPassword ? 'opacity-100' : 'opacity-0'}`}></div>
                   </div>
                   <div className="w-3.5 h-3.5 bg-white rounded-full relative flex items-center justify-center">
                      <div className={`w-2 h-2 bg-black rounded-full transition-all duration-300 ${showPassword ? 'scale-0' : 'scale-100 translate-y-0.5'}`}></div>
                      <div className={`absolute w-full h-0.5 bg-[#4a2e16] transition-all duration-300 ${showPassword ? 'opacity-100' : 'opacity-0'}`}></div>
                   </div>
                </div>
                <div className="w-4 h-2 border-b-2 border-[#8b5e3c] rounded-full absolute bottom-4 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className={`absolute inset-0 flex justify-between px-0.5 transition-all duration-500 ${showPassword ? 'translate-y-2' : 'translate-y-24 opacity-0'}`}>
                <div className="w-10 h-12 bg-[#4a2e16] rounded-t-2xl border-2 border-[#2a1a0a] shadow-lg"></div>
                <div className="w-10 h-12 bg-[#4a2e16] rounded-t-2xl border-2 border-[#2a1a0a] shadow-lg"></div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-yellow-600/60 mt-4 tracking-[0.3em] uppercase">
              {showPassword ? "سپر حریم خصوصی فعال است" : "صافی مراقب است"}
            </span>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] text-center">
                {errorMsg}
              </div>
            )}

            <div className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/5 text-white py-4 px-5 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.07] transition-all text-sm"
                placeholder="آدرس ایمیل"
              />

              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/5 text-white py-4 px-5 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.07] transition-all text-sm pl-12"
                  placeholder="رمز عبور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-yellow-500 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label 
                className="flex items-center gap-2 cursor-pointer group select-none"
                onClick={() => setRememberMe(!rememberMe)}
              >
                <div className={`w-4 h-4 border border-white/10 rounded transition-all flex items-center justify-center ${rememberMe ? 'bg-yellow-500 border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]' : 'bg-white/5'}`}>
                  {rememberMe && <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                </div>
                <span className={`text-[10px] transition-colors ${rememberMe ? 'text-white' : 'text-gray-500'}`}>مرا به خاطر بسپار</span>
              </label>
              
              <a href="/fa/user/forgot-password" core-title="فراموشی رمز عبور" className="text-[10px] text-yellow-600 hover:text-yellow-500 font-bold transition-all hover:tracking-tighter">
                رمز عبور را فراموش کرده‌اید؟
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] text-black font-black py-4 rounded-xl mt-4 transition-all active:scale-[0.98] disabled:opacity-50 text-[11px] uppercase tracking-widest"
            >
              {loading ? 'در حال بررسی...' : 'ورود به حساب کاربری'}
            </button>
          </form>

          <p className="mt-10 text-center text-[11px] text-gray-500">
            حساب کاربری ندارید؟ <a href="/fa/user/signup" className="text-white font-bold hover:text-yellow-500 transition-colors ml-1 underline underline-offset-4 decoration-yellow-500/30">ایجاد حساب جدید</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;