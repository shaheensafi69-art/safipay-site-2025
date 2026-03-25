"use client";

import React, { useState, useEffect } from 'react';
import { createClientSideSupabase } from '@/lib/supabase';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const supabase = createClientSideSupabase();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/en/user/reset-password`,
      });

      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg('Reset link sent! Please check your email inbox.');
        setEmail('');
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again later.');
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
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 2}px`, height: `${Math.random() * 2}px`,
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* --- Main Landscape Box (Centered) --- */}
      <div className="relative z-10 max-w-4xl w-[90%] bg-black/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* --- Left Side: Security Message --- */}
        <div className="w-full md:w-5/12 p-10 flex flex-col justify-between bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden group">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-black border border-yellow-500/20 rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/logo.png" alt="SafiPay" className="w-9 h-9 object-contain" />
              </div>
              <h1 className="text-xl font-black text-white tracking-tighter uppercase">
                Safi<span className="text-yellow-500">Pay</span>
              </h1>
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-4">
              Secure <span className="text-yellow-500 italic">Recovery</span>.
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
              Don't worry, it happens to the best of us. We’ll help you get back into your SafiPay account safely.
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/5 relative z-10">
            <p className="text-[10px] uppercase tracking-widest text-gray-700 font-bold">
              Multi-Layer Protection
            </p>
          </div>
        </div>

        {/* --- Right Side: Recovery Form --- */}
        <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center relative">
          
          {/* --- Animated Monkey (Thinking Safi) --- */}
          <div className="flex flex-col items-center mb-10 group pointer-events-none">
            <div className="relative w-20 h-20">
              <div className="absolute top-5 -left-2 w-5 h-5 bg-[#4a2e16] rounded-full border-2 border-[#2a1a0a]"></div>
              <div className="absolute top-5 -right-2 w-5 h-5 bg-[#4a2e16] rounded-full border-2 border-[#2a1a0a]"></div>
              <div className="absolute inset-0 bg-[#4a2e16] rounded-[2rem] border-2 border-[#2a1a0a] shadow-xl pt-4">
                <div className="w-14 h-10 bg-[#d2b48c] rounded-full absolute top-3 left-1/2 -translate-x-1/2 flex justify-center gap-3 pt-2.5 border border-[#c19a6b]">
                   {/* Thinking Eyes */}
                   <div className="w-3 h-3 bg-white rounded-full relative flex items-center justify-center border border-black overflow-hidden shadow-inner">
                      <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
                   </div>
                   <div className="w-3 h-3 bg-white rounded-full relative flex items-center justify-center border border-black overflow-hidden shadow-inner">
                      <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                   </div>
                </div>
                <div className="w-3.5 h-1.5 border-b-2 border-[#8b5e3c] rounded-full absolute bottom-3 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
            <span className="text-[9px] font-black text-yellow-600/80 mt-3 tracking-[0.3em] uppercase">
               Safi is looking for your key
            </span>
          </div>

          <form onSubmit={handleResetRequest} className="space-y-5 relative z-10">
            <header className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">Forgot Password?</h3>
              <p className="text-gray-500 text-xs">Enter your email to receive a secure reset link.</p>
            </header>

            {errorMsg && <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] text-center">{errorMsg}</div>}
            {successMsg && <div className="p-3.5 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-[10px] text-center">{successMsg}</div>}

            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1 font-bold">Account Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/5 text-white py-4 px-5 rounded-xl focus:outline-none focus:border-yellow-500/40 focus:bg-white/[0.07] transition-all text-sm placeholder:text-gray-700"
                placeholder="name@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] text-black font-black py-4.5 rounded-xl mt-4 transition-all active:scale-[0.98] disabled:opacity-50 text-[11px] uppercase tracking-widest"
            >
              {loading ? 'Sending Request...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-10 flex items-center justify-between px-2">
             <a href="/en/user/login" className="text-[11px] text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
                <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Login
             </a>
             <p className="text-[11px] text-gray-600 italic">Security first by SafiPay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;