'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPageFR() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="ltr">
      
      {/* Section Hero - Présentation Générale */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Changer le paradigme financier de l&apos;Afghanistan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            Nous repoussons les <br /> limites bancaires
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay n&apos;est pas seulement une application ; c&apos;est une infrastructure révolutionnaire conçue pour démocratiser l&apos;accès aux systèmes financiers internationaux pour chaque citoyen afghan, partout dans le monde.
          </motion.p>
        </div>
      </section>

      {/* Section Fondateurs - Détails Techniques et Professionnels */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* Shaheen Safi - CEO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/shaheen.jpeg" 
                alt="Shaheen Safi - Fondateur & CEO" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4 font-semibold">
                Fondateur et Directeur Général
              </div>
              <h2 className="text-4xl font-bold">Shaheen Safi</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Shaheen Safi (né en 2003) est un stratège de la FinTech et l&apos;architecte des systèmes de paiement numérique. Avec une vision qui transcende les frontières traditionnelles, il dirige l&apos;orientation stratégique globale de SafiPay et supervise le développement de son infrastructure technique.
                </p>
                <p>
                  En maîtrisant les écosystèmes bancaires européens et en comprenant précisément les défis économiques de l&apos;Afghanistan, Shaheen a conçu un modèle qui allie sécurité de niveau mondial et facilité d&apos;accès. Son expertise dans la résolution de problèmes bancaires complexes est le moteur de SafiPay vers son ambition de devenir la première néobanque afghane.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Expertise Technique</h4>
                  <p className="text-sm text-gray-400">Architecture Cloud, Sécurité des Paiements & Blockchain</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Leadership</h4>
                  <p className="text-sm text-gray-400">Gestion Stratégique & Développement International</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - CCO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4 font-semibold">
                Co-fondateur & Directeur de la Communication
              </div>
              <h2 className="text-4xl font-bold">Mujtaba Rahmani</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Mujtaba Rahmani (né en 2006) est un expert en communication stratégique et développement de marque. Il assume la responsabilité vitale de la gestion des relations publiques, de l&apos;expansion de l&apos;influence de la marque sur les marchés mondiaux et de la création de ponts entre SafiPay et la vaste diaspora afghane.
                </p>
                <p>
                  Grâce à ses compétences uniques en négociation et à sa compréhension de la psychologie du marché, Mujtaba joue un rôle clé pour gagner la confiance des investisseurs et établir SafiPay comme une institution financière stable et communautaire. Sa mission dépasse le simple marketing ; il s&apos;agit d&apos;instaurer une nouvelle culture financière pour la jeunesse afghane.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Communication</h4>
                  <p className="text-sm text-gray-400">Branding Stratégique, Négociation & Relations Publiques</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Croissance</h4>
                  <p className="text-sm text-gray-400">Acquisition de Clients & Soutien International</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/mujtaba.jpeg" 
                alt="Mujtaba Rahmani - Co-fondateur" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Mission & Vision */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Notre Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Notre mission chez SafiPay est de donner à chaque Afghan le pouvoir financier. En exploitant les technologies émergentes, nous visons à minimiser les coûts de transfert et à offrir un accès aux cartes de crédit internationales et aux comptes multi-devises — transformant ce qui était autrefois un rêve pour notre peuple en une réalité quotidienne.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Vision 2030</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nous bâtissons un avenir où aucun Afghan n&apos;est exclu de l&apos;économie numérique en raison de sa situation géographique. Notre vision est de devenir la plus grande infrastructure financière de la région et un leader des services de néobanque pour les communautés en développement.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs Fondamentales */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Les Piliers de SafiPay</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Transparence Absolue", 
              desc: "Nous croyons que la confiance ne se construit pas sur le secret. Tous les processus financiers et les coûts chez SafiPay sont rapportés avec une transparence totale." 
            },
            { 
              title: "Sécurité Bancaire Renforcée", 
              desc: "Grâce à des protocoles de cryptage avancés et à l&apos;authentification biométrique, nous garantissons la sécurité des actifs au-delà des normes traditionnelles." 
            },
            { 
              title: "Inclusion Financière", 
              desc: "Nos services sont conçus sans discrimination, connectant même les zones les plus reculées d&apos;Afghanistan aux marchés mondiaux." 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900/30 border border-white/5 rounded-3xl hover:border-amber-500/50 transition-all"
            >
              <h4 className="text-2xl font-bold text-amber-500 mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6 text-white">Participez à la révolution financière</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Nous changeons le destin financier d&apos;une nation. Que ce soit en tant qu&apos;utilisateur ou investisseur, votre place est chez SafiPay.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">Investir</Link>
            <Link href="/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Contacter l&apos;équipe</Link>
          </div>
        </div>
      </section>

    </div>
  );
}