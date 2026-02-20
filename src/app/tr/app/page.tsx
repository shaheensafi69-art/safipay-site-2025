'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Smartphone, ShieldCheck, Zap, Clock, Globe, 
  Fingerprint, Bell, ArrowUpRight, ArrowDownLeft 
} from 'lucide-react';
import Image from 'next/image';

export default function AppDownloadPage() {
  const containerRef = useRef(null);
  const [appState, setAppState] = useState('loading');

  useEffect(() => {
    const timer1 = setTimeout(() => setAppState('auth'), 3000);
    const timer2 = setTimeout(() => setAppState('dashboard'), 5500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotatePhone = useTransform(scrollYProgress, [0, 0.5], [0, 5]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white pt-20 md:pt-32 pb-10 px-4 md:px-6 relative overflow-hidden" dir="ltr">
      
      {/* Arka Plan Ortam Aydınlatması */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/10 blur-[150px] rounded-full" 
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* --- 1. Hero İçeriği --- */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-amber-500 text-[10px] md:text-xs font-black tracking-widest mb-6 uppercase">
              <Globe size={14} className="animate-spin-slow" />
              SafiPay Ekosistemi Canlıda
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter italic leading-[0.9]">
              Finansın <span className="text-amber-500 text-glow">Geleceği</span> <br className="hidden md:block" /> 
              Cebinizde
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
              Sadece bir uygulama inşa etmiyoruz; finansal özgürlüğe giden bir kapı açıyoruz. Hızlı, güvenli ve sınırsız.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <StoreButton img="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" text="Yakında Play Store'da" />
              <StoreButton img="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" text="Yakında App Store'da" />
            </div>
          </motion.div>

          {/* --- 2. Akıllı Telefon Arayüzü --- */}
          <motion.div 
            style={{ y: yPhone, rotateZ: rotatePhone }} 
            className="relative flex justify-center w-full"
          >
            <div className="scale-[0.85] sm:scale-90 md:scale-100 transition-all duration-700">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-[300px] h-[620px] md:w-[320px] md:h-[660px]"
              >
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.7)] border-[6px] border-[#2a2a2a] p-3">
                  <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative border border-white/5">
                    
                    <AnimatePresence mode="wait">
                      {appState === 'loading' && (
                        <motion.div key="l" exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center bg-black">
                           <div className="w-14 h-14 border-t-2 border-amber-500 rounded-full animate-spin mb-6" />
                           <span className="text-amber-500 font-bold text-[10px] tracking-[0.5em]">ŞİFRELEME</span>
                        </motion.div>
                      )}

                      {appState === 'dashboard' && (
                        <motion.div key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-[#080808] flex flex-col pt-12 text-left">
                          
                          <div className="flex justify-between items-center px-6 mb-8">
                            <div className="w-11 h-11 relative rounded-full border-2 border-amber-500 p-0.5 shadow-lg shadow-amber-500/20">
                              <Image src="/shaheen.jpeg" alt="Shaheen" fill className="object-cover rounded-full" />
                            </div>
                            <div className="p-2.5 bg-white/5 rounded-2xl border border-white/10 relative">
                              <Bell size={18} className="text-gray-400" />
                              <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-amber-500 rounded-full" />
                            </div>
                          </div>

                          <div className="px-6 mb-8">
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Toplam Bakiye</p>
                            <h2 className="text-3xl font-black text-white">$92,450.00</h2>
                          </div>

                          <div className="flex overflow-x-auto gap-3 px-6 no-scrollbar pb-6">
                            <CurrencyCard flag="🇦🇫" code="AFN" amount="650,000" highlight />
                            <CurrencyCard flag="🇺🇸" code="USD" amount="12,400" />
                            <CurrencyCard flag="🇬🇧" code="GBP" amount="3,200" />
                            <CurrencyCard flag="🇪🇺" code="EUR" amount="8,150" />
                          </div>

                          <div className="mt-auto bg-[#111] rounded-t-[3rem] p-7 border-t border-white/10">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Son İşlemler</h4>
                            <div className="space-y-5">
                              <TransactionItem type="up" title="Ödeme Alındı" amount="+ 15k AFN" />
                              <TransactionItem type="down" title="Takas Ücreti" amount="- $12.00" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- 3. Özellikler Bölümü --- */}
        <div className="mt-32 md:mt-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <FeatureCard 
            icon={<Zap size={28} />} 
            title="Işık Hızında" 
            desc="Dünya çapında işlem sürelerini minimize etmek için tasarlanmış modern borsa sistemi." 
            delay={0.1} 
          />
          <FeatureCard 
            icon={<ShieldCheck size={28} />} 
            title="Soğuk Güvenlik" 
            desc="Dijital varlıklarınızı korumak için en üst düzey şifreleme ve soğuk depolama (cold storage)." 
            delay={0.2} 
          />
          <FeatureCard 
            icon={<Smartphone size={28} />} 
            title="Akıllı Arayüz" 
            desc="En karmaşık finansal işlemleri yönetmeyi basitleştirmek için geliştirildi." 
            delay={0.3} 
          />
          <FeatureCard 
            icon={<Clock size={28} />} 
            title="24/7 Destek" 
            desc="Teknik ekibimiz ihtiyacınız olan her an yardıma hazırdır." 
            delay={0.4} 
          />
        </div>

        {/* --- 4. Kurulum Adımları --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 md:mt-48 p-10 md:p-16 bg-white/5 border border-white/10 rounded-[3rem] text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-12 italic uppercase tracking-tighter text-amber-500">Başlarken</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Step num="01" title="İndir" desc="Uygulamayı ilk deneyimleyenlerden olmak için bekleme listesine kaydolun." delay={0.1} />
            <Step num="02" title="Doğrula" desc="Küresel cüzdanınızı aktif etmek için güvenli KYC sürecini tamamlayın." delay={0.2} />
            <Step num="03" title="İşlem Yap" desc="Varlıklarınızı hiçbir sınır olmadan takas edin ve yönetin." delay={0.3} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- Yardımcı Bileşenler ---

function CurrencyCard({ flag, code, amount, highlight }: any) {
  return (
    <div className={`min-w-[125px] p-5 rounded-[2rem] border ${highlight ? 'bg-amber-500 border-amber-600 shadow-lg' : 'bg-white/5 border-white/10'}`}>
      <div className="text-2xl mb-3">{flag}</div>
      <div className={`text-[9px] font-black mb-1 ${highlight ? 'text-black/60' : 'text-gray-500'}`}>{code}</div>
      <div className={`text-[12px] font-black ${highlight ? 'text-black' : 'text-white'}`}>{amount}</div>
    </div>
  );
}

function TransactionItem({ type, title, amount }: any) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-2xl flex items-center justify-center ${type === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          {type === 'up' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
        </div>
        <div className="text-[11px] font-bold text-white">{title}</div>
      </div>
      <div className={`text-[11px] font-black ${type === 'up' ? 'text-green-500' : 'text-white'}`}>{amount}</div>
    </div>
  );
}

function StoreButton({ img, text }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-2">
      <div className="px-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl grayscale opacity-60 flex items-center justify-center cursor-not-allowed">
        <Image src={img} alt="store" width={110} height={35} />
      </div>
      <span className="text-[9px] text-gray-500 font-bold">{text}</span>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-left group hover:bg-white/10 transition-all"
    >
      <div className="mb-6 p-4 bg-amber-500/10 text-amber-500 w-fit rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-colors">{icon}</div>
      <h3 className="text-xl font-black uppercase italic tracking-tighter mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Step({ num, title, desc, delay }: any) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay }}>
      <div className="text-6xl font-black text-amber-500/10 mb-4">{num}</div>
      <h4 className="text-xl font-bold text-amber-500 uppercase italic mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
}