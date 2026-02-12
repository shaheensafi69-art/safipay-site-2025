'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail 
} from 'lucide-react';
import Image from 'next/image';

export default function PartnershipPageFA() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-8"
          >
            <Handshake size={16} />
            <span>فرصت‌های همکاری استراتژیک ۲۰۲۶</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent leading-tight">
            با اکوسیستم Safi <br /> آینده را رهبری کنید
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-light">
            ما در حال ساختن یک زیرساخت مالی نوین برای میلیون‌ها کاربر هستیم. از نئوبانک پیشرفته تا سیستم پرداخت آنی، Safi فضایی برای مشارکت‌های هوشمندانه و تغییرات بزرگ است.
          </p>
        </div>
      </section>

      {/* --- Ecosystem Section (SafiPay & Safi TopUp) --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* SafiPay */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[3rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Globe size={120} />
            </div>
            <h3 className="text-3xl font-black text-amber-500 mb-4">SafiPay</h3>
            <p className="text-gray-400 mb-6 text-lg">اولین نئوبانک دیجیتال متمرکز بر دسترسی جهانی برای اتباع افغانستان. سیستم بانکداری بدون مرز با استانداردهای امنیتی اروپا.</p>
            <div className="flex gap-4 items-center text-sm font-bold text-white/60">
               <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">بانکداری دیجیتال</span>
               <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">کارت‌های بین‌المللی</span>
            </div>
          </motion.div>

          {/* Safi TopUp */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[3rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Zap size={120} />
            </div>
            <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-black text-amber-500">Safi TopUp</h3>
                <span className="text-[10px] bg-amber-500/20 text-amber-500 px-2 py-1 rounded-lg">در حال توسعه</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">پلتفرم فوق‌سریع شارژ خدمات دیجیتال، گیفت‌کارت و پرداخت‌های اعتباری جهانی. پلی بین ارزهای محلی و خدمات بین‌المللی.</p>
            <div className="flex gap-4 items-center text-sm font-bold text-white/60">
               <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">پرداخت آنی</span>
               <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">خدمات دیجیتال</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Partners Section (Wallester) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">شرکای تجاری و تکنولوژی</h2>
            <p className="text-gray-500 italic">همکاری با معتبرترین نهادهای مالی جهان برای تضمین کیفیت</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 p-12 rounded-[4rem] border border-white/10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 relative flex-shrink-0 bg-white rounded-[2rem] p-6 flex items-center justify-center">
                {/* لوگوی Wallester باید اینجا قرار بگیرد */}
                <span className="text-black font-black text-2xl uppercase">Wallester</span>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4">Wallester AS</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  ما مفتخریم که از زیرساخت‌های **Wallester**، یکی از برترین موسسات دارای مجوز VISA در اروپا، برای صدور کارت‌های اعتباری و نقدی خود استفاده می‌کنیم. این همکاری به کاربران SafiPay اجازه می‌دهد تا از کارت‌های اختصاصی با قابلیت استفاده در بیش از ۲۰۰ کشور جهان بهره‌مند شوند.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-sm font-bold">
                  <li className="flex items-center gap-2 text-amber-500/80"><ShieldCheck size={16}/> صدور کارت‌های VISA</li>
                  <li className="flex items-center gap-2 text-amber-500/80"><ShieldCheck size={16}/> استانداردهای PCI-DSS</li>
                  <li className="flex items-center gap-2 text-amber-500/80"><ShieldCheck size={16}/> لایه امنیتی 3D Secure</li>
                  <li className="flex items-center gap-2 text-amber-500/80"><ShieldCheck size={16}/> پرداخت‌های Apple Pay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Partnership Tiers --- */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">مسیرهای مشارکت</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: "شریک استراتژیک", 
              desc: "ویژه موسسات مالی و سرمایه‌گذاران خطرپذیر (VC) که تمایل به مشارکت در لایه‌های بنیادی پروژه دارند.",
              icon: <BarChart3 size={32} />
            },
            { 
              title: "همکار تکنولوژی", 
              desc: "برای شرکت‌های نرم‌افزاری و فین‌تک جهت ادغام سرویس‌های پرداخت و APIهای متقابل.",
              icon: <Rocket size={32} />
            },
            { 
              title: "نماینده منطقه‌ای", 
              desc: "برای کسب‌وکارهایی که تمایل دارند خدمات Safi را در مناطق جغرافیایی خاص گسترش دهند.",
              icon: <Globe size={32} />
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all group">
              <div className="mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-8 font-light text-sm">{item.desc}</p>
              <button className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                ارسال درخواست همکاری <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA / Contact --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-amber-900/40">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8">آماده گفتگو هستید؟</h2>
              <p className="max-w-2xl mx-auto text-white/80 text-lg mb-12">
                برای دریافت **Pitch Deck** (طرح توجیهی) و اطلاعات تکمیلی در مورد نحوه مشارکت، از طریق فرم زیر با دپارتمان توسعه تجارت ما در تماس باشید.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="mailto:partnership@safipay.net" 
                  className="bg-white text-black px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
                >
                  <Mail size={20} /> ایمیل مستقیم
                </a>
                <button className="bg-black text-white px-10 py-4 rounded-2xl font-black border border-white/20 hover:bg-black/80 transition-all">
                  درخواست مستندات فنی
                </button>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}