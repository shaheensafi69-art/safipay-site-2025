'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Zap, Globe2, ArrowLeft, 
  Lock, Landmark, CreditCard, Users, 
  CheckCircle2, Building2, Cpu, Globe, ArrowUpLeft
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function WhatIsSafiPayPageFa() {
  const author = {
    name: "شاهین صافی",
    role: "بنیان‌گذار و مدیر ارشد اجرایی",
    avatar: "/founders/shaheen-safi.png",
    email: "shaheen@safipay.net",
    bio: "شاهین صافی بنیان‌گذار و معمار اصلی اکوسیستم نئوبانک بین‌المللی SafiPay است که با هدف توانمندسازی اقتصادی و اتصال شهروندان خاورمیانه و جهان به شبکه مالی اروپا این پلتفرم را بنیان نهاد.",
    profileUrl: "/fa/founder/shaheen-safi"
  };

  const keyTakeaways = [
    "سافی‌پی یک نئوبانک دیجیتال اروپایی دارای مجوز است که مبادلات مالی بین‌المللی را برای کاربران سراسر جهان بدون محدودیت‌های جغرافیایی فراهم می‌کند.",
    "کاربران یک شماره شبا (IBAN) اختصاصی اروپایی به نام خود دریافت می‌کنند که مستقیماً به شبکه انتقال آنی SEPA متصل است.",
    "صدور کارت‌های ویزا فیزیکی و مجازی در کمتر از ۶۰ ثانیه با استاندارد امنیتی پیشرفته 3D Secure 2.0 صورت می‌پذیرد.",
    "سیم‌کارت دیجیتال (eSIM) یکپارچه سافی‌پی دسترسی به اینترنت پرسرعت نسل ۵ را در بیش از ۲۰۰ کشور دنیا پوشش می‌دهد."
  ];

  const tableOfContents = [
    { id: "institutional-architecture", label: "۱. معماری نهادی و ضرورت تغییر" },
    { id: "core-pillars", label: "۲. چهار رکن بنیادین اکوسیستم" },
    { id: "instant-issuance", label: "۳. موتور صدور آنی ۶۰ ثانیه‌ای" },
    { id: "sepa-integration", label: "۴. حساب IBAN مستقیم و شبکه SEPA" },
    { id: "borderless-visa", label: "۵. کارت‌های بین‌المللی ویزا" },
    { id: "global-compliance", label: "۶. امنیت نهادی و انطباق اتحادیه اروپا" },
  ];

  const faqs = [
    {
      question: "چه کسانی می‌توانند در سافی‌پی افتتاح حساب کنند؟",
      answer: "تمام فریلنسرها، شاغلین دورکار، مسافران بین‌المللی و کارآفرینانی که نیاز به یک بستر بانکی معتبر در سطح استانداردهای اتحادیه اروپا دارند، می‌توانند به راحتی از خدمات سافی‌پی استفاده کنند."
    },
    {
      question: "صدور حساب IBAN اروپایی چقدر زمان می‌برد؟",
      answer: "پس از ارسال مدارک هویتی و تایید هوشمند خودکار، صدور حساب شبا اروپایی در کمتر از ۶۰ ثانیه تکمیل شده و امکان دریافت و ارسال حوالجات یورویی فراهم می‌شود."
    },
    {
      question: "آیا کارت‌های ویزای سافی‌پی در تمام سایت‌ها کار می‌کنند؟",
      answer: "بله، کارت‌های ویزای سافی‌پی مستقیماً به شبکه جهانی Visa متصل بوده و در تمام وب‌سایت‌های خارجی، خریدهای آنلاین، درگاه‌های رزرو هتل و هواپیما و پلتفرم‌های بین‌المللی پذیرفته می‌شوند."
    },
    {
      question: "امنیت دارایی‌ها چگونه تضمین می‌شود؟",
      answer: "موجودی کاربران در حساب‌های مجزا (Segregated Accounts) در بانک‌های مرکزی و ارشد شریک در اروپا نگهداری شده و با رمزنگاری پیشرفته نظامی AES-256 و احراز هویت دومرحله‌ای محافظت می‌شود."
    }
  ];

  const relatedPosts = [
    {
      title: "امنیت نهادی در سطح اتحادیه اروپا: چگونه سافی‌پی از دارایی‌های شما محافظت می‌کند",
      slug: "safipay-system-security",
      category: "امنیت و انطباق قانونی",
      readTime: "۱۲ دقیقه",
      excerpt: "بررسی عمیق پروتکل‌های رمزنگاری پیشرفته و مدیریت کلیدهای بدون افشا."
    },
    {
      title: "راهنمای کامل ویزا کارت مجازی سافی‌پی",
      slug: "visa-card-guide",
      category: "بانکداری دیجیتال",
      readTime: "۱۵ دقیقه",
      excerpt: "آموزش گام به گام استفاده از کارت‌های بین‌المللی جهت پرداخت و اشتراک‌های ارزی."
    },
    {
      title: "مزایای حساب IBAN اختصاصی اروپایی برای کاربران و فریلنسرها",
      slug: "iban-account-benefits",
      category: "بانکداری دیجیتال",
      readTime: "۷ دقیقه",
      excerpt: "چرا داشتن شماره حساب مستقیم اروپایی برای تجارت فرامرزی ضروری است."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28" dir="rtl">
      
      {/* هدر اصلی */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">دانشنامه رسمی پلتفرم • نسخه ۱۴۰۴</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight italic">
            سافی‌پی <span className="text-[#D4AF37]">چیست</span>؟
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            معماری نوین نئوبانک اروپایی جهت حذف مرزهای مالی بین‌المللی، افتتاح آنی حساب IBAN و صدور کارت‌های جهانی ویزا در کمتر از ۶۰ ثانیه.
          </p>
        </div>
      </section>

      {/* کامپوننت ارتقادهنده تحلیلی */}
      <BlogEditorialEnhancer
        locale="fa"
        slug="what-is-safipay"
        title="سافی‌پی چیست؟ راهنمای جامع نئوبانک اروپایی و خدمات مالی بین‌المللی"
        description="بررسی جامع تمام ارکان نئوبانک اروپایی SafiPay: شماره شبا اروپایی، کارت‌های مجازی ویزا، حوالجات SEPA و پروتکل‌های امنیتی."
        category="معرفی پلتفرم"
        readTime="۸ دقیقه"
        publishedDate="۲۲ دلو ۱۴۰۴"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        {/* متن مقاله */}
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-[2.2] font-light text-base md:text-lg text-justify">
          
          {/* بخش ۱ */}
          <section id="institutional-architecture" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۱. معماری نهادی: فراتر از بانکداری سنتی
            </h2>
            <p>
              سیستم‌های بانکداری سنتی در قرن بیستم و بر پایه مرزهای خاکی محدود، روال‌های کاغذی و شبکه کند کارگزاری‌های واسط بنا شدند. برای میلیون‌ها متخصص فناوری، فریلنسر بین‌المللی و کارآفرین در حال رشد، این ساختار قدیمی همواره موانعی سهمگین همچون کارمزدهای نجومی، بلوکه‌های خودسرانه و روزها انتظار برای باز کردن یک حساب معمولی ایجاد می‌کرد.
            </p>
            <p>
              <strong className="text-white font-bold">سافی‌پی (SafiPay)</strong> برای پاسخ قطعی به این گسست اقتصادی متولد شد. با مدیریت استراتژیک در مراکز مالی برجسته اروپایی، سافی‌پی به عنوان یک نئوبانک دیجیتال پیشرفته، کاربران را بدون واسطه به اتاق‌های تصفیه منطقه اقتصادی اروپا (EEA) متصل می‌سازد.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/what-is-safipay/hero.jpg" 
                alt="معماری فناوری سافی‌پی" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-[#D4AF37] font-bold">تصویر ۱: زیرساخت تصفیه آنی پرداخت‌های مالی اروپا</span>
              </div>
            </div>
          </section>

          {/* بخش ۲ */}
          <section id="core-pillars" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۲. چهار رکن بنیادین اکوسیستم SafiPay
            </h2>
            <p>
              پلتفرم سافی‌پی حول ۴ ستون اصلی و هماهنگ جهت تحقق استقلال مالی کامل کاربران توسعه یافته است:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Landmark size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">حساب اختصاصی IBAN اروپایی</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  شماره حساب اختصاصی با نام شخص تحت نظارت اتحادیه اروپا، برای انجام نقل‌وانتقالات سریع SEPA در سراسر ۳۶ کشور قاره سبز.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <CreditCard size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">کارت‌های بین‌المللی Visa</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  کارت‌های مجازی آنی جهت پرداخت اشتراک‌ها و تبلیغات گوگل و فیسبوک، همراه با کارت‌های فیزیکی مجهز به تراشه و قابلیت برداشت در ATM.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Globe size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">سیم‌کارت دیجیتال مسافرتی (eSIM)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  دسترسی فوری به داده‌های نسل پنجم اینترنت در بیش از ۲۰۰ مقصد دنیا با فعال‌سازی در اپلیکیشن و بدون رومینگ‌های سرسام‌آور.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Cpu size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">مدیریت مالی هوشمند مبتنی بر هوش مصنوعی</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  تبدیل نرخ ارز بین‌بانکی در زمان واقعی، هشدارهای خودکار موجودی و تحلیل پیشرفته الگوهای مصرف جهت حفظ نقدینگی.
                </p>
              </div>
            </div>
          </section>

          {/* بخش ۳ */}
          <section id="instant-issuance" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۳. موتور صدور آنی ۶۰ ثانیه‌ای
            </h2>
            <p>
              در بانک‌های سنتی صدور کارت اعتباری معمولاً نیازمند ۱۰ تا ۱۴ روز کاری و مراجعات حضوری است. سافی‌پی این فرآیند فرسایشی را به پردازش تمام‌خودکار ابری تبدیل کرده است.
            </p>
            <p>
              به محض ثبت و تطبیق بیومتریک مدارک، سامانه کارت هوشمند اطلاعات کارت را در گاوصندوق رمزنگاری شده کاربر درج کرده و بلافاصله امکان اتصال کارت به کیف‌پول‌های Apple Pay و Google Wallet را جهت خریدهای حضوری در سراسر جهان مهیا می‌سازد.
            </p>
          </section>

          {/* بخش ۴ */}
          <section id="sepa-integration" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۴. حساب IBAN مستقیم اروپایی و پروتکل SEPA Instant
            </h2>
            <p>
              داشتن یک شماره حساب بین‌المللی رسمی با نام خودتان، ضامن اعتبار حرفه‌ای شما نزد کارفرمایان و پلتفرم‌های جهانی است:
            </p>
            <ul className="list-disc pr-6 space-y-3 text-gray-300">
              <li>امکان دریافت حقوق و دستمزد پروژه‌ها مستقیماً از کارفرمایان اروپایی، انگلیسی و آمریکایی بدون کسورات نامشخص.</li>
              <li>انتقال وجه SEPA Instant در کمتر از ۱۰ ثانیه در تمام ۲۴ ساعت شبانه‌روز و حتی روزهای تعطیل رسمی.</li>
              <li>دریافت حوالجات یورویی با شفاف‌ترین ساختار کارمزد در نظام بانکی جهانی.</li>
            </ul>
          </section>

          {/* بخش ۵ */}
          <section id="borderless-visa" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۵. کارت‌های بین‌المللی ویزا و مبارزه پیشرفته با کلاهبرداری
            </h2>
            <p>
              تمام کارت‌های ویزای سافی‌پی مجهز به رمز دوم متغیر، قابلیت تنظیم سقف خرید ماهانه و امکان توقف آنی یک‌کلیکه از طریق اپلیکیشن هستند. در صورت بروز هرگونه مشکل در درگاه‌های ناامن، کاربر می‌تواند کارت قبلی را باطل و در چند ثانیه یک کارت جدید ایجاد کند.
            </p>
          </section>

          {/* بخش ۶ */}
          <section id="global-compliance" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۶. امنیت نهادی و انطباق با قوانین اتحادیه اروپا
            </h2>
            <p>
              ساختار امنیتی سافی‌پی چندلایه طراحی شده است: ماژول‌های سخت‌افزاری HSM، رمزنگاری کانال انتقال داده TLS 1.3 و نگهداری دارایی‌ها منحصراً در بانک‌های مرکزی و سطح یک اروپایی.
            </p>
            
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#D4AF37]/30 text-center space-y-4 my-10 not-prose">
              <h3 className="text-2xl font-black text-white italic">آماده تجربه نسل جدید بانکداری بین‌المللی هستید؟</h3>
              <p className="text-sm text-gray-400 max-w-xl mx-auto font-light">
                به هزاران کاربر بین‌المللی که زیرساخت مالی خود را با سافی‌پی ارتقا داده‌اند بپیوندید. همین امروز حساب اروپایی خود را افتتاح نمایید.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <Link
                  href="/fa/contact"
                  className="px-8 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-[#D4AF37]/20 inline-flex items-center gap-2"
                >
                  افتتاح حساب و مشاوره <ArrowLeft size={14} />
                </Link>
              </div>
            </div>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}