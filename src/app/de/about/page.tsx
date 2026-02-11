'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPageDE() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="ltr">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm"
          >
            Finanzparadigmenwechsel in Afghanistan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            Wir verschieben die <br /> Grenzen des Bankwesens
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay ist nicht nur eine App; es ist eine revolutionäre Infrastruktur, die mit dem Ziel geschaffen wurde, den Zugang zu internationalen Finanzsystemen für jeden afghanischen Bürger weltweit zu demokratisieren.
          </motion.p>
        </div>
      </section>

      {/* --- Founders Section --- */}
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
                alt="Shaheen Safi - Founder & CEO" 
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
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Founder & Chief Executive Officer
              </div>
              <h2 className="text-4xl font-bold">Shaheen Safi <span className="text-gray-500 text-2xl font-light">(CEO)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Shaheen Safi (geb. 2003) ist Fintech-Stratege und Architekt digitaler Zahlungssysteme. Mit einer Vision, die über traditionelle Grenzen hinausgeht, ist er für die strategische Leitung von SafiPay und die Überwachung der technischen Infrastruktur verantwortlich.
                </p>
                <p>
                  Durch seine Expertise in europäischen Banken-Ökosystemen und sein tiefes Verständnis der wirtschaftlichen Herausforderungen Afghanistans hat Shaheen ein Modell entworfen, das Sicherheit auf Weltklasseniveau mit einfachem Zugang kombiniert. Seine Spezialisierung auf komplexe Banklösungen und Finanzmanagement ist der Motor, der SafiPay zur ersten afghanischen Neobank macht.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Technische Expertise</h4>
                  <p className="text-sm text-gray-400">Cloud-Architektur, Zahlungssicherheit & Blockchain</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Führung</h4>
                  <p className="text-sm text-gray-400">Strategisches Management & internationale Geschäftsentwicklung</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - Co-Founder */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Co-Founder & Chief Communications Officer
              </div>
              <h2 className="text-4xl font-bold">Mujtaba Rahmani <span className="text-gray-500 text-2xl font-light">(CCO)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Mujtaba Rahmani (geb. 2006) ist Spezialist für strategische Kommunikation und Markenentwicklung. Er trägt die entscheidende Verantwortung für Public Relations, die globale Markenpräsenz und den Aufbau von Brücken zwischen SafiPay und der großen afghanischen Diaspora weltweit.
                </p>
                <p>
                  Mit seinen außergewöhnlichen Verhandlungsfähigkeiten und seinem Verständnis für Marktpsychologie spielt Mujtaba eine Schlüsselrolle dabei, das Vertrauen von Investoren zu gewinnen und SafiPay als stabiles, bürgernahmes Finanzinstitut zu positionieren. Seine Mission geht über Werbung hinaus – er schafft eine neue Finanzkultur für die junge Generation Afghanistans.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Kommunikation</h4>
                  <p className="text-sm text-gray-400">Strategisches Branding, Geschäftsverhandlungen & PR</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Entwicklung</h4>
                  <p className="text-sm text-gray-400">Netzwerkerweiterung & Akquise internationaler Unterstützung</p>
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
                alt="Mujtaba Rahmani - Co-Founder" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision --- */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Unsere Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Unsere Mission bei SafiPay ist es, jedem Afghanen finanzielle Macht zu verleihen. Durch den Einsatz moderner Technologien minimieren wir die Kosten für Geldtransfers und machen den Zugang zu internationalen Kreditkarten und Mehrwährungskonten – was einst ein Traum war – zur täglichen Realität.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Vision 2030</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Wir bauen eine Zukunft auf, in der kein Afghane aufgrund seines geografischen Standorts von der digitalen Wirtschaft ausgeschlossen ist. Unsere Vision ist es, die größte Finanzinfrastruktur der Region und der führende Anbieter von Neobanking-Diensten für Entwicklungsländer zu werden.
            </p>
          </div>
        </div>
      </section>

      {/* --- Core Values --- */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Die ethischen und technischen Säulen von SafiPay</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Absolute Transparenz", 
              desc: "Wir glauben, dass Vertrauen nicht durch Geheimhaltung entsteht. Alle Finanzprozesse und Gebühren werden bei SafiPay mit vollständiger Transparenz ausgewiesen." 
            },
            { 
              title: "Erhöhte Bankensicherheit", 
              desc: "Durch den Einsatz fortschrittlicher Verschlüsselungsprotokolle und biometrischer Authentifizierung garantieren wir die Sicherheit der Nutzerwertsachen über traditionelle Standards hinaus." 
            },
            { 
              title: "Finanzielle Inklusion", 
              desc: "Unsere Dienstleistungen sind ohne Diskriminierung konzipiert, um selbst die entlegensten Teile Afghanistans mit den globalen Märkten zu verbinden." 
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

      {/* --- CTA Section --- */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6">Seien Sie Teil dieser Finanzrevolution</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Wir verändern das finanzielle Schicksal einer Nation. Ob als Nutzer oder als Investor – bei SafiPay ist Ihr Platz reserviert.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/de/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">Investieren</Link>
            <Link href="/de/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Executive Team kontaktieren</Link>
          </div>
        </div>
      </section>

    </div>
  );
}