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
    'د افغانستان پر محور کاروونکو او نړیوالو خدمت‌برابرونکو لپاره مسلکي نړیوال د حساب پرانیستل',
    'څو ارزي موجودي چې EUR، USD، GBP، PLN، SEK، NOK، RON، HUF، CZK او DKK پکې شامل دي',
    'محلي بانکي معلومات د پیسو د ترلاسه کولو، عملیاتي لېږدونو او نړیوالو تصفیاتو لپاره لا اسانه بهیر برابروي',
    'د مجازي او فزیکي کارتونو فوري صدور چې د پریمیم کارن‌تجربې او چټک لاسرسي لپاره جوړ شوي دي',
    'قوي ډیجیټل آن‌بورډینګ او د اروپا په کچه امنیتي منطق د عصري مالي عملیاتو لپاره',
    'یوه جدي پلاتفورم د فریلنسرانو، بنسټ‌اېښودونکو، شرکتونو، لیرې ټیمونو او نړیوال عاید لرونکو لپاره',
  ];

  const topupFeatures = [
    'په له 150 څخه زیاتو هېوادونو کې د موبایل رېچارج او کریډیټ رسونه',
    'له 700 څخه د زیاتو نړیوالو اپرېټرانو پوښښ',
    'نړیوال ډاټا پکېجونه او ډیجیټلي نښلونې خدمتونه',
    'د ډیجیټلي ګفټ‌کارټونو او ګیمینګ کارټونو وېش د سرحدونو هاخوا کارونې لپاره',
    'د مخکې‌پرداخت خدمتونو نړیوال بل‌تادیه او ډیجیټلي خدمتونو ته پراخ لاسرسی',
    'یوه چټکه او متحرکه ډیجیټلي سوداګریزه طبقه چې د حجم‌محوره شراکت ماډلونو لپاره مناسبه ده',
  ];

  const partnershipTracks = [
    {
      icon: <Landmark size={24} />,
      title: 'بانکي او فینټېک شریکان',
      desc: 'د بنسټونو، فینټېک چلونکو، د تادیاتو د زېربنا برابرونکو او هغو برانډونو لپاره مناسب چې د څو ارزي او کارت‌محوره ودې فرصتونه لټوي.',
    },
    {
      icon: <Wifi size={24} />,
      title: 'ډیجیټلي وېش او مخابرات',
      desc: 'د رېچارج اګېګرېټرانو، د اپرېټر شبکو، eSIM برابرونکو، د ډیجیټلي محصولاتو وېشونکو او د ټاپ‌اپ پلورونکو لپاره مناسب.',
    },
    {
      icon: <Building2 size={24} />,
      title: 'ستراتیژیکه سیمه‌ییزه پراختیا',
      desc: 'د بازار ته د ننوتلو شریکانو، محلي سوداګریزو شریکانو او هغو سازمانونو لپاره جوړ شوی چې غواړي دواړه اپلېکېشنونه په نوو بازارونو کې پراخ کړي.',
    },
  ];

  const metrics = [
    { label: 'د هېوادونو پوښښ', val: '150+', icon: Globe },
    { label: 'اپرېټر لاسرسی', val: '700+', icon: Server },
    { label: 'اصلي پلاتفورمونه', val: '2 Apps', icon: Layers },
    { label: 'د شراکت ظرفیت', val: 'Multi-Sector', icon: Briefcase },
  ];

  const infrastructure = [
    { icon: Database, title: 'مالي هسته', desc: 'د حسابونو، کارتونو، اسعارو او محلي بانکي خدمتونو منطق چې د SafiPay طبقه پر مخ وړي.' },
    { icon: Smartphone, title: 'پریمیم کارن‌تجربه', desc: 'یوه چټکه، پاکه او عصري انٹرفېس طبقه چې د باور، بدلون او جدي ورځني کارونې لپاره جوړه شوې ده.' },
    { icon: Layers, title: 'د وېش انجن', desc: 'هغه ډیجیټلي تحویلي معمارۍ چې د رېچارج، بنډلونو، ګیمینګ کارټونو او مخکې‌پرداخت خدمتونو تر شا ولاړه ده.' },
    { icon: Lock, title: 'امنیت او کنټرول', desc: 'پر باور، د مطابقت پر لوري، عملیاتي مقاومت او پر اوږدمهال کې لا خوندي پراختیا قوي تمرکز.' },
  ];

  const timeline = [
    {
      phase: '01',
      title: 'د لاسرسي طبقه',
      desc: 'د SafiPay او Safi TopUp لپاره د یوه نښتي ایکوسیستم په توګه د پوهاوي، بنسټیز باور او د شریکانو لپاره پیاوړې کیسې جوړول.',
      icon: <Rocket size={24} />,
    },
    {
      phase: '02',
      title: 'د وېش وده',
      desc: 'د اپرېټر لاسرسی، د ډیجیټلي محصولاتو ژورتیا، د هېوادونو پوښښ او د شریک‌محوره سوداګریزو وېش چینلونو پراخول.',
      icon: <Network size={24} />,
    },
    {
      phase: '03',
      title: 'مالي پراختیا',
      desc: 'د حسابونو، محلي بانکي معلوماتو، څو ارزي موجودۍ او کارت‌محوره تجربو پر بنسټ د مالي کاروونکي طبقې ژورول.',
      icon: <Wallet size={24} />,
    },
    {
      phase: '04',
      title: 'د ایکوسیستم پراخول',
      desc: 'د Safi برانډ په یوه پراخ ستراتیژیک شبکه بدلول چې لا قوي سرحد‌اوړي اهمیت او ژورې سوداګریزې شراکتونه ولري.',
      icon: <BarChart3 size={24} />,
    },
  ];

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden selection:bg-amber-500/30 font-sans text-right" dir="rtl">
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 px-4 sm:px-6 pt-28 sm:pt-32 pb-16 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.10),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.28),rgba(0,0,0,0.7))]" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto max-w-7xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-right order-2 lg:order-1">
              <MagneticElement>
                <span className="inline-flex items-center gap-2 text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] sm:tracking-[0.45em] border border-amber-500/30 px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 bg-amber-500/10">
                  <Sparkles size={14} />
                  د Safi د شراکتونو نړۍ
                </span>
              </MagneticElement>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-[7.5rem] font-black italic tracking-tighter leading-[0.92] mb-6 sm:mb-8">
                جوړ کړئ
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-blue-500 bg-clip-text text-transparent">
                  راتلونکې دوه‌ګونې شبکه
                </span>
              </h1>

              <p className="max-w-3xl mx-auto lg:mr-0 lg:ml-auto text-gray-300 text-base sm:text-lg md:text-xl xl:text-2xl font-light italic leading-relaxed text-right">
                SafiPay او Safi TopUp د یوه لوی سوداګریز ایکوسیستم دننه دوه نښتي انجنونه دي. یو یې پر نړیوال مالي لاسرسي، څو ارزي زېربنا او د کارتونو پر بنسټ عصري بانکي تجربو تمرکز کوي.
                بل یې پر نړیوال ډیجیټلي وېش، رېچارج، ډاټا، ګفټ‌کارټونو، ګیمینګ محصولاتو او د ډیجیټلي خدمتونو پر ورځني کارونې په پراخه کچه تمرکز کوي.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row-reverse gap-4 justify-center lg:justify-start">
                <Link
                  href="/fa/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 bg-amber-500 text-black font-black rounded-2xl hover:bg-white transition-all"
                >
                  شراکت پیل کړئ
                  <ArrowRight size={18} className="rotate-180" />
                </Link>

                <Link
                  href="#ecosystem"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-black rounded-2xl hover:border-amber-500/40 transition-all"
                >
                  ایکوسیستم وڅېړئ
                  <ChevronDown size={18} />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'مالي', icon: Landmark },
                  { label: 'ټاپ‌اپ', icon: Wifi },
                  { label: 'کارتونه', icon: CreditCard },
                  { label: 'وده', icon: BarChart3 },
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
                    { icon: Globe, title: 'نړیوال لاسرسی', text: 'سرحد‌اوړې چمتووالی چې د مالي او ډیجیټلي خدمتونو د پراختیا منطق ورسره وي.' },
                    { icon: ShieldCheck, title: 'باوري جوړښت', text: 'د شراکت لا قوي کیسه چې پر موثریت، مقیاس او اوږدمهاله ارزښت ولاړه ده.' },
                    { icon: Cpu, title: 'عصري زېربنا', text: 'دوه نښتي خدمتي طبقې چې د ژورو ادغامونو او راتلونکې ودې ظرفیت لري.' },
                    { icon: TimerReset, title: 'چټکه فعاله‌کونه', text: 'هغو شریکانو لپاره لومړی ډیجیټلي موقعیت‌نیونه چې چټک تطبیق او پراخ لاسرسی غواړي.' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl border border-white/6 bg-black/25 p-5 text-right">
                      <item.icon className="text-amber-500 mb-3 ml-auto" size={22} />
                      <h3 className="font-black italic text-base mb-2">{item.title}</h3>
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
            <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 text-center">
              د Safi ایکوسیستم وپلټئ
            </span>
            <ChevronDown className="text-amber-500" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-20 sm:py-24 border-y border-white/5 bg-white/[0.02] text-right">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
          {metrics.map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="space-y-4">
              <stat.icon className="mx-auto text-amber-500/60" size={24} />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tighter">{stat.val}</div>
              <div className="text-gray-600 text-[10px] sm:text-xs font-black tracking-[0.28em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TWO APPS */}
      <section id="ecosystem" className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6 text-right">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            دوه اپلېکېشنونه <span className="text-amber-500">یوه ستراتیژیکه لیدلوري</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed italic">
            دا د یوه واحد هدف لرونکي محصول کیسه نه ده. دا د یوه مدغم ایکوسیستم جدي وړاندیز دی. SafiPay مالي طبقه برابروي. Safi TopUp د ډیجیټلي وېش طبقه جوړوي.
            دواړه په ګډه د ودې، شراکت او بازاري اهمیت لپاره لا پراخ ځای جوړوي.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 items-stretch">
          <BentoCard className="group border-amber-500/20 hover:border-amber-500/40 text-right">
            <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10 flex-row-reverse">
              <div>
                <span className="text-amber-500 font-black text-[10px] sm:text-xs tracking-[0.25em]">SafiPay</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic mt-3 tracking-tighter">
                  نړیواله بانکي طبقه
                </h3>
              </div>
              <Landmark className="text-amber-500 shrink-0 group-hover:scale-110 transition-transform" size={46} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 font-light mb-8 sm:mb-10 italic text-right">
              SafiPay د هغو کاروونکو او شریکانو لپاره جوړ شوی چې د نړیوال حساب زېربنا، پریمیم څو ارزي موثریت، محلي بانکي معلوماتو او د کارتونو فوري صدور ته جدي اړتیا لري.
              دا پلاتفورم د افغانانو او هغو سازمانونو لپاره چې غواړي دا بازار له لا قوي وسایلو سره خدمت کړي، د نړیوال مالی نړۍ پر لور د یوې عصري دروازې په توګه ځای‌پرځای شوی.
            </p>

            <div className="grid gap-4 mb-8 sm:mb-10">
              {safiPayFeatures.map((item, i) => (
                <div key={i} className="flex items-start flex-row-reverse gap-3 rounded-2xl border border-white/6 bg-black/25 p-4 text-right">
                  <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                  <p className="text-gray-300 leading-7 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {['USD', 'EUR', 'GBP', 'PLN', 'SEK', 'NOK', 'RON', 'HUF', 'CZK', 'DKK'].map((curr) => (
                <div key={curr} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                  <div className="text-base sm:text-lg font-black italic tracking-tighter">{curr}</div>
                  <div className="text-[8px] text-gray-600 font-bold tracking-[0.2em] mt-1">ملاتړ شوی</div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="group border-blue-500/20 hover:border-blue-500/40 text-right">
            <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10 flex-row-reverse">
              <div>
                <span className="text-blue-400 font-black text-[10px] sm:text-xs tracking-[0.25em]">Safi TopUp</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic mt-3 tracking-tighter">
                  نړیوال ډیجیټلي وېش
                </h3>
              </div>
              <Wifi className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" size={46} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 font-light mb-8 sm:mb-10 italic text-right">
              Safi TopUp د مقیاس لپاره جوړ شوی. دا اپلېکېشن د رېچارج، موبایل کریډیټ، ډاټا پکېجونو، ډیجیټلي ګفټ‌کارټونو، ګیمینګ محصولاتو او مخکې‌پرداخت خدمتونو اړتیاوې په پراخ نړیوال نطاق کې پوښي.
              دا شریکانو ته د یوه لوړ تکرار لرونکي ډیجیټلي خدماتي ماډل لاسرسی ورکوي چې چټک، عملي او په نړیواله کچه د پراخېدو وړ دی.
            </p>

            <div className="grid gap-4 mb-8 sm:mb-10">
              {topupFeatures.map((item, i) => (
                <div key={i} className="flex items-start flex-row-reverse gap-3 rounded-2xl border border-white/6 bg-black/25 p-4 text-right">
                  <CheckCircle2 size={18} className="text-blue-400 mt-1 shrink-0" />
                  <p className="text-gray-300 leading-7 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'رېچارج', icon: Smartphone },
                { label: 'ډاټا', icon: Radio },
                { label: 'ګفټ‌کارټ', icon: Gift },
                { label: 'ګیمینګ', icon: MonitorSmartphone },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                  <item.icon className="mx-auto text-blue-400 mb-2" size={18} />
                  <div className="text-[10px] font-black tracking-[0.18em] text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      {/* VALUE */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 bg-white/[0.02] border-y border-white/5 text-right">
        <div className="container mx-auto px-4 sm:px-6 grid xl:grid-cols-12 gap-8 items-stretch">
          <BentoCard className="xl:col-span-8 group text-right">
            <div className="flex justify-between items-start gap-4 mb-10 sm:mb-12 flex-row-reverse">
              <div>
                <span className="text-amber-500 text-[10px] sm:text-xs font-black tracking-[0.25em]">د شراکت ارزښت</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic mt-3 tracking-tighter">
                  ولې دا ایکوسیستم د ځواک ضرب رامنځته کوي
                </h3>
              </div>
              <Briefcase className="text-amber-500 shrink-0" size={46} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: ShieldCheck,
                  title: 'د برانډ اعتبار',
                  desc: 'د دوو اپلېکېشنونو ایکوسیستم شریکانو ته تر یوه محدود واحد-هدف محصول لا پیاوړې کیسه ورکوي. دا جوړښت جديت، پراخوالی او د پراختیا منطق رسوي.',
                },
                {
                  icon: Globe,
                  title: 'نړیواله پراخېدنه',
                  desc: 'له نړیوالو بانکي طبقو نیولې تر د ډیجیټلي خدمتونو نړیوال وړاندې کولو پورې، دا ماډل د سیمه‌ییزې او نړیوالې پراختیا لپاره جوړ شوی.',
                },
                {
                  icon: CreditCard,
                  title: 'د عوایدو څو بهیرونه',
                  desc: 'د شراکت ماډل یوازې په یوه بهیر نه محدودېږي. دا جوړښت حسابونه، کارتونه، ټاپ‌اپ، ګفټ‌کارټونه، ډاټا او پراخ ډیجیټلي خدمتونه سره نښلولی شي.',
                },
                {
                  icon: BarChart3,
                  title: 'د اوږدمهال ودې منطق',
                  desc: 'د ایکوسیستم جوړښت د راتلونکو محصولاتو، ژورو ادغامونو او د وخت په تېرېدو د پلاتفورم پراخ ارزښت لپاره ځای برابروي.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-[1.8rem] border border-white/6 bg-black/20 p-6 text-right">
                  <item.icon className="text-amber-500 mb-4 ml-auto" size={24} />
                  <h4 className="text-lg sm:text-xl font-black italic tracking-tight mb-3">{item.title}</h4>
                  <p className="text-gray-400 leading-7 font-light text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="xl:col-span-4 bg-gradient-to-br from-amber-500 to-yellow-300 text-black border-none flex flex-col justify-between text-right">
            <div className="p-4 bg-black/10 w-fit rounded-2xl ml-auto">
              <Sparkles size={38} />
            </div>
            <div>
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-black italic leading-[0.86] mb-5 tracking-tighter">
                د دوو
                <br />
                اپونو
                <br />
                برتري
              </h4>
              <p className="font-bold text-sm opacity-80 italic leading-relaxed">
                یو ایکوسیستم. دوه بېلابېل بازاري انجنونه. د ستراتیژیکو شریکانو لپاره یوه لویه سوداګریزه موقع.
              </p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* TRACKS */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6 text-right">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            د <span className="text-blue-500">شراکت</span> لارې
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            بېلابېل شریکان د Safi ایکوسیستم له بېلابېلو طبقو سره برابرېږي. دا جوړښت د ټولو لپاره یو شان ماډل نه دی. پلاتفورم داسې طرحه شوی چې فینټېک، مخابرات، زېربنا او د ودې پر محور سوداګریز ائتلافونه هرکلی کړي.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partnershipTracks.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-8 backdrop-blur-xl text-right"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 text-amber-500 flex items-center justify-center mb-6 ml-auto">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black italic tracking-tight mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-7 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6 text-right">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            د <span className="text-blue-500">زېربنا</span> طبقې
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            د بصري هویت تر شا، ایکوسیستم پر واقعي عملیاتي طبقو ولاړ دی: مالي، وېش، د کاروونکي تجربه، امنیت او د اوږدمهالې ودې معمارۍ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {infrastructure.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-7 backdrop-blur-xl text-right"
            >
              <item.icon className="text-blue-400 mb-5 ml-auto" size={26} />
              <h3 className="text-lg sm:text-xl font-black italic tracking-tight mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-7 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 bg-white/[0.02] border-y border-white/5 text-right">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-blue-500/8" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-12 sm:mb-16 text-center">
                زاړه ماډلونه د <span className="text-amber-500">SAFI ایکوسیستم</span> پر وړاندې
              </h2>

              <div className="grid md:grid-cols-2 gap-10 sm:gap-14 text-right">
                <div className="space-y-6 sm:space-y-8 opacity-45">
                  <h4 className="text-xl sm:text-2xl font-black italic border-b border-white/10 pb-4">
                    دودیز ماډلونه
                  </h4>
                  {[
                    'یوازې یو محدود خدمت',
                    'کمزورې نړیواله پراخېدنه',
                    'د محصول پراختیا لپاره محدود منطق',
                    'درنه او زوړ کارن‌تجربه',
                  ].map((text) => (
                    <div key={text} className="flex flex-row-reverse gap-4 items-center text-gray-500 font-light text-xs sm:text-sm italic line-through">
                      <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> {text}
                    </div>
                  ))}
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <h4 className="text-xl sm:text-2xl font-black italic border-b border-amber-500/30 pb-4 text-amber-500">
                    د Safi ماډل
                  </h4>
                  {[
                    'د بېلابېلو بازاري رولونو سره دوه نښتي اپلېکېشنونه',
                    'د سیمه‌ییزې او نړیوالې ودې واقعي وړتیا',
                    'د شریکانو لپاره د عوایدو څو فرصتونه',
                    'عصري ډیزاین، لوړ اعتبار، چټکه تجربه',
                  ].map((text) => (
                    <div key={text} className="flex flex-row-reverse gap-4 items-center text-white font-black text-xs sm:text-sm italic">
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
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6 text-right">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            د <span className="text-amber-500">ودې نقشې</span> منطق
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            دا ایکوسیستم جامد نه دی. دا داسې طرحه شوی چې په بېلابېلو پړاوونو کې پراخ شي، څو شراکتونه، زېربنا، مالي خدمتونه او ډیجیټلي وېش د وخت په تېرېدو سره یوځای وده وکړي.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="flex flex-col md:flex-row-reverse gap-5 sm:gap-6 items-start rounded-[2rem] sm:rounded-[2.4rem] border border-white/6 bg-white/[0.03] p-6 sm:p-8 text-right"
            >
              <div className="text-5xl sm:text-6xl font-black italic text-white/10 leading-none shrink-0 md:w-[100px] text-right">
                {item.phase}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 mb-4 flex-row-reverse">
                  <h3 className="text-2xl sm:text-3xl font-black italic tracking-tight">{item.title}</h3>
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
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-8 sm:mb-12">
              راځئ
              <br />
              <span className="text-amber-500">راتلونکې شبکه جوړه کړو</span>
            </h2>
          </MagneticElement>

          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-10 sm:mb-12">
            که تاسې له داسې راتلونکې‌محوره برانډ سره د شراکت په لټه کې یاست چې نړیواله مالي زېربنا له پراخ ډیجیټلي وېش سره یوځای کوي، نو خبرې اترې له همدې ځایه پیلېږي.
            SafiPay او Safi TopUp په ګډه د شراکت داسې وړاندیز رامنځته کوي چې لا جدي، لا د پراخېدو وړ او له سوداګریز اړخه لا جذاب وي.
          </p>

          <Link
            href="/fa/contact"
            className="inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-amber-500 text-black font-black text-base sm:text-lg rounded-2xl hover:bg-white transition-all group"
          >
            د شراکت خبرې پیل کړئ
            <ArrowRight className="group-hover:-translate-x-2 transition-transform rotate-180" />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-16 sm:mt-24 text-[10px] font-black tracking-[0.24em] sm:tracking-[0.4em] text-gray-700 border-t border-white/5 pt-12 sm:pt-14">
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4">اپلېکېشنونه</p>
              <p className="text-white tracking-[0.12em]">SafiPay / Safi TopUp</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4">تمرکز</p>
              <p className="text-white tracking-[0.12em]">مالي + ډیجیټلي خدمتونه</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4">مقیاس</p>
              <p className="text-green-500 tracking-[0.12em]">نړیوال چمتووالی</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4">لید</p>
              <p className="text-white tracking-[0.12em]">د اوږدمهالې ودې لپاره جوړ شوی</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
