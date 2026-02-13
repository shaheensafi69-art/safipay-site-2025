'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Globe, ShieldCheck, ArrowRight, CreditCard, Zap, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, TrendingUp, Scale, Coins, 
  Database, Lock, BarChart, Server, Briefcase, ChevronRight
} from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function MegaPartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- 1. HERO SECTION (High Impact) --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.span variants={itemVariants} className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.5em] mb-10">
              Global Financial Alliance 2026
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-7xl md:text-[11rem] font-black leading-[0.8] mb-12 italic tracking-tighter">
              BEYOND <br/> <span className="text-amber-500 text-glow">BANKING.</span>
            </h1>
            <motion.p variants={itemVariants} className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-400 font-light leading-relaxed">
              Safi Ecosystem is the definitive bridge between European fintech excellence 
              and the emerging markets of Central Asia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MARKET ANALYTICS (Added Depth) --- */}
      <section className="py-24 container mx-auto px-6 border-b border-white/5">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Market Reach", val: "40M+", icon: <Users size={24}/> },
            { label: "Global Operators", val: "500+", icon: <Smartphone size={24}/> },
            { label: "Settlement Speed", val: "2.4s", icon: <Zap size={24}/> },
            { label: "Compliance Score", val: "99.9%", icon: <ShieldCheck size={24}/> },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="space-y-4">
              <div className="text-amber-500 flex justify-center opacity-50">/* ICON HERE */</div>
              <h3 className="text-5xl font-black">{stat.val}</h3>
              <p className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. DEEP DIVE: WALLESTER (Banking Pillar) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="lg:w-1/2 space-y-8">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">Pillar One: Institutional Banking</h3>
            <h2 className="text-6xl font-black italic tracking-tighter">WALLESTER <span className="text-gray-600">AS.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Through our white-label partnership with **Wallester AS (Estonia)**, SafiPay operates on a 
              VISA-certified infrastructure. This is not a simple integration; it's a full-stack financial 
              engine that allows our users to bypass traditional regional banking delays.
            </p>
            <div className="space-y-4">
               {[
                 "Direct VISA Principal Membership",
                 "Real-time Card Issuance (Virtual & Physical)",
                 "Fraud Monitoring & 3D Secure 2.0",
                 "EU-Regulated Asset Protection"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-bold text-gray-300">{text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="h-64 bg-white/5 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center p-8 text-center hover:bg-amber-500/10 transition-colors">
                <Lock className="text-amber-500 mb-4" />
                <h4 className="font-bold text-sm">PCI-DSS</h4>
                <p className="text-[10px] text-gray-500 mt-2">Level 1 Security Standard</p>
             </div>
             <div className="h-64 mt-12 bg-white/5 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center p-8 text-center hover:bg-amber-500/10 transition-colors">
                <Server className="text-amber-500 mb-4" />
                <h4 className="font-bold text-sm">REST API</h4>
                <p className="text-[10px] text-gray-500 mt-2">Ultra-Low Latency Banking</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. DEEP DIVE: DING (Connectivity Pillar) --- */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="lg:w-1/2 space-y-8 text-right lg:text-left">
              <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">Pillar Two: Global Connectivity</h3>
              <h2 className="text-6xl font-black italic tracking-tighter">DING <span className="text-gray-600">NETWORK.</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Our alliance with **Ding Global** ensures that no Afghan remains disconnected. By plugging into 
                the world's largest top-up platform, Safi TopUp facilitates instant value transfers to over 500 
                mobile operators globally, including exclusive routes for Roshan and AWCC.
              </p>
              <div className="flex flex-wrap gap-4 justify-end lg:justify-start">
                <span className="px-6 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">500+ OPERATORS</span>
                <span className="px-6 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">150+ COUNTRIES</span>
              </div>
            </motion.div>
            <div className="lg:w-1/2 w-full h-[400px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-[4rem] border border-blue-500/20 flex items-center justify-center overflow-hidden group">
               <Wifi size={120} className="text-blue-500/30 group-hover:scale-125 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. THE SERVICE GRID (Detailed Catalogue) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black italic mb-6">SERVICES <span className="text-amber-500">PORTFOLIO.</span></h2>
          <p className="text-gray-500">Comprehensive financial tools for retail and business partners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Virtual VISA", d: "Instant issuance for digital ads (FB, Google), Netflix, and global shopping.", icon: <CreditCard className="text-amber-500"/> },
            { t: "Personal IBAN", d: "European IBANs for receiving EUR/USD payments via SEPA and SWIFT.", icon: <Globe className="text-amber-500"/> },
            { t: "Crypto Bridge", d: "Seamlessly convert digital assets to fiat currency on your Safi card.", icon: <Coins className="text-amber-500"/> },
            { t: "Travel E-SIM", d: "Data roaming plans for 150+ countries. No physical SIM required.", icon: <Smartphone className="text-amber-500"/> },
            { t: "Business Panel", d: "Mass-payout solutions for Afghan businesses paying global suppliers.", icon: <Briefcase className="text-amber-500"/> },
            { t: "Vault Storage", d: "High-security digital vaults for asset protection with biometric locks.", icon: <Lock className="text-amber-500"/> },
          ].map((srv, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 group transition-all hover:bg-amber-500/5">
              <div className="mb-8">{srv.icon}</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-amber-500 transition-colors">{srv.t}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{srv.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. REGIONAL SUPERIORITY (Comparison) --- */}
      <section className="py-32 bg-amber-500/5 border-y border-amber-500/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-20 italic">TRADITIONAL BANKS vs <span className="text-amber-500">SAFI</span></h2>
          <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-black">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="p-8 font-black uppercase tracking-widest">Feature</th>
                  <th className="p-8 font-black uppercase tracking-widest text-gray-500">Regional Banks</th>
                  <th className="p-8 font-black uppercase tracking-widest text-amber-500 italic">Safi Ecosystem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { f: "Account Opening", r: "7-14 Days", s: "Instant (AI-KYC)" },
                  { f: "International Cards", r: "Highly Restricted", s: "Full VISA Access" },
                  { f: "Transfer Speed", r: "3-5 Working Days", s: "Near-Instant" },
                  { f: "App Technology", r: "Legacy System", s: "Modern Cloud Native" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-bold border-r border-white/5">{row.f}</td>
                    <td className="p-8 text-gray-500">{row.r}</td>
                    <td className="p-8 text-amber-500 font-black italic">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 7. ROADMAP VISUAL PATH --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-6xl font-black text-center mb-32 italic">THE MISSION <span className="text-amber-500">PATH.</span></h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-amber-500 via-transparent to-transparent hidden md:block" />
          {[
            { q: "PHASE 01", t: "Integration & Licensing", d: "Securing EMI protocols and finalizing Wallester API handshakes." },
            { q: "PHASE 02", t: "Safi TopUp Expansion", d: "Full Ding network rollout and E-SIM beta testing." },
            { q: "PHASE 03", t: "Public Ecosystem Launch", d: "SafiPay iOS/Android release for the global community." },
            { q: "PHASE 04", t: "The Platinum Era", d: "Launch of Physical Titanium Cards and AI Financial Advisory." },
          ].map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`flex flex-col md:flex-row items-center mb-20 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:border-amber-500/30 transition-all">
                <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.3em]">{step.q}</span>
                <h3 className="text-3xl font-black mb-4 italic">{step.t}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.d}</p>
              </div>
              <div className="w-6 h-6 bg-amber-500 rounded-full z-10 hidden md:block mx-auto shadow-[0_0_30px_rgba(245,158,11,0.6)]" />
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 8. PARTNER INQUIRY FORM (Connected) --- */}
      <section className="py-32 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-10 sticky top-32 h-fit">
            <h2 className="text-7xl font-black italic tracking-tighter leading-none">JOIN THE <br/> <span className="text-amber-500">POWER.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed italic">
              "We don't build features. We build the future of financial sovereignty."
            </p>
            <div className="space-y-6 pt-10">
              <div className="flex items-center gap-4 text-sm font-bold"><CheckCircle2 className="text-amber-500" /> Guaranteed Security</div>
              <div className="flex items-center gap-4 text-sm font-bold"><CheckCircle2 className="text-amber-500" /> Global Scalability</div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#0c0c0c] border border-white/10 p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
            <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-2">Full Entity Name</label>
                  <input name="entity" type="text" required placeholder="Organization" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-2">Official Email</label>
                  <input name="email" type="email" required placeholder="name@domain.com" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-2">Partnership Nature</label>
                <select name="type" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400 font-bold appearance-none">
                  <option>Banking / Fintech Provider</option>
                  <option>Institutional Investor</option>
                  <option>Global Telecom Partner</option>
                  <option>Merchants / Enterprise</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-2">Strategic Proposal</label>
                <textarea name="proposal" rows={6} required placeholder="How can we grow together?" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none font-bold"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-[2rem] text-xl uppercase tracking-widest hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(245,158,11,0.2)]">
                Submit Strategy <ArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-10 mb-10 opacity-30 italic font-black text-xs uppercase tracking-widest">
           <span>VISA Certified</span>
           <span>Ding Official Partner</span>
           <span>PCI-DSS Compliant</span>
        </div>
        <p className="text-gray-700 text-[10px] uppercase tracking-[0.6em]">© 2026 SafiPay & Safi TopUp Ecosystem | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Simple Users Icon fallback
function Users({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M17 11a4 4 0 1 0-5-3.33"/>
    </svg>
  );
}