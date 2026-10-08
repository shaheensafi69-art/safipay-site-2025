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
  Github,
  Code2,
  Smartphone,
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
      slogan: 'صافی‌پی؛ فراتر از یک سیستم مالی، ما زیرساختی پیشرفته برای دسترسی همگانی به اقتصاد نوین جهانی می‌سازیم.',
      navTitle: 'دسترسی سریع',
      blogTitle: 'دانشنامه و اخبار',
      blogBtn: 'مشاهده تمام مقالات',
      blogDesc: 'کاوش در دانشنامه و مقالات صافی‌پی',
      academyTitle: 'صافی اکادمی',
      academyDesc: 'پلتفرم آموزشی و مهارت‌های نوین',
      teamTitle: 'رهبران اصلی SAFIPAY',
      authText: 'ورود / ثبت‌نام',
      contactTitle: 'ارتباط جهانی',
      statusText: 'زیرساخت مالی دیجیتال، امن و بین‌المللی',
      privacyTitle: 'سیاست حفظ حریم خصوصی',
      termsTitle: 'شرایط و استانداردهای خدمات',
      links: [
        { name: 'صفحه اصلی', href: `/fa` },
        { name: 'شرکای تجاری', href: `/fa/partners` },
        { name: 'ارتباط با ما', href: `/fa/contact` },
        { name: 'درباره ما', href: `/fa/about` },
        { name: 'سیاست حریم خصوصی بانکی', href: `/fa/privacy` },
        { name: 'شرایط و مقررات خدمات اروپا', href: `/fa/terms` },
        { name: 'شاهین صافی', href: `/fa/founder/shaheen-safi` },
        { name: 'ساحل سالم', href: `/fa/founder/sahel-salem` },
        { name: 'مجتبی رحمانی', href: `/fa/founder/mujtaba-rahmani` },
        { name: 'شیرین گل احمدی', href: `/fa/founder/shirin-gol-ahmadi` },
        { name: 'مبین حسنی', href: `/fa/founder/mobin-hassani` },
        { name: 'اپلیکیشن صافی‌پی (گوگل پلی)', href: `/fa/app` },
      ],
    },
    ps: {
      slogan: 'صافي پي؛ له مالي سیستم اخوا، موږ له نوي نړیوال اقتصاد سره د نښلولو لپاره یو پیاوړی نړیوال پل جوړوو.',
      navTitle: 'چټک لاسرسی',
      blogTitle: 'پوهنغونډ او خبرونه',
      blogBtn: 'د صافي پي ټولې مقالې',
      blogDesc: 'د صافي پي پوهنیز مرکز وپلټئ',
      academyTitle: 'صافي اکاډمي',
      academyDesc: 'د عصري مهارتونو زده کړه او پراختیا',
      teamTitle: 'د SAFIPAY اصلي مشرتابه',
      authText: 'ننووتل / نوم لیکنه',
      contactTitle: 'نړیواله اړیکه',
      statusText: 'خوندي، نړیوال او ډیجیټلي مالي زیربنا',
      privacyTitle: 'د محرمیت تګلاره',
      termsTitle: 'د خدماتو شرایط او مقررات',
      links: [
        { name: 'اصلي پاڼه', href: `/ps` },
        { name: 'سوداګریز شریکان', href: `/ps/partners` },
        { name: 'اړیکه', href: `/ps/contact` },
        { name: 'زموږ په اړه', href: `/ps/about` },
        { name: 'د بانکي محرمیت تګلاره', href: `/ps/privacy` },
        { name: 'د اروپا د خدماتو شرایط', href: `/ps/terms` },
        { name: 'شاهین صافی', href: `/ps/founder/shaheen-safi` },
        { name: 'ساحل سالم', href: `/ps/founder/sahel-salem` },
        { name: 'مجتبی رحماني', href: `/ps/founder/mujtaba-rahmani` },
        { name: 'شیرین ګل احمدي', href: `/ps/founder/shirin-gol-ahmadi` },
        { name: 'مبین حسني', href: `/ps/founder/mobin-hassani` },
        { name: 'صافي پي اپلیکیشن (ګوګل پلی)', href: `/ps/app` },
      ],
    },
    en: {
      slogan: 'SafiPay: More than a system, a bridge connecting users worldwide to the modern global economy.',
      navTitle: 'QUICK LINKS',
      blogTitle: 'INSIGHTS & NEWS',
      blogBtn: 'VIEW ALL INSIGHTS',
      blogDesc: 'Explore SafiPay knowledge hub',
      academyTitle: 'SAFI ACADEMY',
      academyDesc: 'Explore Safi Academy platform',
      teamTitle: 'CORE LEADERSHIP',
      authText: 'SIGN UP / LOGIN',
      contactTitle: 'GLOBAL ACCESS',
      statusText: 'Secure international digital financial infrastructure',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service',
      links: [
        { name: 'Home', href: `/en` },
        { name: 'Partners', href: `/en/partners` },
        { name: 'Contact', href: `/en/contact` },
        { name: 'About Us', href: `/en/about` },
        { name: 'Banking Privacy Policy', href: `/en/privacy` },
        { name: 'European Banking Terms', href: `/en/terms` },
        { name: 'Shaheen Safi', href: `/en/founder/shaheen-safi` },
        { name: 'Sahel Salem', href: `/en/founder/sahel-salem` },
        { name: 'Mujtaba Rahmani', href: `/en/founder/mujtaba-rahmani` },
        { name: 'Shirin Gol Ahmadi', href: `/en/founder/shirin-gol-ahmadi` },
        { name: 'Mobin Hassani', href: `/en/founder/mobin-hassani` },
        { name: 'SafiPay App (Google Play)', href: `/en/app` },
      ],
    },
    de: {
      slogan: 'SafiPay: Mehr als ein System, eine Brücke, die Nutzer weltweit mit der modernen Weltwirtschaft verbindet.',
      navTitle: 'SCHNELLZUGRIFF',
      blogTitle: 'EINBLICKE & AKTUELLES',
      blogBtn: 'ALLE ARTIKEL ANSEHEN',
      blogDesc: 'SafiPay Wissens-Hub entdecken',
      academyTitle: 'SAFI ACADEMY',
      academyDesc: 'Offizielle Bildungsplattform',
      teamTitle: 'KERNLEITUNG',
      authText: 'ANMELDEN / REGISTRIEREN',
      contactTitle: 'GLOBALER ZUGANG',
      statusText: 'Sichere internationale digitale Finanzinfrastruktur',
      privacyTitle: 'Datenschutzrichtlinie',
      termsTitle: 'Nutzungsbedingungen',
      links: [
        { name: 'Startseite', href: `/de` },
        { name: 'Partner', href: `/de/partners` },
        { name: 'Kontakt', href: `/de/contact` },
        { name: 'Über uns', href: `/de/about` },
        { name: 'Datenschutzrichtlinie', href: `/de/privacy` },
        { name: 'Europäische Banken-AGB', href: `/de/terms` },
        { name: 'Shaheen Safi', href: `/de/founder/shaheen-safi` },
        { name: 'Sahel Salem', href: `/de/founder/sahel-salem` },
        { name: 'Mujtaba Rahmani', href: `/de/founder/mujtaba-rahmani` },
        { name: 'Shirin Gol Ahmadi', href: `/de/founder/shirin-gol-ahmadi` },
        { name: 'Mobin Hassani', href: `/de/founder/mobin-hassani` },
      ],
    },
    ru: {
      slogan: 'SafiPay: Больше чем система, глобальный мост, соединяющий пользователей по всему миру с современной экономикой.',
      navTitle: 'БЫСТРЫЙ ДОСТУП',
      blogTitle: 'НОВОСТИ И АНАЛИТИКА',
      blogBtn: 'ПОСМОТРЕТЬ ВСЕ СТАТЬИ',
      blogDesc: 'Исследуйте базу знаний SafiPay',
      academyTitle: 'SAFI ACADEMY',
      academyDesc: 'Официальная образовательная платформа',
      teamTitle: 'КЛЮЧЕВОЕ РУКОВОДСТВО',
      authText: 'ВХОД / РЕГИСТРАЦИЯ',
      contactTitle: 'ГЛОБАЛЬНЫЙ ДОСТУП',
      statusText: 'Безопасная международная цифровая финансовая инфраструктура',
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Условия обслуживания',
      links: [
        { name: 'Главная', href: `/ru` },
        { name: 'Партнеры', href: `/ru/partners` },
        { name: 'Контакт', href: `/ru/contact` },
        { name: 'О нас', href: `/ru/about` },
        { name: 'Банковская конфиденциальность', href: `/ru/privacy` },
        { name: 'Европейские условия', href: `/ru/terms` },
        { name: 'Шахин Сафи', href: `/ru/founder/shaheen-safi` },
        { name: 'Сахель Салем', href: `/ru/founder/sahel-salem` },
        { name: 'Муджтаба Рахмани', href: `/ru/founder/mujtaba-rahmani` },
        { name: 'Ширин Голь Ахмади', href: `/ru/founder/shirin-gol-ahmadi` },
        { name: 'Мобин Хассани', href: `/ru/founder/mobin-hassani` },
      ],
    },
    tr: {
      slogan: 'SafiPay: Bir sistemden fazlası, dünya çapındaki kullanıcıları modern küresel ekonomiye bağlayan bir köprü.',
      navTitle: 'HIZLI ERİŞİM',
      blogTitle: 'İÇGÖRÜLER VE HABERLER',
      blogBtn: 'TÜM MAKALELERİ GÖR',
      blogDesc: 'SafiPay bilgi merkezini keşfedin',
      academyTitle: 'SAFİ AKADEMİ',
      academyDesc: 'Resmi Eğitim ve Beceri Platformu',
      teamTitle: 'TEMEL LİDERLİK',
      authText: 'GİRİŞ / KAYIT',
      contactTitle: 'KÜRESEL ERİŞİM',
      statusText: 'Güvenli uluslararası dijital finans altyapısı',
      privacyTitle: 'Gizlilik Politikası',
      termsTitle: 'Kullanım Koşulları',
      links: [
        { name: 'Anasayfa', href: `/tr` },
        { name: 'Ortaklar', href: `/tr/partners` },
        { name: 'İletişim', href: `/tr/contact` },
        { name: 'Hakkımızda', href: `/tr/about` },
        { name: 'Gizlilik Politikası', href: `/tr/privacy` },
        { name: 'Avrupa Hizmet Şartları', href: `/tr/terms` },
        { name: 'Shaheen Safi', href: `/tr/founder/shaheen-safi` },
        { name: 'Sahel Salem', href: `/tr/founder/sahel-salem` },
        { name: 'Mujtaba Rahmani', href: `/tr/founder/mujtaba-rahmani` },
        { name: 'Shirin Gol Ahmadi', href: `/tr/founder/shirin-gol-ahmadi` },
        { name: 'Mobin Hassani', href: `/tr/founder/mobin-hassani` },
      ],
    },
    fr: {
      slogan: "SafiPay : Plus qu'un système, un pont reliant les utilisateurs du monde entier à l'économie mondiale moderne.",
      navTitle: 'ACCÈS RAPIDE',
      blogTitle: 'INSIGHTS & ACTUALITÉS',
      blogBtn: 'VOIR TOUS LES ARTICLES',
      blogDesc: 'Explorer le centre de connaissances',
      academyTitle: 'SAFI ACADEMY',
      academyDesc: 'Plateforme académique officielle',
      teamTitle: 'DIRECTION PRINCIPALE',
      authText: "S'INSCRIRE / CONNEXION",
      contactTitle: 'ACCÈS MONDIAL',
      statusText: 'Infrastructure financière numérique internationale et sécurisée',
      privacyTitle: 'Politique de confidentialité',
      termsTitle: 'Conditions d’utilisation',
      links: [
        { name: 'Accueil', href: `/fr` },
        { name: 'Partenaires', href: `/fr/partners` },
        { name: 'Contact', href: `/fr/contact` },
        { name: 'À propos', href: `/fr/about` },
        { name: 'Confidentialité bancaire', href: `/fr/privacy` },
        { name: 'Conditions bancaires UE', href: `/fr/terms` },
        { name: 'Shaheen Safi', href: `/fr/founder/shaheen-safi` },
        { name: 'Sahel Salem', href: `/fr/founder/sahel-salem` },
        { name: 'Mujtaba Rahmani', href: `/fr/founder/mujtaba-rahmani` },
        { name: 'Shirin Gol Ahmadi', href: `/fr/founder/shirin-gol-ahmadi` },
        { name: 'Mobin Hassani', href: `/fr/founder/mobin-hassani` },
      ],
    },
    ar: {
      slogan: 'صافي بي؛ أكثر من مجرد نظام مالي، نحن نبني جسراً عالمياً لربط المستخدمين بالاقتصاد العالمي الحديث.',
      navTitle: 'وصول سريع',
      blogTitle: 'رؤى وأخبار',
      blogBtn: 'مشاهدة جميع المقالات',
      blogDesc: 'استكشف مركز معارف صافي بي',
      academyTitle: 'صافي أكاديمي',
      academyDesc: 'منصة التعليم والمهارات الرسمية',
      teamTitle: 'القيادة الأساسية',
      authText: 'تسجيل الدخول / اشتراک',
      contactTitle: 'وصول عالمي',
      statusText: 'بنية مالية رقمية دولية آمنة',
      privacyTitle: 'سياسة الخصوصية',
      termsTitle: 'شروط الخدمة والأحكام',
      links: [
        { name: 'الصفحة الرئيسية', href: `/ar` },
        { name: 'شركاء الأعمال', href: `/ar/partners` },
        { name: 'اتصل بنا', href: `/ar/contact` },
        { name: 'حولنا', href: `/ar/about` },
        { name: 'سياسة الخصوصية المصرفية', href: `/ar/privacy` },
        { name: 'الشروط المصرفية الأوروبية', href: `/ar/terms` },
        { name: 'شاهين صافي', href: `/ar/founder/shaheen-safi` },
        { name: 'ساحل سالم', href: `/ar/founder/sahel-salem` },
        { name: 'مجتبى رحماني', href: `/ar/founder/mujtaba-rahmani` },
        { name: 'شيرين جول أحمدي', href: `/ar/founder/shirin-gol-ahmadi` },
        { name: 'مبين حسني', href: `/ar/founder/mobin-hassani` },
      ],
    },
  };

  const content = allContent[currentLang] || allContent.fa;

  const leaders = [
    {
      name: 'SHAHEEN SAFI',
      role: 'Director & Founder',
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
        { href: 'mailto:shaheen@safipay.net', icon: <Mail size={14} />, hover: 'hover:text-amber-400' },
      ],
    },
    {
      name: 'SAHEL SALEM',
      role: 'CEO & Europe Relations',
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
        { href: 'mailto:sahelsalem@safipay.net', icon: <Mail size={14} />, hover: 'hover:text-emerald-400' },
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
        { href: 'mailto:mujtaba@safipay.net', icon: <Mail size={14} />, hover: 'hover:text-blue-400' },
      ],
    },
    {
      name: 'SHIRIN GOL AHMADI',
      role: 'All Ecosystem Manager',
      image: '/shirin.jpeg',
      href: `/${currentLang}/founder/shirin-gol-ahmadi`,
      accent: 'from-pink-500/25 to-transparent', // رنگ اختصاصی صورتی برای شیرین گل
      socials: [
        { href: 'https://www.linkedin.com/in/shirin-gol-ahmadi-842b40344?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: <Linkedin size={16} />, hover: 'hover:text-[#0A66C2]' },
        { href: 'mailto:shirinahmadi@safipay.net', icon: <Mail size={14} />, hover: 'hover:text-pink-400' },
      ],
    },
    {
      name: 'MOBIN HASSANI',
      role: 'Lead Developer',
      image: '/mobin-hassani.jpg',
      href: `/${currentLang}/founder/mobin-hassani`,
      accent: 'from-cyan-500/25 to-transparent',
      socials: [
        { href: 'https://github.com', icon: <Github size={16} />, hover: 'hover:text-cyan-400' },
        { href: 'https://linkedin.com', icon: <Linkedin size={16} />, hover: 'hover:text-[#0A66C2]' },
        { href: 'mailto:mobin@safipay.net', icon: <Mail size={14} />, hover: 'hover:text-cyan-400' },
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
                <a
                  href="mailto:contact@safipay.net"
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-black/40 px-4 py-3 text-sm text-gray-300 transition-colors hover:border-amber-500/30 hover:text-white"
                >
                  <Mail size={16} className="text-amber-500" />
                  contact@safipay.net
                </a>
                <a
                  href="mailto:info@safipay.net"
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-black/40 px-4 py-3 text-sm text-gray-300 transition-colors hover:border-amber-500/30 hover:text-white"
                >
                  <Mail size={16} className="text-amber-500" />
                  info@safipay.net
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-black/40 px-4 py-3 text-sm text-gray-300">
                  <MapPin size={16} className="text-amber-500" />
                  Global Hub • Istanbul • Paris • Dubai
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

        {/* بخش نمایش اعضای تیم */}
        <div className="mb-14">
          <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/5 pb-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/70">
              {content.teamTitle}
            </h4>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
          </div>

          {/* استایل گرید فوق‌العاده مدرن و متوازن برای ۵ عضو اصلی تیم */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/8 bg-gradient-to-b from-white/[0.04] to-black/60 p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.9)]"
              >
                {/* هدر گرادینت با درخشش اختصاصی رنگی هر عضو */}
                <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${leader.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-75`} />

                {/* بخش بالایی: تصویر و مشخصات هویتی بدون هیچ‌گونه کوتاه‌شدگی متن */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* آواتار با حاشیه لوکس */}
                  <Link
                    href={leader.href}
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-white/10 bg-black/60 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-amber-400/50"
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>

                  {/* نام کامل بدون Truncate */}
                  <Link href={leader.href} className="mt-4 block w-full">
                    <h5 className="text-sm font-black tracking-wider text-white transition-colors duration-300 group-hover:text-amber-400">
                      {leader.name}
                    </h5>
                  </Link>

                  {/* سمت رسمی و دقیق */}
                  <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-amber-500/90 leading-tight">
                    {leader.role}
                  </p>
                </div>

                {/* نوار شبکه‌های اجتماعی پایین کارت به‌صورت کاملاً متقارن و متوازن */}
                <div className="relative z-10 mt-6 flex w-full flex-wrap items-center justify-center gap-2 border-t border-white/5 pt-4">
                  {leader.socials.map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target="_blank"
                      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-black/60 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-white/20 ${social.hover}`}
                    >
                      {social.icon}
                    </Link>
                  ))}
                  <Link
                    href={leader.href}
                    title="View Bio Profile"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 transition-all duration-300 hover:scale-110 hover:border-amber-500/40 hover:bg-amber-500/20"
                  >
                    <UserCircle2 size={15} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-white/5 py-14 lg:grid-cols-[1fr_1.1fr]">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box 1: View all insights */}
              <Link
                href={`/${currentLang}/blog`}
                className="group flex flex-col justify-between rounded-[2rem] border border-amber-500/20 bg-white/[0.02] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:bg-white/[0.04] hover:shadow-[0_12px_35px_-10px_rgba(245,158,11,0.18)]"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-transform duration-300">
                    <LayoutGrid size={22} />
                  </div>

                  <div className="mb-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {content.blogBtn}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span>{content.blogDesc}</span>
                    <ArrowUpRight size={14} className={`shrink-0 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} group-hover:-translate-y-0.5`} />
                  </div>
                </div>
              </Link>

              {/* Box 2: Safi Academy */}
              <a
                href="https://safiacademy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-[2rem] border border-amber-500/20 bg-white/[0.02] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:bg-white/[0.04] hover:shadow-[0_12px_35px_-10px_rgba(245,158,11,0.18)]"
              >
                <div>
                  <div className="mb-5 relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 p-2 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/safi-academy-logo.png"
                      alt="Safi Academy"
                      width={38}
                      height={38}
                      className="object-contain drop-shadow"
                    />
                  </div>

                  <div className="mb-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {content.academyTitle}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span>{content.academyDesc}</span>
                    <ArrowUpRight size={14} className={`shrink-0 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} group-hover:-translate-y-0.5`} />
                  </div>
                </div>
              </a>
            </div>

            {/* Box 3: Google Play Pre-Registration Banner */}
            <a
              href="https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 group flex items-center justify-between rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-white/[0.02] to-transparent p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.2)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-105 transition-transform">
                  <Smartphone size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">Google Play Store</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-bold border border-amber-500/30">Pre-Register</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-amber-400 transition-colors">
                    {currentLang === 'fa' ? 'پیش‌ثبت‌نام رسمی اپلیکیشن صافی‌پی در گوگل پلی' : currentLang === 'ps' ? 'په ګوګل پلی کې د صافي پي د اپلیکیشن رسمي مخکې نوم لیکنه' : currentLang === 'ar' ? 'التسجيل المسبق الرسمي لتطبيق صافي‌بي على Google Play' : 'SafiPay Official App Pre-Registration on Google Play'}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {currentLang === 'fa' ? 'افتتاح حساب بانکی اروپایی، ویزا کارت مجازی و تراکنش‌های آنی در اندروید' : currentLang === 'ps' ? 'اروپایي بانکي حساب، ویزا کارت او چټکې پیسې په انډرایډ کې' : 'European IBAN account, virtual Visa card, and instant transfers on Android'}
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className={`shrink-0 text-amber-400 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} group-hover:-translate-y-1`} />
            </a>
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

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold tracking-wider text-gray-400">
            <Link href={`/${currentLang}/privacy`} className="hover:text-amber-400 transition-colors">
              {content.privacyTitle}
            </Link>
            <span>•</span>
            <Link href={`/${currentLang}/terms`} className="hover:text-amber-400 transition-colors">
              {content.termsTitle}
            </Link>
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