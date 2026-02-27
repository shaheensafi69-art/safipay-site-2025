'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

const blogPosts = {
  fr: [
    {
      id: 1,
      title: "Sécurité de Niveau UE : Comment nous protégeons vos actifs",
      excerpt: "Une analyse approfondie des protocoles de sécurité SafiPay sous la supervision technique de Mujtaba.",
      date: "27 fév. 2026",
      readTime: "12 min",
      slug: "safipay-system-security"
    },
    {
      id: 2,
      title: "Guide Complet de la Carte Visa Virtuelle SafiPay",
      excerpt: "Brisez les frontières financières avec des cartes émises directement par des institutions de l'Union Européenne.",
      date: "25 fév. 2026",
      readTime: "15 min",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "Avantages d'un IBAN Européen pour les Citoyens",
      excerpt: "Connexion directe au système bancaire SEPA pour recevoir des virements internationaux en un temps record.",
      date: "22 fév. 2026",
      readTime: "7 min",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "L'Histoire de SafiPay : De Kaboul au Cœur de Paris",
      excerpt: "Le voyage visionnaire de la création de SafiPay, dirigé par le fondateur Shaheen Safi.",
      date: "19 fév. 2026",
      readTime: "10 min",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM : Votre clé pour une communication mondiale sans limites",
      excerpt: "Restez connecté partout dans le monde avec des données internationales haut débit et sans restrictions.",
      date: "16 fév. 2026",
      readTime: "5 min",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "L'Avenir de la Banque : Rapidité, Sécurité et Simplicité",
      excerpt: "Comment les écosystèmes financiers modernes remplacent les banques traditionnelles lentes.",
      date: "13 fév. 2026",
      readTime: "6 min",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "Qu'est-ce que SafiPay ? Nos Services Financiers en un Coup d'Œil",
      excerpt: "Explorez l'écosystème complet de SafiPay et notre mission pour la liberté financière.",
      date: "10 fév. 2026",
      readTime: "8 min",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang = params?.lang || 'fr';
  const posts = blogPosts.fr;

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="ltr">
      
      {/* Blog Header */}
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-6">
          <ShieldCheck size={14} />
          <span>Encyclopédie Officielle SafiPay</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter uppercase">Analyses & Actualités</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
          Les dernières avancées en Fintech, sécurité internationale et solutions financières SafiPay connectant les marchés mondiaux en toute sécurité.
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
              {/* Thumbnail Image Section */}
              <div className="relative h-64 w-full bg-[#151515] overflow-hidden">
                <Image 
                  src={`/blog/${post.slug}/hero.jpg`} 
                  alt={post.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
                
                {/* Arrow Button */}
                <div className="absolute top-6 right-6 z-20 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold leading-tight group-hover:text-amber-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs leading-[1.8] line-clamp-3 text-left font-light">
                  {post.excerpt}
                </p>

                <div className="pt-6 mt-auto">
                  <div className="w-full h-[1px] bg-white/5 group-hover:bg-amber-500/20 transition-colors" />
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-600 uppercase group-hover:text-amber-500 transition-colors">
                      Lire l'article complet
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </main>
  );
}