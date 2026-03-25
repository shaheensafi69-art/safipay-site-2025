"use client";

import React, { useState, useEffect } from 'react';
import { createClientSideSupabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const supabase = createClientSideSupabase();
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg('Password updated successfully! Redirecting...');
        setTimeout(() => router.push('/en/user/login'), 2000);
      }
    } catch (err) {
      setErrorMsg('Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020202] relative overflow-hidden font-sans antialiased selection:bg-yellow-500/30 text-left" dir="ltr">
      
      {/* --- Galaxy Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000_100%)]"></div>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 2}px`, height: `${Math.random() * 2}px`,
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* --- Landscape Box --- */}
      <div className="relative z-10 max-w-4xl w-[90%] bg-black/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden flex flex-col md:flex-row min-h-[520px]">
        
        {/* --- Left Side: Security Badge --- */}
        <div className="w-full md:w-5/12 p-10 flex flex-col justify-between bg-white/[0.02] border-r border-white/5 relative group">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-black border border-yellow-500/20 rounded-2xl flex items-center justify-center mb-10 shadow-lg">
              <img src="/logo.png" alt="SafiPay" className="w-10 h-10 object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-4">
              Set New <span className="text-yellow-500 italic">Security</span>.
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
              Choose a strong, unique password to ensure your international assets remain under your full control.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-700 font-bold uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            Encrypted Session
          </div>
        </div>

        {/* --- Right Side: Reset Form --- */}
        <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center">
          
          {/* --- The Shy Monkey (Covers eyes on focus) --- */}
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
              {/* Hands covering eyes */}
              <div className={`absolute inset-0 flex justify-between px-0.5 transition-all duration-500 ease-in-out ${isPasswordFocused ? 'translate-y-1' : 'translate-y-16 opacity-0'}`}>
                <div className="w-8 h-10 bg-[#4a2e16] rounded-t-2xl border-2 border-[#2a1a0a] shadow-lg"></div>
                <div className="w-8 h-10 bg-[#4a2e16] rounded-t-2xl border-2 border-[#2a1a0a] shadow-lg"></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <header className="mb-6">
              <h3 className="text-xl font-bold text-white">Reset Password</h3>
              <p className="text-gray-500 text-[11px]">Please enter and confirm your new password.</p>
            </header>

            {errorMsg && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] text-center">{errorMsg}</div>}
            {successMsg && <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-[10px] text-center">{successMsg}</div>}

            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/5 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:border-yellow-500/40 transition-all text-sm placeholder:text-gray-700"
                  placeholder="New Password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-yellow-500">
                  {showPassword ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                  : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                </button>
              </div>

              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/5 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:border-yellow-500/40 transition-all text-sm placeholder:text-gray-700"
                placeholder="Confirm New Password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black py-4 rounded-xl mt-4 transition-all active:scale-95 disabled:opacity-50 text-[11px] uppercase tracking-widest"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;