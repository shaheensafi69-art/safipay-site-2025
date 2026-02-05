// src/app/(ps)/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      {/* هیرو */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/15 via-transparent to-black pointer-events-none" />

        <div className="absolute inset-0 opacity-8 pointer-events-none flex items-center justify-center scale-125 md:scale-150 lg:scale-175 -z-10">
          <Image
            src="/logo.png"
            alt=""
            width={1000}
            height={1000}
            className="object-contain blur-md"
          />
        </div>

        <div className="relative z-10 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.04em] mb-6 leading-none">
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                SafiPay
              </span>
              <br className="sm:hidden" />
              <span className="text-4xl md:text-6xl lg:text-7xl mt-4 block font-bold text-gray-100">
                د افغانانو لپاره لومړی نړیوال ډیجیټل بانک
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            ملیونونه افغانان لا هم د نړیوال بانکي سیسټم ته لاسرسی نه لري. موږ دا ستونزه حل کوو.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center"
          >
            <Link
              href="#problems"
              className="group px-10 py-6 text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-900/50"
            >
              ستونزې وګورئ
            </Link>

            <Link
              href="/invest"
              className="group px-10 py-6 text-xl md:text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:text-white rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-900/50"
            >
              اوس ملاتړ وکړئ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* د بانکدارۍ ستونزې */}
      <section id="problems" className="py-32 bg-black/50 border-t border-b border-amber-900/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-red-500"
          >
            په افغانستان کې د بانکدارۍ ستونزې
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: 'د بانکي خدمتونو پراخه لاسرسي نشتوالی',
                desc: 'له ۸۵–۹۰٪ خلکو (په ځانګړي ډول کلیوالو او ښځو) بانکي حساب نشته. بانکونه یوازې په لویو ښارونو کې دي او ډېرې سیمې هیڅ لاسرسی نه لري.',
              },
              {
                title: 'د نړیوالو کارتونو نشتوالی',
                desc: 'تقریباً هیڅ افغان بانک ریښتیني ویزې یا مسترکارډ نه ورکوي. موجود کارتونه یوازې داخلي دي یا محدودیتونه لري او بهر کار نه کوي.',
              },
              {
                title: 'غیررسمي او ګران د پیسو انتقال سیسټم',
                desc: 'خلک د حواله‌چیانو او صرافیانو په واسطه پیسې لیږي چې ۵–۱۵٪ کارمزد اخلي. د درغلۍ، پیسو له لاسه ورکولو او نه تعقیب خطر ډېر دی.',
              },
              {
                title: 'د نړیوالو تادیاتو سیسټمونو سره نه تړل',
                desc: 'افغانستان له SWIFT سیسټم څخه پرې شوی دی. آنلاین تادیات (آمازون، گوگل، اپل، نتفلیکس او نور) تقریباً ناممکن دي.',
              },
              {
                title: 'تحریمونه او بانکي محدودیتونه',
                desc: 'افغان بانکونه له نړیوال بانکي سیسټم څخه پرې یا محدود دي. د ډالرو او بهرنیو اسعارو انتقال ډېر سخت، ګران او وخت‌نیوونکی دی.',
              },
              {
                title: 'د پرمختللي ډیجیټل بانکدارۍ نشتوالی',
                desc: 'موجود بانکي اپلیکیشنونه ډېر ساده، ورو او غیرامن دي. آنلاین احراز هویت (KYC) تقریباً نشته.',
              },
              {
                title: 'د امنیتي او شفافیتي بنسټونو نشتوالی',
                desc: 'د AML/KYC کمزوري سیسټم له امله د پیسو مینځلو او درغلۍ کچه لوړه ده. خلک د رسمي بانکونو باور نه لري او په نقدي یا فزیکي ډالرو تکیه کوي.',
              },
              {
                title: 'د نقدینې او لوړ تورم ستونزې',
                desc: 'د پیسو ارزښت ساتلو لپاره خلک ډالر کاروي، خو د فزیکي یا ډیجیټل ډالرو لاسرسی ډېر سخت او خطرناک دی.',
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-red-900/30"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-red-400 group-hover:text-red-300 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* د SafiPay حل لارې */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-amber-500"
          >
            SafiPay دا ستونزې څنګه حل کوي؟
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                problem: 'د بانکي خدمتونو پراخه لاسرسي نشتوالی',
                solution: 'هر افغان (داخل او بهر) ته نړیوال ډیجیټل بانکي حساب پرته له شخصي مراجعه',
              },
              {
                problem: 'د نړیوالو کارتونو نشتوالی',
                solution: 'فوري مجازی ویزا + فزیکي کارت چې په ټوله نړۍ کې آنلاین او پلورنځیو کې کار کوي',
              },
              {
                problem: 'غیررسمي او ګران د پیسو انتقال سیسټم',
                solution: 'ګړندی او ارزانه انتقال (کمتر له ۱٪ کارمزد) په ټوله نړۍ کې د بشپړ تعقیب سره',
              },
              {
                problem: 'د نړیوالو تادیاتو سیسټمونو سره نه تړل',
                solution: 'مستقیم تړل د نړیوالو تادیاتو شبکو سره – آنلاین خریدونه بې محدودیت',
              },
              {
                problem: 'تحریمونه او بانکي محدودیتونه',
                solution: 'قانوني او نړیوال بنسټونه د محدودیتونو د لرې کولو لپاره د نړیوالو قوانینو په رعایت سره',
              },
              {
                problem: 'د پرمختللي ډیجیټل بانکدارۍ نشتوالی',
                solution: 'متوسط، ګړندی او خوندي اپلیکیشن د بشپړ آنلاین احراز هویت (KYC) سره',
              },
              {
                problem: 'د امنیتي او شفافیتي بنسټونو نشتوالی',
                solution: 'قوي AML/KYC سیسټم، میاشتني شفاف راپورونه، پرمختللی کوډ کول او ۲۴/۷ ملاتړ',
              },
              {
                problem: 'د نقدینې او لوړ تورم ستونزې',
                solution: 'څو اسعاري ډیجیټل حساب د اسانه ساتلو او بدلون لپاره د ډالر، یورو او نورو',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-900/30"
              >
                <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-4 group-hover:text-red-300 transition-colors">
                  ستونزه: {item.problem}
                </h3>
                <div className="text-lg text-amber-400 font-semibold mb-3">
                  د SafiPay حل لاره:
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-8">
              د SafiPay په مرسته هر افغان په نړیوال اقتصاد کې په آزاده توګه برخه اخلي
            </p>
            <Link
              href="/invest"
              className="inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
            >
              اوس زمونږ سره یوځای شئ
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}