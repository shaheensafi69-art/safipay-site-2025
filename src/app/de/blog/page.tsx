'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// SafiPay Blog-Daten - Deutsche Version (Premium Fintech-Stil)
const blogPosts: any = {
  de: [
    {
      id: 1,
      title: "Sicherheit auf EU-Ebene: Wie wir Ihr Vermögen schützen",
      excerpt: "Eine detaillierte Analyse der SafiPay-Sicherheitsstandards und der Bankenaufsicht innerhalb der Eurozone.",
      date: "28.02.2026",
      readTime: "6 Min.",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "Vollständiger Leitfaden zur virtuellen SafiPay Visa-Karte",
      excerpt: "Aktivieren Sie Ihre internationale Kreditkarte in weniger als einer Minute. Schnell, sicher und weltweit einsetzbar.",
      date: "25.02.2026",
      readTime: "4 Min.",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "Vorteile eines europäischen IBAN-Kontos für Afghanen",
      excerpt: "Direkte Anbindung an das SEPA-Zahlungssystem. Empfangen Sie internationale Überweisungen ohne Zwischenhändler.",
      date: "22.02.2026",
      readTime: "7 Min.",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "Die SafiPay-Story: Von Kabul ins Herz von Paris",
      excerpt: "Wie Shaheen Safi das erste moderne digitale Bankensystem für unsere Gemeinschaft geschaffen hat.",
      date: "19.02.2026",
      readTime: "10 Min.",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM: Ihr Schlüssel zur grenzenlosen globalen Kommunikation",
      excerpt: "Bleiben Sie weltweit vernetzt mit Highspeed-Internet ohne geografische Einschränkungen.",
      date: "16.02.2026",
      readTime: "5 Min.",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "Die Zukunft des Bankwesens: Schnelligkeit und Sicherheit",
      excerpt: "Warum moderne Finanzsysteme das traditionelle Banking im digitalen Zeitalter ersetzen.",
      date: "13.02.2026",
      readTime: "6 Min.",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "Was ist SafiPay? Unsere Dienstleistungen im Überblick",
      excerpt: "Lernen Sie das Finanz-Ökosystem von SafiPay und unsere innovativen internationalen Zahlungslösungen kennen.",
      date: "10.02.2026",
      readTime: "8 Min.",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'de'; 
  const isRtl = ['ar', 'fa', 'ps'].includes(lang);
  
  // بارگذاری مقالات آلمانی
  const posts = blogPosts[lang] || blogPosts.de;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hintergrund-Glow-Effekt */}
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
                  {/* جابجایی دکمه فلش بر اساس جهت زبان */}
                  <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className={`space-y-4 px-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div className={`flex items-center gap-4 text-[10px] text-amber-500 font-bold tracking-widest uppercase mb-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
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