'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageRU() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ru';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Секция Hero (Введение) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Трансформация финансовой парадигмы Афганистана
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Стирая границы <br /> банкинга
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay — это гораздо больше, чем приложение; это революционная инфраструктура, созданная для демократизации доступа к мировым финансовым системам для каждого гражданина Афганистана в любой точке мира.
          </motion.p>
        </div>
      </section>

      {/* --- Секция Основатели --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* Шахин Сафи - Основатель и CEO */}
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
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block text-white font-black italic tracking-widest text-lg uppercase">
                CEO / ОСНОВАТЕЛЬ
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Лидерство и стратегия
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Шахин Сафи <span className="text-gray-600 text-3xl font-light block mt-2">Основатель и генеральный директор</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  Шахин Сафи (род. 2003) — стратег в области FinTech и главный архитектор экосистемы SafiPay. Движимый видением прекращения финансовой изоляции Афганистана, он руководит макростратегией и курирует международные партнерства с лидерами мирового банкинга.
                </p>
                <p>
                  Используя свой опыт в облачных финансовых технологиях и современных европейских банковских стандартах, Шахин позволил SafiPay переосмыслить безопасность, создав первый настоящий афганский необанк. Его миссия ясна: «Восстановить престиж и финансовое доверие к афганской идентичности на мировом уровне».
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-left">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Стратегическое управление</h4>
                  <p className="text-sm text-gray-500">Бизнес-моделирование и глобальные банковские партнерства.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-left">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Решение финансовых кризисов</h4>
                  <p className="text-sm text-gray-500">Разработка решений для доступа к мировым рынкам.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Муджтаба Рахмани - Сооснователь и CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Инженерия и безопасность
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Муджтаба Рахмани <span className="text-gray-600 text-3xl font-light block mt-2">Сооснователь и CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  Муджтаба Рахмани (род. 2006) — CTO и архитектор кибербезопасности SafiPay. Он является технологическим стержнем платформы, отвечая за абсолютную неуязвимость и масштабируемость систем транзакций в реальном времени.
                </p>
                <p>
                  Благодаря своему таланту в разработке масштабируемого ПО и глубокому пониманию платежных инфраструктур, Муджтаба спроектировал систему, которая конкурирует в скорости и точности с крупнейшими банками мира. Его миссия — построить «Цифровую крепость», где активы пользователей защищены в любых обстоятельствах.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-left">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Архитектура систем</h4>
                  <p className="text-sm text-gray-500">Разработка бэкенда и финансовых микросервисов.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-left">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Кибербезопасность</h4>
                  <p className="text-sm text-gray-500">Продвинутые протоколы шифрования и защита данных.</p>
                </div>
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
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Муджтаба Рахмани - CTO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / АРХИТЕКТОР
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Видение и Ценности --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Абсолютная безопасность", desc: "Использование многоуровневых протоколов шифрования для обеспечения целостности транзакций.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "Глобальная связность", desc: "Открытие дверей цифровой экономики для Афганистана без традиционных посредников.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "Неустанные инновации", desc: "Постоянное развитие возможностей необанка для удовлетворения потребностей следующего поколения.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all text-left"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Финальная секция CTA --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">Готовы к стратегическому партнерству?</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                В SafiPay мы ищем финансовую элиту и международных стратегических партнеров для формирования будущего.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                Запросить партнерство <ArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}