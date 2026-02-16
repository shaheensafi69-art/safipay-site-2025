'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPage() {
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
            Новый финансовый парадигм в Афганистане
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Больше чем <br /> просто Банкинг
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay — это не просто приложение; это революционная инфраструктура, созданная для демократизации доступа к международным финансовым системам для каждого гражданина Афганистана.
          </motion.p>
        </div>
      </section>

      {/* --- Section Founders & Team --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* Shaheen Safi - Founder & CEO */}
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
                  alt="Shaheen Safi - Founder & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">CEO / ОСНОВАТЕЛЬ</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Лидерство и Стратегия
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Shaheen Safi</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  Шахин Сафи (род. 2003) — стратег в области финансовых технологий и главный архитектор платежных систем SafiPay. Обладая глубоким пониманием финансовой изоляции Афганистана, он руководит глобальным видением проекта и выстраивает международные отношения с мировыми банковскими гигантами.
                </p>
                <p>
                  Его опыт в интеграции облачных технологий с современными европейскими банковскими методами позволил SafiPay установить новые стандарты безопасности в качестве первого настоящего необанка Афганистана. Миссия Шахина — восстановить финансовую репутацию афганских граждан на мировых рынках.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Стратегическое управление</h4>
                  <p className="text-sm text-gray-500">Развитие бизнес-модели и банковское партнерство</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Кризисные решения</h4>
                  <p className="text-sm text-gray-500">Разработка путей обхода банковских санкций</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sahel Salem - Head of Ecosystem Banking */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-2 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> Банковская экосистема
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Sahel Salem</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  Сахель Салем (род. 2007) — мозг банковской экосистемы и инфраструктуры счетов SafiPay. Он отвечает за проектирование и внедрение финансовых структур, которые предоставляют афганским пользователям беспрецедентный доступ к международным банковским услугам.
                </p>
                <p>
                  Экспертиза Сахеля в создании бесшовных и безопасных финансовых потоков гарантирует, что каждый пользователь SafiPay получает цифровой банковский опыт мирового уровня. Сосредоточившись на прозрачности и доступности, он строит столпы справедливой финансовой системы.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Globe className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Развитие экосистемы</h4>
                  <p className="text-sm text-gray-500">Наведение мостов с мировыми финансовыми сетями</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Shield className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Управление счетами</h4>
                  <p className="text-sm text-gray-500">Инновационные системы банковского менеджмента</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-1 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/sahel.jpeg" 
                  alt="Sahel Salem" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                ГЛАВА ЭКОСИСТЕМЫ
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / АРХИТЕКТОР
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Инженерия и Безопасность
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Mujtaba Rahmani</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  Муджтаба Рахмани (род. 2006) — технический директор и архитектор кибербезопасности SafiPay. Он построил технический фундамент платформы, обеспечив неуязвимость и стабильность транзакционных систем в реальном времени.
                </p>
                <p>
                  Благодаря своему таланту в разработке масштабируемого ПО и владению платежной инфраструктурой, Муджтаба создал систему, которая конкурирует с крупнейшими банками мира по скорости и точности. Его миссия — построить цифровую крепость для защиты активов пользователей.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Архитектура систем</h4>
                  <p className="text-sm text-gray-500">Backend-разработка и финансовые микросервисы</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Кибербезопасность</h4>
                  <p className="text-sm text-gray-500">Продвинутое шифрование и защита данных</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Vision & Values --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Абсолютная безопасность", desc: "Использование многослойных протоколов шифрования для гарантии безопасности транзакций.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "Глобальная связь", desc: "Открытие дверей в цифровую экономику для Афганистана без традиционных посредников.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "Постоянные инновации", desc: "Непрерывная разработка необанковских функций для удовлетворения потребностей будущих поколений.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">Готовы к сотрудничеству?</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                В SafiPay мы стремимся построить сеть финансовых экспертов и международных стратегических партнеров.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                Стать бизнес-партнером <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}