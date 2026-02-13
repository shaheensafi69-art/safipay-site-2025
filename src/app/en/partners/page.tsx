'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, BarChart3, 
  ShieldAlert, Globe2, Cpu, Landmark, BadgeCheck
} from 'lucide-react';

export default function GlobalElitePartnershipPage() {
  const containerRef = useRef(null);
  
  // تنظیمات اسکرول برای حرکت فوق‌العاده نرم ماشین
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, // بسیار نرم
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- ۱. HERO: THE FINANCIAL GOLIATH --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              The Sovereign Financial Network
            </span>
            <h1 className="text-7xl md:text-[12rem] font-black leading-[0.75] mb-16 italic tracking-tighter">
              UNRIVALED <br/> <span className="text-amber-500">POWER.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed">
              Safi Ecosystem is not just an app; it's a global infrastructure 
              redefining financial sovereignty for 40+ million users.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 text-amber-500">
            <div className="w-1 h-20 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* --- ۲. PARTNER DEEP DIVE: WALLESTER AS --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">Strategic Pillar I: Wallester AS</h3>
            <h2 className="text-6xl font-black italic italic leading-[0.9]">European <br/> Banking Core.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We have partnered with **Wallester AS**, a licensed EMI and VISA Principal Member based in Estonia. 
              This isn't a simple integration; it's a direct API handshake with the European financial grid. 
              While local banks struggle with sanctions and outdated SWIFT systems, SafiPay users gain:
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-xs uppercase font-bold tracking-tighter">Highest Security Tier 1</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-xs uppercase font-bold tracking-tighter">Official Card Issuance</p>
                </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden group">
               <CreditCard size={180} className="absolute -right-10 -top-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
               <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                  <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Personal European IBAN Accounts</li>
                  <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Instant Virtual VISA Card Issuance</li>
                  <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> SEPA & SWIFT Global Settlement</li>
                  <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Euro-Pegged Asset Management</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- ۳. PARTNER DEEP DIVE: DING GLOBAL --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 text-right">
                <h4 className="text-blue-500 font-black mb-8">INFRASTRUCTURE REACH</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black">500+</div>
                        <div className="text-[10px] text-gray-500">OPERATORS</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black">150+</div>
                        <div className="text-[10px] text-gray-500">COUNTRIES</div>
                    </div>
                </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">Strategic Pillar II: Ding Network</h3>
            <h2 className="text-6xl font-black italic italic leading-[0.9]">Unstoppable <br/> Connectivity.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              **Ding** is the world’s leading mobile top-up engine. Safi TopUp integrates their global 
              backbone to provide instant airtime, data, and E-SIM services. For the first time, 
              users in complex regions can stay connected with 0.1s latency.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black">REAL-TIME SETTLEMENT</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black">E-SIM 5G READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ۴. SERVICES: THE SAFI ADVANTAGE --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-7xl font-black italic italic uppercase tracking-tighter">Exclusive <span className="text-amber-500 text-glow">Service</span> Grid.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">What you get with Safi is lightyears ahead of regional banking.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { 
                    t: "The Virtual VISA Card", 
                    d: "Issued in seconds. Valid for Facebook Ads, Google Cloud, Netflix, Amazon, and 100M+ merchants globally. Zero regional restrictions.",
                    icon: <CreditCard className="text-amber-500" size={40}/>
                },
                { 
                    t: "European Personal IBAN", 
                    d: "Receive your salary or freelance payments from Europe and USA directly. Licensed and regulated by EU financial authorities.",
                    icon: <Globe className="text-amber-500" size={40}/>
                },
                { 
                    t: "Travel 5G E-SIM", 
                    d: "Instant activation for 150+ countries. Stay connected as you travel from Kabul to Dubai to Paris without changing SIMs.",
                    icon: <Smartphone className="text-amber-500" size={40}/>
                },
                { 
                    t: "Crypto to Fiat Bridge", 
                    d: "Securely move your digital assets into a usable VISA card balance instantly. The fastest off-ramp in the market.",
                    icon: <Coins className="text-amber-500" size={40}/>
                },
                { 
                    t: "Enterprise Pay", 
                    d: "For Afghan businesses needing to pay international suppliers in USD or EUR. High-limit accounts with no paperwork delays.",
                    icon: <Briefcase className="text-amber-500" size={40}/>
                },
                { 
                    t: "AI Wealth Guard", 
                    d: "Machine learning that monitors your spending and suggests currency hedges between AFN, USD, and EUR.",
                    icon: <Cpu className="text-amber-500" size={40}/>
                }
            ].map((srv, i) => (
                <motion.div key={i} whileHover={{ y: -20 }} className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all group">
                    <div className="mb-10 group-hover:scale-110 transition-transform">{srv.icon}</div>
                    <h4 className="text-2xl font-black mb-6 italic">{srv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{srv.d}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- ۵. REGIONAL SUPERIORITY: COMPARISON --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">BEYOND <span className="text-amber-500">LIMITS.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="p-12 bg-black rounded-[4rem] border border-red-500/20">
                    <ShieldAlert className="text-red-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic">Traditional Regional Banks</h3>
                    <ul className="space-y-6 text-gray-500 text-sm italic">
                        <li>• Sanction-heavy & restricted networks</li>
                        <li>• Paper-based KYC (Takes weeks)</li>
                        <li>• No international merchant support (No Netflix/Ads)</li>
                        <li>• Legacy SWIFT infrastructure (High fees)</li>
                    </ul>
                </div>
                <div className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <BadgeCheck className="text-amber-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic">Safi Global Ecosystem</h3>
                    <ul className="space-y-6 text-amber-500 text-sm font-bold italic">
                        <li>• EU-Licensed & VISA Principal Infrastructure</li>
                        <li>• AI-Driven KYC (Account ready in 2 minutes)</li>
                        <li>• 100% Acceptance for Global Digital Merchants</li>
                        <li>• Real-time, Low-cost API Driven Settlements</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- ۶. ANIMATED ROADMAP WITH SLOW MOVING CAR --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-8xl font-black text-center mb-60 italic">THE MISSION <span className="text-amber-500 text-glow">LOG.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]"> {/* ارتفاع زیاد برای نمایش اسکرول طولانی */}
          {/* THE ROAD */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full"
            />
          </div>

          {/* THE CAR (SLOW & SMOOTH) */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* ROADMAP PHASES */}
          {[
            { phase: "PHASE 01", title: "Institutional Genesis", desc: "Acquisition of EU licensing protocols. Full API integration with Wallester AS banking core. Establishing Tier-1 liquidity bridges.", year: "2026 Q1", y: "10%" },
            { phase: "PHASE 02", title: "Connectivity Pulsar", desc: "Ding Global network handshake. Launch of Safi TopUp covering 500+ operators. Rollout of international E-SIM data packages.", year: "2026 Q2", y: "35%" },
            { phase: "PHASE 03", title: "Retail Domination", desc: "Launch of SafiPay Mobile App (iOS/Android). Public issuance of Virtual VISA cards and IBANs for the global community.", year: "2026 Q3", y: "60%" },
            { phase: "PHASE 04", title: "Physical Sovereignty", desc: "Issuance of Physical Titanium Safi Cards. Merchant payment terminals for high-end retail across Istanbul, Dubai, and Kabul.", year: "2026 Q4", y: "85%" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] group hover:border-amber-500/40 transition-all shadow-2xl"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em]">{step.year}</span>
                    <h4 className="text-amber-500 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ۷. STRATEGIC PARTNERSHIP FORM --- */}
      <section className="py-60 container mx-auto px-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic italic italic leading-[0.8]">Join the <br/> <span className="text-amber-500">Board.</span></h2>
                <p className="text-gray-400 text-2xl font-light">We are selecting 5 strategic partners for the Q3 expansion phase. Apply for an institutional slot.</p>
                <div className="flex items-center gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10">
                    <Landmark size={40} className="text-amber-500" />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-black">Institutional Grade</p>
                        <p className="font-bold">24-Hour Review Guaranteed</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl relative overflow-hidden">
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Entity Name</label>
                            <input name="entity" type="text" required placeholder="Bank/Firm" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Official Email</label>
                            <input name="email" type="email" required placeholder="ceo@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Strategic Intent</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400">
                            <option>Institutional Investment</option>
                            <option>Infrastructure Provider</option>
                            <option>Market Expansion</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Executive Proposal</label>
                        <textarea name="proposal" rows={6} required placeholder="Vision and Synergy..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all shadow-[0_30px_60px_rgba(245,158,11,0.3)]">
                        Initialize Partnership
                    </button>
                </form>
            </div>
        </div>
      </section>

      {/* --- ۸. FOOTER LEGACY --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-10 opacity-20 italic font-black text-[9px] uppercase tracking-[0.8em]">
            <span>Wallester Licensed</span>
            <span>Ding Official</span>
            <span>VISA Principal</span>
        </div>
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em]">SafiPay Global Infrastructure © 2026 | Built for the Frontier Markets.</p>
      </footer>
    </div>
  );
}