'use client';

import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  AlertCircle,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
  CreditCard,
  ArrowRight,
  BarChart3,
  Handshake,
  Wallet,
  Landmark,
  Smartphone,
  BadgeCheck,
  Users,
  RefreshCcw,
  Building2,
  LockKeyhole,
  Banknote,
  CircleDollarSign,
  Briefcase,
  Layers3,
  Sparkles,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

const BRAND_GOLD = '#f59e0b';
const BRAND_GOLD_SOFT = '#ffd27a';
const currencies = ['USD', 'EUR', 'GBP', 'PLN', 'SEK', 'NOK', 'RON', 'HUF', 'CZK', 'DKK'];

const problems = [
  {
    title: 'Ограниченный доступ к банковским услугам',
    desc: 'Многие афганцы до сих пор не имеют простого доступа к надежным международным банковским услугам для ежедневного личного и делового использования.',
  },
  {
    title: 'Ограничения на международные переводы',
    desc: 'Трансграничные денежные переводы часто бывают медленными, ограниченными, дорогими или ненадежными из-за слабого международного доступа.',
  },
  {
    title: 'Препятствия для онлайн-платежей',
    desc: 'Оплата Amazon, хостинга, SaaS-инструментов, облачных сервисов, подписок, рекламы и цифровых платформ по-прежнему затруднена для многих пользователей.',
  },
  {
    title: 'Высокая стоимость переводов',
    desc: 'Традиционные и неформальные каналы часто приводят к дополнительным комиссиям, ненужным задержкам, меньшей прозрачности и ограниченному финансовому контролю.',
  },
  {
    title: 'Проблема сохранения стоимости валюты',
    desc: 'Пользователям нужны более безопасные способы хранить свои активы в более сильных валютах вместо того, чтобы быть ограниченными только одним местным вариантом.',
  },
  {
    title: 'Медленный онбординг',
    desc: 'Открытие и использование финансовых услуг должны быть цифровыми, быстрыми и прозрачными, но многие системы до сих пор остаются устаревшими и зависят от бумажной волокиты.',
  },
  {
    title: 'Слабое доверие и безопасность',
    desc: 'Низкая прозрачность, некачественные системы и несогласованные процессы увеличивают страх, путаницу и риски мошенничества.',
  },
  {
    title: 'Ограничения в цифровой торговле',
    desc: 'Компании, фрилансеры и удаленные команды не могут полноценно участвовать в международной электронной коммерции без подходящей платежной инфраструктуры.',
  },
];

const solutions = [
  {
    icon: <Landmark />,
    title: 'Международные счета',
    desc: 'Открывайте профессиональные международные счета, созданные для реальной финансовой деятельности, трансграничного использования и современных потребностей пользователей.',
  },
  {
    icon: <Wallet />,
    title: 'Мультивалютные балансы',
    desc: 'Храните евро, доллар, фунт, злотый, шведскую крону, норвежскую крону, румынский лей, венгерский форинт, чешскую крону и датскую крону в едином интерфейсе.',
  },
  {
    icon: <CreditCard />,
    title: 'Мгновенные виртуальные карты',
    desc: 'Очень быстро получайте безопасные виртуальные карты для подписок, онлайн-покупок, оплаты услуг и использования в цифровом бизнесе.',
  },
  {
    icon: <Banknote />,
    title: 'Физические карты',
    desc: 'Используйте физические карты для большей гибкости платежей там, где требуется прием карт не только в цифровой среде.',
  },
  {
    icon: <Globe />,
    title: 'Локальные банковские реквизиты',
    desc: 'Получайте локальные банковские реквизиты для более удобных переводов, приема платежей и международных финансовых операций.',
  },
  {
    icon: <RefreshCcw />,
    title: 'Валютная гибкость',
    desc: 'Управляйте и используйте более сильные валюты с большим удобством, защитой и прозрачностью.',
  },
  {
    icon: <Smartphone />,
    title: 'Цифровой онбординг',
    desc: 'Вместо медленной традиционной бумажной волокиты подавайте заявку на счет и управляйте им через чистый цифровой интерфейс.',
  },
  {
    icon: <LockKeyhole />,
    title: 'Безопасность на уровне Европы',
    desc: 'Сильные стандарты безопасности и контролируемая цифровая инфраструктура помогают защищать пользователей, балансы и транзакции.',
  },
  {
    icon: <Shield />,
    title: 'Фокус на соответствии и комплаенсе',
    desc: 'Эта платформа построена с серьезным подходом к безопасным операциям, юридической структуре, защите пользователей и ответственному росту.',
  },
];

