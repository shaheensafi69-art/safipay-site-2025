'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldAlert, Landmark, Eye, CheckCircle2, 
  ArrowLeft, FileText, Search, Activity,
  Cpu, Lock, AlertTriangle
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function AmlFatfCompliancePageFa() {
  const author = {
    name: "مجتبی رحمانی",
    role: "مدیر عملیات (Operations Manager)",
    avatar: "/mujtaba.jpeg",
    email: "mujtaba@safipay.net",
    bio: "مجتبی رحمانی، مدیر عملیات اکوسیستم نئوبانک صافی‌پی، مسئول رهبری عملیات ضدپولشویی (AML)، پیاده‌سازی الزامات دستورالعمل ششم اتحادیه اروپا (6AMLD)، پایش زنده تراکنش‌ها و تطابق با چارچوب‌های کارگروه اقدام مالی (FATF) است.",
    profileUrl: "/fa/founder/mujtaba-rahmani"
  };

  const keyTakeaways = [
    "صافی‌پی دستورالعمل ششم ضدپولشویی اتحادیه اروپا (6AMLD) و توصیه‌های ۴۰‌گانه گروه ویژه اقدام مالی (FATF) را در هسته موتور عملیاتی خود ادغام نموده است.",
    "موتور پایش زنده تراکنش‌ها (Transaction Monitoring Engine) با هوش مصنوعی الگوهای رفتاری مشکوک، تراکنش‌های خرد متوالی (Smurfing) و جابه‌جایی‌های غیرعادی را در زیر ۵۰ میلی‌ثانیه شناسایی می‌کند.",
    "فرآیند احراز هویت مشتریان (KYC) مجهز به بررسی خودکار در برابر پایگاه‌های داده جهانی تحریم‌ها (OFAC، سازمان ملل و اتحادیه اروپا) و فهرست اشخاص دارای موقعیت سیاسی (PEP) است.",
    "ثبت غیرقابل تغییر سوابق حسابرسی (Audit Trail) تضمین می‌کند که داده‌های مالی برای حسابرسی‌های نهادی و مبارزه قاطع با جرایم مالی سازمان‌یافته با بالاترین استاندارد حفظ شوند."
  ];

  const tableOfContents = [
    { id: "fatf-foundations", label: "۱. چارچوب توصیه‌های ۴۰‌گانه FATF و دستورالعمل 6AMLD" },
    { id: "kyc-pep-screening", label: "۲. احراز هویت هوشمند، بیومتریک زنده و غربالگری PEP" },
    { id: "transaction-monitoring", label: "۳. موتور نظارت بلادرنگ و کشف الگوهای مشکوک" },
    { id: "data-sanctions", label: "۴. همگام‌سازی لحظه‌ای با فهرست تحریم‌های بین‌المللی" },
    { id: "operations-integrity", label: "۵. تعهد تیم عملیات صافی‌پی به سلامت نظام مالی" },
  ];

  const faqs = [
    {
      question: "تفاوت دستورالعمل 6AMLD با نسخه‌های قبلی ضدپولشویی در چیست؟",
      answer: "دستورالعمل 6AMLD اتحادیه اروپا دایره جرایم منشا پولشویی را به ۲۲ دسته مشخص از جمله جرایم سایبری، جرایم مالیاتی و تبانی گسترش داده و مسئولیت کیفری اشخاص حقوقی و مدیران را در صورت سهل‌انگاری سنگین‌تر کرده است."
    },
    {
      question: "چرا پایش تراکنش‌ها در صافی‌پی موجب مسدودسازی ناعادلانه حساب افراد عادی نمی‌شود؟",
      answer: "الگوریتم‌های عملیاتی ما به جای استفاده از فیلترهای خشک سنتی، از مدل‌های هوش مصنوعی با درک زمینه و رفتار طبیعی کاربر استفاده می‌کنند؛ بدین ترتیب نرخ هشدارهای اشتباه (False Positives) تا ۸۷٪ کاهش یافته و کاربران واقعی بدون وقفه به پول خود دسترسی دارند."
    },
    {
      question: "اطلاعات مالی کاربران تا چه مدت برای تطابق با AML نگهداری می‌شوند؟",
      answer: "طبق استانداردهای اتحادیه اروپا و FATF، سوابق تراکنش‌ها به مدت ۵ سال پس از پایان رابطه کاری در پایگاه‌های داده امن و با رعایت اصول حریم خصوصی GDPR نگهداری می‌شوند."
    }
  ];

  const relatedPosts = [
    {
      title: "معماری امنیت سامانه صافی‌پی: استانداردهای حفاظت در سطح بانک‌های جهانی",
      slug: "safipay-system-security",
      category: "امنیت سایبری",
      readTime: "۱۰ دقیقه",
      excerpt: "آشنایی با رمزنگاری پیشرفته نظامی، احراز هویت بیومتریک و ماژول‌های امنیتی سخت‌افزاری."
    },
    {
      title: "استانداردهای نظارتی FCA بریتانیا و سیاست‌های حفاظت از سرمایه در اکوسیستم صافی‌پی",
      slug: "fca-compliance-standards",
      category: "رگولاتوری بین‌المللی",
      readTime: "۹ دقیقه",
      excerpt: "بررسی تفکیک کامل دارایی‌های کاربران و استانداردهای موسسات پول الکترونیکی بریتانیا."
    },
    {
      title: "انطباق با دستورالعمل‌های PSD2 و PSD3 اروپا: استانداردهای فنی و امنیت API",
      slug: "psd3-open-banking-compliance",
      category: "زیرساخت فنی",
      readTime: "۸ دقیقه",
      excerpt: "چگونگی انطباق فنی پروتکل‌های احراز هویت مشتریان و استانداردهای بانکداری باز اروپا."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28" dir="rtl">
      
      {/* هدر مقاله (Hero Header) */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <ShieldAlert size={16} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em]">گزارش عملیات ضدپولشویی و سلامت بانکی • ۲۰۲۶</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter italic leading-[1.15]">
            چارچوب ضدپولشویی <span className="text-blue-400">6AMLD و FATF:</span> <br />سیستم‌های نظارت عملیاتی صافی‌پی
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            تشریح معماری عملیاتی صافی‌پی در پایش بلادرنگ تراکنش‌ها، غربالگری تحریم‌های بین‌المللی و صیانت از سلامت جریان‌های مالی فرامرزی.
          </p>
        </div>
      </section>

      {/* نگه‌دارنده بخش تحریریه و محتوا */}
      <BlogEditorialEnhancer
        locale="fa"
        slug="aml-fatf-regulatory-compliance"
        title="چارچوب بین‌المللی مبارزه با پولشویی (6AMLD و FATF): سیستم‌های نظارت عملیاتی صافی‌پی"
        description="بررسی عمیق مکانیزم‌های ضدپولشویی، احراز هویت پیشرفته و پایش هوشمند ریسک در صافی‌پی به قلم مجتبی رحمانی، مدیر عملیات."
        category="نظارت عملیاتی"
        readTime="۱۰ دقیقه"
        publishedDate="۲۵ فوریه ۲۰۲۶"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg text-right">
          
          {/* بخش ۱ */}
          <section id="fatf-foundations" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۱. چارچوب توصیه‌های ۴۰‌گانه FATF و دستورالعمل 6AMLD
            </h2>
            <p>
              گروه ویژه اقدام مالی (FATF) بالاترین مرجع سیاست‌گذاری جهانی در زمینه مبارزه با پولشویی و تامین مالی تروریسم است. از سوی دیگر، دستورالعمل ششم مبارزه با پولشویی اتحادیه اروپا (6AMLD - Directive (EU) 2018/1673)، استانداردهای این نهاد بین‌المللی را به احکام الزام‌آور قضایی با ضمانت اجرایی سنگین تبدیل کرده است.
            </p>
            <p>
              به عنوان <strong className="text-white font-bold">مجتبی رحمانی</strong> (مدیر عملیات صافی‌پی)، اولویت شماره یک من در اداره روزانه پلتفرم، تضمین این نکته است که سیستم پرداخت سریع ما به عنوان یک سپر نفوذناپذیر در برابر هرگونه سوءاستفاده مالی عمل کند. اعتماد جامعه بین‌المللی و بانک‌های همکار اروپایی به صافی‌پی، حاصل همین انضباط بی‌نقص عملیاتی است.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/aml-fatf-regulatory-compliance/hero.jpg" 
                alt="سیستم‌های ضدپولشویی و نظارت عملیاتی در صافی‌پی" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">شکل ۴.۰: خط سیر تحلیل و پالایش چندمرحله‌ای تراکنش‌ها در مرکز عملیات صافی‌پی</span>
              </div>
            </div>
          </section>

          {/* بخش ۲ */}
          <section id="kyc-pep-screening" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۲. احراز هویت هوشمند، بیومتریک زنده و غربالگری PEP
            </h2>
            <p>
              شناخت مشتری (Know Your Customer - KYC) در صافی‌پی تنها یک بررسی صوری نیست. فرآیند ما شامل:
            </p>
            <ul className="list-disc pr-6 space-y-3 text-gray-300">
              <li><strong className="text-white">بررسی هویت بصری هوشمند:</strong> راستی‌آزمایی مدارک هویتی در برابر پایگاه‌های داده بین‌المللی با بررسی هولوگرام‌ها و فونت‌های استاندارد پاسپورت‌های بیومتریک (MRZ).</li>
              <li><strong className="text-white">تطبیق بیومتریک زنده (Liveness Detection):</strong> جلوگیری از جعل هویت به وسیله ماسک‌های سیلیکونی یا دیپ‌فیک‌های هوش مصنوعی.</li>
              <li><strong className="text-white">غربالگری اشخاص دارای موقعیت سیاسی (PEP):</strong> پایش افراد دارای مناصب دولتی حساس و نزدیکان آن‌ها برای پیشگیری از فساد مالی و رشوه بین‌المللی.</li>
            </ul>
          </section>

          {/* بخش ۳ */}
          <section id="transaction-monitoring" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۳. موتور نظارت بلادرنگ و کشف الگوهای مشکوک
            </h2>
            <p>
              پولشویان حرفه‌ای اغلب از روش‌هایی نظیر خرد کردن مبالغ بزرگ به تراکنش‌های ریز متوالی (Structuring / Smurfing) یا ارسال پول در چرخه‌های بسته استفاده می‌کنند.
            </p>
            <p>
              موتور پردازش رویدادهای ما در کمتر از ۵۰ میلی‌ثانیه، ارتباطات میان حساب‌ها، سرعت واریز و برداشت و فواصل جغرافیایی تراکنش‌ها را تحلیل گرافیکی می‌کند. هرگونه ناهنجاری ساختاری فوراً قرنطینه شده و جهت بررسی به دپارتمان تخصصی عملیات ارجاع داده می‌شود.
            </p>
          </section>

          {/* بخش ۴ */}
          <section id="data-sanctions" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۴. همگام‌سازی لحظه‌ای با فهرست تحریم‌های بین‌المللی
            </h2>
            <p>
              صافی‌پی سرورهای غربالگری خود را به صورت زنده با فهرست‌های تحریمی شورای امنیت سازمان ملل (UN Sanctions)، فهرست تحریم‌های اتحادیه اروپا (EU Consolidated Sanctions) و پایگاه OFAC همگام نگه می‌دارد. این سازوکار پیشرفته مانع از ورود سرمایه‌های آلوده و تضمین‌کننده امنیت خاطر کامل سرمایه‌گذاران قانونی در پلتفرم ما است.
            </p>
          </section>

          {/* بخش ۵ */}
          <section id="operations-integrity" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-r-4 border-blue-500 pr-4">
              ۵. تعهد تیم عملیات صافی‌پی به سلامت نظام مالی
            </h2>
            <blockquote className="border-r-4 border-blue-500 bg-white/[0.02] p-8 rounded-2xl my-8 italic text-lg text-white">
              «مدیریت عملیات در یک نئوبانک جهانی یعنی حفظ مرز دقیق میان سهولت فوق‌العاده برای کاربران واقعی و سد آهنین در برابر فعالیت‌های غیرقانونی. ما در صافی‌پی نشان داده‌ایم که احترام به حقوق شهروندی و انطباق سخت‌گیرانه با رگولاتورهای جهانی، دو روی یک سکه‌اند.»
              <footer className="text-blue-400 font-bold text-sm not-italic mt-3">— مجتبی رحمانی، مدیر عملیات</footer>
            </blockquote>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}
