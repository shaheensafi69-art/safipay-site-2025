'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Globe 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);

  // اضافه کردن ترجمه‌های جدید برای تمام زبان‌ها
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
    <footer className="bg-black border-t border-amber-900/30 pt-20 pb-10 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* ستون اول: معرفی برند */}
          <div className="space-y-6">
            <Link href={`/${currentLang}`} className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="SafiPay" fill className="object-contain brightness-110" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">SAFIPAY</span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              {descriptions}
            </p>
            <div className="flex gap-4 items-center">
              <Link href="https://www.instagram.com/safipay2022" target="_blank" className="p-2 rounded-full bg-white/5 text-amber-500 hover:bg-amber-500 hover:text-black transition-all"><Instagram size={20} /></Link>
              <Link href="https://www.facebook.com/share/1GFFGouwff/" target="_blank" className="p-2 rounded-full bg-white/5 text-amber-500 hover:bg-amber-500 hover:text-black transition-all"><Facebook size={20} /></Link>
              <Link href="https://wa.me/33753928913" target="_blank" className="p-2 rounded-full bg-white/5 text-amber-500 hover:bg-amber-500 hover:text-black transition-all"><MessageCircle size={20} /></Link>
            </div>
          </div>

          {/* ستون دوم: شاهین (Founder) */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2 inline-block">SHAHEEN</h4>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-[2rem] border border-white/5 hover:border-amber-500/40 transition-all group">
              <p className="text-amber-500 font-black text-xl mb-1 tracking-tight uppercase">Shaheen Safi</p>
              <p className="text-gray-500 text-[10px] mb-4 font-bold tracking-[0.2em] uppercase">{labels.founder} & CEO</p>
              <div className="grid grid-cols-5 gap-2">
                <Link href="https://www.linkedin.com/in/shaheen-safi-b73a30299" target="_blank" className="text-gray-400 hover:text-white"><Linkedin size={18} /></Link>
                <Link href="https://www.instagram.com/top_g_official1" target="_blank" className="text-gray-400 hover:text-white"><Instagram size={18} /></Link>
                <Link href="https://www.facebook.com/share/1H1vuV1i9Z/" target="_blank" className="text-gray-400 hover:text-white"><Facebook size={18} /></Link>
                <Link href="https://www.tiktok.com/@safi_sahib6" target="_blank" className="text-gray-400 hover:text-white"><TikTokIcon /></Link>
                <Link href="https://Wa.me/+19342032497" target="_blank" className="text-gray-400 hover:text-white"><MessageCircle size={18} /></Link>
              </div>
            </div>
          </div>

          {/* ستون سوم: مجتبی (Co-Founder) */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2 inline-block">MUJTABA</h4>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-[2rem] border border-white/5 hover:border-amber-500/40 transition-all group">
              <p className="text-amber-500 font-black text-xl mb-1 tracking-tight uppercase">Mujtaba Rahmani</p>
              <p className="text-gray-500 text-[10px] mb-4 font-bold tracking-[0.2em] uppercase">{labels.cofounder} & CTO</p>
              <div className="grid grid-cols-5 gap-2">
                <Link href="https://www.linkedin.com/mwlite/profile/me?trk=p_mwlite_feed-secondary_nav" target="_blank" className="text-gray-400 hover:text-white"><Linkedin size={18} /></Link>
                <Link href="https://www.instagram.com/bigshot_tradez" target="_blank" className="text-gray-400 hover:text-white"><Instagram size={18} /></Link>
                <Link href="https://www.facebook.com/share/1DJJUX1TS2/" target="_blank" className="text-gray-400 hover:text-white"><Facebook size={18} /></Link>
                <Link href="https://www.tiktok.com/@chill_asf_fr" target="_blank" className="text-gray-400 hover:text-white"><TikTokIcon /></Link>
                <Link href="https://wa.me/+93793035609" target="_blank" className="text-gray-400 hover:text-white"><MessageCircle size={18} /></Link>
              </div>
            </div>
          </div>

          {/* ستون چهارم: لینک‌های سریع */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2 inline-block uppercase">{labels.quickLinks}</h4>
            <nav className="flex flex-col gap-3">
              <Link href={`/${currentLang}/about`} className="text-gray-500 hover:text-amber-500 text-sm transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-900 group-hover:bg-amber-500" />
                {labels.about}
              </Link>
              <Link href={`/${currentLang}/invest`} className="text-gray-500 hover:text-amber-500 text-sm transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-900 group-hover:bg-amber-500" />
                {labels.invest}
              </Link>
              <Link href={`/${currentLang}/contact`} className="text-gray-500 hover:text-amber-500 text-sm transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-900 group-hover:bg-amber-500" />
                {labels.contact}
              </Link>
              <button className="text-gray-600 cursor-not-allowed text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                {labels.privacy}
              </button>
            </nav>
          </div>

        </div>

        {/* کپی‌رایت */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[11px] font-bold tracking-widest uppercase text-center md:text-right">
            © 2026 SAFIPAY DIGITAL BANKING SYSTEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 items-center text-gray-500 text-xs">
            <span className="flex items-center gap-2 cursor-default uppercase">
              <Globe size={14} className="text-amber-600" /> KABUL | PARIS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}