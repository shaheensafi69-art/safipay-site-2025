'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowUpLeft, ShieldCheck, Search, Sparkles, BookOpen, UserCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

interface BlogPostItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const blogPostsFa: BlogPostItem[] = [
  {
    id: 1,
    title: "امنیت نهادی در سطح اتحادیه اروپا: چگونه سافی‌پی از دارایی‌های جهانی شما محافظت می‌کند",
    excerpt: "بررسی عمیق و تخصصی ساختار رمزنگاری انتها به انتها، ایزوله‌سازی کلیدهای امنیتی و استانداردهای انطباق SEPA تحت نظارت فنی و مهندسی ارشد.",
    category: "امنیت و انطباق قانونی",
    author: "مجتبی رحمانی",
    date: "۹ حوت ۱۴۰۴",
    readTime: "۱۲ دقیقه",
    slug: "safipay-system-security",
    featured: true,
  },
  {
    id: 2,
    title: "راهنمای کامل ویزا کارت مجازی سافی‌پی: پرداخت‌های بین‌المللی بدون مرز",
    excerpt: "تمام نکات پیرامون صدور آنی کارت در کمتر از ۶۰ ثانیه، تایید دومرحله‌ای امنیتی 3D Secure 2.0، پشتیبانی از چند ارز و پذیرش در تمامی درگاه‌های جهانی.",
    category: "بانکداری دیجیتال",
    author: "شاهین صافی",
    date: "۷ حوت ۱۴۰۴",
    readTime: "۱۵ دقیقه",
    slug: "visa-card-guide",
  },
  {
    id: 3,
    title: "مزایای حساب IBAN اختصاصی اروپایی برای کاربران و فریلنسرهای بین‌المللی",
    excerpt: "چرا داشتن شماره شبا (IBAN) مستقیم اروپایی فاصله‌های بانکی را حذف کرده و امکان دریافت و ارسال آنی حوالجات SEPA Instant را با کمترین کارمزد ممکن می‌سازد.",
    category: "بانکداری دیجیتال",
    author: "ساحل سالم",
    date: "۴ حوت ۱۴۰۴",
    readTime: "۷ دقیقه",
    slug: "iban-account-benefits",
  },
  {
    id: 4,
    title: "داستان ساخت سافی‌پی: از چالش‌های منطقه‌ای تا تاسیس هاب مالی پاریس",
    excerpt: "سفر الهام‌بخش ساخت نئوبانک بین‌المللی سافی‌پی به رهبری بنیان‌گذار شاهین صافی جهت توانمندسازی اقتصادی اقشار فاقد دسترسی به بانکداری سنتی.",
    category: "چشم‌انداز و رهبری",
    author: "شیرین گل احمدی",
    date: "۱ حوت ۱۴۰۴",
    readTime: "۱۰ دقیقه",
    slug: "about-shaheen-safi",
  },
  {
    id: 5,
    title: "تکنولوژی eSIM بین‌المللی: اینترنت پرسرعت در بیش از ۲۰۰ کشور جهان",
    excerpt: "چگونه سیم‌کارت دیجیتال سافی‌پی اتصال بدون وقفه اینترنت را برای مسافران بین‌المللی بدون نیاز به تعویض سیم‌کارت فیزیکی یا پرداخت هزینه‌های سنگین رومینگ فراهم می‌کند.",
    category: "سفر و ارتباطات",
    author: "مبین حسنی",
    date: "۲۸ دلو ۱۴۰۴",
    readTime: "۵ دقیقه",
    slug: "esim-travel-technology",
  },
  {
    id: 6,
    title: "آینده بانکداری دیجیتال: ترکیب هوش مصنوعی مستقل و اقتصاد فرامرزی",
    excerpt: "بررسی معماری‌های نسل جدید مالی؛ چگونگی جایگزینی شعب سنتی و کند با هوش مصنوعی، تسویه آنی تراکنش‌ها و نئوبانک‌های ابری نسل چهارم.",
    category: "معماری فین‌تک",
    author: "ساحل سالم",
    date: "۲۵ دلو ۱۴۰۴",
    readTime: "۶ دقیقه",
    slug: "future-of-banking",
  },
  {
    id: 7,
    title: "سافی‌پی چیست؟ راهنمای جامع اکوسیستم خدمات مالی و نئوبانک اروپایی",
    excerpt: "بررسی تمام ارکان نئوبانک سافی‌پی شامل حساب IBAN، کارت‌های ویزا، تراکنش‌های بین‌المللی، سیم‌کارت دیجیتال و رعایت استانداردهای نظارتی اتحادیه اروپا.",
    category: "معرفی عمومی",
    author: "شاهین صافی",
    date: "۲۲ دلو ۱۴۰۴",
    readTime: "۸ دقیقه",
    slug: "what-is-safipay",
  },
  {
    id: 8,
    title: "انطباق سیستم صافی‌پی با قوانین SEPA و الزامات شورای پرداخت‌های اروپا (EPC)",
    excerpt: "بررسی تخصصی نحوه پیاده‌سازی استانداردهای SEPA Credit Transfer و SEPA Instant، تطابق با کتابچه قوانین EPC و تسویه لحظه‌ای بدون واسطه در صافی‌پی.",
    category: "امنیت و انطباق قانونی",
    author: "ساحل سالم",
    date: "۱۹ دلو ۱۴۰۴",
    readTime: "۸ دقیقه",
    slug: "sepa-regulatory-framework",
  },
  {
    id: 9,
    title: "استانداردهای نظارتی FCA بریتانیا و سیاست‌های حفاظت از سرمایه در اکوسیستم صافی‌پی",
    excerpt: "تحلیل تخصصی استانداردهای مرجع رفتار مالی بریتانیا (FCA)، مقررات پول الکترونیکی (EMRs) و سیستم‌های تفکیک و حفاظت از دارایی کاربران (Safeguarding).",
    category: "امنیت و انطباق قانونی",
    author: "شیرین گل احمدی",
    date: "۱۷ دلو ۱۴۰۴",
    readTime: "۹ دقیقه",
    slug: "fca-compliance-standards",
  },
  {
    id: 10,
    title: "مدیریت جامع اکوسیستم صافی‌پی: هماهنگ‌سازی قوانین مالی چند کشوری و استانداردهای بین‌المللی",
    excerpt: "راهبرد جامع شیرین گل احمدی، مدیر کل اکوسیستم صافی‌پی، در همگام‌سازی چارچوب‌های نظارتی اتحادیه اروپا، بریتانیا و خاورمیانه و خلق یک ساختار امن و یکپارچه مالی.",
    category: "چشم‌انداز و رهبری",
    author: "شیرین گل احمدی",
    date: "۱۵ دلو ۱۴۰۴",
    readTime: "۸ دقیقه",
    slug: "global-ecosystem-governance",
  },
  {
    id: 11,
    title: "چارچوب بین‌المللی مبارزه با پولشویی (6AMLD و FATF): سیستم‌های نظارت عملیاتی صافی‌پی",
    excerpt: "تحلیل جامع سیستم‌های نظارت عملیاتی ضدپولشویی (AML)، توصیه‌های ۴۰‌گانه FATF، غربالگری خودکار PEP و تحریم‌ها در صافی‌پی به قلم مدیر عملیات.",
    category: "امنیت و انطباق قانونی",
    author: "مجتبی رحمانی",
    date: "۱۲ دلو ۱۴۰۴",
    readTime: "۱۰ دقیقه",
    slug: "aml-fatf-regulatory-compliance",
  },
  {
    id: 12,
    title: "انطباق با دستورالعمل‌های PSD2 و PSD3 اروپا: استانداردهای فنی و امنیت API توسعه‌دهندگان",
    excerpt: "تشریح معماری فنی بانکداری باز (Open Banking)، استانداردهای فنی EBA RTS، احراز هویت قوی (SCA) و مهاجرت به PSD3 در صافی‌پی به قلم لیدر بخش دولوپمنت.",
    category: "بانکداری دیجیتال",
    author: "مبین حسنی",
    date: "۱۰ دلو ۱۴۰۴",
    readTime: "۸ دقیقه",
    slug: "psd3-open-banking-compliance",
  },
  {
    id: 13,
    title: "چشم‌انداز استراتژیک انطباق نهادی: ساخت یک سیستم مالی جهانی و شفاف توسط صافی‌پی",
    excerpt: "دیدگاه بنیادین شاهین صافی، دایرکتور و فوندر صافی‌پی، در خصوص پیوند آزادی مالی، اتصال به رگولاتوری‌های برتر جهان (SEPA، FCA، EBA) و شکستن انزوای اقتصادی.",
    category: "چشم‌انداز و رهبری",
    author: "شاهین صافی",
    date: "۸ دلو ۱۴۰۴",
    readTime: "۱۱ دقیقه",
    slug: "institutional-compliance-vision",
  }
];

