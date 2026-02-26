'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// SafiPay Blog Verileri - Türkçe Versiyon (Modern Fintech Stili)
const blogPosts: any = {
  tr: [
    {
      id: 1,
      title: "AB Düzeyinde Güvenlik: Varlıklarınızı Nasıl Koruyoruz?",
      excerpt: "SafiPay güvenlik protokollerinin ve Euro Bölgesi bankacılık denetim standartlarının kapsamlı analizi.",
      date: "27 Şub 2026",
      readTime: "6 dk",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "SafiPay Sanal Visa Kart İçin Tam Kılavuz",
      excerpt: "Uluslararası kredi kartınızı bir dakikadan kısa sürede nasıl aktif hale getireceğinizi ve kullanacağınızı öğrenin.",
      date: "25 Şub 2026",
      readTime: "4 dk",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "Afgan Vatandaşları İçin Avrupa IBAN Hesabının Avantajları",
      excerpt: "SEPA bankacılık sistemine doğrudan bağlantı. Aracı olmadan uluslararası transferlerinizi alın.",
      date: "22 Şub 2026",
      readTime: "7 dk",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "SafiPay'in Hikayesi: Kabil'den Paris'in Kalbine",
      excerpt: "Vizyoner Shaheen Safi liderliğinde ilk modern dijital bankacılık sisteminin kuruluş yolculuğu.",
      date: "19 Şub 2026",
      readTime: "10 dk",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM: Sınırsız Küresel İletişimin Anahtarı",
      excerpt: "Coğrafi sınır olmadan yüksek hızlı uluslararası veriyle tüm dünyada bağlantıda kalın.",
      date: "16 Şub 2026",
      readTime: "5 dk",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "Bankacılığın Geleceği: Hız, Güvenlik ve Basitlik",
      excerpt: "Dijital çağda modern finansal ekosistemlerin neden geleneksel bankacılığın yerini aldığını keşfedin.",
      date: "13 Şub 2026",
      readTime: "6 dk",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "SafiPay Nedir? Hizmetlerimize Genel Bakış",
      excerpt: "SafiPay finansal ekosistemini ve yenilikçi uluslararası ödeme çözümlerimizi yakından tanıyın.",
      date: "10 Şub 2026",
      readTime: "8 dk",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'tr'; 
  const isRtl = ['ar', 'fa', 'ps'].includes(lang);
  
  // Türkçe makaleleri yükle
  const posts = blogPosts[lang] || blogPosts.tr;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Arka Plan Glow Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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
                  <div className={`absolute top-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="space-y-4 px-2 text-left">
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