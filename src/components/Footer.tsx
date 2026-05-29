'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Globe,
  ArrowUpRight,
  ChevronRight,
  LayoutGrid,
  UserCircle2,
  Mail,
  Shield,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const XIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname ? pathname.split('/')[1] || 'fa' : 'fa';
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);

  const allContent: any = {
    fa: {
      slogan: 'صافی‌پی؛ فراتر از یک سیستم مالی، ما پلی می‌سازیم برای اتصال افغانستان به اقتصاد نوین جهانی.',
      navTitle: 'دسترسی سریع',
      blogTitle: 'دانشنامه و اخبار',
      blogBtn: 'مشاهده تمام مقالات صافی‌پی',
      teamTitle: 'رهبران اصلی SAFIPAY',
      authText: 'ورود / ثبت‌نام',
      contactTitle: 'ارتباط جهانی',
      statusText: 'زیرساخت مالی دیجیتال، امن و بین‌المللی',
      links: [
        { name: 'صفحه اصلی', href: `/fa` },
        { name: 'شرکای تجاری', href: `/fa/partners` },
        { name: 'ارتباط با ما', href: `/fa/contact` },
        { name: 'درباره ما', href: `/fa/about` },
        { name: 'شاهین صافی', href: `/fa/founder/shaheen-safi` },
        { name: 'مجتبی رحمانی', href: `/fa/founder/mujtaba-rahmani` },
        { name: 'ساحل سالم', href: `/fa/founder/sahel-salem` },
        { name: 'شیرین گل احمدی', href: `/fa/founder/shirin-gol-ahmadi` },
      ],
    },
    ps: {
      slogan: 'صافي پي؛ له مالي سیستم اخوا، موږ د نړیوال نوي اقتصاد سره د افغانستان د نښلولو لپاره یو پل جوړوو.',
      navTitle: 'چټک لاسرسی',
      blogTitle: 'پوهنغونډ او خبرونه',
      blogBtn: 'د صافي پي ټولې مقالې وګورئ',
      teamTitle: 'د SAFIPAY اصلي مشرتابه',
      authText: 'ننووتل / نوم لیکنه',
      contactTitle: 'نړیواله اړیکه',
      statusText: 'خوندي، نړیوال او ډیجیټلي مالي زیربنا',
      links: [
        { name: 'اصلي پاڼه', href: `/ps` },
        { name: 'سوداګریز شریکان', href: `/ps/partners` },
        { name: 'اړیکه', href: `/ps/contact` },
        { name: 'زموږ په اړه', href: `/ps/about` },
        { name: 'شاهین صافی', href: `/ps/founder/shaheen-safi` },
        { name: 'مجتبی رحماني', href: `/ps/founder/mujtaba-rahmani` },
        { name: 'ساحل سالم', href: `/ps/founder/sahel-salem` },
        { name: 'شیرین ګل احمدي', href: `/ps/founder/shirin-gol-ahmadi` },
      ],
    },
    en: {
      slogan: 'SafiPay: More than a system, a bridge connecting Afghanistan to the modern global economy.',
      navTitle: 'QUICK LINKS',
      blogTitle: 'INSIGHTS & NEWS',
      blogBtn: 'VIEW ALL INSIGHTS',
      teamTitle: 'CORE LEADERSHIP',
      authText: 'SIGN UP / LOGIN',
      contactTitle: 'GLOBAL ACCESS',
      statusText: 'Secure international digital financial infrastructure',
      links: [
        { name: 'Home', href: `/en` },
        { name: 'Partners', href: `/en/partners` },
        { name: 'Contact', href: `/en/contact` },
        { name: 'About Us', href: `/en/about` },
        { name: 'Shaheen Safi', href: `/en/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/en/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/en/founder/sahel-salem` },
        { name: 'Shirin Gol Ahmadi', href: `/en/founder/shirin-gol-ahmadi` },
      ],
    },
    de: {
      slogan: 'SafiPay: Mehr als ein System, eine Brücke, die Afghanistan mit der modernen Weltwirtschaft verbindet.',
      navTitle: 'SCHNELLZUGRIFF',
      blogTitle: 'WISSEN & NEWS',
      blogBtn: 'ALLE ARTIKEL ANSEHEN',
      teamTitle: 'KERNLEITUNG',
      authText: 'ANMELDEN / REGISTRIEREN',
      contactTitle: 'GLOBALER ZUGANG',
      statusText: 'Sichere internationale digitale Finanzinfrastruktur',
      links: [
        { name: 'Startseite', href: `/de` },
        { name: 'Partner', href: `/de/partners` },
        { name: 'Kontakt', href: `/de/contact` },
        { name: 'Über uns', href: `/de/about` },
        { name: 'Shaheen Safi', href: `/de/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/de/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/de/founder/sahel-salem` },
        { name: 'Shirin Gol Ahmadi', href: `/de/founder/shirin-gol-ahmadi` },
      ],
    },
    ru: {
      slogan: 'SafiPay: Больше чем система, мост, соединяющий Афганистан с современной мировой экономикой.',
      navTitle: 'БЫСТРЫЙ ДОСТУП',
      blogTitle: 'ЗНАНИЯ И НОВОСТИ',
      blogBtn: 'ПОСМОТРЕТЬ ВСЕ СТАТЬИ',
      teamTitle: 'КЛЮЧЕВОЕ РУКОВОДСТВО',
      authText: 'ВХОД / РЕГИСТРАЦИЯ',
      contactTitle: 'ГЛОБАЛЬНЫЙ ДОСТУП',
      statusText: 'Безопасная международная цифровая финансовая инфраструктура',
      links: [
        { name: 'Главная', href: `/ru` },
        { name: 'Партнеры', href: `/ru/partners` },
        { name: 'Контакт', href: `/ru/contact` },
        { name: 'О нас', href: `/ru/about` },
        { name: 'Шахин Сафи', href: `/ru/founder/shaheen-safi` },
        { name: 'Муджтаба Рахмани', href: `/ru/founder/mujtaba-rahmani` },
        { name: 'Сахель Салем', href: `/ru/founder/sahel-salem` },
        { name: 'Ширин Голь Ахмади', href: `/ru/founder/shirin-gol-ahmadi` },
      ],
    },
    tr: {
      slogan: "SafiPay: Bir sistemden fazlası, Afganistan'ı modern küresel ekonomiye bağlayan bir köprü.",
      navTitle: 'HIZLI ERİŞİM',
      blogTitle: 'BİLGİ VE HABERLER',
      blogBtn: 'TÜM MAKALELERİ GÖR',
      teamTitle: 'TEMEL LİDERLİK',
      authText: 'GİRİŞ / KAYIT',
      contactTitle: 'KÜRESEL ERİŞİM',
      statusText: 'Güvenli uluslararası dijital finans altyapısı',
      links: [
        { name: 'Anasayfa', href: `/tr` },
        { name: 'Ortaklar', href: `/tr/partners` },
        { name: 'İletişim', href: `/tr/contact` },
        { name: 'Hakkımızda', href: `/tr/about` },
        { name: 'Shaheen Safi', href: `/tr/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/tr/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/tr/founder/sahel-salem` },
        { name: 'Shirin Gol Ahmadi', href: `/tr/founder/shirin-gol-ahmadi` },
      ],
    },
    fr: {
      slogan: "SafiPay : Plus qu'un système, un pont reliant l'Afghanistan à l'économie mondiale moderne.",
      navTitle: 'ACCÈS RAPIDE',
      blogTitle: 'INSIGHTS & ACTUALITÉS',
      blogBtn: 'VOIR TOUS LES ARTICLES',
      teamTitle: 'DIRECTION PRINCIPALE',
      authText: "S'INSCRIRE / CONNEXION",
      contactTitle: 'ACCÈS MONDIAL',
      statusText: 'Infrastructure financière numérique internationale et sécurisée',
      links: [
        { name: 'Accueil', href: `/fr` },
        { name: 'Partenaires', href: `/fr/partners` },
        { name: 'Contact', href: `/fr/contact` },
        { name: 'À propos', href: `/fr/about` },
        { name: 'Shaheen Safi', href: `/fr/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/fr/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/fr/founder/sahel-salem` },
        { name: 'Shirin Gol Ahmadi', href: `/fr/founder/shirin-gol-ahmadi` },
      ],
    },
    ar: {
      slogan: 'صافي بي؛ أكثر من مجرد نظام مالي، نحن نبني جسراً لربط أفغانستان بالاقتصاد العالمي الحديث.',
      navTitle: 'وصول سريع',
      blogTitle: 'الموسوعة والأخبار',
      blogBtn: 'مشاهدة جميع المقالات',
      teamTitle: 'القيادة الأساسية',
      authText: 'تسجيل الدخول / اشتراك',
      contactTitle: 'وصول عالمي',
      statusText: 'بنية مالية رقمية دولية آمنة',
      links: [
        { name: 'الصفحة الرئيسية', href: `/ar` },
        { name: 'شركاء الأعمال', href: `/ar/partners` },
        { name: 'اتصل بنا', href: `/ar/contact` },
        { name: 'حولنا', href: `/ar/about` },
        { name: 'شاهين صافي', href: `/ar/founder/shaheen-safi` },
        { name: 'مجتبى رحماني', href: `/ar/founder/mujtaba-rahmani` },
        { name: 'ساحل سالم', href: `/ar/founder/sahel-salem` },
        { name: 'شيرين جول أحمدي', href: `/ar/founder/shirin-gol-ahmadi` },
      ],
    },
  };

  const content = allContent[currentLang] || allContent.fa;

  const leaders = [
    {
      name: 'SHAHEEN SAFI',
      role: 'Founder',
      image: '/shaheen.jpeg',
      href: `/${currentLang}/founder/shaheen-safi`,
      accent: 'from-amber-500/30 to-transparent',
      socials: [
        { href: 'https://facebook.com/share/1H1vuV1i9Z/', icon: <Facebook size={16} />, hover: 'hover:text-[#1877F2]' },
        { href: 'https://x.com/safi_sahib01', icon: <XIcon size={14} />, hover: 'hover:text-white' },
        { href: 'https://www.linkedin.com/in/shaheen-safi-b73a30299', icon: <Linkedin size={16} />, hover: 'hover:text-[#0A66C2]' },
        { href: 'https://www.instagram.com/top_g_official1', icon: <Instagram size={16} />, hover: 'hover:text-[#E4405F]' },
        { href: 'https://www.tiktok.com/@safi_sahib6', icon: <TikTokIcon size={16} />, hover: 'hover:text-white' },
        { href: 'https://Wa.me/+19342032497', icon: <MessageCircle size={16} />, hover: 'hover:text-[#25D366]' },
      ],
    },
    {
      name: 'MUJTABA RAHMANI',
      role: 'Operations Manager',
      image: '/mujtaba.jpeg',
      href: `/${currentLang}/founder/mujtaba-rahmani`,
      accent: 'from-blue-500/25 to-transparent',
      socials: [
        { href: 'https://www.facebook.com/share/1DJJUX1TS2/', icon: <Facebook size={16} />, hover: 'hover:text-[#1877F2]' },
        { href: 'https://www.linkedin.com/mwlite/profile/me', icon: <Linkedin size={16} />, hover: 'hover:text-[#0A66C2]' },
        { href: 'https://www.instagram.com/bigshot_tradez', icon: <Instagram size={16} />, hover: 'hover:text-[#E4405F]' },
        { href: 'https://www.tiktok.com/@chill_asf_fr', icon: <TikTokIcon size={16} />, hover: 'hover:text-white' },
        { href: 'https://wa.me/+93793035609', icon: <MessageCircle size={16} />, hover: 'hover:text-[#25D366]' },
      ],
    },
    {
      name: 'SAHEL SALEM',
      role: 'Europe Relations',
      image: '/sahel.jpeg',
      href: `/${currentLang}/founder/sahel-salem`,
      accent: 'from-emerald-500/25 to-transparent',
      socials: [
        { href: '#', icon: <Facebook size={16} />, hover: 'hover:text-[#1877F2]' },
        { href: '#', icon: <XIcon size={14} />, hover: 'hover:text-white' },
        { href: '#', icon: <Linkedin size={16} />, hover: 'hover:text-[#0A66C2]' },
        { href: '#', icon: <Instagram size={16} />, hover: 'hover:text-[#E4405F]' },
        { href: '#', icon: <TikTokIcon size={16} />, hover: 'hover:text-white' },
        { href: '#', icon: <MessageCircle size={16} />, hover: 'hover:text-[#25D366]' },
      ],
    },
    {
      name: 'SHIRIN GOL AHMADI',
      role: 'SafiPay Manager',
      image: '/shirin.jpeg',
      href: `/${currentLang}/founder/shirin-gol-ahmadi`,
      accent: 'from-pink-500/25 to-transparent', // رنگ اختصاصی صورتی برای شیرین گل
      socials: [
        { href: 'https://www.linkedin.com/in/shirin-gol-ahmadi-842b40344?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: <Linkedin size={16} />, hover: 'hover:text-[#0A66C2]' },
        { href: 'mailto:shirin@safipay.net', icon: <Mail size={14} />, hover: 'hover:text-pink-400' },
      ],
    },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5 bg-[#020202] pt-24 pb-10"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_30%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute -top-16 right-0 h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 overflow-hidden rounded-[2.5rem] border border-white/6 bg-white/[0.02] backdrop-blur-2xl"
        >
          <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,158,11,0.08),transparent_50%)]" />
              <div className="relative z-10">
                <div className={`mb-6 flex items-center gap-3 ${isRtl ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <span className="text-3xl font-black italic tracking-tighter text-white">SAFIPAY</span>
                  <Image src="/logo.png" alt="SafiPay" width={44} height={44} className="brightness-125" />
                </div>

                <p className="max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                  {content.slogan}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-amber-400">
                    <Shield size={14} />
                    Secure
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-gray-300">
                    <Sparkles size={14} className="text-amber-500" />
                    Premium Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 p-8 md:p-10 lg:border-t-0 lg:border-s lg:border-white/5">
              <div className="mb-4 text-[10px] font-black uppercase tracking-[0.38em] text-amber-500/60">
                {content.contactTitle}
              </div>
              <p className="mb-6 max-w-md text-sm leading-7 text-gray-400">
                {content.statusText}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-black/40 px-4 py-3 text-sm text-gray-300">
                  <Mail size={16} className="text-amber-500" />
                  contact@safipay.net
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-black/40 px-4 py-3 text-sm text-gray-300">
                  <MapPin size={16} className="text-amber-500" />
                  Kabul • Istanbul • Paris
                </div>
                <Link
                  href={`/${currentLang}/user/login`}
                  className="group flex items-center justify-between rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm font-bold text-amber-400 transition-all hover:border-amber-500/40 hover:bg-amber-500/15 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <UserCircle2 size={16} />
                    {content.authText}
                  </span>
                  <ArrowUpRight size={16} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* بخش نمایش اعضای تیم که حالا به جای ۳ نفر، ۴ نفر را پشتیبانی می‌کند */}
        <div className="mb-14">
          <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/5 pb-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/70">
              {content.teamTitle}
            </h4>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
          </div>

          {/* تغییر استایل گرید به لایوت منعطف تا ۴ نفر در صفحات بزرگ به زیبایی نمایش داده شوند */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/6 bg-white/[0.02] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/25 hover:bg-white/[0.03]"
              >
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${leader.accent}`} />

                <div className="relative z-10 flex items-start gap-4">
                  <Link href={leader.href} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40">
                    <Image src={leader.image} alt={leader.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <Link href={leader.href} className="block">
                      <h5 className="truncate text-sm font-black tracking-[0.08em] text-white transition-colors group-hover:text-amber-400">
                        {leader.name}
                      </h5>
                    </Link>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-500">
                      {leader.role}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5 text-gray-500">
                      {leader.socials.map((social, i) => (
                        <Link
                          key={i}
                          href={social.href}
                          target="_blank"
                          className={`rounded-full border border-white/6 bg-black/40 p-2 transition-all ${social.hover}`}
                        >
                          {social.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-white/5 py-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h4 className="mb-7 text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
              {content.navTitle}
            </h4>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {content.links.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 text-sm text-gray-400 transition-all hover:border-amber-500/20 hover:bg-white/[0.03] hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <ChevronRight size={13} className={`text-amber-500/30 transition-transform group-hover:text-amber-500 ${isRtl ? 'rotate-180' : ''}`} />
                    {link.name}
                  </span>
                  <ArrowUpRight size={14} className={`text-gray-700 transition-all group-hover:text-amber-500 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-7 text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
              {content.blogTitle}
            </h4>

            <Link
              href={`/${currentLang}/blog`}
              className="group block rounded-[2rem] border border-white/6 bg-white/[0.02] p-6 transition-all hover:border-amber-500/25 hover:bg-white/[0.03]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/15 bg-amber-500/10 text-amber-500">
                <LayoutGrid size={20} />
              </div>

              <div className="mb-3 text-lg font-black tracking-tight text-white">
                {content.blogBtn}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
                <span>Explore SafiPay knowledge hub</span>
                <ArrowUpRight size={15} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/5 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-start">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.45em] text-gray-600">
              © 2026 SAFIPAY GLOBAL DIGITAL BANKING SYSTEM.
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-white/20">
              Engineered by <span className="text-white/40">Shaheen Safi</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {['KABUL', 'ISTANBUL', 'PARIS'].map((city) => (
              <div
                key={city}
                className="rounded-full border border-white/6 bg-white/[0.02] px-4 py-2 text-[10px] font-black tracking-[0.28em] text-gray-400"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}