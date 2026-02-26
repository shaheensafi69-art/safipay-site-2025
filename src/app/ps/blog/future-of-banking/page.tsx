'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ShieldCheck, ArrowRight, 
  Zap, Globe, Lock, CheckCircle2, 
  TrendingUp, Cpu, Landmark 
} from 'lucide-react';
import Link from 'next/link';

export default function FutureOfBankingPage() {
  const params = useParams();
  const lang = params?.lang || 'ps';
  const isRtl = lang === 'fa' || lang === 'ps' || lang === 'ar';

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* هیرو سیکشن د ځانګړي انیمیشن سره */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/blog/future-of-banking/hero.jpg" 
            alt="د ډیجیټل بانکوالۍ راتلونکی"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6 text-amber-500 font-black tracking-[0.3em] text-xs uppercase">
              <Cpu size={18} />
              <span>د راتلونکي نسل فنټیک ایکوسیستم</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 drop-shadow-2xl">
              د بانکوالۍ راتلونکی؛ <br/> <span className="text-amber-500 text-4xl md:text-6xl text-right block mt-4">عنعنه د مډرنیت په مقابل کې</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* د مینځپانګې برخه */}
      <section className="container mx-auto px-6 -mt-24 relative z-30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#080808] border border-white/5 rounded-[3.5rem] p-8 md:p-20 shadow-2xl backdrop-blur-xl"
          >
            
            {/* د لیکوال پروفایل او د SafiPay لوګو */}
            <div className="flex flex-wrap justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="absolute -inset-1.5 bg-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center p-3">
                        <img src="/logo.png" alt="SafiPay Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-black text-xl">Safi AI</p>
                    <CheckCircle2 size={18} className="text-blue-500 fill-blue-500/10" />
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">د SafiPay رسمي ویاند</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> ۲۰۲۶/۰۲/۰۸</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> ۱۵ دقیقې مطالعه</span>
              </div>
            </div>

            {/* د مقالې اصلي متن */}
            <article className="space-y-12 text-gray-300 leading-[2.4] text-justify text-lg" dir="rtl">
              
              <p className="text-2xl text-white font-medium mb-12 border-r-4 border-amber-500 pr-6">
                عنعنوي بانکوالي د خپلو ډبرو دیوالونو او اوږدو کتارونو سره، د خپل ژوند وروستۍ ساه اخلي. په نني نړۍ کې، سرعت یوازې یو امتیاز نه دی؛ بلکې د امنیت او باور اصلي معیار دی. SafiPay د فزیکي پولو په له منځه وړلو سره د دې مفاهیمو د بیا تعریف لپاره رامینځته شوی.
              </p>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Zap className="text-amber-500" /> ولې پخواني سیسټمونه ناکامیږي؟
              </h2>
              <p>
                د دودیزو بانکونو تر ټولو لویه کمزوري د انساني بیروکراسۍ او پخوانۍ زیربنا باندې د هغوی ډیره تکیه ده. په داسې حال کې چې په پخوانیو سیسټمونو کې یو بانکي انتقال ممکن له ۳ څخه تر ۵ کاري ورځو پورې وخت ونیسي، د SafiPay په مډرن ایکوسیستم کې معاملې په کسر د ثانیه کې د کلاوډ شبکو او مصنوعي ځیرکتیا په واسطه ترسره کیږي. همدا لامل دی چې زموږ بنسټ ایښودونکی، <strong>شاهین صافي</strong>، د دودیزو منځګړیتوبونو پر بشپړ له منځه وړلو ټینګار کوي.
              </p>

              {/* د ځانګړتیاوو ګریډ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <TrendingUp className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">هوښیار مالي مدیریت</h4>
                    <p className="text-sm text-gray-500">د SEPA په شبکه کې د فیسونو کمولو او د لیږد سرعت زیاتولو لپاره له پرمختللو الګوریتمونو څخه ګټه اخیستنه.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <Landmark className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">اروپایي بانکي معیارونه</h4>
                    <p className="text-sm text-gray-500">زموږ ټول فعالیتونه د اروپایي اتحادیې د مالي بنسټونو تر جدي څارنې لاندې دي - هغه معیار چې دودیز صرافان یې هیڅکله نشي پوره کولی.</p>
                </motion.div>
              </div>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Lock className="text-amber-500" /> امنیت: له پټنوم هاخوا
              </h2>
              <p>
                په تخنیکي امنیت کې، <strong>مجتبی (زموږ د امنیت مسؤل)</strong> د خوندیتوب څو اړخیز پروتوکولونه پلي کړي دي. له بیومیټریک تایید څخه نیولې تر سرتاسري کوډ کولو (End-to-End Encryption) پورې، زموږ موخه دا ده چې داسې پلټفارم وړاندې کړو چې کاروونکي پکې د بندیزونو یا د دریمې ډلې د لاسوهنې له ویرې پرته خپله شتمني اداره کړي.
              </p>

              <div className="bg-white/[0.02] border-r-4 border-amber-500 p-12 rounded-2xl my-16 text-right">
                <p className="text-white text-xl italic font-light">
                  "د بانکوالۍ راتلونکی ستاسو په سمارټ فون کې دی، نه د ډبرو په ودانیو کې. موږ په SafiPay کې دا ځواک مستقیم ستاسو لاسونو ته سپارلی دی."
                </p>
                <p className="text-amber-500 font-bold mt-4">— د نړیوالې پراختیا مدیرې، ساحل پیغام</p>
              </div>

              <h2 className="text-3xl font-black text-white mb-8">پایله: ډیجیټل اقتصاد ته یو لوی ګام</h2>
              <p>
                موږ په SafiPay کې باور لرو چې نړیوال بانکي سیسټم ته لاسرسی د هر انسان اساسي حق دی. د سمدستي IBAN حسابونو او ویزا کارتونو په وړاندې کولو سره، موږ یو داسې پله جوړه کړې چې د افغانستان اقتصاد د اروپا له زړه او نړیوالو بازارونو سره نښلوي. دا د سیمې په مالي جوړښت کې د یو لوی بدلون پیل دی.
              </p>
            </article>

            {/* بېرته ستنېدو بټن */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg">
                    <ArrowRight size={24} className={isRtl ? "" : "rotate-180"} />
                    د SafiPay پوهنغونډ ته بېرته ستنېدل
                </span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}