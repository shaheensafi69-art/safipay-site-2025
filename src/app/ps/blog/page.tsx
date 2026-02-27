'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowUpLeft, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

const blogPosts = {
  ps: [
    {
      id: 1,
      title: "د اروپايي اتحادیې په کچه امنیت: موږ څنګه ستاسو له شتمنیو ساتنه کوو؟",
      excerpt: "د مجتبی تر تخنیکي څارنې لاندې د SafiPay د امنیتي پروتوکولونو ژوره څیړنه او تحلیل.",
      date: "۹ کب ۱۴۰۴",
      readTime: "۱۲ دقیقې",
      slug: "safipay-system-security"
    },
    {
      id: 2,
      title: "د SafiPay مجازي ویزا کارت بشپړ لارښود",
      excerpt: "د اروپايي اتحادیې له مالي بنسټونو څخه د صادر شویو کارتونو په مرسته مالي پولې ماتې کړئ.",
      date: "۷ کب ۱۴۰۴",
      readTime: "۱۵ دقیقې",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "د افغان اتباعو لپاره د اروپايي IBAN حساب ګټې",
      excerpt: "د نړیوالو حوالو ترلاسه کولو لپاره په مستقیم ډول د SEPA بانکي سیسټم سره وصل شئ.",
      date: "۴ کب ۱۴۰۴",
      readTime: "۷ دقیقې",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "د SafiPay کیسه: له کابل څخه د پاریس تر زړه پورې",
      excerpt: "د مجموعې د بنسټ ایښودونکي شاهین صافي تر مشرۍ لاندې د SafiPay جوړولو خیالي سفر.",
      date: "۱ کب ۱۴۰۴",
      readTime: "۱۰ دقیقې",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM: د بې پولې نړیوالو اړیکو لپاره ستاسو کلید",
      excerpt: "د نړۍ په هر ګوټ کې د لوړ سرعت نړیوال انټرنیټ سره پرته له کوم محدودیت وصل پاتې شئ.",
      date: "۲۸ سلواغه ۱۴۰۴",
      readTime: "۵ دقیقې",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "د بانکدارۍ راتلونکی: سرعت، امنیت او ساده توب",
      excerpt: "څنګه عصري مالي اکوسیستمونه د زړو او ورو بانکونو ځای نیسي.",
      date: "۲۵ سلواغه ۱۴۰۴",
      readTime: "۶ دقیقې",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "SafiPay څه شی دی؟ زموږ مالي خدمات په یو نظر کې",
      excerpt: "د مالي ازادۍ لپاره زموږ ماموریت او د SafiPay بشپړ اکوسیستم وپیژنئ.",
      date: "۲۲ سلواغه ۱۴۰۴",
      readTime: "۸ دقیقې",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang = params?.lang || 'ps';
  const posts = blogPosts.ps;

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="rtl">
      
      {/* د بلاګ هیدر برخه */}
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-6">
          <ShieldCheck size={14} />
          <span>د SafiPay رسمي پوهنغونډ</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">د تحلیل او خبرونو مرکز</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
          نړیوالو بازارونو ته د افغانستان د نښلولو لپاره د فینټیک، نړیوال امنیت او مالي حل لارو په برخه کې وروستي لاسته راوړنې.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/${lang}/blog/${post.slug}`} 
              className="group relative flex flex-col bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* د کارت انځور برخه */}
              <div className="relative h-64 w-full bg-[#151515] overflow-hidden">
                <Image 
                  src={`/blog/${post.slug}/hero.jpg`} 
                  alt={post.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* په عکس باندې ګرادینټ اوورلی */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
                
                {/* د غشي تڼۍ */}
                <div className="absolute top-6 left-6 z-20 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                  <ArrowUpLeft size={20} />
                </div>
              </div>

              {/* د کارت متني منځپانګه */}
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold leading-tight group-hover:text-amber-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-xs leading-[1.8] line-clamp-3 text-justify font-light">
                  {post.excerpt}
                </p>

                <div className="pt-6 mt-auto">
                  <div className="w-full h-[1px] bg-white/5 group-hover:bg-amber-500/20 transition-colors" />
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-600 uppercase group-hover:text-amber-500 transition-colors">
                      بشپړه مقاله لوستل
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* شالید تزییني المان */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </main>
  );
}