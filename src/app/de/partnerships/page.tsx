'use client';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Target, ShieldCheck, ArrowRight, 
  Rocket, Globe, Landmark, CreditCard, ChevronDown 
} from 'lucide-react';
import { useState } from 'react';

export default function InvestPageDE() {
  const CAMPAIGN_LINK = "https://gogetfunding.com/safipay-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%a8%d8%a7%d9%86%da%a9-%d8%af%db%8c%d8%ac%db%8c%d8%ta%d9%84-%d8%a8%d8%b1%d8%a7%db%8c-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86%d9%87%d8%a7-%d8%a7/";
  const raised = 0;
  const goal = 80000;
  const percentage = Math.round((raised / goal) * 100);
  const donors = 0;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const roadmap = [
    {
      stage: "Phase 1",
      title: "Infrastruktur & Community",
      status: "In Arbeit",
      desc: "Start der globalen Fundraising-Kampagne, Aufbau einer Community von 10.000 Unterstützern und Finalisierung der Systemarchitektur.",
      icon: <Users className="text-amber-500" />
    },
    {
      stage: "Phase 2",
      title: "Lizenzen & Compliance",
      status: "Geplant",
      desc: "Erwerb internationaler EMI-Lizenzen und Aufbau rechtlicher Rahmenbedingungen in strategischen Jurisdiktionen.",
      icon: <Landmark className="text-amber-500" />
    },
    {
      stage: "Phase 3",
      title: "Beta-Launch",
      status: "Geplant",
      desc: "Veröffentlichung der SafiPay-App für Early Adopters, Aktivierung von Echtzeit-Transfers und digitalen Wallets.",
      icon: <Rocket className="text-amber-500" />
    },
    {
      stage: "Phase 4",
      title: "Globale Kartenausgabe",
      status: "Geplant",
      desc: "Partnerschaften mit großen Zahlungsnetzwerken zur Ausgabe physischer und virtueller SafiPay-Karten weltweit.",
      icon: <CreditCard className="text-amber-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30" dir="ltr">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -ml-48 -mt-48" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-8"
          >
            <Target size={16} />
            <span>Offizielle Crowdfunding- & Support-Kampagne</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent leading-tight"
          >
            Gestalten wir gemeinsam <br /> die finanzielle Zukunft Afghanistans
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay baut die erste globale Neobank für Afghanen auf. Mit Ihrer Hilfe erwerben wir Lizenzen, entwickeln Sicherheitstechnologien und schließen die finanzielle Lücke für Millionen.
          </motion.p>
        </div>
      </section>

      {/* --- Progress Section --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-900/20 blur-3xl opacity-30 rounded-[3rem]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-900/50 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="text-left">
                <span className="text-gray-500 uppercase tracking-widest font-bold text-sm">Finanzierungsziel</span>
                <div className="text-5xl md:text-7xl font-black text-white mt-2">
                  ${goal.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <div className="text-6xl md:text-8xl font-black text-amber-500">
                  {percentage}%
                </div>
                <span className="text-amber-500/60 uppercase tracking-widest font-bold text-sm">Erreicht</span>
              </div>
            </div>

            <div className="relative w-full h-8 bg-black/50 rounded-full border border-white/5 overflow-hidden mb-12 shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 2, ease: "circOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-700 via-amber-500 to-yellow-400 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">${raised.toLocaleString()}</div>
                <div className="text-sm text-gray-500 font-bold tracking-tighter uppercase">Gesammelt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{donors.toLocaleString()}</div>
                <div className="text-sm text-gray-500 font-bold tracking-tighter uppercase">Unterstützer</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-amber-500/80 font-mono italic">Stand: {new Date().toLocaleDateString('de-DE')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Roadmap Section --- */}
      <section className="py-24 container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Unsere Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">Von der Vision zur globalen Realität. So bauen wir die Zukunft von SafiPay.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-16">
            {roadmap.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-gray-900 border border-amber-500/50 rounded-full flex items-center justify-center z-10 transform -translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  {step.icon}
                </div>

                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                  <div className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all group ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">{step.stage}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                    <div className={`mt-6 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${step.status === 'In Arbeit' ? 'bg-amber-500/20 text-amber-500' : 'bg-white/5 text-gray-500'}`}>
                      {step.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Donation Cards --- */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">Wählen Sie Ihren Beitrag</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { amount: 10, label: "Supporter", desc: "Kleiner Beitrag, große Wirkung" },
              { amount: 25, label: "Growth Partner", desc: "Stärkung der Infrastruktur" },
              { amount: 100, label: "Botschafter", desc: "Ein Schlüssel zum Erfolg" },
              { amount: "Individuell", label: "Strategischer Partner", desc: "Hinterlassen Sie Spuren", custom: true }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.custom ? CAMPAIGN_LINK : `${CAMPAIGN_LINK}?amount=${item.amount}`}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-[2rem] border transition-all flex flex-col items-center justify-center gap-4 ${
                  item.amount === 100 ? 'bg-amber-500 border-amber-500 text-black' : 'bg-gray-900/50 border-white/10 hover:border-amber-500/50 shadow-xl'
                }`}
              >
                <span className={`text-4xl font-black ${item.amount === 100 ? 'text-black' : 'text-amber-500'}`}>
                  {typeof item.amount === 'number' ? `$${item.amount}` : item.amount}
                </span>
                <div className="text-center">
                  <div className={`font-bold tracking-widest text-sm uppercase ${item.amount === 100 ? 'text-black/80' : 'text-white'}`}>
                    {item.label}
                  </div>
                  <div className={`text-xs mt-1 ${item.amount === 100 ? 'text-black/60' : 'text-gray-500'}`}>
                    {item.desc}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            {[
              { q: "Wie wird meine Investition verwendet?", a: "Ihre Beiträge fließen direkt in die Finanzierung internationaler Banklizenzen, die technische Infrastruktur und rechtliche Compliance-Verfahren." },
              { q: "Ist SafiPay ein registriertes Unternehmen?", a: "SafiPay befindet sich derzeit in der Pre-Operational-Phase. Wir finalisieren unsere rechtliche Struktur gemäß globalen Finanzvorschriften in Phase 2 unserer Roadmap." },
              { q: "Welche Vorteile habe ich als Unterstützer?", a: "Neben der Förderung der ersten afghanischen Neobank erhalten Top-Unterstützer exklusiven Early Access und SafiPay-Karten der 'Founder Edition'." }
            ].map((faq, i) => (
              <div key={i} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-all"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-amber-500' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-8 pb-6 text-gray-400 leading-relaxed font-light"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Transparency Section --- */}
      <section className="py-24 container mx-auto px-6 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Volle Transparenz</h2>
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-amber-500" />, title: "Sichere Transaktionen", text: "Alle Zahlungen werden über die weltweit verschlüsselte Plattform GoGetFunding abgewickelt." },
                { icon: <TrendingUp className="text-amber-500" />, title: "Strategische Planung", text: "Gelder werden zweckgebunden für Lizenzen, Technik und Compliance eingesetzt." },
                { icon: <Users className="text-amber-500" />, title: "Monatliche Updates", text: "Unterstützer erhalten alle 30 Tage einen detaillierten Fortschrittsbericht." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-600 to-amber-900 p-12 rounded-[3rem] text-center shadow-2xl shadow-amber-900/20">
            <h3 className="text-3xl font-black mb-6 italic text-white leading-tight">"Investieren Sie in eine Nation, <br /> nicht nur in eine Bank."</h3>
            <p className="text-white/80 mb-8 font-light italic">Jeder Beitrag bringt uns der finanziellen Souveränität von Millionen näher.</p>
            <motion.a 
              href="/de/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg"
            >
              Investor Relations kontaktieren <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </section>

    </div>
  );
}