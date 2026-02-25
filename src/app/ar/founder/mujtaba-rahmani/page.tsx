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

  // --- Social Links ---
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/mwlite/profile/me" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/bigshot_tradez" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1DJJUX1TS2/" },
    { icon: <TikTokIcon size={20} />, href: "https://www.tiktok.com/@chill_asf_fr" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/+93793035609" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* Background FX */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-blue-500/30 p-2 bg-[#050505]">
                <Image src="/mujtaba.jpeg" alt="مجتبى رحماني" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="-10deg">
              <TrendingUp size={30} />
            </Floating3DObject>
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
                <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-2xl font-black italic tracking-widest uppercase">مؤسس مشارك</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white uppercase">مجتبى <span className="text-blue-500">رحماني</span></h1>
            <p className="text-blue-400 font-bold tracking-[0.2em] text-xl mt-4 uppercase text-pretty">مؤسس مشارك في SafiPay وأخصائي اقتصاد</p>
            
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
               <span className="flex items-center gap-2"><MapPin size={16}/> كابل، أفغانستان</span>
               <span className="flex items-center gap-2"><User size={16}/> 28 يوليو 2006</span>
               <span className="flex items-center gap-2 font-bold text-blue-500/50 italic underline">@bigshot_tradez</span>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT & VISION --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-r-8 border-blue-600 pr-6 uppercase italic">رؤية المؤسس</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                اسمي <span className="text-white font-bold">مجتبى رحماني</span>، رائد أعمال طموح ومتداول محترف مكرس جهودي لإحداث ثورة في المشهد المالي في أفغانستان. من خلال خلفيتي الأكاديمية المتخصصة في <span className="text-blue-400 underline decoration-2">الاقتصاد والأعمال عبر الإنترنت</span>، أقود التطوير الاستراتيجي والمالي لمنصة SafiPay.
              </p>
              <div className="bg-blue-600/10 p-8 rounded-[2.5rem] italic border-r-8 border-blue-600 text-blue-100">
                "نحن ندمج المبادئ الاقتصادية التقليدية مع حلول التكنولوجيا المالية المبتكرة لتمكين الشعب الأفغاني وربطه بالسوق الرقمي العالمي."
              </div>
              <p>
                بعيداً عن الرسوم البيانية واستراتيجيات العمل، أنا مؤمن قوي بالانضباط والمرونة — وهي صفات أمارسها يومياً من خلال الفنون القتالية المختلطة (MMA) والجري، مما يضمن بقائي متيقظاً في عالم تداول العملات الأجنبية عالي المخاطر.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- TECHNICAL STACK --- */}
        <section className="py-20 bg-blue-600/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">الكفاءات الأساسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group text-right">
                <BarChart3 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">تحليل الأسواق</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">التحليل الفني المتقدم، حركة السعر، إدارة السيولة، واستراتيجيات الفوركس.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group text-right">
                <Globe className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">الاقتصاد الرقمي</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">تطوير الأعمال الاستراتيجية عبر الإنترنت، توسيع التجارة الإلكترونية، والانتشار في السوق العالمي.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group text-right">
                <PieChart className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">الاستراتيجية المالية</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">توزيع الأصول، إدارة نسبة المخاطرة إلى العائد، وتحسين أنظمة التكنولوجيا المالية.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group text-right">
                <Gamepad2 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">تقنيات الجيل القادم</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">البنية التحتية للخدمات المصرفية الرقمية، أساسيات البلوكشين، وأنظمة الألعاب عالية الأداء.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Briefcase className="text-blue-500"/> الخبرة العملية</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_#2563eb]" />
                  <h4 className="text-xl font-bold text-white">مؤسس مشارك</h4>
                  <p className="text-blue-400 text-sm mb-2">بنك SafiPay الرقمي (2024 - الحالي)</p>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify">رسم الاستراتيجيات المالية وقيادة نمو أول نظام بيئي مصرفي رقمي حديث في أفغانستان.</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">متداول فوركس متفرغ</h4>
                  <p className="text-blue-400 text-sm mb-2">عمل حر (2021 - الحالي)</p>
                  <p className="text-gray-500 text-sm leading-relaxed">تحليل أسواق العملات العالمية وإدارة محافظ الأصول الرقمية المتنوعة بدقة عالية.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><GraduationCap className="text-blue-500"/> التعليم</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-blue-600 rounded-full" />
                  <h4 className="text-xl font-bold text-white">بكالوريوس في الاقتصاد والأعمال عبر الإنترنت</h4>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mt-1">درجة متخصصة</p>
                  <p className="text-gray-500 text-sm mt-2">دراسة شاملة للأسواق المالية العالمية، استراتيجيات التجارة الرقمية، والنمذجة الاقتصادية.</p>
                </div>
                <div className="pt-6">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Activity size={20} className="text-blue-500"/> الانضباط البدني</h3>
                   <div className="flex flex-wrap gap-4">
                     {['MMA', 'جري المسافات الطويلة', 'الألعاب الإلكترونية التنافسية'].map(item => (
                       <span key={item} className="px-5 py-2 bg-blue-500/5 rounded-2xl border border-blue-500/20 text-xs font-black text-blue-400 uppercase tracking-[0.1em]">{item}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-12 rounded-[4rem] border border-blue-500/20 relative overflow-hidden">
               <div className="absolute top-0 left-0 p-8 opacity-10"><Trophy size={150}/></div>
               <Award className="text-blue-500 mx-auto mb-6" size={60} />
               <h2 className="text-3xl font-black mb-6 italic uppercase">الإنجازات الرئيسية</h2>
               <ul className="text-gray-300 space-y-4 text-lg text-right inline-block">
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> التأسيس المشارك للنظام المالي العالمي SafiPay</li>
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> خريج استراتيجي في الاقتصاد والأسواق الرقمية</li>
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> متداول خبير بأكثر من 3 سنوات في سوق الصرف الأجنبي</li>
                 <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> مدافع نشط عن الأعمال التجارية عبر الإنترنت في أفغانستان</li>
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
            مجتبى رحماني • مؤسس مشارك في SafiPay وأخصائي اقتصاد • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}