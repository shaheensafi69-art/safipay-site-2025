'use client';
import { motion } from 'framer-motion';
import { 
  Phone, MessageSquare, Mail, Send, MapPin, Globe, 
  ShieldCheck, Instagram, Facebook, Linkedin, Twitter 
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPageFA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // فرم به Formspree متصل است.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* --- Cinematic Hero Section --- */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* جلوه‌های نوری محیطی */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -ml-32 -mb-32" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            پشتیبانی جهانی ۲۴/۷ فعال است
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase"
          >
            با ما در <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">ارتباط</span> باشید
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed"
          >
            سوالی درباره آینده بانکداری دیجیتال دارید؟ 
            تیم اجرایی SafiPay اینجاست تا شما را در مسیر مالی‌تان راهنمایی کند.
          </motion.p>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="pb-32 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* اطلاعات تماس و شبکه‌های اجتماعی */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 text-right"
          >
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] h-full space-y-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">کانال‌های ارتباطی</h2>
                <div className="h-1 w-20 bg-amber-500 rounded-full" />
              </div>

              {/* لینک‌های ارتباطی */}
              <div className="space-y-4">
                {[
                  { icon: <MessageSquare />, title: "واتس‌اپ رسمی", value: "+44 7476 620282", link: "https://wa.me/447476620282", color: "hover:text-green-400" },
                  { icon: <Phone />, title: "خط ویژه پشتیبانی", value: "+44 7476 620282", link: "tel:+447476620282", color: "hover:text-amber-400" },
                  { icon: <Mail />, title: "ایمیل رسمی", value: "safipay@hotmail.com", link: "mailto:safipay@hotmail.com", color: "hover:text-blue-400" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    whileHover={{ scale: 1.02, x: -5 }}
                    className={`flex items-center gap-5 p-5 rounded-2xl bg-black/40 border border-white/5 transition-all group ${item.color}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{item.title}</h4>
                      <p className="text-lg font-bold tracking-tight text-white/90" dir="ltr">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="space-y-4">
                <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mr-2">ما را دنبال کنید</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Facebook size={20} />, name: "فیسبوک", link: "https://www.facebook.com/share/1FDnCCnwJ4/" },
                    { icon: <Instagram size={20} />, name: "اینستاگرام", link: "https://www.instagram.com/safipay2022?igsh=ZW9tdHRidHI1d2gz" },
                    { icon: <Linkedin size={20} />, name: "لینکدین", link: "https://www.linkedin.com/company/safipay" },
                    { icon: <Twitter size={20} />, name: "ایکس (توییتر)", link: "https://x.com/safipay" },
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link} 
                      target="_blank" 
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                    >
                      <div className="text-gray-400 group-hover:text-amber-500 transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-amber-500/80 mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">حریم خصوصی تضمین شده</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  دسترسی مستقیم و رمزگذاری شده به پروتکل‌های مدیریتی ما.
                </p>
              </div>
            </div>
          </motion.div>

          {/* فرم تماس */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="h-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-right">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <h3 className="text-3xl font-black mb-10 tracking-tight uppercase">ارسال پیام مستقیم</h3>
              
              <form
                action="https://formspree.io/f/maqbrkgq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 mr-1 uppercase tracking-widest block">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="مثلاً: شاهین صافی"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-amber-500/50 focus:bg-amber-500/5 focus:outline-none transition-all placeholder:text-gray-700 text-right"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 mr-1 uppercase tracking-widest block">آدرس ایمیل</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-amber-500/50 focus:bg-amber-500/5 focus:outline-none transition-all placeholder:text-gray-700 text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 mr-1 uppercase tracking-widest block">جزئیات پیام</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="درخواست یا پروژه خود را شرح دهید..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-amber-500/50 focus:bg-amber-500/5 focus:outline-none transition-all resize-none placeholder:text-gray-700 text-right"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(245, 158, 11, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all uppercase tracking-widest"
                >
                  ارسال امن پیام
                  <Send size={20} className="rotate-180" />
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center text-green-400 text-sm font-bold"
                >
                  پیام شما با موفقیت به پروتکل‌های SafiPay ارسال شد.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Badges */}
      <section className="py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-gray-600 font-bold uppercase tracking-widest text-[10px]">
             <div className="flex items-center gap-2 hover:text-amber-500 transition-colors">
               <MapPin size={16} /> پاریس، فرانسه
             </div>
             <div className="flex items-center gap-2 hover:text-amber-500 transition-colors">
               <Globe size={16} /> عملیات جهانی
             </div>
             <div className="flex items-center gap-2 hover:text-amber-500 transition-colors">
               <ShieldCheck size={16} /> رمزگذاری AES-256
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}