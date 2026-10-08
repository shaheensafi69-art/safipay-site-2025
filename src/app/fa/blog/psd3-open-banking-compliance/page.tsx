'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Code2, Terminal, ShieldCheck, Zap, 
  Lock, KeyRound, ArrowLeft, CheckCircle2,
  Cpu, Server, Laptop, Webhook
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function Psd3CompliancePageFa() {
  const author = {
    name: "مبین حسنی",
    role: "لیدر بخش دولوپمنت (Lead Developer)",
    avatar: "/mobin.jpeg",
    email: "mobin@safipay.net",
    bio: "مبین حسنی، لیدر بخش دولوپمنت در صافی‌پی، معمار ارشد زیرساخت‌های نرم‌افزاری، پیاده‌ساز استانداردهای بانکداری باز (Open Banking API) و پیشران گذار فنی سیستم به الزامات نسل جدید PSD3 و PSR اتحادیه اروپا است.",
    profileUrl: "/fa/founder/mobin-hassani"
  };

  const keyTakeaways = [
    "زیرساخت برنامه‌نویسی صافی‌پی منطبق با استانداردهای فنی تنظیم‌گری اداره بانکداری اروپا (EBA RTS) برای احراز هویت قوی مشتریان (SCA) توسعه یافته است.",
    "رابط‌های برنامه‌نویسی کاربردی (API) بانکداری باز، انتقال امن داده‌ها میان ارائه‌دهندگان خدمات پرداخت (TTPs) را با رمزنگاری پیشرفته mTLS تضمین می‌کنند.",
    "آمادگی کامل فنی جهت مهاجرت به چارچوب جدید PSD3 و مقررات خدمات پرداخت (PSR) از جمله پروتکل‌های تطبیق نام و شماره حساب (IBAN Verification).",
    "حذف وابستگی به پیامک‌های متنی ناامن (SMS) و مهاجرت ۱۰۰ درصدی به احراز هویت مبتنی بر کلیدهای امن سخت‌افزاری (FIDO2 / WebAuthn)."
  ];

  const tableOfContents = [
    { id: "psd2-to-psd3", label: "۱. مسیر تکامل از PSD2 به بسته مقرراتی PSD3 و PSR" },
    { id: "sca-implementation", label: "۲. احراز هویت قوی (SCA) و پروتکل Dynamic Linking" },
    { id: "open-banking-apis", label: "۳. معماری APIهای بانکداری باز و امنیت mTLS" },
    { id: "iban-name-check", label: "۴. پیاده‌سازی سرویس تطابق نام و شبا (Confirmation of Payee)" },
    { id: "engineering-standards", label: "۵. استانداردهای توسعه نرم‌افزار در خط تولید کد صافی‌پی" },
  ];

  const faqs = [
    {
      question: "دستورالعمل PSD3 چه تفاوتی با PSD2 برای کاربران ایجاد می‌کند؟",
      answer: "دستورالعمل PSD3 و مقررات خدمات پرداخت (PSR) حفاظت در برابر کلاهبرداری را بسیار جدی‌تر کرده، اشتراک‌گذاری داده‌ها در بانکداری باز را بدون قطعی تضمین نموده و بررسی اجباری تطابق نام گیرنده با شماره شبا (Verification of Payee) را پیش از انتقال پول الزامی می‌سازد."
    },
    {
      question: "مفهوم Dynamic Linking در احراز هویت دوعاملی چیست؟",
      answer: "طبق ماده ۵ استانداردهای فنی EBA RTS، در زمان پرداخت، کد احراز هویت باید به طور ناگسستنی به مبلغ دقیق تراکنش و هویت دقیق فروشنده قفل شود، به طوری که اگر کلاهبردار در میانه راه مبلغ را تغییر دهد، تراکنش فوراً نامعتبر گردد."
    },
    {
      question: "آیا توسعه‌دهندگان می‌توانند به APIهای باز صافی‌پی متصل شوند؟",
      answer: "بله، صافی‌پی دارای محیط آزمایشی (Sandbox) استاندارد و مستندات غنی توسعه‌دهندگان است که اتصال مستقیم سیستم‌های حسابداری، درگاه‌های فروشگاهی و استارت‌آپ‌ها را فراهم می‌آورد."
    }
  ];

  const relatedPosts = [
    {
      title: "تکنولوژی eSIM مسافرتی: اتصال اینترنت پرسرعت در بیش از ۲۰۰ کشور جهان",
      slug: "esim-travel-technology",
      category: "سفر و eSIM",
      readTime: "۵ دقیقه",
      excerpt: "بررسی ادغام نرم‌افزاری اینترنت رومینگ جهانی در کیف پول مالی صافی‌پی."
    },
    {
      title: "انطباق سیستم صافی‌پی با قوانین SEPA و الزامات شورای پرداخت‌های اروپا (EPC)",
      slug: "sepa-regulatory-framework",
      category: "تطابق بانکی اروپا",
      readTime: "۸ دقیقه",
      excerpt: "تحلیل جامع کریدورهای تسویه آنی یورو و پایبندی به استانداردهای پیام‌رسانی مالی ISO 20022."
    },
    {
      title: "مدیریت جامع اکوسیستم صافی‌پی: هماهنگ‌سازی قوانین مالی چند کشوری",
      slug: "global-ecosystem-governance",
      category: "مدیریت اکوسیستم",
      readTime: "۸ دقیقه",
      excerpt: "راهبرد شیرین گل احمدی در اتصال دپارتمان‌های فنی، حقوقی و توسعه بین‌الملل."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28" dir="rtl">
      
      {/* هدر مقاله (Hero Header) */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Code2 size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.25em]">معماری مهندسی و انطباق فنی • ۲۰۲۶</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter italic leading-[1.15]">
            انطباق با <span className="text-cyan-400">PSD2 و PSD3 اروپا:</span> <br />استانداردهای فنی و امنیت API صافی‌پی
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            روایتی فنی از نحوه پیاده‌سازی احراز هویت قوی، زیرساخت بانکداری باز، امنیت انتقال داده و آمادگی برای نسل نوین مقررات بانکی اروپا.
          </p>
        </div>
      </section>

      {/* نگه‌دارنده بخش تحریریه و محتوا */}
      <BlogEditorialEnhancer
        locale="fa"
        slug="psd3-open-banking-compliance"
        title="انطباق با دستورالعمل‌های PSD2 و PSD3 اروپا: استانداردهای فنی و امنیت API توسعه‌دهندگان"
        description="بررسی عمیق مهندسی بانکداری باز، الزامات فنی EBA RTS و پروتکل‌های احراز هویت مدرن در صافی‌پی به قلم مبین حسنی، لیدر بخش دولوپمنت."
        category="زیرساخت فنی و توسعه"
        readTime="۸ دقیقه"
        publishedDate="۲۶ فوریه ۲۰۲۶"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg text-right">
          
          {/* بخش ۱ */}
          <section id="psd2-to-psd3" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-cyan-500 pr-4">
              ۱. مسیر تکامل از PSD2 به بسته مقرراتی PSD3 و PSR
            </h2>
            <p>
              دستورالعمل دوم خدمات پرداخت (PSD2) با باز کردن انحصار داده‌های بانکی و معرفی مفهوم ارائه‌دهندگان شخص ثالث (TPPs)، انقلاب فین‌تک را رقم زد. با این حال، کمیسیون اروپا برای رفع نواقص فنی و مقابله با موج‌های جدید فیشینگ، بسته جامع جدید شامل «دستورالعمل PSD3» و «مقررات خدمات پرداخت (PSR)» را به تصویب رساند.
            </p>
            <p>
              به عنوان <strong className="text-white font-bold">مبین حسنی</strong> (لیدر بخش دولوپمنت صافی‌پی)، هدف تیم فنی ما این بوده است که نه تنها با استانداردهای جاری همگام بمانیم، بلکه سیستم را از هم‌اکنون برای اجرای بدون وقفه پیش‌نویس‌های فنی PSD3 آماده سازیم.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/psd3-open-banking-compliance/hero.jpg" 
                alt="بانکداری باز و استانداردهای PSD3 در صافی‌پی" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">شکل ۵.۰: معماری میکروسرویس‌های امنیتی و درگاه‌های API بانکداری باز</span>
              </div>
            </div>
          </section>

          {/* بخش ۲ */}
          <section id="sca-implementation" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-cyan-500 pr-4">
              ۲. احراز هویت قوی (SCA) و پیوند پویا (Dynamic Linking)
            </h2>
            <p>
              احراز هویت قوی مشتری (Strong Customer Authentication - SCA) الزام می‌کند که هرگونه دسترسی به حساب یا تراکنش مالی، باید با تایید حداقل ۲ فاکتور از ۳ فاکتور زیر همراه باشد:
            </p>
            <ul className="list-disc pr-6 space-y-3 text-gray-300">
              <li><strong className="text-white">دانش (Knowledge):</strong> چیزی که فقط کاربر می‌داند (مانند رمز عبور پیچیده یا PIN).</li>
              <li><strong className="text-white">مالکیت (Possession):</strong> چیزی که فقط کاربر در اختیار دارد (گوشی تاییدشده، کلید امنیتی FIDO2).</li>
              <li><strong className="text-white">ذات بیومتریک (Inherence):</strong> ویژگی فیزیکی کاربر (FaceID یا اسکن اثرانگشت در محفظه سخت‌افزاری Secure Enclave).</li>
            </ul>
            <p>
              ما همچنین مکانیزم «پیوند پویا» (Dynamic Linking) را مستقر کرده‌ایم که تضمین می‌کند کد رمز یک‌بارمصرف به صورت ریاضی به شماره حساب مقصد و مبلغ تراکنش گره خورده است؛ در صورت هرگونه حمله مرد میانی (Man-in-the-Middle)، تراکنش بلافاصله رد می‌شود.
            </p>
          </section>

          {/* بخش ۳ */}
          <section id="open-banking-apis" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-cyan-500 pr-4">
              ۳. معماری APIهای بانکداری باز و امنیت دوطرفه mTLS
            </h2>
            <p>
              درگاه‌های API صافی‌پی از استانداردهای گروه برلین (The Berlin Group NextGenPSD2) پیروی می‌کنند. برقراری ارتباط میان سرورهای ما و ارائه‌دهندگان مورد تایید، منحصراً از طریق گواهینامه‌های الکترونیکی معتبر اروپایی (QWAC و QSealC تحت مقررات eIDAS) و کانال‌های رمزنگاری دوطرفه mTLS صورت می‌پذیرد.
            </p>
          </section>

          {/* بخش ۴ */}
          <section id="iban-name-check" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-cyan-500 pr-4">
              ۴. سرویس تطابق هوشمند نام و شماره شبا (Confirmation of Payee)
            </h2>
            <p>
              یکی از ارکان اجباری مقررات جدید خدمات پرداخت اتحادیه اروپا، جلوگیری از انتقال اشتباه وجه به افراد ناشناس یا کلاهبرداران است. سیستم مهندسی صافی‌پی قبل از کسر موجودی، نام گیرنده واردشده توسط کاربر را با نام صاحب حساب بانکی مقصد در بانک اروپایی تطبیق داده و در صورت هرگونه عدم انطباق، به کاربر هشدار فوری نمایش می‌دهد.
            </p>
          </section>

          {/* بخش ۵ */}
          <section id="engineering-standards" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-cyan-500 pr-4">
              ۵. استانداردهای توسعه نرم‌افزار در خط تولید کد صافی‌پی
            </h2>
            <blockquote className="border-r-4 border-cyan-500 bg-white/[0.02] p-8 rounded-2xl my-8 italic text-lg text-white">
              «به عنوان لیدر بخش دولوپمنت، باور من این است که امنیت و تطابق با رگولاتوری نباید سرعت تجربه کاربری را کُند کنند. ما سیستمی مهندسی کرده‌ایم که پیشرفته‌ترین پروتکل‌های امنیتی اتحادیه اروپا را در پس‌زمینه و بدون ایجاد دردسر برای کاربر نهایی اجرا می‌کند.»
              <footer className="text-cyan-400 font-bold text-sm not-italic mt-3">— مبین حسنی، لیدر بخش دولوپمنت</footer>
            </blockquote>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}
