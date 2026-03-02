'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Landmark, Star, Target,
  History, School, Facebook, ArrowUpLeft, 
  Instagram, MessageCircle
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
    <div className="min-h-screen bg-[#000] text-white pb-32 font-sans overflow-x-hidden selection:bg-emerald-500/30" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* جلوه‌های پس‌زمینه */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- بخش هیرو --- */}
        <section ref={containerRef} className="relative pt-40 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
              <div className="relative h-full w-full rounded-[5rem] overflow-hidden border border-emerald-500/20 p-3 bg-[#050505]">
                <Image src="/sahel.jpeg" alt="ساحل سالم" fill className="object-cover rounded-[4.5rem] grayscale hover:grayscale-0 transition-all duration-700" priority />
              </div>
            </div>

            <Floating3DObject x={moveX} y={moveY} translateZ={150} rotate="-15deg">
              <Star size={35} fill="currentColor" />
            </Floating3DObject>
          </motion.div>

          <div className="text-center mt-16 px-6">
            <h1 className="text-7xl md:text-[8vw] font-black italic tracking-tighter leading-[0.8] mb-6">
              ساحل <span className="text-transparent stroke-emerald-500 stroke-2" style={{ WebkitTextStroke: '2px #10b981' }}>سالم</span>
            </h1>
            <p className="text-emerald-500 font-bold tracking-[0.4em] text-lg md:text-2xl uppercase mt-4">مدیر توسعه بین‌الملل و روابط اروپا</p>
            
            <div className="flex justify-center gap-6 mt-12">
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

        {/* --- بیوگرافی و تحصیلات --- */}
        <section className="py-20 container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-right">
            <div className="lg:col-span-7">
              <div className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <History className="text-emerald-500" />
                  <h3 className="text-3xl font-black italic uppercase">رهبر نسل نوین</h3>
                </div>
                <p className="text-gray-400 text-xl leading-[2.2] text-justify font-light italic">
                  ساحل سالم، متولد **۱۹ مارچ ۲۰۰۷**، یکی از ستون‌های استراتژیک مدیریت در SafiPay است. او با تلفیق دانش آکادمیک مدیریت بازرگانی از **دانشگاه People آمریکا** و درک عمیق از بازارهای مالی، نقش کلیدی در اتصال افغانستان به شبکه بانکی جهانی ایفا می‌کند. ساحل معمار روابط بین‌المللی ما در اتحادیه اروپاست.
                </p>
                <div className="mt-12 flex items-center gap-6 p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 italic text-emerald-100/80">
                   "هدف ما ایجاد زیرساخت‌های مالی امن و تحت نظارت اروپا برای تمامی افغان‌های جهان است."
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-10 rounded-[3.5rem] bg-gradient-to-bl from-emerald-600/20 to-transparent border border-emerald-500/20 shadow-2xl">
                <School className="text-emerald-500 mb-6" size={40} />
                <h4 className="text-2xl font-black italic uppercase mb-2">تعالی آکادمیک</h4>
                <p className="text-gray-300 text-lg font-bold mb-1">University of the People, USA</p>
                <p className="text-emerald-400 font-mono tracking-widest uppercase text-xs">رشته: مدیریت بازرگانی (BBA)</p>
              </div>

              <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group cursor-pointer transition-all hover:bg-white/[0.04]">
                 <div className="text-right">
                    <p className="text-[10px] uppercase font-black text-gray-500 mb-1">ارتباط مستقیم</p>
                    <p className="text-lg font-bold italic">واتس‌اپ رسمی</p>
                 </div>
                 <Link href="https://wa.me/+93700582033" target="_blank" className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ArrowUpLeft size={20} />
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- استراتژی جهانی --- */}
        <section className="py-24 bg-emerald-500/[0.02]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: <Globe size={40} />, title: "توسعه در اروپا", desc: "رهبری حضور استراتژیک SafiPay در بخش‌های بانکی اتحادیه اروپا." },
                { icon: <Landmark size={40} />, title: "امنیت IBAN", desc: "نظارت بر ادغام حساب‌های SEPA برای کاربران افغان با استانداردهای جهانی." },
                { icon: <ShieldCheck size={40} />, title: "انطباق قانونی", desc: "تضمین همسویی ۱۰۰ درصدی با قوانین بین‌المللی مبارزه با پولشویی." }
              ].map((pill, i) => (
                <div key={i} className="p-12 rounded-[3.5rem] bg-[#080808] border border-white/5 group hover:border-emerald-500/40 transition-all duration-700 text-right">
                  <div className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform">{pill.icon}</div>
                  <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">{pill.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{pill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
          <p className="text-gray-600 text-[10px] uppercase font-black tracking-[0.5em] mb-8 italic">
            ساحل سالم • مدیر ارشد بین‌الملل SafiPay • ۲۰۲۶
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