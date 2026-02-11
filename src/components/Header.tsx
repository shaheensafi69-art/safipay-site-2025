'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fa', label: 'فارسی', flag: '🇦🇫', flagUrl: 'https://flagcdn.com/w160/af.png' },
  { code: 'ps', label: 'پښتو', flag: '🇦🇫', flagUrl: 'https://flagcdn.com/w160/af.png' },
  { code: 'en', label: 'English', flag: '🇬🇧', flagUrl: 'https://flagcdn.com/w160/gb.png' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', flagUrl: 'https://flagcdn.com/w160/fr.png' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = pathname.split('/')[1] || 'en';
  const activeLangObj = languages.find(l => l.code === currentLang) || languages[2];
  const isRtl = currentLang === 'fa' || currentLang === 'ps';

  const changeLanguage = (lng: string) => {
    const segments = pathname.split('/');
    segments[1] = lng;
    const newPath = segments.join('/') || `/${lng}`;
    router.push(newPath);
    setIsLangOpen(false);
    setIsMobileOpen(false);
  };

  const navText = {
    home: { fa: 'خانه', ps: 'کور', en: 'Home', fr: 'Accueil' }[currentLang] || 'Home',
    invest: { fa: 'سرمایه‌گذاری', ps: 'پانګونه', en: 'Invest', fr: 'Investir' }[currentLang] || 'Invest',
    contact: { fa: 'تماس با ما', ps: 'اړیکه', en: 'Contact', fr: 'Contact' }[currentLang] || 'Contact',
    about: { fa: 'درباره ما', ps: 'زمونږ په اړه', en: 'About Us', fr: 'À propos' }[currentLang] || 'About Us',
    language: { fa: 'زبان', ps: 'ژبه', en: 'Language', fr: 'Langue' }[currentLang] || 'Language',
  };

  const navItems = [
    { href: `/${currentLang}`, label: navText.home },
    { href: `/${currentLang}/invest`, label: navText.invest },
    { href: `/${currentLang}/contact`, label: navText.contact },
    { href: `/${currentLang}/about`, label: navText.about },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-amber-500/20 py-3' : 'bg-transparent py-5'
      }`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group relative z-[110]">
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-amber-500 transition-colors">
              SAFIPAY
            </span>
          </Link>

          {/* --- بخش نوار منو با هاله پرچم (عکس دوم شما) --- */}
          <nav className="hidden md:flex items-center relative group/nav">
            {/* افکت هاله پرچم پشت منو */}
            <div className="absolute -inset-[2px] -z-10 rounded-full overflow-hidden opacity-30 blur-md group-hover/nav:opacity-60 transition-all duration-1000">
               <img 
                 src={activeLangObj.flagUrl} 
                 className="w-full h-full object-cover scale-[2] animate-[spin_10s_linear_infinite]" 
                 alt="" 
               />
            </div>

            <div className="flex items-center gap-8 bg-black/60 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-xl relative z-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-gray-300 hover:text-amber-400 transition-all relative group uppercase tracking-widest"
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${pathname === item.href ? 'w-full' : ''}`}></span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group/lang flex items-center justify-center">
              
              {/* --- افکت هاله پرچم دور دکمه زبان (عکس اول شما) --- */}
              <div className="absolute -inset-[3px] -z-10 rounded-xl overflow-hidden opacity-40 blur-md group-hover/lang:opacity-80 transition-all duration-700">
                 <img 
                   src={activeLangObj.flagUrl} 
                   className="w-full h-full object-cover scale-150 animate-pulse" 
                   alt="Flag Glow" 
                 />
              </div>

              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="relative z-10 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/80 border border-white/20 text-white backdrop-blur-md hover:border-amber-500/50 transition-all font-bold text-sm shadow-xl"
              >
                <span className="text-xl">{activeLangObj.flag}</span>
                <span className="tracking-wide uppercase">{activeLangObj.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className={`absolute ${isRtl ? 'left-0' : 'right-0'} top-full mt-4 w-56 bg-gray-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-2`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl transition-all group ${
                          currentLang === lang.code ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                           <span className="text-lg opacity-80 group-hover:opacity-100">{lang.flag}</span>
                           <span className="font-bold text-xs tracking-widest uppercase">{lang.label}</span>
                        </div>
                        {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-black shadow-inner" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            className="md:hidden p-3 text-white bg-white/5 border border-white/10 rounded-2xl active:scale-95 transition-transform"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-3xl flex flex-col p-8 md:hidden"
          >
            <div className="absolute inset-0 -z-10 opacity-10 blur-3xl overflow-hidden">
               <img src={activeLangObj.flagUrl} className="w-full h-full object-cover scale-150" alt="bg" />
            </div>

            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="SafiPay" width={35} height={35} />
                <span className="font-black text-lg tracking-tighter">SAFIPAY</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} className="p-3 bg-white/5 border border-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mb-12">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-4xl font-black text-white hover:text-amber-500 transition-colors uppercase tracking-tighter block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pb-10">
              <p className="text-[10px] text-gray-500 mb-6 font-black uppercase tracking-[0.3em] opacity-50">{navText.language}</p>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-center gap-3 py-5 rounded-[2rem] font-bold text-xs transition-all border ${
                      currentLang === lang.code ? 'bg-amber-500 border-amber-500 text-black' : 'bg-white/5 border-white/5 text-white'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="uppercase tracking-widest">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}