'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPage() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ps';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- هیرو برخه (سریزه) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm"
          >
            په افغانستان کې د مالي نظام نوی تعریف
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            بېنکداري په <br /> نوې بڼه
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            سافي پې (SafiPay) یوازې یو اپلیکیشن نه دی؛ دا یو انقلابي بنسټ دی چې هر افغان وګړي ته نړیوالو مالي سیسټمونو ته د لاسرسي لاره پرانیزي.
          </motion.p>
        </div>
      </section>

      {/* --- بنسټ اېښودونکي او ټیم --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* شاهین صافی - بنسټ اېښودونکی او CEO */}
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
                <p className="text-white font-black italic tracking-widest text-lg uppercase">CEO / بنسټ اېښودونکی</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase">
                <Star size={14} /> رهبري او ستراتیژي
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهین صافی</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  شاهین صافی (زیږدیز کال ۲۰۰۳) د فنټیک (FinTech) ستراتیژیست او د سافي پې تادیاتي سیسټمونو اصلي طراح دی. هغه د افغانستان د مالي انزوا په اړه د ژورې پوهې په درلودلو سره، د پروژې لیدلوري رهبري کوي او له نړیوالو بانکي غولانو سره اړیکې پالي.
                </p>
                <p>
                  د کلاوډ ټیکنالوژۍ او عصري اروپایي بانکي میتودونو په برخه کې د هغه مهارت سافي پې ته دا وړتیا ورکړې چې د افغانستان د لومړي ریښتیني نوي نسل بانک (Neobank) په توګه د امنیت معیارونه نوي کړي. د شاهین هدف په نړیوالو بازارونو کې د افغانانو مالي اعتبار بیا رغول دي.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-right">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">ستراتیژیک مدیریت</h4>
                  <p className="text-sm text-gray-500">د سوداګرۍ ماډل پراختیا او بانکي ملګرتیاوې</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-right">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">بحراني حل لارې</h4>
                  <p className="text-sm text-gray-500">د بانکي بندیزونو د ماتولو لپاره د حل لارو رامنځته کول</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ساحل سالم - د ایکوسیسټم بانکدارۍ مشر */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-2 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase">
                <Banknote size={14} /> بانکي ایکوسیسټم
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  ساحل سالم (زیږدیز کال ۲۰۰۷) د سافي پې د بانکي ایکوسیسټم او حسابونو د زیربنا ماهر دی. هغه د داسې مالي چوکاټونو د ډیزاین او پلي کولو مسؤلیت لري چې افغان کاروونکو ته نړیوالو بانکي خدماتو ته بې ساري لاسرسی ورکوي.
                </p>
                <p>
                  د خوندي او شفافو مالي جریانونو په رامنځته کولو کې د ساحل تخصص دا تضمینوي چې د سافي پې هر کاروونکی د نړۍ په کچه ډیجیټل بانکداري تجربه کړي. هغه په رڼښت او اسانتیا تمرکز کوي ترڅو په افغانستان کې یو عادلانه مالي سیسټم جوړ کړي.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors text-right">
                  <Globe className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">د ایکوسیسټم پراختیا</h4>
                  <p className="text-sm text-gray-500">له نړیوالو مالي شبکو سره د پلونو جوړول</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors text-right">
                  <Shield className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">د حسابونو مدیریت</h4>
                  <p className="text-sm text-gray-500">د بانکي حسابونو لپاره نوښتګر سیسټمونه</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-1 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/sahel.jpeg" 
                  alt="ساحل سالم" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                د ایکوسیسټم مشر
              </div>
            </motion.div>
          </div>

          {/* مجتبی رحماني - CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="مجتبی رحماني" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / معمار
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase">
                <Code2 size={14} /> انجینري او امنیت
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبی رحماني</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  مجتبی رحماني (زیږدیز کال ۲۰۰۶) د سافي پې تخنیکي مشر او د سایبري امنیت معمار دی. هغه د دې پلټ فارم تخنیکي بنسټ ایښی او په ریښتیني وخت کې د تادیاتو د سیسټمونو ثبات او نه ماتیدونکی امنیت تضمینوي.
                </p>
                <p>
                  د سافټویر پراختیا او د تادیاتو په زیربنا کې د خپل استعداد له لارې، مجتبی داسې یو سیسټم جوړ کړی چې په سرعت او دقت کې له لویو نړیوالو بانکونو سره سیالي کوي. د هغه ماموریت د کاروونکو د شتمنیو ساتنې لپاره د یوې ډیجیټل کلا جوړول دي.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-right">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">د سیسټم معماري</h4>
                  <p className="text-sm text-gray-500">د بېک اینډ (Backend) پراختیا او مالي مایکرو سروسونه</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-right">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">سایبري امنیت</h4>
                  <p className="text-sm text-gray-500">پرمختللی کوډینګ او د معلوماتو خوندیتوب</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- لیدلوری او ارزښتونه --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "کامل امنیت", desc: "د تادیاتو د امنیت لپاره له څو پوړیزو کوډینګ پروتوکولونو څخه ګټه اخیستنه.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "نړیواله اړیکه", desc: "پرته له کوم منځګړي، د افغانستان لپاره د ډیجیټل اقتصاد د دروازو پرانیستل.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "دوامداره نوښت", desc: "د راتلونکي نسل د اړتیاوو پوره کولو لپاره د بانکي خدمتونو دوامداره وده.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all text-right"
              >
                <div className="mb-6 flex justify-end">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- د همکارۍ غوښتنه (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter text-center">همکارۍ ته چمتو یاست؟</h2>
              <p className="text-white/80 text-xl mb-12 font-light text-center">
                سافي پې کې موږ د مالي متخصصینو او نړیوالو ستراتیژیکو ملګرو په لټه کې یو.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                د شراکت غوښتنه واستوئ <ArrowRight size={24} className="rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}