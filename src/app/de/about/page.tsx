'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User, Landmark, ShieldCheck, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageGerman() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'de';

  return (
    // از آنجایی که آلمانی چپ‌به‌راست است، dir="ltr" قرار داده شد
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Hero-Bereich (Einleitung) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Finanzparadigmenwechsel in Afghanistan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Jenseits des <br /> traditionellen Bankings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay ist nicht nur eine App; es ist eine revolutionäre Infrastruktur mit dem Ziel, den Zugang zu internationalen Finanzsystemen für jeden afghanischen Bürger zu demokratisieren.
          </motion.p>
        </div>
      </section>

      {/* --- Gründer und Führungsteam --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-24 italic uppercase tracking-widest text-amber-500">Unser Führungsteam</h2>
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
                  alt="Shaheen Safi - Founder & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">Founder / CEO</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Strategie & Vision
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Shaheen Safi <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Gründer & CEO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Shaheen Safi (Jahrgang 2003) ist Fintech-Stratege und der Hauptarchitekt des SafiPay-Ökosystems. Mit seiner Expertise in IT-Management und digitalem Handel verfolgt er die Mission, die Kluft zwischen Afghanistan und den globalen Finanzmärkten zu schließen.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Biografie ansehen
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
                <Code2 size={14} /> Engineering & Sicherheit
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Mujtaba Rahmani <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Co-Founder & CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Mujtaba Rahmani (Jahrgang 2006) ist der Designer der Sicherheitsinfrastruktur von SafiPay. Als CTO verantwortet er die Cybersicherheitsprotokolle und die Implementierung skalierbarer Zahlungstechnologien.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Technisches Profil
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
                <Banknote size={14} /> Banking-Ökosystem
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Sahel Salem <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Head of Banking</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed text-left">
                Sahel Salem (Jahrgang 2007) leitet die Integration der Benutzerkonten und des Banken-Ökosystems bei SafiPay. Er stellt sicher, dass die Schnittstelle zwischen digitalen Assets und traditionellen Finanzrahmen reibungslos funktioniert.
              </p>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Banking-Profil ansehen
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Mission-Sektion --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-white text-center">Unsere Mission</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light text-left">
              <p>
                SafiPay basiert auf einem einfachen, aber mächtigen Prinzip: <span className="text-white font-bold">„Finanzielle Inklusion ist ein Grundrecht.“</span> In einer Region, die oft von globalen Bankennetzen isoliert ist, bieten wir die Technologie, um diese Kluft zu überbrücken.
              </p>
              <p>
                Unsere Plattform geht über bloße Transaktionen hinaus; es geht darum, eine nachhaltige finanzielle Zukunft aufzubauen. Wir entwickeln ein grenzenloses System, in dem Freelancer, Unternehmer und Familien uneingeschränkt am globalen Wirtschaftskreislauf teilnehmen können.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Landmark className="text-amber-500" />, title: "Digital Banking", desc: "Ein vollständiges virtuelles Bankkonto für jeden Nutzer." },
                { icon: <ShieldCheck className="text-green-500" />, title: "Sichere Verwahrung", desc: "Hochgradige Verschlüsselung und dezentrale Sicherheit." },
                { icon: <Globe className="text-blue-500" />, title: "Globaler Zugang", desc: "Sofortige Anbindung an internationale Märkte." },
                { icon: <Cpu className="text-purple-500" />, title: "KI-gestützt", desc: "Intelligente Betrugserkennung und automatisierte Analysen." }
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
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">Werden Sie Teil von SafiPay</h2>
            <p className="text-amber-100/70 mb-12 max-w-2xl mx-auto text-lg">Bauen Sie mit uns die nächste Generation der Finanzinfrastruktur für Afghanistan und darüber hinaus.</p>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-amber-100 transition-colors group">
                Zusammenarbeit starten <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}