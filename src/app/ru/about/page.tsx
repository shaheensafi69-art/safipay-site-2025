'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User, Landmark, ShieldCheck, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageRussian() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ru';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Hero Section (Введение) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Новая финансовая парадигма в Афганистане
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Больше чем <br /> просто банкинг
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay — это не просто приложение; это революционная инфраструктура, цель которой — демократизировать доступ к международным финансовым системам для каждого гражданина Афганистана.
          </motion.p>
        </div>
      </section>

      {/* --- Founders & Leadership (Руководство) --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-24 italic uppercase tracking-widest text-amber-500">Наша команда</h2>
        <div className="flex flex-col gap-40">
          
          {/* 1. Shaheen Safi - Founder & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Шахин Сафи - Основатель и CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">Основатель / CEO</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Стратегия и Видение
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Шахин Сафи <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Основатель и CEO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Шахин Сафи (2003 г.р.) — стратег в области финтеха и главный архитектор экосистемы SafiPay. Благодаря своему опыту в IT-менеджменте и цифровой коммерции, он ставит своей целью устранение барьера между Афганистаном и глобальными финансовыми рынками.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Смотреть биографию
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 2. Mujtaba Rahmani - Co-Founder & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Инженерия и Безопасность
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Муджтаба Рахмани <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Сооснователь и CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-left font-light">
                <p>
                  Муджтаба Рахмани (2006 г.р.) является разработчиком инфраструктуры безопасности SafiPay. В качестве технического директора (CTO) он отвечает за протоколы кибербезопасности и внедрение масштабируемых платежных технологий.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Технический профиль
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/mujtaba.jpeg" alt="Муджтаба Рахмани" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* 3. Sahel Salem - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/sahel.jpeg" alt="Сахель Салем" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> Банковская экосистема
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Сахель Салем <span className="text-gray-600 text-3xl font-light block mt-2 font-sans">Руководитель банкинга</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed text-left">
                Сахель Салем (2007 г.р.) курирует интеграцию пользовательских счетов и банковской экосистемы SafiPay. Он обеспечивает бесперебойную связь между цифровыми активами и традиционными финансовыми структурами.
              </p>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  Банковский профиль
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Mission Section (Наша Миссия) --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-white text-center">Наша миссия</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light text-left">
              <p>
                В основе SafiPay лежит простой, но мощный принцип: <span className="text-white font-bold">«Финансовая инклюзивность — это базовое право человека».</span> В регионе, который часто отрезан от мировых банковских сетей, мы предоставляем технологии для преодоления этого разрыва.
              </p>
              <p>
                Наша платформа — это больше, чем транзакции; это создание устойчивого финансового будущего. Мы строим систему без границ, где фрилансеры, предприниматели и семьи могут полноценно участвовать в глобальном экономическом цикле.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Landmark className="text-amber-500" />, title: "Цифровой банкинг", desc: "Полноценный виртуальный банковский счет для каждого пользователя." },
                { icon: <ShieldCheck className="text-green-500" />, title: "Безопасное хранение", desc: "Высокоуровневое шифрование и децентрализованная защита." },
                { icon: <Globe className="text-blue-500" />, title: "Глобальный доступ", desc: "Мгновенное подключение к международным рынкам." },
                { icon: <Cpu className="text-purple-500" />, title: "На базе ИИ", desc: "Интеллектуальное обнаружение фрода и автоматизированная аналитика." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/50 transition-colors group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action (CTA) --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div className="bg-gradient-to-br from-amber-600 to-amber-900 p-20 rounded-[4rem]">
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">Станьте частью SafiPay</h2>
            <p className="text-amber-100/70 mb-12 max-w-2xl mx-auto text-lg">Стройте вместе с нами финансовую инфраструктуру нового поколения для Афганистана и всего мира.</p>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-amber-100 transition-colors group">
                Начать сотрудничество <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}