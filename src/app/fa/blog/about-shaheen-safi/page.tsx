'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Crown, Star, Award, ShieldCheck, 
  Quote, Zap, CheckCircle2, ArrowLeft,
  Landmark, Globe
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function AboutFounderPageFa() {
  const author = {
    name: "شیرین گل احمدی",
    role: "مدیر ارشد بازاریابی و ارتباطات بین‌الملل",
    avatar: "/shirin.jpeg",
    email: "shirinahmadi@safipay.net",
    bio: "شیرین گل احمدی رهبری ارتباطات رسانه‌ای، توسعه برند بین‌المللی و جذب کاربران در سراسر اروپا و خاورمیانه را برای پلتفرم نئوبانک SafiPay بر عهده دارد.",
    profileUrl: "/fa/founder/shirin-gol-ahmadi"
  };

  const keyTakeaways = [
    "شاهین صافی با هدف شکستن انزوای مالی تحمیل‌شده بر استعدادهای مستعد کشورهای در حال توسعه، نئوبانک SafiPay را پایه‌گذاری نمود.",
    "این مسیر موفقیت‌آمیز، پیونددهنده تجربیات کارآفرینی منطقه‌ای با زیرساخت‌های مالی مستحکم اروپایی تا زمان تاسیس هاب پاریس بود.",
    "تحت رهبری شاهین، سافی‌پی از یک پروژه جاه‌طلبانه به یک اکوسیستم نئوبانک بین‌المللی چند میلیون دلاری تبدیل شد.",
    "فلسفه مدیریتی او بر دموکراتیزه کردن سرمایه، شفافیت بانکی و لغو هرگونه تبعیض جغرافیایی در تجارت جهانی استوار است."
  ];

  const tableOfContents = [
    { id: "origins-vision", label: "۱. خاستگاه یک رویای بدون مرز" },
    { id: "overcoming-barriers", label: "۲. شکستن انزوای اقتصادی و آپارتاید مالی" },
    { id: "paris-expansion", label: "۳. تاسیس مقر اروپایی در قلب پاریس" },
    { id: "leadership-philosophy", label: "۴. فلسفه رهبری و باورهای شاهین صافی" },
    { id: "the-road-ahead", label: "۵. چشم‌انداز دهه آینده فین‌تک" },
  ];

  const faqs = [
    {
      question: "چه انگیزه‌ای باعث شد شاهین صافی پلتفرم SafiPay را تاسیس کند؟",
      answer: "مشاهده مشکلات روزمره فریلنسرها، برنامه‌نویسان و خانواده‌هایی که به دلیل محدودیت‌های بانکی سنتی قادر به دریافت دستمزد یا خرید بین‌المللی نبودند، محرک اصلی شاهین برای ساخت این پل بانکی مدرن بود."
    },
    {
      question: "دفتر مرکزی و مدیریت اجرایی سافی‌پی در کجا مستقر است؟",
      answer: "سافی‌پی دارای مقر اجرایی در پاریس فرانسه است و با همکاری نهادهای مالی دارای مجوز در اتحادیه اروپا به کاربران جهانی خدمات ارائه می‌دهد."
    },
    {
      question: "چگونه می‌توان با شاهین صافی ارتباط مستقیم برقرار کرد؟",
      answer: "پیشنهادات همکاری، مصاحبه‌های مطبوعاتی و ارتباطات استراتژیک از طریق ایمیل رسمی shaheen@safipay.net مدیریت می‌شوند."
    }
  ];

  const relatedPosts = [
    {
      title: "سافی‌پی چیست؟ راهنمای جامع نئوبانک اروپایی",
      slug: "what-is-safipay",
      category: "معرفی پلتفرم",
      readTime: "۸ دقیقه",
      excerpt: "بررسی کامل زیرساخت حساب‌های بین‌المللی و خدمات مالی بدون مرز."
    },
    {
      title: "امنیت نهادی در سطح اتحادیه اروپا: چگونه سافی‌پی از دارایی‌های شما محافظت می‌کند",
      slug: "safipay-system-security",
      category: "امنیت و انطباق قانونی",
      readTime: "۱۲ دقیقه",
      excerpt: "بررسی پروتکل‌های رمزنگاری پیشرفته نظامی و حفاظت از داده‌ها."
    },
    {
      title: "آینده بانکداری دیجیتال: هوش مصنوعی و اقتصاد فرامرزی",
      slug: "future-of-banking",
      category: "معماری فین‌تک",
      readTime: "۶ دقیقه",
      excerpt: "چگونگی تحول بانکداری در دهه آینده و حذف واسطه‌های سنتی."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28" dir="rtl">
      
      {/* هدر مقاله */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6">
            <Crown size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">زندگینامه و داستان ساخت پلتفرم</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight italic">
            داستان شاهین <span className="text-[#D4AF37]">صافی</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            روایت خواندنی از چگونگی تاسیس نئوبانک پیشرفته اروپایی SafiPay به رهبری شاهین صافی جهت شکستن محدودیت‌های مالی برای شهروندان جهان.
          </p>
        </div>
      </section>

      {/* کامپوننت ارتقادهنده تحلیلی */}
      <BlogEditorialEnhancer
        locale="fa"
        slug="about-shaheen-safi"
        title="داستان ساخت سافی‌پی: از چالش‌های آغازین تا هاب بین‌المللی پاریس"
        description="مسیر الهام‌بخش ساخت نئوبانک بین‌المللی SafiPay به رهبری شاهین صافی؛ پشتکار، نوآوری در فین‌تک و ماموریت آزادسازی مبادلات مالی برای شهروندان بدون مرز."
        category="چشم‌انداز و رهبری"
        readTime="۱۰ دقیقه"
        publishedDate="۱ حوت ۱۴۰۴"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-[2.2] font-light text-base md:text-lg text-justify">
          
          {/* بخش ۱ */}
          <section id="origins-vision" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۱. خاستگاه یک رویای بدون مرز
            </h2>
            <p>
              تحولات بزرگ مالی در اتاق‌های راحت مدیریت آغاز نمی‌شوند، بلکه در مواجهه با چالش‌های واقعی زندگی شکل می‌گیرند. هنگامی که <strong className="text-white font-bold">شاهین صافی</strong> انزوای تحمیل‌شده بر جوانان نخبه و متخصصان فریلنسر را مشاهده کرد، دریافت که نظام سنتی جهان نیازمند یک انقلاب اساسی است.
            </p>
            <p>
              هزاران جوان بااستعداد ماه‌ها برای کارفرمایان خارجی کار می‌کردند اما به دلیل نبود کارت بانکی بین‌المللی، ماه‌ها در دریافت دستمزد زحمات خود ناکام می‌ماندند. شاهین صافی اراده کرد تا این تبعیض سیستماتیک را با ساخت یک نئوبانک مستقیم در قلب اروپا برای همیشه درمان کند.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/about-shaheen-safi/hero.jpg" 
                alt="چشم‌انداز شاهین صافی" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-[#D4AF37] font-bold">تصویر ۱: هدایت استراتژیک توسعه نئوبانک سافی‌پی در اروپا</span>
              </div>
            </div>
          </section>

          {/* بخش ۲ */}
          <section id="overcoming-barriers" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۲. شکستن انزوای اقتصادی و آپارتاید مالی
            </h2>
            <p>
              شاهین صافی با گرد هم آوردن تیمی مقتدر و متخصص—شامل <strong className="text-white font-bold">ساحل سالم</strong> در روابط بانکی اروپا، <strong className="text-white font-bold">مجتبی رحمانی</strong> در معماری امنیت فنی، <strong className="text-white font-bold">شیرین گل احمدی</strong> در بازاریابی بین‌الملل و <strong className="text-white font-bold">مبین حسنی</strong> در استراتژی فین‌تک—توانست سیستمی استاندارد و دارای انطباق حقوقی را پایه‌ریزی کند.
            </p>
          </section>

          {/* بخش ۳ */}
          <section id="paris-expansion" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۳. تاسیس مقر اروپایی در قلب پاریس
            </h2>
            <p>
              اعتبار واقعی در نظام بین‌الملل مستلزم پایبندی به بالاترین موازین قانونی اتحادیه اروپاست. سافی‌پی تحت هدایت شاهین توانست الزامات سازمان ناظر بانکی اروپا (EBA) را تامین نموده و هاب مدیریتی خود را در فرانسه بنا نهد.
            </p>
          </section>

          {/* بخش ۴ */}
          <section id="leadership-philosophy" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۴. فلسفه رهبری و باورهای شاهین صافی
            </h2>
            <blockquote className="border-r-4 border-[#D4AF37] pr-6 my-8 italic text-white text-xl font-light">
              «ما سافی‌پی را نساختیم تا فقط یک اپلیکیشن دیگر در تلفن همراه شما باشد؛ ما آن را ساختیم تا کلیدی باشد برای گشودن درهای اقتصاد جهانی به روی هر انسانی که صاحب استعداد و انگیزه است، بدون توجه به اینکه در کجای این کره خاکی متولد شده است.»
              <footer className="text-xs text-[#D4AF37] font-bold tracking-widest mt-3">— شاهین صافی</footer>
            </blockquote>
          </section>

          {/* بخش ۵ */}
          <section id="the-road-ahead" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-[#D4AF37] pr-4">
              ۵. چشم‌انداز آینده و ده سال پیش رو
            </h2>
            <p>
              افق پیش روی سافی‌پی دربرگیرنده بهره‌گیری از هوش مصنوعی برای مدیریت نقدینگی، اتصال کارت‌های بین‌المللی به کلیه درگاه‌های دیجیتال و تسویه آنی مبادلات است تا رویاهای کارآفرینان در کمترین زمان به حقیقت بپیوندد.
            </p>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}