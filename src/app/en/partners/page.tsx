'use client';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Globe, ShieldCheck, CreditCard, Smartphone, Coins, 
  Briefcase, Car, Cpu, Landmark, BadgeCheck, 
  MapPin, FileText, Zap, Lock, Server, Wifi, ArrowRight
} from 'lucide-react';

// --- Interactive Card Component ---
const InteractiveCard = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={{ scale: 1.02 }}
      className={`relative group overflow-hidden border border-white/10 bg-black rounded-[3rem] p-10 transition-colors hover:border-amber-500/50 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(245,158,11,0.1), transparent 40%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
};

export default function SafiEliteEcosystem() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500" dir="ltr">
      
      {/* Custom Cursor Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[100]" style={{ scaleX }} />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="px-6 py-2 rounded-full border border-amber-500/30 text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-8 inline-block">
              Safi International Capital LTD
            </span>
            <h1 className="text-7xl md:text-[12rem] font-black italic tracking-tighter leading-none mb-10">
              ELITE <span className="text-amber-500 text-glow">BANKING.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-500 font-light italic leading-relaxed">
              Redefining global liquidity through institutional-grade infrastructure and instant digital connectivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SAFIPAY SECTION --- */}
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mb-20"
        >
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">SafiPay Infrastructure</h2>
          <div className="h-1 w-24 bg-amber-500"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <InteractiveCard className="lg:col-span-2">
            <Landmark className="text-amber-500 mb-8" size={48} />
            <h3 className="text-4xl font-black italic mb-6 uppercase">Personal vIBAN Accounts</h3>
            <p className="text-gray-400 text-lg italic leading-relaxed mb-10">
              We provide fully-regulated, personal bank accounts in 10 major global currencies. Each account is opened under the customer's legal name in its respective country, providing authentic local bank details.
            </p>
            <div className="grid grid-cols-5 gap-4">
              {['USD', 'EUR', 'GBP', 'PLN', 'SEK', 'NOK', 'RON', 'HUF', 'CZK', 'DKK'].map(c => (
                <div key={c} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5 font-black text-xs text-amber-500 uppercase">{c}</div>
              ))}
            </div>
          </InteractiveCard>

          <InteractiveCard className="bg-amber-500 text-black border-none">
            <Zap size={48} className="mb-8" />
            <h3 className="text-4xl font-black italic mb-6 uppercase tracking-tighter">60 Sec Issuance</h3>
            <p className="font-bold text-sm leading-relaxed mb-8">
              Our automated API bypasses traditional banking delays, delivering Virtual VISA cards and IBAN details in under a minute.
            </p>
            <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ x: "-100%" }} 
                    whileInView={{ x: "0%" }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-black w-1/2" 
                />
            </div>
          </InteractiveCard>
        </div>
      </section>

      {/* --- SAFI TOPUP SECTION --- */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-7xl font-black italic uppercase leading-none">Safi <span className="text-amber-500">TopUp</span></h2>
              <p className="text-gray-400 text-xl font-light italic leading-relaxed">
                Empowering over 5 billion prepaid devices globally. Our connectivity hub links 150+ countries through 500+ direct mobile operator integrations.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Global E-SIM', 'Instant Airtime', '500+ Operators', '150 Countries'].map(t => (
                  <span key={t} className="px-6 py-3 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
                <InteractiveCard>
                    <Wifi className="text-amber-500 mb-4" />
                    <h4 className="text-2xl font-black italic uppercase">E-SIM Hub</h4>
                    <p className="text-gray-500 text-xs">Global high-speed 5G data roaming.</p>
                </InteractiveCard>
                <InteractiveCard className="translate-y-12">
                    <Smartphone className="text-amber-500 mb-4" />
                    <h4 className="text-2xl font-black italic uppercase">Direct API</h4>
                    <p className="text-gray-500 text-xs">Instant top-up delivery nodes.</p>
                </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- INNOVATIVE ROADMAP (The "Vortex" Design) --- */}
      <section className="py-60 container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-40">
            <h2 className="text-8xl font-black italic uppercase tracking-tighter">Imperial <span className="text-amber-500 text-glow">Roadmap</span></h2>
            <div className="w-px h-24 bg-amber-500 mx-auto mt-8"></div>
        </div>

        <div className="relative flex flex-col gap-24 items-center">
            {[
                { phase: "01", title: "GENESIS", date: "MARCH 2026", desc: "Official UK Incorporation (No. 17063286). Acquisition of European Banking Nodes and Tier-1 Settlement Protocols." },
                { phase: "02", title: "NETWORK", date: "JUNE 2026", desc: "Launch of Safi TopUp global hub. Integration of 500+ carrier APIs for instant global mobile credit." },
                { phase: "03", title: "PLATFORM", date: "SEPT 2026", desc: "Public release of SafiPay App. Automated KYC onboarding and instant multi-currency IBAN generation." },
                { phase: "04", title: "EXPANSION", date: "DEC 2026", desc: "Corporate Treasury solutions. B2B cross-border payment engine for high-volume enterprise clients." },
                { phase: "05", title: "LEGACY", date: "2027", desc: "Issuance of Safi Titanium Physical cards. Opening regional flagship centers in London & Dubai." },
            ].map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, rotateX: -45 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ margin: "-100px" }}
                    className="group relative w-full max-w-4xl"
                >
                    <div className="flex items-start gap-12 p-12 bg-white/[0.03] border border-white/5 rounded-[4rem] hover:border-amber-500/30 transition-all duration-700">
                        <span className="text-9xl font-black italic opacity-10 absolute -left-10 -top-10 group-hover:text-amber-500 transition-colors">{item.phase}</span>
                        <div className="relative z-10 w-full">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-5xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                                <span className="text-amber-500 font-black text-xs tracking-[0.4em]">{item.date}</span>
                            </div>
                            <p className="text-gray-500 text-xl font-light italic leading-relaxed max-w-2xl">{item.desc}</p>
                        </div>
                    </div>
                    {idx !== 4 && <div className="absolute left-1/2 -bottom-24 w-px h-24 bg-gradient-to-b from-amber-500 to-transparent"></div>}
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <footer className="py-40 bg-black border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="container mx-auto px-6">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block cursor-pointer mb-20">
                <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter">Start Your <span className="text-amber-500">Empire.</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-12 text-[10px] font-black uppercase tracking-[0.6em] text-gray-600 mb-20">
                <div className="flex flex-col gap-4">
                    <span className="text-amber-500">Headquarters</span>
                    <span className="text-white">71-75 Shelton St, London</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-amber-500">Legal</span>
                    <span className="text-white">Registered No. 17063286</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-amber-500">Ecosystem</span>
                    <span className="text-white">SafiPay & Safi TopUp</span>
                </div>
            </div>
            <p className="text-gray-800 text-[10px] tracking-[1em] uppercase">Safi International Capital LTD © 2026 | All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}