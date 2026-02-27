'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  Crown, Star, Award, ShieldCheck, 
  Quote, Zap, CheckCircle2 
} from 'lucide-react';

export default function AboutFounderPage() {
  const params = useParams();
  
  return (
    <main className="min-h-screen bg-black text-[#d4d4d8] selection:bg-[#D4AF37] selection:text-black font-sans" dir="rtl">
      
      {/* استایل‌های اختصاصی برای فریم عکس و انیمیشن‌ها */}
      <style jsx global>{`
        .gold-glow {
          filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.4));
        }
        .founder-frame {
          position: relative;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(145deg, #0a0a0a, #000);
          overflow: hidden;
        }
        .founder-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 8px solid transparent;
          border-image: linear-gradient(to bottom, #D4AF37, transparent) 1;
          pointer-events: none;
        }
        .reveal-up {
          animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Section: لوگو + عنوان + عکس کادربندی شده */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* سمت راست (در حالت RTL): هویت و لوگو */}
            <div className="reveal-up z-20 order-2 lg:order-1 text-right">
              <div className="flex items-center gap-4 mb-8 justify-start">
                <Image 
                  src="/logo.png" 
                  alt="SafiPay Logo" 
                  width={60} 
                  height={60} 
                  className="gold-glow"
                />
                <div className="h-[2px] w-12 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] font-bold tracking-[0.4em] text-xs uppercase">هویت بنیان‌گذار</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white italic leading-tight mb-6">
                شاهین <br />
                <span className="text-[#D4AF37] gold-glow">صافی</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-400 italic border-r-4 border-[#D4AF37] pr-6 max-w-lg">
                معمار اصلی SafiPay؛ بازتعریف آزادی مالی برای نسل نوین شهروندان جهانی.
              </p>
            </div>

            {/* سمت چپ (در حالت RTL): عکس در باکس طراحی شده */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="founder-frame w-full max-w-[500px] aspect-[4/5] rounded-[2rem] shadow-2xl shadow-[#D4AF37]/10">
                <Image 
                  src="/blog/about-shaheen-safi/hero.jpg" 
                  alt="شاهین صافی" 
                  fill 
                  className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              {/* المان تزئینی پشت عکس */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full animate-pulse" />
            </div>

          </div>
        </div>
      </section>

      {/* بخش چشم‌انداز و فلسفه */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <Quote className="mx-auto text-[#D4AF37] mb-8 opacity-40" size={60} />
            <h2 className="text-4xl md:text-6xl font-black text-white italic mb-10">فراتر از یک <span className="text-[#D4AF37]">بنیان‌گذاری</span></h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic">
              "هدف من هرگز تنها ساخت یک اپلیکیشن نبود. هدف، ساختن یک پل بود؛ دروازه‌ای که جامعه ما را با سرعت و امنیتی که شایسته آن هستند، به قلب مالی اروپا متصل کند."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/50 transition-all group">
              <Award className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-white text-2xl font-bold mb-3">اصالت</h4>
              <p className="text-gray-500 italic leading-relaxed text-sm">بنا شده بر پایه اعتماد جهانی و شفافیت مطلق در تمامی تراکنش‌ها.</p>
            </div>

            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/50 transition-all group">
              <ShieldCheck className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-white text-2xl font-bold mb-3">استاندارد اروپا</h4>
              <p className="text-gray-500 italic leading-relaxed text-sm">تضمین امنیت دارایی‌ها تحت نظارت مستقیم مجتبی در چهارچوب‌های اتحادیه اروپا.</p>
            </div>

            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/50 transition-all group">
              <Zap className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-white text-2xl font-bold mb-3">قدرت آنی</h4>
              <p className="text-gray-500 italic leading-relaxed text-sm">صدور ابزارهای مالی در کمتر از ۶۰ ثانیه و حذف کامل کاغذبازی‌های سنتی.</p>
            </div>
          </div>
        </div>
      </section>

      {/* فوتر رسمی با امضای دیجیتال */}
      <footer className="py-40 border-t border-white/10 bg-black text-center">
        <div className="container mx-auto px-6">
          <p className="text-[#D4AF37] font-black tracking-[1em] text-[10px] uppercase mb-8 opacity-60">پورتفولیو رسمی</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter">شاهین صافی</h2>
            <div className="h-[2px] w-20 bg-[#D4AF37] hidden md:block" />
            <h2 className="text-4xl md:text-6xl font-black italic text-[#D4AF37] uppercase tracking-tighter opacity-80">بنیان‌گذار SafiPay</h2>
          </div>
          <div className="mt-20 flex justify-center gap-8 opacity-30">
            <Star size={20} />
            <Crown size={20} />
            <CheckCircle2 size={20} />
          </div>
        </div>
      </footer>

    </main>
  );
}