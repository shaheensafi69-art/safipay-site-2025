'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Lock, Terminal, Fingerprint, 
  Scan, Activity, ArrowLeft, CheckCircle2,
  KeyRound, ShieldAlert, Cpu, Server
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function SecuritySystemPageFa() {
  const author = {
    name: "مجتبی رحمانی",
    role: "بنیان‌گذار و معمار ارشد فنی و اقتصادی",
    avatar: "/mujtaba.jpeg",
    email: "mujtaba@safipay.net",
    bio: "مجتبی رحمانی هم‌بنیان‌گذار و معمار فنی و اقتصادی SafiPay است که طراحی الگوریتم‌های مدیریت ریسک، سیستم‌های امنیتی رمزنگاری‌شده و نظارت بر رعایت استانداردهای مالی اتحادیه اروپا را بر عهده دارد.",
    profileUrl: "/fa/founder/mujtaba-rahmani"
  };

  const keyTakeaways = [
    "سافی‌پی از رمزنگاری پیشرفته نظامی AES-256-GCM برای پایگاه داده‌ها و پروتکل TLS 1.3 برای ارتباطات امن شبکه بهره می‌برد.",
    "کلیدهای خصوصی کاربران در ماژول‌های سخت‌افزاری اختصاصی (HSM) به صورت کاملاً ایزوله و بدون دسترسی پرسنل نگهداری می‌شوند.",
    "تطابق کامل با راهنماهای مرجع بانکی اروپا (EBA) و استانداردهای حفاظت از داده‌های شخصی اتحادیه اروپا (GDPR).",
    "موتور هوش مصنوعی تشخیص کلاهبرداری، تراکنش‌ها را در کمتر از ۲۰ میلی‌ثانیه تحلیل کرده و الگوهای مشکوک را بلافاصله مسدود می‌کند."
  ];

  const tableOfContents = [
    { id: "security-matrix", label: "۱. ماتریس امنیتی و دفاع چندلایه" },
    { id: "cryptographic-vaults", label: "۲. گاوصندوق‌های سخت‌افزاری HSM" },
    { id: "zero-knowledge", label: "۳. ایزوله‌سازی داده‌ها بدون افشای اطلاعات" },
    { id: "eu-regulatory-safeguards", label: "۴. نگهداری دارایی در بانک‌های اروپا" },
    { id: "ai-fraud-prevention", label: "۵. هوش مصنوعی تشخیص آنی تقلب" },
  ];

  const faqs = [
    {
      question: "آیا موجودی حساب کاربران مشمول قوانین بیمه سپرده اروپا است؟",
      answer: "بله، دارایی‌های کاربران سافی‌پی در حساب‌های مجزا (Segregated Accounts) در بانک‌های معتبر و سطح یک شریک در اروپا نگهداری شده و در برابر هرگونه ریسک ورشکستگی کاملاً بیمه و محافظت شده هستند."
    },
    {
      question: "آیا کارمندان سافی‌پی به شماره کارت یا رمز دوم من دسترسی دارند؟",
      answer: "خیر، به لطف معماری Zero-Knowledge، هیچ‌یک از کارکنان به اطلاعات حساس کارت دسترسی ندارند و ارقام در ماژول سخت‌افزاری و سمت دستگاه کاربر رمزگشایی می‌شوند."
    },
    {
      question: "در صورت مفقود شدن گوشی یا کارت چه اقدامی باید انجام داد؟",
      answer: "کاربران می‌توانند با استفاده از کلید توقف اضطراری در پنل وب یا اپلیکیشن، در یک ثانیه تمام کارت‌ها را مسدود کرده و دسترسی سشن‌ها را لغو نمایند."
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
      title: "راهنمای کامل ویزا کارت مجازی سافی‌پی",
      slug: "visa-card-guide",
      category: "بانکداری دیجیتال",
      readTime: "۱۵ دقیقه",
      excerpt: "آموزش گام به گام پرداخت‌های اینترنتی و مدیریت کارت‌های ارزی."
    },
    {
      title: "مزایای حساب IBAN اختصاصی اروپایی",
      slug: "iban-account-benefits",
      category: "بانکداری دیجیتال",
      readTime: "۷ دقیقه",
      excerpt: "چرا داشتن شماره حساب مستقیم اروپایی برای تجارت فرامرزی ضروری است."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28" dir="rtl">
      
      {/* هدر مقاله */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Lock size={16} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">گزارش تخصصی امنیت رمزنگاری • نسخه ۲.۶</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight italic">
            امنیت فولادین <span className="text-[#D4AF37]">سیستم</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            تحلیل عمیق فنی ساختار دفاعی چندلایه نئوبانک سافی‌پی، الزامات انطباق با بانک مرکزی اروپا و موتور هوش مصنوعی مهار تهدیدات مالی.
          </p>
        </div>
      </section>

      {/* کامپوننت ارتقادهنده تحلیلی */}
      <BlogEditorialEnhancer
        locale="fa"
        slug="safipay-system-security"
        title="امنیت نهادی در سطح اتحادیه اروپا: چگونه سافی‌پی از دارایی‌های شما محافظت می‌کند"
        description="بررسی تخصصی معماری امنیتی SafiPay: پروتکل‌های رمزنگاری نظامی AES-256، ایزوله‌سازی کلیدها و استانداردهای انطباق SEPA در اتحادیه اروپا."
        category="امنیت و انطباق قانونی"
        readTime="۱۲ دقیقه"
        publishedDate="۹ حوت ۱۴۰۴"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-[2.2] font-light text-base md:text-lg text-justify">
          
          {/* بخش ۱ */}
          <section id="security-matrix" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۱. ماتریس امنیتی سافی‌پی: مفهوم دفاع چندلایه
            </h2>
            <p>
              در دنیای تبادلات مالی بین‌المللی، اعتماد دیجیتال بزرگترین دارایی است. تحت نظارت مهندسی هم‌بنیان‌گذار <strong className="text-white font-bold">مجتبی رحمانی</strong>، سافی‌پی از نخستین خطوط کد بر مبنای الگوی «دفاع چندلایه» بنا نهاده شده است. به این معنا که هیچ جزئی از سیستم به اجزای دیگر اعتماد کورکورانه ندارد و هر درخواست تراکنش باید هویت و امضای دیجیتال خود را اثبات کند.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/safipay-system-security/hero.jpg" 
                alt="معماری امنیتی سیستم" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-blue-400 font-bold">تصویر ۱: نظارت بلادرنگ بر دفترکل رمزنگاری و شناسایی الگوهای نامتعارف</span>
              </div>
            </div>
          </section>

          {/* بخش ۲ */}
          <section id="cryptographic-vaults" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۲. گاوصندوق‌های رمزنگاری و ماژول‌های سخت‌افزاری HSM
            </h2>
            <p>
              زیرساخت ذخیره‌سازی داده‌های حساس از تراشه‌های سخت‌افزاری تاییدشده FIPS 140-2 سطح ۳ بهره می‌برد که هرگز کلیدهای مادر را در حافظه رم سرورها به صورت متن آشکار قرار نمی‌دهند.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <Terminal size={24} className="text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">الگوریتم AES-256-GCM</h4>
                <p className="text-xs text-gray-400">رمزنگاری متقارن احرازشده برای تمام پایگاه‌های داده ذخیره‌سازی موجودی و تاریخچه تراکنش‌ها.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <KeyRound size={24} className="text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">امضای دیجیتال ECDSA</h4>
                <p className="text-xs text-gray-400">امضاهای نامتقارن با انتروپی بالا جهت تایید صحت درخواست‌های حواله و تغییرات امنیتی حساب.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <Server size={24} className="text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">پروتکل اجباری TLS 1.3</h4>
                <p className="text-xs text-gray-400">حفاظت از تبادل داده‌ها در بستر اینترنت و مسدودسازی کامل هرگونه تلاش برای شنود اطلاعات.</p>
              </div>
            </div>
          </section>

          {/* بخش ۳ */}
          <section id="zero-knowledge" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۳. ایزوله‌سازی داده‌ها و اصل عدم دسترسی (Zero-Knowledge)
            </h2>
            <p>
              حتی در فرضی‌ترین حالت دسترسی غیرمجاز به زیرساخت‌ها، ارقام اصلی کارت (PAN) و رمز دوم به صورت توکن‌های یکبارمصرف ذخیره شده‌اند و هیچ فردی خارج از چرخه شاپرک بین‌المللی قادر به بازخوانی اطلاعات کارت نخواهد بود.
            </p>
          </section>

          {/* بخش ۴ */}
          <section id="eu-regulatory-safeguards" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۴. حفاظت از سپرده‌ها در بانک‌های مرکزی اروپا
            </h2>
            <p>
              بر خلاف پلتفرم‌های رمزارزی با ریسک بالا، سافی‌پی هرگز موجودی سپرده‌گذاران را وارد فعالیت‌های وام‌دهی پرخطر نمی‌کند. تحت مدیریت مدیرعامل <strong className="text-white font-bold">ساحل سالم</strong>، صددرصد دارایی‌ها در بانک‌های رده‌بالای اتحادیه اروپا به صورت نقد نگهداری می‌شوند.
            </p>
          </section>

          {/* بخش ۵ */}
          <section id="ai-fraud-prevention" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۵. هوش مصنوعی تشخیص آنی و هوشمند کلاهبرداری
            </h2>
            <p>
              الگوریتم‌های حفاظتی سافی‌پی در کسری از ثانیه بیش از ۱۲۰ فاکتور رفتاری (موقعیت مکانی، سرعت تراکنش و اثر انگشت دستگاه) را بررسی کرده و تراکنش‌های واقعی را تایید و موارد فریبکارانه را در نطفه خاموش می‌کنند.
            </p>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}