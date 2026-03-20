'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  Download,
  UserCircle2,
  LogOut,
  LayoutDashboard,
  Globe2,
  ArrowUpRight,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { createClientSideSupabase } from '@/lib/supabase';

const languages = [
  { code: 'fa', label: 'فارسی', flag: '🇦🇫' },
  { code: 'ps', label: 'پښتو', flag: '🇦🇫' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);

  const supabase = createClientSideSupabase();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);

    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, [supabase]);

  const currentLang = pathname?.split('/')[1] || 'en';
  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[2];
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = `/${currentLang}/user/login`;
  };

  const changeLanguage = (lng: string) => {
    if (typeof window !== 'undefined') {
      const pathWithoutLang = pathname.split('/').slice(2).join('/');
      const newPath = `/${lng}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
      window.location.href = newPath;
    }
  };

  const translations: any = {
    home: { fa: 'خانه', ps: 'کور', en: 'Home', fr: 'Accueil', de: 'Startseite', tr: 'Ana Sayfa', ar: 'الرئيسية', ru: 'Главная' },
    partners: { fa: 'شراکت‌ها', ps: 'شراکتونه', en: 'Partners', fr: 'Partenariats', de: 'Partnerschaften', tr: 'Ortaklıklar', ar: 'الشراكات', ru: 'Партнеры' },
    blog: { fa: 'بلاگ', ps: 'بلاګ', en: 'Blog', fr: 'Blog', de: 'Blog', tr: 'Blog', ar: 'المدونة', ru: 'Блог' },
    contact: { fa: 'تماس با ما', ps: 'اړیکه', en: 'Contact', fr: 'Contact', de: 'Kontakt', tr: 'İletişim', ar: 'اتصل بنا', ru: 'Контакт' },
    about: { fa: 'درباره ما', ps: 'زمونږ په اړه', en: 'About Us', fr: 'À propos', de: 'Über uns', tr: 'Hakkımızda', ar: 'من نحن', ru: 'О нас' },
    app: { fa: 'اپلیکیشن', ps: 'اپلیکیشن', en: 'App', fr: "L'app", de: 'App', tr: 'Uygulama', ar: 'التطبيق', ru: 'Приложение' },
    auth: {
      fa: 'ورود / ثبت‌نام',
      ps: 'ننووتل / نوم لیکنه',
      en: 'SIGN UP / LOGIN',
      fr: "S'INSCRIRE / CONNEXION",
      de: 'ANMELDEN / REGISTRIEREN',
      tr: 'GİRİŞ / KAYIT',
      ar: 'تسجيل الدخول / اشتراک',
      ru: 'ВХОД / РЕГИСТРАЦИЯ',
    },
    dashboard: {
      fa: 'داشبورد',
      ps: 'ډشبورډ',
      en: 'Dashboard',
      fr: 'Dashboard',
      de: 'Dashboard',
      tr: 'Panel',
      ar: 'لوحة التحكم',
      ru: 'Панель',
    },
    logout: {
      fa: 'خروج',
      ps: 'وتل',
      en: 'Logout',
      fr: 'Déconnexion',
      de: 'Abmelden',
      tr: 'Çıkış',
      ar: 'تسجيل الخروج',
      ru: 'Выход',
    },
    language: {
      fa: 'زبان',
      ps: 'ژبه',
      en: 'Language',
      fr: 'Langue',
      de: 'Sprache',
      tr: 'Dil',
      ar: 'اللغة',
      ru: 'Язык',
    },
  };

  const navItems = [
    { href: `/${currentLang}`, label: translations.home[currentLang] || translations.home.en },
    { href: `/${currentLang}/partners`, label: translations.partners[currentLang] || translations.partners.en },
    { href: `/${currentLang}/blog`, label: translations.blog[currentLang] || translations.blog.en },
    { href: `/${currentLang}/app`, label: translations.app[currentLang] || translations.app.en, isSpecial: true },
    { href: `/${currentLang}/contact`, label: translations.contact[currentLang] || translations.contact.en },
    { href: `/${currentLang}/about`, label: translations.about[currentLang] || translations.about.en },
  ];

  return (
    <header
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className={`relative mx-auto flex items-center justify-between rounded-[1.6rem] border transition-all duration-500 ${
            scrolled
              ? 'border-amber-500/20 bg-black/75 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl'
              : 'border-white/10 bg-black/30 backdrop-blur-xl'
          } px-4 sm:px-5 lg:px-6 py-3`}
        >
          <div className="absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(245,158,11,0.10),transparent_35%,transparent_65%,rgba(245,158,11,0.05))]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />

          <Link href={`/${currentLang}`} className="relative z-[110] flex min-w-0 items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
              <Image src="/logo.png" alt="SafiPay" fill className="object-contain p-1.5" priority />
            </div>
            <div className="min-w-0">
              <span className="block truncate text-lg sm:text-xl font-black tracking-tighter text-white transition-colors group-hover:text-amber-400 uppercase">
                SAFIPAY
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.28em] text-gray-500">
                Global Digital Banking
              </span>
            </div>
          </Link>

          <nav className="relative z-[110] hidden xl:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 shadow-[0_0_30px_rgba(245,158,11,0.04)]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                    item.isSpecial
                      ? 'text-amber-400 hover:text-white hover:bg-amber-500/15'
                      : isActive
                      ? 'text-white bg-white/8'
                      : 'text-gray-300 hover:text-white hover:bg-white/6'
                  }`}
                >
                  {item.isSpecial && <Download size={13} className="text-amber-500" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-[110] hidden md:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsUserMenuOpen(false);
                }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-white transition-all hover:border-amber-500/30 hover:bg-white/[0.05]"
              >
                <span className="text-base">{activeLangObj.flag}</span>
                <span className="text-xs font-bold uppercase tracking-[0.18em]">{activeLangObj.code}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.96 }}
                    className={`absolute top-full mt-3 w-56 rounded-[1.4rem] border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-2xl ${
                      isRtl ? 'left-0' : 'right-0'
                    }`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`mb-1 flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition-all last:mb-0 ${
                          currentLang === lang.code
                            ? 'bg-amber-500 text-black'
                            : 'text-gray-300 hover:bg-white/6 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-bold">{lang.label}</span>
                        </span>
                        {currentLang === lang.code && <span className="h-2 w-2 rounded-full bg-black" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => {
                    setIsUserMenuOpen(!isUserMenuOpen);
                    setIsLangOpen(false);
                  }}
                  className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-white transition-all hover:border-amber-500/40 hover:bg-amber-500/15"
                >
                  <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black text-[11px] font-black text-amber-500">
                    {user.user_metadata?.avatar_url ? (
                      <Image src={user.user_metadata.avatar_url} alt="User" fill className="object-cover" />
                    ) : (
                      user.user_metadata?.first_name?.charAt(0) || user.email?.charAt(0)?.toUpperCase()
                    )}
                  </div>
                  <span className="max-w-[100px] truncate text-[11px] font-black uppercase tracking-[0.12em]">
                    {user.user_metadata?.first_name || 'Client'}
                  </span>
                  <ChevronDown size={14} className={`transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 14, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 14, scale: 0.96 }}
                      className="absolute top-full right-0 mt-3 w-52 rounded-[1.4rem] border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-2xl"
                    >
                      <Link
                        href={`/${currentLang}/user/dashboard`}
                        className="mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-gray-200 transition-all hover:bg-white/6 hover:text-white"
                      >
                        <LayoutDashboard size={16} className="text-amber-500" />
                        {translations.dashboard[currentLang]}
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-400 transition-all hover:bg-red-500/10"
                      >
                        <LogOut size={16} />
                        {translations.logout[currentLang]}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={`/${currentLang}/user/login`}
                className="flex items-center gap-2 rounded-full border border-amber-500/25 bg-white px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] text-black transition-all hover:bg-amber-500"
              >
                <UserCircle2 size={15} />
                {translations.auth[currentLang]}
              </Link>
            )}
          </div>

          <button
            className="relative z-[110] md:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white transition-all active:scale-95"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[160] bg-black/96 backdrop-blur-2xl md:hidden"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_30%)]" />

            <div className="relative flex h-full flex-col px-5 pt-5 pb-6 overflow-y-auto">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image src="/logo.png" alt="SafiPay" fill className="object-contain p-1.5" />
                  </div>
                  <div>
                    <p className="text-lg font-black tracking-tighter text-white uppercase">SAFIPAY</p>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                      {translations.language[currentLang]}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {!user ? (
                <div className="mb-5 rounded-[1.5rem] border border-amber-500/15 bg-gradient-to-br from-amber-500/10 to-white/[0.03] p-4 shadow-[0_0_30px_rgba(245,158,11,0.08)]">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-amber-400">
                    Account Access
                  </div>
                  <Link
                    href={`/${currentLang}/user/login`}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex min-h-[56px] items-center justify-between rounded-[1.1rem] border border-white/10 bg-white px-4 py-4 text-sm font-black uppercase tracking-[0.14em] text-black"
                  >
                    <span className="flex items-center gap-3">
                      <UserCircle2 size={18} />
                      {translations.auth[currentLang]}
                    </span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              ) : (
                <div className="mb-5 rounded-[1.5rem] border border-amber-500/15 bg-gradient-to-br from-amber-500/10 to-white/[0.03] p-4 shadow-[0_0_30px_rgba(245,158,11,0.08)]">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-amber-400">
                    Account
                  </div>
                  <div className="space-y-3">
                    <Link
                      href={`/${currentLang}/user/dashboard`}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex min-h-[56px] items-center justify-between rounded-[1.1rem] border border-amber-500/25 bg-amber-500/10 px-4 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
                    >
                      <span className="flex items-center gap-3">
                        <LayoutDashboard size={18} className="text-amber-500" />
                        {translations.dashboard[currentLang]}
                      </span>
                      <ArrowUpRight size={16} />
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full min-h-[56px] items-center justify-between rounded-[1.1rem] border border-red-500/20 bg-red-500/10 px-4 py-4 text-sm font-black uppercase tracking-[0.14em] text-red-400"
                    >
                      <span className="flex items-center gap-3">
                        <LogOut size={18} />
                        {translations.logout[currentLang]}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-5 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                  <Globe2 size={15} className="text-amber-500" />
                  {translations.language[currentLang]}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsMobileOpen(false);
                      }}
                      className={`flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                        currentLang === lang.code
                          ? 'bg-amber-500 text-black'
                          : 'bg-black/40 text-gray-300 border border-white/6'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex min-h-[64px] flex-col items-center justify-center rounded-[1.2rem] border px-3 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] transition-all ${
                        item.isSpecial
                          ? 'border-amber-500/30 bg-amber-500/12 text-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.08)]'
                          : 'border-white/8 bg-white/[0.03] text-white'
                      }`}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        {item.isSpecial && <Download size={15} className="text-amber-500" />}
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight size={14} className="text-gray-500" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