const categoriesFa = ["همه", "بانکداری دیجیتال", "امنیت و انطباق قانونی", "سفر و ارتباطات", "چشم‌انداز و رهبری", "معرفی عمومی"];

export default function BlogPageFa() {
  const params = useParams();
  const lang = (params?.lang as string) || 'fa';
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPostsFa.filter(post => {
      const matchesCategory = selectedCategory === "همه" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPostsFa.find(p => p.featured) || blogPostsFa[0];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans selection:bg-[#D4AF37] selection:text-black" dir="rtl">
      
      {/* هاله‌های پس‌زمینه نوری */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* هدر وبلاگ و دانشنامه */}
      <div className="container mx-auto px-6 mb-16 text-center relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold mb-6">
          <ShieldCheck size={14} />
          <span>دانشنامه تخصصی و مرکز پژوهش مالی SafiPay</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tight">
          مرکز تحلیل <span className="text-[#D4AF37]">و</span> دانش نئوبانک
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          جامع‌ترین تحلیل‌های تخصصی درباره بانکداری بین‌المللی اروپا، کارت‌های بدون مرز ویزا، زیرساخت امنیت مالی و ترندهای نوین فین‌تک جهانی.
        </p>

        {/* جعبه جستجوی آنی مقالات */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search size={18} className="absolute right-4 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در عناوین، موضوعات یا نویسندگان..."
              className="w-full pr-12 pl-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.06] transition-all"
            />
          </div>
        </div>

        {/* فیلتر دسته‌بندی موضوعی */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categoriesFa.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-12">
        {/* مقاله ویژه و شاخص (در صورت نبود سرچ) */}
        {!searchQuery && selectedCategory === "همه" && (
          <div className="relative group">
            <Link
              href={`/${lang}/blog/${featuredPost.slug}`}
              className="block rounded-[2.5rem] bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[#D4AF37]/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] font-bold">
                      <Sparkles size={12} /> مقاله شاخص و تحلیلی
                    </span>
                    <span className="text-gray-400">{featuredPost.category}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5"><UserCheck size={14} className="text-[#D4AF37]" /> {featuredPost.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#D4AF37]" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#D4AF37]" /> زمان مطالعه: {featuredPost.readTime}</span>
                    <span className="mr-auto inline-flex items-center gap-1 text-white font-bold group-hover:text-[#D4AF37] group-hover:-translate-x-1 transition-all">
                      مطالعه تحلیل کامل <ArrowUpLeft size={16} />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-72 lg:h-[450px] w-full overflow-hidden bg-[#151515]">
                  <Image
                    src={`/blog/${featuredPost.slug}/hero.jpg`}
                    alt={featuredPost.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0d0d0d] via-transparent to-transparent" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* لیست مقالات شبکه‌ای */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-black italic tracking-tight text-white flex items-center gap-2">
              <BookOpen size={20} className="text-[#D4AF37]" />
              <span>فهرست مقالات و گزارش‌ها ({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 rounded-3xl bg-white/[0.02] border border-white/5">
              <p className="text-gray-400 text-lg">مقاله‌ای با عبارت جستجوی "{searchQuery}" یافت نشد.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("همه"); }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs"
              >
                بازنشانی فیلترها
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/${lang}/blog/${post.slug}`} 
                  className="group relative flex flex-col bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  {/* بخش تصویر شاخص */}
                  <div className="relative h-60 w-full bg-[#151515] overflow-hidden">
                    <Image 
                      src={`/blog/${post.slug}/hero.jpg`} 
                      alt={post.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#D4AF37] text-[11px] font-bold">
                      {post.category}
                    </div>

                    <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      <ArrowUpLeft size={18} />
                    </div>
                  </div>

                  {/* بدنه و متون کارت */}
                  <div className="p-7 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                      <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#D4AF37]" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#D4AF37]" /> {post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-black italic tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>

                    <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">نویسنده: <strong className="text-gray-300">{post.author}</strong></span>
                      <span className="text-[#D4AF37] font-bold group-hover:-translate-x-1 transition-transform inline-flex items-center gap-1">
                        مطالعه <ArrowUpLeft size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}