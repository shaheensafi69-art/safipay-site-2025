'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPageRU() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="ltr">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm"
          >
            Смена финансовой парадигмы Афганистана
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            Мы расширяем <br /> границы банкинга
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay — это не просто приложение; это революционная инфраструктура, созданная для демократизации доступа к международным финансовым системам для каждого гражданина Афганистана в любой точке мира.
          </motion.p>
        </div>
      </section>

      {/* --- FOUNDERS SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* Shaheen Safi - CEO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/shaheen.jpeg" 
                alt="Shaheen Safi - Founder & CEO" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Founder & Chief Executive Officer
              </div>
              <h2 className="text-4xl font-bold">Шахин Сафи <span className="text-gray-500 text-2xl font-light">(Shaheen Safi)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Шахин Сафи (2003 г.р.) — финтех-стратег и архитектор цифровых платежных систем. Обладая видением, выходящим за рамки традиционных границ, он отвечает за общее руководство проектом SafiPay и надзор за развитием технической инфраструктуры.
                </p>
                <p>
                  Благодаря глубокому пониманию европейских банковских экосистем и экономических проблем Афганистана, Шахин разработал модель, сочетающую безопасность мирового уровня с простотой доступа для местных пользователей. Его опыт в решении сложных банковских вопросов и управлении финансовыми кризисами является движущей силой SafiPay на пути к становлению первым афганским необанком.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Техэкспертиза</h4>
                  <p className="text-sm text-gray-400">Облачная архитектура, платежная безопасность и блокчейн</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Лидерство</h4>
                  <p className="text-sm text-gray-400">Стратегическое управление и международное развитие бизнеса</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - Co-Founder */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Co-Founder & Chief Communications Officer
              </div>
              <h2 className="text-4xl font-bold">Муджтаба Рахмани <span className="text-gray-500 text-2xl font-light">(Mujtaba Rahmani)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Муджтаба Рахمانی (2006 г.р.) — специалист по стратегическим коммуникациям и развитию бренда. На него возложена жизненно важная задача по управлению связями с общественностью, расширению влияния бренда на мировых рынках и наведению мостов между SafiPay и огромным сообществом афганцев за рубежом.
                </p>
                <p>
                  Используя уникальные навыки ведения переговоров и понимание психологии рынка, Муджтаба играет ключевую роль в завоевании доверия инвесторов и формировании имиджа SafiPay как стабильного и ориентированного на людей финансового института. Его миссия выходит за рамки рекламы — это создание новой финансовой культуры для молодого поколения Афганистана.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Коммуникации</h4>
                  <p className="text-sm text-gray-400">Стратегический брендинг, переговоры и связи с общественностью</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Развитие</h4>
                  <p className="text-sm text-gray-400">Расширение клиентской сети и привлечение международной поддержки</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/mujtaba.jpeg" 
                alt="Mujtaba Rahmani - Co-Founder" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Наша миссия</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Миссия SafiPay заключается в предоставлении финансовых возможностей каждому афганцу. Используя новейшие технологии, мы минимизируем стоимость денежных переводов и превращаем доступ к международным кредитным картам и мультивалютным счетам — то, что когда-то было мечтой для нашего народа, — в повседневную реальность.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Видение 2030</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Мы строим будущее, в котором ни один афганец не будет исключен из цифровой экономики из-за географического положения. Наша цель — стать крупнейшей финансовой инфраструктурой в регионе и лидером в предоставлении услуг необанкинга для развивающихся сообществ.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Этическая и техническая основа SafiPay</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Абсолютная прозрачность", 
              desc: "Мы верим, что доверие не строится на секретности. Все финансовые процессы и комиссии в SafiPay прозрачны и подотчетны." 
            },
            { 
              title: "Улучшенная безопасность", 
              desc: "Используя передовые протоколы шифрования и биометрическую идентификацию, мы гарантируем безопасность активов выше традиционных стандартов." 
            },
            { 
              title: "Финансовая доступность", 
              desc: "Наши услуги разработаны без гендерной یا социальной дискриминации, соединяя самые отдаленные уголки Афганистана с мировыми рынками." 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900/30 border border-white/5 rounded-3xl hover:border-amber-500/50 transition-all"
            >
              <h4 className="text-2xl font-bold text-amber-500 mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16 shadow-2xl shadow-amber-900/20">
          <h2 className="text-4xl font-black mb-6">Станьте частью финансовой революции</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Мы меняем финансовую судьбу целой нации. Будь вы пользователем или инвестором — ваше место в SafiPay.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/ru/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">Инвестировать</Link>
            <Link href="/ru/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Связаться с командой</Link>
          </div>
        </div>
      </section>

    </div>
  );
}