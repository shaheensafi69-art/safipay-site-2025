'use client';

import React, { Suspense, useMemo, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Database,
  Globe,
  Landmark,
  Layers,
  Lock,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  Wifi,
  Gift,
  Radio,
  MonitorSmartphone,
  Users,
  Cpu,
  Rocket,
  TimerReset,
  Zap,
} from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#f59e0b';
const GOLD_SOFT = '#ffd27a';
const BLUE = '#3b82f6';
const BLUE_SOFT = '#93c5fd';

function MagneticElement({
  children,
  distance = 0.2,
}: {
  children: React.ReactNode;
  distance?: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 180, damping: 18 });
  const y = useSpring(mouseY, { stiffness: 180, damping: 18 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - (rect.left + rect.width / 2)) * distance);
        mouseY.set((clientY - (rect.top + rect.height / 2)) * distance);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}

function FloatingPartnerOrb() {
  const orbRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 2200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 2.25 + Math.random() * 0.24;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.0025;
      orbRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.08;
      orbRef.current.rotation.z = Math.cos(clock.elapsedTime * 0.2) * 0.04;
    }

    if (ringRef.current) {
      ringRef.current.rotation.y = clock.elapsedTime * 0.18;
      ringRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.16) * 0.12;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.0013;
      particlesRef.current.rotation.x += 0.0007;
    }
  });

  return (
    <group>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={GOLD} size={0.02} transparent opacity={0.95} sizeAttenuation />
      </points>

      <mesh ref={orbRef}>
        <sphereGeometry args={[1.95, 64, 64]} />
        <meshPhysicalMaterial
          color="#060606"
          emissive={GOLD}
          emissiveIntensity={0.12}
          metalness={1}
          roughness={0.14}
          clearcoat={1}
          clearcoatRoughness={0.12}
          transparent
          opacity={0.98}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.2, 48, 48]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>

      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.85, 0.03, 16, 220]} />
          <meshStandardMaterial
            color={GOLD}
            emissive={GOLD}
            emissiveIntensity={0.22}
            metalness={1}
            roughness={0.2}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2.45, 0.45, 0.24]}>
          <torusGeometry args={[3.45, 0.018, 16, 220]} />
          <meshStandardMaterial
            color={GOLD_SOFT}
            emissive={GOLD}
            emissiveIntensity={0.14}
            metalness={1}
            roughness={0.18}
            transparent
            opacity={0.72}
          />
        </mesh>
      </group>
    </group>
  );
}

function OrbitLabel({
  text,
  position,
  color = GOLD,
}: {
  text: string;
  position: [number, number, number];
  color?: string;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.lookAt(camera.position);
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <planeGeometry args={[2, 0.5]} />
        <meshBasicMaterial color="#090909" transparent opacity={0.72} />
      </mesh>
      <Text fontSize={0.16} color={color} anchorX="center" anchorY="middle">
        {text}
      </Text>
    </group>
  );
}

