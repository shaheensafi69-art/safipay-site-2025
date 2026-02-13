'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, Star, 
  Layers, Lightbulb, TrendingUp, Award, Coins, Scale
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ProfessionalPartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* --- 1. HERO: THE FINANCIAL REVOLUTION --- */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent blur-3xl opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <span className="inline-block px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              Next-Gen Banking Infrastructure
            </span>
            <h1 className="text-6xl md:text-[8rem] font-black mb-8 tracking-tighter leading-[0.85] italic">
              LIMITLESS <br/> <span className="text-amber-500">SERVICES.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              Experience a banking ecosystem that defies borders. Faster than local banks, 
              more secure than traditional systems, and built for the global Afghan community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE GIANTS: WALLESTER & DING (Strategic Core) --- */}
      <section className="py-24 container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[4rem] bg-gradient-to-br from-gray-900/50 to-black border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><CreditCard size={120} /></div>
          <h2 className="text-3xl font-black mb-6">Wallester <span className="text-amber-500">Tier-1</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Our backbone is powered by Wallester AS (Estonia). This partnership provides SafiPay users with 
            official European IBANs and VISA cards, ensuring that your funds are held under strict EU regulations. 
            No local bank in the region can match this level of international integration.
          </p>
          <div className="flex gap-2 font-mono text-[9px] text-amber-500/70 uppercase">
            <span>● VISA PRINCIPAL</span> <span>● EU REGULATED</span> <span>● PCI-DSS</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[4rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Wifi size={120} /></div>
          <h2 className="text-3xl font-black mb-6">Ding <span className="text-blue-500">Connectivity</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Through Ding, Safi TopUp connects to 500+ global operators. We are the exclusive bridge 
            offering instant recharge and E-SIM services for Afghanistan with 0% delay. 
            While others wait for manual processing, our Ding-integrated engine settles in seconds.
          </p>
          <div className="flex gap-2 font-mono text-[9px] text-blue-500/70 uppercase">
            <span>● 500+ OPERATORS</span> <span>● 150 COUNTRIES</span> <span>● 2.4S LATENCY</span>
          </div>
        </motion.div>
      </section>

      {/* --- 3. WHY SAFI? (The Advantage over Regional Banks) --- */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl font-black italic mb-6">WHY <span className="text-amber-500">SAFI</span> OVER OTHERS?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We analyzed the regional banking gaps to build a superior experience.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="text-amber-500" />, 
                title: "Instant Verification", 
                desc: "Forget weeks of waiting. Our AI-driven KYC verifies your identity in minutes, giving you immediate access to global banking." 
              },
              { 
                icon: <Coins className="text-amber-500" />, 
                title: "Multi-Currency Edge", 
                desc: "Hold, exchange, and spend in USD, EUR, TRY, and AFN with real-time mid-market rates. No hidden conversion fees." 
              },
              { 
                icon: <ShieldCheck className="text-amber-500" />, 
                title: "Global Card Access", 
                desc: "While local cards fail on international sites (Netflix, Amazon, Google), Safi VISA cards work everywhere, globally." 
              }
            ].map((feature, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-10 rounded-[3rem] bg-black border border-white/5 shadow-xl">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES CATALOG --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-5xl font-black italic leading-tight mb-6">EXCLUSIVE <br/> <span className="text-amber-500">BENEFITS.</span></h2>
            <p className="text-gray-400 font-light mb-8">Creating an account unlocks a world of financial tools designed for the modern user.</p>
            <ul className="space-y-4">
              {["No Monthly Fees", "Instant P2P Transfers", "Biometric Security", "24/7 VIP Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold">
                  <CheckCircle2 size={18} className="text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5">
              <CreditCard className="text-amber-500 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Safi Virtual VISA</h4>
              <p className="text-gray-500 text-sm">Instant issuance. Perfect for subscriptions, ads, and online shopping. Integrated with Apple/Google Pay.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5">
              <Globe className="text-amber-500 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">European IBAN</h4>
              <p className="text-gray-500 text-sm">Receive salaries, freelance payments, and transfers from anywhere in SEPA directly to your Safi account.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5">
              <Wifi className="text-amber-500 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">E-SIM 5G</h4>
              <p className="text-gray-500 text-sm">Travel without roaming fees. Activate data plans in 150+ countries directly from the Safi app.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5">
              <TrendingUp className="text-amber-500 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Wealth Tools</h4>
              <p className="text-gray-500 text-sm">Advanced analytics to track your spending, savings goals, and currency fluctuations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. PARTNERSHIP COMPLIANCE & RULES --- */}
      <section className="py-32 bg-amber-500/5 border-y border-amber-500/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Scale className="mx-auto text-amber-500 mb-8" size={60} />
          <h2 className="text-4xl font-black mb-10 italic">PARTNERSHIP PROTOCOLS</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="space-y-4">
              <h4 className="font-black text-amber-500 uppercase text-xs">01. Compliance First</h4>
              <p className="text-gray-400 text-sm">All partners must adhere to AML (Anti-Money Laundering) and KYC standards. We maintain a zero-tolerance policy for illicit activities.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-amber-500 uppercase text-xs">02. Technical Synergy</h4>
              <p className="text-gray-400 text-sm">Partners must support API integration for real-time data flow to ensure the Safi "Instant" promise is kept.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-amber-500 uppercase text-xs">03. Transparency</h4>
              <p className="text-gray-400 text-sm">We provide full transaction auditing for our strategic partners to maintain the highest trust levels.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-amber-500 uppercase text-xs">04. Mutual Growth</h4>
              <p className="text-gray-400 text-sm">Our partnership is based on a revenue-sharing and ecosystem-expansion model that rewards scalability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. ROADMAP 2026: VISUAL PATH --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-6xl font-black text-center mb-32 italic uppercase tracking-tighter">THE <span className="text-amber-500">MISSION</span> LOG</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-amber-500/20 hidden md:block" />
          {[
            { q: "Q1", t: "Licensing", d: "Finalizing EU EMI licenses and API handshakes with Wallester core.", side: "left" },
            { q: "Q2", t: "Connectivity", d: "Integration of Ding's engine for 500+ operators and E-SIM rollout.", side: "right" },
            { q: "Q3", t: "The App", d: "Official public launch of SafiPay Mobile on iOS and Android.", side: "left" },
            { q: "Q4", t: "Titanium", d: "Launch of Physical Safi Cards and Merchant Business Panel.", side: "right" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeInUp} className={`flex flex-col md:flex-row items-center mb-24 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] group hover:border-amber-500/50 transition-all">
                <span className="text-amber-500 font-black text-xs mb-2 block">{item.q} — 2026</span>
                <h3 className="text-2xl font-bold mb-4">{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
              <div className="w-4 h-4 bg-amber-500 rounded-full z-10 hidden md:block mx-auto shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 7. PARTNERSHIP FORM --- */}
      <section className="py-32 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-6xl font-black tracking-tighter italic">START YOUR <br/> <span className="text-amber-500">LEGACY.</span></h2>
            <p className="text-gray-400 text-lg font-light">Fill out the strategic inquiry form to join our regulated ecosystem.</p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:col-span-7 bg-[#0c0c0c] border border-white/10 p-12 rounded-[4rem]">
            <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Name / Entity</label>
                  <input name="name" type="text" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Email</label>
                  <input name="email" type="email" required placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Partnership Type</label>
                <select name="type" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all text-gray-400 appearance-none">
                  <option>Financial Institution</option>
                  <option>Technology Provider</option>
                  <option>Strategic Investor</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Proposal Details</label>
                <textarea name="message" rows={5} required placeholder="Your strategic vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} type="submit" className="w-full bg-amber-500 text-black font-black py-6 rounded-2xl flex items-center justify-center gap-3 text-lg uppercase tracking-widest">
                Submit Inquiry <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 text-center">
        <p className="text-gray-700 text-[10px] uppercase tracking-[0.5em]">© 2026 SafiPay Global | European Regulated Infrastructure</p>
      </footer>
    </div>
  );
}