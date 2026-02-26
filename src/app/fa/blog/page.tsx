'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { useParams } from 'next/navigation';

// دیتای نمونه مقالات (این بخش را بعداً می‌توانید از دیتابیس بگیرید)
const blogPosts: any = {
  fa: [
    {
      id: 1,
      title: "امنیت در تراکنش‌های صافی‌پی",
      excerpt: "چگونه صافی‌پی با استانداردهای اتحادیه اروپا امنیت دارایی‌های شما را تضمین می‌کند؟",
      date: "۱۴۰۲/۱۱/۱۵",
      readTime: "۵ دقیقه",
      image: "/blog/security.jpg", // مسیر تصویر مقاله
      slug: "safipay-system-security"
    },
    {
      id: 2,
      title: "داستان تولد یک رویا",
      excerpt: "از کابل تا بازارهای جهانی؛ چگونه شاهین صافی ایده‌ی صافی‌پی را به واقعیت تبدیل کرد.",
      date: "۱۴۰۲/۱۱/۱۰",
      readTime: "۸ دقیقه",
      image: "/blog/dream.jpg",
      slug: "what-is-safipay"
    },
    {
      id: 3,
      title: "آینده بلاک‌چین در افغانستان",
      excerpt: "بررسی نقش تکنولوژی‌های نوین مالی در بازسازی اقتصاد دیجیتال افغانستان.",
      date: "۱۴۰۲/۱۱/۰۵",
      readTime: "۶ دقیقه",
      image: "/blog/blockchain.jpg",
      slug: "about-shaheen-safi"
    }
  ],
  en: [
    {
      id: 1,
      title: "Security in SafiPay Transactions",
      excerpt: "How SafiPay ensures your assets' safety with EU banking standards.",
      date: "2026-02-15",
      readTime: "5 min",
      image: "/blog/security.jpg",
      slug: "safipay-system-security"
    },
    // سایر مقالات انگلیسی...
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'fa';
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  
  const posts = blogPosts[lang] || blogPosts.fa;

  const labels: any = {
    fa: { title: "دانشنامه صافی‌پی", subtitle: "آخرین اخبار، تحلیل‌ها و آموزش‌های دنیای فین‌تک", btn: "مطالعه مقاله" },
    en: { title: "SafiPay Insights", subtitle: "Latest news, analysis, and fintech tutorials", btn: "Read More" },
    ps: { title: "د صافي پي پوهنغونډ", subtitle: "د فنټیک نړۍ وروستي خبرونه او تحلیلونه", btn: "مقاله لوستل" }
  };

  const content = labels[lang] || labels.fa;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-600/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-amber-500 mb-4"
          >
            <BookOpen size={20} />
            <span className="text-xs font-black tracking-[0.3em] uppercase">SafiPay Blog</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            {content.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-light leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/${lang}/blog/${post.slug}`} className="group block">
                <div className="relative h-64 mb-6 overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-amber-500" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-amber-500" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-white text-xs font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    {content.btn}
                    <div className="h-[1px] w-8 bg-amber-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}