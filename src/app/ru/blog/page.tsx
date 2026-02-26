'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// Данные блога SafiPay - Русская версия (Премиальный Финтех-стиль)
const blogPosts: any = {
  ru: [
    {
      id: 1,
      title: "Безопасность на уровне ЕС: Как мы защищаем ваши активы",
      excerpt: "Глубокий анализ протоколов безопасности SafiPay и стандартов банковского надзора в еврозоне.",
      date: "27 февр. 2026",
      readTime: "6 мин",
      slug: "security-at-safipay"
    },
    {
      id: 2,
      title: "Полное руководство по виртуальной карте Visa SafiPay",
      excerpt: "Узнайте, как активировать и использовать вашу международную кредитную карту менее чем за минуту.",
      date: "25 февр. 2026",
      readTime: "4 мин",
      slug: "visa-card-guide"
    },
    {
      id: 3,
      title: "Преимущества европейского IBAN для граждан Афганистана",
      excerpt: "Прямое подключение к банковской системе SEPA. Получайте международные переводы без посредников.",
      date: "22 февр. 2026",
      readTime: "7 мин",
      slug: "iban-account-benefits"
    },
    {
      id: 4,
      title: "История SafiPay: От Кабула до сердца Парижа",
      excerpt: "Путь создания первой современной цифровой банковской системы под руководством Шахина Сафи.",
      date: "19 февр. 2026",
      readTime: "10 мин",
      slug: "about-shaheen-safi"
    },
    {
      id: 5,
      title: "E-SIM: Ваш ключ к безграничной глобальной связи",
      excerpt: "Оставайтесь на связи по всему миру с высокоскоростным интернетом без географических границ.",
      date: "16 февр. 2026",
      readTime: "5 мин",
      slug: "esim-travel-technology"
    },
    {
      id: 6,
      title: "Будущее банкинга: Скорость, Безопасность и Простота",
      excerpt: "Почему современные финансовые экосистемы заменяют традиционный банкинг в цифровую эпоху.",
      date: "13 февр. 2026",
      readTime: "6 мин",
      slug: "future-of-banking"
    },
    {
      id: 7,
      title: "Что такое SafiPay? Обзор наших услуг",
      excerpt: "Познакомьтесь с финансовой экосистемой SafiPay и нашими инновационными платежными решениями.",
      date: "10 февр. 2026",
      readTime: "8 мин",
      slug: "what-is-safipay"
    }
  ]
};

export default function BlogPage() {
  const params = useParams();
  const lang: any = params.lang || 'ru'; 
  const isRtl = ['ar', 'fa', 'ps'].includes(lang);
  
  // Загрузка статей на русском языке
  const posts = blogPosts[lang] || blogPosts.ru;

  return (
    <main className="min-h-screen bg-[#030303] pt-40 pb-20 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Эффект фонового свечения */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post: any, index: number) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/${lang}/blog/${post.slug}`} className="group block">
                <div className="relative h-72 mb-8 overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 group-hover:border-amber-500/40 transition-all duration-700 shadow-2xl">
                  <Image 
                    src={`/blog/${post.slug}/hero.jpg`} 
                    alt={post.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className={`absolute top-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="space-y-4 px-2 text-left">
                  <div className="flex items-center gap-4 text-[10px] text-amber-500 font-bold tracking-widest uppercase mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-500 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}