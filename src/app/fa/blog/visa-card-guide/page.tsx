'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  CreditCard, Globe, Zap, ShieldCheck, 
  ArrowRight, ShoppingBag, CheckCircle2,
  Lock, AlertCircle, Terminal
} from 'lucide-react';
import Link from 'next/link';

export default function VisaCardGuidePage() {
  const params = useParams();
  const lang = params?.lang || 'fa';

  const content = {
    fa: {
      category: "تحلیل استراتژیک و راهنما",
      title: "ویزا کارت مجازی SafiPay؛",
      subtitle: "پایان انزوای مالی در افغانستان",
      author: "Safi AI",
      role: "سخنگوی رسمی SafiPay",
      readTime: "۱۵ دقیقه مطالعه",
      intro: "بسیاری از بانک‌های داخلی افغانستان کارت‌هایی صادر می‌کنند که تنها در داخل مرزها اعتبار دارند. SafiPay این مرزها را شکسته است. ما کارت‌هایی صادر می‌کنیم که در قلب اروپا، آمریکا و تمام سایت‌های جهانی با قدرت کار می‌کنند.",
      advantageTitle: "چرا ویزا کارت ما متفاوت است؟",
      advantageText: "بزرگترین مشکل کارت‌های بانکی فعلی در افغانستان، عدم اتصال به سیستم‌های پرداخت جهانی است. کارت‌های SafiPay مستقیماً از نهادهای مالی اتحادیه اروپا صادر می‌شوند. این یعنی شما بدون ترس از ریجکت شدن تراکنش، می‌توانید از کابل یا هرات، هزینه‌های خود را در سراسر جهان پرداخت کنید.",
      comparisonTitle: "تفاوت‌های کلیدی در یک نگاه",
      comp1: "کارکرد جهانی: برخلاف بانک‌های داخلی، کارت ما در ۱۰۰٪ درگاه‌های بین‌المللی فعال است.",
      comp2: "سرعت صدور: صدور در کمتر از ۱ دقیقه، در حالی که بانک‌های سنتی هفته‌ها وقت شما را می‌گیرند.",
      comp3: "امنیت فنی: نظارت مستقیم مجتبی (مدیر امنیت فنی) بر تمامی پروتکل‌ها.",
      techTitle: "زیرساخت فنی و مدیریتی",
      techDesc: "مجتبی، مدیر عملیات و فنی ما، پروتکل‌هایی را پیاده‌سازی کرده که تراکنش‌های شما را از فیلترهای بین‌المللی عبور می‌دهد. همچنین ساحل (مدیر توسعه بین‌الملل) تضمین کرده است که این کارت‌ها با قوانین پولی اروپا و حساب‌های IBAN کاملاً همگام باشند.",
      quote: "ما فقط یک کارت صادر نمی‌کنیم؛ ما دروازه‌های اقتصاد جهانی را به روی هر افغانستانی باز می‌کنیم.",
      quoteAuthor: "شاهین صافی — بنیان‌گذار SafiPay",
      backBtn: "بازگشت به دانشنامه SafiPay"
    }
  };

  const t = content.fa;

  // کلاس مشترک برای انیمیشن هاور باکس‌ها
  const cardStyle = "bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 my-16 transition-all duration-500 hover:scale-[1.03] hover:bg-white/[0.06] hover:border-amber-500/50 group cursor-default shadow-xl";

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white font-sans" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 scale-105">
          <Image 
            src="/blog/visa-card-guide/hero.jpg" 
            alt="SafiPay Visa Guide"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl text-right animate-in fade-in slide-in-from-right duration-1000">
            <div className="flex items-center justify-start gap-3 mb-6 text-amber-500 font-bold tracking-widest text-sm">
              <Terminal size={20} />
              <span>{t.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 drop-shadow-2xl">
              {t.title} <br/> 
              <span className="text-amber-500">{t.subtitle}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 -mt-24 relative z-30 text-right">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#080808]/95 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl backdrop-blur-3xl animate-in fade-in slide-in-from-bottom duration-1000">
            
            {/* Header / Author */}
            <div className="flex flex-row items-center justify-between mb-16 pb-10 border-b border-white/5">
              <div className="text-gray-400 text-xs font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                {t.readTime}
              </div>
              <div className="flex items-center gap-5">
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <p className="text-white font-bold text-xl">{t.author}</p>
                    <CheckCircle2 size={18} className="text-blue-500" />
                  </div>
                  <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">{t.role}</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 p-3 flex items-center justify-center shadow-lg shadow-amber-500/5">
                   <img src="/logo.png" alt="SafiPay" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <article className="space-y-16 text-gray-300 leading-[2.4] text-right">
              <p className="text-2xl text-white font-semibold mb-12 border-r-4 border-amber-500 pr-6">
                {t.intro}
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-black text-white flex items-center justify-start gap-4">
                  <AlertCircle className="text-amber-500 shrink-0" /> {t.advantageTitle}
                </h2>
                <p className="text-lg text-justify">{t.advantageText}</p>
              </div>

              {/* Comparison Box */}
              <div className={cardStyle}>
                <h3 className="text-2xl font-black text-white mb-10">{t.comparisonTitle}</h3>
                <ul className="space-y-8">
                  {[t.comp1, t.comp2, t.comp3].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-3 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.7)] shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-gray-200 font-medium text-lg leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-black text-white flex items-center justify-start gap-4">
                  <ShieldCheck className="text-amber-500 shrink-0" /> {t.techTitle}
                </h2>
                <p className="text-lg text-justify">{t.techDesc}</p>
              </div>

              {/* Quote Area */}
              <div className="bg-gradient-to-r from-amber-500/10 to-transparent border-r-4 border-amber-500 p-12 rounded-3xl my-24">
                <p className="text-white text-3xl italic font-light leading-snug text-right uppercase">
                  "{t.quote}"
                </p>
                <p className="text-amber-500 font-bold mt-8 text-xl text-right">— {t.quoteAuthor}</p>
              </div>

              {/* Grid Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-24">
                <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] group">
                  <div className="flex justify-start mb-8 transition-transform group-hover:rotate-12"><ShoppingBag className="text-amber-500" size={40} /></div>
                  <h4 className="text-white font-black text-2xl mb-4">خرید جهانی</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">دسترسی نامحدود به آمازون و تمامی درگاه‌های بین‌المللی با امنیت SafiPay.</p>
                </div>
                <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] group">
                  <div className="flex justify-start mb-8 transition-transform group-hover:rotate-12"><Lock className="text-amber-500" size={40} /></div>
                  <h4 className="text-white font-black text-2xl mb-4">امنیت اروپایی</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">تراکنش‌های شما تحت نظارت مستقیم مجتبی و استانداردهای اتحادیه اروپا است.</p>
                </div>
              </div>
            </article>

            {/* Back CTA */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link href={`/${lang}/blog`} className="group relative px-14 py-5 bg-white text-black font-black rounded-3xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-xl">
                    {t.backBtn}
                    <ArrowRight size={26} className="rotate-180 transition-transform group-hover:-translate-x-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}