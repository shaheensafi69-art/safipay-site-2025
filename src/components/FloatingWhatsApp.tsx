'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const currentLang = pathname ? pathname.split('/')[1] || 'en' : 'en';
  const isRtl = ['fa', 'ps', 'ar'].includes(currentLang);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const phoneNumber = '+447476620282';
  const cleanNumber = '447476620282';

  const labels: Record<string, { tooltip: string; subtext: string; btn: string }> = {
    fa: {
      tooltip: 'ارتباط مستقیم با مدیریت صافی‌پی',
      subtext: 'پشتیبانی و هماهنگی رسمی در واتساپ',
      btn: 'گفتگو در واتساپ',
    },
    ps: {
      tooltip: 'د صافي پي د مدیریت سره مستقیمه اړیکه',
      subtext: 'په واټس‌اپ کې رسمي ملاتړ او همغږي',
      btn: 'په واټس‌اپ کې خبرې وکړئ',
    },
    en: {
      tooltip: 'Direct Contact with SafiPay Executive Team',
      subtext: 'Official Support & Partnerships on WhatsApp',
      btn: 'Chat on WhatsApp',
    },
    de: {
      tooltip: 'Direkter Kontakt zur SafiPay Geschäftsleitung',
      subtext: 'Offizieller WhatsApp-Support & Koordination',
      btn: 'Auf WhatsApp chatten',
    },
    fr: {
      tooltip: 'Contact Direct avec la Direction SafiPay',
      subtext: 'Support officiel et partenariats sur WhatsApp',
      btn: 'Discuter sur WhatsApp',
    },
    ar: {
      tooltip: 'التواصل المباشر مع إدارة صافي باي',
      subtext: 'الدعم الرسمي والتنسيق عبر واتساب',
      btn: 'تحدث عبر واتساب',
    },
    ru: {
      tooltip: 'Прямая связь с руководством SafiPay',
      subtext: 'Официальная поддержка и координация в WhatsApp',
      btn: 'Чат в WhatsApp',
    },
    tr: {
      tooltip: 'SafiPay Yönetimi ile Doğrudan İletişim',
      subtext: 'WhatsApp üzerinden resmi destek ve koordinasyon',
      btn: "WhatsApp'ta Sohbet Edin",
    },
  };

  const label = labels[currentLang] || labels.en;
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    currentLang === 'fa'
      ? 'سلام، وقت بخیر. در رابطه با سیستم بانکی بین‌المللی صافی‌پی پیام می‌دهم.'
      : currentLang === 'ps'
      ? 'سلام، د صافي پي نړیوال بانکي سیستم په اړه پوښتنه لرم.'
      : currentLang === 'ar'
      ? 'مرحباً، أود الاستفسار عن نظام صافي باي المصرفي الرقمي.'
      : 'Hello, I am contacting SafiPay regarding the international digital banking system.'
  )}`;

  return (
    <div
      className={`fixed bottom-6 z-[9999] flex items-end gap-3 select-none ${
        isRtl ? 'left-6 flex-row' : 'right-6 flex-row-reverse'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Floating Action Button */}
      <div className="relative group">
        {/* Pulsing halo */}
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/30 blur-md animate-pulse group-hover:bg-[#25D366]/50 transition-all duration-300" />
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping opacity-30" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp ${phoneNumber}`}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] border-2 border-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* Official WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.94 7.23C8.75 7.23 8.44 7.3 8.19 7.57C7.94 7.85 7.23 8.52 7.23 9.87C7.23 11.23 8.22 12.54 8.35 12.72C8.49 12.91 10.3 15.7 13.06 16.89C13.72 17.17 14.23 17.34 14.63 17.47C15.29 17.68 15.9 17.65 16.37 17.58C16.9 17.5 17.99 16.92 18.22 16.27C18.45 15.63 18.45 15.07 18.38 14.96C18.31 14.85 18.12 14.78 17.84 14.64C17.56 14.5 16.19 13.82 15.93 13.73C15.68 13.63 15.5 13.59 15.31 13.87C15.13 14.15 14.6 14.78 14.44 14.96C14.28 15.15 14.12 15.17 13.84 15.03C13.56 14.89 12.67 14.6 11.61 13.65C10.79 12.92 10.23 12.01 10.07 11.74C9.91 11.46 10.05 11.31 10.19 11.17C10.32 11.04 10.48 10.83 10.62 10.67C10.76 10.5 10.81 10.39 10.9 10.2C11 10.02 10.95 9.85 10.88 9.71C10.81 9.58 10.25 8.21 10.02 7.65C9.79 7.11 9.56 7.18 9.39 7.17C9.23 7.17 9.07 7.23 8.94 7.23Z" />
          </svg>

          {/* Online green indicator dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-black rounded-full" />
        </a>
      </div>

      {/* Persistent Badge / Floating mini banner on desktop */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -20 : 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          className="hidden md:flex flex-col bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5 shadow-2xl max-w-[240px] text-xs"
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              WhatsApp
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider">{phoneNumber}</span>
          </div>
          <p className="text-[11px] text-gray-300 leading-snug line-clamp-1">{label.tooltip}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
