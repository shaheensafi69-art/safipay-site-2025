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
      const segments = pathname.split('/');
      segments[1] = lng;
      const newPath = segments.join('/');
      window.location.href = newPath;
    }
  };

  const translations: any = {
    home: { fa: 'خانه', ps: 'کور', en: 'Home', fr: 'Accueil', de: 'Startseite', tr: 'Ana Sayfa', ar: 'الرئيسية', ru: 'Главная' },
    partners: { fa: 'شراکت‌ها', ps: 'شراکتونه', en: 'Partners', fr: 'Partenaires', de: 'Partner', tr: 'Ortaklar', ar: 'الشراكات', ru: 'Партнеры' },
    contact: { fa: 'تماس با ما', ps: 'اړیکه', en: 'Contact', fr: 'Contact', de: 'Kontakt', tr: 'İletişim', ar: 'اتصل بنا', ru: 'Контакт' },
    about: { fa: 'درباره ما', ps: 'زمونږ په اړه', en: 'About Us', fr: 'À propos', de: 'Über uns', tr: 'Hakkımızدا', ar: 'من نحن', ru: 'О нас' },
    language: { fa: 'زبان', ps: 'ژبه', en: 'Language', fr: 'Langue', de: 'Sprache', tr: 'Dil', ar: 'اللغة', ru: 'Язык' }
  };

  const navItems = [
    { href: `/${currentLang}`, label: translations.home[currentLang] || translations.home.en },
    { href: `/${currentLang}/partners`, label: translations.partners[currentLang] || translations.partners.en },
    { href: `/${currentLang}/contact`, label: translations.contact[currentLang] || translations.contact.en },
    { href: `/${currentLang}/about`, label: translations.about[currentLang] || translations.about.en },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-amber-500/30 py-3' : 'bg-transparent py-5'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group z-[110]">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-black text-white group-hover:text-amber-500 uppercase tracking-tighter">
              SAFIPAY
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 bg-black/80 border border-white/30 rounded-full px-8 py-2.5 backdrop-blur-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition-all relative group uppercase tracking-widest ${
                  pathname === item.href ? 'text-amber-500' : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/90 border border-white/40 text-white hover:border-amber-500 transition-all font-bold text-sm"
              >
                <span>{activeLangObj.flag}</span>
                <span className="uppercase tracking-wide">{activeLangObj.label}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute ${isRtl ? 'left-0' : 'right-0'} top-full mt-2 w-48 bg-black/95 border border-white/20 rounded-2xl overflow-hidden p-2 shadow-2xl backdrop-blur-xl`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { changeLanguage(lang.code); setIsLangOpen(false); }}
                        className={`flex items-center w-full px-4 py-2.5 rounded-xl text-xs uppercase font-bold transition-all mb-1 last:mb-0 ${
                          currentLang === lang.code ? 'bg-amber-500 text-black' : 'text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="mr-3">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            className="md:hidden p-3 text-white bg-white/10 border border-white/20 rounded-2xl"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[150] bg-black flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Image src="/logo.png" alt="SafiPay" width={35} height={35} />
              <button onClick={() => setIsMobileOpen(false)} className="p-3 bg-white/10 rounded-full text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-3xl font-black text-white uppercase tracking-tighter"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`py-4 rounded-2xl font-bold text-xs border ${
                    currentLang === lang.code ? 'bg-amber-500 border-amber-500 text-black' : 'bg-white/5 border-white/10 text-white'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}