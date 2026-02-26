'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ShieldCheck, ArrowRight, Share2, Globe, Zap, Lock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// محتوای مقالات
const articlesContent: any = {
  "future-of-banking": {
    title: "آینده بانکداری؛ چرا سیستم‌های سنتی در حال فروپاشی هستند؟",
    date: "۱۴۰۴/۱۱/۲۰",
    readTime: "۱۲ دقیقه",
    author: "Safi AI",
    content: `
      <div className="space-y-8 text-gray-300 leading-[2.2] text-justify" dir="rtl">
        <p className="text-xl font-medium text-white border-r-4 border-amber-500 pr-4 bg-white/5 py-6 rounded-l-xl">
          دنیای مالی با سرعتی غیرقابل باور در حال تغییر است. زمان آن که مشتریان برای یک افتتاح حساب ساده، روزها در صف‌های طولانی بانک‌های سنتی منتظر بمانند به پایان رسیده است. SafiPay به عنوان پیشگام فین‌تک، استانداردهای جدیدی را تعریف کرده است.
        </p>

        <h2 className="text-3xl font-black text-white flex items-center gap-3 mt-12">
          <Zap className="text-amber-500" /> ۱. سرعت صدور؛ از روزها به ثانیه‌ها
        </h2>
        <p>
          در نظام بانکداری قدیمی، بروکراسی اداری و تاییدهای دستی مانع اصلی پیشرفت هستند. در SafiPay، ما این پارادایم را تغییر داده‌ایم. با بهره‌گیری از زیرساخت‌های ابری و هوش مصنوعی، <strong>سرعت صدور حساب و کارت در پلتفرم ما کمتر از ۶۰ ثانیه</strong> است. این یعنی شما در همان لحظه‌ای که تصمیم می‌گیرید، مالک یک حساب بین‌المللی هستید. برتری ما نسبت به بانک‌های سنتی در همین دقت و سرعت نهفته است.
        </p>

        <h2 className="text-3xl font-black text-white flex items-center gap-3 mt-12">
          <Lock className="text-amber-500" /> ۲. امنیت در سطح استانداردهای اتحادیه اروپا
        </h2>
        <p>
          امنیت برای ما یک شعار نیست، بلکه هویت ماست. مجتبی، مدیر عملیات و امنیت فنی ما، سیستم‌هایی را طراحی کرده که با سخت‌گیرانه‌ترین استانداردهای امنیتی اتحادیه اروپا مطابقت دارند. هر تراکنش شما توسط چندین لایه رمزنگاری محافظت می‌شود. برخلاف صرافی‌های غیررسمی، تمام فعالیت‌های ما در چارچوب قانونی اتحادیه اروپا انجام می‌شود تا امنیت دارایی شما ۱۰۰٪ تضمین شده باشد.
        </p>

        <div className="bg-amber-500/10 border-2 border-amber-500/20 p-10 my-12 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
          <p className="text-amber-500 font-black text-2xl mb-4 italic">"ما مرزهای جغرافیایی را از دنیای مالی حذف کردیم تا هر افغان، یک بانک جهانی در جیب خود داشته باشد."</p>
          <p className="text-white text-lg">— شاهین صافی، بنیان‌گذار SafiPay</p>
        </div>

        <h2 className="text-3xl font-black text-white flex items-center gap-3 mt-12">
          <Globe className="text-amber-500" /> ۳. حساب IBAN و اتصال مستقیم به اروپا
        </h2>
        <p>
          بزرگترین چالش هموطنان ما، عدم دسترسی به حساب‌های بانکی معتبر برای دریافت حقوق یا انجام تجارت بین‌المللی بوده است. SafiPay با ارائه حساب IBAN اختصاصی اروپایی، شما را مستقیماً به شبکه SEPA متصل می‌کند. این یک تحول بزرگ است؛ شما می‌توانید بدون واسطه، حواله‌های ارزی خود را مدیریت کنید. ساحل، مدیر توسعه بین‌الملل ما، همواره در حال گسترش این روابط با شرکای اروپایی است تا بهترین خدمات را دریافت کنید.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-amber-500 font-bold mb-2">تکنولوژی E-SIM</h4>
                <p className="text-sm">اتصال به اینترنت جهانی و شماره اختصاصی برای امنیت دو مرحله‌ای حساب‌ها.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-amber-500 font-bold mb-2">پشتیبانی مقتدرانه</h4>
                <p className="text-sm">تیم پشتیبانی ما در تمام مراحل افتتاح حساب و تراکنش در کنار شماست.</p>
            </div>
        </div>

        <p className="text-white font-bold mt-10 italic border-t border-white/10 pt-8 text-center text-xl">
          SafiPay؛ سریع، امن و بدون مرز.
        </p>
      </div>
    `
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lang = params.lang as string;
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);

  const article = articlesContent[slug] || articlesContent["future-of-banking"];

  return (
    <main className="min-h-screen bg-[#030303] pb-20 overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image 
          src={`/blog/${slug}/hero.jpg`} 
          alt={article.title}
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full pb-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-amber-500 mb-8"
            >
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Official Insight</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-white leading-[1] mb-8"
            >
              {article.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 -mt-32 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#080808] border border-white/5 rounded-[4rem] p-8 md:p-20 shadow-2xl backdrop-blur-2xl">
            
            {/* Author/Profile Section - UPDATED WITH LOGO/IMAGE */}
            <div className="flex flex-wrap justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/10 overflow-hidden flex items-center justify-center">
                        {/* اینجا می‌توانید لوگوی صافی‌پی یا عکس پروفایل را قرار دهید */}
                        <Image 
                            src="/logo.png" // مسیر لوگوی شما
                            alt="Safi AI"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-black text-xl">{article.author}</p>
                    <CheckCircle2 size={18} className="text-blue-500" />
                  </div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">SafiPay Official Spokesperson</p>
                </div>
              </div>

              <div className="flex items-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> {article.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> {article.readTime}</span>
              </div>
            </div>

            {/* Article Body */}
            <article 
              className="article-content prose-invert"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Back Button - LINKED TO BLOG MAIN PAGE */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:pr-14"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                    <ArrowRight size={20} className={isRtl ? "" : "rotate-180"} />
                    بازگشت به دانشنامه صافی‌پی
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}