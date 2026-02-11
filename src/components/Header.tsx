'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fa', label: 'فارسی', flag: '🇦🇫' },
  { code: 'ps', label: 'پښتو', flag: '🇦🇫' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // افکت برای تغییر استایل هدر هنگام اسکرول
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تشخیص زبان فعلی
  const currentLang = pathname.split('/')[1] || 'en';
  const isRtl = currentLang === 'fa' || currentLang === 'ps';
  const textDirection = isRtl ? 'rtl' : 'ltr';

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
      dir={textDirection}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* لوگو و نام برند */}
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group relative z-[110]">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain" priority />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-amber-500 transition-colors">
              SAFIPAY
            </span>
          </Link>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-md">
            <div className="flex items-center gap-8">
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

          {/* بخش زبان و اکشن‌ها */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500/20 transition-all font-bold text-sm"
              >
                <Globe size={18} />
                <span>{languages.find(l => l.code === currentLang)?.label}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute ${isRtl ? 'left-0' : 'right-0'} mt-3 w-48 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                          currentLang === lang.code ? 'bg-amber-500 text-black' : 'text-gray-300 hover:bg-white/5'
                        }`}
                      >
                        <span className="font-bold">{lang.label}</span>
                        <span className="text-xl">{lang.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* دکمه منوی موبایل */}
          <button
            className="md:hidden p-2 text-white bg-white/10 rounded-xl"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* منوی تمام صفحه موبایل */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 100 : -100 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="SafiPay" width={40} height={40} />
                <span className="font-black text-xl">SAFIPAY</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 mb-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-4xl font-black text-white hover:text-amber-500 transition-colors uppercase tracking-tighter"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <p className="text-gray-500 mb-6 font-bold uppercase tracking-widest text-xs">{navText.language}</p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all ${
                      currentLang === lang.code ? 'bg-amber-500 text-black' : 'bg-white/5 text-white'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
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