const serviceBlocks = [
  {
    icon: <CircleDollarSign />,
    title: 'Получение глобальных платежей',
    desc: 'Подходит для фрилансеров, агентств, удаленных сотрудников и поставщиков услуг, которым нужен международный канал для получения денег.',
  },
  {
    icon: <Briefcase />,
    title: 'Коммерческие платежные операции',
    desc: 'Поддерживает подписки, затраты на программное обеспечение, инструменты для команд, маркетинговые платежи и расходы на цифровую инфраструктуру.',
  },
  {
    icon: <BarChart3 />,
    title: 'Финансовый контроль',
    desc: 'Четко видьте балансы, разделяйте валюты и управляйте своими деньгами с большей структурой и меньшей путаницей.',
  },
  {
    icon: <Sparkles />,
    title: 'Современный пользовательский опыт',
    desc: 'Разработано так, чтобы передавать премиальное ощущение, скорость, простоту и доверие от этапа онбординга до ежедневного использования.',
  },
];

function CurrencyTag({ label, position }: { label: string; position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.lookAt(camera.position);
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <planeGeometry args={[1.12, 0.38]} />
        <meshBasicMaterial color="#120b00" transparent opacity={0.72} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[1.18, 0.44]} />
        <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.12} />
      </mesh>
      <Text
        fontSize={0.18}
        color={BRAND_GOLD_SOFT}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#2b1a00"
        characters="USD EUR GBP PLN SEK NOK RON HUF CZK DKK"
      >
        {label}
      </Text>
    </group>
  );
}

function CurrencyOrbit({
  radius,
  speed,
  tiltX,
  tiltZ,
  items,
  phase = 0,
}: {
  radius: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
  items: string[];
  phase?: number;
}) {
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!orbitRef.current) return;
    orbitRef.current.rotation.y = clock.elapsedTime * speed + phase;
  });

  return (
    <group ref={orbitRef} rotation={[tiltX, 0, tiltZ]}>
      {items.map((label, index) => {
        const angle = (index / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle * 1.2) * 0.08;
        const z = Math.sin(angle) * radius;
        return <CurrencyTag key={`${label}-${index}`} label={label} position={[x, y, z]} />;
      })}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 8, 160]} />
        <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function FloatingMiniElements() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} floatIntensity={0.6} rotationIntensity={0.2}>
        <mesh position={[-5.8, 2.2, -1.8]} rotation={[0.5, 0.7, 0.2]}>
          <boxGeometry args={[0.7, 0.45, 0.06]} />
          <meshStandardMaterial color="#171717" emissive={BRAND_GOLD} emissiveIntensity={0.18} metalness={0.8} roughness={0.25} />
        </mesh>
      </Float>

      <Float speed={1.8} floatIntensity={0.8} rotationIntensity={0.25}>
        <mesh position={[5.5, 1.7, -2.2]}>
          <torusGeometry args={[0.46, 0.08, 16, 100]} />
          <meshStandardMaterial color={BRAND_GOLD} emissive={BRAND_GOLD} emissiveIntensity={0.25} metalness={1} roughness={0.22} />
        </mesh>
      </Float>

      <Float speed={1.2} floatIntensity={0.55} rotationIntensity={0.18}>
        <mesh position={[4.6, -2.6, -1.4]} rotation={[0.2, 0.2, 0.9]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color="#262626" emissive={BRAND_GOLD} emissiveIntensity={0.15} metalness={0.9} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.6} floatIntensity={0.7} rotationIntensity={0.22}>
        <mesh position={[-4.8, -2.4, -1.7]} rotation={[0.8, 0.3, 0.6]}>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color={BRAND_GOLD_SOFT} emissive={BRAND_GOLD} emissiveIntensity={0.28} metalness={1} roughness={0.12} />
        </mesh>
      </Float>
    </group>
  );
}

function PremiumGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  const particlePositions = useMemo(() => {
    const count = 1800;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 2.15 + Math.random() * 0.12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0022;
      globeRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.06;
      globeRef.current.rotation.z = Math.cos(clock.elapsedTime * 0.2) * 0.02;
    }

    if (haloRef.current) {
      const scale = 1 + Math.sin(clock.elapsedTime * 1.1) * 0.025;
      haloRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <group ref={globeRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
          </bufferGeometry>
          <pointsMaterial color={BRAND_GOLD} size={0.022} transparent opacity={0.95} sizeAttenuation />
        </points>

        <mesh>
          <sphereGeometry args={[2.02, 64, 64]} />
          <meshPhysicalMaterial
            color="#060606"
            emissive={BRAND_GOLD}
            emissiveIntensity={0.1}
            metalness={0.95}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.12}
            transparent
            opacity={0.98}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.22, 64, 64]} />
          <meshStandardMaterial
            color={BRAND_GOLD}
            wireframe
            transparent
            opacity={0.1}
            emissive={BRAND_GOLD}
            emissiveIntensity={0.15}
          />
        </mesh>

        <mesh ref={haloRef}>
          <sphereGeometry args={[2.5, 48, 48]} />
          <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.06} side={THREE.BackSide} />
        </mesh>
      </group>

      <CurrencyOrbit items={currencies.slice(0, 5)} radius={3.2} speed={0.35} tiltX={0.62} tiltZ={0.22} />
      <CurrencyOrbit items={currencies.slice(5)} radius={3.75} speed={-0.26} tiltX={-0.56} tiltZ={-0.3} phase={1.2} />
    </group>
  );
}

function GlobalScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <PerspectiveCamera makeDefault position={[0, 0, 9.5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 5, 7]} intensity={1.8} color={BRAND_GOLD} />
      <pointLight position={[-7, -4, -9]} intensity={1} color="#fff4d6" />
      <pointLight position={[0, 7, -4]} intensity={0.7} color="#ffcc66" />
      <Stars radius={130} depth={80} count={4200} factor={3} saturation={0} fade speed={0.7} />

      <Suspense fallback={null}>
        <Float speed={1.25} rotationIntensity={0.08} floatIntensity={0.28}>
          <PremiumGlobe />
        </Float>
        <FloatingMiniElements />
      </Suspense>
    </>
  );
}

function SectionTitle({ badge, title, highlight, description }: { badge: string; title: string; highlight?: string; description: string }) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-6"
      >
        {badge}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase italic leading-[0.95]"
      >
        {title} {highlight ? <span className="text-amber-500">{highlight}</span> : null}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-gray-400 text-lg md:text-xl leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}

