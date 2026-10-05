'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Code2, Terminal, Server, Cpu, Layers, 
  GitBranch, ShieldCheck, Zap, Globe, 
  Laptop, Database, Binary, User, Mail, 
  MapPin, Linkedin, Github, ExternalLink,
  CheckCircle2, Flame, Workflow, MonitorDot
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-cyan-400"
  >
    {children}
  </motion.div>
);

export default function MobinHassaniBioTR() {
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

  const mySocials = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:mobin@safipay.net", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black" dir="ltr" onMouseMove={handleMouseMove}>
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-900/15 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10">
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-cyan-500/30 blur-[100px] rounded-full opacity-60" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-cyan-500/40 p-2 bg-[#050505] shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <Image src="/mobin-hassani.jpg" alt="Mobin Hassani" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            <Floating3DObject x={moveX} y={moveY} translateZ={130} rotate="12deg">
              <Terminal size={32} />
            </Floating3DObject>
            <Floating3DObject x={moveY} y={moveX} translateZ={100} rotate="-15deg">
              <Code2 size={28} />
            </Floating3DObject>
            
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -right-16 top-10">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black px-5 py-3 rounded-3xl shadow-2xl tracking-wider text-sm flex items-center gap-2">
                <Flame size={16} className="text-black" />
                Geliştirici Lideri
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
              Mobin <span className="text-cyan-400">Hassani</span>
            </h1>
            <p className="text-cyan-400 font-bold tracking-widest text-lg md:text-xl mt-4 uppercase">
              Yazılım Geliştirici Lideri & Yazılım Mimarı
            </p>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-light">
              Lead Software Engineer & Head of Development Ecosystem
            </p>
            
            <div className="flex justify-center gap-4 mt-8">
              {mySocials.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 shadow-xl backdrop-blur-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-400 text-sm">
               <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-400"/> Küresel Merkez • Dubai & Avrupa</span>
               <span className="flex items-center gap-2"><User size={16} className="text-cyan-400"/> Yazılım ve Mühendislik Lideri</span>
               <span className="flex items-center gap-2"><Globe size={16} className="text-cyan-400"/> Dünya Çapında Dijital Bankacılık Platformu</span>
            </div>
          </motion.div>
        </section>

        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-black mb-10 border-l-8 border-cyan-400 pl-6">Mobin Hassani Hakkında</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                Ben <span className="text-white font-bold">Mobin Hassani</span>, yazılım mimarı ve SafiPay'in <span className="text-cyan-400 font-bold">Lead Developer</span>'ıyım. Amacım, küresel ölçekte sınır tanımayan finansal işlemleri en üst düzey hız ve güvenlikle yürüten dijital altyapıları yönetmektir.
              </p>
              <div className="bg-cyan-500/10 p-8 rounded-[2.5rem] italic border-l-8 border-cyan-400 text-cyan-100">
                “Kusursuz yazılım mühendisliği, ölçeklenebilir kod ve tavizsiz güvenlik, modern küresel dijital bankacılığın temelidir.”
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-20 bg-cyan-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">Teknoloji Yığını ve Uzmanlıklar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <Code2 className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Yazılım Mimarisi</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Dağıtık sistemler, mikroservisler, yüksek ölçeklenebilirlik ve performans optimizasyonu</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <Terminal className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Modern Full-Stack</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono" dir="ltr">TypeScript, Next.js, React, Node.js, Python, TailwindCSS, State Engines</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <Server className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Bulut ve DevOps</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Docker, Kubernetes, CI/CD, AWS/GCP, Redis, Yüksek Erişilebilirlik</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <ShieldCheck className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">Fintech Güvenliği</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Uçtan uca şifreleme, bankacılık standartları, işlem güvenliği ve denetim</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {mySocials.map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank" className="text-gray-500 hover:text-cyan-400 transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="opacity-40 text-xs tracking-widest uppercase">
            Mobin Hassani • SafiPay Lead Developer • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
