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
      
      {/* پس منظر رڼاګانې */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      </div>

      {/* هيرو برخه (Hero Section) */}
      <section className="relative pt-32 pb-24 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 animate-fade-in">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">رسمي اعلامیه ۲۰۲۶</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic leading-none">
            ډيجيټل مالي چارې <br />
            <span className="text-[#D4AF37]">بيا تعريفوي</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-12">
            صافي‌پی یوازې یو ډیجیټل بټوه نه ده؛ دا په اروپا کې جوړ شوی د لوړ فعالیت مالي اکوسیستم دی موږ د دودیز بانکدارۍ امنیت او د عصري فنټیک چټکتیا ترمنځ واټن له منځه وړی ترڅو نړیوالو اتباعو ته له مالي پولو پرته قدرت ورکړو
          </p>

          <div className="flex flex-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
              زموږ قدرت کشف کړئ
            </button>
          </div>
        </div>
      </section>

      {/* اصلي بنسټونه - ولې موږ مخکښ یو؟ */}
      <section className="py-24 px-6 z-10 relative bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-right">
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">
                ولې مخکښان <br /><span className="text-[#D4AF37]">SafiPay</span> غوره کوي
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Lock size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">بنسټیز امنیت</h4>
                    <p className="text-gray-500">د اروپایی اتحادیې د مالي معیارونو تر نظارت لاندې، موږ ډاډ ترلاسه کوو چې ستاسو شتمنۍ د نړۍ ترټولو سختو مقرراتو لخوا خوندي کیږي</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">په ۱ دقیقه کې اجرا کول</h4>
                    <p className="text-gray-500">د اونیو انتظار هېر کړئ په صافي‌پی کې، مجازی ویزا کارتونه او IBAN حسابونه په ۶۰ ثانیو کې صادریږي چټکتیا زموږ اساسي ژمنه ده</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">اروپایي مستقيم IBAN</h4>
                    <p className="text-gray-500">ستاسو په خپل نوم یو قانوني اروپایي بانکي حساب د SEPA لیږدونې په داسې ډول ترسره کړئ لکه څنګه چې تاسو په بروکسل یا برلین کې ژوند کوئ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
              <div className="glass-card rounded-[3rem] p-4 border border-white/10 relative overflow-hidden">
                 <Image 
                  src="/blog/what-is-safipay/hero.jpg" 
                  alt="د صافي‌پی ټیکنالوژي" 
                  width={800} height={800}
                  className="rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* نړیوالې احصایې */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">+۲۰۰</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">ملاتړ شوي هیوادونه</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">۱ دقیقه</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">فعالولو وخت</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">۱۰۰٪</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">اروپایي قانوني معیارونه</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">۲۴/۷</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">نړیوال ملاتړ</div>
            </div>
          </div>
        </div>
      </section>

      {/* د بنسټ ایښودونکي لیدلوری */}
      <footer className="py-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-10 relative text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">یو تلپاتې میراث</h2>
          <p className="text-gray-400 text-lg mb-12 italic">
            "موږ صافي‌پی یوازې ستاسو په تلیفون کې د بل اپلیکیشن په توګه نه دی جوړ کړی موږ دا د یوې کیلي په توګه جوړ کړی چې د نړۍ اقتصاد د هرچا لپاره خلاص کړي، پرته لدې چې هغوی چیرته زیږیدلي دي"
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto mb-4" />
          <div className="text-white font-bold tracking-widest uppercase italic">د SafiPay مدیریت ټیم</div>
        </div>
      </footer>

    </main>
  );
}