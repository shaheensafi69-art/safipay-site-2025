'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// Données du Blog SafiPay - Version Française (Style Fintech de Luxe)
const blogPosts: any = {
  fr: [
    {
      id: 1,
      title: "Sécurité au niveau de l'UE : Comment nous protégeons vos actifs",
      excerpt: "Une analyse approfondie des protocoles de sécurité de SafiPay et des normes de supervision bancaire dans la zone euro.",
      date: "27 fév. 2026",
      readTime: "6 min",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "Guide complet de la carte Visa virtuelle SafiPay",
      excerpt: "Apprenez à activer et à utiliser votre carte de crédit internationale en moins d'une minute pour vos paiements mondiaux.",
      date: "25 fév. 2026",
      readTime: "4 min",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "Avantages d'un IBAN européen pour les citoyens afghans",
      excerpt: "Connexion directe au système bancaire SEPA. Recevez des virements internationaux sans intermédiaires.",
      date: "22 fév. 2026",
      readTime: "7 min",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "L'histoire de SafiPay : De Kaboul au cœur de Paris",
      excerpt: "Le parcours de la création du premier système bancaire numérique moderne dirigé par le visionnaire Shaheen Safi.",
      date: "19 fév. 2026",
      readTime: "10 min",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM : Votre clé pour une communication mondiale sans limites",
      excerpt: "Restez connecté partout dans le monde avec des données internationales haut débit sans frontières géographiques.",
      date: "16 fév. 2026",
      readTime: "5 min",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "L'avenir de la banque : Vitesse, Sécurité et Simplicité",
      excerpt: "Pourquoi les écosystèmes financiers modernes remplacent la banque traditionnelle à l'ère numérique.",
      date: "13 fév. 2026",
      readTime: "6 min",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "Qu'est-ce que SafiPay ? Nos services en un coup d'œil",
      excerpt: "Explorez l'écosystème financier de SafiPay et nuestras solutions de paiement international innovantes.",
      date: "10 fév. 2026",
      readTime: "8 min",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'fr'; 
  const isRtl = ['ar', 'fa', 'ps'].includes(lang);
  
  // Charger les articles en français
  const posts = blogPosts[lang] || blogPosts.fr;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Effet de lueur d'arrière-plan */}
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