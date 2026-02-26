'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Linkedin, Facebook, Instagram, MessageCircle, 
  Globe, ArrowUpRight, ChevronRight, LayoutGrid
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
      slogan: "صافی‌پی؛ فراتر از یک سیستم مالی، ما پلی می‌سازیم برای اتصال افغانستان به اقتصاد نوین جهانی.",
      navTitle: 'دسترسی سریع',
      blogTitle: 'دانشنامه و اخبار',
      blogBtn: 'مشاهده تمام مقالات صافی‌پی',
      teamTitle: 'شورای رهبری SAFIPAY',
      links: [
        { name: 'صفحه اصلی', href: `/fa` },
        { name: 'شرکای تجاری', href: `/fa/partners` },
        { name: 'ارتباط با ما', href: `/fa/contact` },
        { name: 'درباره ما', href: `/fa/about` },
        { name: 'شاهین صافی', href: `/fa/founder/shaheen-safi` },
        { name: 'مجتبی رحمانی', href: `/fa/founder/mujtaba-rahmani` },
        { name: 'ساحل سالم', href: `/fa/founder/sahel-salem` },
      ],
    },
    ps: {
      slogan: "صافي پي؛ له مالي سیستم اخوا، موږ د نړیوال نوي اقتصاد سره د افغانستان د نښلولو لپاره یو پل جوړوو.",
      navTitle: 'چټک لاسرسی',
      blogTitle: 'پوهنغونډ او خبرونه',
      blogBtn: 'د صافي پي ټولې مقالې وګورئ',
      teamTitle: 'د SAFIPAY د رهبرۍ شورا',
      links: [
        { name: 'اصلي پاڼه', href: `/ps` },
        { name: 'سوداګریز شریکان', href: `/ps/partners` },
        { name: 'اړیکه', href: `/ps/contact` },
        { name: 'زموږ په اړه', href: `/ps/about` },
        { name: 'شاهین صافی', href: `/ps/founder/shaheen-safi` },
        { name: 'مجتبی رحماني', href: `/ps/founder/mujtaba-rahmani` },
        { name: 'ساحل سالم', href: `/ps/founder/sahel-salem` },
      ],
    },
    en: {
      slogan: "SafiPay: More than a system, a bridge connecting Afghanistan to the modern global economy.",
      navTitle: 'QUICK LINKS',
      blogTitle: 'INSIGHTS & NEWS',
      blogBtn: 'VIEW ALL INSIGHTS',
      teamTitle: 'CORE LEADERSHIP TEAM',
      links: [
        { name: 'Home', href: `/en` },
        { name: 'Partners', href: `/en/partners` },
        { name: 'Contact', href: `/en/contact` },
        { name: 'About Us', href: `/en/about` },
        { name: 'Shaheen Safi', href: `/en/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/en/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/en/founder/sahel-salem` },
      ],
    },
    de: {
      slogan: "SafiPay: Mehr als ein System, eine Brücke, die Afghanistan mit der modernen Weltwirtschaft verbindet.",
      navTitle: 'SCHNELLZUGRIFF',
      blogTitle: 'WISSEN & NEWS',
      blogBtn: 'ALLE ARTIKEL ANSEHEN',
      teamTitle: 'FÜHRUNGSRAT VON SAFIPAY',
      links: [
        { name: 'Startseite', href: `/de` },
        { name: 'Partner', href: `/de/partners` },
        { name: 'Kontakt', href: `/de/contact` },
        { name: 'Über uns', href: `/de/about` },
        { name: 'Shaheen Safi', href: `/de/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/de/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/de/founder/sahel-salem` },
      ],
    },
    ru: {
      slogan: "SafiPay: Больше чем система, мост, соединяющий Афганистан с современной мировой экономикой.",
      navTitle: 'БЫСТРЫЙ ДОСТУП',
      blogTitle: 'ЗНАНИЯ И НОВОСТИ',
      blogBtn: 'ПОСМОТРЕТЬ ВСЕ СТАТЬИ',
      teamTitle: 'СОВЕТ ДИРЕКТОРОВ SAFIPAY',
      links: [
        { name: 'Главная', href: `/ru` },
        { name: 'Партнеры', href: `/ru/partners` },
        { name: 'Контакт', href: `/ru/contact` },
        { name: 'О нас', href: `/ru/about` },
        { name: 'Шахин Сафи', href: `/ru/founder/shaheen-safi` },
        { name: 'Муجتبی Рахмани', href: `/ru/founder/mujtaba-rahmani` },
        { name: 'Сахель Салем', href: `/ru/founder/sahel-salem` },
      ],
    },
    tr: {
      slogan: "SafiPay: Bir sistemden fazlası, Afganistan'ı modern küresel ekonomiye bağlayan bir köprü.",
      navTitle: 'HIZLI ERİŞİM',
      blogTitle: 'BİLGİ VE HABERLER',
      blogBtn: 'TÜM MAKALELERİ GÖR',
      teamTitle: 'SAFIPAY LİDERLİK KONSEYİ',
      links: [
        { name: 'Anasayfa', href: `/tr` },
        { name: 'Ortaklar', href: `/tr/partners` },
        { name: 'İletişim', href: `/tr/contact` },
        { name: 'Hakkımızda', href: `/tr/about` },
        { name: 'Shaheen Safi', href: `/tr/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/tr/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/tr/founder/sahel-salem` },
      ],
    },
    fr: {
      slogan: "SafiPay : Plus qu'un système, un pont reliant l'Afghanistan à l'économie mondiale moderne.",
      navTitle: 'ACCÈS RAPIDE',
      blogTitle: 'INSIGHTS & ACTUALITÉS',
      blogBtn: 'VOIR TOUS LES ARTICLES',
      teamTitle: 'CONSEIL DE DIRECTION SAFIPAY',
      links: [
        { name: 'Accueil', href: `/fr` },
        { name: 'Partenaires', href: `/fr/partners` },
        { name: 'Contact', href: `/fr/contact` },
        { name: 'À propos', href: `/fr/about` },
        { name: 'Shaheen Safi', href: `/fr/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/fr/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/fr/founder/sahel-salem` },
      ],
    },
    ar: {
      slogan: "صافي بي؛ أكثر من مجرد نظام مالي، نحن نبني جسراً لربط أفغانستان بالاقتصاد العالمي الحديث.",
      navTitle: 'وصول سريع',
      blogTitle: 'الموسوعة والأخبار',
      blogBtn: 'مشاهدة جميع المقالات',
      teamTitle: 'مجلس قيادة SAFIPAY',
      links: [
        { name: 'الصفحة الرئيسية', href: `/ar` },
        { name: 'شركاء الأعمال', href: `/ar/partners` },
        { name: 'اتصل بنا', href: `/ar/contact` },
        { name: 'حولنا', href: `/ar/about` },
        { name: 'شاهين صافي', href: `/ar/founder/shaheen-safi` },
        { name: 'مجتبى رحماني', href: `/ar/founder/mujtaba-rahmani` },
        { name: 'ساحل سالم', href: `/ar/founder/sahel-salem` },
      ],
    }
  };

  const content = allContent[currentLang] || allContent.fa;

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-32 pb-12 font-sans relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start text-start">
          
          <div className="lg:col-span-3 space-y-6">
            <div className={`flex items-center gap-3 ${isRtl ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
               <span className="text-2xl font-black italic tracking-tighter text-white">SAFIPAY</span>
               <Image src="/logo.png" alt="SafiPay" width={40} height={40} className="brightness-125" />
            </div>
            <p className="text-gray-500 text-base font-light italic leading-relaxed">
              "{content.slogan}"
            </p>
          </div>

          <div className="lg:col-span-9">
            <h4 className="text-amber-500/50 font-black text-[10px] tracking-[0.4em] uppercase mb-8 border-b border-white/5 pb-4">
              {content.teamTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* SHAHEEN SAFI */}
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 group">
                <p className="text-white font-black text-sm mb-5 group-hover:text-amber-500 transition-colors">SHAHEEN SAFI</p>
                <div className="flex flex-wrap gap-4 text-gray-500 group-hover:text-gray-300">
                  <Link href="https://facebook.com/share/1H1vuV1i9Z/" target="_blank" className="hover:text-[#1877F2] transition-colors"><Facebook size={18}/></Link>
                  <Link href="https://x.com/safi_sahib01" target="_blank" className="hover:text-white transition-colors"><XIcon size={16}/></Link>
                  <Link href="https://www.linkedin.com/in/shaheen-safi-b73a30299" target="_blank" className="hover:text-[#0A66C2] transition-colors"><Linkedin size={18}/></Link>
                  <Link href="https://www.instagram.com/top_g_official1" target="_blank" className="hover:text-[#E4405F] transition-colors"><Instagram size={18}/></Link>
                  <Link href="https://www.tiktok.com/@safi_sahib6" target="_blank" className="hover:text-white transition-colors"><TikTokIcon size={18}/></Link>
                  <Link href="https://Wa.me/+19342032497" target="_blank" className="hover:text-[#25D366] transition-colors"><MessageCircle size={18}/></Link>
                </div>
              </div>

              {/* MUJTABA RAHMANI */}
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all duration-500 group">
                <p className="text-white font-black text-sm mb-5 group-hover:text-blue-400 transition-colors">MUJTABA RAHMANI</p>
                <div className="flex flex-wrap gap-4 text-gray-500 group-hover:text-gray-300">
                  <Link href="https://www.facebook.com/share/1DJJUX1TS2/" target="_blank" className="hover:text-[#1877F2] transition-colors"><Facebook size={18}/></Link>
                  <Link href="https://www.linkedin.com/mwlite/profile/me" target="_blank" className="hover:text-[#0A66C2] transition-colors"><Linkedin size={18}/></Link>
                  <Link href="https://www.instagram.com/bigshot_tradez" target="_blank" className="hover:text-[#E4405F] transition-colors"><Instagram size={18}/></Link>
                  <Link href="https://www.tiktok.com/@chill_asf_fr" target="_blank" className="hover:text-white transition-colors"><TikTokIcon size={18}/></Link>
                  <Link href="https://wa.me/+93793035609" target="_blank" className="hover:text-[#25D366] transition-colors"><MessageCircle size={18}/></Link>
                </div>
              </div>

              {/* SAHEL SALEM */}
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-green-500/50 transition-all duration-500 group">
                <p className="text-white font-black text-sm mb-5 group-hover:text-green-400 transition-colors">SAHEL SALEM</p>
                <div className="flex flex-wrap gap-4 text-gray-500 group-hover:text-gray-300">
                  <Link href="#" target="_blank" className="hover:text-[#1877F2] transition-colors"><Facebook size={18}/></Link>
                  <Link href="#" target="_blank" className="hover:text-white transition-colors"><XIcon size={16}/></Link>
                  <Link href="#" target="_blank" className="hover:text-[#0A66C2] transition-colors"><Linkedin size={18}/></Link>
                  <Link href="#" target="_blank" className="hover:text-[#E4405F] transition-colors"><Instagram size={18}/></Link>
                  <Link href="#" target="_blank" className="hover:text-white transition-colors"><TikTokIcon size={18}/></Link>
                  <Link href="#" target="_blank" className="hover:text-[#25D366] transition-colors"><MessageCircle size={18}/></Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 border-t border-white/5 text-start">
          <div className="space-y-8">
            <h4 className="text-amber-500 font-black text-[10px] tracking-[0.4em] uppercase">{content.navTitle}</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {content.links.map((link: any) => (
                <Link key={link.href} href={link.href} className="text-gray-500 hover:text-white transition-all text-sm flex items-center gap-2 group">
                  <ChevronRight size={12} className={`text-amber-500/20 group-hover:text-amber-500 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-amber-500 font-black text-[10px] tracking-[0.4em] uppercase">{content.blogTitle}</h4>
            {/* بخش بلاگ: لینک داینامیک بر اساس زبان انتخاب شده */}
            <Link href={`/${currentLang}/blog`} className="flex items-center justify-between p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <LayoutGrid size={20} />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-bold tracking-tight">{content.blogBtn}</span>
              </div>
              <ArrowUpRight size={18} className={`text-gray-700 group-hover:text-amber-500 transition-all ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-start">
            <p className="text-gray-600 text-[9px] font-bold tracking-[0.5em] uppercase mb-2">
              © 2026 SAFIPAY GLOBAL DIGITAL BANKING SYSTEM.
            </p>
            <p className="text-[8px] text-white/20 font-bold uppercase tracking-widest">
              Engineered by <span className="text-white/40">Shaheen Safi</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-black tracking-widest text-gray-400">
            <Globe size={14} className="text-amber-500" /> 
            <span>KABUL</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span>ISTANBUL</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span>PARIS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}