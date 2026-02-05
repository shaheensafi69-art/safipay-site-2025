'use client';
import { motion } from 'framer-motion';

export default function InvestPage() {
  const CAMPAIGN_LINK = "https://gogetfunding.com/safipay-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%a8%d8%a7%d9%86%da%a9-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84-%d8%a8%d8%b1%d8%a7%db%8c-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86%d9%87%d8%a7-%d8%a7/";
  const raised = 0;
  const goal = 80000;
  const percentage = Math.round((raised / goal) * 100);
  const donors = 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white" dir="rtl">
      {/* هیرو */}
      <section className="relative py-24 md:py-32 border-b border-amber-900/30 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/15 to-transparent pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
          >
            آینده افغانستان را
            <span className="text-amber-500 block mt-4">با حمایت شما می‌سازیم</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            SafiPay اولین بانک دیجیتال بین‌المللی برای مردم افغانستان است.
            برای گرفتن مجوزهای بانکی، توسعه فنی، امنیت پیشرفته و راه‌اندازی کامل به حمایت شما نیاز داریم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-amber-500 mb-4"
          >
            هدف ما: ۸۰,۰۰۰ دلار
          </motion.div>
        </div>
      </section>

      {/* پیشرفت کمپین */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto bg-gray-900/70 border border-amber-900/40 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-amber-900/30 backdrop-blur-sm"
          >
            <div className="text-8xl md:text-10xl font-black text-amber-500 mb-6">
              {percentage}%
            </div>

            <div className="w-full bg-gray-800 rounded-full h-6 mb-10 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-600 to-amber-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  ${raised.toLocaleString('fa-IR')}
                </div>
                <p className="text-xl text-gray-400">جمع‌آوری شده</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  ${goal.toLocaleString('fa-IR')}
                </div>
                <p className="text-xl text-gray-400">هدف</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  {donors.toLocaleString('fa-IR')}
                </div>
                <p className="text-xl text-gray-400">حامی عزیز</p>
              </div>
            </div>

            <p className="mt-12 text-lg text-gray-400">
              آخرین به‌روزرسانی: {new Date().toLocaleString('fa-IR')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* دکمه‌های حمایت */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            حمایت شما همین حالا تفاوت ایجاد می‌کند
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
            <a
              href={`${CAMPAIGN_LINK}?amount=10`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                ۱۰ دلار
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                کمک کوچک
              </span>
            </a>

            <a
              href={`${CAMPAIGN_LINK}?amount=25`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                ۲۵ دلار
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                حمایت خوب
              </span>
            </a>

            <a
              href={`${CAMPAIGN_LINK}?amount=50`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                ۵۰ دلار
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                حمایت قوی
              </span>
            </a>

            <a
              href={`${CAMPAIGN_LINK}?amount=100`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                ۱۰۰ دلار
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                حمایت بزرگ
              </span>
            </a>

            <a
              href={CAMPAIGN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 lg:col-span-1 group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-2xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block group-hover:text-white transition-colors text-2xl md:text-3xl mb-2">
                مبلغ دلخواه
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                هر چقدر دوست دارید
              </span>
            </a>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              تمام کمک‌ها مستقیماً برای توسعه فنی، امنیت، مجوزها و راه‌اندازی واقعی استفاده می‌شود.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              گزارش ماهانه کامل و شفاف به همه حامیان عزیز ارائه خواهد شد.
            </p>
          </div>
        </div>
      </section>

      {/* کال تو اکشن نهایی */}
      <section className="py-20 bg-gradient-to-t from-amber-950/20 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            هر دلار شما نه تنها به ساخت اولین بانک دیجیتال افغان‌ها کمک می‌کند، بلکه آینده مالی میلیون‌ها نفر را تغییر می‌دهد.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            href="/contact"
            className="inline-block mt-10 px-12 py-6 text-xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-xl transition-all"
          >
            سوال دارید؟ تماس بگیرید
          </motion.a>
        </div>
      </section>
    </div>
  );
}