'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ShieldCheck, ArrowRight, 
  Zap, Globe, Lock, CheckCircle2, 
  TrendingUp, Cpu, Landmark 
} from 'lucide-react';
import Link from 'next/link';

export default function FutureOfBankingPage() {
  const params = useParams();
  const lang = params?.lang || 'fr';
  const isRtl = lang === 'fa' || lang === 'ps' || lang === 'ar';

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section avec animation d'entrée majestueuse */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/blog/future-of-banking/hero.jpg" 
            alt="L'avenir de la banque digitale"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6 text-amber-500 font-black tracking-[0.3em] text-xs uppercase">
              <Cpu size={18} />
              <span>Écosystème Fintech Next-Gen</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 drop-shadow-2xl">
              L'Avenir de la Banque ; <br/> <span className="text-amber-500 text-4xl md:text-6xl text-left block mt-4">Tradition vs Modernité</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 -mt-24 relative z-30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#080808] border border-white/5 rounded-[3.5rem] p-8 md:p-20 shadow-2xl backdrop-blur-xl"
          >
            
            {/* Profil de l'auteur avec logo SafiPay */}
            <div className="flex flex-wrap justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="absolute -inset-1.5 bg-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center p-3">
                        <img src="/logo.png" alt="SafiPay Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-black text-xl">Safi AI</p>
                    <CheckCircle2 size={18} className="text-blue-500 fill-blue-500/10" />
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Porte-parole officiel de SafiPay</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> 20/02/2026</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> 15 min de lecture</span>
              </div>
            </div>

            {/* Corps de l'article */}
            <article className="space-y-12 text-gray-300 leading-[2.4] text-justify text-lg" dir="ltr">
              
              <p className="text-2xl text-white font-medium mb-12 border-l-4 border-amber-500 pl-6">
                La banque traditionnelle, avec ses murs de pierre et ses files d'attente interminables, rend son dernier souffle. Dans le monde d'aujourd'hui, la rapidité n'est plus seulement un avantage ; c'est l'unité de mesure de la sécurité et de la confiance. SafiPay a été créé pour redéfinir ces concepts en abolissant les frontières physiques.
              </p>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Zap className="text-amber-500" /> Pourquoi les anciens systèmes échouent ?
              </h2>
              <p>
                La plus grande faiblesse des banques traditionnelles réside dans leur dépendance excessive à la bureaucratie humaine et aux infrastructures obsolètes. Alors qu'un virement bancaire dans les anciens systèmes peut prendre 3 à 5 jours ouvrables, les transactions dans l'écosystème moderne de SafiPay sont traitées via des réseaux cloud avec une surveillance assistée par IA en une fraction de seconde. C'est précisément pourquoi notre fondateur, <strong>Shaheen Safi</strong>, insiste sur l'élimination totale des intermédiaires traditionnels.
              </p>

              {/* Grille des fonctionnalités */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <TrendingUp className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">Optimisation Financière Intelligente</h4>
                    <p className="text-sm text-gray-500">Utilisation d'algorithmes avancés pour minimiser les frais et maximiser la vitesse des transferts dans le réseau SEPA.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <Landmark className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">Standards Bancaires de l'UE</h4>
                    <p className="text-sm text-gray-500">Toutes nos opérations sont strictement supervisées par les autorités financières de l'Union Européenne, un standard que les bureaux de change traditionnels ne peuvent égaler.</p>
                </motion.div>
              </div>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Lock className="text-amber-500" /> Sécurité : Au-delà du mot de passe
              </h2>
              <p>
                En matière de sécurité technique, <strong>Mojtaba (notre responsable de la sécurité)</strong> a déployé des protocoles de protection multicouches. De l'authentification biométrique au chiffrement de bout en bout (End-to-End), notre objectif est d'offrir une plateforme où l'utilisateur gère ses actifs sans se soucier des sanctions ou des interventions de tiers.
              </p>

              <div className="bg-white/[0.02] border-l-4 border-amber-500 p-12 rounded-2xl my-16 text-left">
                <p className="text-white text-xl italic font-light">
                  "L'avenir de la banque est dans votre smartphone, pas dans les édifices en pierre. Chez SafiPay, nous avons placé ce pouvoir directement entre vos mains."
                </p>
                <p className="text-amber-500 font-bold mt-4">— Message de Sahel, Directrice du Développement International</p>
              </div>

              <h2 className="text-3xl font-black text-white mb-8">Conclusion : Un bond vers l'économie numérique</h2>
              <p>
                Chez SafiPay, nous pensons que l'accès au système bancaire mondial est un droit fondamental pour chaque individu. En proposant des comptes IBAN instantanés et des cartes Visa, nous avons construit un pont reliant l'économie afghane au cœur de l'Europe et aux marchés mondiaux. Ce n'est que le début d'une transformation majeure de la structure financière de la région.
              </p>
            </article>

            {/* Bouton de retour */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg">
                    <ArrowRight size={24} className={isRtl ? "" : "rotate-180"} />
                    Retour à l'Encyclopédie SafiPay
                </span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}