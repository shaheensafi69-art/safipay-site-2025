'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, HelpCircle
} from 'lucide-react';

// Animation Settings
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function AnimatedPartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" 
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-tight">
              <span className="text-amber-500 inline-block drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">SAFI</span> ECOSYSTEM
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            Redefining financial and connectivity standards for communities underserved by global modern services.
          </motion.p>
        </div>
      </section>

      {/* --- 2. CORE FEATURES --- */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 border-y border-white/5 bg-white/[0.01]"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { title: "Access Solved", desc: "Safi bridges the international payment gap in Afghanistan using European fintech technology." },
            { title: "Tier-1 Security", desc: "Utilizing PCI-DSS protocols to guarantee the integrity of every transaction in our global network." },
            { title: "Borderless Connection", desc: "From tuition payments in Europe to mobile top-ups in Kabul; all in one ecosystem." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="space-y-4 group p-4">
              <h3 className="text-2xl font-bold text-amber-500 group-hover:translate-x-2 transition-transform">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- 3. SafiPay & Wallester --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
              Fintech Infrastructure
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">SafiPay: Cross-Border Banking</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              SafiPay is more than a wallet; it’s a full neo-banking experience powered by **Wallester AS** and the **VISA** network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-sm">Physical & Virtual VISA Issuance</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-sm">Dedicated European IBAN Accounts</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-[3rem] border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-[#0a0a0a] rounded-[2.8rem] p-10 space-y-8 relative z-10">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>ID: 2026_WALLESTER_PARTNER</span>
                  <span className="text-green-500">● LIVE_CONNECTION</span>
                </div>
                <div className="py-10 text-center border-y border-white/5">
                  <motion.h3 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-4xl font-black mb-2 tracking-widest"
                  >
                    Wallester
                  </motion.h3>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Official Strategic Partner</p>
                </div>
                <p className="text-gray-400 text-sm italic text-center">"Powered by EU-licensed banking infrastructure"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. Safi TopUp --- */}
      <section className="py-24 container mx-auto px-6 bg-blue-500/[0.02] rounded-[5rem] my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] animate-pulse" />
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest">
              Global Connectivity
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">Safi TopUp: Instant Connection</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leveraging the **Ding** network, we have built a bridge between Afghanistan and telecom operators in 500 countries.
            </p>
            <div className="space-y-4">
               {[
                 { icon: <Wifi size={20} />, t: "E-SIM Technology", d: "Virtual SIM cards in 150+ countries." },
                 { icon: <Smartphone size={20} />, t: "Local Operators", d: "Instant recharge for Roshan, Afghan Wireless, etc." }
               ].map((item, i) => (
                 <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/5 items-center">
                    <div className="text-blue-500">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.t}</h4>
                      <p className="text-gray-500 text-xs">{item.d}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2"
          >
             <div className="relative p-12 bg-[#ff4d00]/5 border border-[#ff4d00]/20 rounded-[4rem] text-center group">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-24 h-24 bg-[#ff4d00] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(255,77,0,0.3)]"
                >
                  <span className="text-white font-black text-3xl italic">d.</span>
                </motion.div>
                <h3 className="text-3xl font-black mb-4">Ding Strategic Partner</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">Global transaction speeds in under 3 seconds.</p>
                <div className="flex justify-center gap-10">
                   <div className="text-center"><div className="text-2xl font-black">500+</div><div className="text-[8px] uppercase text-gray-500 tracking-widest">Operators</div></div>
                   <div className="text-center"><div className="text-2xl font-black">150+</div><div className="text-[8px] uppercase text-gray-500 tracking-widest">Countries</div></div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 5. ROADMAP 2026 --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.h2 {...fadeInUp} className="text-4xl font-black text-center mb-20 italic">ROADMAP 2026</motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { q: "Q1", title: "Infrastructure", items: ["Licensing", "Beta Testing"] },
            { q: "Q2", title: "Initial Launch", items: ["Official Launch", "E-SIM Rollout"] },
            { q: "Q3", title: "Expansion", items: ["Ding Integration", "Business Panel"] },
            { q: "Q4", title: "Intelligence", items: ["Reward Systems", "Physical Cards"] },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10, borderColor: 'rgba(245,158,11,0.5)' }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden transition-colors"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-2 -left-2">{item.q}</div>
              <h4 className="text-xl font-bold mb-4 text-amber-500 relative z-10">{item.title}</h4>
              <ul className="space-y-2 text-xs text-gray-400 relative z-10">
                {item.items.map((li, j) => <li key={j}>• {li}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 6. STRATEGIC PARTNERSHIP FORM (THE NEW PART) --- */}
      <section className="py-24 container mx-auto px-6 relative" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-5xl font-black italic tracking-tighter leading-tight">
              Become a <span className="text-amber-500">Safi</span> Partner
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Join our mission to bridge the gap between global finance and the Afghan market. We are looking for banks, technology providers, and investors.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <ShieldCheck className="text-amber-500" />
                <div>
                  <h4 className="font-bold text-sm">Verified Security</h4>
                  <p className="text-gray-500 text-xs">High-end encryption for all data.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <Cpu className="text-amber-500" />
                <div>
                  <h4 className="font-bold text-sm">API Integration</h4>
                  <p className="text-gray-500 text-xs">Direct ecosystem connectivity.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-[#0c0c0c] border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Partnership Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm text-gray-400">
                  <option>Financial Institution</option>
                  <option>Technology Provider</option>
                  <option>Strategic Investor</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Proposal</label>
                <textarea rows={4} placeholder="Your vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm resize-none"></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-amber-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3">
                Send Proposal <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- 7. FAQs --- */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-12 italic">FAQs</h2>
        <div className="space-y-4">
          {[
            { q: "Capital Security?", a: "Insurance up to €100,000 in accordance with EU regulations." },
            { q: "How to partner?", a: "Complete the form above to receive our official Pitch Deck." }
          ].map((faq, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="font-bold text-amber-500 mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> {faq.q}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative rounded-[4rem] overflow-hidden bg-gradient-to-r from-amber-600 to-amber-800 p-12 md:p-24 text-center"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Participate?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <motion.button className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3">
                 <Mail size={24} /> Direct Contact
               </motion.button>
               <motion.button className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg">
                 Get Catalogue
               </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-gray-700 text-[10px] uppercase tracking-[0.5em]">
        © 2026 SafiPay & Safi TopUp | Strategic Partner Infrastructure
      </footer>
    </div>
  );
}