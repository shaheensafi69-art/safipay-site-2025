'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaheen Safi",
              "alternateName": "شاهین صافی",
              "jobTitle": "Founder & CEO of SafiPay",
              "image": "/shaheen.jpeg",
              "description": "د افغانانو ځوان فین‌ټیک کاروبار کوونکی او د SafiPay بنسټګر – د افغانانو لپاره لومړی نړیوال ډیجیټل بانک. د ۲۰۰۳ کال د اپریل ۲ په کابل کې زیږیدلی، د میلیونونو افغانانو د بانکي ستونزو د حل لپاره کار کوي.",
              "birthDate": "2003-04-02",
              "nationality": "Afghan",
              "url": "https://www.safipay.net/about",
              "sameAs": [
                "https://www.linkedin.com/in/shaheen-safi-b73a30299",
                "https://www.instagram.com/top_g_official1",
                "https://www.facebook.com/share/1H1vuV1i9Z/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SafiPay",
              "url": "https://www.safipay.net",
              "logo": "/logo.png",
              "description": "د افغانانو لپاره لومړی نړیوال ډیجیټل بانک – څو اسعاري حسابونه، ویزا کارتونه، چټک پیسې انتقال او خوندي اپلیکیشن د ټولو افغانانو لپاره داخل او بهر.",
              "founder": {
                "@type": "Person",
                "name": "Shaheen Safi"
              },
              "foundingDate": "2025",
              "sameAs": [
                "https://www.linkedin.com/company/safipay",
                "https://www.instagram.com/safipay.official"
              ]
            }
          ])
        }}
      />

      <div className="min-h-screen bg-gray-950 text-white" dir="rtl">
        {/* هیرو */}
        <section className="relative py-32 md:py-40 border-b border-amber-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-black pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative max-w-md mx-auto md:mx-0 order-2 md:order-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-transparent rounded-3xl blur-3xl animate-pulse-slow" />
                  <div className="relative overflow-hidden rounded-3xl border-4 border-amber-700/50 shadow-2xl shadow-amber-900/60">
                    <Image
                      src="/shaheen.jpeg"
                      alt="شاهین صافی - د SafiPay بنسټګر"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              <div className="text-right order-1 md:order-2">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
                >
                  د <span className="text-amber-500">SafiPay</span> او د هغه بنسټګر په اړه
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                >
                  SafiPay یوازې یو پروژه نه ده؛ دا د میلیونونو افغانانو د بانکي حقونو د بیرته راګرځولو لپاره یو ملي خوب دی.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* د شاهین صافی په اړه */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              شاهین صافی – د SafiPay بنسټګر
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed text-right"
              >
                <p>
                  شاهین صافی د ۲۰۰۳ کال د اپریل ۲ په کابل کې زیږیدلی دی. هغه ځوان کاروبار کوونکی، پروګرام جوړوونکی او فین‌ټیک فعال دی چې د SafiPay پروژه یې پیل کړه ترڅو د افغانانو یوه لویه ستونزه – د عصري نړیوال بانکي سیسټم ته لاسرسی نشتوالی – حل کړي.
                </p>

                <p>
                  له ماشومتوب راهیسې یې په ټیکنالوژۍ او اقتصاد کې لیوالتیا درلوده. کله چې ډېر هم‌عمران یې په کمپیوټر لوبو بوخت وو، شاهین د پروګرامینګ، بلاکچین، د پیسو انتقال سیسټمونو او فین‌ټیک زده‌کړه پیل کړه.
                </p>

                <p>
                  هغه ځان‌تعلیمي دی او په مالي اپلیکیشنونو، سایبر امنیت او د پیسو انتقال بنسټونو کې تجربه لري. شاهین باور لري چې «بانکداري د هر انسان حق دی، نه یوازې د هغو کسانو چې په پرمختللو هېوادونو کې ژوند کوي».
                </p>

                <p>
                  په ۲۰۲۵ کال کې، کله چې یې ولیدل چې میلیونونه افغانان داخل او بهر لا هم ویزا کارت، ډالري حساب، چټک پیسې انتقال او آنلاین خرید ته لاسرسی نه لري، هغه پریکړه وکړه چې یو ریښتینی حل جوړ کړي: SafiPay.
                </p>

                <p>
                  هغه د شپې او ورځې په هڅو سره ویب‌سایټ او لومړنۍ اپلیکیشن جوړه کړه او د سرمایه جذب کمپاین یې پیل کړ ترڅو دا خوب حقیقت شي.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6 order-1 md:order-2"
              >
                <div className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 text-right">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">لنډ معلومات</h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li><strong>بشپړ نوم:</strong> شاهین صافی</li>
                    <li><strong>د زیږیدنې نېټه:</strong> د ۲۰۰۳ کال د اپریل ۲</li>
                    <li><strong>ملیت:</strong> افغان</li>
                    <li><strong>اوسنی دنده:</strong> د SafiPay بنسټګر او اجرایوي رییس</li>
                    <li><strong>محل فعالیت:</strong> نړیوال (تمرکز په فرانسه او افغانستان)</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                  <Link
                    href="https://www.linkedin.com/in/shaheen-safi-b73a30299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </Link>

                  <Link
                    href="https://www.instagram.com/top_g_official1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </Link>

                  <Link
                    href="https://www.facebook.com/share/1H1vuV1i9Z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Facebook
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* د SafiPay کیسه */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              د SafiPay کیسه له کومه پیل شوه؟
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed space-y-8 text-right"
            >
              <p>
                کلونه وړاندې، کله چې په افغانستان کې میلیونونه افغانان د عصري بانکدارۍ نشتوالي سره مخ وو او بهر هم د تحریمونو او نړیوالو حسابونو ته د لاسرسي نشتوالي سره، ما پریکړه وکړه چې یو بدلون رامنځته کړم.
              </p>
              <p>
                مې ولیدل چې خلک د خپلې کورنۍ لپاره د پیسو لیږلو لپاره ۱۰–۱۵٪ لوړ کارمزد صرافیانو او حواله‌چیانو ته ورکوي. مې ولیدل چې ځوانان نشي کولی له آمازون، گوگل‌پلی، اپ‌ستور یا حتی نتفلیکس څخه خرید وکړي. مې ولیدل چې کلیوالې ښځې حتی بانکي حساب هم نه لري.
              </p>
              <p>
                دا حالت زما لپاره د منلو وړ نه و. ما غوښتل چې یو بانک جوړ کړم چې د افغانانو وي، بې سرحد، بې تبعیض او د پخوانیو محدودیتونو پرته.
              </p>
              <p>
                SafiPay په ۲۰۲۵ کال کې زیږیدلی دی. لومړنی هدف یو ساده اپلیکیشن د پیسو انتقال و، خو ډېر ژر یې لوی خوب ته وده وکړه: یو بشپړ ډیجیټل بانک د څو اسعاري حسابونو، مجازی او فزیکي ویزا کارتونو، نړیوالو آنلاین تادیاتو او د ټولو افغانانو لپاره خوندي بنسټ سره.
              </p>
              <p>
                نن ورځ SafiPay نور یوازې یو فکر نه دی؛ لومړنی ویب‌سایټ او اپلیکیشن تیار شوي، تخنیکي ټیم وده کوي او د سرمایه جذب کمپاین د نړیوالو مجوزونو او بشپړ پراختیا لپاره پیل شوی دی.
              </p>
              <p className="text-amber-400 font-semibold text-xl">
                SafiPay د هر یو افغان پورې اړه لري – که په کابل کې وي، که په پاریس، تورنټو یا سیدني.
              </p>
            </motion.div>
          </div>
        </section>

        {/* لیدلوري او ماموریت */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-right"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                  زمونږ لیدلوری
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  د افغانانو لپاره یو بشپړ ډیجیټل مالي اکوسیستم جوړول چې په هغه کې هر شخص – له لرې پرتو کلیو څخه تر نړۍ لویو ښارونو پورې – بې محدودیت بانکي حساب ولري، پیسې ولیږي او ترلاسه کړي، آنلاین خرید وکړي او په نړیوال اقتصاد کې برخه واخلي.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-right"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                  زمونږ ماموریت
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  هر افغان ته عصري، خوندي، ارزانه او بې سرحد بانکي خدمات وړاندې کول، د بشپړ شفافیت، لوړ امنیت او ټولو ته لاسرسي په تمرکز سره – پرته له دې چې موقعیت یا اقتصادي حالت ته پام وشي.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ارزښتونه */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              د SafiPay ارزښتونه
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "بشپړ شفافیت",
                  desc: "ټول لګښتونه، د پروژې پرمختګ او د پیسو کارول هر میاشت په عامه توګه راپور کیږي."
                },
                {
                  title: "امنیت لومړیتوب",
                  desc: "د لوړو کوډ کولو معیارونو، څو مرحلې احراز هویت او د درغلۍ ضد سیسټمونو کارول."
                },
                {
                  title: "ټولو ته لاسرسی",
                  desc: "خدمات د ټولو افغانانو لپاره – پرته له جنسیت، موقعیت، مالي حالت یا تعلیمي کچې."
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.2 }}
                  className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-900/30 text-right"
                >
                  <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* وروستی کال تو اکشن */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              زمونږ سره یوځای شئ
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16"
            >
              SafiPay د هر یو افغان پورې اړه لري. ستاسو ملاتړ نه یوازې مالي مرسته ده، بلکې د میلیونونو افغانانو د مالي راتلونکي لپاره یو پانګونه ده.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/invest"
                className="px-12 py-7 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
              >
                مالي ملاتړ وکړئ
              </Link>

              <Link
                href="/contact"
                className="px-12 py-7 text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-xl transition-all"
              >
                موږ سره اړیکه ونیسئ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}