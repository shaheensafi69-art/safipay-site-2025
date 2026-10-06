'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Landmark, Star, Target, CheckCircle2,
  History, Facebook, ArrowUpRight, Briefcase, Award,
  Instagram, MessageCircle, MapPin, Building2, TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-5 bg-[#0a0a0a]/80 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.1)] text-emerald-500"
  >
    {children}
  </motion.div>
);

export default function SahelSalemBio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  const moveX = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const socialLinks = [
    { icon: <Facebook size={22} />, href: "https://www.facebook.com/share/1A6hht1gio/?mibextid=wwXIfr" },
    { icon: <Instagram size={22} />, href: "https://www.instagram.com/s4_hel1?igsh=a3k3YW8zNHRxZXUx&utm_source=qr" },
    { icon: <MessageCircle size={22} />, href: "https://wa.me/+93700582033" },
  ];

  return (
    <div className="min-h-screen bg-[#000] text-white pb-32 font-sans overflow-x-hidden selection:bg-emerald-500/30" onMouseMove={handleMouseMove}>
      
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section ref={containerRef} className="relative pt-40 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
              <div className="relative h-full w-full rounded-[5rem] overflow-hidden border border-emerald-500/20 p-3 bg-[#050505]">
                <Image src="/sahel.jpeg" alt="Sahel Salem" fill className="object-cover rounded-[4.5rem] grayscale hover:grayscale-0 transition-all duration-700" priority />
              </div>
            </div>

            <Floating3DObject x={moveX} y={moveY} translateZ={150} rotate="-15deg">
              <Star size={35} fill="currentColor" />
            </Floating3DObject>
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
                <div className="bg-emerald-500 text-black px-5 py-3 rounded-3xl shadow-2xl font-black text-lg">CEO</div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-6">
              SAHEL <span className="text-transparent stroke-emerald-500 stroke-2" style={{ WebkitTextStroke: '2px #10b981' }}>SALEM</span>
            </h1>
            <p className="text-emerald-500 font-bold tracking-[0.3em] text-lg md:text-2xl uppercase mt-4">Chief Executive Officer & European Relations</p>
            
            {/* Quick Metadata Chips */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-gray-400 text-sm">
               <span className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-2xl border border-white/5">
                 <MapPin size={16} className="text-emerald-400" /> Global Headquarters • Hub
               </span>
               <span className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-2xl border border-white/5">
                 <Building2 size={16} className="text-emerald-400" /> Strategic Leadership & European Banking
               </span>
               <span className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-2xl border border-white/5">
                 <GraduationCap size={16} className="text-emerald-400" /> BBA Student
               </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-10">
              {socialLinks.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="group relative w-16 h-16 flex items-center justify-center rounded-3xl bg-white/[0.03] border border-white/10 text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-500 backdrop-blur-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- STRATEGIC LEADERSHIP & VISION --- */}
        <section className="py-20 container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            <div className="lg:col-span-7">
              <div className="p-10 md:p-14 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <History className="text-emerald-500" size={32} />
                  <h3 className="text-3xl font-black italic uppercase">Executive Leadership & Strategic Vision</h3>
                </div>
                <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-[2.2] text-justify font-light">
                  <p>
                    <span className="text-white font-bold">Sahel Salem</span>, born on <span className="text-emerald-400 font-semibold">March 19, 2007</span>, serves as the Chief Executive Officer (CEO) and Director of European Banking Relations at SafiPay. He stands as a fundamental pillar and principal architect of SafiPay’s cross-border expansion strategy.
                  </p>
                  <p>
                    Sahel’s primary executive focus lies in bridging direct institutional banking channels across the European Union, integrating dedicated European IBANs, anchoring seamless SEPA Instant clearing rails, and establishing rock-solid compliance foundations. Combining disciplined business administration principles with keen insights into digital financial dynamics, he empowers global individuals and international businesses to bypass traditional monetary isolation.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-6 p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 italic text-emerald-100/90 text-lg">
                   "Our foundational mission at SafiPay is dismantling geographical limitations in financial access, delivering secure, modern, and internationally compliant banking rails so that anyone worldwide can freely participate in global commerce."
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Education Section */}
              <div className="p-10 rounded-[3.5rem] bg-gradient-to-br from-emerald-600/20 via-emerald-950/10 to-transparent border border-emerald-500/20 shadow-2xl">
                <GraduationCap className="text-emerald-500 mb-6" size={44} />
                <h4 className="text-2xl font-black italic uppercase mb-2">Education</h4>
                <p className="text-white text-2xl font-black mb-2">BBA Student</p>
                <p className="text-emerald-400 font-mono tracking-widest uppercase text-xs mb-4">Business Administration</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rigorous academic focus on strategic business management, international commerce, financial analysis, and the architectural scaling of next-generation digital fintech ecosystems.
                </p>
              </div>

              {/* Direct Communication */}
              <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group cursor-pointer transition-all hover:bg-white/[0.04]">
                 <div className="text-left">
                    <p className="text-[10px] uppercase font-black text-gray-500 mb-1">Direct Inquiries & Executive Office</p>
                    <p className="text-xl font-bold italic">Official WhatsApp</p>
                    <p className="text-xs text-gray-500 mt-1" dir="ltr">+93 70 058 2033</p>
                 </div>
                 <Link href="https://wa.me/+93700582033" target="_blank" className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={22} />
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE COMPETENCIES & EXECUTIVE STACK --- */}
        <section className="py-20 bg-emerald-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-16 italic uppercase">Core Competencies & Executive Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-left">
                <TrendingUp className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Executive Leadership & Strategy</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Macro organizational steering, corporate scaling, fintech market expansion, and long-range operational strategy.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-left">
                <Landmark className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">European Banking & SEPA</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Integration with SEPA Instant rails, issuance of dedicated IBAN accounts, and Euro liquidity clearing management.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-left">
                <ShieldCheck className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Fintech Compliance & AML</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Full alignment with EU regulatory mandates, robust Anti-Money Laundering (AML) standards, and KYC audit trails.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-left">
                <Globe className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Global Strategic Partnerships</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">High-stakes negotiations with premier international liquidity providers, card issuers (Visa/Mastercard), and banking allies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROFESSIONAL ROLES & EXPERIENCE --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic uppercase"><Briefcase className="text-emerald-500"/> Executive Roles & Experience</h2>
              <div className="space-y-8 border-l-2 border-white/10 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
                  <h4 className="text-xl font-bold text-white">Chief Executive Officer & EU Banking Director (CEO)</h4>
                  <p className="text-emerald-400 text-sm mb-2">SafiPay Ecosystem (2024 - Present)</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Directing executive operations, orchestrating relationships with European financial institutions, and overseeing the rollout of international IBAN accounts for global users.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Cross-Border Payment Rails Strategist</h4>
                  <p className="text-emerald-400 text-sm mb-2">International Financial Channels (2023 - Present)</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Formulating optimized settlement routes, mitigating cross-border currency exchange frictions, and deploying accelerated financial delivery protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic uppercase"><Target className="text-emerald-500"/> Strategic Pillars at SafiPay</h2>
              <div className="space-y-8 border-l-2 border-white/10 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-emerald-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">European Banking Standardization</h4>
                  <p className="text-emerald-400 text-sm">Direct connection with SEPA infrastructure and Euro settlement networks</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Eliminating unnecessary financial intermediaries to guarantee lightning speed and fee transparency for users.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Legal Rigor & Absolute Transparency</h4>
                  <p className="text-emerald-400 text-sm italic">Adherence to international tax mandates and supervisory directives</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Deploying strict verification protocols to safeguard institutional trust, customer deposits, and transactional integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- KEY ACHIEVEMENTS --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
            <div className="bg-gradient-to-br from-emerald-600/20 via-emerald-950/10 to-transparent p-12 rounded-[4rem] border border-emerald-500/20 relative overflow-hidden text-left">
                <Award className="text-emerald-500 mx-auto mb-6" size={60} />
                <h2 className="text-3xl font-black mb-8 italic uppercase text-center">Key Achievements & Milestones</h2>
                <ul className="text-gray-300 space-y-5 text-lg inline-block w-full">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                    <span>Established streamlined access to dedicated European IBAN accounts with instant deposit and payout capabilities.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                    <span>Architected strategic integration between the SafiPay ecosystem and the SEPA Instant clearing network.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                    <span>Spearheaded negotiations with international issuing authorities for branded virtual and physical Visa/Mastercard cards.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                    <span>Implemented institutional Anti-Money Laundering (AML) safeguards aligned with global regulatory bodies.</span>
                  </li>
                </ul>
            </div>
        </section>

        {/* --- GLOBAL STRATEGY PILLARS --- */}
        <section className="py-24 bg-emerald-500/[0.02]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: <Globe size={40} />, title: "European Expansion", desc: "Leading SafiPay’s strategic footprint across key EU banking corridors to facilitate borderless access." },
                { icon: <Landmark size={40} />, title: "IBAN Security", desc: "Supervising SEPA account infrastructure for international clients with state-of-the-art protections." },
                { icon: <ShieldCheck size={40} />, title: "Global Compliance", desc: "Guaranteeing 100% adherence to international banking mandates, AML frameworks, and asset protections." }
              ].map((pill, i) => (
                <div key={i} className="p-12 rounded-[3.5rem] bg-[#080808] border border-white/5 group hover:border-emerald-500/40 transition-all duration-700 text-left">
                  <div className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform">{pill.icon}</div>
                  <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">{pill.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{pill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
          <p className="text-gray-600 text-[10px] uppercase font-black tracking-[0.5em] mb-8 italic">
            SAHEL SALEM • CEO & SAFIPAY INTERNATIONAL LEADER • 2026
          </p>
          <div className="flex justify-center gap-8">
             {socialLinks.map((social, i) => (
               <Link key={i} href={social.href} target="_blank" className="text-gray-500 hover:text-emerald-500 transition-colors">
                  {social.icon}
               </Link>
             ))}
          </div>
        </footer>
      </div>
    </div>
  );
}