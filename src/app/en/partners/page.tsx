'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, 
  TrendingUp, Scale, Coins
} from 'lucide-react';

// انیمیشن‌های ساده برای جلوگیری از تداخل
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden" dir="ltr">
      
      {/* --- بخش اول: هیرو --- */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6">
              Official Partnership 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 italic italic">
              SAFI <span className="text-amber-500">SERVICES</span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl font-light">
              Superior banking infrastructure. faster, safer, and truly global.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- بخش دوم: غول‌های همکار (Wallester & Ding) --- */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
          <CreditCard className="text-amber-500 mb-6" size={40} />
          <h2 className="text-3xl font-black mb-4">Wallester AS</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Direct integration with European banking infrastructure. We provide official VISA cards and IBAN accounts under EU regulations, outperforming any regional bank in security and reach.
          </p>
        </div>
        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
          <Wifi className="text-blue-500 mb-6" size={40} />
          <h2 className="text-3xl font-black mb-4">Ding Global</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connected to 500+ operators worldwide. Safi TopUp offers instant mobile recharge and E-SIM services with zero latency, making us the leader in global connectivity.
          </p>
        </div>
      </section>

      {/* --- بخش سوم: برتری‌های ما (Why Safi?) --- */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 italic">WHY CHOOSE <span className="text-amber-500">SAFI?</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-amber-500" />, t: "Instant Access", d: "AI-KYC verification in minutes, not weeks." },
              { icon: <Coins className="text-amber-500" />, t: "Multi-Currency", d: "Spend in USD, EUR, and TRY with 0% hidden fees." },
              { icon: <Globe className="text-amber-500" />, t: "Global Visa", d: "Cards that work on Netflix, Amazon, and everywhere else." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-black border border-white/10 text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                <p className="text-gray-500 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- بخش چهارم: خدمات و کارت‌ها --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 italic text-amber-500">PREMIUM BENEFITS</h2>
            <div className="space-y-6">
              {[
                "Virtual & Physical VISA Cards",
                "European Personal IBAN Accounts",
                "Global E-SIM Activation",
                "24/7 Priority Support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-amber-500" size={20} />
                  <span className="font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-transparent p-12 rounded-[4rem] border border-amber-500/20">
             <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase">Regional Superiority</h3>
             <p className="text-gray-400 leading-relaxed">
               SafiPay provides what local banks cannot: direct access to the global financial grid. Our infrastructure is built to survive and thrive in complex markets, providing users with the tools for international commerce.
             </p>
          </div>
        </div>
      </section>

      {/* --- بخش پنجم: قوانین شراکت --- */}
      <section className="py-20 bg-amber-500/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Scale className="mx-auto text-amber-500 mb-6" size={48} />
          <h2 className="text-3xl font-black mb-10">PARTNERSHIP PROTOCOLS</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <h5 className="text-amber-500 font-bold mb-2 text-xs">COMPLIANCE</h5>
              <p className="text-gray-500 text-xs text-xs">Adherence to international AML and KYC regulations is mandatory for all strategic partners.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <h5 className="text-amber-500 font-bold mb-2 text-xs">API SYNERGY</h5>
              <p className="text-gray-500 text-xs">Real-time data exchange via secure API is required to maintain service speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- بخش ششم: رودمپ --- */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 italic uppercase">Mission Roadmap</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            { q: "Q1", t: "Licensing", d: "Finalizing EU banking handshakes." },
            { q: "Q2", t: "Expansion", d: "Ding integration for 150+ countries." },
            { q: "Q3", t: "Launch", d: "SafiPay Mobile App public release." },
            { q: "Q4", t: "Titanium", d: "Elite Physical Cards issuance." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="text-3xl font-black text-amber-500 opacity-50">{item.q}</div>
              <div className="pb-8 border-l border-white/10 pl-8">
                <h4 className="text-xl font-bold">{item.t}</h4>
                <p className="text-gray-500 text-sm">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- بخش هفتم: فرم تماس --- */}
      <section className="py-20 container mx-auto px-6" id="partner-form">
        <div className="max-w-4xl mx-auto bg-[#0c0c0c] border border-white/10 p-10 rounded-[3rem]">
          <h2 className="text-3xl font-black mb-8 italic text-center text-amber-500">STRATEGIC INQUIRY</h2>
          <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" type="text" placeholder="Entity Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-all text-sm" />
              <input name="email" type="email" placeholder="Work Email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-all text-sm" />
            </div>
            <select name="type" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 text-gray-400 text-sm">
              <option value="bank">Financial Institution</option>
              <option value="tech">Tech Provider</option>
              <option value="investor">Investor</option>
            </select>
            <textarea name="message" rows={4} placeholder="Partnership Proposal" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-all text-sm resize-none"></textarea>
            <button type="submit" className="w-full bg-amber-500 text-black font-black py-5 rounded-xl uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center gap-2">
              Send Proposal <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center opacity-30 text-[10px] uppercase tracking-[0.4em]">
        © 2026 SafiPay Global Infrastructure
      </footer>
    </div>
  );
}