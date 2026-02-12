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
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', flagUrl: 'https://flagcdn.com/w160/tr.png' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪', flagUrl: 'https://flagcdn.com/w160/ae.png' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', flagUrl: 'https://flagcdn.com/w160/ru.png' },
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

  const currentLang = pathname.split('/')[1] || 'en';
  const activeLangObj = languages.find(l => l.code === currentLang) || languages[2];
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);

  const changeLanguage = (lng: string) => {
    if (typeof window !== 'undefined') {
      const pathWithoutLang = pathname.split('/').slice(2).join('/');
      const newPath = `/${lng}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
      window.location.href = newPath;
    }
  };

  const translations: any = {
    home: { fa: 'خانه', ps: 'کور', en: 'Home', fr: 'Accueil', de: 'Startseite', tr: 'Ana Sayfa', ar: 'الرئيسية', ru: 'Главная' },
    partnerships: { 
      fa: 'شراکت‌ها', 
      ps: 'شراکتونه', 
      en: 'Partnerships', 
      fr: 'Partenariats', 
      de: 'Partnerschaften', 
      tr: 'Ortaklıklar', 
      ar: 'الشراکات', 
      ru: 'Партнерство' 
    },
    contact: { fa: 'تماس با ما', ps: 'اړیکه', en: 'Contact', fr: 'Contact', de: 'Kontakt', tr: 'İletişim', ar: 'اتصل بنا', ru: 'Контакт' },
    about: { fa: 'درباره ما', ps: 'زمونږ په اړه', en: 'About Us', fr: 'À propos', de: 'Über uns', tr: 'Hakkımızda', ar: 'من نحن', ru: 'О нас' },
    language: { fa: 'زبان', ps: 'ژبه', en: 'Language', fr: 'Langue', de: 'Sprache', tr: 'Dil', ar: 'اللغة', ru: 'Языک' }
  };

  const navItems = [
  { href: `/${currentLang}`, label: translations.home[currentLang] || translations.home.en },
  // تغییر این خط:
  { href: `/${currentLang}/partners`, label: translations.partnerships[currentLang] || translations.partnerships.en },
  { href: `/${currentLang}/contact`, label: translations.contact[currentLang] || translations.contact.en },
  { href: `/${currentLang}/about`, label: translations.about[currentLang] || translations.about.en },
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
          
          {/* لوگو با افکت هاور */}
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group relative z-[110]">
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-amber-500 transition-colors uppercase">
              SAFIPAY
            </span>
          </Link>

          {/* منوی اصلی با هاله چرخشی پرچم (Spin Effect) */}
          <nav className="hidden md:flex items-center relative group/nav">
            <div className="absolute -inset-[4px] -z-10 rounded-full overflow-hidden opacity-70 blur-[8px] group-hover/nav:opacity-100 group-hover/nav:blur-[5px] transition-all duration-700">
                <img 
                  src={activeLangObj.flagUrl} 
                  className="w-full h-full object-cover scale-[2.5] animate-[spin_20s_linear_infinite]" 
                  alt="" 
                />
            </div>

            <div className="flex items-center gap-8 bg-black/80 border border-white/30 rounded-full px-8 py-2.5 backdrop-blur-2xl relative z-10 shadow-2xl">
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

          {/* انتخاب زبان با Glow Effect */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group/lang flex items-center justify-center">
              <div className="absolute -inset-[5px] -z-10 rounded-xl overflow-hidden opacity-80 blur-[5px] group-hover/lang:opacity-100 group-hover/lang:blur-[3px] transition-all duration-500">
                 <img 
                   src={activeLangObj.flagUrl} 
                   className="w-full h-full object-cover scale-150 animate-pulse" 
                   alt="" 
                 />
              </div>

              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="relative z-10 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/90 border border-white/40 text-white backdrop-blur-md hover:border-amber-500 transition-all font-bold text-sm shadow-2xl"
              >
                <span className="text-xl drop-shadow-md">{activeLangObj.flag}</span>
                <span className="tracking-wide uppercase">{activeLangObj.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className={`absolute ${isRtl ? 'left-0' : 'right-0'} top-full mt-5 w-56 bg-black/95 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2.5`}
                  >
                    <div className="max-h-[280px] overflow-y-auto custom-scrollbar pr-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl transition-all group mb-1 last:mb-0 ${
                            currentLang === lang.code ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/40' : 'text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                             <span className="text-lg opacity-90 group-hover:opacity-100">{lang.flag}</span>
                             <span className="font-bold text-xs tracking-widest uppercase">{lang.label}</span>
                          </div>
                          {currentLang === lang.code && <div className="w-2 h-2 rounded-full bg-black shadow-inner" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* دکمه موبایل */}
          <button
            className="md:hidden p-3 text-white bg-white/10 border border-white/20 rounded-2xl active:scale-95 transition-transform"
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-[150] bg-black/98 backdrop-blur-3xl flex flex-col p-8 md:hidden"
          >
            <div className="absolute inset-0 -z-10 opacity-20 blur-3xl overflow-hidden">
               <img src={activeLangObj.flagUrl} className="w-full h-full object-cover scale-[2]" alt="bg" />
            </div>

            <div className="flex justify-between items-center mb-16 text-white">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="SafiPay" width={35} height={35} />
                <span className="font-black text-lg tracking-tighter">SAFIPAY</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} className="p-3 bg-white/10 border border-white/20 rounded-full">
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
              <p className="text-[10px] text-gray-400 mb-6 font-black uppercase tracking-[0.3em] opacity-70">
                {translations.language[currentLang] || translations.language.en}
              </p>
              <div className="grid grid-cols-2 gap-4 max-h-[250px] overflow-y-auto pr-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-center gap-3 py-5 rounded-[2rem] font-bold text-xs transition-all border ${
                      currentLang === lang.code ? 'bg-amber-500 border-amber-500 text-black' : 'bg-white/5 border-white/10 text-white shadow-xl'
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