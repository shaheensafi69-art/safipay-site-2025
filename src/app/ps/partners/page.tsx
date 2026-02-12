'use client';
import { motion } from 'framer-motion';
import { 
  Handshake, Rocket, Globe, ShieldCheck, 
  ArrowRight, CreditCard, Zap, BarChart3, Mail, 
  Wifi, Smartphone, Cpu, CheckCircle2, HelpCircle
} from 'lucide-react';

// د انیمیشن تنظیمات
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function AnimatedPartnershipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* --- ۱. هډر (Header) له انیمیشن سره --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" 
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-tight">
              د <span className="text-amber-500 inline-block drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">SAFI</span> اکوسیستم
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            د هغو ټولنو لپاره چې له کلونو راهیسې له عصري نړیوالو خدمتونو بې برخې پاتې دي، د مالي او مخابراتي معیارونو بیا تعریفول.
          </motion.p>
        </div>
      </section>

      {/* --- ۲. ځانګړتیاوې (Features) --- */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 border-y border-white/5 bg-white/[0.01]"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { title: "د لاسرسي حل", desc: "صافي د اروپا د فین‌ټیک ټیکنالوژۍ په مرسته په افغانستان کې د نړیوالو تادیاتو خلا ډکوي." },
            { title: "لوړ امنیت", desc: "په نړیواله شبکه کې د هرې معاملې د خوندیتوب تضمین لپاره د PCI-DSS پروتوکولونو کارول." },
            { title: "بې پولې اړیکه", desc: "په اروپا کې د پوهنتون فیس تادیه کولو څخه نیولې په کابل کې د موبایل ریچارج پورې؛ ټول په یو اکوسیستم کې." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="space-y-4 group p-4">
              <h3 className="text-2xl font-bold text-amber-500 group-hover:translate-x-[-8px] transition-transform">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- ۳. SafiPay & Wallester --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
              Fintech Infrastructure
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">SafiPay: له پولو پورته بانکوالي</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              صافي‌پی یوازې یو ډیجیټل بټوه نه ده؛ بلکې د **Wallester AS** او **VISA** شبکې په همکارۍ یو بشپړ نئوبانک دی.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-sm">د فزیکي او مجازي VISA کارتونو صادرول</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-sm">د اروپا ځانګړی IBAN حساب لرل</span>
              </motion.div>
            </div>
          </motion.div>

          {/* انیمیشن شوی کارت */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-[3rem] border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-[#0a0a0a] rounded-[2.8rem] p-10 space-y-8 relative z-10">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>ID: 2026_WALLESTER_PARTNER</span>
                  <span className="text-green-500">● LIVE_CONNECTION</span>
                </div>
                <div className="py-10 text-center border-y border-white/5">
                  <motion.h3 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-4xl font-black mb-2 tracking-widest"
                  >
                    Wallester
                  </motion.h3>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">رسمي ستراتیژیک ملګری</p>
                </div>
                <p className="text-gray-400 text-sm italic text-center">"د اروپایی اتحادیې لخوا جواز لرونکي بانکي زیربنا څخه برخمن"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ۴. Safi TopUp --- */}
      <section className="py-24 container mx-auto px-6 bg-blue-500/[0.02] rounded-[5rem] my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] animate-pulse" />
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest">
              Global Connectivity
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">Safi TopUp: فوري اړیکه</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              د **Ding** شبکې په مرسته، موږ د افغانستان او د نړۍ د ۵۰۰ هیوادونو د مخابراتي شبکو ترمنځ یو پل جوړ کړی دی.
            </p>
            <div className="space-y-4">
               {[
                 { icon: <Wifi size={20} />, t: "E-SIM ټیکنالوژي", d: "په ۱۵۰ هیوادونو کې مجازي سیم کارت." },
                 { icon: <Smartphone size={20} />, t: "کورني شرکتونه", d: "د روښان، افغان بیسیم او نورو فوري ریچارج." }
               ].map((item, i) => (
                 <motion.div key={i} whileHover={{ x: -10 }} className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/5 items-center">
                    <div className="text-blue-500">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.t}</h4>
                      <p className="text-gray-500 text-xs">{item.d}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2"
          >
             <div className="relative p-12 bg-[#ff4d00]/5 border border-[#ff4d00]/20 rounded-[4rem] text-center group">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-24 h-24 bg-[#ff4d00] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(255,77,0,0.3)]"
                >
                  <span className="text-white font-black text-3xl italic">d.</span>
                </motion.div>
                <h3 className="text-3xl font-black mb-4">Ding Strategic Partner</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">په ټوله نړۍ کې په ۳ ثانیو کې د راکړې ورکړې ترسره کول.</p>
                <div className="flex justify-center gap-10">
                   <div className="text-center"><div className="text-2xl font-black">500+</div><div className="text-[8px] uppercase text-gray-500 tracking-widest">شبکې</div></div>
                   <div className="text-center"><div className="text-2xl font-black">150+</div><div className="text-[8px] uppercase text-gray-500 tracking-widest">هیوادونه</div></div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- ۵. نقشه (Roadmap) --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.h2 {...fadeInUp} className="text-4xl font-black text-center mb-20 italic">د ۲۰۲۶ کال پلان</motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { q: "Q1", title: "زیربنا جوړول", items: ["جوازونه ترلاسه کول", "بټا ازموینه"] },
            { q: "Q2", title: "لومړۍ عرضه", items: ["رسمي پیل", "E-SIM خدمتونه"] },
            { q: "Q3", title: "پراختیا", items: ["له Ding سره یوځای کیدل", "تجاري پنل"] },
            { q: "Q4", title: "هوښیارتیا", items: ["جایزو سیسټم", "فزیکي کارتونه"] },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10, borderColor: 'rgba(245,158,11,0.5)' }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden transition-colors"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-2 -right-2">{item.q}</div>
              <h4 className="text-xl font-bold mb-4 text-amber-500 relative z-10">{item.title}</h4>
              <ul className="space-y-2 text-xs text-gray-400 relative z-10">
                {item.items.map((li, j) => <li key={j}>• {li}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- ۶. عامې پوښتنې (FAQs) --- */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-12 italic">عامې پوښتنې</h2>
        <div className="space-y-4">
          {[
            { q: "د پانګې امنیت؟", a: "د اروپا د قوانینو سره سم تر ۱۰۰ زره یورو پورې بیمه." },
            { q: "د همکارۍ لاره؟", a: "د پانګونې د معلوماتو ترلاسه کولو لپاره لاندې فارم ډک کړئ." }
          ].map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 shadow-inner"
            >
              <h4 className="font-bold text-amber-500 mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> {faq.q}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ۷. وروستۍ غوښتنه (CTA) --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative rounded-[4rem] overflow-hidden bg-gradient-to-r from-amber-600 to-amber-800 p-12 md:p-24 text-center"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">ګډون ته چمتو یاست؟</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <motion.button 
                 whileTap={{ scale: 0.9 }}
                 className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3"
               >
                 <Mail size={24} /> مستقیمه اړیکه
               </motion.button>
               <motion.button 
                 whileTap={{ scale: 0.9 }}
                 className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg"
               >
                 کاتالوګ ترلاسه کړئ
               </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-gray-700 text-[10px] uppercase tracking-[0.5em]">
        © 2026 SafiPay & Safi TopUp | د ستراتیژیکې ملګرتیا زیربنا
      </footer>
    </div>
  );
}