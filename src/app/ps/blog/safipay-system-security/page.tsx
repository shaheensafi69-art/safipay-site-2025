'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  Lock, Terminal, Fingerprint, 
  ArrowLeft, CheckCircle2, 
  Scan, Activity
} from 'lucide-react';
import Link from 'next/link';

export default function SecuritySystemPage() {
  const params = useParams();
  const lang = params?.lang || 'ps';

  return (
    <main className="min-h-screen bg-[#000] text-white selection:bg-blue-600 selection:text-white overflow-hidden font-sans" dir="rtl">
      
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[130px] rounded-full animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase">
              Encrypted Core v2.0 — کوډ شوې هسته
            </span>
          </div>

          <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase italic mb-12 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            پولادي <br />
            <span className="text-transparent hover:text-white transition-colors duration-700 cursor-default" style={{ WebkitTextStroke: '2px white' }}>
              امنیت
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl font-light text-justify opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
              موږ یوازې یو بانک نه یو؛ موږ یو ډیجیټل قلعه یو. د مجتبی تر تخنیکي قوماندې لاندې، SafiPay د اروپایي اتحادیې معیاري پروتوکولونه کاروي ترڅو د افغانستان لپاره مالي محدودیتونه له منځه یوسي.
            </p>
            
            <div className="flex justify-start group">
              <div className="relative w-full max-w-md aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="/blog/safipay-system-security/hero.jpg" 
                  alt="SafiPay Security Architecture" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 flex flex-row-reverse items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">د مجتبی امنیتي شبکه فعاله ده</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="relative py-32 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-12 opacity-0 animate-[fadeIn_0.7s_ease-out_0.5s_forwards]">
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex flex-row-reverse items-center gap-4 mb-6 text-right">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <Fingerprint size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Safi AI</h4>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">رسمي ویاند</p>
                  </div>
                </div>
                <p className="text-md text-gray-400 leading-relaxed mb-6 italic text-justify">
                  "زموږ امنیت د انزوا او نړیوال بازار ترمنځ یو پل دی. مجتبی کوډ خوندي کوي، پداسې حال کې چې ساحل د نړیوالو قوانینو اطاعت تضمینوي."
                </p>
                <div className="flex flex-row-reverse items-center gap-2 text-blue-500 text-xs font-bold justify-start">
                  <CheckCircle2 size={14} className="animate-pulse" /> تایید شوی د SafiPay EU لخوا
                </div>
              </div>

              <div className="space-y-4 text-right">
                <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4">تخنیکي دفاعي لایې</div>
                {['AES-256-GCM کوډ کول', 'TLS 1.3 لوړ امنیت', 'Zero-Knowledge Proofs'].map((tech) => (
                  <div 
                    key={tech} 
                    className="flex flex-row-reverse items-center justify-between p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:translate-x-[-10px] hover:text-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                    <Lock size={14} />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Article Content */}
            <div className="lg:col-span-8 opacity-0 animate-[fadeIn_1s_ease-out_0.7s_forwards]">
              <div className="space-y-24">
                
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tight flex flex-row-reverse items-center gap-4 text-right">
                    <Activity className="text-blue-500" /> د امنیت میتریکس
                  </h2>
                  <p className="text-gray-400 text-lg leading-[2.2] text-justify font-light">
                    په ډیجیټل دور کې، امنیت یوازینۍ معتبره اسعار ده. زموږ د تخنیکي امنیت مدیر، مجتبی، د دفاع یو څو اړخیز سیسټم ډیزاین کړی چې په پټه کار کوي. هره معامله د Safi AI لخوا څارل کیږي، او هره شتمني د اروپایي اتحادیې په تنظیم شوي زیربنا کې ساتل کیږي چې دودیز بانکونه یې په سرعت یا خوندیتوب کې سیالي نشي کولی.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                    <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 hover:translate-y-[-10px] transition-all duration-300 text-right">
                      <Terminal className="text-blue-500 mb-6 mr-auto ml-0" size={32} />
                      <h3 className="text-xl font-bold mb-4 uppercase italic">د نه ماتیدونکي کوډ</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">د مجتبی ټیم د SafiPay شبکې په هر مرکز کې ۲۴/۷ امنیتي ازموینې ترسره کوي ترڅو ۱۰۰٪ ډاډمن عملیات تضمین کړي.</p>
                    </div>
                    
                    <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:translate-y-[-10px] transition-all duration-300 text-right">
                      <Scan className="text-white mb-6 mr-auto ml-0" size={32} />
                      <h3 className="text-xl font-bold mb-4 uppercase italic">د اروپايي اتحادیې څارنه</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">ساحل ډاډ ترلاسه کوي چې ټول پروتوکولونه د ۱۰۰٪ قانوني خوندیتوب لپاره د اروپا SEPA او بانکي مقرراتو سره مدغم شوي دي.</p>
                    </div>
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="relative py-20 border-y border-white/10 group text-right">
                  <span className="absolute top-10 right-0 text-[15rem] font-black opacity-[0.03] leading-none select-none pointer-events-none italic">
                    “
                  </span>
                  <blockquote className="text-3xl md:text-5xl font-light italic leading-tight text-white relative z-10">
                    "موږ هر افغان ته په خپل جیب کې یو اروپایي صندق ورکوو. سرعت زموږ وسله ده او امنیت زموږ زغره."
                  </blockquote>
                  <div className="mt-12 flex flex-row-reverse items-center gap-6 justify-start">
                    <div className="w-16 h-[2px] bg-blue-600 group-hover:w-24 transition-all duration-500" />
                    <p className="text-xl font-bold tracking-widest uppercase">شاهین صافی — بنسټ ایښودونکی</p>
                  </div>
                </div>

                {/* Back Link */}
                <div className="pt-20 text-right">
                  <Link href={`/${lang}/blog`} className="inline-flex flex-row-reverse items-center gap-6 group">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                      <ArrowLeft size={32} className="transition-transform duration-500 group-hover:rotate-180" />
                    </div>
                    <span className="text-2xl font-bold uppercase tracking-tighter italic group-hover:text-blue-500 transition-colors">
                      د SafiPay پوهنغونډ ته بیرته تګ
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Scanner Line */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-blue-500/40 z-50 pointer-events-none animate-scan" />

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100vh; opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </main>
  );
}