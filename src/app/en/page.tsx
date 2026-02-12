'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertCircle, CheckCircle2, Globe, Shield, Zap, 
  CreditCard, ArrowRight, BarChart3, Handshake, Briefcase 
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- Hero Section: The Vision --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase"
          >
            Global Fintech Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              Financial Liberty for Afghans
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Building the first compliant digital bridge between Afghanistan and the global economy. 
            Secure, scalable, and decentralized.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="#problems"
              className="px-10 py-5 bg-white text-black text-lg font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              Explore Ecosystem <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/partnership"
              className="px-10 py-5 border border-white/10 bg-white/5 text-white text-lg font-black rounded-2xl hover:border-amber-500/50 transition-all shadow-xl flex items-center gap-3"
            >
              <Handshake size={20} className="text-amber-500" /> Strategic Partnership
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Problems Section --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
              Institutional <span className="text-red-600">Gaps</span>
            </h2>
            <div className="w-20 h-1 bg-red-600/50 mb-8 rounded-full" />
            <p className="text-gray-500 text-xl max-w-2xl font-light">
              We identified the systemic barriers preventing a population of 40 million from 
              participating in the $500B global digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: 'SWIFT Isolation', desc: 'Complete exclusion from global interbank networks leads to hazardous informal transfers.' },
              { title: 'Currency Volatility', desc: 'No infrastructure for stable-asset holding, leading to rapid loss of family wealth.' },
              { title: 'Global KYC Gap', desc: 'Lack of digital identity frameworks prevents Afghans from using international SaaS & Tools.' },
              { title: 'Merchant Blockage', desc: 'Afghan businesses cannot scale globally due to zero international payment acceptance.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] hover:border-red-500/30 transition-all group"
              >
                <div className="w-1.5 h-12 bg-red-600/20 mb-6 group-hover:bg-red-600 transition-colors rounded-full" />
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Solutions Section: The SafiPay Revolution --- */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6">
              <Zap size={40} className="text-amber-500" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Advanced <span className="text-amber-500 italic">Core</span> Tech
            </h2>
            <p className="text-gray-500 text-xl font-light">
              Our infrastructure leverages EU-licensed banking rails to provide a localized, 
              secure experience for the Afghan market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Global IBANs', desc: 'Personal European bank accounts accessible within seconds via SafiPay.' },
              { icon: <CreditCard />, title: 'VISA Issuance', desc: 'Certified virtual and physical cards for global e-commerce and AWS/Netflix/Google.' },
              { icon: <Briefcase />, title: 'B2B Settlements', desc: 'Empowering local merchants to accept international payments via high-speed API.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all duration-500"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* New Strategic Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-6xl mx-auto bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Logo Blur Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full -mr-48 -mt-48" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                Scale the <br /><span className="text-amber-500 italic">Ecosystem</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Join our private network of institutional partners, venture capitalists, and fintech innovators 
                to redefine the Afghan financial landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/partnership"
                  className="inline-flex items-center gap-4 px-12 py-6 bg-amber-500 text-black text-xl font-black rounded-3xl hover:bg-amber-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(245,158,11,0.2)]"
                >
                  Apply for Partnership <Handshake />
                </Link>
                <Link
                  href="/pitch-deck"
                  className="inline-flex items-center gap-4 px-12 py-6 border border-white/10 bg-white/5 text-white text-xl font-black rounded-3xl hover:bg-white/10 transition-all"
                >
                  Request Pitch Deck <BarChart3 />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}