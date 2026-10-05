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

// --- Floating 3D Component ---
const Floating3DObject = ({ children, x, y, translateZ, rotate }: any) => (
  <motion.div
    style={{ x, y, translateZ, rotateZ: rotate, transformStyle: "preserve-3d" }}
    className="absolute z-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-cyan-400"
  >
    {children}
  </motion.div>
);

export default function MobinHassaniBio() {
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
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:mobin@safipay.net", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* Background FX - Tech Cyan & Deep Indigo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-900/15 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[20%] w-[35%] h-[35%] bg-teal-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-cyan-500/30 blur-[100px] rounded-full opacity-60" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-cyan-500/40 p-2 bg-[#050505] shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <Image src="/mobin-hassani.jpg" alt="Mobin Hassani" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            {/* Floating 3D Icons */}
            <Floating3DObject x={moveX} y={moveY} translateZ={130} rotate="12deg">
              <Terminal size={32} />
            </Floating3DObject>
            <Floating3DObject x={moveY} y={moveX} translateZ={100} rotate="-15deg">
              <Code2 size={28} />
            </Floating3DObject>
            
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black px-5 py-3 rounded-3xl shadow-2xl tracking-wider text-sm flex items-center gap-2">
                <Flame size={16} className="text-black" />
                لیدر توسعه‌دهندگان
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
              مبین <span className="text-cyan-400">حسنی</span>
            </h1>
            <p className="text-cyan-400 font-bold tracking-widest text-lg md:text-xl mt-4 uppercase">
              لیدر بخش توسعه‌دهندگان و معمار نرم‌افزار صافی‌پی
            </p>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-light">
              Lead Software Engineer & Head of Development Ecosystem
            </p>
            
            {/* Social Links */}
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
               <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-400"/> دفتر مرکزی بین‌المللی • دبی و اروپا</span>
               <span className="flex items-center gap-2"><User size={16} className="text-cyan-400"/> لیدر تیم فنی و مهندسی نرم‌افزار</span>
               <span className="flex items-center gap-2"><Globe size={16} className="text-cyan-400"/> پلتفرم بانکداری دیجیتال جهانی</span>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT ME --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none" />
            <h2 className="text-4xl font-black mb-10 border-r-8 border-cyan-400 pr-6">درباره مبین حسنی</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                من <span className="text-white font-bold">مبین حسنی (Mobin Hassani)</span> هستم؛ مهندس نرم‌افزار، معمار سیستم‌های ابری و لیدر بخش توسعه‌دهندگان (Lead Developer) در اکوسیستم مالی دیجیتال <span className="text-cyan-400 font-bold">SafiPay</span>. رسالت من خلق، مهندسی و هدایت زیرساخت‌های نرم‌افزاری مدرنی است که میلیون‌ها تراکنش و تعاملات مالی را با حداکثر سرعت، پایداری و امنیت در مقیاس جهانی مدیریت می‌کنند.
              </p>
              <p>
                به‌عنوان لیدر تیم توسعه‌دهندگان صافی‌پی، مسئولیت نظارت بر کل چرخه حیات نرم‌افزار از معماری فرانت‌اند و بک‌اند، پیاده‌سازی APIهای اختصاصی مالی، سیستم‌های احراز هویت چندلایه تا استقرار سرویس‌های بانکی با استانداردهای سخت‌گیرانه بین‌المللی را بر عهده دارم.
              </p>
              <div className="bg-cyan-500/10 p-8 rounded-[2.5rem] italic border-r-8 border-cyan-400 text-cyan-100">
                «معماری دقیق نرم‌افزار، کدهای بهینه‌سازی‌شده و امنیت غیرقابل نفوذ، شالوده اصلی اعتماد در بانکداری دیجیتال مدرن جهانی است. ما صافی‌پی را با استانداردهایی مهندسی می‌کنیم که در هر کجای دنیا بدون وقفه و با حداکثر توان کار کند.»
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SKILLS GRID --- */}
        <section className="py-20 bg-cyan-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">تخصص‌های کلیدی و پشته فنی</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <Code2 className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">معماری نرم‌افزار</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">طراحی سیستم‌های توزیع‌شده، میکروسرویس‌ها، مقیاس‌پذیری بالا، الگوهای طراحی پیشرفته و بهینه‌سازی عملکرد</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <Terminal className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">توسعه فول‌استک مدرن</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono" dir="ltr">TypeScript, Next.js, React, Node.js, Python, TailwindCSS, State Engines, GraphQL</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <Server className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">زیرساخت ابری و دواپس</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">Docker, Kubernetes, CI/CD Pipelines, Cloud Infrastructure, AWS/GCP, Redis, High Availability</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-cyan-400/40 transition-all group">
                <ShieldCheck className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">امنیت فین‌تک و داده‌ها</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">رمزنگاری داده‌ها، استانداردهای بانکی، تست نفوذ، امنیت تراکنش‌ها، PostgreSQL و ذخیره‌سازی ایزوله</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & LEADERSHIP --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Workflow className="text-cyan-400"/> مسئولیت‌ها و تجارب</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-cyan-400 rounded-full" />
                  <h4 className="text-xl font-bold text-white">لیدر بخش توسعه‌دهندگان (Lead Developer)</h4>
                  <p className="text-cyan-400 text-sm mb-2">اکوسیستم جهانی SafiPay (در حال حاضر)</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    هدایت تیم مهندسی نرم‌افزار، تدوین معماری فنی، بررسی و بازبینی کدها (Code Review)، تضمین عملکرد بهینه هسته مالی و هماهنگی کامل بین تیم‌های توسعه.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">معمار ارشد سیستم و مهندس فول‌استک</h4>
                  <p className="text-cyan-400 text-sm mb-2">پروژه‌های بین‌المللی و سیستم‌های مالی</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    طراحی زیرساخت‌های بدون وقفه، بهینه‌سازی دیتابیس‌های پرتراکنش و پیاده‌سازی پلتفرم‌های تعاملی نسل وب با تکنولوژی‌های مدرن.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><MonitorDot className="text-cyan-400"/> چشم‌انداز فنی در صافی‌پی</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-cyan-400 rounded-full" />
                  <h4 className="text-xl font-bold text-white">پلتفرم دیجیتال فوق‌سریع</h4>
                  <p className="text-cyan-400 text-sm">عملکرد بی‌درنگ (Real-Time)</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    پیاده‌سازی سازوکارهای لودینگ آنی، تسویه فوری و مدیریت رویدادهای مالی بر بستر شبکه جهانی.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">امنیت و استانداردهای جهانی</h4>
                  <p className="text-cyan-400 text-sm italic">انطباق با استانداردهای روز اروپا و بین‌الملل</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    پایش مستمر کدهای پروژه، ممانعت از آسیب‌پذیری‌های امنیتی و پیاده‌سازی تست‌های خودکار E2E.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
           <div className="bg-gradient-to-br from-cyan-500/20 via-blue-900/10 to-transparent p-12 rounded-[4rem] border border-cyan-500/20 shadow-2xl">
              <Cpu className="text-cyan-400 mx-auto mb-6" size={60} />
              <h2 className="text-3xl font-black mb-6">صلاحیت‌های محوری و استراتژیک</h2>
              <ul className="text-gray-300 space-y-4 text-lg text-right inline-block" dir="rtl">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                  <span>رهبری و هدایت متمرکز تیم دولوپرها و مهندسان نرم‌افزار</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                  <span>معماری سیستم‌های مدرن وب، بک‌اند و APIهای مالی مقیاس‌پذیر</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                  <span>تضمین پایداری، سرعت و امنیت ۹۹.۹۹ درصدی در پلتفرم دیجیتال</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                  <span>استقرار مدرن‌ترین فریم‌ورک‌های توسعه و ابزارهای اتوماسیون ابری</span>
                </li>
              </ul>
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
            مبین حسنی • لیدر بخش توسعه‌دهندگان SafiPay • ۲۰۲۶
          </p>
        </footer>
      </div>
    </div>
  );
}
