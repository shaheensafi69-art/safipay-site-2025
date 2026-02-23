'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPage() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'fa';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- بخش هیرو (معرفی کلان) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            تغییر پارادایم مالی افغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            ما مرزهای بانکی را <br /> جابه‌جا می‌کنیم
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay صرفاً یک اپلیکیشن نیست؛ یک زیرساخت انقلابی است که با هدف دموکراتیزه کردن دسترسی به سیستم‌های مالی بین‌المللی برای هر شهروند افغان، بنا شده است.
          </motion.p>
        </div>
      </section>

      {/* --- بخش بنیان‌گذاران و تیم --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* ۱. شاهین صافی - Founder & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Shaheen Safi - Founder & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">CEO / FOUNDER</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> رهبری و استراتژی
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهین صافی <span className="text-gray-600 text-3xl font-light block mt-2">Shaheen Safi</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  شاهین صافی (متولد ۲۰۰۳)، استراتژیست فین‌تک و معمار اصلی سیستم‌های پرداخت SafiPay است. او با درک عمیق از انزوای مالی افغانستان، مسئولیت هدایت کلان پروژه را بر عهده دارد.
                </p>
              </div>

              {/* دکمه اختصاصی شاهین */}
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  مشاهده بیوگرافی و سوابق کامل
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ۲. ساحل سالم - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> اکوسیستم بانکداری
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم <span className="text-gray-600 text-3xl font-light block mt-2">Sahel Salem</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  ساحل سالم (متولد ۲۰۰۷)، مغز متفکر پشت اکوسیستم بانکداری و حساب‌های کاربری SafiPay است. او مسئول طراحی و اجرای چارچوب‌های مالی است.
                </p>
              </div>

              {/* دکمه اختصاصی ساحل */}
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  مشاهده بیوگرافی کامل ساحل
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/sahel.jpeg" alt="Sahel Salem" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* ۳. مجتبی رحمانی - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/mujtaba.jpeg" alt="Mujtaba Rahmani" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> مهندسی و امنیت
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبی رحمانی <span className="text-gray-600 text-3xl font-light block mt-2">Mujtaba Rahmani</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed">
                مجتبی رحمانی (متولد ۲۰۰۶)، مدیر ارشد تکنولوژی و معمار امنیت سایبری SafiPay است.
              </p>

              {/* دکمه اختصاصی مجتبی */}
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  مشاهده بیوگرافی کامل مجتبی
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- چشم‌انداز و ارزش‌ها (بدون تغییر) --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl font-black mb-16 italic uppercase">ارزش‌های بنیادین ما</h2>
           <div className="grid md:grid-cols-3 gap-8 text-right">
              {/* آیتم‌های ارزش‌ها که در کد قبلی داشتید در اینجا قرار می‌گیرند */}
           </div>
        </div>
      </section>

      {/* --- CTA نهایی --- */}
      <section className="py-32 container mx-auto px-6">
        <motion.div className="bg-gradient-to-br from-amber-600 to-amber-900 p-20 rounded-[4rem] text-center">
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">آماده همکاری هستید؟</h2>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl">
                ارسال درخواست شراکت <ArrowRight className="rotate-180" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}