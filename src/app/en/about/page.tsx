'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageEN() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'en';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Redefining Afghanistan's Financial Paradigm
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Breaking Financial <br /> Boundaries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay is more than an app; it is a revolutionary infrastructure designed to democratize access to global financial systems for every Afghan citizen, worldwide.
          </motion.p>
        </div>
      </section>

      {/* --- Founders Section --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* Shaheen Safi - Founder & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Shaheen Safi - Founder & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block text-white font-black italic tracking-widest text-lg uppercase">
                CEO / FOUNDER
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Leadership & Strategy
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">Shaheen Safi <span className="text-gray-600 text-3xl font-light block mt-2 tracking-normal">Founder & Chief Executive Officer</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Shaheen Safi (born 2003) is a FinTech strategist and the lead architect behind the SafiPay ecosystem. Driven by a vision to end Afghanistan's financial isolation, he leads the project’s macro strategy and oversees international engineering partnerships with global banking leaders.
                </p>
                <p>
                  With expertise in integrating cloud-native financial technologies and modern European banking standards, Shaheen has empowered SafiPay to redefine security as Afghanistan's first true Neo-bank. His mission is clear: "Restoring prestige and global credit to the Afghan financial identity."
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Strategic Management</h4>
                  <p className="text-sm text-gray-500">Business modeling and global banking partnerships.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Financial Crisis Solving</h4>
                  <p className="text-sm text-gray-500">Designing solutions for global banking accessibility.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Engineering & Security
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">Mujtaba Rahmani <span className="text-gray-600 text-3xl font-light block mt-2 tracking-normal">Co-Founder & Chief Technology Officer</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Mujtaba Rahmani (born 2006) is the CTO and Cybersecurity architect of SafiPay. He is the technical backbone of the platform, responsible for ensuring the absolute invulnerability and scalability of real-time transaction systems.
                </p>
                <p>
                  Leveraging his genius in scalable software development and deep understanding of payment infrastructures, Mujtaba has engineered a system that rivals the speed and precision of top-tier global banks. His mission is to build a "Digital Fortress" where users' assets are protected under all conditions.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">System Architecture</h4>
                  <p className="text-sm text-gray-500">Backend development & financial microservices.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Cybersecurity</h4>
                  <p className="text-sm text-gray-500">Advanced encryption and data protection protocols.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani - CTO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / ARCHITECT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Vision & Values --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Absolute Security", desc: "Utilizing layered encryption protocols to guarantee transaction integrity.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "Global Connectivity", desc: "Opening the doors of the digital economy to Afghanistan without traditional intermediaries.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "Relentless Innovation", desc: "Continuously evolving neo-banking capabilities to meet the needs of the next generation.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all text-left"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">Ready for Strategic <br /> Partnership?</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                At SafiPay, we are seeking financial elites and international strategic partners to reshape the future.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                Apply for Partnership <ArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}