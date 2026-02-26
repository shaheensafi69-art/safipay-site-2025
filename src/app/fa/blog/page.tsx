'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { useParams } from 'next/navigation';

// دیتای مقالات منطبق بر نام پوشه‌های شما در public/blog/
const blogPosts: any = {
  fa: [
    {
      id: 1,
      title: "امنیت در سطح اتحادیه اروپا؛ دارایی شما چگونه محافظت می‌شود؟",
      excerpt: "بررسی استانداردهای امنیتی SafiPay و نظارت‌های بانکی در حوزه یورو.",
      date: "۱۴۰۴/۱۲/۰۸",
      readTime: "۶ دقیقه",
      slug: "security-at-safipay" // نام پوشه شما در اسکرین‌شات
    },
    {
      id: 2,
      title: "راهنمای کامل دریافت ویزا کارت مجازی SafiPay",
      excerpt: "چگونه در کمتر از یک دقیقه کارت اعتباری بین‌المللی خود را فعال کنید.",
      date: "۱۴۰۴/۱۲/۰۵",
      readTime: "۴ دقیقه",
      slug: "visa-card-guide" // نام پوشه شما در اسکرین‌شات
    },
    {
      id: 3,
      title: "مزایای داشتن حساب IBAN اروپایی برای افغان‌ها",
      excerpt: "اتصال مستقیم به سیستم بانکی SEPA و دریافت حواله‌های ارزی بدون واسطه.",
      date: "۱۴۰۴/۱۲/۰۱",
      readTime: "۷ دقیقه",
      slug: "iban-account-benefits" // نام پوشه شما در اسکرین‌شات
    },
    {
      id: 4,
      title: "داستان SafiPay؛ از کابل تا قلب پاریس",
      excerpt: "روایتی از شکل‌گیری اولین سیستم بانکی دیجیتال مدرن توسط شاهین صافی.",
      date: "۱۴۰۴/۱۱/۲۸",
      readTime: "۱۰ دقیقه",
      slug: "about-shaheen-safi" // نام پوشه شما در اسکرین‌شات
    },
    {
      id: 5,
      title: "سیم‌کارت E-SIM؛ کلید ورود به دنیای ارتباطات جهانی",
      excerpt: "بدون مرز تماس بگیرید و از اینترنت پرسرعت بین‌المللی استفاده کنید.",
      date: "۱۴۰۴/۱۱/۲۵",
      readTime: "۵ دقیقه",
      slug: "esim-travel-technology" // نام پوشه شما در اسکرین‌شات
    },
    {
      id: 6,
      title: "آینده بانکداری؛ سرعت، امنیت و سادگی",
      excerpt: "چرا سیستم‌های نوین مالی جایگزین بانکداری سنتی می‌شوند؟",
      date: "۱۴۰۴/۱۱/۲۰",
      readTime: "۶ دقیقه",
      slug: "future-of-banking" // نام پوشه شما در اسکرین‌شات
    },
    {
      id: 7,
      title: "صافی‌پی چیست و چه خدماتی ارائه می‌دهد؟",
      excerpt: "آشنایی کامل با اکوسیستم مالی SafiPay و راه‌کارهای پرداخت بین‌المللی.",
      date: "۱۴۰۴/۱۱/۱۵",
      readTime: "۸ دقیقه",
      slug: "what-is-safipay" // نام پوشه شما در اسکرین‌شات
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'fa';
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const posts = blogPosts[lang] || blogPosts.fa;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post: any, index: number) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href={`/${lang}/blog/${post.slug}`} className="group block">
                <div className="relative h-72 mb-8 overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 group-hover:border-amber-500/40 transition-all duration-700 shadow-2xl">
                  {/* آدرس‌دهی داینامیک: مسیر پوشه اسلاگ + فایل hero.jpg */}
                  <Image 
                    src={`/blog/${post.slug}/hero.jpg`} 
                    alt={post.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-500 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}