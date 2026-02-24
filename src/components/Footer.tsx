'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Linkedin, Facebook, Instagram, MessageCircle, 
  Globe, ArrowUpRight, ChevronRight
} from 'lucide-react';
import { usePathname } from 'next/navigation';

// آیکون‌های سفارشی دقیق
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

  const content: any = {
    fa: {
      slogan: "صافی‌پی؛ فراتر از یک سیستم مالی، ما پلی می‌سازیم برای اتصال افغانستان به اقتصاد نوین جهانی.",
      navTitle: 'دسترسی سریع',
      blogTitle: 'دانشنامه و اخبار',
      teamTitle: 'شورای رهبری SAFIPAY',
      links: [
        { name: 'صفحه اصلی', href: `/${currentLang}` },
        { name: 'شرکای تجاری', href: `/${currentLang}/partners` },
        { name: 'ارتباط با ما', href: `/${currentLang}/contact` },
        { name: 'درباره اکوسیستم', href: `/${currentLang}/about` },
        { name: 'پروفایل شاهین صافی', href: `/${currentLang}/founder/shaheen-safi` },
        { name: 'پروفایل مجتبی رحمانی', href: `/${currentLang}/founder/mujtaba-rahmani` },
        { name: 'پروفایل ساحل سالم', href: `/${currentLang}/founder/sahel-salem` },
      ],
      blogs: [
        { name: 'امنیت در تراکنش‌های صافی‌پی', href: `/${currentLang}/blog/safipay-system-security` },
        { name: 'داستان تولد یک رویا', href: `/${currentLang}/blog/what-is-safipay` },
        { name: 'آینده بلاک‌چین در افغانستان', href: `/${currentLang}/blog/about-shaheen-safi` },
      ]
    },
    en: {
      slogan: "SafiPay: More than a system, a bridge connecting Afghanistan to the modern global economy.",
      navTitle: 'QUICK LINKS',
      blogTitle: 'INSIGHTS & NEWS',
      teamTitle: 'CORE LEADERSHIP TEAM',
      links: [
        { name: 'Home', href: `/${currentLang}` },
        { name: 'Partners', href: `/${currentLang}/partners` },
        { name: 'Contact Us', href: `/${currentLang}/contact` },
        { name: 'About Us', href: `/${currentLang}/about` },
        { name: 'Shaheen Safi', href: `/${currentLang}/founder/shaheen-safi` },
        { name: 'Mujtaba Rahmani', href: `/${currentLang}/founder/mujtaba-rahmani` },
        { name: 'Sahel Salem', href: `/${currentLang}/founder/sahel-salem` },
      ],
      blogs: [
        { name: 'Security & Encryption', href: `/${currentLang}/blog/safipay-system-security` },
        { name: 'The Birth of SafiPay', href: `/${currentLang}/blog/what-is-safipay` },
        { name: 'FinTech Revolution', href: `/${currentLang}/blog/about-shaheen-safi` },
      ]
    }
  }[currentLang] || content.fa;

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-32 pb-12 font-sans relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* ردیف اول: لوگو و تیم (باکس‌های هم‌اندازه) */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
          
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
              
              {/* شاهین صافی */}
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

              {/* مجتبی رحمانی */}
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all duration-500 group">
                <p className="text-white font-black text-sm mb-5 group-hover:text-blue-400 transition-colors">MUJTABA RAHMANI</p>
                <div className="flex flex-wrap gap-4 text-gray-500 group-hover:text-gray-300">
                  <Link href="#" target="_blank" className="hover:text-[#1877F2] transition-colors"><Facebook size={18}/></Link>
                  <Link href="#" target="_blank" className="hover:text-white transition-colors"><XIcon size={16}/></Link>
                  <Link href="#" target="_blank" className="hover:text-[#0A66C2] transition-colors"><Linkedin size={18}/></Link>
                  <Link href="https://www.instagram.com/bigshot_tradez" target="_blank" className="hover:text-[#E4405F] transition-colors"><Instagram size={18}/></Link>
                  <Link href="#" target="_blank" className="hover:text-white transition-colors"><TikTokIcon size={18}/></Link>
                  <Link href="https://wa.me/+93793035609" target="_blank" className="hover:text-[#25D366] transition-colors"><MessageCircle size={18}/></Link>
                </div>
              </div>

              {/* ساحل سالم */}
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

        {/* ردیف دوم: نویگیشن و وبلاگ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 border-t border-white/5">
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
            <div className="space-y-4">
              {content.blogs.map((blog: any) => (
                <Link key={blog.href} href={blog.href} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-amber-500/20 transition-all group">
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">{blog.name}</span>
                  <ArrowUpRight size={16} className="text-gray-700 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* کپی رایت نهایی */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
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