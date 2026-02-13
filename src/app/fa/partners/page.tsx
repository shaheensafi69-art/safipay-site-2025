'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, Cpu, Landmark, BadgeCheck, ShieldAlert
} from 'lucide-react';

export default function PersianElitePartnership() {
  const containerRef = useRef(null);
  
  // تنظیمات اسکرول برای حرکت فوق‌العاده نرم ماشین
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, 
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30 text-right" dir="rtl">
      
      {/* --- ۱. بخش هیرو (قهرمان) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              شبکه مالی مستقل و جهانی ۲۰۲۶
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.75] mb-16 italic tracking-tighter">
              قدرت <br/> <span className="text-amber-500 text-glow text-8xl md:text-[12rem]">بی‌رقیب.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed">
              اکوسیستم صافی تنها یک اپلیکیشن نیست؛ یک زیرساخت جهانی است که حاکمیت مالی را برای بیش از ۴۰ میلیون کاربر تعریف می‌کند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ۲. والستر (ستون بانکی) --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">ستون استراتژیک اول: Wallester AS</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">هسته بانکی <br/> اروپایی.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              ما با **Wallester AS**، موسسه مالی دارای مجوز و عضو اصلی VISA در استونی، وارد شراکت مستقیم شده‌ایم. این یک اتصال ساده نیست؛ بلکه یک دسترسی مستقیم به شبکه مالی اروپا است. در حالی که بانک‌های منطقه با تحریم‌ها و سیستم‌های قدیمی دست و پنجه نرم می‌کنند، کاربران صافی‌پی از مزایای زیر بهره‌مند می‌شوند:
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold">بالاترین سطح امنیت جهانی</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold">صدور رسمی کارت‌های ویزا</p>
                </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(245,158,11,0.4)' }}
            className="lg:col-span-6 order-1 lg:order-2 p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden transition-all duration-500 shadow-2xl"
          >
             <CreditCard size={180} className="absolute -left-10 -top-10 opacity-5" />
             <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> حساب‌های شخصی با IBAN اروپایی</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> صدور آنی کارت‌های مجازی ویزا</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> تسویه حساب جهانی SEPA و SWIFT</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> مدیریت دارایی‌های متصل به یورو</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- ۳. دینگ (اتصال جهانی) --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 transition-all duration-500"
          >
                <h4 className="text-blue-500 font-black mb-8">گستره زیرساخت</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">500+</div>
                        <div className="text-[10px] text-gray-500 uppercase">اپراتور جهانی</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">150+</div>
                        <div className="text-[10px] text-gray-500 uppercase">کشور پوشش‌دهی</div>
                    </div>
                </div>
          </motion.div>
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">ستون استراتژیک دوم: Ding Network</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">اتصال <br/> توقف‌ناپذیر.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              **Ding** بزرگترین موتور شارژ موبایل در جهان است. صافی تاپ‌آپ با استفاده از این شبکه، شارژ آنی، بسته‌های انترنت و خدمات E-SIM را فراهم می‌کند. برای اولین بار، کاربران در مناطق دشوار می‌توانند با تاخیر ۰.۱ ثانیه به جهان متصل بمانند.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">تسویه حساب آنی</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">آماده برای E-SIM 5G</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ۴. خدمات صافی --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">لیست خدمات <span className="text-amber-500 text-glow">اختصاصی.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">آنچه در صافی تجربه می‌کنید، فرسنگ‌ها جلوتر از بانکداری سنتی است.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { t: "کارت مجازی ویزا", d: "صدور در چند ثانیه. قابل استفاده برای تبلیغات فیس‌بوک، گوگل کلاد، نتفلیکس، آمازون و بیش از ۱۰۰ میلیون فروشگاه در سراسر جهان.", icon: <CreditCard className="text-amber-500" size={40}/> },
                { t: "حساب IBAN اروپایی", d: "حقوق یا پرداخت‌های فریلنسری خود را مستقیم از اروپا و آمریکا دریافت کنید. تحت نظارت مقامات مالی اتحادیه اروپا.", icon: <Globe className="text-amber-500" size={40}/> },
                { t: "سیم‌کارت الکترونیک (E-SIM)", d: "فعال‌سازی آنی برای ۱۵۰ کشور. از کابل تا دبی و پاریس بدون تعویض سیم‌کارت فیزیکی متصل بمانید.", icon: <Smartphone className="text-amber-500" size={40}/> },
                { t: "پل تبدیل کریپتو", d: "دارایی‌های دیجیتال خود را به صورت آنی به موجودی قابل خرج در کارت ویزا تبدیل کنید. سریع‌ترین مسیر نقدینگی.", icon: <Coins className="text-amber-500" size={40}/> },
                { t: "پنل تجاری اختصاصی", d: "برای بیزینس‌هایی که نیاز به پرداخت‌های ارزی به تامین‌کنندگان خارجی دارند. بدون محدودیت و بروکراسی.", icon: <Briefcase className="text-amber-500" size={40}/> },
                { t: "محافظ هوشمند دارایی", d: "هوش مصنوعی که هزینه‌های شما را مانیتور کرده و بهترین زمان تبدیل ارز را پیشنهاد می‌دهد.", icon: <Cpu className="text-amber-500" size={40}/> }
            ].map((srv, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ y: -15, backgroundColor: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.3)' }}
                    className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 transition-all duration-300 group"
                >
                    <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{srv.icon}</div>
                    <h4 className="text-2xl font-black mb-6 italic">{srv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{srv.d}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- ۵. مقایسه با بانک‌های منطقه --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">فراتر از <span className="text-amber-500">مرزها.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 font-bold">
                <motion.div whileHover={{ scale: 0.98 }} className="p-12 bg-black rounded-[4rem] border border-red-500/20 text-right">
                    <ShieldAlert className="text-red-500 mb-8 mr-auto lg:mr-0" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-red-500">بانک‌های سنتی منطقه</h3>
                    <ul className="space-y-6 text-gray-600 text-sm">
                        <li>• شبکه‌های محدود و تحت تحریم شدید</li>
                        <li>• احراز هویت کاغذی (هفته‌ها زمان می‌برد)</li>
                        <li>• عدم پشتیبانی از پرداخت‌های جهانی (نتفلیکس/تبلیغات)</li>
                        <li>• هزینه‌های بالای حواله و سیستم‌های قدیمی</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)] text-right">
                    <BadgeCheck className="text-amber-500 mb-8 mr-auto lg:mr-0" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-amber-500">اکوسیستم جهانی صافی</h3>
                    <ul className="space-y-6 text-amber-400 text-sm">
                        <li>• زیرساخت دارای مجوز اتحادیه اروپا و عضو VISA</li>
                        <li>• احراز هویت با هوش مصنوعی (آماده در ۲ دقیقه)</li>
                        <li>• قبولی ۱۰۰٪ در تمامی درگاه‌های پرداخت جهانی</li>
                        <li>• تسویه‌ حساب‌های آنی و مبتنی بر API مدرن</li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- ۶. رودمپ با ماشین متحرک --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-7xl font-black text-center mb-60 italic tracking-tighter uppercase">مسیر <span className="text-amber-500 text-glow">پیشرفت.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]">
          {/* جاده */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full"
            />
          </div>

          {/* ماشین آهسته و لوکس */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50 flex flex-col items-center"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* مراحل جاده */}
          {[
            { phase: "فاز اول", title: "تولد سازمانی", desc: "نهایی‌سازی پروتکل‌های مجوز اتحادیه اروپا. ادغام کامل API با هسته بانکی Wallester AS. ایجاد پل‌های نقدینگی سطح یک.", year: "Q1 2026", y: "10%" },
            { phase: "فاز دوم", title: "توسعه اتصال", desc: "شراکت رسمی با Ding Global. راه‌اندازی صافی تاپ‌آپ برای ۵۰۰+ اپراتور. عرضه بسته‌های انترنت جهانی E-SIM.", year: "Q2 2026", y: "35%" },
            { phase: "فاز سوم", title: "تسلط بر بازار خرد", desc: "عرضه عمومی اپلیکیشن صافی‌پی (iOS/Android). صدور کارت‌های مجازی ویزا و حساب‌های IBAN برای عموم کاربران.", year: "Q3 2026", y: "60%" },
            { phase: "فاز چهارم", title: "حاکمیت فیزیکی", desc: "صدور کارت‌های فیزیکی تیتانیوم صافی. نصب ترمینال‌های پرداخت در بازارهای لوکس استانبول، دبی و کابل.", year: "Q4 2026", y: "85%" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${i % 2 !== 0 ? "justify-start text-right" : "justify-end text-left"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: i % 2 !== 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.5)' }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] transition-all shadow-2xl cursor-default"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em]">{step.year}</span>
                    <h4 className="text-amber-600 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ۷. فرم درخواست همکاری --- */}
      <section className="py-60 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic leading-[0.8]">به تیم <br/> <span className="text-amber-500">رهبری</span> بپیوندید.</h2>
                <p className="text-gray-400 text-2xl font-light">ما در حال گزینش ۵ پارتنر استراتژیک برای فاز توسعه Q3 هستیم. درخواست خود را برای رزرو جایگاه ارسال کنید.</p>
                <div className="flex items-center gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10">
                    <Landmark size={40} className="text-amber-500" />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-black">سطح همکاری سازمانی</p>
                        <p className="font-bold font-sans tracking-tighter">بررسی تاییدیه در کمتر از ۲۴ ساعت</p>
                    </div>
                </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl relative overflow-hidden"
            >
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">نام سازمان / نهاد</label>
                            <input name="entity" type="text" required placeholder="بانک / شرکت" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all text-left font-sans" dir="ltr" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">ایمیل رسمی</label>
                            <input name="email" type="email" required placeholder="ceo@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all text-left font-sans" dir="ltr" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">نوع همکاری استراتژیک</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400 font-sans">
                            <option>سرمایه‌گذاری نهادی</option>
                            <option>تامین‌کننده زیرساخت</option>
                            <option>توسعه بازار و نمایندگی</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">پیشنهاد اجرایی</label>
                        <textarea name="proposal" rows={6} required placeholder="چشم‌انداز و پتانسیل همکاری شما..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all shadow-[0_30px_60px_rgba(245,158,11,0.3)]">
                        شروع گفتگوهای استراتژیک
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* --- ۸. فوتر میراث --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-10 opacity-20 italic font-black text-[9px] uppercase tracking-[0.8em] font-sans">
            <span>Wallester Licensed</span>
            <span>Ding Official</span>
            <span>VISA Principal</span>
        </div>
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em] font-sans">SafiPay Global Infrastructure © 2026 | Built for the Frontier Markets.</p>
      </footer>
    </div>
  );
}