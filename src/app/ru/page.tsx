'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Globe, Shield, Zap, CreditCard, ArrowRight, BarChart3 } from 'lucide-react';

export default function HomePageRU() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Эффекты фона */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-10 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-bold tracking-widest uppercase"
          >
            Разрушая финансовые границы для всех афганцев
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">SAFIPAY</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-amber-500 mt-6 block font-bold italic">
              Цифровой банкинг для Афганистана
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Расширение возможностей миллионов людей с первым международным необанком. 
            Без границ, без ограничений; только глобальный и простой банковский опыт.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="#problems"
              className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              Проблемы <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ru/invest"
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)]"
            >
              Поддержать кампанию
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION: PROBLEMS --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-center text-white mb-6">
              Банковский <span className="text-red-600">кризис</span> в Афганистане
            </h2>
            <p className="text-gray-500 text-xl text-center max-w-2xl font-light">
              Текущие финансовые системы в Афганистане неэффективны, изолированы и устарели. 
              Миллионы людей игнорируются в сегодняшнем цифровом мире.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85% без счетов', desc: 'Большинство населения, особенно женщины и жители отдаленных районов, не имеют доступа к базовым услугам.' },
              { title: 'Изоляция SWIFT', desc: 'Отключение от глобальных сетей означает невозможность официального и безопасного перевода денег.' },
              { title: 'Нерабочие карты', desc: 'Существующие карты не работают на международных платформах, таких как Amazon, Netflix или Google.' },
              { title: '15% комиссия', desc: 'Опора на неофициальные системы (Хавала) ведет к тяжелым потерям и отсутствию прозрачности.' },
              { title: 'Инфляция', desc: 'Нет простого способа хранить стабильные активы (USD/EUR) для защиты семейных сбережений.' },
              { title: 'Нет Digital ID', desc: 'Открытие счета по-прежнему требует физического присутствия и сложной бюрократии.' },
              { title: 'Риски безопасности', desc: 'Слабая инфраструктура ведет к частому мошенничеству и угрозам отмывания денег.' },
              { title: 'Стагнация бизнеса', desc: 'Местные компании не могут принимать глобальные платежи, что мешает росту национальной экономики.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-950 border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: SOLUTIONS --- */}
      <section className="py-32 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Будущее <span className="text-amber-500 italic">уже здесь</span>
            </h2>
            <p className="text-gray-400 text-xl font-light">
              SafiPay — это не просто приложение; это мост, соединяющий Афганистан с мировыми рынками.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Глобальный доступ', desc: 'Мгновенное открытие международного счета для афганцев по всему миру онлайн.' },
              { icon: <CreditCard />, title: 'Виртуальные карты', desc: 'Мгновенный выпуск Visa и Mastercard для глобальных покупок и подписок.' },
              { icon: <Zap />, title: '1% комиссия', desc: 'Обход дорогих систем перевода с быстрыми, дешевыми и прозрачными транзакциями.' },
              { icon: <Shield />, title: 'Безопасность', desc: 'Шифрование банковского уровня и цифровая идентификация для полного спокойствия.' },
              { icon: <BarChart3 />, title: 'Мультивалютность', desc: 'Хранение и конвертация USD, EUR и других валют для защиты от инфляции.' },
              { icon: <CheckCircle2 />, title: 'Легальность', desc: 'Работа в рамках международных банковских правил для гарантии сохранности капитала.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-10 bg-black/50 border border-amber-900/20 rounded-[2.5rem] hover:bg-amber-950/10 hover:border-amber-500/50 transition-all duration-500 shadow-2xl text-left"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Готовы восстановить экономику <br /> Афганистана вместе?
            </h2>
            <Link
              href="/ru/invest"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Присоединиться к движению <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}