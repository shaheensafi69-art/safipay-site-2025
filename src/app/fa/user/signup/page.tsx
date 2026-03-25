"use client";

import React, { useState, useEffect } from 'react';
import { createClientSideSupabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    if (!agreeTerms) {
      setErrorMsg('شما باید با شرایط و قوانین موافقت کنید');
      setLoading(false);
      return;
    }

    try {
      const supabase = createClientSideSupabase();
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            first_name: firstName, 
            last_name: lastName,
            full_name: `${firstName} ${lastName}` 
          },
        },
      });

      if (error) {
        if (error.message.includes("already registered")) {
           setErrorMsg("این ایمیل قبلاً ثبت شده است. لطفاً وارد شوید");
        } else {
           setErrorMsg(error.message);
        }
      } else if (data?.user) {
        setSuccessMsg('حساب کاربری با موفقیت ساخته شد! در حال انتقال...');
        
        setTimeout(() => {
          router.push('/dashboard'); 
        }, 1500);

        setFirstName(''); setLastName(''); setEmail(''); setPassword('');
        setAgreeTerms(false);
      }
    } catch (err) {
      setErrorMsg('خطا در اتصال. لطفاً اینترنت خود را چک کنید');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020202] relative overflow-hidden font-sans antialiased selection:bg-yellow-500/30 text-right" dir="rtl">
      
      {/* --- Galaxy Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000_100%)]"></div>
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 2}px`, height: `${Math.random() * 2}px`,
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* --- Main Landscape Box --- */}
      <div className="relative z-10 max-w-4xl w-[90%] bg-black/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden flex flex-col md:flex-row-reverse min-h-[550px]">
        
        {/* --- Left Branding Section (Now on the Right for RTL) --- */}
        <div className="w-full md:w-5/12 p-10 flex flex-col justify-between bg-white/[0.02] border-b md:border-b-0 md:border-l border-white/5 text-right relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10 transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 bg-black border border-yellow-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                <img src="/logo.png" alt="SafiPay" className="w-10 h-10 object-contain" />
              </div>
              <h1 className="text-xl font-black text-white uppercase tracking-tighter">
                Safi<span className="text-yellow-500">Pay</span>
              </h1>
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-4">
              به شبکه <span className="text-yellow-500 italic">جهانی</span> بپیوندید.
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
              خدمات بانکی بین‌المللی ممتاز برای مردم افغانستان. امن، بدون مرز و آنی.
            </p>
          </div>
          <p className="text-[9px] uppercase tracking-widest text-gray-700 font-bold relative z-10">
            Safi International Capital LTD
          </p>
        </div>

        {/* --- Right Form Section --- */}
        <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center">
          
          {/* --- Animated Monkey Mascot --- */}
          <div className="flex flex-col items-center mb-8 group pointer-events-none">
            <div className="relative w-20 h-20">
              <div className="absolute top-5 -left-2 w-5 h-5 bg-[#4a2e16] rounded-full border-2 border-[#2a1a0a]"></div>
              <div className="absolute top-5 -right-2 w-5 h-5 bg-[#4a2e16] rounded-full border-2 border-[#2a1a0a]"></div>
              <div className="absolute inset-0 bg-[#4a2e16] rounded-[2rem] border-2 border-[#2a1a0a] shadow-xl pt-4">
                <div className="w-14 h-10 bg-[#d2b48c] rounded-full absolute top-3 left-1/2 -translate-x-1/2 flex justify-center gap-3 pt-2.5 border border-[#c19a6b]">
                   <div className="w-3 h-3 bg-white rounded-full relative flex items-center justify-center border border-black shadow-inner">
                      <div className={`w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${isPasswordFocused ? 'scale-0' : 'scale-100 translate-y-0.5'}`}></div>
                      <div className={`absolute w-full h-0.5 bg-[#4a2e16] transition-all duration-300 ${isPasswordFocused ? 'opacity-100' : 'opacity-0'}`}></div>
                   </div>
                   <div className="w-3 h-3 bg-white rounded-full relative flex items-center justify-center border border-black shadow-inner">
                      <div className={`w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${isPasswordFocused ? 'scale-0' : 'scale-100 translate-y-0.5'}`}></div>
                      <div className={`absolute w-full h-0.5 bg-[#4a2e16] transition-all duration-300 ${isPasswordFocused ? 'opacity-100' : 'opacity-0'}`}></div>
                   </div>
                </div>
                <div className="w-3.5 h-1.5 border-b-2 border-[#8b5e3c] rounded-full absolute bottom-3 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className={`absolute inset-0 flex justify-between px-0.5 transition-all duration-500 ${isPasswordFocused ? 'translate-y-1' : 'translate-y-16 opacity-0'}`}>
                <div className="w-8 h-10 bg-[#4a2e16] rounded-t-2xl border-2 border-[#2a1a0a]"></div>
                <div className="w-8 h-10 bg-[#4a2e16] rounded-t-2xl border-2 border-[#2a1a0a]"></div>
              </div>
            </div>
            <span className="text-[9px] font-black text-yellow-600/80 mt-3 tracking-[0.3em] uppercase">
                سپر امنیتی فعال است
            </span>
          </div>

          <form onSubmit={handleSignup} className="space-y-4 text-right">
            {errorMsg && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] text-center animate-pulse">{errorMsg}</div>}
            {successMsg && <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-[10px] text-center">{successMsg}</div>}

            <div className="grid grid-cols-2 gap-4">
              <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/5 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:border-yellow-500/40 focus:bg-white/[0.07] transition-all text-sm placeholder:text-gray-700" placeholder="نام" />
              <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/5 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:border-yellow-500/40 focus:bg-white/[0.07] transition-all text-sm placeholder:text-gray-700" placeholder="نام خانوادگی" />
            </div>

            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/5 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:border-yellow-500/40 focus:bg-white/[0.07] transition-all text-sm placeholder:text-gray-700" placeholder="آدرس ایمیل" />

            <div className="relative group">
              <input type={showPassword ? "text" : "password"} required value={password} 
                onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/5 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:border-yellow-500/40 focus:bg-white/[0.07] transition-all text-sm pl-12 placeholder:text-gray-700" placeholder="رمز عبور امن" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-yellow-500 transition-colors">
                {showPassword ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
              </button>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer pt-2 group select-none">
              <input type="checkbox" className="hidden" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
              <div className={`w-4 h-4 mt-0.5 border border-white/10 rounded-md flex-shrink-0 flex items-center justify-center transition-all ${agreeTerms ? 'bg-yellow-500 border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)]' : 'bg-white/5 group-hover:border-white/20'}`}>
                {agreeTerms && <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="4" d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span className="text-[10px] text-gray-500 leading-tight">با <a href="/terms" className="text-yellow-600 font-bold hover:text-yellow-500 transition-colors">شرایط خدمات</a> و <a href="/privacy" className="text-yellow-600 font-bold hover:text-yellow-500 transition-colors">سیاست حریم خصوصی</a> SafiPay موافقم.</span>
            </label>

            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] text-black font-black py-4.5 rounded-xl mt-6 transition-all active:scale-[0.98] disabled:opacity-50 text-[11px] uppercase tracking-widest disabled:cursor-wait transform hover:scale-[1.01]">
              {loading ? 'در حال بررسی...' : 'ایجاد حساب کاربری'}
            </button>
          </form>

          <p className="mt-10 text-center text-[12px] text-gray-600">
            حساب کاربری دارید؟ <a href="/fa/user/login" className="text-white font-bold hover:text-yellow-500 transition-colors mr-1 underline underline-offset-4 decoration-yellow-500/40">از اینجا وارد شوید</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;