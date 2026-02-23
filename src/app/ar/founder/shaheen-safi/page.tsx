'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Award, BookOpen, Cpu, Gamepad2, Lightbulb,
  Code2, Server, BarChart3, Binary, User,
  Database, Layout, Languages, Briefcase, Mail, MapPin,
  Linkedin, Facebook, Instagram, MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

// --- أيقونة تيك توك مخصصة ---
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- مكون العناصر ثلاثية الأبعاد العائمة ---
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

  // روابط التواصل الاجتماعي
  const mySocials = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shaheen-safi-b73a30299" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/top_g_official1" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1H1vuV1i9Z/" },
    { icon: <TikTokIcon size={20} />, href: "https://www.tiktok.com/@safi_sahib6" },
    { icon: <MessageCircle size={20} />, href: "https://Wa.me/+19342032497" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20 font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black" dir="rtl" onMouseMove={handleMouseMove}>
      
      {/* Background FX */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- قسم الهيرو (الرئيسي) --- */}
        <section ref={containerRef} className="relative pt-32 pb-20 flex flex-col items-center">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              <div className="absolute inset-0 bg-amber-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-amber-500/30 p-2 bg-[#050505]">
                <Image src="/shaheen.jpeg" alt="Shaheen Safi" fill className="object-cover rounded-[3.5rem]" priority />
              </div>
            </div>

            {/* أيقونات عائمة ثلاثية الأبعاد */}
            <Floating3DObject x={moveX} y={moveY} translateZ={120} rotate="10deg">
              <Code2 size={30} />
            </Floating3DObject>
            <motion.div style={{ x: moveY, y: moveX, translateZ: 180 }} className="absolute -left-16 top-10">
                <div className="bg-amber-500 text-black p-4 rounded-3xl shadow-2xl font-black">CEO</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12 px-6">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white">شاهين <span className="text-amber-500">صافي</span></h1>
            <p className="text-amber-500 font-bold tracking-[0.2em] text-xl mt-4 uppercase">مؤسس SafiPay ومختص في علوم الكمبيوتر</p>
            
            {/* أزرار التواصل الاجتماعي */}
            <div className="flex justify-center gap-4 mt-8">
              {mySocials.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 shadow-xl backdrop-blur-md"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-10 text-gray-500 text-sm">
               <span className="flex items-center gap-2"><MapPin size={16}/> كابل، أفغانستان</span>
               <span className="flex items-center gap-2"><Mail size={16}/> ssafi9241@hotmail.com</span>
            </div>
          </motion.div>
        </section>

        {/* --- نبذة عني --- */}
        <section className="py-20 container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#080808] border border-white/5 p-10 md:p-16 rounded-[4rem] shadow-2xl">
            <h2 className="text-4xl font-black mb-10 border-r-8 border-amber-500 pr-6">نبذة عني</h2>
            <div className="space-y-8 text-gray-300 text-xl leading-[2.3] text-justify font-light">
              <p>
                أنا شاهين صافي، متخصص في علوم الكمبيوتر، مبدع، مفعم بالحيوية، وشغوف بعالم التكنولوجيا والتجارة عبر الإنترنت. مع خبرة واسعة في تدريس علوم الحاسوب وإدارة أنظمة تكنولوجيا المعلومات، كنت دائمًا أسعى لتعلم وتطوير مشاريع مبتكرة.
              </p>
              <p>
                أكملت دراساتي التخصصية بدرجة البكالوريوس في علوم الكمبيوتر من <span className="text-white font-bold underline decoration-amber-500">جامعة إسطنبول التقنية (ITU)</span>، مع التركيز على هندسة البرمجيات، أمن الشبكات، وأنظمة التكنولوجيا المالية (FinTech).
              </p>
              <div className="bg-amber-500/10 p-8 rounded-[2.5rem] italic border-r-8 border-amber-500 text-amber-100">
                "كانت أكبر نقطة تحول في مسيرتي المهنية هي تأسيس ثم بيع العلامة التجارية SafiPro بنجاح، لأتمكن من تركيز كامل طاقتي ورأسمالي على إنشاء SafiPay؛ النظام المصمم لإحداث ثورة في الصيرفة الرقمية."
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- المهارات التقنية --- */}
        <section className="py-20 bg-amber-500/[0.02]">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-20 italic">المهارات التقنية (Technical Stack)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Code2 className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">البرمجة</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Python, Java, C++, JavaScript, HTML/CSS, PHP, C#, SQL, Node.js, React, Angular</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Server className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">الشبكات والأمن</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Routing & Switching, Firewall Management, VPN Configuration, Network Security, Cisco Devices, Mikrotik, Wireless Networking</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Database className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">إدارة قواعد البيانات</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">MySQL, MongoDB, PostgreSQL, Microsoft SQL Server</p>
              </div>
              <div className="p-8 bg-black border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all group">
                <Layout className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-4">التجارة والتصميم</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-mono">Amazon, Shopify, TikTok Shop, Trading, CorelDRAW, Premiere, After Effects</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- الخبرة والتعليم --- */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><Briefcase className="text-amber-500"/> الخبرة العملية</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-amber-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">متخصص تكنولوجيا المعلومات</h4>
                  <p className="text-amber-500 text-sm mb-2">اتحاد أفغانستان لكرة القدم (2019-2024)</p>
                  <p className="text-gray-500 text-sm">خبرة لمدة 1.5 سنة في إدارة أنظمة تكنولوجيا المعلومات والبنية التحتية للشبكات في الاتحاد.</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">مدرس علوم الكمبيوتر</h4>
                  <p className="text-amber-500 text-sm mb-2">مراكز تعليمية مختلفة (2019-2024)</p>
                  <p className="text-gray-500 text-sm">3 سنوات من الخبرة في التدريس المتخصص وتدريب الجيل القادم من الخبراء.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-4 italic"><GraduationCap className="text-amber-500"/> التعليم</h2>
              <div className="space-y-8 border-r-2 border-white/10 pr-8">
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-amber-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">جامعة إسطنبول التقنية (ITU)</h4>
                  <p className="text-amber-500 text-sm">بكالوريوس علوم الكمبيوتر (2019-2023)</p>
                </div>
                <div className="relative">
                  <div className="absolute -right-[41px] top-2 w-4 h-4 bg-white/20 rounded-full" />
                  <h4 className="text-xl font-bold text-white">إدارة الأعمال والتسويق</h4>
                  <p className="text-amber-500 text-sm italic">التركيز على استراتيجيات التجارة الإلكترونية وريادة الأعمال الرقمية.</p>
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Languages size={20} className="text-amber-500"/> إتقان اللغات</h3>
                <div className="flex gap-4">
                  {['الإنجليزية', 'الدرية', 'البشتوية'].map(lang => (
                    <span key={lang} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm font-bold">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- الإنجازات --- */}
        <section className="py-20 container mx-auto max-w-4xl px-6 text-center">
           <div className="bg-gradient-to-br from-amber-500/20 to-transparent p-12 rounded-[4rem] border border-amber-500/20">
              <Award className="text-amber-500 mx-auto mb-6" size={60} />
              <h2 className="text-3xl font-black mb-6">الجوائز والشهادات</h2>
              <ul className="text-gray-300 space-y-4 text-lg text-right inline-block">
                <li>• شهادة دولية في التحليل الفني من منظمة **IFTA**</li>
                <li>• تنظيم أكثر من 20 ندوة ناجحة في مجال الأعمال والنجاح الشخصي</li>
                <li>• مؤسس نظام المعالجة المالية المبتكر **SafiPay**</li>
              </ul>
           </div>
        </section>

        <footer className="py-20 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {mySocials.map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank" className="text-gray-600 hover:text-amber-500 transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="opacity-30 text-xs tracking-[0.5em] uppercase">
            شاهين صافي • الملف الفني الكامل • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}