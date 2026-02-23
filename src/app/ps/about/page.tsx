'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User, Landmark, ShieldCheck, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPagePashto() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ps';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- هیرو سیکشن (پېژندنه) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.1em] uppercase text-sm"
          >
            په افغانستان کې د مالي نظام نوی پړاو
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            له دودیز بانکوالۍ <br /> هاخوا
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            صافي پې (SafiPay) یوازې یو اپلیکیشن نه دی؛ دا یو انقلابي بنسټ دی چې د هر افغان تبعه لپاره نړیوالو مالي سیسټمونو ته د لاسرسي لاره پرانیزي.
          </motion.p>
        </div>
      </section>

      {/* --- مشرتابه او بنسټ اېښودونکي --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-24 italic uppercase tracking-widest text-amber-500">مشرتابه او رهبري</h2>
        <div className="flex flex-col gap-40">
          
          {/* 1. Shaheen Safi - Founder & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="شاهین صافی - بنسټ اېښودونکی او CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">بنسټ اېښودونکی / CEO</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> ستراتیژي او لیدلوری
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهین صافی <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">بنسټ اېښودونکی او اجرایوي رییس</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  شاهین صافی (زیږون ۲۰۰۳) د فنټیک (Fintech) ستراتیژي جوړونکی او د صافي پې د ایکوسیسټم اصلي معمار دی. هغه د معلوماتي ټکنالوژۍ مدیریت او ډیجیټل سوداګرۍ کې د خپلې تجربې په مرسته، د افغانستان او نړیوالو مالي بازارونو ترمنځ د واټن له منځه وړل خپله مرام ګرځولی.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  بشپړ ژوندلیک وګورئ
                  <ArrowRight size={20} className="group-hover:-translate-x-2 transition-transform rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 2. Mujtaba Rahmani - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> انجنیري او امنیت
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبی رحماني <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">شریک بنسټ اېښودونکی او CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  مجتبی رحماني (زیږون ۲۰۰۶) د صافي پې د امنیتي زیربنا طرحه کوونکی دی. د تخنیکي رییس (CTO) په توګه، هغه د سایبري امنیت پروتوکولونو او د تادیاتو د پرمختللي ټکنالوژۍ د پلي کولو مسؤلیت پر غاړه لري.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  تخنیکي پروفایل
                  <ArrowRight size={20} className="group-hover:-translate-x-2 transition-transform rotate-180" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/mujtaba.jpeg" alt="مجتبی رحماني" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* 3. Sahel Salem - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/sahel.jpeg" alt="ساحل سالم" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> بانکي ایکوسیسټم
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">د بانکوالۍ مدیر</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed">
                ساحل سالم (زیږون ۲۰۰۷) په صافي پې کې د کاروونکو د حسابونو او بانکي ایکوسیسټم د یوځای کولو مشري کوي، او د ډیجیټل شتمنیو او دودیزو مالي چوکاټونو ترمنځ یوه منظمه اړیکه رامنځته کوي.
              </p>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  بانکي پروفایل وګورئ
                  <ArrowRight size={20} className="group-hover:-translate-x-2 transition-transform rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- زموږ ماموریت --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-white text-center">زموږ ماموریت</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light text-right">
              <p>
                صافي پې په یو ساده مګر قوي اصل ولاړ دی: <span className="text-white font-bold">«مالي شمولیت یو بنسټیز انساني حق دی.»</span> په هغه سیمه کې چې ډیری وخت له نړیوالو بانکي شبکو څخه جلا پاتې شوې، موږ د دې واټن ډکولو لپاره اړینه ټکنالوژي چمتو کوو.
              </p>
              <p>
                زموږ پلټفارم یوازې د راکړې ورکړې لپاره نه دی؛ دا د یوې باثباته مالي راتلونکې جوړولو په اړه دی. موږ یو بې پولې سیسټم ډیزاین کوو چیرې چې فریلانسران، متشبثین او کورنۍ کولی شي په نړیوال اقتصاد کې بشپړه برخه واخلي.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Landmark className="text-amber-500" />, title: "ډیجیټل بانکوالۍ", desc: "د هر کاروونکي لپاره یو بشپړ مجازی بانکي حساب." },
                { icon: <ShieldCheck className="text-green-500" />, title: "خوندي ساتنه", desc: "د لوړې کچې کوډینګ او غیر متمرکز امنیت." },
                { icon: <Globe className="text-blue-500" />, title: "نړیوال لاسرسی", desc: "نړیوالو بازارونو ته سمدستي نښلول." },
                { icon: <Cpu className="text-purple-500" />, title: "په AI سمبال", desc: "د درغلیو سمارټ پیژندنه او اتوماتیک تحلیل." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/50 transition-colors group text-right">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- د ملګرتیا بلنه (CTA) --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div className="bg-gradient-to-br from-amber-600 to-amber-900 p-20 rounded-[4rem]">
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">له صافي پې سره یوځای شئ</h2>
            <p className="text-amber-100/70 mb-12 max-w-2xl mx-auto text-lg">د افغانستان او نړۍ لپاره زموږ سره یوځای د نوي نسل مالي زیربناوې جوړې کړئ.</p>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-amber-100 transition-colors group">
                ملګرتیا پیل کړئ <ArrowRight className="group-hover:-translate-x-2 transition-transform rotate-180" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}