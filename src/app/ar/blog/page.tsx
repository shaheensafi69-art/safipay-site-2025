'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// بيانات المقالات باللغة العربية - SafiPay Official
const blogPosts: any = {
  ar: [
    {
      id: 1,
      title: "الأمان على مستوى الاتحاد الأوروبي؛ كيف نحمي أصولك؟",
      excerpt: "تحليل شامل لمعايير الأمان في SafiPay والرقابة المصرفية الصارمة داخل منطقة اليورو.",
      date: "٢٠٢٦/٠۲/۲۷",
      readTime: "٦ دقائق",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "الدليل الكامل للحصول على بطاقة فيزا الافتراضية",
      excerpt: "اكتشف كيف يمكنك تفعيل بطاقتك الائتمانية الدولية في أقل من دقيقة واحدة وبكل سهولة.",
      date: "٢٠٢٦/٠۲/۲۵",
      readTime: "٤ دقائق",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "مزايا حساب IBAN الأوروبي للمواطنين الأفغان",
      excerpt: "اربط معاملاتك مباشرة بنظام SEPA المصرفي واستلم حوالاتك الدولية دون أي وسيط.",
      date: "٢٠٢٦/٠۲/۲۲",
      readTime: "٧ دقائق",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "قصة SafiPay؛ من كابل إلى قلب باريس",
      excerpt: "رحلة تأسيس أول نظام مصرفي رقمي حديث يقوده المبتكر شاهين صافي لخدمة شعبنا.",
      date: "٢٠٢٦/٠۲/۱۹",
      readTime: "١٠ دقائق",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "شريحة E-SIM؛ بوابتك للاتصال العالمي بلا حدود",
      excerpt: "تواصل مع العالم واستمتع بإنترنت دولي فائق السرعة أينما كنت وفي أي وقت.",
      date: "٢٠٢٦/٠۲/۱۶",
      readTime: "٥ دقائق",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "مستقبل الصيرفة؛ السرعة، الأمان، والبساطة",
      excerpt: "لماذا تتفوق الأنظمة المالية الحديثة على البنوك التقليدية في عصرنا الرقمي؟",
      date: "٢٠٢٦/٠۲/۱۳",
      readTime: "٦ دقائق",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "ما هو SafiPay؟ وما هي الخدمات التي نقدمها؟",
      excerpt: "تعرف على المنظومة المالية المتكاملة وحلول الدفع الدولية التي صممت خصيصاً لك.",
      date: "٢٠٢٦/٠۲/۱۰",
      readTime: "٨ دقائق",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'ar'; // الإعداد الافتراضي للغة العربية
  const isRtl = ['ar', 'fa', 'ps'].includes(lang);
  
  // جلب المقالات باللغة العربية
  const posts = blogPosts[lang] || blogPosts.ar;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* تأثير الإضاءة الخلفية */}
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
              <Link href={`/${lang}/blog/${post.slug}`} className="group block text-right">
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