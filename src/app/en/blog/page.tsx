'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// SafiPay Blog Data - English Version (Global Fintech Style)
const blogPosts: any = {
  en: [
    {
      id: 1,
      title: "EU-Level Security: How We Protect Your Assets",
      excerpt: "A deep dive into SafiPay's security protocols and banking supervision standards within the Eurozone.",
      date: "Feb 27, 2026",
      readTime: "6 min",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "Complete Guide to SafiPay Virtual Visa Card",
      excerpt: "Learn how to activate and use your international credit card in less than a minute for global payments.",
      date: "Feb 25, 2026",
      readTime: "4 min",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "Benefits of a European IBAN for Afghan Citizens",
      excerpt: "Direct connection to the SEPA banking system. Receive international transfers without intermediaries.",
      date: "Feb 22, 2026",
      readTime: "7 min",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "The SafiPay Story: From Kabul to the Heart of Paris",
      excerpt: "The journey of building the first modern digital banking system led by visionary Shaheen Safi.",
      date: "Feb 19, 2026",
      readTime: "10 min",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM: Your Key to Boundless Global Communication",
      excerpt: "Stay connected worldwide with high-speed international data without geographical limits.",
      date: "Feb 16, 2026",
      readTime: "5 min",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "The Future of Banking: Speed, Security, and Simplicity",
      excerpt: "Why modern financial ecosystems are replacing traditional banking in the digital era.",
      date: "Feb 13, 2026",
      readTime: "6 min",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "What is SafiPay? Our Services at a Glance",
      excerpt: "Explore the SafiPay financial ecosystem and our innovative international payment solutions.",
      date: "Feb 10, 2026",
      readTime: "8 min",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'en'; 
  const isRtl = ['ar', 'fa', 'ps'].includes(lang);
  
  // Load English posts
  const posts = blogPosts[lang] || blogPosts.en;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Glow Effect */}
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
                  {/* Arrow position based on LTR */}
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