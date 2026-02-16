'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPage() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'de';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Gestaltung des Finanzparadigmas in Afghanistan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Banking neu <br /> definiert
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay ist nicht nur eine App; es ist eine revolutionäre Infrastruktur, die geschaffen wurde, um jedem afghanischen Bürger den Zugang zu internationalen Finanzsystemen zu ermöglichen.
          </motion.p>
        </div>
      </section>

      {/* --- Founders & Team Section --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* Shaheen Safi - Founder & CEO */}
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
                <p className="text-white font-black italic tracking-widest text-lg uppercase">CEO / GRÜNDER</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Führung & Strategie
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Shaheen Safi</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  Shaheen Safi (geb. 2003) ist FinTech-Stratege und Hauptarchitekt der Zahlungssysteme von SafiPay. Mit einem tiefen Verständnis für die finanzielle Isolation Afghanistans leitet er die Vision des Projekts und pflegt internationale Beziehungen zu globalen Bankenriesen.
                </p>
                <p>
                  Seine Expertise in der Kombination von Cloud-Technologien mit modernen europäischen Bankmethoden ermöglicht es SafiPay, Sicherheitsstandards als Afghanistans erste echte Neobank neu zu definieren. Shaheens Vision zielt darauf ab, die finanzielle Identität und Glaubwürdigkeit der afghanischen Bürger auf den globalen Märkten wiederherzustellen.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Strategisches Management</h4>
                  <p className="text-sm text-gray-500">Geschäftsmodellentwicklung & Bankpartnerschaften</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Finanzkrisen-Lösungen</h4>
                  <p className="text-sm text-gray-500">Entwicklung von Lösungen zur Umgehung von Bankensanktionen</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sahel Salem - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-2 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> Banking-Ökosystem
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Sahel Salem</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  Sahel Salem (geb. 2007) ist der Mastermind hinter dem Banking-Ökosystem und der Kontoinfrastruktur von SafiPay. Er ist verantwortlich für das Design und die Implementierung der finanziellen Rahmenbedingungen, die afghanischen Nutzern einen beispiellosen Zugang zu internationalen Bankdienstleistungen ermöglichen.
                </p>
                <p>
                  Sahels Fachwissen bei der Schaffung nahtloser und sicherer Finanzströme stellt sicher, dass jeder SafiPay-Nutzer digitales Banking auf Weltklasse-Niveau erlebt. Durch seinen Fokus auf Transparenz und Zugänglichkeit schafft er die Grundlage für ein faires Finanzökosystem in Afghanistan.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Globe className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Expansion des Ökosystems</h4>
                  <p className="text-sm text-gray-500">Brückenbau zu globalen Finanznetzwerken</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Shield className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Kontoverwaltung</h4>
                  <p className="text-sm text-gray-500">Innovative Systeme für Bankkonten</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-1 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/sahel.jpeg" 
                  alt="Sahel Salem" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                ÖKOSYSTEM-LEITER
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / ARCHITEKT
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Technik & Sicherheit
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Mujtaba Rahmani</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  Mujtaba Rahmani (geb. 2006) ist Chief Technology Officer und Architekt für Cybersicherheit bei SafiPay. Er hat das technische Rückgrat der Plattform aufgebaut und gewährleistet die Unantastbarkeit und Stabilität von Echtzeit-Transaktionssystemen.
                </p>
                <p>
                  Mit seinem Talent für die Entwicklung skalierbarer Software und seinem tiefen Verständnis der Zahlungsinfrastruktur hat Mujtaba ein System geschaffen, das globalen Top-Banken in Geschwindigkeit und Präzision in nichts nachsteht. Seine Mission ist der Bau einer digitalen Festung.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Systemarchitektur</h4>
                  <p className="text-sm text-gray-500">Backend-Entwicklung & Finanz-Microservices</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Cybersicherheit</h4>
                  <p className="text-sm text-gray-500">Fortgeschrittene Verschlüsselung & Datenschutz</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Vision & Values --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Absolute Sicherheit", desc: "Verwendung mehrschichtiger Verschlüsselungsprotokolle zur Gewährleistung der Transaktionssicherheit.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "Globale Verbindung", desc: "Öffnung der Tore zur digitalen Wirtschaft für Afghanistan ohne traditionelle Zwischenhändler.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "Ständige Innovation", desc: "Kontinuierliche Entwicklung von Neobank-Funktionen für die Bedürfnisse künftiger Generationen.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">Bereit für eine Zusammenarbeit?</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                Bei SafiPay suchen wir nach Finanzexperten und internationalen strategischen Partnern.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                Partnerschaftsanfrage senden <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}