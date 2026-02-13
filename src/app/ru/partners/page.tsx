'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, Cpu, Landmark, BadgeCheck, ShieldAlert
} from 'lucide-react';

export default function RussianElitePartnership() {
  const containerRef = useRef(null);
  
  // Кинематографические настройки скролла для автомобиля
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 25, 
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- 1. HERO: ФИНАНСОВЫЙ ГОЛИАФ --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              Суверенная Финансовая Сеть 2026
            </span>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] mb-16 italic tracking-tighter">
              БЕСПРЕДЕЛЬНАЯ <br/> <span className="text-amber-500 text-glow">ВЛАСТЬ.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed italic">
              Экосистема Safi — это решающий мост между европейским финтех-совершенством и развивающимися рынками Центральной Азии.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. СТОЛП I: WALLESTER AS --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">Стратегический Столп I: Wallester AS</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">Европейское <br/> Банковское Ядро.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Мы установили прямое партнерство первого уровня с **Wallester AS**, лицензированным EMI в Эстонии и основным участником VISA. Это позволяет обойти нестабильные региональные системы, предоставляя пользователям прямое API-соединение с финансовой сетью ЕС.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">Максимальная Безопасность</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">Прямая эмиссия VISA</p>
                </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(245,158,11,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden transition-all duration-500 shadow-2xl"
          >
             <CreditCard size={180} className="absolute -right-10 -top-10 opacity-5" />
             <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Персональные счета IBAN (ЕС)</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Мгновенный выпуск карт VISA</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Глобальные расчеты SEPA и SWIFT</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Мультивалютные кошельки в Евро</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 3. СТОЛП II: DING GLOBAL --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 transition-all duration-500"
          >
                <h4 className="text-blue-500 font-black mb-8 text-center">СКОРОСТЬ СЕТИ</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">500+</div>
                        <div className="text-[10px] text-gray-500 uppercase">Мировых Операторов</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">150+</div>
                        <div className="text-[10px] text-gray-500 uppercase">Стран Охвата</div>
                    </div>
                </div>
          </motion.div>
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">Стратегический Столп II: Сеть Ding</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">Связь <br/> Без Границ.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              **Ding** — это мощнейший в мире движок мобильных транзакций. Safi TopUp интегрирует эту инфраструктуру для мгновенного пополнения баланса и услуг E-SIM. Впервые пользователи на нестабильных рынках могут оставаться на связи с задержкой 0,1 сек через наши глобальные узлы.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">РЕАЛЬНОЕ ВРЕМЯ</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">ГОТОВНОСТЬ К 5G E-SIM</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. КАТАЛОГ УСЛУГ --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">Сетка <span className="text-amber-500 text-glow">Сервисов</span>.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light italic">Превосходные финансовые инструменты для современной эпохи.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { t: "Виртуальная VISA", d: "Выпуск за секунды. Работает с FB Ads, Google Cloud, Netflix и 100M+ мерчантами по всему миру.", icon: <CreditCard className="text-amber-500" size={40}/> },
                { t: "Личный IBAN", d: "Получайте зарплату и платежи напрямую из ЕС и США. Регулируется европейским правом.", icon: <Globe className="text-amber-500" size={40}/> },
                { t: "Глобальная E-SIM", d: "Мгновенная активация в 150+ странах. Путешествуйте без смены физических сим-карт.", icon: <Smartphone className="text-amber-500" size={40}/> },
                { t: "Крипто-Мост", d: "Самый быстрый способ вывода. Конвертируйте цифровые активы в баланс VISA с военной защитой.", icon: <Coins className="text-amber-500" size={40}/> },
                { t: "Бизнес-Движок", d: "Корпоративные счета для компаний, которым нужно оплачивать счета поставщиков в USD/EUR без задержек.", icon: <Briefcase className="text-amber-500" size={40}/> },
                { t: "ИИ Управления Капиталом", d: "Собственные алгоритмы, отслеживающие волатильность рынка и предлагающие лучшие валютные хеджи.", icon: <Cpu className="text-amber-500" size={40}/> }
            ].map((srv, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ y: -15, backgroundColor: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.3)' }}
                    className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 transition-all duration-300 group"
                >
                    <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{srv.icon}</div>
                    <h4 className="text-2xl font-black mb-6 italic">{srv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{srv.d}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- 5. РЕГИОНАЛЬНОЕ ПРЕВОСХОДСТВО --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">ПОЛНОЕ <span className="text-amber-500">ДОМИНИРОВАНИЕ.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <motion.div whileHover={{ scale: 0.98 }} className="p-12 bg-black rounded-[4rem] border border-red-500/20">
                    <ShieldAlert className="text-red-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-red-500 uppercase tracking-tighter">Местные Банки</h3>
                    <ul className="space-y-6 text-gray-600 text-sm font-bold">
                        <li>• Тяжелые санкции и закрытые сети</li>
                        <li>• Бумажный KYC (от 7 до 14 дней)</li>
                        <li>• Отсутствие поддержки глобальных сервисов</li>
                        <li>• Высокие комиссии и устаревший SWIFT</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <BadgeCheck className="text-amber-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-amber-500 uppercase tracking-tighter">Экосистема Safi Global</h3>
                    <ul className="space-y-6 text-amber-400 text-sm font-bold italic">
                        <li>• Лицензированная инфраструктура ЕС и VISA</li>
                        <li>• ИИ-идентификация (готовность за 120 сек)</li>
                        <li>• 100% принятие на рекламных и стриминг-платформах</li>
                        <li>• API-расчеты с нулевой задержкой</li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- 6. ДОРОЖНАЯ КАРТА МИССИИ --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-7xl font-black text-center mb-60 italic tracking-tighter uppercase">Журнал <span className="text-amber-500 text-glow">Миссии.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]">
          {/* ТРАССА */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            />
          </div>

          {/* АВТОМОБИЛЬ ЛЮКС */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50 flex flex-col items-center"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90 transition-transform duration-500">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* ФАЗЫ */}
          {[
            { phase: "ФАЗА 01", title: "Институциональный Генезис", desc: "Принятие банковских протоколов ЕС. Интеграция API с Wallester AS. Создание мостов ликвидности первого уровня.", year: "Q1 2026", y: "10%", side: "right" },
            { phase: "ФАЗА 02", title: "Пульсар Связи", desc: "Интеграция сети Ding Global. Покрытие 500+ операторов. Запуск международных тарифных планов 5G E-SIM.", year: "Q2 2026", y: "35%", side: "left" },
            { phase: "ФАЗА 03", title: "Ритейл-Доминирование", desc: "Официальный запуск приложения SafiPay (iOS/Android). Массовый выпуск виртуальных карт VISA и IBAN.", year: "Q3 2026", y: "60%", side: "right" },
            { phase: "ФАЗА 04", title: "Физический Суверенитет", desc: "Выпуск титановых карт Safi Titanium. Развертывание платежных терминалов в центрах премиум-класса.", year: "Q4 2026", y: "85%", side: "left" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${step.side === "left" ? "justify-start text-left" : "justify-end text-right"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.5)' }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] transition-all shadow-2xl cursor-default"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em] uppercase">{step.year}</span>
                    <h4 className="text-amber-600 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm italic">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. СТРАТЕГИЧЕСКАЯ ФОРМА ЗАПРОСА --- */}
      <section className="py-60 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic leading-[0.8]">Станьте <br/> <span className="text-amber-500">Партнером.</span></h2>
                <p className="text-gray-400 text-2xl font-light italic leading-relaxed">
                  "Мы отбираем 5 стратегических партнеров для фазы расширения в Q3. Подайте институциональную заявку."
                </p>
                <div className="flex items-center gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10">
                    <Landmark size={40} className="text-amber-500" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Институциональный Уровень</p>
                        <p className="font-bold">Рассмотрение за 24 часа</p>
                    </div>
                </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl relative overflow-hidden"
            >
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Название организации</label>
                            <input name="entity" type="text" required placeholder="Банк / Корпорация" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-sans" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Официальный Email</label>
                            <input name="email" type="email" required placeholder="ceo@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-sans" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Тип партнерства</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400 font-bold">
                            <option>Институциональные инвестиции</option>
                            <option>Поставщик инфраструктуры</option>
                            <option>Развитие рынка / Франшиза</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Предложение</label>
                        <textarea name="proposal" rows={6} required placeholder="Ваше видение и синергия..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none font-sans"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all shadow-[0_30px_60px_rgba(245,158,11,0.3)]">
                        Начать переговоры
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-10 opacity-20 italic font-black text-[9px] uppercase tracking-[1em]">
            <span>Wallester Licensed</span>
            <span>Ding Official</span>
            <span>VISA Principal Member</span>
        </div>
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em]">Глобальная инфраструктура SafiPay © 2026 | Создано для фронтирных рынков.</p>
      </footer>
    </div>
  );
}