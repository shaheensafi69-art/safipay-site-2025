'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User, Landmark, ShieldCheck, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageFrench() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'fr';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Section Hero --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Changement de paradigme financier en Afghanistan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Au-delà du <br /> système bancaire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay n&apos;est pas seulement une application ; c&apos;est une infrastructure révolutionnaire conçue pour démocratiser l&apos;accès aux systèmes financiers internationaux pour chaque citoyen afghan.
          </motion.p>
        </div>
      </section>

      {/* --- Équipe de Direction --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-24 italic uppercase tracking-widest text-amber-500">Direction et Leadership</h2>
        <div className="flex flex-col gap-40">
          
          {/* 1. Shaheen Safi - Founder & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Shaheen Safi - Fondateur & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">Fondateur / CEO</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Stratégie & Vision
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Shaheen Safi <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Fondateur & CEO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Shaheen Safi (né en 2003) est un stratège Fintech et l&apos;architecte principal de l&apos;écosystème SafiPay. Fort de son expertise en gestion informatique et commerce numérique, il s&apos;est donné pour mission de combler le fossé entre l&apos;Afghanistan et les marchés financiers mondiaux.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Voir la biographie complète
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 2. Mujtaba Rahmani - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Ingénierie & Sécurité
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Mujtaba Rahmani <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Co-fondateur & CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Mujtaba Rahmani (né en 2006) est le concepteur de l&apos;infrastructure de sécurité de SafiPay. En tant que CTO, il supervise les protocoles de cybersécurité et le déploiement de technologies de paiement évolutives.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Profil technique
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/mujtaba.jpeg" alt="Mujtaba Rahmani" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* 3. Sahel Salem - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/sahel.jpeg" alt="Sahel Salem" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> Écosystème Bancaire
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Sahel Salem <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Directeur Bancaire</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed text-left">
                Sahel Salem (né en 2007) dirige l&apos;intégration des comptes utilisateurs et de l&apos;écosystème bancaire au sein de SafiPay, assurant une liaison fluide entre les actifs numériques et les cadres financiers traditionnels.
              </p>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Profil Bancaire
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section Mission --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-white text-center">Notre Mission</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light text-left">
              <p>
                SafiPay repose sur un principe simple mais puissant : <span className="text-white font-bold">« L&apos;inclusion financière est un droit fondamental. »</span> Dans une région souvent isolée des réseaux bancaires mondiaux, nous fournissons la technologie nécessaire pour combler ce fossé.
              </p>
              <p>
                Notre plateforme ne se limite pas aux transactions ; il s&apos;agit de bâtir un avenir financier durable. Nous concevons un système sans frontières où les freelances, les entrepreneurs et les familles peuvent participer pleinement à l&apos;économie mondiale.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Landmark className="text-amber-500" />, title: "Banque Digitale", desc: "Un compte bancaire virtuel complet pour chaque utilisateur." },
                { icon: <ShieldCheck className="text-green-500" />, title: "Garde Sécurisée", desc: "Cryptage de haut niveau et sécurité décentralisée." },
                { icon: <Globe className="text-blue-500" />, title: "Accès Mondial", desc: "Connexion instantanée aux marchés internationaux." },
                { icon: <Cpu className="text-purple-500" />, title: "Propulsé par l'IA", desc: "Détection intelligente des fraudes et analyses automatisées." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/50 transition-colors group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action (CTA) --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div className="bg-gradient-to-br from-amber-600 to-amber-900 p-20 rounded-[4rem]">
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">Rejoignez SafiPay</h2>
            <p className="text-amber-100/70 mb-12 max-w-2xl mx-auto text-lg">Bâtissez avec nous la prochaine génération d&apos;infrastructures financières pour l&apos;Afghanistan et au-delà.</p>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-amber-100 transition-colors group">
                Commencer un partenariat <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}