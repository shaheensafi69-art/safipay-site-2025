'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, Cpu, Landmark, BadgeCheck, ShieldAlert
} from 'lucide-react';

export default function GermanElitePartnership() {
  const containerRef = useRef(null);
  
  // Smooth Scroll Settings for the Car Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, 
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30 text-left" dir="ltr">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              GLOBALE FINANZSOUVERÄNITÄT 2026
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.75] mb-16 italic tracking-tighter text-right">
              UNGEBÜNDELTE <br/> <span className="text-amber-500 text-glow text-8xl md:text-[12rem]">MACHT.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed">
              SafiPay ist nicht nur eine App; es ist eine globale Infrastruktur, die finanzielle Souveränität für über 40 Millionen Nutzer neu definiert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. WALLESTER (THE BANKING PILLAR) --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">STRATEGISCHE SÄULE I: Wallester AS</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">EUROPÄISCHER <br/> BANKENKERN.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Wir sind eine direkte Partnerschaft mit **Wallester AS** eingegangen, einem lizenzierten Finanzinstitut und offiziellen VISA-Hauptmitglied in Estland. Dies ist nicht nur eine technologische Verbindung; es ist ein direkter Zugang zum europäischen Finanznetzwerk.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold">Höchster globaler Sicherheitsstandard</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold">Offizielle VISA-Kartenausgabe</p>
                </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(245,158,11,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden transition-all duration-500 shadow-2xl"
          >
             <CreditCard size={180} className="absolute -right-10 -top-10 opacity-5" />
             <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Persönliche europäische IBAN-Konten</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Sofortige virtuelle VISA-Karten</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> SEPA- und SWIFT-Abrechnungen</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Vermögensverwaltung in Euro</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 3. DING (GLOBAL CONNECTIVITY) --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 transition-all duration-500"
          >
                <h4 className="text-blue-500 font-black mb-8 text-center">INFRASTRUKTURREICHWEITE</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">500+</div>
                        <div className="text-[10px] text-gray-500 uppercase">Globale Netzbetreiber</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">150+</div>
                        <div className="text-[10px] text-gray-500 uppercase">Abgedeckte Länder</div>
                    </div>
                </div>
          </motion.div>
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">STRATEGISCHE SÄULE II: Ding Network</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">GRENZENLOSE <br/> VERBINDUNG.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Ding ist der weltweit führende Anbieter für den grenzüberschreitenden Werttransfer. Safi Top-Up integriert dieses Netzwerk, um Aufladungen, Datenpakete und E-SIM-Dienste weltweit in Echtzeit anzubieten.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">Echtzeit-Abrechnung</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">5G E-SIM BEREIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES SECTION --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">EXKLUSIVE <span className="text-amber-500 text-glow">SERVICES.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Was wir bieten, geht weit über das traditionelle Bankwesen hinaus.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { t: "Virtuelle VISA-Karte", d: "Ausstellung in Sekunden. Weltweit einsetzbar für Werbung, Streaming und in über 100 Millionen Shops.", icon: <CreditCard className="text-amber-500" size={40}/> },
                { t: "Euro IBAN-Konto", d: "Erhalten Sie Zahlungen aus der EU und den USA direkt auf Ihr persönliches Konto unter EU-Regulierung.", icon: <Globe className="text-amber-500" size={40}/> },
                { t: "Globale E-SIM", d: "Sofortige Aktivierung für 150 Länder. Bleiben Sie weltweit ohne physischen SIM-Wechsel verbunden.", icon: <Smartphone className="text-amber-500" size={40}/> },
                { t: "Crypto-Brücke", d: "Wandeln Sie digitale Assets sofort in ausgabefähiges Guthaben auf Ihrer VISA-Karte um.", icon: <Coins className="text-amber-500" size={40}/> },
                { t: "Business-Lösungen", d: "Maßgeschneiderte Konten für Unternehmen für unkomplizierte internationale Zahlungen.", icon: <Briefcase className="text-amber-500" size={40}/> },
                { t: "Finanzielle Intelligenz", d: "KI-gestützte Analyse Ihrer Ausgaben und Vorschläge zur Währungsoptimierung.", icon: <Cpu className="text-amber-500" size={40}/> }
            ].map((srv, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ y: -15, backgroundColor: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.3)' }}
                    className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 transition-all duration-300 group"
                >
                    <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{srv.icon}</div>
                    <h4 className="text-2xl font-black mb-6 italic">{srv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{srv.d}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- 5. COMPARISON --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">ABSOLUTE <span className="text-amber-500">ÜBERLEGENHEIT.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 font-bold">
                <motion.div whileHover={{ scale: 0.98 }} className="p-12 bg-black rounded-[4rem] border border-red-500/20">
                    <ShieldAlert className="text-red-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-red-500">TRADITIONELLE BANKEN</h3>
                    <ul className="space-y-6 text-gray-600 text-sm">
                        <li>• Eingeschränkte, sanktionierte Netzwerke</li>
                        <li>• Papierbasierte KYC (Wochenlange Dauer)</li>
                        <li>• Keine Unterstützung für globale Plattformen</li>
                        <li>• Hohe Gebühren und veraltete Systeme</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <BadgeCheck className="text-amber-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-amber-500">SAFIPAY ÖKOSYSTEM</h3>
                    <ul className="space-y-6 text-amber-400 text-sm">
                        <li>• EU-lizenzierte Infrastruktur & VISA-Mitglied</li>
                        <li>• KI-basierte Verifizierung (Ready in 2 Min.)</li>
                        <li>• 100% Akzeptanz bei allen globalen Gateways</li>
                        <li>• Echtzeit-Abrechnungen via moderner API</li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- 6. ROADMAP WITH CAR --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-7xl font-black text-center mb-60 italic uppercase">DER <span className="text-amber-500 text-glow">PFAD.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]">
          {/* Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full"
            />
          </div>

          {/* Car */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50 flex flex-col items-center"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* Roadmap Steps */}
          {[
            { phase: "PHASE I", title: "Fundament", desc: "Abschluss der EU-Lizenzierung. Volle API-Integration mit Wallester AS Banking Core.", year: "Q1 2026", y: "10%" },
            { phase: "PHASE II", title: "Konnektivität", desc: "Partnerschaft mit Ding Global. Launch von Safi Top-Up für 500+ Anbieter weltweit.", year: "Q2 2026", y: "35%" },
            { phase: "PHASE III", title: "Marktexpansion", desc: "Öffentlicher Launch der SafiPay App. Ausgabe von VISA-Karten und IBAN-Konten.", year: "Q3 2026", y: "60%" },
            { phase: "PHASE IV", title: "Physische Präsenz", desc: "Ausgabe der Safi 'Titanium' Metallkarten. Installation von POS-Terminals weltweit.", year: "Q4 2026", y: "85%" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${i % 2 !== 0 ? "justify-start" : "justify-end"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: i % 2 !== 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.5)' }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] transition-all shadow-2xl"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em] uppercase">{step.year}</span>
                    <h4 className="text-amber-600 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. PARTNER FORM --- */}
      <section className="py-60 container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic leading-[0.8]">WERDEN SIE <br/> <span className="text-amber-500">PARTNER.</span></h2>
                <p className="text-gray-400 text-2xl font-light">Wir wählen derzeit 5 strategische Partner für die nächste Expansionsphase aus.</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl"
            >
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">ORGANISATION</label>
                            <input name="entity" type="text" required placeholder="Firma / Bank" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">OFFIZIELLE E-MAIL</label>
                            <input name="email" type="email" required placeholder="ceo@company.de" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">PARTNERSCHAFTSTYP</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400">
                            <option>Institutionelles Investment</option>
                            <option>Infrastruktur-Provider</option>
                            <option>Marktexpansion</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">VORSCHLAG</label>
                        <textarea name="proposal" rows={6} required placeholder="Ihre Vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all">
                        STRATEGISCHE GESPRÄCHE STARTEN
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em]">SafiPay Global Infrastructure © 2026 | Built for the Frontier Markets.</p>
      </footer>
    </div>
  );
}