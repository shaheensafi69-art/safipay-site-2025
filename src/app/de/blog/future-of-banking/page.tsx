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
  const lang = params?.lang || 'de';
  const isRtl = lang === 'fa' || lang === 'ps' || lang === 'ar';

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section mit majestätischer Eingangs-Animation */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/blog/future-of-banking/hero.jpg" 
            alt="Die Zukunft des digitalen Bankwesens"
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
              <span>Next-Gen Fintech Ökosystem</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 drop-shadow-2xl">
              Zukunft des Banking; <br/> <span className="text-amber-500 text-4xl md:text-6xl text-left block mt-4">Tradition vs. Moderne</span>
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
            
            {/* Autorenprofil mit SafiPay Logo */}
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
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Offizieller SafiPay Sprecher</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> 20.02.2026</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> 15 Min. Lesezeit</span>
              </div>
            </div>

            {/* Hauptinhalt des Artikels */}
            <article className="space-y-12 text-gray-300 leading-[2.4] text-justify text-lg" dir="ltr">
              
              <p className="text-2xl text-white font-medium mb-12 border-l-4 border-amber-500 pl-6">
                Das traditionelle Bankwesen mit seinen Steinmauern und langen Warteschlangen liegt im Sterben. In der heutigen Welt ist Schnelligkeit nicht nur ein Vorteil, sondern der Maßstab für Sicherheit und Vertrauen. SafiPay wurde geschaffen, um diese Konzepte neu zu definieren und physische Grenzen aufzuheben.
              </p>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Zap className="text-amber-500" /> Warum alte Systeme scheitern
              </h2>
              <p>
                Die größte Schwäche traditioneller Banken liegt in ihrer starken Abhängigkeit von menschlicher Bürokratie und veralteter Infrastruktur. Während eine Banküberweisung in Altsystemen 3 bis 5 Werktage dauern kann, werden Transaktionen im modernen SafiPay-Ökosystem über Cloud-Netzwerke mit KI-gestützter Überwachung in Bruchteilen einer Sekunde abgewickelt. Genau deshalb legt unser Gründer, <strong>Shaheen Safi</strong>, Wert auf die vollständige Eliminierung traditioneller Vermittler.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <TrendingUp className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">Smarte Finanzoptimierung</h4>
                    <p className="text-sm text-gray-500">Einsatz fortschrittlicher Algorithmen zur Minimierung von Gebühren und Maximierung der Überweisungsgeschwindigkeit im SEPA-Netzwerk.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <Landmark className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">EU-Bankenstandard</h4>
                    <p className="text-sm text-gray-500">Alle unsere Aktivitäten unterliegen der strengen Aufsicht der EU-Finanzbehörden – ein Standard, den traditionelle Wechselstuben niemals bieten können.</p>
                </motion.div>
              </div>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Lock className="text-amber-500" /> Sicherheit: Jenseits des Passworts
              </h2>
              <p>
                Im Bereich der technischen Sicherheit hat <strong>Mojtaba (unser Sicherheitschef)</strong> mehrstufige Schutzprotokolle implementiert. Von der biometrischen Authentifizierung bis hin zur End-to-End-Verschlüsselung ist es unser Ziel, eine Plattform zu bieten, auf der Nutzer ihr Vermögen verwalten können, ohne sich um Sanktionen oder Eingriffe Dritter sorgen zu müssen.
              </p>

              <div className="bg-white/[0.02] border-l-4 border-amber-500 p-12 rounded-2xl my-16 text-left">
                <p className="text-white text-xl italic font-light">
                  "Die Zukunft des Bankwesens liegt in Ihrem Smartphone, nicht in Steingebäuden. Bei SafiPay haben wir diese Macht direkt in Ihre Hände gelegt."
                </p>
                <p className="text-amber-500 font-bold mt-4">— Botschaft von Sahel, Direktorin für internationale Entwicklung</p>
              </div>

              <h2 className="text-3xl font-black text-white mb-8">Fazit: Ein Sprung in die digitale Wirtschaft</h2>
              <p>
                Wir bei SafiPay glauben, dass der Zugang zum globalen Bankensystem ein Grundrecht für jeden Einzelnen ist. Durch die Bereitstellung von Sofort-IBAN-Konten und Visa-Karten haben wir eine Brücke gebaut, die die afghanische Wirtschaft mit dem Herzen Europas und den globalen Märkten verbindet. Dies ist erst der Anfang einer großen Transformation in der Finanzstruktur der Region.
              </p>
            </article>

            {/* Zurück-Button */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg">
                    <ArrowRight size={24} className={isRtl ? "" : "rotate-180"} />
                    Zurück zur SafiPay Enzyklopädie
                </span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}