'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car
} from 'lucide-react';

export default function LuxuryPartnershipPage() {
  const containerRef = useRef(null);
  
  // تنظیمات اسکرول برای حرکت ماشین
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // حرکت عمودی ماشین در طول مسیر
  const carY = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-black leading-[0.8] mb-12 italic tracking-tighter"
          >
            SAFI <br/> <span className="text-amber-500">ENGINE.</span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 font-light">
            The most advanced fintech infrastructure in the region, powered by global giants.
          </p>
        </div>
      </section>

      {/* --- 2. THE PARTNERS (Wallester & Ding) --- */}
      <section className="py-32 container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 relative group">
          <h2 className="text-4xl font-black mb-6 italic">Wallester <span className="text-amber-500">Banking</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Official VISA-certified infrastructure from Estonia. We provide European IBANs and real-time card issuance that bypasses all regional banking limitations.
          </p>
          <div className="flex gap-4 text-[10px] font-black text-amber-500">
             <span>PCI-DSS COMPLIANT</span> • <span>VISA PRINCIPAL</span>
          </div>
        </div>
        <div className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 relative group">
          <h2 className="text-4xl font-black mb-6 italic text-blue-500">Ding Network</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Connecting Safi to 500+ global operators. We deliver instant airtime and E-SIM services across 150 countries with the world's fastest settlement engine.
          </p>
          <div className="flex gap-4 text-[10px] font-black text-blue-500">
             <span>500+ OPERATORS</span> • <span>GLOBAL COVERAGE</span>
          </div>
        </div>
      </section>

      {/* --- 3. ANIMATED ROADMAP (WITH MOVING CAR) --- */}
      <section className="py-40 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-6xl font-black text-center mb-40 italic">THE <span className="text-amber-500">DRIVE</span> TO 2026</h2>
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Main Track (The Road) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[4px] h-full bg-white/5 rounded-full hidden md:block">
            {/* Animated Progress Road */}
            <motion.div 
              style={{ scaleY: scrollProgress, originY: 0 }}
              className="absolute top-0 left-0 w-full bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            />
            
            {/* --- MOVING CAR --- */}
            <motion.div 
              style={{ top: carY }}
              className="absolute left-1/2 -translate-x-1/2 -mt-4 z-50 flex flex-col items-center"
            >
              <div className="bg-amber-500 p-2 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.8)] rotate-90">
                <Car size={24} className="text-black fill-black" />
              </div>
              <div className="w-1 h-20 bg-gradient-to-t from-amber-500 to-transparent mt-1" />
            </motion.div>
          </div>

          {/* Roadmap Steps */}
          {[
            { q: "Q1 2026", t: "Ignition", d: "EMI License finalization and European Banking API handshake.", side: "left" },
            { q: "Q2 2026", t: "Acceleration", d: "Ding Global integration and E-SIM beta rollout in Central Asia.", side: "right" },
            { q: "Q3 2026", t: "Full Speed", d: "SafiPay Mobile App public launch. Virtual VISA cards live.", side: "left" },
            { q: "Q4 2026", t: "The Horizon", d: "Physical Titanium Cards and AI wealth management tools.", side: "right" },
          ].map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center mb-40 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
              <motion.div 
                initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-[45%] p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] relative group hover:border-amber-500/30 transition-all"
              >
                <span className="text-amber-500 font-black text-xs block mb-2">{step.q}</span>
                <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">{step.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
                {/* Connector Dot */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-amber-500 z-10 
                  ${step.side === "left" ? "-right-[34px]" : "-left-[34px]"}`} />
              </motion.div>
              <div className="md:w-[10%]" />
              <div className="md:w-[45%]" />
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. PARTNERSHIP FORM --- */}
      <section className="py-32 container mx-auto px-6 bg-white/[0.01] rounded-[5rem] border border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black italic mb-4">FUEL THE <span className="text-amber-500">FUTURE.</span></h2>
            <p className="text-gray-500">Submit your strategic proposal to the Safi Board.</p>
          </div>
          <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" type="text" placeholder="Full Entity Name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all" />
              <input name="email" type="email" placeholder="Contact Email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all" />
            </div>
            <textarea name="message" rows={5} placeholder="Strategic Proposal Details" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
            <button type="submit" className="w-full bg-amber-500 text-black font-black py-6 rounded-2xl text-xl uppercase tracking-widest hover:bg-amber-400 transition-all">
              Launch Partnership
            </button>
          </form>
        </div>
      </section>

      <footer className="py-20 text-center opacity-30 text-[10px] uppercase tracking-[0.5em]">
        © 2026 SafiPay Global Infrastructure | Powered by Wallester & Ding
      </footer>
    </div>
  );
}