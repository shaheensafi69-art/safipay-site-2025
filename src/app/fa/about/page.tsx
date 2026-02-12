'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, Shield, Zap, CreditCard, ArrowRight, 
  BarChart3, Handshake, Users, Trophy, Target 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function HomePageFA() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'fa';

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30" dir="rtl">
      
      {/* --- بخش اول: هیرو (قدرت و تکنولوژی) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.2em] uppercase"
          >
            پیشرو در انقلاب بانکداری دیجیتال افغانستان
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              قدرت مالی در دستان شما
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            ما با تکیه بر تکنولوژی بلاک‌چین و زیرساخت‌های بانکی مدرن، سیستم مالی افغانستان را به بازارهای جهانی متصل کرده‌ایم. SafiPay نماد اقتدار و شفافیت مالی است.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href={`/${currentLang}/partners`}
              className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              همکاری استراتژیک <ArrowRight className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#leadership"
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all"
            >
              شناخت تیم رهبری
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- بخش دوم: درباره رهبران (شاهین و مجتبی) --- */}
      <section id="leadership" className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">معماران <span className="text-amber-500">آینده</span></h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">ترکیب تجربه مدیریتی و نبوغ تکنولوژیک برای خلق یک امپراتوری مالی.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* شاهین */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }}
              className="bg-black/50 p-10 rounded-[3rem] border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-3xl text-black">S</div>
                <div>
                  <h3 className="text-3xl font-black">شاهین</h3>
                  <p className="text-amber-500 font-bold uppercase tracking-widest">بنیان‌گذار و استراتژیست ارشد</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                شاهین با دیدگاهی تحول‌خواه، نیروی محرکه اصلی پشت اکوسیستم SafiPay است. او با درک عمیق از خلاءهای مالی در منطقه، استراتژی‌های کلانی را طراحی کرده که منجر به خروج افغانستان از انزوای بانکی می‌شود. تمرکز او بر ایجاد شبکه‌ای پایدار و نفوذ در بازارهای بین‌المللی، SafiPay را به یک نهاد قدرتمند تبدیل کرده است.
              </p>
            </motion.div>

            {/* مجتبی */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }}
              className="bg-black/50 p-10 rounded-[3rem] border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center font-black text-3xl text-black">M</div>
                <div>
                  <h3 className="text-3xl font-black">مجتبی</h3>
                  <p className="text-amber-500 font-bold uppercase tracking-widest">مدیر ارشد تکنولوژی (CTO)</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                مجتبی مغز متفکر بخش فنی و معماری سیستم‌های SafiPay است. او با تخصص در امنیت سایبری و سیستم‌های پرداخت غیرمتمرکز، پلتفرمی را بنا کرده که از نظر امنیت و سرعت با بانک‌های تراز اول جهان رقابت می‌کند. تحت نظارت او، SafiPay به تکنولوژی‌های نوین مجهز شده که شفافیت کامل و حفاظت از دارایی‌های کاربران را تضمین می‌کند.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- بخش سوم: ارزش‌های SafiPay --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 bg-black border border-white/5 rounded-[3rem] text-center group hover:bg-amber-500 transition-all duration-500">
              <Shield size={50} className="mx-auto mb-6 text-amber-500 group-hover:text-black" />
              <h4 className="text-2xl font-black mb-4 group-hover:text-black uppercase">امنیت پولادین</h4>
              <p className="text-gray-500 group-hover:text-black/80 font-light">استفاده از پروتکل‌های امنیتی پیشرفته برای تضمین امنیت صد در صدی تراکنش‌ها.</p>
            </div>
            <div className="p-12 bg-black border border-white/5 rounded-[3rem] text-center group hover:bg-amber-500 transition-all duration-500">
              <Trophy size={50} className="mx-auto mb-6 text-amber-500 group-hover:text-black" />
              <h4 className="text-2xl font-black mb-4 group-hover:text-black uppercase">استاندارد جهانی</h4>
              <p className="text-gray-500 group-hover:text-black/80 font-light">ارائه خدماتی که با قوانین مالی بین‌المللی و نیازهای کاربران مدرن مطابقت دارد.</p>
            </div>
            <div className="p-12 bg-black border border-white/5 rounded-[3rem] text-center group hover:bg-amber-500 transition-all duration-500">
              <Target size={50} className="mx-auto mb-6 text-amber-500 group-hover:text-black" />
              <h4 className="text-2xl font-black mb-4 group-hover:text-black uppercase">ماموریت ما</h4>
              <p className="text-gray-500 group-hover:text-black/80 font-light">حذف واسطه‌های ناکارآمد و بازگرداندن قدرت خرید و مدیریت مالی به مردم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- بخش آخر: فراخوان همکاری (بدون درخواست کمک) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-900 rounded-[4rem] p-16 text-center relative overflow-hidden"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight italic uppercase">
              به شبکه نخبگان مالی <br /> بپیوندید
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              SafiPay در حال گسترش مرزهای خود است. ما از شرکت‌ها و موسساتی که به دنبال تحول در نظام پرداخت هستند، دعوت به همکاری می‌کنیم.
            </p>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:scale-105 transition-all"
            >
              درخواست همکاری تجاری <Handshake size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}