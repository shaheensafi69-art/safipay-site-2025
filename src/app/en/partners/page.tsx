'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { 
  Landmark, Zap, Wifi, ArrowUpRight, Smartphone, 
  Layers, Lock, Database, Briefcase, MousePointer2,
  ShieldCheck, Globe, Cpu, CreditCard, CheckCircle2,
  Server, BarChart3, ChevronDown
} from 'lucide-react';

// --- Magnetic Component ---
const MagneticElement = ({ children, distance = 0.4 }: { children: React.ReactNode; distance?: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 15 });

  return (
    <motion.div 
      onMouseMove={(e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - (left + width / 2)) * distance);
        mouseY.set((clientY - (top + height / 2)) * distance);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

// --- Interactive Bento Card ---
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]));

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden backdrop-blur-sm transition-all hover:border-amber-500/40 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default function SafiEmpireUltimate() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.1], [1, 0.9]);

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden selection:bg-amber-500/30 font-sans" dir="ltr">
      
      {/* --- PROGRESS BAR --- */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-[100] origin-left shadow-[0_0_15px_rgba(245,158,11,0.5)]" style={{ scaleX: smoothProgress }} />

      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.08),transparent_70%)]" />
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="container mx-auto px-6 text-center z-10">
          <MagneticElement>
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.8em] border border-amber-500/30 px-6 py-2 rounded-full mb-12 inline-block">
              Safi International Capital LTD
            </span>
          </MagneticElement>
          <h1 className="text-6xl md:text-[11rem] font-black italic tracking-tighter leading-[0.9] uppercase mb-10">
            REDEFINING <br/> <span className="text-amber-500">LIQUIDITY</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-2xl font-light italic leading-relaxed">
            Sovereign financial infrastructure engineered for the digital elite. 
            Instant banking, global nodes, and absolute connectivity.
          </p>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-24 flex flex-col items-center gap-4">
            <span className="text-[10px] font-black tracking-widest text-gray-600 uppercase">Explore Safi Realm</span>
            <ChevronDown className="text-amber-500" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: STATS --- */}
      <section className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Execution Time", val: "60 SEC", icon: Zap },
            { label: "Global Reach", val: "150+ Countries", icon: Globe },
            { label: "Asset Security", val: "Tier 1", icon: ShieldCheck },
            { label: "Active Nodes", val: "500+", icon: Server }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="space-y-4">
              <stat.icon className="mx-auto text-amber-500/50" size={24} />
              <div className="text-5xl font-black italic tracking-tighter uppercase">{stat.val}</div>
              <div className="text-gray-600 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: SAFIPAY --- */}
      <section className="py-60 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10 text-left">
          <div className="max-w-2xl text-left">
            <h2 className="text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
              <span className="text-amber-500">SafiPay</span> Infrastructure
            </h2>
            <p className="text-gray-500 text-xl font-light italic leading-relaxed">
              We bypass traditional banking bureaucracy. Our vIBAN technology allows you to manage capital globally under your own legal entity.
            </p>
          </div>
          <div className="bg-amber-500 text-black px-10 py-4 rounded-full font-black text-sm uppercase italic flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
            Access vIBAN Portal <ArrowUpRight />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <BentoCard className="lg:col-span-8 group">
            <div className="flex justify-between items-start mb-24">
              <div className="text-left">
                <span className="text-amber-500 font-black text-[10px] tracking-widest uppercase">Multi-Currency Node</span>
                <h3 className="text-4xl font-black italic uppercase mt-2">Personal vIBAN Accounts</h3>
              </div>
              <Landmark className="text-amber-500 group-hover:scale-110 transition-transform" size={60} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['USD', 'EUR', 'GBP', 'PLN', 'SEK', 'NOK', 'RON', 'HUF', 'CZK', 'DKK'].map((curr) => (
                <div key={curr} className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center group-hover:border-amber-500/20 transition-all">
                  <div className="text-xl font-black italic mb-2 tracking-tighter uppercase">{curr}</div>
                  <div className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">Local Settlement</div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4 bg-amber-500 text-black border-none flex flex-col justify-between group text-left">
            <div className="p-4 bg-black/10 w-fit rounded-2xl">
              <CreditCard size={40} />
            </div>
            <div>
              <h4 className="text-6xl font-black italic leading-[0.8] mb-6 uppercase tracking-tighter">60 <br/> SEC</h4>
              <p className="font-bold text-sm uppercase opacity-80 italic leading-tight">Instant Visa issuance via Tier 1 European BIN Sponsorship.</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* --- SECTION 4: SECURITY --- */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12 text-left">
            <h2 className="text-7xl font-black italic uppercase leading-none tracking-tighter">Sovereign <br/> <span className="text-amber-500">Security</span></h2>
            <div className="space-y-8">
              {[
                { t: "EFSA Estonia Regulated", d: "Supervised infrastructure ensuring asset protection under EU standards." },
                { t: "PCI DSS Level 1", d: "The highest security certification for processing international payments." },
                { t: "Institutional vIBANs", d: "Accounts issued directly via Safi International Capital LTD nodes." }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} key={i} className="flex gap-6 items-start">
                  <CheckCircle2 className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-black italic uppercase tracking-tighter text-xl mb-1">{item.t}</h4>
                    <p className="text-gray-500 font-light italic">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative p-12 bg-black border border-white/10 rounded-[4rem] overflow-hidden group text-left">
            <Lock className="text-amber-500/20 absolute -right-10 -bottom-10 group-hover:scale-125 transition-transform" size={300} />
            <div className="relative z-10 space-y-8 text-left">
              <div className="p-4 bg-amber-500/10 w-fit rounded-2xl"><ShieldCheck className="text-amber-500" size={48} /></div>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">Supervised & Verified</h3>
              <p className="text-gray-500 text-lg leading-relaxed italic">
                Our infrastructure is built on transparency. Every transaction is monitored by AI-driven AML systems while preserving high-net-worth client privacy.
              </p>
              <div className="pt-8 border-t border-white/5 flex gap-8 justify-start text-left">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 mb-2">Registration No.</p>
                  <p className="font-mono text-xs">UK #17063286</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 mb-2">License Status</p>
                  <p className="font-mono text-xs text-green-500 uppercase">ACTIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SAFI TOPUP --- */}
      <section className="py-60 container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-40">
          <motion.h2 initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="text-[10vw] font-black italic uppercase tracking-tighter leading-none mb-10">
            GLOBAL <br/> <span className="text-blue-500">CONNECT</span>
          </motion.h2>
          <div className="h-20 w-px bg-blue-500 mx-auto opacity-30" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <BentoCard className="aspect-square flex flex-col items-center justify-center border-blue-500/10 hover:border-blue-500/40">
            <Wifi className="text-blue-500 mb-12 animate-pulse" size={100} />
            <h3 className="text-6xl font-black italic uppercase tracking-tighter mb-4">Safi TopUp</h3>
            <p className="text-gray-500 uppercase text-[10px] font-black tracking-[0.5em]">500+ DIRECT OPERATOR NODES</p>
          </BentoCard>

          <div className="space-y-16 text-left">
            <h3 className="text-5xl font-black italic uppercase tracking-tighter leading-tight">Connecting <br/> 5 Billion Devices</h3>
            <p className="text-gray-400 text-2xl font-light italic leading-relaxed text-left">
              From the streets of London to the hubs of Dubai, we provide instant airtime and 5G E-SIM data bundles across 150+ countries.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Operators", val: "700+", icon: Layers },
                { label: "Instant Delivery", val: "99.9%", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 rounded-[2.5rem] hover:bg-white/5 transition-all text-left">
                  <item.icon className="text-blue-500 mb-4" size={24} />
                  <div className="text-4xl font-black italic uppercase tracking-tighter">{item.val}</div>
                  <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: COMPARISON --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-20 text-center">Legacy Banking vs <span className="text-amber-500">Safi Empire</span></h2>
            <div className="grid md:grid-cols-2 gap-20 text-left">
              <div className="space-y-10 opacity-40">
                <h4 className="text-2xl font-black italic uppercase border-b border-white/10 pb-4">Old Banking</h4>
                {["Weeks to open an account", "Hidden FX conversion fees", "Physical paperwork", "Restricted virtual cards"].map(text => (
                  <div key={text} className="flex gap-4 items-center justify-start line-through text-gray-500 font-light uppercase text-sm italic">
                     <span className="w-2 h-2 bg-red-500 rounded-full" /> {text}
                  </div>
                ))}
              </div>
              <div className="space-y-10">
                <h4 className="text-2xl font-black italic uppercase border-b border-amber-500/30 pb-4 text-amber-500">Safi Ecosystem</h4>
                {["Issuance in 60 seconds", "Institutional exchange rates", "100% digital KYC", "Unlimited vIBAN assets"].map(text => (
                  <div key={text} className="flex gap-4 items-center justify-start text-white font-black uppercase text-sm italic">
                    <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" /> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: ROADMAP --- */}
      <section className="py-60 container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-64">
          {[
            { phase: "01", title: "GENESIS", date: "MARCH 2026", desc: "Incorporation in London. Deployment of Tier 1 European Banking API nodes.", icon: <Database /> },
            { phase: "02", title: "VELOCITY", date: "JUNE 2026", desc: "Safi TopUp full scale launch. Global E-SIM hub integration.", icon: <Wifi /> },
            { phase: "03", title: "SOVEREIGNTY", date: "SEPTEMBER 2026", desc: "SafiPay mobile app release. Autonomous instant-KYC activation.", icon: <Smartphone /> },
            { phase: "04", title: "DOMINANCE", date: "2027", desc: "Titanium physical card issuance. Bespoke lounges in London & Dubai.", icon: <Briefcase /> }
          ].map((item, i) => (
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} key={i} className={`flex items-center gap-20 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <div className="text-[14rem] font-black italic opacity-5 select-none leading-none md:block hidden">{item.phase}</div>
              <BentoCard className="flex-1 text-left">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                  <span className="text-amber-500 font-black text-xs tracking-widest">{item.date}</span>
                  <div className="text-amber-500">{item.icon}</div>
                </div>
                <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-6">{item.title}</h3>
                <p className="text-gray-500 text-xl font-light italic leading-relaxed">{item.desc}</p>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 8: FOOTER --- */}
      <footer className="py-60 bg-black border-t border-white/5 text-center relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6">
          <MagneticElement>
            <h2 className="text-7xl md:text-[11rem] font-black italic uppercase tracking-tighter leading-none mb-20 hover:text-amber-500 transition-colors cursor-pointer text-center">
              SECURE YOUR <br/> <span className="text-amber-500">LEGACY</span>
            </h2>
          </MagneticElement>

          <div className="grid md:grid-cols-4 gap-12 mt-40 text-[10px] font-black uppercase tracking-[0.5em] text-gray-700 border-t border-white/5 pt-20">
            <div>
              <p className="text-amber-500 mb-4 uppercase">Official Entity</p>
              <p className="text-white">Reg. No. 17063286</p>
            </div>
            <div>
              <p className="text-amber-500 mb-4 uppercase">Headquarters</p>
              <p className="text-white">Shelton St, London</p>
            </div>
            <div>
              <p className="text-amber-500 mb-4 uppercase">Security</p>
              <p className="text-green-500">Nodes Operational</p>
            </div>
            <div>
              <p className="text-amber-500 mb-4 uppercase">Founder</p>
              <p className="text-white tracking-[0.1em]">Shaheen Safi</p>
            </div>
          </div>
          <p className="mt-20 text-[8px] tracking-[1.5em] text-gray-800 uppercase text-center">Safi International Capital LTD © 2026 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}