'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// د SafiPay بلاګ مالومات - پښتو نسخه (رسمي او باوري سټایل)
const blogPosts: any = {
  ps: [
    {
      id: 1,
      title: "د اروپایي ټولنې په کچه امنیت؛ ستاسو شتمني څنګه خوندي کېږي؟",
      excerpt: "په یورو زون کې د SafiPay امنیتي معیارونو او بانکي څارنې دقیق جاج.",
      date: "۱۴۰۴/۱۲/۰۸",
      readTime: "۶ دقیقې",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "د SafiPay مجازی ویزا کارت ترلاسه کولو بشپړ لارښود",
      excerpt: "څنګه کولای شئ په یوه دقیقه کې خپل نړیوال اعتبار کارت فعال او وکاروئ.",
      date: "۱۴۰۴/۱۲/۰۵",
      readTime: "۴ دقیقې",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "د افغانانو لپاره د اروپایي IBAN حساب لرلو ګټې",
      excerpt: "په مستقیم ډول د SEPA بانکي سیسټم سره وصل شئ او له منځګړیتوب پرته پیسې ترلاسه کړئ.",
      date: "۱۴۰۴/۱۲/۰۱",
      readTime: "۷ دقیقې",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "د SafiPay کیسه؛ له کابل څخه د پاریس تر زړه پورې",
      excerpt: "د شاهین صافي لخوا د لومړي عصري ډیجیټل بانکي سیسټم د جوړېدو داستان.",
      date: "۱۴۰۴/۱۱/۲۸",
      readTime: "۱۰ دقیقې",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM سیمکارت؛ د نړیوالو اړیکو نړۍ ته د ننوتلو کیلي",
      excerpt: "بې له پولې اړیکې ونیسئ او د نړۍ په هر ګوټ کې له چټک انټرنیټ څخه ګټه پورته کړئ.",
      date: "۱۴۰۴/۱۱/۲۵",
      readTime: "۵ دقیقې",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "د بانکدارۍ راتلونکی؛ چټکتیا، امنیت او اسانتیا",
      excerpt: "ولې نوي مالي سیسټمونه د دودیزې بانکدارۍ ځای نیسي؟",
      date: "۱۴۰۴/۱۱/۲۰",
      readTime: "۶ دقیقې",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "SafiPay څه شی دی او کوم خدمتونه وړاندې کوي؟",
      excerpt: "د SafiPay مالي اکوسیستم او نړیوالو تادیاتو حل لارو سره بشپړه اشنایي.",
      date: "۱۴۰۴/۱۱/۱۵",
      readTime: "۸ دقیقې",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'ps'; 
  const isRtl = ['ps', 'fa', 'ar'].includes(lang);
  
  // د پښتو مقالو راوستل
  const posts = blogPosts[lang] || blogPosts.ps;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* د شالید روښنايي اغېز */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post: any, index: number) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/${lang}/blog/${post.slug}`} className="group block">
                <div className="relative h-72 mb-8 overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 group-hover:border-amber-500/40 transition-all duration-700 shadow-2xl">
                  <Image 
                    src={`/blog/${post.slug}/hero.jpg`} 
                    alt={post.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className={`absolute top-6 left-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4 text-[10px] text-amber-500 font-bold tracking-widest uppercase mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
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