'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Award, BookOpen, Cpu, Gamepad2, Lightbulb,
  Code2, Server, BarChart3, Binary, User,
  Database, Layout, Languages, Briefcase, Mail, MapPin,
  Linkedin, Facebook, Instagram, MessageCircle, PenTool
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

// --- Custom TikTok Icon (Optional, kept for structure) ---
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- 3D Floating Objects Component ---
const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-pink-500"
  >
    {children}
  </motion.div>
);

export default function ShirinGolAhmadiBio() {
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

  // Social Links
  const mySocials = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shirin-gol-ahmadi-842b40344?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { icon: <Mail size={20} />, href: "mailto:shirin@safipay.net" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-black" dir="ltr" onMouseMove={handleMouseMove}>
      
      {/* Background FX - Changed to feminine colors (Pink/Purple) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-pink-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-pink-500/30 p-2 bg-[#050505]">
                <Image src="/shirin.jpeg" alt="Shirin Gol Ahmadi" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            {/* Floating 3D Icons */}
            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="10deg">
              <Briefcase size={30} />
            </Floating3DObject>
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -right-16 top-10">
                <div className="bg-pink-500 text-white p-4 rounded-3xl shadow-2xl font-black">MANAGERIN</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">SHIRIN <span className="text-pink-500">GOL AHMADI</span></h1>
            <p className="text-pink-500 font-bold tracking-[0.3em] text-lg mt-4 uppercase">SafiPay-Managerin & Full-Stack-Entwicklerin</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              {mySocials.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 shadow-xl backdrop-blur-md"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-500 text-sm">
               <span className="flex items-center gap-2"><MapPin size={16}/> Islamabad, Pakistan</span>
               <span className="flex items-center gap-2"><User size={16}/> Geboren am: 16. Dezember 2004</span>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT ME --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-l-8 border-pink-500 pl-6">Über mich</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                Ich bin Shirin Gol Ahmadi, eine multidisziplinäre Fachkraft und Managerin bei SafiPay. Geboren am 16. Dezember 2004, wurde ich stets von meiner Leidenschaft für Technologie, Wirtschaft und kreative Problemlösungen angetrieben. Meine vielfältigen Fähigkeiten bilden die Brücke zwischen technischer Umsetzung und Geschäftsstrategie.
              </p>
              <p>
                Ich bin Absolventin der Wirtschaftswissenschaften an der <span className="text-white font-bold underline decoration-pink-500">National University of Sciences & Technology (NUST)</span> in Islamabad, Pakistan. Neben meinem akademischen Hintergrund in Wirtschaftswissenschaften bin ich als Full-Stack-Entwicklerin, KI-Enthusiastin und Grafikdesignerin tief in die Tech-Welt eingetaucht.
              </p>
              <div className="bg-pink-500/10 p-8 rounded-[2.5rem] italic border-l-8 border-pink-500 text-pink-100">
                "Mein ultimatives Ziel ist es, Wirtschaftsstrategie, modernste Künstliche Intelligenz und nahtloses Design zu kombinieren, um SafiPay zu einer führenden Kraft im globalen digitalen Finanz-Ökosystem zu machen."
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SKILLS GRID --- */}
        <section className="py-20 bg-pink-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">Berufliche Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <Briefcase className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Management & Wirtschaft</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Geschäftsstrategie, Betriebsmanagement, Wirtschaftsanalyse, Teamführung, Agile Methoden</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <Code2 className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Full-Stack-Entwicklung</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">React.js, Next.js, Node.js, JavaScript, TypeScript, Python, HTML/CSS, Tailwind, Datenbanken</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <PenTool className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Grafikdesign</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">UI/UX-Design, Figma, Adobe Photoshop, Illustrator, Markenidentität, Visuelle Kommunikation</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <Cpu className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Künstliche Intelligenz</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Prompt-Engineering, KI-Integration, Machine-Learning-Konzepte, Workflow-Automatisierung</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Briefcase className="text-pink-500"/> Berufserfahrung</h2>
              <div className="space-y-8 border-l-2 border-white/10 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-pink-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Managerin</h4>
                  <p className="text-pink-500 text-sm mb-2">SafiPay Ökosystem (Aktuell)</p>
                  <p className="text-gray-500 text-sm">Leitung des operativen Managements, Überwachung der Teamkoordination und Integration von Technologielösungen in die Geschäftsstrategien für die SafiPay-Plattform.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Full-Stack-Entwicklerin & Designerin</h4>
                  <p className="text-pink-500 text-sm mb-2">Freelance & private Projekte</p>
                  <p className="text-gray-500 text-sm">End-to-End-Entwicklung von Webanwendungen und Erstellung ansprechender visueller Markenidentitäten sowie UI/UX-Designs.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><GraduationCap className="text-pink-500"/> Bildung</h2>
              <div className="space-y-8 border-l-2 border-white/10 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-pink-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">National University of Sciences & Technology (NUST)</h4>
                  <p className="text-pink-500 text-sm">Islamabad, Pakistan</p>
                  <p className="text-gray-500 text-sm mt-1">Bachelor in Wirtschaftswissenschaften. Abschluss mit einem starken Fundament in Wirtschaftsstrategie und Finanzmanagement.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Tech- & Design-Zertifizierungen</h4>
                  <p className="text-pink-500 text-sm italic">Fortgeschrittene Studien in KI, Full-Stack-Entwicklung und Grafikdesign.</p>
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Languages size={20} className="text-pink-500"/> Sprachkenntnisse</h3>
                <div className="flex flex-wrap gap-4">
                  {['Englisch', 'Dari', 'Paschtu', 'Urdu'].map(lang => (
                    <span key={lang} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm font-bold">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
           <div className="bg-gradient-to-br from-pink-500/20 to-transparent p-12 rounded-[4rem] border border-pink-500/20">
              <Lightbulb className="text-pink-500 mx-auto mb-6" size={60} />
              <h2 className="text-3xl font-black mb-6">Kernkompetenzen</h2>
              <ul className="text-gray-300 space-y-4 text-lg text-left inline-block">
                <li>• Expertise in der Verknüpfung von **Wirtschaft** mit **digitaler Technologie**</li>
                <li>• Beherrschung **moderner KI-Tools** und des Prompt-Engineerings</li>
                <li>• **Führungskompetenz** innerhalb des SafiPay-Ökosystems</li>
                <li>• Kreative Fähigkeit, komplette Webplattformen zu entwerfen und zu programmieren</li>
              </ul>
           </div>
        </section>

        <footer className="py-20 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {mySocials.map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank" className="text-gray-600 hover:text-pink-500 transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="opacity-30 text-xs tracking-[0.5em] uppercase">
            Shirin Gol Ahmadi • Technisches & Management-Portfolio • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}