function IntroSection() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ru';

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 text-center max-w-6xl pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase pointer-events-auto"
        >
          Разрушая финансовые границы для всех афганцев
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
        >
          <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
            Цифровой банкинг для афганцев
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.14 }}
          className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-7 leading-relaxed font-light"
        >
          SafiPay создает современную международную финансовую платформу для афганцев, включающую мультивалютные счета, локальные банковские реквизиты, безопасный цифровой онбординг, а также мгновенные виртуальные и физические карты для глобальных платежей.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.24 }}
          className="text-base md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
        >
          Цель проста, но мощна: помочь частным лицам, фрилансерам, семьям и компаниям безопаснее получать доступ к международным финансовым инструментам, сохранять ценность своих активов в более сильных валютах и увереннее участвовать в глобальной цифровой экономике.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.34 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-14 pointer-events-auto"
        >
          {['Мультивалютные счета', 'Локальные банковские реквизиты', 'Мгновенные карты Visa', 'Международные платежи', 'Цифровой KYC', 'Безопасность на уровне Европы'].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 + i * 0.05, duration: 0.6 }}
              className="px-5 py-2.5 rounded-full border border-amber-500/20 bg-black/50 text-amber-400 text-sm md:text-base"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
        >
          <Link
            href="#about"
            className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
          >
            Изучить SafiPay <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${currentLang}/partners`}
            className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
          >
            <Handshake size={24} /> Присоединиться к партнерству
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85 }}
            className="rounded-[2.5rem] border border-amber-500/10 bg-black/60 backdrop-blur-2xl p-10 md:p-12"
          >
            <div className="inline-flex p-4 bg-amber-500/10 rounded-3xl mb-6">
              <Building2 size={36} className="text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic">Что такое SafiPay</h2>
            <p className="text-gray-300 text-lg leading-8 mb-6">
              SafiPay — это профессиональное цифровое финансовое решение, ориентированное на то, чтобы помочь афганцам получить доступ к международным банковским инструментам — инструментам, которые обычно трудно или невозможно получить через традиционные местные системы.
            </p>
            <p className="text-gray-400 leading-8 text-lg">
              Эта платформа разработана для объединения международной применимости, цифрового удобства, доступа к более сильным валютам и безопасных платежей в одном премиальном финансовом опыте.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="rounded-[2.5rem] border border-white/5 bg-black/60 backdrop-blur-2xl p-10 md:p-12"
          >
            <div className="inline-flex p-4 bg-amber-500/10 rounded-3xl mb-6">
              <Users size={36} className="text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic">Для кого это создано</h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>• Для афганских частных лиц, которым нужен доступ к международному счету</p>
              <p>• Для фрилансеров, получающих деньги от глобальных клиентов</p>
              <p>• Для семей, которые хотят сохранять свои сбережения в более сильных валютах</p>
              <p>• Для компаний, которым нужна возможность глобальных платежей</p>
              <p>• Для команд, оплачивающих подписки, программное обеспечение и онлайн-инструменты</p>
              <p>• Для студентов и специалистов, использующих международные цифровые сервисы</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CrisisSection() {
  return (
    <section id="problems" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Главный вызов"
          title="Банковский"
          highlight="кризис"
          description="Этот раздел был заново построен с чистым и адаптивным кодом. Вместо нестабильного горизонтального макета карточки теперь анимируются вверх в сильной премиальной сетке с лучшей читаемостью и лучшим поведением на мобильных устройствах."
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: i * 0.05 }}
              whileHover={{ y: -10, borderColor: 'rgba(239, 68, 68, 0.35)' }}
              className="group relative overflow-hidden rounded-[2rem] border border-red-500/10 bg-black/60 backdrop-blur-2xl p-7 md:p-8 min-h-[280px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-red-500/10 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/15">
                    <AlertCircle size={20} className="text-red-500" />
                  </div>
                  <span className="text-red-400/70 text-xs tracking-[0.25em] uppercase">Случай {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-red-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-7 text-base">
                  {problem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Решение SafiPay"
          title="Современные инструменты для"
          highlight="глобального доступа"
          description="SafiPay решает реальные финансовые проблемы через международные счета, сильные валюты, цифровой онбординг и безопасную платежную инфраструктуру, созданную для реального ежедневного использования."
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ y: -12, borderColor: 'rgba(245, 158, 11, 0.45)', boxShadow: '0 20px 50px rgba(245, 158, 11, 0.12)' }}
              className="group rounded-[2.4rem] border border-amber-500/10 bg-black/55 backdrop-blur-2xl p-8 md:p-9"
            >
              <div className="w-16 h-16 rounded-[1.2rem] bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-500 mb-7 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic leading-tight">{item.title}</h3>
              <p className="text-gray-400 leading-7 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services3DSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const smoothY = useSpring(y, { stiffness: 110, damping: 22 });

  return (
    <section ref={ref} className="py-28 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Расширенная информация"
          title="Больше, чем просто"
          highlight="карточная платформа"
          description="Этот раздел добавляет больше объяснений о том, что именно делает SafiPay, чтобы главная страница могла быть самодостаточной и давать посетителям более глубокое понимание уже с первого визита."
        />

        <motion.div style={{ y: smoothY }} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-[2.5rem] border border-amber-500/10 bg-black/55 backdrop-blur-2xl p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="inline-flex p-4 bg-amber-500/10 rounded-3xl mb-6">
              <Layers3 size={34} className="text-amber-500" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase italic">Почему SafiPay важен</h3>
            <div className="space-y-5 text-gray-300 text-lg leading-8">
              <p>SafiPay предназначен не только для отправки денег. Эта платформа задумана как полноценный цифровой финансовый шлюз, который помогает афганским пользователям более профессионально входить в современную международную экономику.</p>
              <p>Это означает более легкий доступ к более сильным валютам, лучшие платежные инструменты, большую гибкость для онлайн-бизнеса и больше уверенности для людей, которым нужны практические финансовые функции за пределами местных ограничений.</p>
              <p>Это также дает бренду более сильное ценностное предложение, поскольку посетители сразу понимают, что эта платформа — серьезный инфраструктурный проект, а не просто простой экран приложения.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {serviceBlocks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: i * 0.06 }}
                whileHover={{ y: -10, rotateX: -2 }}
                className="rounded-[2rem] border border-white/6 bg-black/55 backdrop-blur-2xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.32)]"
              >
                <div className="text-amber-500 mb-5">{item.icon}</div>
                <h4 className="text-xl font-black text-white mb-3 uppercase italic">{item.title}</h4>
                <p className="text-gray-400 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Сценарии использования"
          title="Создано для"
          highlight="реальных пользователей"
          description="Главная страница теперь ясно объясняет, где именно этот продукт вписывается в повседневную жизнь частных лиц, фрилансеров и компаний."
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Для частных лиц',
              text: 'Откройте международный счет, храните более сильные валюты, получайте деньги и совершайте онлайн-платежи с большей уверенностью и удобством.',
            },
            {
              title: 'Для фрилансеров',
              text: 'Получайте деньги от международных клиентов, оплачивайте инструменты и платформы и управляйте своим профессиональным доходом более профессионально.',
            },
            {
              title: 'Для компаний',
              text: 'Поддерживайте подписки, цифровые операции, онлайн-сервисы, глобальные закупки и более широкое участие в современной торговле.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              whileHover={{ y: -10, borderColor: 'rgba(245, 158, 11, 0.35)' }}
              className="rounded-[2rem] border border-amber-500/10 bg-black/50 backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-black text-amber-500 mb-4 uppercase italic">{item.title}</h3>
              <p className="text-gray-300 leading-8 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ru';

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
        >
          <motion.div
            animate={{ x: ['-20%', '120%'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-24 bg-white/10 blur-2xl rotate-12"
          />

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
            Полноценные ворота в <br /> глобальные финансы для афганцев
          </h2>
          <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
            SafiPay помогает пользователям уже с первого посещения точно понять, что предлагает платформа: международный доступ, более сильные валюты, более быстрый онбординг, безопасные платежные инструменты и реальный путь в глобальную цифровую экономику.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-amber-500 hover:text-white transition-all"
            >
              Подать заявку на партнерство <Handshake size={28} />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-4 px-12 py-6 border-2 border-white/40 text-white text-2xl font-black rounded-2xl hover:bg-white/10 transition-all"
            >
              Узнать больше <ArrowRight size={26} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePageEN() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <div className="bg-black text-white overflow-x-hidden selection:bg-amber-500/30 relative" dir="ltr">
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-white/5">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.75)]"
          style={{ scaleX }}
        />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
          <GlobalScene />
        </Canvas>
      </div>

      <IntroSection />
      <AboutSection />
      <CrisisSection />
      <SolutionsSection />
      <Services3DSection />
      <UseCasesSection />
      <FinalCTA />
    </div>
  );
}