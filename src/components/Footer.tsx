'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'fa';
  const isRtl = currentLang === 'fa' || currentLang === 'ps';

  const content = {
    fa: {
      desc: 'سافی‌پی؛ اولین بانک دیجیتال بین‌المللی برای افغان‌ها. ما مرزهای مالی را می‌شکنیم.',
      links: 'لینک‌های سریع',
      devs: 'تیم توسعه‌دهنده',
      rights: '© ۲۰۲۶ سافی‌پی. تمامی حقوق محفوظ است.',
    },
    ps: {
      desc: 'سافی‌پی؛ د افغانانو لپاره لومړی نړۍوال ډیجیټل بانک. موږ مالي پولې ماتوو.',
      links: 'چټکې اړیکې',
      devs: 'د پراختیا ټیم',
      rights: '© ۲۰۲۶ سافی‌پی. ټول حقونه خوندي دي.',
    },
    en: {
      desc: 'SafiPay; The first international digital bank for Afghans. Breaking financial borders.',
      links: 'Quick Links',
      devs: 'Development Team',
      rights: '© 2026 SafiPay. All rights reserved.',
    }
  }[currentLang as 'fa' | 'ps' | 'en'] || {
    desc: 'SafiPay; La première banque digitale internationale pour les Afghans.',
    links: 'Liens Rapides',
    devs: 'Équipe de Développement',
    rights: '© 2026 SafiPay. Tous droits réservés.',
  };

  return (
    <footer className="bg-black border-t border-amber-900/30 pt-20 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* بخش برند */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="SafiPay" width={50} height={50} />
              <span className="text-2xl font-black text-white tracking-tighter">SAFIPAY</span>
            </Link>
            <p className="text-gray-500 leading-relaxed font-light">
              {content.desc}
            </p>
            <div className="flex gap-4 text-amber-500">
              <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* لینک‌های سریع */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-amber-500/20 pb-2 inline-block">
              {content.links}
            </h4>
            <nav className="flex flex-col gap-4 text-gray-400">
              <Link href="/about" className="hover:text-amber-500 transition-colors">درباره ما</Link>
              <Link href="/invest" className="hover:text-amber-500 transition-colors">سرمایه‌گذاری</Link>
              <Link href="/contact" className="hover:text-amber-500 transition-colors">تماس</Link>
              <Link href="/privacy" className="hover:text-amber-500 transition-colors">حریم خصوصی</Link>
            </nav>
          </div>

          {/* بخش شما (Owner/Founder) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-amber-500/20 pb-2 inline-block">
              {content.devs} - شما
            </h4>
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
              <p className="text-amber-500 font-black text-xl mb-1 group-hover:tracking-widest transition-all">اسم شما</p>
              <p className="text-gray-500 text-xs mb-4 uppercase">Founder & CEO</p>
              <div className="flex gap-3 text-gray-400">
                <Link href="https://github.com/your-id" className="hover:text-white"><Github size={18} /></Link>
                <Link href="https://linkedin.com/in/your-id" className="hover:text-white"><Linkedin size={18} /></Link>
                <Link href="mailto:your@email.com" className="hover:text-white"><Mail size={18} /></Link>
              </div>
            </div>
          </div>

          {/* بخش مجتبی (Developer) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-amber-500/20 pb-2 inline-block">
              {content.devs} - مجتبی
            </h4>
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
              <p className="text-amber-500 font-black text-xl mb-1 group-hover:tracking-widest transition-all">MOJTABA</p>
              <p className="text-gray-400 text-xs mb-4 uppercase">Lead Developer</p>
              <div className="flex gap-3 text-gray-400">
                <Link href="https://github.com/mojtaba-id" className="hover:text-white"><Github size={18} /></Link>
                <Link href="https://linkedin.com/in/mojtaba-id" className="hover:text-white"><Linkedin size={18} /></Link>
                <Link href="mailto:mojtaba@email.com" className="hover:text-white"><Mail size={18} /></Link>
              </div>
            </div>
          </div>

        </div>

        {/* کپی‌رایت نهایی */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
          <p>{content.rights}</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer">
              <Globe size={14} /> Kabul, Afghanistan
            </span>
            <span className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer underline underline-offset-4">
              Built with Passion <ExternalLink size={14} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}