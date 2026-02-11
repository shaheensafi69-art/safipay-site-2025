'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fa', label: 'فارسی', flag: '🇦🇫', flagUrl: 'https://flagcdn.com/w160/af.png' },
  { code: 'ps', label: 'پښتو', flag: '🇦🇫', flagUrl: 'https://flagcdn.com/w160/af.png' },
  { code: 'en', label: 'English', flag: '🇬🇧', flagUrl: 'https://flagcdn.com/w160/gb.png' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', flagUrl: 'https://flagcdn.com/w160/fr.png' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', flagUrl: 'https://flagcdn.com/w160/de.png' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تشخیص زبان فعلی از روی آدرس
  const currentLang = pathname.split('/')[1] || 'en';
  const activeLangObj = languages.find(l => l.code === currentLang) || languages[2];
  const isRtl = currentLang === 'fa' || currentLang === 'ps';

  // --- راه حل نهایی برای مشکل مسیر /en/de ---
  const changeLanguage = (lng: string) => {
    if (typeof window !== 'undefined') {
      const segments = window.location.pathname.split('/');
      // سگمنت اول بعد از اسلش اول همیشه کد زبان است
      segments[1] = lng; 
      const newPath = segments.join('/');
      
      // استفاده از window.location.href برای اطمینان از پاکسازی کامل مسیر قبلی
      window.location.href = newPath;
    }
  };

  const navText = {
    home: { fa: 'خانه', ps: 'کور', en: 'Home', fr: 'Accueil', de: 'Startseite' }[currentLang] || 'Home',
    invest: { fa: 'سرمایه‌گذاری', ps: 'پانګونه', en: 'Invest', fr: 'Investir', de: 'Investieren' }[currentLang] || 'Invest',
    contact: { fa: 'تماس با ما', ps: 'اړیکه', en: 'Contact', fr: 'Contact', de: 'Kontakt' }[currentLang] || 'Contact',
    about: { fa: 'درباره ما', ps: 'زمونږ په اړه', en: 'About Us', fr: 'À propos', de: 'Über uns' }[currentLang] || 'About Us',
    language: { fa: 'زبان', ps: 'ژبه', en: 'Language', fr: 'Langue', de: 'Sprache' }[currentLang] || 'Language',
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
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-amber-500/30 py-3' : 'bg-transparent py-5'
      }`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group z-[110]">
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-amber-500 transition-colors uppercase">
              SAFIPAY
            </span>
          </Link>

          <nav className="hidden md:flex items-center relative group/nav">
            <div className="absolute -inset-[4px] -z-10 rounded-full overflow-hidden opacity-70 blur-[8px] transition-all duration-700">
               <img src={activeLangObj.flagUrl} className="w-full h-full object-cover scale-[2.5] animate-[spin_20s_linear_infinite]" alt="" />
            </div>
            <div className="flex items-center gap-8 bg-black/80 border border-white/30 rounded-full px-8 py-2.5 backdrop-blur-2xl relative z-10">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-bold text-gray-300 hover:text-amber-400 transition-all uppercase tracking-widest">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group/lang">
              <div className="absolute -inset-[5px] -z-10 rounded-xl overflow-hidden opacity-80 blur-[5px]">
                 <img src={activeLangObj.flagUrl} className="w-full h-full object-cover scale-150 animate-pulse" alt="" />
              </div>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="relative z-10 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/90 border border-white/40 text-white backdrop-blur-md hover:border-amber-500 transition-all font-bold text-sm shadow-2xl"
              >
                <span>{activeLangObj.flag}</span>
                <span className="uppercase">{activeLangObj.label}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                    className={`absolute ${isRtl ? 'left-0' : 'right-0'} top-full mt-5 w-56 bg-black border border-white/20 rounded-3xl p-2.5 shadow-2xl`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl transition-all ${currentLang === lang.code ? 'bg-amber-500 text-black' : 'text-gray-400 hover:bg-white/10'}`}
                      >
                        <span className="font-bold text-xs uppercase">{lang.label}</span>
                        <span>{lang.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-3 text-white bg-white/10 border border-white/20 rounded-2xl">
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed inset-0 z-[150] bg-black p-8 md:hidden overflow-y-auto">
            <div className="flex justify-between items-center mb-12">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <button onClick={() => setIsMobileOpen(false)} className="p-3 bg-white/10 rounded-full text-white"><X size={24} /></button>
            </div>
            <nav className="flex flex-col gap-8 mb-12">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-amber-500">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => changeLanguage(lang.code)} className={`flex items-center justify-center gap-3 py-4 rounded-2xl border ${currentLang === lang.code ? 'bg-amber-500 text-black' : 'bg-white/5 text-white'}`}>
                  <span>{lang.flag}</span>
                  <span className="text-xs font-bold uppercase">{lang.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}