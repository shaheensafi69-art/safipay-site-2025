'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="rtl">
      
      {/* بخش هیرو - معرفی کلی */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm"
          >
            تغییر پارادایم مالی افغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-l from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            ما مرزهای بانکی را <br /> جابه‌جا می‌کنیم
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay صرفاً یک اپلیکیشن نیست؛ یک زیرساخت انقلابی است که با هدف دموکراتیزه کردن دسترسی به سیستم‌های مالی بین‌المللی برای هر شهروند افغان، در هر کجای دنیا، بنا شده است.
          </motion.p>
        </div>
      </section>

      {/* بخش بنیان‌گذاران - جزئیات دقیق و تخصصی */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* شاهین صافی - مدیرعامل */}
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
                  شاهین صافی (متولد ۲۰۰۳)، استراتژیست فین‌تک و معمار سیستم‌های پرداخت دیجیتال است. او با دیدگاهی فراتر از مرزهای سنتی، مسئولیت هدایت کلان پروژه SafiPay و نظارت بر توسعه زیرساخت‌های فنی را بر عهده دارد. 
                </p>
                <p>
                  شاهین با تسلط بر اکوسیستم‌های بانکی اروپا و شناخت دقیق از چالش‌های اقتصادی افغانستان، توانسته است مدلی را طراحی کند که امنیت در سطح استانداردهای جهانی را با سهولت دسترسی برای کاربران داخلی ترکیب کند. تخصص او در حل مسائل پیچیده بانکی و مدیریت بحران‌های مالی، موتور محرک صافی‌پی در مسیر تبدیل شدن به اولین نئوبانک افغان است.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">تخصص فنی</h4>
                  <p className="text-sm text-gray-400">معماری سیستم‌های ابری، امنیت پرداخت و بلاکچین</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">رهبری</h4>
                  <p className="text-sm text-gray-400">مدیریت استراتژیک و توسعه بین‌المللی کسب‌وکار</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* مجتبی رحمانی - هم‌بنیان‌گذار */}
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
                  مجتبی رحمانی (متولد ۲۰۰۶)، متخصص ارتباطات استراتژیک و توسعه برند است. او مسئولیت حیاتی مدیریت روابط عمومی، گسترش نفوذ برند در بازارهای جهانی و ایجاد پل‌های ارتباطی میان صافی‌پی و جامعه بزرگ افغان‌های خارج از کشور را بر عهده دارد.
                </p>
                <p>
                  مجتبی با استفاده از توانایی‌های منحصر‌به‌فرد در مذاکره و درک روان‌شناسی بازار، نقش کلیدی در جلب اعتماد سرمایه‌گذاران و ایجاد تصویر برند صافی‌پی به عنوان یک نهاد مالی باثبات و مردمی ایفا می‌کند. ماموریت او فراتر از تبلیغات، ایجاد یک فرهنگ مالی جدید برای نسل جوان افغانستان است.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">ارتباطات</h4>
                  <p className="text-sm text-gray-400">برندینگ استراتژیک، مذاکرات تجاری و روابط عمومی</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">توسعه</h4>
                  <p className="text-sm text-gray-400">گسترش شبکه مشتریان و جذب حمایت‌های بین‌المللی</p>
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

      {/* بخش چشم‌انداز و ماموریت */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">ماموریت ما</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              ماموریت ما در SafiPay این است که به هر افغان قدرت مالی ببخشیم. ما با بهره‌گیری از تکنولوژی‌های نوظهور، هزینه‌های انتقال پول را به حداقل می‌رسانیم و دسترسی به کارت‌های اعتباری بین‌المللی و حساب‌های چندارزی را که زمانی برای مردم ما یک رویا بود، به یک واقعیت روزمره تبدیل می‌کنیم.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">چشم‌انداز ۲۰۳۰</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              ما در حال ساختن آینده‌ای هستیم که در آن هیچ افغانی به دلیل موقعیت جغرافیایی از اقتصاد دیجیتال حذف نشود. چشم‌انداز ما تبدیل شدن به بزرگترین زیرساخت مالی در منطقه و پیشرو در ارائه خدمات نئوبانک برای جوامع در حال توسعه است.
            </p>
          </div>
        </div>
      </section>

      {/* چرا ما؟ - ارزش‌های سازمانی */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">ستون‌های اخلاقی و فنی SafiPay</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "شفافیت مطلق", 
              desc: "ما معتقدیم اعتماد با پنهان‌کاری به دست نمی‌آید. تمامی فرآیندهای مالی و هزینه‌ها در صافی‌پی با شفافیت کامل گزارش می‌شوند." 
            },
            { 
              title: "امنیت بانکی ارتقایافته", 
              desc: "با استفاده از پروتکل‌های رمزنگاری پیشرفته و احراز هویت بیومتریک، ما امنیت دارایی‌های کاربران را بالاتر از استانداردهای سنتی تضمین می‌کنیم." 
            },
            { 
              title: "فراگیری مالی", 
              desc: "خدمات ما بدون تبعیض جنسیتی، طبقاتی یا جغرافیایی طراحی شده است تا دورافتاده‌ترین نقاط افغانستان را به بازارهای جهانی متصل کند." 
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

      {/* بخش دعوت به همکاری */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6">در این انقلاب مالی سهیم باشید</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            ما در حال تغییر سرنوشت مالی یک ملت هستیم. چه به عنوان کاربر، چه به عنوان سرمایه‌گذار، جای شما در SafiPay خالی است.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">سرمایه‌گذاری</Link>
            <Link href="/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">تماس با تیم اجرایی</Link>
          </div>
        </div>
      </section>

    </div>
  );
}