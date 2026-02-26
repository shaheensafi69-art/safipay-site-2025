'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ShieldCheck, ArrowRight, 
  Zap, Globe, Lock, CheckCircle2, 
  TrendingUp, Cpu, Landmark 
} from 'lucide-react';
import Link from 'next/link';

export default function FutureOfBankingPage() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const isRtl = lang === 'fa' || lang === 'ps' || lang === 'ar';

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section with Authoritative Entrance Animation */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/blog/future-of-banking/hero.jpg" 
            alt="Future of Digital Banking"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6 text-amber-500 font-black tracking-[0.3em] text-xs uppercase">
              <Cpu size={18} />
              <span>Next-Gen Fintech Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 drop-shadow-2xl">
              Future of Banking; <br/> <span className="text-amber-500 text-4xl md:text-6xl text-left block mt-4">Tradition vs. Modernity</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 -mt-24 relative z-30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#080808] border border-white/5 rounded-[3.5rem] p-8 md:p-20 shadow-2xl backdrop-blur-xl"
          >
            
            {/* Author Profile with SafiPay Logo */}
            <div className="flex flex-wrap justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="absolute -inset-1.5 bg-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center p-3">
                        <img src="/logo.png" alt="SafiPay Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-black text-xl">Safi AI</p>
                    <CheckCircle2 size={18} className="text-blue-500 fill-blue-500/10" />
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">SafiPay Official Spokesperson</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> 2026/02/08</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> 15 Min Read</span>
              </div>
            </div>

            {/* Main Article Body */}
            <article className="space-y-12 text-gray-300 leading-[2.4] text-justify text-lg" dir="ltr">
              
              <p className="text-2xl text-white font-medium mb-12 border-l-4 border-amber-500 pl-6">
                Traditional banking, with its stone walls and long queues, is taking its final breaths. In today’s world, speed is no longer just an advantage; it is the ultimate metric for security and trust. SafiPay was created to redefine these concepts by dissolving physical borders.
              </p>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Zap className="text-amber-500" /> Why Legacy Systems are Failing
              </h2>
              <p>
                The greatest weakness of traditional banks lies in their heavy reliance on human bureaucracy and aging infrastructure. While a bank transfer in legacy systems might take 3 to 5 business days, SafiPay’s modern ecosystem processes transactions across cloud networks with AI-driven supervision in fractions of a second. This is precisely why our founder, <strong>Shaheen Safi</strong>, emphasizes the total elimination of traditional intermediaries.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <TrendingUp className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">Smart Financial Optimization</h4>
                    <p className="text-sm text-gray-500">Utilizing advanced algorithms to minimize fees and maximize remittance speeds within the SEPA network.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <Landmark className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">EU Banking Standards</h4>
                    <p className="text-sm text-gray-500">All our operations are strictly governed by EU financial regulators—a standard that traditional exchanges can never match.</p>
                </motion.div>
              </div>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Lock className="text-amber-500" /> Security: Beyond the Password
              </h2>
              <p>
                In technical security, <strong>Mojtaba (our Head of Security)</strong> has deployed multi-layered protection protocols. From biometric authentication to End-to-End encryption, our goal is to provide a platform where users manage their assets without worrying about sanctions or third-party interference.
              </p>

              <div className="bg-white/[0.02] border-l-4 border-amber-500 p-12 rounded-2xl my-16 text-left">
                <p className="text-white text-xl italic font-light">
                  "The future of banking is in your smartphone, not in stone buildings. At SafiPay, we have placed this power directly in your hands."
                </p>
                <p className="text-amber-500 font-bold mt-4">— Message from Sahel, Director of Int'l Development</p>
              </div>

              <h2 className="text-3xl font-black text-white mb-8">Conclusion: A Leap Toward the Digital Economy</h2>
              <p>
                At SafiPay, we believe that access to the global banking system is a fundamental right. By providing instant IBAN accounts and Visa cards, we have built a bridge connecting the Afghan economy to the heart of Europe and global markets. This is only the beginning of a major transformation in the region's financial structure.
              </p>
            </article>

            {/* Back Button */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg">
                    <ArrowRight size={24} className={isRtl ? "" : "rotate-180"} />
                    Back to SafiPay Encyclopedia
                </span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}