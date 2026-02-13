'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, Star, 
  Layers, Lightbulb, TrendingUp, Award
} from 'lucide-react';

// Animation Presets
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function UltimatePartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* --- 1. HERO: THE POWER ALLIANCE --- */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent blur-3xl opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <span className="inline-block px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-8">
              Strategic Global Alliance 2026
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black mb-8 tracking-tighter leading-[0.85] italic">
              UNSTOPPABLE <br/> <span className="text-amber-500">LEGACY.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              When Safi's vision met European infrastructure, a new era of financial freedom was born. 
              We don't just partner; we rewrite the rules of the game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE GIANTS: WALLESTER & DING --- */}
      <section className="py-24 container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* Wallester Box */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="relative p-12 rounded-[4rem] bg-gradient-to-br from-gray-900/50 to-black border border-white/5 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
            <CreditCard size={150} />
          </div>
          <h3 className="text-amber-500 font-black tracking-widest text-sm mb-6 uppercase">Banking Pillar</h3>
          <h2 className="text-4xl font-black mb-6">Wallester AS</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Based in Estonia, **Wallester** is the gold standard of European Neobanking. By partnering with SafiPay, 
            they've integrated their **VISA-certified** infrastructure into our ecosystem. This partnership allows 
            us to offer real European IBANs and physical cards to a market that was previously invisible to the world. 
            Only a system as robust as Safi could pass their rigorous Tier-1 compliance.
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-bold border border-white/10">VISA PRINCIPAL MEMBER</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-bold border border-white/10">PCI-DSS LEVEL 1</span>
          </div>
        </motion.div>

        {/* Ding Box */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="relative p-12 rounded-[4rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/5 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
            <Wifi size={150} />
          </div>
          <h3 className="text-blue-500 font-black tracking-widest text-sm mb-6 uppercase">Connectivity Giant</h3>
          <h2 className="text-4xl font-black mb-6">Ding Global</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            **Ding** is the world’s leading mobile top-up platform. Our strategic alliance connects Safi TopUp 
            directly to **500+ operators** across **150+ countries**. Why did Ding choose Safi? Because our 
            transaction speed is unmatched (avg. 2.4s) and our reach into the Afghan diaspora is unparalleled. 
            We are the bridge for millions to stay connected with home.
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-xl bg-blue-500/10 text-[10px] font-bold border border-blue-500/20 text-blue-400">500+ OPERATORS</span>
            <span className="px-4 py-2 rounded-xl bg-blue-500/10 text-[10px] font-bold border border-blue-500/20 text-blue-400">INSTANT SETTLEMENT</span>
          </div>
        </motion.div>
      </section>

      {/* --- 3. FOUNDER'S VISION: SHAHEEN & THE MISSION --- */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h4 className="text-amber-500 font-bold mb-4 flex items-center gap-2">
               <Star size={16} fill="currentColor" /> THE FOUNDER'S STORY
            </h4>
            <h2 className="text-5xl font-black mb-8 leading-tight italic">
              "WE DON'T WAIT FOR OPPORTUNITY. <br/> WE BUILD THE BRIDGE."
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Behind SafiPay is a story of relentless grit. **Shaheen Safi**, driven by the challenges he saw in 
                international connectivity and banking for his community, spent years building relationships in 
                Paris, Istanbul, and Kabul.
              </p>
              <p>
                The goal was simple yet daring: To create a financial ecosystem so secure and so advanced that 
                global giants like Wallester and Ding would recognize its potential. Today, Safi stands as 
                a testament to what happens when local passion meets world-class engineering.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ rotate: 5, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} className="lg:w-1/2 relative">
             <div className="w-full h-[500px] rounded-[3rem] border border-amber-500/30 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-2xl font-black italic">SHAHEEN SAFI</p>
                  <p className="text-amber-500 text-sm font-bold tracking-[0.3em]">CHIEF EXECUTIVE & FOUNDER</p>
                </div>
                {/* Image Placeholder - Replace src with your actual image path */}
                <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                  <p className="text-gray-600 font-mono text-xs italic text-center px-10">[FOUNDER IMAGE PORTRAIT - HIGH RESOLUTION]</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. THE ROADMAP PATH: VISUAL JOURNEY --- */}
      <section className="py-32 container mx-auto px-6 relative">
        <h2 className="text-6xl font-black text-center mb-32 italic">BEYOND <span className="text-amber-500">LIMITS.</span></h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-amber-500 via-blue-500 to-amber-500 opacity-20 hidden md:block" />

          {[
            { q: "PHASE 01", t: "The Architecture", d: "Securing EU EMI licenses and API handshakes with Wallester for SafiPay core.", side: "left" },
            { q: "PHASE 02", t: "Global Pulse", d: "Integrating Ding's connectivity engine. Launching Safi TopUp across 150+ countries.", side: "right" },
            { q: "PHASE 03", t: "Mass Adoption", d: "Release of Safi Virtual VISA cards. Business panels for corporate Afghan partners.", side: "left" },
            { q: "PHASE 04", t: "AI Integration", d: "Implementing AI-driven credit scoring and physical Safi Titanium Cards for elite users.", side: "right" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`flex flex-col md:flex-row items-center mb-24 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] relative group hover:border-amber-500/50 transition-all">
                <span className="text-7xl font-black text-white/5 absolute top-4 right-6 group-hover:text-amber-500/10 transition-colors">{item.q.split(" ")[1]}</span>
                <h4 className="text-amber-500 font-black tracking-widest text-xs mb-2 uppercase">{item.q}</h4>
                <h3 className="text-2xl font-bold mb-4">{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
              <div className="w-10 h-10 bg-black border-4 border-amber-500 rounded-full z-10 hidden md:block mx-auto" />
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. PARTNERSHIP FORM: THE GATEWAY --- */}
      <section className="py-32 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-6xl font-black tracking-tighter italic">LET'S BUILD <br/> THE <span className="text-amber-500">FUTURE.</span></h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We don't accept every application. We are looking for partners who share the Safi vision: 
              Technology without borders. Finance without barriers.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10">
               <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-black">
                 <Handshake size={32} />
               </div>
               <div>
                 <p className="text-sm font-bold uppercase tracking-widest">Priority Access</p>
                 <p className="text-xs text-gray-500">Our team reviews strategic proposals within 48 hours.</p>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-[#0c0c0c] border border-white/10 p-12 rounded-[4rem] relative overflow-hidden"
          >
            <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Name / Entity</label>
                  <input name="name" type="text" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Email Address</label>
                  <input name="email" type="email" required placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Sector</label>
                <select name="sector" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all text-gray-400 appearance-none">
                  <option>Banking & Fintech</option>
                  <option>Strategic Investment</option>
                  <option>Telecommunications</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Strategic Proposal</label>
                <textarea name="message" rows={5} required placeholder="Describe your vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-amber-500 text-black font-black py-6 rounded-2xl flex items-center justify-center gap-3 text-lg uppercase tracking-widest"
              >
                Submit Proposal <ArrowRight size={20} />
              </motion.button>
            </form>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* --- 6. FOOTER FINALE --- */}
      <footer className="py-20 text-center relative">
        <div className="h-[1px] w-40 bg-amber-500/20 mx-auto mb-10" />
        <p className="text-gray-600 text-[9px] uppercase tracking-[0.6em]">
          SafiPay Global Infrastructure © 2026 | Built for the underserved.
        </p>
      </footer>
    </div>
  );
}