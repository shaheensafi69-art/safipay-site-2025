// src/app/(fa)/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      {/* ===============================================
                    هیرو اصلی - بزرگ و با انیمیشن
      =============================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 py-32 overflow-hidden">
        {/* پس‌زمینه گرادیان + افکت ملایم */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/15 via-transparent to-black pointer-events-none" />

        {/* لوگو بزرگ و نیمه‌شفاف پشت متن‌ها */}
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
                اولین بانک دیجیتال بین‌المللی افغان‌ها
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            میلیون‌ها افغان هنوز به سیستم بانکی جهانی دسترسی ندارند. ما این مشکل را حل می‌کنیم.
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
              مشکلات را ببینید
            </Link>

            <Link
              href="/invest"
              className="group px-10 py-6 text-xl md:text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:text-white rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-900/50"
            >
              حمایت کنید
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===============================================
                     مشکلات بانکداری در افغانستان
      =============================================== */}
      <section id="problems" className="py-32 bg-black/50 border-t border-b border-amber-900/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-red-500"
          >
            مشکلات بانکداری در افغانستان
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: 'عدم دسترسی گسترده به خدمات بانکی',
                desc: 'بیش از ۸۵–۹۰٪ مردم (به ویژه روستایی‌ها و زنان) حساب بانکی ندارند. بانک‌ها فقط در شهرهای بزرگ شعبه دارند و بسیاری از مناطق هیچ دسترسی‌ای ندارند.',
              },
              {
                title: 'فقدان کارت‌های بین‌المللی واقعی',
                desc: 'تقریباً هیچ بانک افغانی کارت ویزا یا مسترکارت واقعی صادر نمی‌کند. کارت‌های موجود معمولاً فقط داخلی هستند یا محدودیت شدید دارند و در خارج از کشور کار نمی‌کنند.',
              },
              {
                title: 'سیستم انتقال پول غیررسمی و گران',
                desc: 'مردم مجبور به استفاده از صرافی‌ها و حواله‌چی‌ها هستند که کارمزد ۵–۱۵٪ می‌گیرند. ریسک کلاهبرداری، گم شدن پول و عدم پیگیری بسیار بالاست.',
              },
              {
                title: 'عدم اتصال به سیستم‌های پرداخت جهانی',
                desc: 'افغانستان از سیستم SWIFT به طور کامل استفاده نمی‌کند. پرداخت آنلاین به سایت‌های بین‌المللی (آمازون، گوگل، اپل، نتفلیکس و ...) تقریباً غیرممکن است.',
              },
              {
                title: 'تحریم‌ها و محدودیت‌های بانکی',
                desc: 'بانک‌های افغانی از سیستم بانکی جهانی قطع یا محدود هستند. نقل‌وانتقال دلار و ارز خارجی بسیار سخت، گران و زمان‌بر است.',
              },
              {
                title: 'نبود بانکداری دیجیتال پیشرفته',
                desc: 'اپلیکیشن‌های بانکی موجود بسیار ابتدایی، کند و غیرامن هستند. احراز هویت دیجیتال (KYC آنلاین) تقریباً وجود ندارد و امنیت پایین است.',
              },
              {
                title: 'نبود زیرساخت‌های امنیتی و شفافیت',
                desc: 'پولشویی و تقلب بالا به دلیل نبود سیستم AML/KYC قوی. مردم اعتماد کمی به سیستم بانکی رسمی دارند و بیشتر به پول نقد یا دلار فیزیکی وابسته‌اند.',
              },
              {
                title: 'مشکلات نقدینگی و تورم شدید',
                desc: 'برای حفظ ارزش پول، مردم به دلار روی می‌آورند، اما دسترسی به دلار فیزیکی یا دیجیتال بسیار سخت و پرریسک است.',
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

      {/* ===============================================
                      راه‌حل‌های SafiPay
      =============================================== */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-amber-500"
          >
            SafiPay چگونه این مشکلات را حل می‌کند؟
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                problem: 'عدم دسترسی گسترده به خدمات بانکی',
                solution: 'حساب بانکی بین‌المللی دیجیتال برای هر افغان (داخل و خارج کشور) بدون نیاز به مراجعه حضوری',
              },
              {
                problem: 'فقدان کارت‌های بین‌المللی',
                solution: 'صدور فوری کارت ویزا مجازی + کارت فیزیکی قابل استفاده در تمام فروشگاه‌های جهان و آنلاین',
              },
              {
                problem: 'سیستم انتقال پول غیررسمی و گران',
                solution: 'انتقال پول سریع و ارزان (کمتر از ۱٪ کارمزد) به سراسر جهان با پیگیری کامل',
              },
              {
                problem: 'عدم اتصال به سیستم‌های پرداخت جهانی',
                solution: 'اتصال مستقیم به شبکه‌های پرداخت بین‌المللی و امکان خرید آنلاین بدون محدودیت',
              },
              {
                problem: 'تحریم‌ها و محدودیت‌های بانکی',
                solution: 'زیرساخت قانونی و بین‌المللی برای دور زدن محدودیت‌ها با رعایت کامل قوانین جهانی',
              },
              {
                problem: 'نبود بانکداری دیجیتال پیشرفته',
                solution: 'اپلیکیشن مدرن، سریع، امن با احراز هویت دیجیتال کامل (KYC آنلاین)',
              },
              {
                problem: 'نبود زیرساخت‌های امنیتی و شفافیت',
                solution: 'سیستم AML/KYC قوی، گزارش‌دهی شفاف ماهانه، رمزنگاری پیشرفته و پشتیبانی ۲۴/۷',
              },
              {
                problem: 'مشکلات نقدینگی و تورم شدید',
                solution: 'حساب چندارزی دیجیتال با امکان نگهداری و تبدیل آسان دلار، یورو و سایر ارزها',
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
                  مشکل: {item.problem}
                </h3>
                <div className="text-lg text-amber-400 font-semibold mb-3">
                  راه‌حل SafiPay:
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
              با SafiPay، هر افغان می‌تواند آزادانه در اقتصاد جهانی شرکت کند
            </p>
            <Link
              href="/invest"
              className="inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
            >
              همین حالا با ما همراه شوید
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}