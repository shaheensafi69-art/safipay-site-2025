'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

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

  // تشخیص زبان فعلی از URL
  const currentLang = pathname.split('/')[1] || 'fa';

  // جهت متن: فارسی و پشتو → راست به چپ، انگلیسی و فرانسوی → چپ به راست
  const textDirection = currentLang === 'en' || currentLang === 'fr' ? 'ltr' : 'rtl';

  const changeLanguage = (lng: string) => {
    const cleanPath = pathname.replace(/^\/(fa|en|ps|fr)/, '') || '/';
    const newPath = `/${lng}${cleanPath}`;
    router.push(newPath);
    router.refresh();
    setIsMobileOpen(false);
    setIsLangOpen(false);
  };

  // متن‌های هدر بر اساس زبان فعلی
  const navText = {
    home: currentLang === 'en' ? 'Home' :
          currentLang === 'ps' ? 'کور' :
          currentLang === 'fr' ? 'Accueil' : 'خانه',
    invest: currentLang === 'en' ? 'Invest' :
            currentLang === 'ps' ? 'پانګونه' :
            currentLang === 'fr' ? 'Investir' : 'سرمایه‌گذاری',
    contact: currentLang === 'en' ? 'Contact Us' :
             currentLang === 'ps' ? 'اړیکه' :
             currentLang === 'fr' ? 'Contactez-nous' : 'تماس با ما',
    about: currentLang === 'en' ? 'About Us' :
           currentLang === 'ps' ? 'زمونږ په اړه' :
           currentLang === 'fr' ? 'À propos de nous' : 'درباره ما',
    language: currentLang === 'en' ? 'Language' :
              currentLang === 'ps' ? 'ژبه' :
              currentLang === 'fr' ? 'Langue' : 'زبان',
  };

  const navItems = [
    { href: '/', label: navText.home },
    { href: '/invest', label: navText.invest },
    { href: '/contact', label: navText.contact },
    { href: '/about', label: navText.about },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-lg border-b border-amber-900/40 shadow-lg" dir={textDirection}>
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* لوگو */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="SafiPay"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-amber-500 hidden sm:block">
              SAFIPAY
            </span>
          </Link>

          {/* دسکتاپ منو + سوییچ زبان */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            <nav className="flex items-center gap-8 lg:gap-10">
              <Link
                href="/"
                className="text-base lg:text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors relative group"
              >
                {navText.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/invest"
                className="text-base lg:text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors relative group"
              >
                {navText.invest}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-base lg:text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors relative group"
              >
                {navText.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-base lg:text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors relative group"
              >
                {navText.about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* سوییچ زبان */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-amber-950/50 transition-all"
              >
                <Globe size={22} className="text-amber-400" />
                <span className="text-sm font-medium uppercase text-gray-300">
                  {languages.find(l => l.code === currentLang)?.label || 'FA'}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-900/95 border border-amber-800/50 rounded-xl shadow-2xl overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center gap-3 w-full text-left px-5 py-3.5 text-gray-200 hover:bg-amber-950/70 hover:text-amber-400 transition-colors ${
                        currentLang === lang.code ? 'bg-amber-950/50' : ''
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* همبرگر موبایل */}
          <button
            className="md:hidden text-amber-400 p-2 rounded-lg hover:bg-amber-950/50 transition z-50"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMobileOpen && (
        <div className="md:hidden bg-gray-950/95 border-b border-amber-900/40 backdrop-blur-lg" dir={textDirection}>
          <div className="container mx-auto px-5 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-medium text-gray-200 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-amber-900/30">
              <div className="text-lg font-medium text-amber-400 mb-4">{navText.language}</div>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all text-base ${
                      currentLang === lang.code
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-gray-800/80 text-gray-200 hover:bg-amber-950/80'
                    }`}
                  >
                    <span className="text-3xl mb-1">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}