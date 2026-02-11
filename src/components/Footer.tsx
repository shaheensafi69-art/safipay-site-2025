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
  const currentLang = pathname.split('/')[1] || 'fa';
  const isRtl = currentLang === 'fa' || currentLang === 'ps';

  const labels = {
    fa: { about: 'درباره ما', invest: 'سرمایه‌گذاری', contact: 'تماس با ما', privacy: 'حریم خصوصی (بزودی)', founder: 'بنیان‌گذار', cofounder: 'هم‌بنیان‌گذار' },
    ps: { about: 'زمونږ په اړه', invest: 'پانګونه', contact: 'اړیکه', privacy: 'حریم خصوصی (ژر)', founder: 'بنسټ اېښودونکی', cofounder: 'ملگری بنسټ اېښودونکی' },
    en: { about: 'About Us', invest: 'Invest', contact: 'Contact', privacy: 'Privacy (Soon)', founder: 'Founder', cofounder: 'Co-Founder' },
    fr: { about: 'À propos', invest: 'Investir', contact: 'Contact', privacy: 'Confidentialité', founder: 'Fondateur', cofounder: 'Co-fondateur' }
  }[currentLang as 'fa' | 'ps' | 'en' | 'fr'] || { about: 'About', invest: 'Invest', contact: 'Contact', privacy: 'Privacy', founder: 'Founder', cofounder: 'Co-Founder' };

  return (
    <footer className="bg-black border-t border-amber-900/30 pt-20 pb-10 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* ستون اول: صافی‌پی رسمی */}
          <div className="space-y-6">
            <Link href={`/${currentLang}`} className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="SafiPay" fill className="object-contain brightness-110" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">SAFIPAY</span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              اولین سیستم بانکداری دیجیتال بین‌المللی برای افغانستان. اتصال به بازارهای جهانی با امنیت و سرعت فوق‌العاده.
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
                <Link href="https://wa.me/qr/EXOGJIGJKTRSF1" target="_blank" className="text-gray-400 hover:text-white"><MessageCircle size={18} /></Link>
              </div>
            </div>
          </div>

          {/* ستون سوم: مجتبی (Co-Founder) */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2 inline-block">MUJTABA</h4>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-[2rem] border border-white/5 hover:border-amber-500/40 transition-all group">
              <p className="text-amber-500 font-black text-xl mb-1 tracking-tight uppercase">Mujtaba</p>
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
            <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2 inline-block">دسترسی سریع</h4>
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
            <span className="flex items-center gap-2 cursor-default">
              <Globe size={14} className="text-amber-600" /> KABUL | PARIS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}