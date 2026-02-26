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
  const lang = params?.lang || 'fa';
  const isRtl = lang === 'fa' || lang === 'ps' || lang === 'ar';

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section با انیمیشن ورود مقتدرانه */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/blog/future-of-banking/hero.jpg" 
            alt="آینده بانکداری دیجیتال"
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
              آینده بانکداری؛ <br/> <span className="text-amber-500 text-4xl md:text-6xl text-right block mt-4">تقابل سنت و مدرنیته</span>
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
            
            {/* پروفایل نویسنده با لوگوی SafiPay */}
            <div className="flex flex-wrap justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="absolute -inset-1.5 bg-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center p-3">
                        <img src="/logo.png" alt="SafiPay Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-black text-xl">Safi AI</p>
                    <CheckCircle2 size={18} className="text-blue-500 fill-blue-500/10" />
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">سخنگوی رسمی SafiPay</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> ۱۴۰۴/۱۱/۲۰</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> ۱۵ دقیقه مطالعه</span>
              </div>
            </div>

            {/* بدنه اصلی مقاله با رعایت SEO */}
            <article className="space-y-12 text-gray-300 leading-[2.4] text-justify text-lg" dir="rtl">
              
              <p className="text-2xl text-white font-medium mb-12 border-r-4 border-amber-500 pr-6">
                بانکداری سنتی با دیوارهای سنگی و صف‌های طولانی، نفس‌های آخر خود را می‌کشد. در دنیای امروز، سرعت تنها یک مزیت نیست؛ بلکه واحد سنجش امنیت و اعتماد است. SafiPay با هدف بازتعریف این مفاهیم، مرزهای فیزیکی را از میان برداشته است.
              </p>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Zap className="text-amber-500" /> چرا سیستم‌های قدیمی شکست می‌خورند؟
              </h2>
              <p>
                بزرگترین ضعف بانک‌های سنتی، وابستگی شدید به بروکراسی انسانی و زیرساخت‌های فرسوده است. در حالی که یک حواله بانکی در سیستم‌های قدیمی ممکن است ۳ تا ۵ روز کاری زمان ببرد، در سیستم مدرن SafiPay، تراکنش‌ها در بستر شبکه‌های ابری و با نظارت هوشمند در کسری از ثانیه انجام می‌شوند. این همان دلیلی است که بنیان‌گذار ما، <strong>شاهین صافی</strong>، بر حذف کامل واسطه‌های سنتی تاکید دارد.
              </p>

              {/* نمایش ۳ بعدی ویژگی‌ها */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <TrendingUp className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">بهینه‌سازی مالی هوشمند</h4>
                    <p className="text-sm text-gray-500">استفاده از الگوریتم‌های پیشرفته برای کاهش کارمزدها و افزایش سرعت انتقال ارزی در شبکه SEPA.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <Landmark className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">استاندارد بانکی اروپا</h4>
                    <p className="text-sm text-gray-500">تمامی فعالیت‌های ما تحت نظارت نهادهای مالی اتحادیه اروپا انجام می‌شود، چیزی که صرافی‌های سنتی هرگز ندارند.</p>
                </motion.div>
              </div>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Lock className="text-amber-500" /> امنیت؛ فراتر از رمز عبور
              </h2>
              <p>
                در بخش امنیت فنی، <strong>مجتبی (مدیر امنیت ما)</strong> لایه‌های حفاظتی چندگانه‌ای را مستقر کرده است. از احراز هویت بیومتریک گرفته تا رمزنگاری سرتاسری (End-to-End)، هدف ما ایجاد بستری است که در آن کاربر بدون نگرانی از تحریم‌ها یا مداخلات شخص ثالث، دارایی خود را مدیریت کند.
              </p>

              <div className="bg-white/[0.02] border-l-4 border-amber-500 p-12 rounded-2xl my-16 text-right">
                <p className="text-white text-xl italic font-light">
                  "آینده بانکداری در گوشی‌های هوشمند شماست، نه در ساختمان‌های سنگی. ما در صافی‌پی، این قدرت را به دست شما سپرده‌ایم."
                </p>
                <p className="text-amber-500 font-bold mt-4">— پیام مدیریت توسعه بین‌الملل، ساحل</p>
              </div>

              <h2 className="text-3xl font-black text-white mb-8">جمع‌بندی: گام بلند به سوی اقتصاد دیجیتال</h2>
              <p>
                ما در SafiPay معتقدیم که دسترسی به سیستم بانکی جهانی حق مسلم هر فرد است. با ارائه حساب‌های IBAN و ویزا کارت‌های آنی، ما پلی ساخته‌ایم که اقتصاد افغانستان را به قلب اروپا و بازارهای جهانی متصل می‌کند. این تنها شروع یک تحول بزرگ در ساختار مالی منطقه است.
              </p>
            </article>

            {/* دکمه بازگشت با لینک اصلاح شده به fa/blog */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg">
                    <ArrowRight size={24} className={isRtl ? "" : "rotate-180"} />
                    بازگشت به دانشنامه صافی‌پی
                </span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}