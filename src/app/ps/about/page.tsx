'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowLeft, Briefcase, Code2, Star, Rocket, Target } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPagePS() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ps';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- د هیرو برخه (Hero Section) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            د افغانستان مالي پاراډایم بدلول
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            موږ د بانکوالۍ <br /> سرحدونه ماتوو
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay یوازې یو اپلیکیشن نه دی؛ دا یو انقلابي زیربنا ده چې په ټوله نړۍ کې هر افغان تبعه ته د نړیوالو مالي سیسټمونو د لاسرسي په موخه ډیزاین شوې ده.
          </motion.p>
        </div>
      </section>

      {/* --- د بنسټ ایښودونکو برخه (Founders Section) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* شاهین صافی - Founder & CEO */}
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
                  alt="Shaheen Safi - بنسټ ایښودونکی او CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block text-white font-black italic tracking-widest text-lg uppercase">
                بنسټ ایښودونکی / CEO
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> رهبري او ستراتیژي
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهین صافی <span className="text-gray-600 text-3xl font-light block mt-2">بنسټ ایښودونکی او عمومي رییس</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  شاهین صافی (زېږېدنه ۲۰۰۳) د FinTech ستراتیژیست او د SafiPay اکوسیستم اصلي معمار دی. هغه د یوې داسې لیدلوري په درلودلو سره چې هدف یې د افغانستان مالي انزوا پای ته رسول دي، د مکروسټراتیژۍ مشري کوي او د نړۍ له مخکښو بانکي مشرانو سره پر نړیوالو همکاریو څارنه کوي.
                </p>
                <p>
                  د کلاوډ پر بنسټ مالي ټیکنالوژیو او د اروپا عصري بانکي معیارونو کې د خپل مهارت له لارې، شاهین SafiPay ته اجازه ورکړه چې امنیت د افغانستان د لومړني ریښتیني نیوبنک په توګه بیا تعریف کړي. د هغه ماموریت روښانه دی: "په نړیواله کچه د افغان هویت مالي اعتبار او وقار بیا رغول."
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-right">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">ستراتژیک مدیریت</h4>
                  <p className="text-sm text-gray-500">سوداګریز ماډلینګ او نړیوال بانکي مشارکتونه.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-right">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">د مالي بحرانونو حل</h4>
                  <p className="text-sm text-gray-500">نړیوالو بازارونو ته د لاسرسي لپاره د حل لارو ډیزاین.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* مجتبی رحمانی - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> انجینري او امنیت
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبی رحماني <span className="text-gray-600 text-3xl font-light block mt-2">شریک بنسټ ایښودونکی او CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  مجتبی رحماني (زېږېدنه ۲۰۰۶) د SafiPay د سایبري امنیت معمار او CTO دی. هغه د پلیټ فارم تخنیکي ستون دی چې د ریښتیني وخت لیږد سیسټمونو مطلق خوندیتوب او ثبات تضمین کولو مسؤلیت لري.
                </p>
                <p>
                  د سافټویر پراختیا کې د خپل بې ساري استعداد او د تادیاتو زیربناوو په اړه د ژورې پوهې په کارولو سره، مجتبی یو داسې سیسټم ډیزاین کړی چې په سرعت او دقت کې له سترو نړیوالو بانکونو سره سیالي کوي. د هغه ماموریت د یوې "ډیجیټلي کلا" جوړول دي چیرې چې د کاروونکو شتمنۍ په هر ډول شرایطو کې خوندي وي.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-right">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">د سیسټم معمارۍ</h4>
                  <p className="text-sm text-gray-500">د بیک‌اینډ پراختیا او مالي مایکرو سرویسونه.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-right">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">سایبري امنیت</h4>
                  <p className="text-sm text-gray-500">پرمختللي کوډینګ پروتوکولونه او د ډیټا ساتنه.</p>
                </div>
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
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani - CTO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / معمار
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- لیدلوری او ارزښتونه (Vision & Values) --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "مطلق امنیت", desc: "د معاملاتو د بشپړ خوندیتوب لپاره د څو اړخیزه کوډینګ پروتوکولونو کارول.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "نړیوال پیوستون", desc: "پرته له کوم دودیز منځګړي د افغانستان لپاره د ډیجیټلي اقتصاد د دروازو پرانیستل.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "نه ستړې کېدونکې نوښت", desc: "د راتلونکي نسل اړتیاوو پوره کولو لپاره د نیوبنک وړتیاوو ته دوامداره وده ورکول.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all text-right"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- وروستۍ برخه (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">ستراتژیک مشارکت ته چمتو یاست؟</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                موږ په SafiPay کې د نړۍ له مالي نخبه ګانو او ستراتیژیکو شریکانو سره د راتلونکي جوړولو په لټه کې یو.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                د مشارکت غوښتنه <ArrowLeft className="mr-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}