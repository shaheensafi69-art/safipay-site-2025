'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Award, BookOpen, Cpu, Gamepad2, Lightbulb,
  Code2, Server, BarChart3, Binary, User,
  Database, Layout, Languages, Briefcase, Mail, MapPin,
  Linkedin, Facebook, Instagram, MessageCircle,
  Target, Activity, Trophy, TrendingUp, PieChart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

// --- Icône TikTok Personnalisée ---
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- Composant Objet 3D Flottant ---
const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-blue-500"
  >
    {children}
  </motion.div>
);

export default function MujtabaRahmaniFullBio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  const moveX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // --- Liens Sociaux ---
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/mwlite/profile/me" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/bigshot_tradez" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1DJJUX1TS2/" },
    { icon: <TikTokIcon size={20} />, href: "https://www.tiktok.com/@chill_asf_fr" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/+93793035609" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white" dir="ltr" onMouseMove={handleMouseMove}>
      
      {/* Background FX */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- SECTION HÉRO --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-blue-500/30 p-2 bg-[#050505]">
                <Image src="/mujtaba.jpeg" alt="Mujtaba Rahmani" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="10deg">
              <TrendingUp size={30} />
            </Floating3DObject>
            
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -right-16 top-10">
                <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-2xl font-black italic tracking-widest uppercase">Co-fondateur</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white uppercase">MUJTABA <span className="text-blue-500">RAHMANI</span></h1>
            <p className="text-blue-400 font-bold tracking-[0.5em] text-xl mt-4 uppercase text-pretty">Co-fondateur de SafiPay & Spécialiste en Économie</p>
            
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 shadow-xl backdrop-blur-md"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-500 text-sm">
               <span className="flex items-center gap-2"><MapPin size={16}/> Kaboul, Afghanistan</span>
               <span className="flex items-center gap-2"><User size={16}/> 28 Juillet 2006</span>
               <span className="flex items-center gap-2 font-bold text-blue-500/50 italic underline">@bigshot_tradez</span>
            </div>
          </motion.div>
        </section>

        {/* --- À PROPOS & VISION --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-l-8 border-blue-600 pl-6 uppercase italic">La Mission du Co-fondateur</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                Je m'appelle <span className="text-white font-bold">Mujtaba Rahmani</span>, un entrepreneur visionnaire et trader professionnel dédié à la révolution du paysage financier de l'Afghanistan. Fort d'un parcours académique spécialisé en <span className="text-blue-400 underline decoration-2">Économie et Business en Ligne</span>, je dirige le développement stratégique et financier de SafiPay.
              </p>
              <div className="bg-blue-600/10 p-8 rounded-[2.5rem] italic border-l-8 border-blue-600 text-blue-100">
                "Nous fusionnons les principes économiques traditionnels avec les solutions FinTech de pointe pour autonomiser la population afghane et la connecter au marché numérique mondial."
              </div>
              <p>
                Au-delà des graphiques et des stratégies commerciales, je crois fermement en la discipline et la résilience — des qualités que je cultive quotidiennement à travers le MMA et la course à pied, afin d'être prêt pour le monde à haute pression du Forex.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- COMPÉTENCES TECHNIQUES --- */}
        <section className="py-20 bg-blue-600/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">COMPÉTENCES CLÉS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <BarChart3 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Analyse de Marché</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">Analyse technique avancée, Price Action, gestion des liquidités et stratégies Forex.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <Globe className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Économie Numérique</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">Développement stratégique d'e-business, mise à l'échelle de l'e-commerce et expansion globale.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <PieChart className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Stratégie Financière</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">Allocation d'actifs, gestion Risk-to-Reward et optimisation des systèmes FinTech.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <Gamepad2 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Tech Next-Gen</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">Infrastructures bancaires numériques, bases de la Blockchain et systèmes gaming haute performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPÉRIENCE & ÉDUCATION --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Briefcase className="text-blue-500"/> EXPÉRIENCE PROFESSIONNELLE</h2>
              <div className="space-y-8 border-l-2 border-white/10 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_#2563eb]" />
                  <h4 className="text-xl font-bold text-white">Co-fondateur</h4>
                  <p className="text-blue-400 text-sm mb-2">SafiPay Digital Bank (2024 - Présent)</p>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify">Planification stratégique du cadre financier et propulsion de la croissance du premier écosystème bancaire numérique moderne en Afghanistan.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Trader Forex Indépendant</h4>
                  <p className="text-blue-400 text-sm mb-2">Auto-entrepreneur (2021 - Présent)</p>
                  <p className="text-gray-500 text-sm leading-relaxed">Analyse des marchés de devises mondiaux et gestion précise de portefeuilles d'actifs numériques diversifiés.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><GraduationCap className="text-blue-500"/> ÉDUCATION</h2>
              <div className="space-y-8 border-l-2 border-white/10 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-600 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Bachelor en Économie & Business en Ligne</h4>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mt-1">Diplôme Spécialisé</p>
                  <p className="text-gray-500 text-sm mt-2">Étude approfondie des marchés financiers mondiaux, des stratégies de trading numérique et de la modélisation économique.</p>
                </div>
                <div className="pt-6">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Activity size={20} className="text-blue-500"/> DISCIPLINE PHYSIQUE</h3>
                   <div className="flex flex-wrap gap-4">
                     {['MMA', 'Course d\'endurance', 'Gaming High-Stakes'].map(item => (
                       <span key={item} className="px-5 py-2 bg-blue-500/5 rounded-2xl border border-blue-500/20 text-xs font-black text-blue-400 uppercase tracking-widest">{item}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RÉALISATIONS --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-12 rounded-[4rem] border border-blue-500/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={150}/></div>
               <Award className="text-blue-500 mx-auto mb-6" size={60} />
               <h2 className="text-3xl font-black mb-6 italic uppercase">Réalisations Clés</h2>
               <ul className="text-gray-300 space-y-4 text-lg text-left inline-block">
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> Co-fondation de l'Écosystème Financier Global SafiPay</li>
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> Diplômé stratégique en Économie & Marchés Numériques</li>
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> Expert Trader avec plus de 3 ans d'expérience sur le Forex</li>
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> Défenseur actif du Business en Ligne en Afghanistan</li>
               </ul>
            </div>
        </section>

        <footer className="py-20 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank" className="text-gray-600 hover:text-blue-500 transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="opacity-30 text-[10px] tracking-[0.6em] uppercase font-black">
            Mujtaba Rahmani • Co-fondateur de SafiPay & Spécialiste Éco • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}