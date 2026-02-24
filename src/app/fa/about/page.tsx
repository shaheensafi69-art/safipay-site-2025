'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User, Landmark, ShieldCheck, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPagePersian() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'fa';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- بخش هیرو (مقدمه) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            تغییر پارادایم مالی در افغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            فراتر از <br /> بانکداری سنتی
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            صافی‌پی (SafiPay) تنها یک اپلیکیشن نیست؛ بلکه زیرساختی انقلابی است که با هدف دموکراتیک‌سازی دسترسی به سیستم‌های مالی بین‌المللی برای هر شهروند افغان بنا شده است.
          </motion.p>
        </div>
      </section>

      {/* --- بخش موسسان و تیم رهبری --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-24 italic uppercase tracking-widest text-amber-500">تیم رهبری</h2>
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
                  alt="شاهین صافی - موسس و مدیرعامل" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase text-right">مدیرعامل / موسس</p>
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
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهین صافی <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Shaheen Safi</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  شاهین صافی (متولد ۲۰۰۳)، استراتژیست فین‌تک و معمار اصلی اکوسیستم صافی‌پی است. او با تکیه بر تجربه در مدیریت فناوری اطلاعات و تجارت دیجیتال، ماموریت دارد تا شکاف میان افغانستان و بازارهای مالی جهانی را از میان بردارد.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  مشاهده سوابق و بیوگرافی کامل
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ۲. مجتبی رحمانی - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> مهندسی و امنیت
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبی رحمانی <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Mujtaba Rahmani</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  مجتبی رحمانی (متولد ۲۰۰۶)، طراح زیرساخت‌های امنیتی صافی‌پی است. او در مقام مدیر ارشد فناوری، مسئولیت نظارت بر پروتکل‌های امنیت سایبری و پیاده‌سازی فناوری‌های مقیاس‌پذیر پرداخت را بر عهده دارد.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  بررسی پروفایل فنی
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
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/mujtaba.jpeg" alt="مجتبی رحمانی" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* ۳. ساحل سالم - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/sahel.jpeg" alt="ساحل سالم" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> اکوسیستم بانکی
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Sahel Salem</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed text-justify">
                ساحل سالم (متولد ۲۰۰۷)، مدیریت یکپارچه‌سازی حساب‌های کاربری و اکوسیستم بانکی را در صافی‌پی بر عهده دارد و اطمینان حاصل می‌کند که رابط میان دارایی‌های دیجیتال و چارچوب‌های مالی سنتی بدون نقص عمل کند.
              </p>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  مشاهده پروفایل بانکی
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- بخش جدید: مأموریت صافی‌پی --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-white text-center">ماموریت صافی‌پی</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light text-justify">
              <p>
                صافی‌پی بر پایه یک اصل ساده اما قدرتمند بنا شده است: <span className="text-white font-bold">«شمول مالی یک حق اساسی است.»</span> در منطقه‌ای که اغلب از شبکه‌های بانکی جهانی منزوی شده است، ما فناوری لازم برای پل زدن میان این شکاف را فراهم می‌کنیم.
              </p>
              <p>
                پلتفرم ما تنها درباره تراکنش‌ها نیست؛ بلکه درباره ساختن یک آینده مالی پایدار است. ما در حال مهندسی سیستمی بدون مرز هستیم که در آن فریلنسرها، کارآفرینان و خانواده‌های افغان بتوانند بدون هیچ مانعی در اقتصاد جهانی مشارکت کنند.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Landmark className="text-amber-500" />, title: "بانکداری دیجیتال", desc: "یک حساب بانکی مجازی کامل برای هر کاربر افغان." },
                { icon: <ShieldCheck className="text-green-500" />, title: "حضانت امن", desc: "رمزنگاری سطح بالا و امنیت غیرمتمرکز دارایی‌ها." },
                { icon: <Globe className="text-blue-500" />, title: "دسترسی جهانی", desc: "اتصال فوری به بازارهای بین‌المللی و ارزهای معتبر." },
                { icon: <Cpu className="text-purple-500" />, title: "قدرت گرفته از AI", desc: "تشخیص هوشمند کلاهبرداری و تحلیل‌های خودکار مالی." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/50 transition-colors group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- بخش فراخوان نهایی (CTA) --- */}
      <section className="py-32 container mx-auto px-6">
        <motion.div className="bg-gradient-to-br from-amber-600 to-amber-900 p-20 rounded-[4rem] text-center">
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">با صافی‌پی همراه شوید</h2>
            <p className="text-amber-100/70 mb-12 max-w-2xl mx-auto text-lg">در ساخت نسل بعدی زیرساخت‌های مالی برای افغانستان و فراتر از آن، در کنار ما باشید.</p>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-amber-100 transition-colors group">
                شروع همکاری <ArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}