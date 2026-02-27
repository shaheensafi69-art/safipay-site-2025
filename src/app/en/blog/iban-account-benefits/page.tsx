'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  Landmark, ArrowRight, ShieldCheck, 
  Zap, ChevronRight, Globe, Layers
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IbanBenefitsPage() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const isRtl = lang === 'fa';

  return (
    <main className="min-h-screen bg-[#000] text-white selection:bg-blue-500 overflow-x-hidden">
      
      {/* Hero Section - The Financial Bridge */}
      <section className="relative h-[90vh] flex items-center pt-20">
        <div className="absolute right-0 top-0 w-full h-full z-0 opacity-40">
          <Image 
            src="/blog/iban-account-benefits/hero.jpg" 
            alt="SafiPay European IBAN" 
            fill 
            className="object-cover object-right grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-black tracking-[0.5em] text-[10px] uppercase">Elite Banking</span>
          </motion.div>

          <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-12">
            European <br />
            <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '2px white' }}>IBAN Account</span>
          </h1>

          <div className="max-w-2xl">
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light italic">
              "Connecting the Afghan spirit to the European financial heart. We provide more than an account; we provide a gateway to the world." [cite: 2026-02-25]
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Content Grid */}
      <section className="relative pb-40 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Sidebar: Sahel's Desk */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Globe size={200} />
                  </div>
                  <h3 className="text-blue-500 font-black text-xs uppercase tracking-widest mb-6">International Relations</h3>
                  <p className="text-gray-300 italic leading-relaxed mb-8 relative z-10">
                    "Under our international development strategy, SafiPay ensures your IBAN is fully SEPA-compliant, allowing for instant global transfers." [cite: 2026-02-25]
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center font-bold text-black shadow-lg">S</div>
                    <div>
                      <p className="font-bold text-white">Sahel</p>
                      <p className="text-[9px] text-gray-500 uppercase tracking-tighter">Global Partnerships Manager</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5">
                    <p className="text-3xl font-black text-blue-500">1m</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Issuance</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5">
                    <p className="text-3xl font-black text-blue-500">EU</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Regulated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Article Content */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-24">
              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <Landmark size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Beyond Borders</h2>
                </div>
                
                <p className="text-gray-400 text-xl leading-[2.2] text-justify">
                  SafiPay is breaking the financial isolation of Afghanistan. By providing a dedicated European IBAN, we enable you to send and receive funds through the **SEPA network** with the same speed as a citizen in Berlin or Paris. No intermediaries, no hidden delays. Just direct access to the global economy, secured by **Mujtaba's** technical fortress. [cite: 2026-02-25]
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                  <div className="p-10 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-blue-500/30 transition-all duration-500">
                    <Zap className="text-blue-500 mb-6" size={32} />
                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight italic">Instant SEPA</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Transactions that move at the speed of thought. 100% digital, 100% fast. [cite: 2026-02-25]</p>
                  </div>
                  <div className="p-10 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-blue-500/30 transition-all duration-500">
                    <ShieldCheck className="text-blue-500 mb-6" size={32} />
                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight italic">Mujtaba Matrix</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Every account is protected by military-grade encryption and EU-level security. [cite: 2026-02-25]</p>
                  </div>
                </div>
              </div>

              {/* Founder's Vision Callout */}
              <div className="relative py-20 border-y border-white/5 group">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-24 bg-blue-600 rounded-full" />
                <blockquote className="text-3xl md:text-5xl font-extralight italic leading-tight text-white pl-10">
                  "Our mission is simple: To provide the tools of the future to those who were left in the past."
                </blockquote>
                <div className="mt-10 pl-10 flex items-center gap-4">
                  <p className="text-lg font-black tracking-widest uppercase text-blue-500">Shahin Safi</p>
                  <div className="h-[1px] w-12 bg-gray-800" />
                  <p className="text-xs text-gray-500 uppercase font-black">Founder & Visionary</p>
                </div>
              </div>

              {/* Navigation CTA */}
              <div className="pt-20 flex justify-end">
                <Link href={`/${lang}/blog`} className="group flex items-center gap-8">
                  <span className="text-3xl font-black uppercase tracking-tighter italic group-hover:text-blue-500 transition-colors">Back to Encyclopedia</span>
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-700">
                    <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}