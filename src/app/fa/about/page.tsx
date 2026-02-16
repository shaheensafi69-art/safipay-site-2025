'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote } from 'lucide-react'; // Added Banknote icon
import { usePathname } from 'next/navigation';

export default function AboutUsPage() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'fa';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- بخش هیرو (معرفی کلان) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            تغییر پارادایم مالی افغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            ما مرزهای بانکی را <br /> جابه‌جا می‌کنیم
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay صرفاً یک اپلیکیشن نیست؛ یک زیرساخت انقلابی است که با هدف دموکراتیزه کردن دسترسی به سیستم‌های مالی بین‌المللی برای هر شهروند افغان، بنا شده است.
          </motion.p>
        </div>
      </section>

      {/* --- بخش بنیان‌گذاران و تیم --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* شاهین صافی - Founder & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Shaheen Safi - Founder & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">CEO / FOUNDER</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> رهبری و استراتژی
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهین صافی <span className="text-gray-600 text-3xl font-light block mt-2">Shaheen Safi</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  شاهین صافی (متولد ۲۰۰۳)، استراتژیست فین‌تک و معمار اصلی سیستم‌های پرداخت SafiPay است. او با درک عمیق از انزوای مالی افغانستان، مسئولیت هدایت کلان پروژه و مهندسی روابط بین‌المللی با غول‌های بانکی دنیا را بر عهده دارد.
                </p>
                <p>
                  تخصص او در ترکیب تکنولوژی‌های ابری و متدهای بانکداری نوین اروپا، به SafiPay این قدرت را داده است که به عنوان اولین نئوبانک واقعی افغان، استانداردهای امنیتی را بازتعریف کند. شاهین با دیدگاهی مقتدرانه، به دنبال بازگرداندن اعتبار به هویت مالی شهروندان افغان در بازارهای جهانی است.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">مدیریت استراتژیک</h4>
                  <p className="text-sm text-gray-500">توسعه بیزنس مدال و جذب شرکای بانکی</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">حل بحران مالی</h4>
                  <p className="text-sm text-gray-500">طراحی راهکارهای عبور از تحریم‌های بانکی</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sahel Salem - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> اکوسیستم بانکداری
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم <span className="text-gray-600 text-3xl font-light block mt-2">Sahel Salem</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  ساحل سالم (متولد ۲۰۰۷)، مغز متفکر پشت اکوسیستم بانکداری و حساب‌های کاربری SafiPay است. او مسئول طراحی و اجرای چارچوب‌های مالی است که به کاربران افغان امکان دسترسی بی‌سابقه به خدمات بانکی بین‌المللی و مدیریت حساب‌های خود را می‌دهد.
                </p>
                <p>
                  تخصص ساحل در ایجاد جریان‌های مالی روان و ایمن، تضمین می‌کند که هر کاربر SafiPay تجربه‌ای بی‌نظیر از بانکداری دیجیتال داشته باشد. او با تمرکز بر شفافیت و دسترس‌پذیری، پایه‌های یک اکوسیستم مالی عادلانه را برای افغانستان بنا می‌کند.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Globe className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">توسعه اکوسیستم</h4>
                  <p className="text-sm text-gray-500">ایجاد پل‌های ارتباطی با شبکه‌های مالی جهانی</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Shield className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">مدیریت حساب‌ها</h4>
                  <p className="text-sm text-gray-500">طراحی سیستم‌های نوین برای حساب‌های بانکی</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/sahel.jpeg" // Make sure this path is correct
                  alt="Sahel Salem - Head of Ecosystem Banking" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                ECOSYSTEM LEAD
              </div>
            </motion.div>
          </div>

          {/* مجتبی رحمانی - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> مهندسی و امنیت
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبی رحمانی <span className="text-gray-600 text-3xl font-light block mt-2">Mujtaba Rahmani</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  مجتبی رحمانی (متولد ۲۰۰۶)، مدیر ارشد تکنولوژی و معمار امنیت سایبری SafiPay است. او ستون فقرات فنی پلتفرم را بنا کرده و مسئولیت تضمین نفوذناپذیری و پایداری سیستم‌های تراکنش در لحظه را بر عهده دارد.
                </p>
                <p>
                  مجتبی با نبوغ خود در توسعه نرم‌افزارهای مقیاس‌پذیر و درک عمیق از زیرساخت‌های پرداخت، توانسته است سیستمی را خلق کند که از نظر سرعت و دقت با بانک‌های تراز اول جهان رقابت می‌کند. ماموریت او ساختن دژ دیجیتالی است که در آن دارایی‌های کاربران تحت هر شرایطی محافظت شوند.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">معماری سیستم</h4>
                  <p className="text-sm text-gray-500">توسعه بک‌اند و میکروسرویس‌های مالی</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">امنیت سایبری</h4>
                  <p className="text-sm text-gray-500">رمزنگاری پیشرفته و حفاظت از داده‌ها</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani - CTO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / ARCHITECT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- چشم‌انداز و ارزش‌ها --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "امنیت مطلق", desc: "استفاده از پروتکل‌های رمزنگاری لایه‌بندی شده برای تضمین امنیت تراکنش‌ها.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "اتصال جهانی", desc: "باز کردن دروازه‌های اقتصاد دیجیتال به روی افغانستان بدون واسطه‌های سنتی.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "نوآوری بی‌وقفه", desc: "توسعه مداوم قابلیت‌های نئوبانک برای انطباق با نیازهای نسل آینده.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- بخش نهایی (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">آماده همکاری هستید؟</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                ما در SafiPay به دنبال ایجاد شبکه نخبگان مالی و شرکای استراتژیک بین‌المللی هستیم.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                ارسال درخواست شراکت تجاری <ArrowRight className="rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}