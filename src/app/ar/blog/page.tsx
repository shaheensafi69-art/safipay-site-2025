'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowUpLeft, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

const blogPosts = {
  ar: [
    {
      id: 1,
      title: "الأمن بمستوى الاتحاد الأوروبي: كيف نحمي أصولك",
      excerpt: "تعمق في بروتوكولات الأمان الخاصة بـ SafiPay تحت الإشراف الفني لمجتبى",
      date: "٢٧ فبراير ٢٠٢٦",
      readTime: "١٢ دقيقة",
      slug: "safipay-system-security"
    },
    {
      id: 2,
      title: "الدليل الكامل لبطاقة فيزا SafiPay الافتراضية",
      excerpt: "تحطيم الحدود المالية ببطاقات صادرة مباشرة من المؤسسات المالية في الاتحاد الأوروبي",
      date: "٢٥ فبراير ٢٠٢٦",
      readTime: "١٥ دقيقة",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "مزايا حساب IBAN الأوروبي للمواطنين",
      excerpt: "اتصال مباشر بنظام SEPA المصرفي لاستقبال الحوالات الدولية بسرعة فائقة",
      date: "٢٢ فبراير ٢٠٢٦",
      readTime: "٧ دقائق",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "قصة SafiPay: من كابل إلى قلب باريس",
      excerpt: "الرحلة الرؤيوية لبناء منظومة SafiPay بقيادة المؤسس شاهين صافي",
      date: "١٩ فبراير ٢٠٢٦",
      readTime: "١٠ دقائق",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM: مفتاحك للتواصل العالمي بلا حدود",
      excerpt: "ابقَ على اتصال في جميع أنحاء العالم مع بيانات دولية عالية السرعة وبدون قيود",
      date: "١٦ فبراير ٢٠٢٦",
      readTime: "٥ دقائق",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "مستقبل الخدمات المصرفية: سرعة، أمان، وبساطة",
      excerpt: "كيف تحل الأنظمة المالية الحديثة محل البنوك التقليدية البطيئة",
      date: "١٣ فبراير ٢٠٢٦",
      readTime: "٦ دقائق",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "ما هي SafiPay؟ خدماتنا المالية في لمحة",
      excerpt: "استكشف النظام البيئي المتكامل لـ SafiPay ومهمتنا لتحقيق الحرية المالية",
      date: "١٠ فبراير ٢٠٢٦",
      readTime: "٨ دقائق",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang = params?.lang || 'ar';
  const posts = blogPosts.ar;

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="rtl">
      
      {/* هيدر المدونة */}
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-6">
          <ShieldCheck size={14} />
          <span>الموسوعة الرسمية لـ SafiPay</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">التحليلات والأخبار</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
          أحدث الابتكارات في تكنولوجيا المال، الأمن الدولي، والحلول المالية من SafiPay لربطك بالأسواق العالمية بأمان تام [cite: 2026-02-25]
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
              {/* قسم الصورة المصغرة */}
              <div className="relative h-64 w-full bg-[#151515] overflow-hidden">
                <Image 
                  src={`/blog/${post.slug}/hero.jpg`} 
                  alt={post.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* تراكب التدرج */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
                
                {/* زر السهم */}
                <div className="absolute top-6 left-6 z-20 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                  <ArrowUpLeft size={20} />
                </div>
              </div>

              {/* محتوى النص */}
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold leading-tight group-hover:text-amber-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-xs leading-[1.8] line-clamp-3 text-right font-light">
                  {post.excerpt}
                </p>

                <div className="pt-6 mt-auto">
                  <div className="w-full h-[1px] bg-white/5 group-hover:bg-amber-500/20 transition-colors" />
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-600 uppercase group-hover:text-amber-500 transition-colors">
                      اقرأ المقال كاملاً
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* خلفية تزيينية */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </main>
  );
}