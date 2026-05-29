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
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-black" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* Background FX - Changed to feminine colors (Pink/Purple) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
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
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
                <div className="bg-pink-500 text-white p-4 rounded-3xl shadow-2xl font-black">مدیر</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">شیرین <span className="text-pink-500">گل احمدی</span></h1>
            <p className="text-pink-500 font-bold tracking-widest text-lg mt-4 uppercase">مدیر صافی‌پی و توسعه‌دهنده فول‌استک</p>
            
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
               <span className="flex items-center gap-2"><MapPin size={16}/> اسلام‌آباد، پاکستان</span>
               <span className="flex items-center gap-2"><User size={16}/> متولد: ۱۶ دسامبر ۲۰۰۴</span>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT ME --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-r-8 border-pink-500 pr-6">درباره من</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                من شیرین گل احمدی هستم، یک متخصص چندرشته‌ای که به عنوان مدیر در صافی‌پی فعالیت می‌کنم. متولد ۱۶ دسامبر ۲۰۰۴ هستم و همواره اشتیاق زیادی به تکنولوژی، اقتصاد و حل خلاقانه مسائل داشته‌ام. مجموعه مهارت‌های متنوع من پلی میان اجرای فنی و استراتژی‌های تجاری است.
              </p>
              <p>
                من فارغ‌التحصیل رشته اقتصاد از <span className="text-white font-bold underline decoration-pink-500">دانشگاه ملی علوم و فناوری (NUST)</span> در اسلام‌آباد، پاکستان هستم. در کنار پیشینه آکادمیک خود در زمینه اقتصاد، به عنوان یک توسعه‌دهنده فول‌استک، علاقه‌مند به هوش مصنوعی و طراح گرافیک، عمیقاً وارد دنیای تکنولوژی شده‌ام.
              </p>
              <div className="bg-pink-500/10 p-8 rounded-[2.5rem] italic border-r-8 border-pink-500 text-pink-100">
                «هدف نهایی من ترکیب استراتژی اقتصادی، هوش مصنوعی پیشرفته و طراحی یکپارچه است تا به تبدیل شدن صافی‌پی به یک قدرت پیشرو در اکوسیستم مالی دیجیتال جهانی کمک کنم.»
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SKILLS GRID --- */}
        <section className="py-20 bg-pink-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">تخصص‌های حرفه‌ای</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <Briefcase className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">مدیریت و اقتصاد</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">استراتژی کسب‌وکار، مدیریت عملیات، تحلیل اقتصادی، رهبری تیم، متدولوژی‌های چابک</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <Code2 className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">توسعه فول‌استک</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono" dir="ltr">React.js, Next.js, Node.js, JavaScript, TypeScript, Python, HTML/CSS, Tailwind, Database</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <PenTool className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">طراحی گرافیک</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">طراحی UI/UX، فیگما (Figma)، فتوشاپ، ایلاستریتور، هویت برند، ارتباطات بصری</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-pink-500/40 transition-all group">
                <Cpu className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">هوش مصنوعی</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">مهندسی پرامپت، ادغام هوش مصنوعی، مفاهیم یادگیری ماشین، اتوماسیون جریان کار</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Briefcase className="text-pink-500"/> تجربه کاری</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-pink-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">مدیر</h4>
                  <p className="text-pink-500 text-sm mb-2">اکوسیستم صافی‌پی (در حال حاضر)</p>
                  <p className="text-gray-500 text-sm">رهبری مدیریت عملیاتی، نظارت بر هماهنگی تیم و ادغام راه‌حل‌های فناوری با استراتژی‌های تجاری برای پلتفرم صافی‌پی.</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">توسعه‌دهنده فول‌استک و طراح</h4>
                  <p className="text-pink-500 text-sm mb-2">پروژه‌های فریلنسری و خصوصی</p>
                  <p className="text-gray-500 text-sm">توسعه کامل برنامه‌های تحت وب و ایجاد هویت بصری جذاب و طراحی‌های UI/UX.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><GraduationCap className="text-pink-500"/> تحصیلات</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-pink-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">دانشگاه ملی علوم و فناوری (NUST)</h4>
                  <p className="text-pink-500 text-sm">اسلام‌آباد، پاکستان</p>
                  <p className="text-gray-500 text-sm mt-1">مدرک لیسانس اقتصاد. فارغ‌التحصیل با پایه‌ای قوی در استراتژی‌های اقتصادی و مدیریت مالی.</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">گواهینامه‌های فناوری و طراحی</h4>
                  <p className="text-pink-500 text-sm italic">مطالعات پیشرفته در هوش مصنوعی، توسعه فول‌استک و طراحی گرافیک.</p>
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Languages size={20} className="text-pink-500"/> تسلط به زبان‌ها</h3>
                <div className="flex flex-wrap gap-4">
                  {['انگلیسی', 'دری', 'پشتو', 'اردو'].map(lang => (
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
              <h2 className="text-3xl font-black mb-6">صلاحیت‌های کلیدی</h2>
              <ul className="text-gray-300 space-y-4 text-lg text-right inline-block" dir="rtl">
                <li>• تخصص در پیوند دادن اقتصاد با فناوری‌های دیجیتال</li>
                <li>• تسلط بر ابزارهای مدرن هوش مصنوعی و مهندسی پرامپت</li>
                <li>• رهبری مدیریتی در اکوسیستم صافی‌پی</li>
                <li>• توانایی خلاقانه در طراحی و کدنویسی کامل پلتفرم‌های وب</li>
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
          <p className="opacity-30 text-xs tracking-widest uppercase">
            شیرین گل احمدی • پورتفولیوی فنی و مدیریتی • ۲۰۲۶
          </p>
        </footer>
      </div>
    </div>
  );
}