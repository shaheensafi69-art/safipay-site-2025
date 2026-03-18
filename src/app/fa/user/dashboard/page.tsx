'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Settings, ShieldCheck, ArrowUpRight, Wallet, 
  Send, CreditCard, Landmark, Globe, Smartphone, 
  Copy, RefreshCcw, SmartphoneNfc, Wifi, CheckCircle2,
  TrendingUp, CreditCard as CardIcon, Building2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { createClientSideSupabase } from '@/lib/supabase';

export default function FinalEliteDashboard() {
  const [user, setUser] = useState<any>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
  const params = useParams();
  const locale = params.locale || 'fa';
  const supabase = createClientSideSupabase();

  const fullName = `${user?.user_metadata?.first_name || ''} ${user?.user_metadata?.last_name || ''}`.trim() || user?.user_metadata?.full_name || 'کاربر';

  // --- لیست کامل ۱۰ ارز با تمام جزئیات بانکی مورد نیاز ---
  const fullCurrencies = [
    { 
      code: 'EUR', name: 'اتحادیه اروپا', flag: '🇪🇺', balance: '0.00',
      details: [
        { label: 'ذی‌نفع', value: fullName },
        { label: 'IBAN', value: 'BE96 3633 1234 5678 9012' },
        { label: 'BIC / SWIFT', value: 'SAFIBEBBXXX' },
        { label: 'بانک', value: 'SafiPay Europe SA' }
      ]
    },
    { 
      code: 'GBP', name: 'بریتانیا', flag: '🇬🇧', balance: '0.00',
      details: [
        { label: 'صاحب حساب', value: fullName },
        { label: 'شماره حساب', value: '88776655' },
        { label: 'Sort Code', value: '12-34-56' },
        { label: 'IBAN', value: 'GB29 SAFI 1234 5678 9012' },
        { label: 'BIC / SWIFT', value: 'SAFIGB2L' }
      ]
    },
    { 
      code: 'USD', name: 'ایالات متحده', flag: '🇺🇸', balance: '0.00',
      details: [
        { label: 'صاحب حساب', value: fullName },
        { label: 'شماره حساب', value: '009876543210' },
        { label: 'ACH Routing', value: '123456789' },
        { label: 'Wire Routing', value: '987654321' },
        { label: 'نوع حساب', value: 'Checking' }
      ]
    },
    { 
      code: 'PLN', name: 'پولند', flag: '🇵🇱', balance: '0.00',
      details: [
        { label: 'صاحب حساب', value: fullName },
        { label: 'NRB (محلی)', value: '91 1010 2020 3030 4040 5050' },
        { label: 'SWIFT / BIC', value: 'SAFIPLPL' }
      ]
    },
    { 
      code: 'SEK', name: 'سویدن', flag: '🇸🇪', balance: '0.00',
      details: [
        { label: 'صاحب حساب', value: fullName },
        { label: 'IBAN', value: 'SE55 5000 0000 1111 2222' },
        { label: 'BIC', value: 'SAFISEXX' }
      ]
    },
    { 
      code: 'NOK', name: 'ناروی', flag: '🇳🇴', balance: '0.00',
      details: [
        { label: 'IBAN', value: 'NO42 2000 3000 4000 55' },
        { label: 'BIC', value: 'SAFINOXX' }
      ]
    },
    { 
      code: 'RON', name: 'رومانی', flag: '🇷🇴', balance: '0.00',
      details: [
        { label: 'IBAN', value: 'RO89 SAFI 0000 1111 2222' },
        { label: 'SWIFT', value: 'SAFIROBU' }
      ]
    },
    { 
      code: 'HUF', name: 'مجارستان', flag: '🇭🇺', balance: '0.00',
      details: [
        { label: 'شماره حساب', value: '12345678-87654321' },
        { label: 'نام بانک', value: 'SafiPay Budapest' }
      ]
    },
    { 
      code: 'CZK', name: 'جمهوری چک', flag: '🇨🇿', balance: '0.00',
      details: [
        { label: 'IBAN', value: 'CZ48 0000 1234 5678 9012' },
        { label: 'SWIFT', value: 'SAFICZPP' }
      ]
    },
    { 
      code: 'DKK', name: 'دنمارک', flag: '🇩🇰', balance: '0.00',
      details: [
        { label: 'IBAN', value: 'DK22 1234 5678 9012 34' },
        { label: 'SWIFT', value: 'SAFIDKKK' }
      ]
    }
  ];

  // --- دیتای ۷ گوشی با UI داخلی ---
  const features = [
    { 
      title: "انتقالات جهانی", 
      desc: "ارسال وجه به افغانستان و بیش از ۱۵۰ کشور با رهگیری لحظه‌ای و بدون هزینه‌های پنهان.",
      icon: <Send />,
      ui: (
        <div className="p-5 space-y-4">
          <div className="bg-zinc-900/80 p-3 rounded-xl border border-white/5">
            <p className="text-[8px] text-zinc-500 uppercase">مبلغ ارسالی</p>
            <p className="text-xl font-black text-amber-500">$1,500.00</p>
          </div>
          <div className="space-y-2">
             <div className="flex justify-between text-[10px] font-bold px-1"><span>گیرنده</span><span className="text-amber-500">افزودن جدید +</span></div>
             {[1,2].map(i => <div key={i} className="bg-zinc-900 p-2 rounded-xl flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-zinc-800" /><div className="w-20 h-2 bg-zinc-800 rounded-full" /></div>)}
          </div>
          <button className="w-full bg-amber-500 py-3 rounded-xl text-black font-black text-[10px]">تأیید انتقال</button>
        </div>
      )
    },
    { 
      title: "کارت‌های طلایی ویزا", 
      desc: "ساخت فوری کارت مجازی یا سفارش کارت‌های فیزیکی روکش طلا برای استفاده جهانی.",
      icon: <CardIcon />,
      ui: (
        <div className="p-5 space-y-6">
          <div className="w-full h-36 bg-gradient-to-br from-amber-400 to-amber-700 rounded-2xl p-4 shadow-xl relative overflow-hidden">
             <div className="text-black font-black italic text-sm">SafiPay Elite</div>
             <div className="mt-10 font-mono text-black text-[10px] tracking-widest">**** **** **** 8842</div>
             <div className="mt-2 flex justify-between text-black/70 text-[8px] font-bold uppercase"><span>{fullName.toUpperCase()}</span><span>02/29</span></div>
             <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-black/10 rounded-full" />
          </div>
          <div className="space-y-2">
             <div className="flex justify-between bg-zinc-900 p-3 rounded-xl items-center"><span className="text-[10px]">بدون تماس</span><div className="w-8 h-4 bg-amber-500 rounded-full" /></div>
             <div className="flex justify-between bg-zinc-900 p-3 rounded-xl items-center"><span className="text-[10px]">پرداخت آنلاین</span><div className="w-8 h-4 bg-amber-500 rounded-full" /></div>
          </div>
        </div>
      )
    },
    { 
      title: "جزئیات بانکی", 
      desc: "زیرساخت کامل بانکداری محلی در اروپا، بریتانیا و آمریکا. آیبان‌های شخصی خودتان.",
      icon: <Building2 />,
      ui: (
        <div className="p-5 space-y-3">
          <div className="text-[10px] font-black text-zinc-500 uppercase px-1">حساب‌های من</div>
          {['IBAN یورو', 'Sort Code بریتانیا', 'Routing دلار'].map((t, i) => (
            <div key={i} className="bg-zinc-900 p-3 rounded-xl border-l-2 border-amber-500">
               <p className="text-[8px] text-zinc-500">{t}</p>
               <p className="text-[10px] font-mono mt-1 text-zinc-300">BE96 0000 1111 2222...</p>
            </div>
          ))}
          <button className="w-full border border-dashed border-zinc-700 py-3 rounded-xl text-[8px] text-zinc-500">درخواست آیبان جدید</button>
        </div>
      )
    },
    { 
      title: "تبادل هوشمند", 
      desc: "تبدیل فوری ارز با نرخ‌های لحظه‌ای سازمانی و بدون کمیسیون پنهان.",
      icon: <RefreshCcw />,
      ui: (
        <div className="p-5 space-y-8 text-center">
          <div className="bg-zinc-900 p-4 rounded-2xl">
             <p className="text-[8px] text-zinc-500 uppercase">از یورو</p>
             <p className="text-xl font-black italic">1,000.00</p>
          </div>
          <div className="flex justify-center"><RefreshCcw className="text-amber-500 animate-spin-slow" /></div>
          <div className="bg-zinc-900 p-4 rounded-2xl">
             <p className="text-[8px] text-zinc-500 uppercase">به دلار</p>
             <p className="text-xl font-black italic text-amber-500">1,085.40</p>
          </div>
        </div>
      )
    },
    { 
      title: "شارژ موبایل", 
      desc: "شارژ فوری بیش از ۷۰۰ اپراتور جهانی از جمله AWCC، روشن و اتصالات.",
      icon: <SmartphoneNfc />,
      ui: (
        <div className="p-5 space-y-4">
          <div className="bg-zinc-900 p-3 rounded-xl border border-white/5">
             <input placeholder="شماره تلفن را وارد کنید" className="bg-transparent text-[10px] w-full outline-none" />
          </div>
          <div className="grid grid-cols-3 gap-2">
             {[10, 20, 50, 100, 200, 500].map(v => (
               <div key={v} className="bg-zinc-800 p-2 rounded-lg text-center text-[10px] font-black text-amber-500">${v}</div>
             ))}
          </div>
          <button className="w-full bg-amber-500 py-3 rounded-xl text-black font-black text-[10px]">همین حالا شارژ کنید</button>
        </div>
      )
    },
    { 
      title: "قبوض خدماتی", 
      desc: "پرداخت قبوض خدمات بین‌المللی و اشتراک‌های Starlink مستقیم از کیف پول شما.",
      icon: <Wifi />,
      ui: (
        <div className="p-5 space-y-3">
          <div className="h-24 bg-zinc-900 rounded-2xl p-4 flex flex-col justify-between border border-white/5">
             <div className="flex justify-between items-center"><div className="w-8 h-8 bg-zinc-800 rounded-lg" /><div className="w-12 h-4 bg-zinc-800 rounded-full" /></div>
             <p className="text-[10px] font-black italic">برق کابل</p>
          </div>
          <div className="h-24 bg-zinc-900 rounded-2xl p-4 flex flex-col justify-between border border-white/5">
             <div className="flex justify-between items-center"><div className="w-8 h-8 bg-zinc-800 rounded-lg" /><div className="w-12 h-4 bg-zinc-800 rounded-full" /></div>
             <p className="text-[10px] font-black italic">اینترنت Starlink</p>
          </div>
        </div>
      )
    },
    { 
      title: "تحلیل مالی", 
      desc: "وضعیت مالی خود را با نمودارهای هوشمند مبتنی بر AI و تاریخچه تراکنش‌های لحظه‌ای بررسی کنید.",
      icon: <TrendingUp />,
      ui: (
        <div className="p-5 space-y-6">
          <div className="flex items-end justify-between h-24 gap-1 px-2">
             {[40, 70, 55, 90, 65, 85, 50].map((h, i) => (
               <motion.div key={i} initial={{height: 0}} animate={{height: `${h}%`}} className="w-3 bg-amber-500/30 rounded-t-sm" />
             ))}
          </div>
          <div className="space-y-3">
             <div className="text-[8px] font-black text-zinc-600 uppercase">فعالیت اخیر</div>
             {[1,2,3].map(i => <div key={i} className="h-8 bg-zinc-900 rounded-lg" />)}
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-32 px-6 font-sans">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- هدر پروفایل ویژه --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/40 border border-amber-500/10 rounded-[3rem] p-8 md:p-12 mb-24 flex flex-col md:flex-row items-center gap-10 backdrop-blur-3xl shadow-2xl"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-amber-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition duration-700" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-black ring-2 ring-amber-500/30">
              {user?.user_metadata?.avatar_url ? (
                <Image src={user.user_metadata.avatar_url} alt="پروفایل" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600"><User size={60} /></div>
              )}
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-black uppercase rounded-full tracking-widest">مدیر ارشد VIP</span>
               <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[9px] font-black uppercase rounded-full tracking-widest italic flex items-center gap-1"><ShieldCheck size={10} /> کاملاً ایمن</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">
              {user?.user_metadata?.first_name || 'کاربر'} <span className="text-amber-500">{user?.user_metadata?.last_name || ''}</span>
            </h1>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em]">به SafiPay International خوش آمدید</p>
          </div>
          <Link href={`/${locale}/user/edit`} className="p-5 bg-white/5 rounded-[2rem] border border-white/5 hover:border-amber-500 transition-all group">
            <Settings className="text-zinc-500 group-hover:rotate-90 group-hover:text-amber-500 transition-all duration-500" />
          </Link>
        </motion.div>

        {/* --- گرید هر ۱۰ ارز --- */}
        <section className="mb-40">
           <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-10 flex items-center gap-4">
             <Wallet className="text-amber-500" size={16} /> دارایی‌های مالی جهانی (۱۰ حساب)
           </h2>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
             {fullCurrencies.map((curr, idx) => (
               <motion.div 
                 key={curr.code} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.05 }}
                 onClick={() => setSelectedCurrency(curr)}
                 className="cursor-pointer bg-zinc-900/30 border border-white/5 p-7 rounded-[2.5rem] hover:bg-zinc-900/50 hover:border-amber-500/50 transition-all"
               >
                 <div className="text-3xl mb-5">{curr.flag}</div>
                 <div className="text-xl font-black italic mb-1">{curr.balance}</div>
                 <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{curr.code}</div>
               </motion.div>
             ))}
           </div>
        </section>

        {/* --- ۷ بخش ویژگی با زاویه‌های سه‌بعدی کامل --- */}
        <section className="space-y-60">
           {features.map((feat, idx) => (
             <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 lg:gap-40`}>
                
                {/* 3D Smartphone Container */}
                {/* به کانتینر بیرونی پرسپکتیو دادیم تا فضای سه بعدی ایجاد شود */}
                <div style={{ perspective: '2000px' }} className="flex justify-center items-center"> 
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      x: idx % 2 === 0 ? -100 : 100,
                      rotateY: idx % 2 === 0 ? 30 : -30 // زاویه اولیه
                    }} 
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      rotateY: idx % 2 === 0 ? 15 : -15 // زاویه نهایی ملایم
                    }} 
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ transformStyle: 'preserve-3d' }} // بسیار مهم: این به عناصر داخلی اجازه می‌دهد سه‌بعدی بمانند
                    className="relative w-[340px] h-[700px] bg-[#0a0a0a] rounded-[3.8rem] border-[14px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(245,158,11,0.3)]"
                  >
                    {/* Notch/Dynamic Island */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#1a1a1a] rounded-b-3xl z-30" />
                    
                    {/* Screen Content - Fixed Angle Problem */}
                    {/* به کانتینر محتوا هم استایل سه‌بعدی دادیم */}
                    <div 
                      style={{ transformStyle: 'preserve-3d', transform: 'translateZ(1px)' }} // محتوا را ۱ پیکسل جلو آوردیم
                      className="h-full w-full bg-black overflow-hidden pt-16 flex flex-col rounded-[3rem]"
                    >
                       <div className="flex-1">
                          {feat.ui}
                       </div>
                       {/* Home Indicator */}
                       <div className="h-1 w-24 bg-zinc-800 rounded-full mx-auto my-6" />
                    </div>

                    {/* Reflection/Shine Layer */}
                    <div 
                      style={{ transform: 'translateZ(2px)' }} // لایه براق را جلوتر آوردیم
                      className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none rounded-[3.8rem]" 
                    />
                  </motion.div>
                </div>

                {/* Description Content (بدون تغییر) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="flex-1 text-center lg:text-left"
                >
                   <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 mx-auto lg:mx-0 border border-amber-500/20">
                      {feat.icon}
                   </div>
                   <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                      {feat.title.split(' ')[0]} <span className="text-amber-500">{feat.title.split(' ')[1]}</span>
                   </h2>
                   <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-xl">
                      {feat.desc}
                   </p>
                   <button className="px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-xl active:scale-95">
                      کاوش سیستم
                   </button>
                </motion.div>
             </div>
           ))}
        </section>

        {/* --- مودال جزئیات بانکی --- */}
        <AnimatePresence>
          {selectedCurrency && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-3xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCurrency(null)} className="absolute inset-0 bg-black/90" />
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-zinc-900 border border-white/10 rounded-[4rem] p-10 md:p-14 w-full max-w-2xl relative z-10 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-6">
                    <span className="text-6xl">{selectedCurrency.flag}</span>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter">{selectedCurrency.code} <span className="text-zinc-600">دارایی‌ها</span></h3>
                  </div>
                  <button onClick={() => setSelectedCurrency(null)} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">✕</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {selectedCurrency.details.map((d: any, i: number) => (
                    <div key={i} className="bg-black/50 p-6 rounded-3xl border border-white/5 flex flex-col justify-center relative group">
                      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">{d.label}</p>
                      <p className="text-sm font-mono text-zinc-300 break-all">{d.value}</p>
                      <Copy className="absolute right-6 top-6 text-zinc-800 hover:text-amber-500 cursor-pointer transition-colors" size={16} />
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl text-center">
                   <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest">راهنمای انتقال جهانی</p>
                   <p className="text-[11px] text-zinc-500 mt-2">برای دریافت وجه مستقیم به کیف پول SafiPay خود، از این مشخصات بانکی محلی استفاده کنید. انتقال‌ها در شبکه SEPA/Faster Payments فوری هستند.</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
