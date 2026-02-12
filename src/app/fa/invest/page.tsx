'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, HelpCircle, ChevronLeft
} from 'lucide-react';
import Image from 'next/image';

// تنظیمات انیمیشن برای ظهور نرم بخش‌ها
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function AnimatedPartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* --- ۱. هدر حماسی با انیمیشن ذرات پس‌زمینه --- */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-amber-600/10 blur-[180px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none uppercase">
              <span className="text-white">SAFI</span>
              <span className="text-amber-500 inline-block drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">ECOSYSTEM</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            ترکیب قدرت بانکداری اروپایی و اتصال مخابراتی جهانی برای خلق آینده‌ای هوشمند.
          </motion.p>
        </div>
      </section>

      {/* --- ۲. بخش SafiPay & Wallester (انیمیشن کارت چرخشی) --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.div {...fadeInUp} className="flex flex-col lg:flex-row gap-16 items-center bg-white/[0.02] p-12 rounded-[4rem] border border-white/5">
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3 text-amber-500 font-black tracking-widest text-sm uppercase">
              <div className="w-10 h-[2px] bg-amber-500" /> نئوبانک هوشمند
            </div>
            <h2 className="text-5xl font-black">SafiPay & Wallester</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              با افتخار، صافی‌پی از زیرساخت‌های **Wallester AS** استفاده می‌کند. این یعنی شما مستقیماً به شبکه VISA متصل هستید. هر کاربر یک حساب با کد **IBAN اختصاصی** دریافت می‌کند که قابلیت دریافت و ارسال پول از تمام بانک‌های دنیا را دارد.
            </p>
            <div className="space-y-4 text-gray-300">
               {[
                 "صدور کارت‌های فیزیکی VISA با نام کاربر",
                 "اتصال به Apple Pay و Google Pay",
                 "امنیت سطح بانکی با لایسنس اتحادیه اروپا"
               ].map((text, i) => (
                 <motion.div key={i} className="flex items-center gap-3" whileHover={{ x: 10 }}>
                   <CheckCircle2 className="text-amber-500" size={20} /> <span>{text}</span>
                 </motion.div>
               ))}
            </div>
          </div>
          
          {/* تصویر کارت با انیمیشن شناور */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-amber-500/20 blur-[100px] group-hover:bg-amber-500/40 transition-all" />
            <div className="relative bg-gradient-to-br from-gray-800 to-black w-full aspect-[1.6/1] rounded-[2rem] border border-white/20 p-8 shadow-2xl flex flex-col justify-between">
               <div className="flex justify-between items-start">
                  <Cpu size={40} className="text-amber-500/50" />
                  <span className="font-black italic text-xl">SafiPay</span>
               </div>
               <div className="space-y-2">
                  <div className="text-2xl font-mono tracking-widest">**** **** **** 2026</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Official Partner: Wallester</div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ۳. بخش Safi TopUp & Ding (انیمیشن پالس ارتباطی) --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.div {...fadeInUp} className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3 text-blue-500 font-black tracking-widest text-sm uppercase">
              <div className="w-10 h-[2px] bg-blue-500" /> اتصال جهانی
            </div>
            <h2 className="text-5xl font-black">Safi TopUp & Ding</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              با همکاری **Ding Global**، ما دسترسی به ۵۰۰ اپراتور در ۱۵۰ کشور را فراهم کردیم. اما تخصص ما، افغانستان است. ما تنها پلتفرمی هستیم که کریدت تمام اپراتورهای داخلی را با نرخ مستقیم و بدون واسطه به شما می‌رساند.
            </p>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl group hover:bg-blue-500/10 transition-all">
                  <Wifi className="text-blue-500 mb-4" />
                  <h4 className="font-bold mb-2 text-white">E-SIM جهانی</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">سیم‌کارت‌های مجازی برای مسافرانی که نمی‌خواهند در سفرها دغدغه رومینگ داشته باشند.</p>
               </div>
               <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl group hover:bg-blue-500/10 transition-all">
                  <Smartphone className="text-blue-500 mb-4" />
                  <h4 className="font-bold mb-2 text-white">اپراتورهای داخلی</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">پشتیبانی کامل از روشن، افغان‌بیسیم، اتصالات و ام‌تی‌ان با تاییدیه Ding.</p>
               </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-blue-600/10 blur-[100px]" />
             <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                    className="h-32 bg-gray-900 border border-white/5 rounded-3xl flex items-center justify-center text-gray-500 font-black text-2xl uppercase"
                  >
                    Operator {i}
                  </motion.div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- ۴. نقشه راه متحرک (Roadmap) --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeInUp} className="text-4xl font-black text-center mb-24">مسیر توسعه ۲۰۲۶</motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { q: "فصل اول", t: "تثبیت زیرساخت", d: "اتصال به APIهای Wallester و تست امنیت." },
              { q: "فصل دوم", t: "عرضه خدمات", d: "فعال‌سازی بخش E-SIM و صدور کارت‌های مجازی." },
              { q: "فصل سوم", t: "توسعه جهانی", d: "ادغام کامل با سیستم Ding برای ۵۰۰ اپراتور." },
              { q: "فصل چهارم", t: "نئوبانک کامل", d: "صدور کارت‌های فیزیکی و سیستم کش‌بک." },
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -20 }}
                className="relative p-10 bg-white/[0.03] border border-white/10 rounded-[3rem] group overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-9xl font-black text-white/[0.02] group-hover:text-amber-500/10 transition-all">{i+1}</div>
                <h3 className="text-amber-500 font-black mb-2 text-xl">{step.q}</h3>
                <h4 className="text-white font-bold mb-4">{step.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ۵. فرم تماس و شراکت (CTA) --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-amber-600 to-amber-900 p-16 rounded-[4rem] text-center shadow-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-8">فرصت همکاری را از دست ندهید</h2>
            <p className="max-w-xl mx-auto text-white/80 mb-12 text-lg">
              اگر شما یک موسسه مالی، شرکت تکنولوژی یا توزیع‌کننده منطقه‌ای هستید، ما منتظر شنیدن پیشنهادات شما هستیم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button whileTap={{ scale: 0.95 }} className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg flex items-center gap-3">
                <Mail size={24} /> ارسال ایمیل رسمی
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg">
                دریافت Pitch Deck
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.6em]">
          Strategic Partnership Ecosystem © 2026 | SafiPay & Safi TopUp
        </p>
      </footer>
    </div>
  );
}