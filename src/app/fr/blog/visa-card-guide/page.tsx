'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  CreditCard, Globe, Zap, ShieldCheck, 
  ArrowRight, ShoppingBag, CheckCircle2,
  Lock, AlertCircle, Terminal
} from 'lucide-react';
import Link from 'next/link';

export default function VisaCardGuidePage() {
  const params = useParams();
  // Configuration de la langue basée sur les paramètres ou par défaut en français
  const lang = params?.lang || 'fr';
  const isRtl = lang === 'ar' || lang === 'fa';

  const content = {
    fr: {
      category: "Analyse Stratégique & Guide",
      title: "Carte Visa Virtuelle SafiPay ;",
      subtitle: "Mettre fin à l'isolement financier en Afghanistan",
      author: "Safi AI",
      role: "Porte-parole officiel de SafiPay",
      readTime: "15 min de lecture",
      intro: "De nombreuses banques locales en Afghanistan émettent des cartes valables uniquement à l'intérieur des frontières nationales. SafiPay a brisé ces barrières. Nous émettons des cartes qui fonctionnent puissamment au cœur de l'Europe, aux États-Unis et sur tous les sites et plateformes mondiaux.",
      advantageTitle: "Pourquoi notre carte Visa est-elle différente ?",
      advantageText: "Le plus grand problème des cartes bancaires actuelles en Afghanistan est l'absence totale de connexion aux systèmes de paiement mondiaux. Les cartes SafiPay sont émises directement par des institutions financières de l'Union européenne. Cela signifie que vous pouvez payer vos dépenses dans le monde entier depuis Kaboul ou Hérat — ou n'importe où ailleurs — sans craindre le rejet de la transaction ou le blocage.",
      comparisonTitle: "Différences clés en un coup d'œil",
      comp1: "Fonctionnalité mondiale : Contrairement aux banques nationales, notre carte est active à 100 % sur toutes les passerelles internationales sans restrictions géographiques.",
      comp2: "Vitesse d'émission : Émission numérique en moins d'une minute, tandis que les banques traditionnelles vous font attendre des semaines pour une simple carte.",
      comp3: "Sécurité technique : Supervision directe par Mujtaba (Directeur de la sécurité technique) garantissant un cryptage de haut niveau sur tous les protocoles.",
      techTitle: "Infrastructure Technique & de Gestion",
      techDesc: "Mujtaba, notre Directeur des Opérations et de la Sécurité Technique, a mis en œuvre des protocoles sophistiqués qui garantissent que vos transactions contournent les filtres internationaux stricts. De plus, Sahel (Directrice du Développement International) a garanti que ces cartes sont pleinement synchronisées avec les lois monétaires européennes et les comptes IBAN pour une intégration transparente.",
      quote: "Nous ne nous contentons pas d'émettre une carte ; nous ouvrons les portes de l'économie mondiale à chaque citoyen afghan. C'est votre droit d'être connecté.",
      quoteAuthor: "Shahin Safi — Fondateur de SafiPay",
      backBtn: "Retour à l'Encyclopédie SafiPay"
    }
  };

  const t = content.fr;

  const cardStyle = `bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10 my-16 transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.06] hover:border-amber-500/50 group cursor-default shadow-xl ${isRtl ? 'text-right' : 'text-left'}`;

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 scale-105">
          <Image 
            src="/blog/visa-card-guide/hero.jpg" 
            alt="Guide Visa SafiPay"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent z-10 ${isRtl ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'}`} />

        <div className="container mx-auto px-6 relative z-20">
          <div className={`max-w-4xl animate-in fade-in slide-in-from-${isRtl ? 'right' : 'left'} duration-1000 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 mb-6 text-amber-500 font-bold tracking-widest text-sm uppercase ${isRtl ? 'justify-start' : ''}`}>
              <Terminal size={20} />
              <span>{t.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 drop-shadow-2xl">
              {t.title} <br/> 
              <span className="text-amber-500">{t.subtitle}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 -mt-24 relative z-30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#080808]/95 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl backdrop-blur-3xl animate-in fade-in slide-in-from-bottom duration-1000">
            
            {/* Header / Author */}
            <div className={`flex flex-col md:flex-row items-center justify-between mb-16 pb-10 border-b border-white/5 gap-6 ${isRtl ? '' : 'md:flex-row-reverse'}`}>
              <div className="text-gray-400 text-xs font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                {t.readTime}
              </div>
              <div className={`flex items-center gap-5 ${isRtl ? '' : 'flex-row-reverse text-left'}`}>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <div className={`flex items-center gap-2 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                    <p className="text-white font-bold text-xl">{t.author}</p>
                    <CheckCircle2 size={18} className="text-blue-500" />
                  </div>
                  <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">{t.role}</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 p-3 flex items-center justify-center shadow-lg shadow-amber-500/5">
                   <img src="/logo.png" alt="SafiPay" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <article className={`space-y-16 text-gray-300 leading-[2.4] ${isRtl ? 'text-right' : 'text-left'}`}>
              <p className={`text-2xl text-white font-semibold mb-12 pr-6 ${isRtl ? 'border-r-4 border-amber-500' : 'border-l-4 border-amber-500 pl-6 pr-0'}`}>
                {t.intro}
              </p>

              <div className="space-y-6">
                <h2 className={`text-3xl font-black text-white flex items-center gap-4 ${isRtl ? 'justify-start' : ''}`}>
                  <AlertCircle className="text-amber-500 shrink-0" /> {t.advantageTitle}
                </h2>
                <p className="text-lg text-justify opacity-90">{t.advantageText}</p>
              </div>

              {/* Comparison Box */}
              <div className={cardStyle}>
                <h3 className="text-2xl font-black text-white mb-10">{t.comparisonTitle}</h3>
                <ul className="space-y-8">
                  {[t.comp1, t.comp2, t.comp3].map((item, i) => (
                    <li key={i} className={`flex items-start gap-5 ${isRtl ? '' : 'flex-row'}`}>
                      <div className="mt-3 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.7)] shrink-0 transition-transform group-hover:scale-125" />
                      <p className="text-gray-200 font-medium text-lg leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className={`text-3xl font-black text-white flex items-center gap-4 ${isRtl ? 'justify-start' : ''}`}>
                  <ShieldCheck className="text-amber-500 shrink-0" /> {t.techTitle}
                </h2>
                <p className="text-lg text-justify opacity-90">{t.techDesc}</p>
              </div>

              {/* Quote Area */}
              <div className={`bg-gradient-to-r from-amber-500/10 to-transparent p-12 rounded-3xl my-24 ${isRtl ? 'border-r-4 border-amber-500' : 'border-l-4 border-amber-500 bg-gradient-to-l'}`}>
                <p className="text-white text-3xl italic font-light leading-snug uppercase">
                  "{t.quote}"
                </p>
                <p className="text-amber-500 font-bold mt-8 text-xl">— {t.quoteAuthor}</p>
              </div>

              {/* Grid Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-24">
                <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] group">
                  <div className={`flex mb-8 transition-transform group-hover:rotate-12 ${isRtl ? 'justify-start' : 'justify-start'}`}><ShoppingBag className="text-amber-500" size={40} /></div>
                  <h4 className="text-white font-black text-2xl mb-4">Shopping Mondial</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">Bénéficiez d'un accès illimité à Amazon, eBay et toutes les passerelles de paiement internationales avec la sécurité d'élite de SafiPay.</p>
                </div>
                <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] group">
                  <div className={`flex mb-8 transition-transform group-hover:rotate-12 ${isRtl ? 'justify-start' : 'justify-start'}`}><Lock className="text-amber-500" size={40} /></div>
                  <h4 className="text-white font-black text-2xl mb-4">Sécurité Européenne</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">Vos transactions sont surveillées directement par Mujtaba et sont pleinement conformes aux normes bancaires de l'Union européenne.</p>
                </div>
              </div>
            </article>

            {/* Back CTA */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link href={`/${lang}/blog`} className="group relative px-14 py-5 bg-white text-black font-black rounded-3xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-xl">
                    <span className={isRtl ? 'order-1' : 'order-2'}>{t.backBtn}</span>
                    <ArrowRight size={26} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-2 order-2' : 'group-hover:translate-x-2 order-1'}`} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}