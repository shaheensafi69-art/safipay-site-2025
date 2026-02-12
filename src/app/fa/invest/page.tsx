'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, Lock, HelpCircle
} from 'lucide-react';

export default function ComprehensivePartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* --- ۱. هدر حماسی و معرفی کلی --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter"
          >
            اکوسیستم <span className="text-amber-500">SAFI</span>
          </motion.h1>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
            ما در حال بازتعریف استانداردهای مالی و ارتباطی برای جامعه‌ای هستیم که سال‌ها از خدمات نوین جهانی محروم بوده‌اند. با SafiPay و Safi TopUp، مرزهای جغرافیایی دیگر مانعی برای پیشرفت مالی نخواهند بود.
          </p>
        </div>
      </section>

      {/* --- ۲. بخش تحلیلی: چرا اکوسیستم صافی؟ --- */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-500">حل چالش دسترسی</h3>
            <p className="text-gray-400 leading-relaxed">بیش از ۸۰٪ اتباع افغانستان به سیستم‌های پرداخت بین‌المللی دسترسی ندارند. صافی این شکاف را با تکنولوژی فین‌تک اروپا پر می‌کند.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-500">امنیت تراز اول</h3>
            <p className="text-gray-400 leading-relaxed">استفاده از پروتکل‌های امنیتی PCI-DSS و لایه‌های نظارتی هوشمند برای تضمین سلامت هر تراکنش در شبکه جهانی.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-500">اتصال بدون مرز</h3>
            <p className="text-gray-400 leading-relaxed">از پرداخت هزینه‌های دانشگاهی در اروپا تا شارژ موبایل در دورترین نقاط افغانستان؛ همه در یک اکوسیستم واحد.</p>
          </div>
        </div>
      </section>

      {/* --- ۳. کالبدشکافی SafiPay و مشارکت با Wallester --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
              Fintech Infrastructure
            </div>
            <h2 className="text-5xl font-black text-white">SafiPay: بانکداری فرامرزی</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              صافی‌پی تنها یک کیف‌پول ساده نیست؛ این یک نئوبانک کامل است که با همکاری مستقیم **Wallester AS** (موسسه مالی مجاز در استونی و عضو اصلی شبکه VISA) فعالیت می‌کند. این شراکت به ما اجازه می‌دهد تا حساب‌های بانکی با کد IBAN اختصاصی و کارت‌های نقدی (Debit Cards) با استاندارد جهانی صادر کنیم.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-500 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">صدور کارت فیزیکی و مجازی</h4>
                  <p className="text-gray-500 text-sm">کارت‌های رسمی VISA قابل استفاده در تمام ATMها و درگاه‌های آنلاین جهان.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-500 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">مدیریت دارایی ارزی</h4>
                  <p className="text-gray-500 text-sm">تبدیل آنی ارزها و نگهداری دارایی به صورت یورو و دلار.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gradient-to-br from-gray-900 to-black p-1 rounded-[3rem] border border-white/10 shadow-3xl">
            <div className="bg-[#0a0a0a] rounded-[2.8rem] p-10 space-y-8">
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-mono">PARTNER_DOSSIER: 01</span>
                  <div className="px-3 py-1 bg-white text-black text-[10px] font-black rounded-md uppercase">Verified Partner</div>
               </div>
               <div className="py-10 text-center border-y border-white/5">
                  <h3 className="text-4xl font-black mb-2">Wallester</h3>
                  <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Official White-Label Provider</p>
               </div>
               <p className="text-gray-400 text-sm italic leading-loose">
                 "Wallester به عنوان ستون فقرات بانکی ما، لایسنس‌های لازم و زیرساخت‌های API را فراهم می‌کند تا کاربران ما در هر جای دنیا بتوانند از خدمات اپل‌پِی (Apple Pay) و گوگل‌پِی (Google Pay) با هویت صافی‌پی استفاده کنند."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ۴. کالبدشکافی Safi TopUp و مشارکت با Ding --- */}
      <section className="py-24 container mx-auto px-6 bg-blue-500/[0.02] rounded-[5rem] my-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest">
              Global Connectivity
            </div>
            <h2 className="text-5xl font-black text-white">Safi TopUp: اتصال جهانی</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              صافی تاپ‌آپ انقلابی در دسترسی به خدمات مخابراتی است. از طریق پلتفرم ما و با تکیه بر شبکه عظیم **Ding**، کاربران می‌توانند برای بیش از ۵۰۰ اپراتور در سراسر جهان کریدت ارسال کنند. تمرکز ویژه ما بر افغانستان، امکان شارژ آنی اپراتورهای روشن، افغان‌بیسیم، اتصالات و ام‌تی‌ان را فراهم کرده است.
            </p>
            <div className="space-y-6">
               <div className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/5">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">تکنولوژی E-SIM</h4>
                    <p className="text-gray-400 text-sm">خرید و فعال‌سازی سیم‌کارت مجازی برای سفرهای بین‌المللی بدون نیاز به مراجعه حضوری. اینترنت پرسرعت در بیش از ۱۵۰ کشور.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/5">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">حمایت از خانواده</h4>
                    <p className="text-gray-400 text-sm">ارسال هدیه و شارژ برای اعضای خانواده در داخل افغانستان با ساده‌ترین روش پرداخت ارزی.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="relative p-12 bg-[#ff4d00]/10 border border-[#ff4d00]/20 rounded-[4rem] text-center overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12 underline">DING GLOBAL</div>
                <div className="w-24 h-24 bg-[#ff4d00] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#ff4d00]/40">
                  <span className="text-white font-black text-3xl italic">d.</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Ding Strategic Partner</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-light">
                  "تعامل مستقیم صافی تاپ‌آپ با APIهای Ding، سرعت تراکنش را به کمتر از ۳ ثانیه رسانده است. ما با افتخار از شبکه توزیع Ding برای پوشش جهانی خود استفاده می‌کنیم تا هیچ کاربری بدون ارتباط نماند."
                </p>
                <div className="flex justify-center gap-8">
                   <div className="text-center">
                      <div className="text-2xl font-black">500+</div>
                      <div className="text-[10px] text-gray-500 uppercase">Operators</div>
                   </div>
                   <div className="text-center">
                      <div className="text-2xl font-black">150+</div>
                      <div className="text-[10px] text-gray-500 uppercase">Countries</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- ۵. رودمپ یکپارچه ۲۰۲۶ (Safi Unified Roadmap) --- */}
      <section className="py-24 container mx-auto px-6 relative">
        <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-tighter">Safi Ecosystem Roadmap 2026</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { q: "Q1", title: "تثبیت زیرساخت", items: ["اخذ مجوزهای نهایی پرداخت", "تست بتای Safi TopUp", "اتصال به شبکه Wallester"] },
            { q: "Q2", title: "عرضه اولیه", items: ["لانچ رسمی SafiPay", "صدور اولین دسته کارت‌های فیزیکی", "بخش E-SIM جهانی"] },
            { q: "Q3", title: "گسترش بازار", items: ["ادغام سیستم Ding در کل اکوسیستم", "پشتیبانی از اپراتورهای منطقه‌ای", "نسخه تجاری (Business)"] },
            { q: "Q4", title: "هوشمندی مالی", items: ["سیستم پاداش و کش‌بک", "پرداخت‌های خودکار قبوض", "گسترش به بازارهای همسایه"] },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative group hover:bg-amber-500/5 transition-all">
              <div className="text-5xl font-black text-white/10 absolute top-4 left-4 group-hover:text-amber-500/20 transition-colors">{item.q}</div>
              <h4 className="text-xl font-bold mb-6 text-amber-500">{item.title}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {item.items.map((li, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" /> {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- ۶. سوالات متداول و شفاف‌سازی --- */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="mx-auto mb-4 text-gray-500" size={40} />
          <h2 className="text-4xl font-black italic">شفافیت و پاسخگویی</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "آیا سرمایه کاربران در SafiPay بیمه شده است؟", a: "بله، به واسطه همکاری با Wallester، تمام سپرده‌های ارزی طبق قوانین اتحادیه اروپا تا سقف ۱۰۰,۰۰۰ یورو تحت حفاظت هستند." },
            { q: "Safi TopUp چگونه قیمت‌ها را محاسبه می‌کند؟", a: "ما با استفاده از نرخ‌های مستقیم Ding و کمترین کارمزد ممکن، تلاش می‌کنیم ارزان‌ترین راهکار شارژ را برای جامعه افغانستان فراهم کنیم." },
            { q: "چگونه می‌توانیم به عنوان پارتنر تجاری همکاری کنیم؟", a: "ما از همکاری با فروشگاه‌های فیزیکی، صرافی‌ها و شرکت‌های تکنولوژی استقبال می‌کنیم. فرم انتهای صفحه راه ارتباطی ماست." }
          ].map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full" /> {faq.q}
              </h4>
              <p className="text-gray-400 leading-loose text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ۷. بخش پایانی و دعوت به همکاری --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden bg-amber-600 p-12 md:p-24 text-center shadow-3xl">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8">همین امروز شریک ما شوید</h2>
            <p className="max-w-2xl mx-auto text-white/90 text-xl mb-12 leading-relaxed font-light">
              ما به دنبال پارتنرهایی هستیم که دیدگاه بلندمدتی برای تغییر اکوسیستم مالی منطقه دارند. مستندات فنی و طرح توجیهی (Pitch Deck) آماده ارسال است.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <button className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl">
                 <Mail size={24} /> ارتباط با دپارتمان فروش
               </button>
               <button className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all">
                 دریافت کاتالوگ پارتنرها
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-10 text-center text-gray-600 text-[10px] uppercase tracking-[0.5em]">
        © 2026 SafiPay & Safi TopUp Ecosystem. Powered by Wallester & Ding Global Networks.
      </footer>
    </div>
  );
}