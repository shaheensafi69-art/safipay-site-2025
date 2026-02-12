'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertCircle, CheckCircle2, Globe, Shield, Zap, 
  CreditCard, ArrowLeft, BarChart3, Handshake 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function HomePagePS() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ps';

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30" dir="rtl">
      
      {/* --- د هیرو برخه (Hero Section) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* شالید رڼا اغیزې */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.2em] uppercase"
          >
            د ټولو افغانانو لپاره د مالي پولو ماتول
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">سافي‌پی</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              د افغانانو لپاره ډیجیټل بانکداري
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            د لومړي ځل لپاره د نړۍ په کچه د ډیجیټل بانکدارۍ له لارې د میلیونونو افغانانو پیاوړي کول. 
            بې له ځنډه، بې له پولو؛ د امنیت او چټکتیا نوې تجربه.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="#problems"
              className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              ستونزې وڅارئ <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${currentLang}/partners`}
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
            >
              <Handshake size={24} /> ستراتیژیکه ملګرتیا
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- د مالي بحران برخه (Problems Section) --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10 text-right">
          <div className="flex flex-col items-center mb-24 text-center">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">
              په افغانستان کې <span className="text-red-600">بانکي بحران</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl font-light leading-relaxed">
              اوسني مالي سیسټمونه غیر فعال، منزوي او زاړه دي. 
              میلیونونه افغانان له عصري ډیجیټل اقتصاد څخه محروم پاتې دي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '۸۵٪ بې حسابه دي', desc: 'اکثریت خلک، په ځانګړې توګه مېرمنې او د لرو پرتو سیمو اوسېدونکي، بانکي خدمتونو ته لاسرسی نلري.' },
              { title: 'د سویفټ بندیز', desc: 'له نړیوالو بانکي شبکو سره د اړیکو پرې کېدل د پیسو لېږل په خطرناکه او غیر رسمي لاره بدل کړي دي.' },
              { title: 'ناچله کارتونه', desc: 'اوسني کورني کارتونه په Amazon، Netflix یا Google کې کار نه کوي او اعتبار نلري.' },
              { title: '۱۵٪ د حوالې محصول', desc: 'په دودیزو حوالو تکیه د پیسو د ضایع کېدو او په مالي چارو کې د روڼتیا د نشتوالي لامل کیږي.' },
              { title: 'لوړ انفلاسیون', desc: 'د ثابتو اسعارو (ډالر/یورو) د ساتلو لپاره د اسانتیا نشتوالی د کورنیو سپما له منځه وړي.' },
              { title: 'ډیجیټل پیژندنه نشته', desc: 'د حساب خلاصول لا هم فزیکي شتون او ډیرو پخوانیو کاغذپروانیو ته اړتیا لري.' },
              { title: 'کمزوری امنیت', desc: 'ماتېدونکي امنیتي زیربناګانې د مالي درغلیو او امنیتي ګواښونو چانس ډیر کړی دی.' },
              { title: 'آفلایین اقتصاد', desc: 'کورني کاروبارونه نشي کولای نړیوال تادیات ومني، چې دا د ملي اقتصاد د ودې مخه نیسي.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050505] border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- حل لارې (Solutions Section) --- */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
              راتلونکی <span className="text-amber-500">دلته دی</span>
            </h2>
            <p className="text-gray-400 text-xl font-light italic">
              سافي‌پی یوازې یو اپلیکیشن نه دی، بلکې د افغانستان او نړۍ د مالي بازارونو ترمنځ یو پول دی.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-right">
            {[
              { icon: <Globe />, title: 'نړیوال لاسرسی', desc: 'په نړۍ کې هر ځای کې افغانانو ته په سمدستي ډول د نړیوال حساب خلاصول، بې له فزیکي شتون.' },
              { icon: <CreditCard />, title: 'ویزا کارتونه', desc: 'د نړیوالو آنلاین پیرودونو او ګډونونو لپاره د مجازی او فزیکي کارتونو سمدستي ورکړه.' },
              { icon: <Zap />, title: '۱٪ کمیشن', desc: 'د قیمته حوالو لپاره یو هوښیار بدیل؛ په خورا لږ لګښت او پوره روڼتیا سره د پیسو لیږد.' },
              { icon: <Shield />, title: 'پرمختللی امنیت', desc: 'د نړۍ په کچه د بانکي کوډونو کارول او ډیجیټل پیژندنه ستاسو د شتمنۍ د ساتنې لپاره.' },
              { icon: <BarChart3 />, title: 'د اسعارو مدیریت', desc: 'د مارکیټ له بدلونونو څخه د ځان ژغورلو لپاره د نړۍ د بااعتباره اسعارو ساتل او تبادله.' },
              { icon: <CheckCircle2 />, title: 'قانوني اعتبار', desc: 'د خدماتو د دوام او اعتبار لپاره د نړیوالو مالي قوانینو په رڼا کې فعالیت کول.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-10 bg-black/40 border border-white/5 rounded-[2.5rem] hover:border-amber-500/50 transition-all duration-500 shadow-2xl"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* وروستی بلنه (Final CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-l from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
              آیا د افغانستان د اقتصاد <br /> بیا رغونې ته چمتو یاست؟
            </h2>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              زموږ د ملګرو په شبکه کې شامل شئ <Handshake size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}