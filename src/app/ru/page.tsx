'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertCircle, CheckCircle2, Globe, Shield, Zap, 
  CreditCard, ArrowRight, BarChart3, Handshake 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function HomePageRU() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ru';

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- Hero Section (Главный экран) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Фоновые световые эффекты */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.2em] uppercase"
          >
            Стираем финансовые границы для всех афганцев
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              Цифровой банкинг нового поколения
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Расширяем возможности миллионов людей с помощью первой международной цифровой банковской экосистемы. 
            Без ограничений, без границ — глобальные финансы в вашем смартфоне.
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
              Изучить вызовы <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${currentLang}/partners`}
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
            >
              <Handshake size={24} /> Стать партнером
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Section Problems (Кризис) --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24 text-center">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">
              Банковский <span className="text-red-600">Кризис</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl font-light leading-relaxed">
              Текущие финансовые системы неэффективны и изолированы. 
              Миллионы афганцев отрезаны от современной цифровой экономики.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85% без счетов', desc: 'Большинство населения не имеет доступа к базовым банковским услугам.' },
              { title: 'Изоляция SWIFT', desc: 'Отключение от глобальных сетей сделало переводы неоправданно сложными.' },
              { title: 'Нерабочие карты', desc: 'Местные карты не принимаются на Amazon, Netflix или в Google Store.' },
              { title: 'Комиссии до 15%', desc: 'Традиционные системы переводов приводят к огромным финансовым потерям.' },
              { title: 'Гиперинфляция', desc: 'Отсутствие инструментов для хранения стабильной валюты (USD/EUR) уничтожает сбережения.' },
              { title: 'Нет Digital KYC', desc: 'Открытие счета все еще требует личного присутствия и бумажной волокиты.' },
              { title: 'Слабая защита', desc: 'Устаревшая инфраструктура повышает риск мошенничества и киберугроз.' },
              { title: 'Офлайн-бизнес', desc: 'Локальные компании не могут принимать глобальные платежи, что тормозит рост.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050505] border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Solutions (Решения) --- */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
              Будущее <span className="text-amber-500">уже здесь</span>
            </h2>
            <p className="text-gray-400 text-xl font-light italic">
              SafiPay — это не просто приложение, это мост, соединяющий Афганистан с мировыми рынками.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Глобальный доступ', desc: 'Мгновенное открытие международного счета для афганцев в любой точке мира.' },
              { icon: <CreditCard />, title: 'Виртуальные карты', desc: 'Моментальный выпуск карт Visa для глобальных покупок и онлайн-подписок.' },
              { icon: <Zap />, title: 'Комиссия 1%', desc: 'Умная альтернатива дорогим переводам с полной прозрачностью транзакций.' },
              { icon: <Shield />, title: 'Безопасность', desc: 'Шифрование банковского уровня и цифровая верификация личности (KYC).' },
              { icon: <BarChart3 />, title: 'Мультивалютность', desc: 'Храните и конвертируйте мировые валюты для защиты от инфляции.' },
              { icon: <CheckCircle2 />, title: 'Легальность', desc: 'Работа в рамках международных финансовых правил для обеспечения стабильности.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-10 bg-black/40 border border-white/5 rounded-[2.5rem] hover:border-amber-500/50 transition-all duration-500 shadow-2xl text-left"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Final (Призыв к действию) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-l from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
              Готовы восстановить <br /> экономику Афганистана?
            </h2>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Присоединиться к сети партнеров <Handshake size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}