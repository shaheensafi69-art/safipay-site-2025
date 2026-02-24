'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Award, BookOpen, Cpu, Lightbulb,
  Code2, BarChart3, User,
  Layout, Languages, Briefcase, Mail, MapPin,
  Linkedin, Facebook, Instagram, MessageCircle,
  Compass, Shield, Heart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

// --- Custom TikTok Icon ---
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- 3D Floating Objects Component ---
const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-emerald-500"
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

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <MessageCircle size={20} />, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-black" dir="ltr" onMouseMove={handleMouseMove}>
      
      {/* Background FX - تم سبز برای ساحل */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-emerald-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-emerald-500/30 p-2 bg-[#050505]">
                <Image src="/sahel.jpeg" alt="Sahel Salem" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            {/* Floating 3D Icons */}
            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="-10deg">
              <Compass size={30} />
            </Floating3DObject>
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-20">
                <div className="bg-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl font-black tracking-widest uppercase">Strategist</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white">SAHEL <span className="text-emerald-500">SALEM</span></h1>
            <p className="text-emerald-400 font-bold tracking-[0.5em] text-xl mt-4 uppercase">Ecosystem Developer & Core Leader</p>
            
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((social, idx) => (
                <Link key={idx} href={social.href} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 backdrop-blur-md">
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-10 text-gray-500 text-sm">
               <span className="flex items-center gap-2"><MapPin size={16}/> Kabul, Afghanistan</span>
               <span className="flex items-center gap-2"><Globe size={16}/> Global Operations</span>
            </div>
          </motion.div>
        </section>

        {/* --- BIO --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
            <h2 className="text-4xl font-black mb-10 border-l-8 border-emerald-500 pl-6 italic">Professional Profile</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                Sahel Salem is a key member of the SafiPay leadership council, specializing in ecosystem growth and strategic partnerships. With a focus on sustainable digital infrastructure, he plays a vital role in bridge-building between traditional finance and modern digital banking.
              </p>
              <div className="bg-emerald-500/10 p-8 rounded-[2.5rem] italic border-l-8 border-emerald-500 text-emerald-100">
                "Leadership is not about being in charge. It's about taking care of those in your charge and building a future where technology serves everyone equally."
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CORE PILLARS --- */}
        <section className="py-20 bg-emerald-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic uppercase tracking-widest">Core Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-center">
                <Shield className="text-emerald-500 mb-6 mx-auto group-hover:rotate-12 transition-transform" size={50} />
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-500 text-sm font-mono">Ensuring the highest standards of transparency in every SafiPay operation.</p>
              </div>
              <div className="p-10 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-center">
                <Zap className="text-emerald-500 mb-6 mx-auto group-hover:scale-125 transition-transform" size={50} />
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-500 text-sm font-mono">Driving creative solutions for complex financial challenges in Afghanistan.</p>
              </div>
              <div className="p-10 bg-black border border-white/5 rounded-[3rem] hover:border-emerald-500/40 transition-all group text-center">
                <Heart className="text-emerald-500 mb-6 mx-auto group-hover:scale-110 transition-transform" size={50} />
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-500 text-sm font-mono">Building a digital bank that truly belongs to and supports the local people.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center">
          <p className="opacity-30 text-xs tracking-[0.5em] uppercase mb-4">
            Sahel Salem • SafiPay Strategic Leader • 2026
          </p>
          <div className="h-1 w-20 bg-emerald-500/50 mx-auto rounded-full" />
        </footer>
      </div>
    </div>
  );
}