function FloatingMiniShapes() {
  return (
    <>
      <Float speed={1.3} floatIntensity={0.7} rotationIntensity={0.2}>
        <mesh position={[-5.2, 2.2, -1.8]} rotation={[0.5, 0.4, 0.2]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#1a1a1a" emissive={GOLD} emissiveIntensity={0.15} metalness={1} roughness={0.18} />
        </mesh>
      </Float>

      <Float speed={1.7} floatIntensity={0.85} rotationIntensity={0.24}>
        <mesh position={[5.0, -1.8, -1.6]}>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color={GOLD_SOFT} emissive={GOLD} emissiveIntensity={0.18} metalness={1} roughness={0.12} />
        </mesh>
      </Float>

      <Float speed={1.4} floatIntensity={0.65} rotationIntensity={0.18}>
        <mesh position={[5.5, 2.0, -2.3]} rotation={[0.8, 0.3, 0.5]}>
          <boxGeometry args={[0.68, 0.4, 0.06]} />
          <meshStandardMaterial color="#171717" emissive={BLUE} emissiveIntensity={0.12} metalness={0.9} roughness={0.22} />
        </mesh>
      </Float>

      <Float speed={1.5} floatIntensity={0.75} rotationIntensity={0.16}>
        <mesh position={[-4.7, -2.1, -1.6]} rotation={[0.2, 0.8, 0.3]}>
          <torusGeometry args={[0.42, 0.08, 16, 80]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.18} metalness={1} roughness={0.18} />
        </mesh>
      </Float>
    </>
  );
}

function PartnerScene() {
  return (
    <>
      <color attach="background" args={['#020202']} />
      <PerspectiveCamera makeDefault position={[0, 0, 9]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[7, 6, 5]} intensity={1.7} color={GOLD} />
      <pointLight position={[-6, -4, -6]} intensity={0.9} color="#fff2d4" />
      <pointLight position={[0, 5, -4]} intensity={0.7} color="#ffcf70" />
      <Stars radius={130} depth={80} count={4200} factor={3} saturation={0} fade speed={0.7} />

      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.22}>
          <FloatingPartnerOrb />
          <OrbitLabel text="SafiPay" position={[3.4, 0.7, 0]} color={GOLD} />
          <OrbitLabel text="Safi TopUp" position={[-3.8, -0.5, 0.6]} color={BLUE_SOFT} />
        </Float>
        <FloatingMiniShapes />
      </Suspense>
    </>
  );
}

function BentoCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-120, 120], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-120, 120], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left - rect.width / 2);
        my.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.4rem] border border-white/8 bg-white/[0.03] p-6 sm:p-8 md:p-10 backdrop-blur-2xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/6 via-transparent to-blue-500/5 opacity-80" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function SafiPartners3DEnglish() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });

  const heroOpacity = useTransform(smooth, [0, 0.12], [1, 0.15]);
  const heroScale = useTransform(smooth, [0, 0.12], [1, 0.95]);

  const safiPayFeatures = [
    'Профессиональное открытие международного счёта для пользователей с фокусом на Афганистан и для глобальных поставщиков услуг',
    'Мультивалютные балансы, включая EUR, USD, GBP, PLN, SEK, NOK, RON, HUF, CZK и DKK',
    'Локальные банковские реквизиты для более удобного получения платежей, операционных переводов и международных расчётов',
    'Мгновенный выпуск виртуальных и физических карт, разработанных для премиального пользовательского опыта и быстрого доступа',
    'Сильный цифровой онбординг и логика безопасности европейского уровня для современных финансовых операций',
    'Серьёзная платформа для фрилансеров, основателей, компаний, удалённых команд и получателей международного дохода',
  ];

  const topupFeatures = [
    'Доставка мобильного пополнения и кредитов связи более чем в 150 странах',
    'Покрытие более чем 700 международных операторов',
    'Глобальные пакеты данных и цифровые сервисы подключения',
    'Распространение цифровых подарочных карт и игровых карт для трансграничного использования',
    'Международная оплата предоплаченных сервисных счетов и более широкий доступ к цифровым услугам',
    'Быстрый и динамичный слой цифровой коммерции, идеально подходящий для партнёрских моделей, основанных на объёме',
  ];

  const partnershipTracks = [
    {
      icon: <Landmark size={24} />,
      title: 'Банковские и финтех-партнёры',
      desc: 'Идеально подходит для институтов, финтех-операторов, поставщиков платёжной инфраструктуры и брендов, которые ищут возможности роста в мультивалютной и карточной среде.',
    },
    {
      icon: <Wifi size={24} />,
      title: 'Цифровая дистрибуция и телеком',
      desc: 'Подходит для агрегаторов пополнений, сетей операторов, поставщиков eSIM, дистрибьюторов цифровых продуктов и продавцов топ-апа.',
    },
    {
      icon: <Building2 size={24} />,
      title: 'Стратегическая региональная экспансия',
      desc: 'Создано для партнёров по выходу на рынок, локальных коммерческих партнёров и организаций, которые хотят масштабировать оба приложения на новых рынках.',
    },
  ];

  const metrics = [
    { label: 'Покрытие стран', val: '150+', icon: Globe },
    { label: 'Доступ к операторам', val: '700+', icon: Server },
    { label: 'Основные платформы', val: '2 Apps', icon: Layers },
    { label: 'Партнёрский потенциал', val: 'Multi-Sector', icon: Briefcase },
  ];

  const infrastructure = [
    { icon: Database, title: 'Финансовое ядро', desc: 'Логика счетов, карт, валют и локальных банковских сервисов, которая обеспечивает слой SafiPay.' },
    { icon: Smartphone, title: 'Премиальный пользовательский опыт', desc: 'Быстрый, чистый и современный интерфейсный слой, созданный для доверия, конверсии и серьёзного ежедневного использования.' },
    { icon: Layers, title: 'Движок дистрибуции', desc: 'Архитектура цифровой доставки, стоящая за пополнениями, бандлами, игровыми картами и предоплаченными сервисами.' },
    { icon: Lock, title: 'Безопасность и контроль', desc: 'Сильный фокус на доверии, соответствии требованиям, операционной устойчивости и более безопасной долгосрочной масштабируемости.' },
  ];

  const timeline = [
    {
      phase: '01',
      title: 'Слой доступа',
      desc: 'Формирование узнаваемости, институционального доверия и более сильной партнёрской истории вокруг SafiPay и Safi TopUp как связанной экосистемы.',
      icon: <Rocket size={24} />,
    },
    {
      phase: '02',
      title: 'Рост дистрибуции',
      desc: 'Расширение доступа к операторам, глубины цифровых продуктов, покрытия стран и партнёрских коммерческих каналов дистрибуции.',
      icon: <Network size={24} />,
    },
    {
      phase: '03',
      title: 'Финансовая экспансия',
      desc: 'Углубление финансового пользовательского слоя вокруг счетов, локальных банковских реквизитов, мультивалютных балансов и карточных сценариев.',
      icon: <Wallet size={24} />,
    },
    {
      phase: '04',
      title: 'Масштабирование экосистемы',
      desc: 'Преобразование бренда Safi в более широкую стратегическую сеть с более сильной трансграничной значимостью и более глубокими коммерческими партнёрствами.',
      icon: <BarChart3 size={24} />,
    },
  ];

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden selection:bg-amber-500/30 font-sans" dir="ltr">
      <motion.div
        className="fixed top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-300 to-blue-500 z-[100] origin-right shadow-[0_0_20px_rgba(245,158,11,0.45)]"
        style={{ scaleX: smooth }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
          <PartnerScene />
        </Canvas>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.10),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.28),rgba(0,0,0,0.7))]" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto max-w-7xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <MagneticElement>
                <span className="inline-flex items-center gap-2 text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] sm:tracking-[0.45em] border border-amber-500/30 px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 bg-amber-500/10">
                  <Sparkles size={14} />
                  Мир партнёрств Safi
                </span>
              </MagneticElement>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-[7.5rem] font-black italic tracking-tighter leading-[0.92] uppercase mb-6 sm:mb-8">
                Создайте
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-blue-500 bg-clip-text text-transparent">
                  следующую двойную сеть
                </span>
              </h1>

              <p className="max-w-3xl mx-auto lg:ml-0 lg:mr-auto text-gray-300 text-base sm:text-lg md:text-xl xl:text-2xl font-light italic leading-relaxed text-left">
                SafiPay и Safi TopUp — это два связанных двигателя внутри более широкой коммерческой экосистемы. Один сосредоточен на международном финансовом доступе, мультивалютной инфраструктуре и современных карточных банковских сценариях.
                Другой фокусируется на глобальной цифровой дистрибуции, пополнении, данных, подарочных картах, игровых продуктах и ежедневном использовании цифровых сервисов в крупном масштабе.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/fa/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 bg-amber-500 text-black font-black rounded-2xl hover:bg-white transition-all"
                >
                  Начать партнёрство
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#ecosystem"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-black rounded-2xl hover:border-amber-500/40 transition-all"
                >
                  Изучить экосистему
                  <ChevronDown size={18} />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Финансы', icon: Landmark },
                  { label: 'Top-up', icon: Wifi },
                  { label: 'Карты', icon: CreditCard },
                  { label: 'Рост', icon: BarChart3 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-center"
                  >
                    <item.icon className="mx-auto text-amber-500 mb-2" size={18} />
                    <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-gray-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[480px] rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, title: 'Глобальный доступ', text: 'Трансграничная готовность с логикой расширения финансовых и цифровых сервисов.' },
                    { icon: ShieldCheck, title: 'Надёжная структура', text: 'Более сильная партнёрская история, построенная на эффективности, масштабе и долгосрочной ценности.' },
                    { icon: Cpu, title: 'Современная инфраструктура', text: 'Два связанных сервисных слоя с потенциалом для более глубоких интеграций и будущего роста.' },
                    { icon: TimerReset, title: 'Быстрая активация', text: 'Цифровое позиционирование для партнёров, которым нужен более быстрый запуск и более широкий охват.' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl border border-white/6 bg-black/25 p-5 text-left">
                      <item.icon className="text-amber-500 mb-3 mr-auto" size={22} />
                      <h3 className="font-black italic uppercase text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-6">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10 sm:mt-14 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase text-center">
              Откройте экосистему Safi
            </span>
            <ChevronDown className="text-amber-500" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-20 sm:py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
          {metrics.map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="space-y-4">
              <stat.icon className="mx-auto text-amber-500/60" size={24} />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tighter uppercase">{stat.val}</div>
              <div className="text-gray-600 text-[10px] sm:text-xs font-black uppercase tracking-[0.28em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TWO APPS */}
      <section id="ecosystem" className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Два приложения <span className="text-amber-500">одно стратегическое видение</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed italic">
            Это не история продукта с одной функцией. Это серьёзное предложение интегрированной экосистемы. SafiPay обеспечивает финансовый слой. Safi TopUp строит слой цифровой дистрибуции.
            Вместе они создают больше пространства для роста, партнёрств и рыночной значимости.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 items-stretch">
          <BentoCard className="group border-amber-500/20 hover:border-amber-500/40 text-left">
            <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-amber-500 font-black text-[10px] sm:text-xs tracking-[0.25em] uppercase">SafiPay</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mt-3 tracking-tighter">
                  Глобальный банковский слой
                </h3>
              </div>
              <Landmark className="text-amber-500 shrink-0 group-hover:scale-110 transition-transform" size={46} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 font-light mb-8 sm:mb-10 italic text-left">
              SafiPay создан для пользователей и партнёров, которым нужен серьёзный доступ к международной инфраструктуре счетов, премиальной мультивалютной эффективности, локальным банковским реквизитам и мгновенному выпуску карт.
              Платформа позиционируется как современный вход в глобальные финансы для афганцев и для организаций, которые хотят обслуживать этот рынок более сильными инструментами.
            </p>

            <div className="grid gap-4 mb-8 sm:mb-10">
              {safiPayFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/6 bg-black/25 p-4 text-left">
                  <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                  <p className="text-gray-300 leading-7 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {['USD', 'EUR', 'GBP', 'PLN', 'SEK', 'NOK', 'RON', 'HUF', 'CZK', 'DKK'].map((curr) => (
                <div key={curr} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                  <div className="text-base sm:text-lg font-black italic uppercase tracking-tighter">{curr}</div>
                  <div className="text-[8px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-1">Поддерживается</div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="group border-blue-500/20 hover:border-blue-500/40 text-left">
            <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-blue-400 font-black text-[10px] sm:text-xs tracking-[0.25em] uppercase">Safi TopUp</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mt-3 tracking-tighter">
                  Глобальная цифровая дистрибуция
                </h3>
              </div>
              <Wifi className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" size={46} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 font-light mb-8 sm:mb-10 italic text-left">
              Safi TopUp спроектирован для масштаба. Это приложение охватывает пополнения, мобильные кредиты, пакеты данных, цифровые подарочные карты, игровые продукты и потребности в предоплаченных сервисах в широком международном охвате.
              Оно даёт партнёрам доступ к высокочастотной модели цифровых услуг, которая быстра, практична и масштабируема по всему миру.
            </p>

            <div className="grid gap-4 mb-8 sm:mb-10">
              {topupFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/6 bg-black/25 p-4 text-left">
                  <CheckCircle2 size={18} className="text-blue-400 mt-1 shrink-0" />
                  <p className="text-gray-300 leading-7 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Пополнение', icon: Smartphone },
                { label: 'Данные', icon: Radio },
                { label: 'Подарочная карта', icon: Gift },
                { label: 'Gaming', icon: MonitorSmartphone },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                  <item.icon className="mx-auto text-blue-400 mb-2" size={18} />
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      {/* VALUE */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 grid xl:grid-cols-12 gap-8 items-stretch">
          <BentoCard className="xl:col-span-8 group text-left">
            <div className="flex justify-between items-start gap-4 mb-10 sm:mb-12">
              <div>
                <span className="text-amber-500 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase">Ценность партнёрства</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mt-3 tracking-tighter">
                  Почему эта экосистема создаёт эффект рычага
                </h3>
              </div>
              <Briefcase className="text-amber-500 shrink-0" size={46} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Доверие к бренду',
                  desc: 'Экосистема из двух приложений даёт партнёрам более сильную историю, чем ограниченный продукт с одной задачей. Эта структура передаёт серьёзность, масштаб и логику расширения.',
                },
                {
                  icon: Globe,
                  title: 'Глобальная масштабируемость',
                  desc: 'От международных банковских слоёв до мировой доставки цифровых услуг — эта модель создана для региональной и международной экспансии.',
                },
                {
                  icon: CreditCard,
                  title: 'Несколько потоков дохода',
                  desc: 'Партнёрская модель не ограничена одним потоком. Эта структура может связывать счета, карты, top-up, подарочные карты, данные и более широкие цифровые сервисы.',
                },
                {
                  icon: BarChart3,
                  title: 'Логика долгосрочного роста',
                  desc: 'Структура экосистемы создаёт пространство для будущих продуктов, более глубоких интеграций и более широкой платформенной ценности со временем.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-[1.8rem] border border-white/6 bg-black/20 p-6 text-left">
                  <item.icon className="text-amber-500 mb-4 mr-auto" size={24} />
                  <h4 className="text-lg sm:text-xl font-black italic uppercase tracking-tight mb-3">{item.title}</h4>
                  <p className="text-gray-400 leading-7 font-light text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="xl:col-span-4 bg-gradient-to-br from-amber-500 to-yellow-300 text-black border-none flex flex-col justify-between text-left">
            <div className="p-4 bg-black/10 w-fit rounded-2xl mr-auto">
              <Sparkles size={38} />
            </div>
            <div>
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-black italic leading-[0.86] mb-5 uppercase tracking-tighter">
                Преимущество
                <br />
                двух
                <br />
                приложений
              </h4>
              <p className="font-bold text-sm uppercase opacity-80 italic leading-relaxed">
                Одна экосистема. Два разных рыночных двигателя. Больше коммерческих возможностей для стратегических партнёров.
              </p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* TRACKS */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Направления <span className="text-blue-500">партнёрства</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            Разные партнёры соответствуют разным слоям экосистемы Safi. Эта структура не является универсальной моделью для всех. Платформа создана так, чтобы приветствовать финтех, телеком, инфраструктуру и коммерческие альянсы, ориентированные на рост.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partnershipTracks.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-8 backdrop-blur-xl text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 text-amber-500 flex items-center justify-center mb-6 mr-auto">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-7 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Слои <span className="text-blue-500">инфраструктуры</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            За визуальной идентичностью экосистема опирается на реальные операционные слои: финансы, дистрибуция, пользовательский опыт, безопасность и архитектура долгосрочного роста.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {infrastructure.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-7 backdrop-blur-xl text-left"
            >
              <item.icon className="text-blue-400 mb-5 mr-auto" size={26} />
              <h3 className="text-lg sm:text-xl font-black italic uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-7 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-blue-500/8" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-12 sm:mb-16 text-center">
                Старые модели против <span className="text-amber-500">экосистемы SAFI</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-10 sm:gap-14 text-left">
                <div className="space-y-6 sm:space-y-8 opacity-45">
                  <h4 className="text-xl sm:text-2xl font-black italic uppercase border-b border-white/10 pb-4">
                    Традиционные модели
                  </h4>
                  {[
                    'Только одна ограниченная услуга',
                    'Слабая международная масштабируемость',
                    'Ограниченная логика расширения продукта',
                    'Тяжёлый и устаревший пользовательский опыт',
                  ].map((text) => (
                    <div key={text} className="flex gap-4 items-center text-gray-500 font-light uppercase text-xs sm:text-sm italic line-through">
                      <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> {text}
                    </div>
                  ))}
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <h4 className="text-xl sm:text-2xl font-black italic uppercase border-b border-amber-500/30 pb-4 text-amber-500">
                    Модель Safi
                  </h4>
                  {[
                    'Два связанных приложения с разными рыночными ролями',
                    'Реальный потенциал для регионального и глобального роста',
                    'Несколько источников дохода для партнёров',
                    'Современный дизайн, более высокое доверие, более быстрый опыт',
                  ].map((text) => (
                    <div key={text} className="flex gap-4 items-center text-white font-black uppercase text-xs sm:text-sm italic">
                      <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] shrink-0" /> {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Логика <span className="text-amber-500">дорожной карты роста</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            Эта экосистема не статична. Она спроектирована так, чтобы расширяться через разные этапы, позволяя партнёрствам, инфраструктуре, финансовым сервисам и цифровой дистрибуции расти вместе со временем.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="flex flex-col md:flex-row gap-5 sm:gap-6 items-start rounded-[2rem] sm:rounded-[2.4rem] border border-white/6 bg-white/[0.03] p-6 sm:p-8 text-left"
            >
              <div className="text-5xl sm:text-6xl font-black italic text-white/10 leading-none shrink-0 md:w-[100px] text-left">
                {item.phase}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight">{item.title}</h3>
                  <div className="text-amber-500 shrink-0">{item.icon}</div>
                </div>
                <p className="text-gray-400 text-base sm:text-lg leading-8 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <MagneticElement>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8 sm:mb-12">
              Давайте
              <br />
              <span className="text-amber-500">построим следующую сеть</span>
            </h2>
          </MagneticElement>

          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-10 sm:mb-12">
            Если вы ищете партнёрство с брендом, ориентированным на будущее, который объединяет международную финансовую инфраструктуру с цифровой дистрибуцией в крупном масштабе, разговор начинается здесь.
            SafiPay и Safi TopUp вместе создают более серьёзное, более масштабируемое и более коммерчески привлекательное партнёрское предложение.
          </p>

          <Link
            href="/fa/contact"
            className="inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-amber-500 text-black font-black text-base sm:text-lg rounded-2xl hover:bg-white transition-all group"
          >
            Начать обсуждение партнёрства
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-16 sm:mt-24 text-[10px] font-black uppercase tracking-[0.24em] sm:tracking-[0.4em] text-gray-700 border-t border-white/5 pt-12 sm:pt-14">
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Приложения</p>
              <p className="text-white tracking-[0.12em]">SafiPay / Safi TopUp</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Фокус</p>
              <p className="text-white tracking-[0.12em]">Финансы + цифровые сервисы</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Масштаб</p>
              <p className="text-green-500 tracking-[0.12em]">Готово к миру</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Видение</p>
              <p className="text-white tracking-[0.12em]">Создано для долгосрочного роста</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
