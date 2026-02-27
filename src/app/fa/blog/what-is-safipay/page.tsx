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
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden" dir="rtl">
      
      {/* هاله نور پس‌زمینه */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      </div>

      {/* بخش هیرو (Hero Section) */}
      <section className="relative pt-32 pb-24 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 animate-fade-in">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">بیانیه رسمی ۲۰۲۶</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic leading-none">
            بازتعریف <br />
            <span className="text-[#D4AF37]">امور مالی دیجیتال</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-12">
            صافی‌پی تنها یک کیف پول دیجیتال نیست؛ این یک اکوسیستم مالی با عملکرد بالاست که در قلب اروپا مهندسی شده است ما فاصله بین امنیت بانکداری سنتی و سرعت فوق‌العاده فین‌تک مدرن را از بین برده‌ایم تا به شهروندان جهانی قدرت دهیم از مرزهای مالی عبور کنند
          </p>

          <div className="flex flex-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
              قدرت ما را کشف کنید
            </button>
          </div>
        </div>
      </section>

      {/* ستون‌های اصلی - چرا ما پیشرو هستیم */}
      <section className="py-24 px-6 z-10 relative bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-right">
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">
                چرا نخبگان <br /><span className="text-[#D4AF37]">SafiPay</span> را انتخاب می‌کنند
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Lock size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">امنیت نهادینه شده</h4>
                    <p className="text-gray-500">تحت نظارت استانداردهای مالی اتحادیه اروپا، اطمینان حاصل می‌کنیم که دارایی‌های شما توسط دقیق‌ترین چارچوب‌های انطباق در جهان محافظت می‌شود</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">صدور بدون معطلی</h4>
                    <p className="text-gray-500">هفته‌ها انتظار را فراموش کنید در صافی‌پی، ویزا کارت‌های مجازی و حساب‌های IBAN در کمتر از ۶۰ ثانیه صادر می‌شوند سرعت، وعده بنیادین ماست</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">حساب IBAN مستقیم اروپایی</h4>
                    <p className="text-gray-500">یک حساب بانکی معتبر اروپایی به نام خودتان حواله‌های SEPA را به گونه‌ای ارسال و دریافت کنید که گویی در بروکسل یا برلین زندگی می‌کنید</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
              <div className="glass-card rounded-[3rem] p-4 border border-white/10 relative overflow-hidden">
                 <Image 
                  src="/blog/what-is-safipay/hero.jpg" 
                  alt="تکنولوژی اصلی صافی‌پی" 
                  width={800} height={800}
                  className="rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* آمار تاثیر جهانی */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">+۲۰۰</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">کشور تحت پوشش</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">۱ دقیقه</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">زمان فعال‌سازی</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">۱۰۰٪</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">تطبیق با قوانین اروپا</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">۲۴/۷</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">پشتیبانی جهانی</div>
            </div>
          </div>
        </div>
      </section>

      {/* چشم‌انداز بنیان‌گذار */}
      <footer className="py-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-10 relative text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">میراثی در حال ساخت</h2>
          <p className="text-gray-400 text-lg mb-12 italic">
            "ما صافی‌پی را نساختیم تا فقط یک اپلیکیشن دیگر در گوشی شما باشد ما آن را ساختیم تا کلیدی باشد که اقتصاد جهانی را برای همه، بدون توجه به محل تولدشان، باز می‌کند"
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto mb-4" />
          <div className="text-white font-bold tracking-widest uppercase italic">تیم مدیریتی SafiPay</div>
        </div>
      </footer>

    </main>
  );
}