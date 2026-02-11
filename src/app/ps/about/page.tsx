'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPagePS() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="rtl">
      
      {/* هیرو برخه - پیژندنه */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm"
          >
            د افغانستان د مالي نظام د بدلون پیل
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-l from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            موږ بانکي پولې <br /> له منځه وړو
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay یوازې یو اپلیکیشن نه دی؛ دا یو انقلابي بنسټ دی چې هدف یې نړۍوالو مالي سیسټمونو ته د هر افغان لاسرسی دی، په هر ځای کې چې وي.
          </motion.p>
        </div>
      </section>

      {/* بنسټ ایښودونکي - تخصصي معلومات */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* شاهین صافی - CEO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/shaheen.jpeg" 
                alt="Shaheen Safi - Founder & CEO" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Founder & Chief Executive Officer
              </div>
              <h2 className="text-4xl font-bold">شاهین صافی <span className="text-gray-500 text-2xl font-light">(Shaheen Safi)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  شاهین صافی (زیږون ۲۰۰۳)، د فین‌ټک (FinTech) ستراتیژیست او د ډیجیټل تادیاتو سیسټمونو معمار دی. هغه د دودیزو پولو هاخوا لیدلوري سره، د SafiPay پروژې د رهبرۍ او تخنیکي زیربناوو د پراختیا مسولیت پر غاړه لري.
                </p>
                <p>
                  شاهین د اروپا په بانکي نظامونو د پوهې او د افغانستان د اقتصادي ننګونو په پیژندلو سره، داسې یو ماډل ډیزاین کړی چې د نړۍوالې کچې امنیت له اسانه لاسرسي سره یوځای کوي. د مالي بحرانونو په مدیریت کې د هغه تخصص، د صافي‌پی د بریا اصلي انجن دی.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 text-right">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1 text-right">تخنیکي تخصص</h4>
                  <p className="text-sm text-gray-400">د سیسټمونو امنیت، تادیات او بلاکچین</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1 text-right">رهبري</h4>
                  <p className="text-sm text-gray-400">ستراتژیک مدیریت او نړۍواله پراختیا</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* مجتبی رحمانی - CCO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Co-Founder & Chief Communications Officer
              </div>
              <h2 className="text-4xl font-bold">مجتبی رحمانی <span className="text-gray-500 text-2xl font-light">(Mujtaba Rahmani)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  مجتبی رحمانی (زیږون ۲۰۰۶)، د ستراتیژیکو اړیکو او د برانډ پراختیا متخصص دی. هغه د عامه اړیکو، په نړۍواله کچه د برانډ معرفي کولو او د SafiPay او له هیواده بهر افغانانو ترمنځ د اړیکو د پله رامینځته کولو مسولیت لري.
                </p>
                <p>
                  مجتبی په مذاکراتو او بازار پیژندنې کې د خپلو وړتیاوو په کارولو سره، د پانګوالو د باور په ترلاسه کولو کې مهم رول لوبوي. د هغه هدف یوازې اعلانونه نه، بلکې د افغانستان د ځوان نسل لپاره د نوي مالي کلتور رامینځته کول دي.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 text-right">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1 text-right">اړیکې</h4>
                  <p className="text-sm text-gray-400">ستراتژیک برندینګ او عامه اړیکې</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1 text-right">پراختیا</h4>
                  <p className="text-sm text-gray-400">د نړۍوالو ملاتړونو راجلبول</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/mujtaba.jpeg" 
                alt="Mujtaba Rahmani - Co-Founder" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* موخه او لیدلوری */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">زموږ موخه</h3>
            <p className="text-gray-400 text-lg leading-relaxed text-right text-justify">
              زموږ موخه دا ده چې هر افغان ته مالي ازادي ورکړو. موږ د نوې ټکنالوژۍ په کارولو سره د پیسو د لیږد لګښتونه کموو او نړۍوالو بانکي کارتونو ته لاسرسی، چې یو وخت زموږ د خلکو لپاره خوب و، په حقیقت بدلوو.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">لیدلوری (۲۰۳۰)</h3>
            <p className="text-gray-400 text-lg leading-relaxed text-right text-justify">
              موږ داسې راتلونکې جوړوو چې هیڅ افغان د جغرافیې له امله له ډیجیټل اقتصاد څخه بې برخې پاتې نشي. زموږ لیدلوری په سیمه کې د ترټولو لوی مالي بنسټ کیدل دي.
            </p>
          </div>
        </div>
      </section>

      {/* بنسټیز ارزښتونه */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">د SafiPay اخلاقي او تخنیکي ستنې</h2>
        <div className="grid md:grid-cols-3 gap-8 text-right">
          {[
            { 
              title: "بشپړ شفافیت", 
              desc: "موږ باور لرو چې باور په پټکاري نه ترلاسه کیږي. په SafiPay کې ټول مالي لګښتونه په بشپړ شفافیت سره راپور کیږي." 
            },
            { 
              title: "لوړ بانکي امنیت", 
              desc: "موږ د کاروونکو د شتمنیو د خوندیتوب لپاره د نړۍوالو کوډینګ سیسټمونو او پرمختللي امنیت څخه کار اخلو." 
            },
            { 
              title: "مالي پراختیا", 
              desc: "زموږ خدمتونه له هر ډول تبعیض پرته ډیزاین شوي ترڅو د افغانستان لیرې پرتې سیمې له نړۍوالو بازارونو سره وصل کړي." 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900/30 border border-white/5 rounded-3xl hover:border-amber-500/50 transition-all"
            >
              <h4 className="text-2xl font-bold text-amber-500 mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* د همکارۍ بلنه */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6">پدې مالي انقلاب کې شریک شئ</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            موږ د یو ملت مالي برخلیک بدلوو. که د یو کاروونکي په توګه وي او که د پانګوال، ستاسو ځای په SafiPay کې خالي دی.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">پانګونه وکړئ</Link>
            <Link href="/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">له موږ سره اړیکه</Link>
          </div>
        </div>
      </section>

    </div>
  );
}