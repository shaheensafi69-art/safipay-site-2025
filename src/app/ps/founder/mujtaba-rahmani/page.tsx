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

// --- د ټیک‌ټاک ځانګړی آیکون ---
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- د درې اړخیزو (3D) خوځنده شیانو کامپوننت ---
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

  // --- ټولنیزې اړیکې ---
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/mwlite/profile/me" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/bigshot_tradez" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1DJJUX1TS2/" },
    { icon: <TikTokIcon size={20} />, href: "https://www.tiktok.com/@chill_asf_fr" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/+93793035609" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* پس‌منظر اغیزې */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- هیرو برخه (اصلي پېژندنه) --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-blue-500/30 p-2 bg-[#050505]">
                <Image src="/mujtaba.jpeg" alt="مجتبی رحماني" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="-10deg">
              <TrendingUp size={30} />
            </Floating3DObject>
            
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
                <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-2xl font-black italic tracking-widest uppercase">بنسټ اېښودونکی</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase">مجتبی <span className="text-blue-500">رحماني</span></h1>
            <p className="text-blue-400 font-bold tracking-[0.3em] text-xl mt-4 uppercase">د صافي‌پی بنسټ اېښودونکی او د اقتصادي چارو کارپوه</p>
            
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
               <span className="flex items-center gap-2" dir="ltr"><MapPin size={16}/> کابل، افغانستان</span>
               <span className="flex items-center gap-2" dir="ltr"><User size={16}/> ۲۸ جولای ۲۰۰۶</span>
               <span className="flex items-center gap-2 font-bold text-blue-500/50 italic underline" dir="ltr">@bigshot_tradez</span>
            </div>
          </motion.div>
        </section>

        {/* --- په اړه او لیدلوری --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-r-8 border-blue-600 pr-6 uppercase italic">د بنسټ اېښودونکي ماموریت</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                زه <span className="text-white font-bold">مجتبی رحماني</span> یم؛ یو لیدلوری لرونکی متشبث او مسلکي سوداګر (Trader) چې خپل ځان مې د افغانستان د مالي وضعیت د بدلولو لپاره وقف کړی دی. د <span className="text-blue-400 underline decoration-2">اقتصاد او آنلاین سوداګرۍ</span> په برخه کې د تخصصي اکاډمیکې مخینې سره، زه د صافي‌پی د سټراټیژیکې او مالي پراختیا مسوولیت پر غاړه لرم.
              </p>
              <div className="bg-blue-600/10 p-8 rounded-[2.5rem] italic border-r-8 border-blue-600 text-blue-100">
                "موږ دودیز اقتصادي اصول له عصري فنټیک (FinTech) حللارو سره نښلوو ترڅو افغان ولس ځواکمن کړو او هغوی د نړۍ له ډیجیټل بازارونو سره یوځای کړو."
              </div>
              <p>
                د چارټونو له تحلیل او سوداګریزو سټراټیژیو هاخوا، زه په نظم او ثبات پوره باور لرم؛ هغه ځانګړتیاوې چې هره ورځ یې د رزمي سپورتونو (MMA) او منډې له لارې په خپل ځان کې پالم ترڅو د فارکس (Forex) ننګونکې نړۍ ته تل چمتو واوسم.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- تخنیکي مهارتونه --- */}
        <section className="py-20 bg-blue-600/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic uppercase">کلیدي تخصصونه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <BarChart3 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">د بازار تحلیل</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">پرمختللی تخنیکي تحلیل، پرایس اکشن، د نغدو پیسو مدیریت او د فارکس سوداګریزې سټراټیژۍ.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <Globe className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">ډیجیټل اقتصاد</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">د آنلاین سوداګریو سټراټیژیک پراختیا، د برېښنايي تجارت کچه لوړول او د نړیوال بازار پراختیا.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <PieChart className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">مالي سټراټیژي</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">د شتمنیو تخصیص، د خطر او ګټې (Risk-to-Reward) مدیریت او د ډیجیټل مالي سیسټمونو سمون.</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group">
                <Gamepad2 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">نوې ټکنالوژي</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono italic">ډیجیټل بانکي بنسټونه، د بلاک‌چین مفهومونه او د لوړ فعالیت لرونکي گیمینګ سیسټمونه.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- تجربه او زده کړې --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 text-right">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic uppercase"><Briefcase className="text-blue-500"/> مسلکي تجربې</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_#2563eb]" />
                  <h4 className="text-xl font-bold text-white">بنسټ اېښودونکی او اجرایوي شریک</h4>
                  <p className="text-blue-400 text-sm mb-2">صافي‌پی ډیجیټل بانک (۲۰۲۴ - اوس مهال)</p>
                  <p className="text-gray-500 text-sm leading-relaxed">د مالي چوکاټونو سټراټیژیک پلان جوړونه او په افغانستان کې د لومړي عصري بانکي ایکوسیستم پرمختګ.</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">د فارکس خپلواک سوداګر (Trader)</h4>
                  <p className="text-blue-400 text-sm mb-2">مستقل (۲۰۲۱ - اوس مهال)</p>
                  <p className="text-gray-500 text-sm leading-relaxed">د نړۍ د اسعارو د بازارونو تحلیل او په لوړ نظم سره د ډیجیټل شتمنیو مدیریت.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic uppercase"><GraduationCap className="text-blue-500"/> زده کړې</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-blue-600 rounded-full" />
                  <h4 className="text-xl font-bold text-white">د اقتصاد او آنلاین سوداګرۍ لیسانس</h4>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mt-1">تخصصي سند</p>
                  <p className="text-gray-500 text-sm mt-2">د نړۍ د مالي بازارونو هر اړخیزه مطالعه، د ډیجیټل تجارت سټراټیژۍ او اقتصادي ماډلینګ.</p>
                </div>
                <div className="pt-6">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase"><Activity size={20} className="text-blue-500"/> فزیکي نظم</h3>
                   <div className="flex flex-wrap gap-4">
                     {['MMA رزمي سپورتونه', 'استقامتي منډه', 'مسلکي گیمینګ'].map(item => (
                       <span key={item} className="px-5 py-2 bg-blue-500/5 rounded-2xl border border-blue-500/20 text-xs font-black text-blue-400 uppercase tracking-widest">{item}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- لاسته راوړنې --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-12 rounded-[4rem] border border-blue-500/20 relative overflow-hidden text-right">
                <div className="absolute top-0 left-0 p-8 opacity-10"><Trophy size={150}/></div>
                <Award className="text-blue-500 mx-auto mb-6" size={60} />
                <h2 className="text-3xl font-black mb-6 italic uppercase text-center">کلیدي لاسته راوړنې</h2>
                <ul className="text-gray-300 space-y-4 text-lg inline-block w-full">
                  <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> د صافي‌پی د نړیوال مالي ایکوسیستم بنسټ اېښودل</li>
                  <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> د اقتصاد او ډیجیټل بازارونو په برخه کې سټراټیژیک فارغ‌التحصیل</li>
                  <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> د نړۍ په بازارونو کې د ۳ کلونو څخه زیاته کاري تجربه</li>
                  <li className="flex items-center gap-3"><Zap size={18} className="text-blue-500"/> په افغانستان کې د آنلاین سوداګریو فعال ملاتړی</li>
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
          <p className="opacity-30 text-[10px] tracking-[0.4em] uppercase font-black">
            مجتبی رحماني • د صافي‌پی بنسټ اېښودونکی او د اقتصاد متخصص • ۲۰۲۶
          </p>
        </footer>
      </div>
    </div>
  );
}