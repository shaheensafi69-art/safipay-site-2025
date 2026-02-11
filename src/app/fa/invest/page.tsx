'use client';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function InvestPageFA() {
  const CAMPAIGN_LINK = "https://gogetfunding.com/safipay-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%a8%d8%a7%d9%86%da%a9-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84-%d8%a8%d8%b1%d8%a7%db%8c-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86%d9%87%d8%a7-%d8%a7/";
  const raised = 0;
  const goal = 80000;
  const percentage = Math.round((raised / goal) * 100);
  const donors = 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* --- بخش هیرو (Hero Section) --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -mr-48 -mt-48" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-8"
          >
            <Target size={16} />
            <span>کمپین رسمی جذب سرمایه و حمایت مردمی</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent leading-tight"
          >
            آینده مالی افغانستان را <br /> با دستان خود بسازیم
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-light"
          >
            سافی‌پی (SafiPay) در حال ساخت اولین نئوبانک جهانی برای افغان‌هاست. با حمایت شما، ما مجوزهای لازم را اخذ، 
            تکنولوژی‌های امنیتی را توسعه و شکاف مالی میلیون‌ها نفر را پر خواهیم کرد.
          </motion.p>
        </div>
      </section>

      {/* --- بخش پیشرفت سرمایه (Progress Section) --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-l from-amber-600/20 to-amber-900/20 blur-3xl opacity-30 rounded-[3rem]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-900/50 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="text-right">
                <span className="text-gray-500 uppercase tracking-widest font-bold text-sm">هدف نهایی کمپین</span>
                <div className="text-5xl md:text-7xl font-black text-white mt-2" dir="ltr">
                  ${goal.toLocaleString()}
                </div>
              </div>
              <div className="text-left">
                <div className="text-6xl md:text-8xl font-black text-amber-500" dir="ltr">
                  {percentage}%
                </div>
                <span className="text-amber-500/60 uppercase tracking-widest font-bold text-sm">تکمیل شده</span>
              </div>
            </div>

            {/* نوار پیشرفت مدرن */}
            <div className="relative w-full h-8 bg-black/50 rounded-full border border-white/5 overflow-hidden mb-12 shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 2, ease: "circOut" }}
                className="absolute top-0 right-0 h-full bg-gradient-to-l from-amber-700 via-amber-500 to-yellow-400 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1" dir="ltr">${raised.toLocaleString()}</div>
                <div className="text-sm text-gray-500 font-bold tracking-tighter">مبلغ جمع‌آوری شده</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{donors.toLocaleString()}</div>
                <div className="text-sm text-gray-500 font-bold tracking-tighter">حامیان آینده‌نگر</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-amber-500/80 font-mono">آخرین بروزرسانی: {new Date().toLocaleDateString('fa-IR')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- کارت‌های انتخاب مبلغ (Donation Cards) --- */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">میزان تاثیرگذاری خود را انتخاب کنید</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { amount: 10, label: "حامی همدل", desc: "کمکی کوچک، قلبی بزرگ" },
              { amount: 25, label: "همراه رشد", desc: "تقویت زیرساخت‌های ما" },
              { amount: 100, label: "سفیر تغییر", desc: "نقش کلیدی در موفقیت" },
              { amount: "دلخواه", label: "شریک استراتژیک", desc: "میراث خود را بسازید", custom: true }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.custom ? CAMPAIGN_LINK : `${CAMPAIGN_LINK}?amount=${item.amount}`}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-[2rem] border transition-all flex flex-col items-center justify-center gap-4 ${
                  item.amount === 100 ? 'bg-amber-500 border-amber-500 text-black' : 'bg-gray-900/50 border-white/10 hover:border-amber-500/50'
                }`}
              >
                <span className={`text-4xl font-black ${item.amount === 100 ? 'text-black' : 'text-amber-500'}`} dir="ltr">
                  {typeof item.amount === 'number' ? `$${item.amount}` : item.amount}
                </span>
                <div className="text-center">
                  <div className={`font-bold tracking-widest text-sm ${item.amount === 100 ? 'text-black/80' : 'text-white'}`}>
                    {item.label}
                  </div>
                  <div className={`text-xs mt-1 ${item.amount === 100 ? 'text-black/60' : 'text-gray-500'}`}>
                    {item.desc}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- بخش شفافیت (Transparency) --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1 text-right">
            <h2 className="text-4xl font-bold">شفافیت کامل در عملکرد</h2>
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-amber-500" />, title: "تراکنش‌های امن", text: "تمام مبالغ از طریق پلتفرم بین‌المللی GoGetFunding با امنیت کامل جابجا می‌شوند." },
                { icon: <TrendingUp className="text-amber-500" />, title: "تخصیص استراتژیک", text: "سرمایه‌ها مستقیماً صرف اخذ مجوزهای بانکی و توسعه زیرساخت‌های فنی می‌شود." },
                { icon: <Users className="text-amber-500" />, title: "گزارش‌های ماهانه", text: "تمامی حامیان گزارش‌های دقیق ماهانه از نحوه هزینه‌کرد سرمایه‌ها دریافت می‌کنند." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-bl from-amber-600 to-amber-900 p-12 rounded-[3rem] text-center order-1 md:order-2 shadow-2xl shadow-amber-900/20">
            <h3 className="text-3xl font-black mb-6 italic text-white leading-relaxed">"روی یک ملت سرمایه‌گذاری کنید، <br /> نه فقط روی یک بانک."</h3>
            <p className="text-white/80 mb-8 font-light">هر سهم کوچک شما، ما را به استقلال مالی میلیون‌ها افغان نزدیک‌تر می‌کند.</p>
            <motion.a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
            >
              ارتباط با واحد سرمایه‌گذاری <ArrowLeft size={18} />
            </motion.a>
          </div>
        </div>
      </section>

    </div>
  );
}