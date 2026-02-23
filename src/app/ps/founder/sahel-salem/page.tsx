'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Award, BookOpen, Cpu, Gamepad2, Lightbulb,
  Code2, Server, BarChart3, Binary, User,
  Database, Layout, Languages, Briefcase, Mail, MapPin
} from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

// --- کامپوننت برای المان‌های سه‌بعدی شناور ---
const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-amber-500"
  >
    {children}
  </motion.div>
);

export default function ShaheenSafiFullExpertBio() {
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

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* Background FX */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-amber-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-amber-500/30 p-2 bg-[#050505]">
                <Image src="/shaheen.jpeg" alt="Shaheen Safi" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            {/* Floating 3D Icons */}
            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="10deg">
              <Code2 size={30} />
            </Floating3DObject>
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
               <div className="bg-amber-500 text-black p-4 rounded-3xl shadow-2xl font-black">CEO</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white">شاهین <span className="text-amber-500">صافی</span></h1>
            <p className="text-amber-500 font-bold tracking-[0.5em] text-xl mt-4 uppercase">SafiPay Founder & Computer Specialist</p>
            <div className="flex justify-center gap-6 mt-6 text-gray-500 text-sm">
               <span className="flex items-center gap-2"><MapPin size={16}/> کابل، افغانستان</span>
               <span className="flex items-center gap-2"><Mail size={16}/> ssafi9241@hotmail.com</span>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT ME (Full Content) --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-r-8 border-amber-500 pr-6">درباره من</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                من شاهین صافی، متخصص کامپیوتر، خلاق، پرانرژی و مشتاق دنیای تکنولوژی و تجارت آنلاین هستم. با تجربه‌ای گسترده در تدریس علوم کامپیوتر و مدیریت سیستم‌های IT، همواره به دنبال یادگیری و توسعه پروژه‌های نوآورانه بوده‌ام. 
              </p>
              <p>
                تحصیلات تخصصی خود را در مقطع کارشناسی علوم کامپیوتر در <span className="text-white font-bold underline decoration-amber-500">دانشگاه تکنیکال استانبول (ITU)</span> به پایان رسانده‌ام و تمرکز اصلی‌ام بر معماری نرم‌افزار، امنیت شبکه و سیستم‌های فین‌تک است.
              </p>
              <div className="bg-amber-500/10 p-8 rounded-[2.5rem] italic border-r-8 border-amber-500 text-amber-100">
                «بزرگترین نقطه عطف حرفه‌ای من، بنیان‌گذاری و سپس فروش موفق برند SafiPro بود تا بتوانم تمام تمرکز و سرمایه خود را بر روی ایجاد SafiPay معطوف کنم؛ سیستمی که برای دگرگونی بانکداری دیجیتال طراحی شده است.»
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SKILLS GRID (Full CV Details) --- */}
        <section className="py-20 bg-amber-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">مهارت‌های تخصصی (Technical Stack)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Programming */}
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Code2 className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">برنامه‌نویسی</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Python, Java, C++, JavaScript, HTML/CSS, PHP, C#, SQL, Node.js, React, Angular</p>
              </div>
              {/* Networking */}
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Server className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">شبکه و امنیت</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Routing & Switching, Firewall Management, VPN Configuration, Network Security, Cisco Devices, Mikrotik, Wireless Networking</p>
              </div>
              {/* Database */}
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Database className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">مدیریت دیتابیس</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">MySQL, MongoDB, PostgreSQL, Microsoft SQL Server</p>
              </div>
              {/* E-Commerce & Design */}
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Layout className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">تجارت و دیزاین</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Amazon, Shopify, TikTok Shop, Trading, CorelDRAW, Premiere, After Effects</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Briefcase className="text-amber-500"/> تجربیات کاری</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-amber-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">متخصص IT</h4>
                  <p className="text-amber-500 text-sm mb-2">فدراسیون فوتبال افغانستان (۲۰۱۹-۲۰۲۴)</p>
                  <p className="text-gray-500 text-sm">۱.۵ سال تجربه در مدیریت سیستم‌های IT و زیرساخت‌های شبکه فدراسیون.</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">مدرس علوم کامپیوتر</h4>
                  <p className="text-amber-500 text-sm mb-2">مراکز مختلف آموزشی (۲۰۱۹-۲۰۲۴)</p>
                  <p className="text-gray-500 text-sm">۳ سال سابقه تدریس تخصصی مضامین آی‌تی و تربیت نسل جدید متخصصان.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><GraduationCap className="text-amber-500"/> تحصیلات</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-amber-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">دانشگاه تکنیکال استانبول (ITU)</h4>
                  <p className="text-amber-500 text-sm">Bachelor of Computer Science (۲۰۱۹-۲۰۲۳)</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">مدیریت بیزنس و مارکتینگ</h4>
                  <p className="text-amber-500 text-sm italic">تمرکز بر استراتژی‌های تجارت الکترونیک و کارآفرینی دیجیتال.</p>
                </div>
              </div>
              
              {/* Languages */}
              <div className="pt-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Languages size={20} className="text-amber-500"/> تسلط بر زبان‌ها</h3>
                <div className="flex gap-4">
                  {['English', 'Dari', 'Pashto'].map(lang => (
                    <span key={lang} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm font-bold">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
           <div className="bg-gradient-to-br from-amber-500/20 to-transparent p-12 rounded-[4rem] border border-amber-500/20">
              <Award className="text-amber-500 mx-auto mb-6" size={60} />
              <h2 className="text-3xl font-black mb-6">افتخارات و گواهینامه‌ها</h2>
              <ul className="text-gray-300 space-y-4 text-lg">
                <li>• گواهینامه بین‌المللی تحلیل تکنیکال از سازمان **IFTA**</li>
                <li>• برگزارکننده بیش از ۲۰ سمینار موفق در حوزه تجارت و موفقیت فردی</li>
                <li>• بنیان‌گذار سیستم نوین پردازش مالی **SafiPay**</li>
              </ul>
           </div>
        </section>

        <footer className="py-20 text-center opacity-30 text-xs tracking-[0.5em] uppercase">
          Shaheen Safi • Full Technical Portfolio • 2026
        </footer>
      </div>
    </div>
  );
}