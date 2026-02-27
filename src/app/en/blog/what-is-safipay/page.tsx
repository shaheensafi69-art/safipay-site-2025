'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, Zap, Globe2, ArrowRight, 
  Lock, Landmark, CreditCard, ChevronDown,
  Users, BarChart
} from 'lucide-react';

export default function WhatIsSafiPay() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 animate-fade-in">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Official Statement 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic leading-none">
            REDEFINING <br />
            <span className="text-[#D4AF37]">DIGITAL FINANCE</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-12">
            SafiPay is not just a digital wallet; it is a high-performance financial ecosystem engineered in Europe. We bridge the gap between traditional banking security and the lightning-fast speed of modern FinTech, empowering global citizens to transcend financial borders.
          </p>

          <div className="flex flex-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
              Discover Our Power
            </button>
          </div>
        </div>
      </section>

      {/* The Core Pillars - Why We Lead */}
      <section className="py-24 px-6 z-10 relative bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic italic uppercase">
                Why the Elite <br />Choose <span className="text-[#D4AF37]">SafiPay</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Lock size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Institutional Security</h4>
                    <p className="text-gray-500">Regulated under European Union financial standards, ensuring your assets are protected by the world's most rigorous compliance frameworks.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Zero-Latency Issuance</h4>
                    <p className="text-gray-500">Forget weeks of waiting. At SafiPay, virtual cards and IBAN accounts are issued in under 60 seconds. Speed is our fundamental promise.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Direct EU IBAN</h4>
                    <p className="text-gray-500">A legitimate European bank account in your name. Send and receive SEPA transfers as if you were living in Brussels or Berlin.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
              <div className="glass-card rounded-[3rem] p-4 border border-white/10 relative overflow-hidden">
                 <Image 
                  src="/blog/what-is-safipay/hero.jpg" 
                  alt="SafiPay Core Technology" 
                  width={800} height={800}
                  className="rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">200+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Countries Supported</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">1min</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Activation Time</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">100%</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">EU Compliance</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">24/7</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision Callout */}
      <footer className="py-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-10 relative text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase italic">A Legacy in the Making</h2>
          <p className="text-gray-400 text-lg mb-12 italic">
            "We didn't build SafiPay to be another app on your phone. We built it to be the key that unlocks the global economy for everyone, regardless of where they were born."
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto mb-4" />
          <div className="text-white font-bold tracking-widest uppercase">The SafiPay Leadership Team</div>
        </div>
      </footer>

    </main>
  );
}