'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Landmark, Scale, Lock, 
  CheckCircle2, ArrowLeft, Building, 
  Award, Eye, FileCheck2, HeartHandshake
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function FcaCompliancePageFa() {
  const author = {
    name: "شیرین گل احمدی",
    role: "مدیر و منیجر تمام اکوسیستم (All Ecosystem Manager)",
    avatar: "/shirin.jpeg",
    email: "shirinahmadi@safipay.net",
    bio: "شیرین گل احمدی، مدیر و منیجر تمام اکوسیستم در صافی‌پی، مسئولیت راهبری انطباق سیستم با استانداردهای نظارتی بریتانیا و اروپا، تفکیک دارایی‌های مشتریان (Safeguarding) و حفظ یکپارچگی تجربه کاربری را بر عهده دارد.",
    profileUrl: "/fa/founder/shirin-gol-ahmadi"
  };

  const keyTakeaways = [
    "اکوسیستم صافی‌پی استانداردهای سفت و سخت مرجع رفتار مالی بریتانیا (FCA) در خصوص موسسات پول الکترونیکی (EMIs) را به عنوان الگوی طلایی حفاظت از سرمایه پیاده‌سازی کرده است.",
    "۱۰۰٪ از وجوه و سپرده‌های کاربران در حساب‌های کاملاً تفکیک‌شده (Segregated Safeguarding Accounts) در بانک‌های رتبه اول بریتانیا و اتحادیه اروپا نگهداری می‌شوند.",
    "دارایی‌های کاربران هرگز وارد فعالیت‌های وام‌دهی، اعتبارسنجی پرریسک یا سرمایه‌گذاری‌های سفته‌بازانه پلتفرم نمی‌شوند و همیشه آماده برداشت آنی هستند.",
    "اجرای اصول رفتار منصفانه با مشتریان (TCF) و استانداردهای جدید Consumer Duty تضمین‌کننده شفافیت مطلق در کارمزدها و قراردادهای بانکی است."
  ];

  const tableOfContents = [
    { id: "fca-overview", label: "۱. مرجع رفتار مالی بریتانیا (FCA) و فلسفه نظارتی آن" },
    { id: "safeguarding-mechanisms", label: "۲. معماری ایزولاسیون دارایی‌ها (Safeguarding Accounts)" },
    { id: "no-lending-pledge", label: "۳. تمایز بنیادین نئوبانک با بانک‌های سرمایه‌گذاری سنتی" },
    { id: "consumer-duty", label: "۴. تعهدات Consumer Duty و رفتار عادلانه با کاربران" },
    { id: "ecosystem-supervision", label: "۵. نقش مدیریت اکوسیستم در راستی‌آزمایی مستمر" },
  ];

  const faqs = [
    {
      question: "مفهوم سیف‌گاردینگ (Safeguarding) در قوانین FCA به چه معناست؟",
      answer: "سیف‌گاردینگ به معنای نگهداری کلیه وجوه متعلق به کاربران در حساب‌های امانی مجزا در بانک‌های معتبر است. در این حالت، حتی در فرضی‌ترین حالت ورشکستگی پلتفرم، طلبکاران هیچ دسترسی به پول کاربران ندارند و تمام سرمایه مستقیماً به مشتریان بازگردانده می‌شود."
    },
    {
      question: "آیا صافی‌پی با دارایی‌های موجود در حساب‌ها اقدام به وام‌دهی می‌کند؟",
      answer: "خیر، طبق خط‌مشی‌های پول الکترونیکی (Electronic Money Regulations)، صافی‌پی یک نهاد پرداختی و حفاظتی است و به هیچ عنوان دارایی کاربران را به اشخاص دیگر وام نمی‌دهد."
    },
    {
      question: "نهاد FCA چه تاثیری بر کاربران ساکن در خارج از بریتانیا دارد؟",
      answer: "استانداردهای رفتاری و حفاظتی FCA یکی از معتبرترین خطوط دفاعی مالی در جهان است. ما این استانداردها را به عنوان الگو در کل اکوسیستم صافی‌پی پیاده‌سازی کرده‌ایم تا همه کاربران، فارغ از موقعیت جغرافیایی‌شان، از بالاترین سطح امنیت حقوقی بهره‌مند باشند."
    }
  ];

  const relatedPosts = [
    {
      title: "مدیریت جامع اکوسیستم صافی‌پی: هماهنگ‌سازی قوانین مالی چند کشوری",
      slug: "global-ecosystem-governance",
      category: "مدیریت اکوسیستم",
      readTime: "۸ دقیقه",
      excerpt: "روایت اختصاصی شیرین گل احمدی از پیوند میان دپارتمان‌های فناوری، حقوقی و توسعه بین‌الملل."
    },
    {
      title: "انطباق سیستم صافی‌پی با قوانین SEPA و الزامات شورای پرداخت‌های اروپا (EPC)",
      slug: "sepa-regulatory-framework",
      category: "تطابق بانکی اروپا",
      readTime: "۸ دقیقه",
      excerpt: "بررسی الزامات تسویه فوری زیر ۱۰ ثانیه‌ای و پایبندی به استانداردهای پیام‌رسانی ISO 20022."
    },
    {
      title: "چارچوب بین‌المللی مبارزه با پولشویی (6AMLD و FATF): سیستم‌های نظارت عملیاتی",
      slug: "aml-fatf-regulatory-compliance",
      category: "نظارت عملیاتی",
      readTime: "۱۰ دقیقه",
      excerpt: "چگونگی پایش خودکار تراکنش‌ها و اسکن تحریم‌های جهانی توسط مدیر عملیات مجتبی رحمانی."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28" dir="rtl">
      
      {/* هدر مقاله (Hero Header) */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 mb-6">
            <ShieldCheck size={16} className="text-pink-400" />
            <span className="text-pink-400 text-xs font-bold uppercase tracking-[0.25em]">گزارش حاکمیت مالی و رگولاتوری بریتانیا • ۲۰۲۶</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter italic leading-[1.15]">
            استانداردهای نظارتی <span className="text-pink-400">FCA بریتانیا</span> <br />و حفاظت از سرمایه در صافی‌پی
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            چگونه اکوسیستم مالی صافی‌پی با به‌کارگیری قوانین پول الکترونیکی بریتانیا (EMRs) و تفکیک صددرصدی حساب‌ها، امن‌ترین سنگر مالی را برای کاربران بین‌المللی بنا نهاده است.
          </p>
        </div>
      </section>

      {/* نگه‌دارنده بخش تحریریه و محتوا */}
      <BlogEditorialEnhancer
        locale="fa"
        slug="fca-compliance-standards"
        title="استانداردهای نظارتی FCA بریتانیا و سیاست‌های حفاظت از سرمایه در اکوسیستم صافی‌پی"
        description="بررسی عمیق مقررات FCA، حساب‌های امانی تفکیک‌شده و تعهدات حمایت از حقوق مشتریان به قلم شیرین گل احمدی، مدیر و منیجر تمام اکوسیستم صافی‌پی."
        category="رگولاتوری بین‌المللی"
        readTime="۹ دقیقه"
        publishedDate="۲۳ فوریه ۲۰۲۶"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg text-right">
          
          {/* بخش ۱ */}
          <section id="fca-overview" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-pink-500 pr-4">
              ۱. مرجع رفتار مالی بریتانیا (FCA) و فلسفه نظارتی آن
            </h2>
            <p>
              سازمان رفتار مالی بریتانیا (Financial Conduct Authority - FCA) یکی از سخت‌گیرانه‌ترین و پیشرفته‌ترین مراجع نظارت بر بازارهای مالی و نهادهای فین‌تک در سراسر جهان است. بر خلاف رگولاتورهای سنتی، تمرکز اصلی FCA نه فقط بر حفظ ثبات بانک‌ها، بلکه بر حمایت حداکثری از مصرف‌کنندگان، حفظ سلامت بازار رقابتی و تضمین رفتار منصفانه با کاربران قرار دارد.
            </p>
            <p>
              در ساختار حاکمیتی صافی‌پی، من به عنوان <strong className="text-white font-bold">شیرین گل احمدی</strong> (مدیر و منیجر تمام اکوسیستم)، پیاده‌سازی این چارچوب‌های سفت‌وسخت را در تاروپود معماری پلتفرم هدایت می‌کنم. هدف ما این است که هر کاربری که در آسیا، اروپا یا خاورمیانه به صافی‌پی می‌پیوندد، از دقیقا همان امنیت و شفافیت حقوقی برخوردار باشد که شهروندان لندنی از آن منتفع می‌شوند.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/safipay-system-security/hero.jpg" 
                alt="امنیت و رگولاتوری FCA در صافی‌پی" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-pink-400 font-bold uppercase tracking-wider">نمودار ۲.۰: ساختار تفکیک کامل دارایی‌های کاربران از سرمایه عملیاتی شرکت</span>
              </div>
            </div>
          </section>

          {/* بخش ۲ */}
          <section id="safeguarding-mechanisms" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-pink-500 pr-4">
              ۲. معماری ایزولاسیون دارایی‌ها (Safeguarding Accounts)
            </h2>
            <p>
              کلیدی‌ترین الزام مقررات پول الکترونیکی بریتانیا (Electronic Money Regulations 2011)، مفهوم «سیف‌گاردینگ» یا حفاظت کامل است. طبق این قانون:
            </p>
            <ul className="list-disc pr-6 space-y-3 text-gray-300">
              <li>وجوه مشتریان باید بلافاصله پس از واریز از سرمایه عملیاتی، حقوق کارمندان و هزینه‌های شرکت جدا شوند.</li>
              <li>این وجوه مستقیماً در بانک‌های معتبر و دارای بالاترین رتبه اعتباری (Tier-1 Banks) در حساب‌های اختصاصی با عنوان مشخص «دارایی مشتریان» واریز می‌گردند.</li>
              <li>هیچ نهادی، حتی طلبکاران یا دادگاه‌ها در سخت‌ترین شرایط، حق ادعا بر این وجوه را ندارند و این پول منحصراً متعلق به شخص کاربر است.</li>
            </ul>
          </section>

          {/* بخش ۳ */}
          <section id="no-lending-pledge" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-pink-500 pr-4">
              ۳. تمایز بنیادین با بانک‌های سنتی: عدم پرداخت وام و سفته‌بازی
            </h2>
            <p>
              بانک‌های سنتی تجاری بر پایه مدل بانکداری با ذخیره کسری (Fractional Reserve Banking) فعالیت می‌کنند؛ به این معنی که سپرده‌های شما را گرفته و تا ۹۰ درصد آن را به عنوان وام‌های مسکن یا تجاری پرریسک پرداخت می‌کنند. در صورتی که موجی از برداشت‌ها رخ دهد (Bank Run)، این بانک‌ها ورشکست می‌شوند.
            </p>
            <p>
              صافی‌پی این مدل خطرناک را به کلی کنار گذاشته است. ما یک نهاد پول الکترونیکی و پرداخت دیجیتال هستیم؛ ۱۰۰٪ موجودی شما در هر ثانیه در حساب بانکی امین محفوظ است. چه تمام کاربران همزمان بخواهند موجودی خود را برداشت کنند، نقدینگی به طور کامل موجود و قابل تصفیه فوری است.
            </p>
          </section>

          {/* بخش ۴ */}
          <section id="consumer-duty" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-pink-500 pr-4">
              ۴. تعهدات Consumer Duty و رفتار عادلانه با کاربران
            </h2>
            <p>
              دستورالعمل جدید FCA با نام Consumer Duty سازمان‌ها را موظف می‌کند که منافع مصرف‌کننده را در اولویت مطلق قرار دهند. در صافی‌پی، ما این تعهد را در ۴ ستون عملیاتی پیاده کرده‌ایم:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-8 rounded-3xl bg-pink-500/5 border border-pink-500/20">
                <FileCheck2 className="text-pink-400 mb-4" size={32} />
                <h3 className="text-white text-xl font-bold mb-2">شفافیت کامل قیمت‌ها</h3>
                <p className="text-gray-400 text-sm">هیچ کارمزد ناگفته، تغییر مخفیانه در نرخ تبدیل ارز یا جریمه‌های پنهان وجود ندارد.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <HeartHandshake className="text-pink-400 mb-4" size={32} />
                <h3 className="text-white text-xl font-bold mb-2">پشتیبانی و کرامت کاربر</h3>
                <p className="text-gray-400 text-sm">رسیدگی سریع به شکایات و پاسخگویی کتبی شفاف بر مبنای حقوق مصرف‌کنندگان بین‌المللی.</p>
              </div>
            </div>
          </section>

          {/* بخش ۵ */}
          <section id="ecosystem-supervision" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-pink-500 pr-4">
              ۵. نقش مدیریت اکوسیستم در راستی‌آزمایی مستمر
            </h2>
            <blockquote className="border-r-4 border-pink-500 bg-white/[0.02] p-8 rounded-2xl my-8 italic text-lg text-white">
              «مدیریت تمام اکوسیستم در صافی‌پی تنها یک عنوان نیست؛ وظیفه روزانه من حصول اطمینان از این است که هر خط کد در دپارتمان فنی، هر مکاتبه در تیم حقوقی و هر تبادل ارزی در سرورهای بین‌المللی، سخت‌گیرانه‌ترین آزمون‌های انطباق نظارتی را با سربلندی پشت سر بگذارد.»
              <footer className="text-pink-400 font-bold text-sm not-italic mt-3">— شیرین گل احمدی، مدیر و منیجر تمام اکوسیستم</footer>
            </blockquote>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}
