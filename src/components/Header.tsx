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

  // پیدا کردن زبان فعلی از آدرس (مثلاً en یا fa یا de)
  const segments = pathname.split('/').filter(Boolean);
  const currentLang = segments[0] || 'en';
  const activeLangObj = languages.find(l => l.code === currentLang) || languages[2];
  const isRtl = currentLang === 'fa' || currentLang === 'ps';

  // --- تابع هوشمند برای حل مشکل آدرس /en/de ---
  const changeLanguage = (newLang: string) => {
    if (typeof window !== 'undefined') {
      // ۱. گرفتن تمام بخش‌های آدرس به جز زبان فعلی
      const urlSegments = pathname.split('/').filter(Boolean);
      
      // ۲. جایگزین کردن زبان اول یا اضافه کردن زبان جدید به ریشه
      urlSegments[0] = newLang; 
      
      // ۳. ساختن آدرس جدید (حتماً با / شروع می‌شود تا از ریشه باشد)
      const newPath = `/${urlSegments.join('/')}`;
      
      // ۴. انتقال به آدرس جدید به صورت قطعی
      window.location.href = newPath;
    }
  };

  const navText = {
    home: { fa: 'خانه', ps: 'کور', en: 'Home', fr: 'Accueil', de: 'Startseite' }[currentLang] || 'Home',
    invest: { fa: 'سرمایه‌گذاری', ps: 'پانګونه', en: 'Invest', fr: 'Investir', de: 'Investieren' }[currentLang] || 'Invest',
    contact: { fa: 'تماس با ما', ps: 'اړیکه', en: 'Contact', fr: 'Contact', de: 'Kontakt' }[currentLang] || 'Contact',
    about: { fa: 'درباره ما', ps: 'زمونږ په اړه', en: 'About Us', fr: 'À propos', de: 'Über uns' }[currentLang] || 'About Us',
  };

  const navItems = [
    { href: `/${currentLang}`, label: navText.home },
    { href: `/${currentLang}/invest`, label: navText.invest },
    { href: `/${currentLang}/about`, label: navText.about },
    { href: `/${currentLang}/contact`, label: navText.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group relative z-[110]">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="relative w-11 h-11"
            >
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain" priority />
              <div className="absolute inset-0 bg-amber-500 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity" />
            </motion.div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase group-hover:text-amber-500 transition-colors">
              SAFIPAY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  pathname === item.href ? 'bg-amber-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all group"
              >
                <img src={activeLangObj.flagUrl} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                <span className="text-xs font-black uppercase text-white/80 group-hover:text-white">{activeLangObj.code}</span>
                <ChevronDown size={14} className={`text-gray-500 transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-4 w-48 bg-gray-900/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                          currentLang === lang.code ? 'bg-amber-500 text-black font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-black">{lang.label}</span>
                        <img src={lang.flagUrl} className="w-5 h-3 object-cover rounded-sm" alt="" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-2xl text-amber-500"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
                <span className="font-black text-white text-xl uppercase">SAFIPAY</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} className="p-4 bg-white/5 rounded-full"><X size={24} className="text-white" /></button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-5xl font-black text-white hover:text-amber-500 transition-colors uppercase tracking-tighter"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center justify-center gap-3 py-5 rounded-3xl border ${
                    currentLang === lang.code ? 'bg-amber-500 border-amber-500 text-black' : 'bg-white/5 border-white/10 text-white'
                  }`}
                >
                  <img src={lang.flagUrl} className="w-6 h-4 object-cover rounded-sm" alt="" />
                  <span className="font-black text-[10px] uppercase">{lang.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}