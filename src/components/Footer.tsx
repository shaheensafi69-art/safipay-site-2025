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
  ArrowUpRight
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);

  const labels: any = {
    fa: { about: 'درباره ما', invest: 'سرمایه‌گذاری', contact: 'تماس با ما', privacy: 'حریم خصوصی', founder: 'بنیان‌گذار', cofounder: 'هم‌بنیان‌گذار', quickLinks: 'دسترسی سریع' },
    ps: { about: 'زمونږ په اړه', invest: 'پانګونه', contact: 'اړیکه', privacy: 'حریم خصوصی', founder: 'بنسټ اېښودونکی', cofounder: 'ملگری بنسټ اېښودونکی', quickLinks: 'چټک لاسرسی' },
    en: { about: 'About Us', invest: 'Invest', contact: 'Contact', privacy: 'Privacy', founder: 'Founder', cofounder: 'Co-Founder', quickLinks: 'Quick Access' },
    fr: { about: 'À propos', invest: 'Investir', contact: 'Contact', privacy: 'Confidentialité', founder: 'Fondateur', cofounder: 'Co-fondateur', quickLinks: 'Accès Rapide' },
    de: { about: 'Über uns', invest: 'Investieren', contact: 'Kontakt', privacy: 'Datenschutz', founder: 'Gründer', cofounder: 'Mitbegründer', quickLinks: 'Schnellzugriff' },
    tr: { about: 'Hakkımızda', invest: 'Yatırım', contact: 'İletişim', privacy: 'Gizlilik', founder: 'Kurucu', cofounder: 'Kurucu Ortak', quickLinks: 'Hızlı Erişim' },
    ar: { about: 'من نحن', invest: 'استثمار', contact: 'اتصل بنا', privacy: 'الخصوصية', founder: 'المؤسس', cofounder: 'مؤسس مشارك', quickLinks: 'روابط سريعة' },
    ru: { about: 'О нас', invest: 'Инвестиции', contact: 'Контакт', privacy: 'Конфиденциальность', founder: 'Основатель', cofounder: 'Соучредитель', quickLinks: 'Быстрый доступ' }
  }[currentLang] || { about: 'About Us', invest: 'Invest', contact: 'Contact', privacy: 'Privacy', founder: 'Founder', cofounder: 'Co-Founder', quickLinks: 'Quick Access' };

  const descriptions: any = {
    fa: "اولین سیستم بانکداری دیجیتال بین‌المللی برای افغانستان. اتصال به بازارهای جهانی با امنیت و سرعت فوق‌العاده.",
    ps: "د افغانستان لپاره لومړنی نړیوال ډیجیټل بانکي سیسټم. له نړیوالو بازارونو سره په خوندیتوب او چټکتیا پیوستون.",
    en: "The first international digital banking system for Afghanistan. Connecting to global markets with exceptional security and speed.",
    fr: "Le premier système bancaire numérique international pour l'Afghanistan. Connexion aux marchés mondiaux avec une sécurité et une rapidité exceptionnelles.",
    de: "Das erste internationale digitale Bankensystem für Afghanistan. Verbindung zu globalen Märkten mit höchster Sicherheit und Geschwindigkeit.",
    tr: "Afganistan için ilk uluslararası dijital bankacılık sistemi. Küresel pazarlara olağanüstü güvenlik ve hızla bağlanın.",
    ar: "أول نظام مصرفي رقمي دولي لأفغانستان. الاتصال بالأسواق العالمية بأمان وسرعة استثنائيين.",
    ru: "Первая международная цифровая банковская система для Афганистана. Подключение к мировым рынкам с исключительной безопасностью и скоростью."
  }[currentLang] || "";

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* ستون برند */}
          <div className="lg:col-span-4 space-y-8">
            <Link href={`/${currentLang}`} className="inline-flex items-center gap-4 group">
              <div className="relative w-14 h-14 p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 group-hover:border-amber-500/50 transition-all duration-500">
                <Image src="/logo.png" alt="SafiPay" fill className="object-contain p-2 brightness-125" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white tracking-tighter leading-none">SAFIPAY</span>
                <span className="text-[10px] text-amber-500 font-bold tracking-[0.4em] mt-1 uppercase">Digital Ecosystem</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-base max-w-sm font-light">
              {descriptions}
            </p>
            {/* لینک‌های اجتماعی برند */}
            <div className="flex gap-3">
              <Link href="https://www.instagram.com/safipay2022" target="_blank" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all"><Instagram size={18} /></Link>
              <Link href="https://www.facebook.com/share/1GFFGouwff/" target="_blank" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all"><Facebook size={18} /></Link>
              <Link href="https://wa.me/33753928913" target="_blank" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all"><MessageCircle size={18} /></Link>
            </div>
          </div>

          {/* بخش تیم - Shaheen & Mujtaba */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shaheen */}
            <motion.div whileHover={{ y: -5 }} className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all group relative">
              <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={14} className="text-amber-500" /></div>
              <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] mb-4">{labels.founder}</h4>
              <p className="text-xl font-bold text-white mb-6 tracking-tight">Shaheen Safi</p>
              <div className="grid grid-cols-5 gap-2">
                <Link href="https://www.linkedin.com/in/shaheen-safi-b73a30299" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                <Link href="https://www.instagram.com/top_g_official1" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Instagram size={18} /></Link>
                <Link href="https://www.facebook.com/share/1H1vuV1i9Z/" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Facebook size={18} /></Link>
                <Link href="https://www.tiktok.com/@safi_sahib6" target="_blank" className="text-gray-500 hover:text-white transition-colors"><TikTokIcon /></Link>
                <Link href="https://Wa.me/+19342032497" target="_blank" className="text-gray-500 hover:text-white transition-colors"><MessageCircle size={18} /></Link>
              </div>
            </motion.div>

            {/* Mujtaba */}
            <motion.div whileHover={{ y: -5 }} className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all group relative">
              <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={14} className="text-amber-500" /></div>
              <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] mb-4">{labels.cofounder}</h4>
              <p className="text-xl font-bold text-white mb-6 tracking-tight">Mujtaba Rahmani</p>
              <div className="grid grid-cols-5 gap-2">
                <Link href="https://www.linkedin.com/mwlite/profile/me" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                <Link href="https://www.instagram.com/bigshot_tradez" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Instagram size={18} /></Link>
                <Link href="https://www.facebook.com/share/1DJJUX1TS2/" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Facebook size={18} /></Link>
                <Link href="https://www.tiktok.com/@chill_asf_fr" target="_blank" className="text-gray-500 hover:text-white transition-colors"><TikTokIcon /></Link>
                <Link href="https://wa.me/+93793035609" target="_blank" className="text-gray-500 hover:text-white transition-colors"><MessageCircle size={18} /></Link>
              </div>
            </motion.div>
          </div>

          {/* لینک‌های سریع */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">{labels.quickLinks}</h4>
            <nav className="flex flex-col gap-4">
              <Link href={`/${currentLang}/about`} className="text-gray-500 hover:text-amber-500 text-sm font-medium transition-all flex items-center gap-3 group">
                <span className="w-6 h-[1px] bg-gray-800 group-hover:w-8 group-hover:bg-amber-500 transition-all" />{labels.about}
              </Link>
              <Link href={`/${currentLang}/invest`} className="text-gray-500 hover:text-amber-500 text-sm font-medium transition-all flex items-center gap-3 group">
                <span className="w-6 h-[1px] bg-gray-800 group-hover:w-8 group-hover:bg-amber-500 transition-all" />{labels.invest}
              </Link>
              <Link href={`/${currentLang}/contact`} className="text-gray-500 hover:text-amber-500 text-sm font-medium transition-all flex items-center gap-3 group">
                <span className="w-6 h-[1px] bg-gray-800 group-hover:w-8 group-hover:bg-amber-500 transition-all" />{labels.contact}
              </Link>
              <span className="text-gray-700 text-sm font-medium flex items-center gap-3 cursor-not-allowed italic">
                <span className="w-6 h-[1px] bg-gray-900" />{labels.privacy}
              </span>
            </nav>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[9px] font-bold tracking-[0.4em] uppercase text-center md:text-left">
            © 2026 SAFIPAY DIGITAL BANKING SYSTEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold tracking-widest uppercase text-gray-500">
            <Globe size={12} className="text-amber-500" /> 
            <span>KABUL</span>
            <span className="w-1 h-1 rounded-full bg-gray-700 mx-1" />
            <span>PARIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}