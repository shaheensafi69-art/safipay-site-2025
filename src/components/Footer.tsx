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
  ShieldCheck,
  Zap,
  User,
  LayoutDashboard,
  Users2,
  Mail,
  FileText
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);

  const contentObject: any = {
    fa: {
      slogan: "صافی‌پی؛ فراتر از یک سیستم مالی، ما پلی می‌سازیم برای اتصال افغانستان به اقتصاد نوین جهانی.",
      navTitle: 'صفحات وب‌سایت',
      blogTitle: 'وبلاگ و دستاوردها',
      teamTitle: 'اعضای تیم رهبری',
      links: [
        { name: 'صفحه اصلی', href: `/${currentLang}` },
        { name: 'شرکای ما', href: `/${currentLang}/partners` },
        { name: 'ارتباط با ما', href: `/${currentLang}/contact` },
        { name: 'درباره صافی‌پی', href: `/${currentLang}/about` },
        { name: 'پروفایل شاهین صافی', href: `/${currentLang}/founder/shaheen-safi` },
        { name: 'پروفایل مجتبی رحمانی', href: `/${currentLang}/founder/mujtaba-rahmani` },
        { name: 'پروفایل ساحل سالم', href: `/${currentLang}/founder/sahel-salem` },
      ],
      blogs: [
        { name: 'درباره شاهین', href: `/${currentLang}/blog/about-shaheen-safi` },
        { name: 'درباره صافی‌پی', href: `/${currentLang}/blog/what-is-safipay` },
        { name: 'امنیت سیستم', href: `/${currentLang}/blog/safipay-system-security` },
      ]
    },
    en: {
      slogan: "SafiPay is more than a system; it's a bridge connecting Afghanistan to the modern global economy.",
      navTitle: 'NAVIGATION',
      blogTitle: 'LATEST BLOGS',
      teamTitle: 'CORE LEADERSHIP',
      links: [
        { name: 'Home', href: `/${currentLang}` },
        { name: 'Partners', href: `/${currentLang}/partners` },
        { name: 'Contact', href: `/${currentLang}/contact` },
        { name: 'About SafiPay', href: `/${currentLang}/about` },
        { name: 'Shaheen Safi Profile', href: `/${currentLang}/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani Profile', href: `/${currentLang}/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem Profile', href: `/${currentLang}/founder/sahel-salem` },
      ],
      blogs: [
        { name: 'About Shaheen', href: `/${currentLang}/blog/about-shaheen-safi` },
        { name: 'What is SafiPay?', href: `/${currentLang}/blog/what-is-safipay` },
        { name: 'System Security', href: `/${currentLang}/blog/safipay-system-security` },
      ]
    }
  };
  const content = contentObject[currentLang] || contentObject.en;

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 font-sans relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* بخش بالایی: شعار و برند */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="SafiPay" width={40} height={40} className="brightness-125" />
              <span className="text-2xl font-black italic tracking-tighter text-white">SAFIPAY</span>
            </div>
            <p className="text-gray-400 text-lg font-light italic leading-relaxed">
              "{content.slogan}"
            </p>
          </div>
          
          {/* سوشل مدیاهای تیم در یک ردیف جداگانه یا بالای ستون‌ها */}
          <div className="flex flex-col gap-8">
             <h4 className="text-amber-500 font-black text-[10px] tracking-[0.2em] uppercase">{content.teamTitle}</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Shaheen Socials */}
                <div className="space-y-3">
                  <p className="text-white font-bold text-xs">Shaheen Safi</p>
                  <div className="flex gap-3 text-gray-500">
                    <Link href="https://x.com/safi_sahib01" target="_blank" className="hover:text-amber-500 transition-colors"><XIcon size={14}/></Link>
                    <Link href="https://www.linkedin.com/in/shaheen-safi-b73a30299" target="_blank" className="hover:text-amber-500 transition-colors"><Linkedin size={14}/></Link>
                    <Link href="https://www.instagram.com/top_g_official1" target="_blank" className="hover:text-amber-500 transition-colors"><Instagram size={14}/></Link>
                    <Link href="https://www.tiktok.com/@safi_sahib6" target="_blank" className="hover:text-amber-500 transition-colors"><TikTokIcon size={14}/></Link>
                    <Link href="https://Wa.me/+19342032497" target="_blank" className="hover:text-amber-500 transition-colors"><MessageCircle size={14}/></Link>
                  </div>
                </div>
                {/* Mujtaba Socials */}
                <div className="space-y-3">
                  <p className="text-white font-bold text-xs">Mujtaba Rahmani</p>
                  <div className="flex gap-3 text-gray-500">
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><Linkedin size={14}/></Link>
                    <Link href="https://www.instagram.com/bigshot_tradez" target="_blank" className="hover:text-amber-500 transition-colors"><Instagram size={14}/></Link>
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><TikTokIcon size={14}/></Link>
                    <Link href="https://wa.me/+93793035609" target="_blank" className="hover:text-amber-500 transition-colors"><MessageCircle size={14}/></Link>
                  </div>
                </div>
                {/* Sahel Socials */}
                <div className="space-y-3">
                  <p className="text-white font-bold text-xs">Sahel Salem</p>
                  <div className="flex gap-3 text-gray-500">
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><Linkedin size={14}/></Link>
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><XIcon size={14}/></Link>
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><Instagram size={14}/></Link>
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><Facebook size={14}/></Link>
                    <Link href="#" target="_blank" className="hover:text-amber-500 transition-colors"><MessageCircle size={14}/></Link>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* بخش لینک‌ها: دو ستون بزرگ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 border-t border-white/5 pt-16">
          
          {/* ستون اول: صفحات اصلی و پروفایل‌ها */}
          <div className="space-y-8">
            <h4 className="text-amber-500 font-black text-[10px] tracking-[0.3em] uppercase">{content.navTitle}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {content.links.map((link: any) => (
                <Link key={link.href} href={link.href} className="text-gray-500 hover:text-white transition-all text-sm flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20 group-hover:bg-amber-500 transition-colors" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ستون دوم: وبلاگ */}
          <div className="space-y-8">
            <h4 className="text-amber-500 font-black text-[10px] tracking-[0.3em] uppercase">{content.blogTitle}</h4>
            <div className="space-y-4">
              {content.blogs.map((blog: any) => (
                <Link key={blog.href} href={blog.href} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all flex items-center justify-between group">
                  <span className="text-gray-300 font-medium text-sm">{blog.name}</span>
                  <ArrowUpRight size={14} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* فوتر نهایی */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[9px] font-bold tracking-[0.4em] uppercase text-center md:text-left">
            © 2026 SAFIPAY DIGITAL BANKING SYSTEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-black tracking-widest text-gray-500 uppercase">
            <Globe size={12} className="text-amber-500" /> 
            <span>KABUL</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span>PARIS</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span>ISTANBUL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}