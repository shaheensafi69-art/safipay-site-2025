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
    title: 'بانکي لاسرسی محدود دی',
    desc: 'ډېر افغانان لا هم د خپل ورځني شخصي او سوداګریز استعمال لپاره باوري نړيوالو بانکي خدمتونو ته اسانه لاسرسی نه لري.',
  },
  {
    title: 'په نړيوالو لېږدونو کې محدوديت',
    desc: 'د پولو هاخوا د پيسو لېږد ډېری وخت د کمزوري نړيوال لاسرسي له امله ورو، محدود، ګران يا غير باوري وي.',
  },
  {
    title: 'د انلاين تادیاتو خنډونه',
    desc: 'د امازون، هاستینګ، SaaS وسایلو، کلاوډ خدمتونو، اشتراکونو، اعلانونو او ډیجیټلي پلاتفورمونو لپاره تادیه لا هم د ډېرو کاروونکو لپاره سخته ده.',
  },
  {
    title: 'د لېږد لوړ لګښت',
    desc: 'دودیز او غیررسمي کانالونه ډېر وخت اضافي فیسونه، بې‌ځایه ځنډ، لږ شفافیت او محدود مالي کنټرول رامنځته کوي.',
  },
  {
    title: 'د اسعارو د ارزښت ساتلو ستونزه',
    desc: 'کاروونکي اړتیا لري چې خپلې شتمنۍ په قوي اسعارو کې په لا خوندي لارو وساتي، د دې پر ځای چې یوازې په یوه محدود محلي انتخاب کې پاتې شي.',
  },
  {
    title: 'ورو آن‌بورډینګ',
    desc: 'د مالي خدمتونو پرانیستل او کارول باید ډیجیټلي، چټک او روښانه وي، خو ډېر سیستمونه لا هم زاړه دي او په کاغذي چارو پورې تړلي دي.',
  },
  {
    title: 'په باور او امنیت کې کمزوري',
    desc: 'ټیټ شفافیت، کم‌کیفیته سیستمونه او نامنظم بهیرونه د وېرې، ګډوډۍ او درغلیو خطر زیاتوي.',
  },
  {
    title: 'په ډیجیټلي سوداګرۍ کې محدودیت',
    desc: 'سوداګرۍ، فریلنسران او لیرې کاري ټیمونه د مناسبې تادیاتي زېربنا پرته په بشپړ ډول په نړیوال ای‌کامرس کې برخه نه شي اخیستلی.',
  },
];

const solutions = [
  {
    icon: <Landmark />,
    title: 'نړيوال حسابونه',
    desc: 'مسلکي نړيوال حسابونه پرانیزئ چې د واقعي مالي فعالیت، د پولو هاخوا کارونې او د عصري کاروونکو اړتیاوو لپاره جوړ شوي دي.',
  },
  {
    icon: <Wallet />,
    title: 'څو ارزي بیلانسونه',
    desc: 'یورو، ډالر، پونډ، زلوټي، سویډني کرونا، ناروېژي کرونا، رومانیايي لیو، هنګري فورینټ، چکي کرونا او ډنمارکي کرونا په یوه یوځای تجربه کې وساتئ.',
  },
  {
    icon: <CreditCard />,
    title: 'فوري مجازي کارتونه',
    desc: 'د اشتراکونو، انلاين پېرود، د خدمتونو تادیاتو او ډیجیټلي سوداګرۍ لپاره ډېر ژر خوندي مجازي کارتونه ترلاسه کړئ.',
  },
  {
    icon: <Banknote />,
    title: 'فزیکي کارتونه',
    desc: 'فزیکي کارتونه د تادیاتو لپاره د لا زیات انعطاف لپاره وکاروئ، هلته چې د کارت منل یوازې تر ډیجیټلي کارونې نه محدود وي.',
  },
  {
    icon: <Globe />,
    title: 'محلي بانکي معلومات',
    desc: 'د لا روانو لېږدونو، د تادیاتو ترلاسه کولو او نړیوالو مالي عملیاتو لپاره محلي بانکي معلومات ترلاسه کړئ.',
  },
  {
    icon: <RefreshCcw />,
    title: 'د اسعارو انعطاف',
    desc: 'قوي اسعار د لا زیاتې اسانتیا، ساتنې او روښانتیا سره مدیریت او وکاروئ.',
  },
  {
    icon: <Smartphone />,
    title: 'ډیجیټلي آن‌بورډینګ',
    desc: 'د دودیزو ورو کاغذي چارو پر ځای، د یوې پاکې ډیجیټلي تجربې له لارې خپل حساب وغواړئ او مدیریت یې کړئ.',
  },
  {
    icon: <LockKeyhole />,
    title: 'د اروپا په کچه امنیت',
    desc: 'قوي امنیتي معیارونه او کنټرول شوې ډیجیټلي زېربنا د کاروونکو، بیلانسونو او راکړو ورکړو په ساتنه کې مرسته کوي.',
  },
  {
    icon: <Shield />,
    title: 'پر مطابقت او همغږۍ تمرکز',
    desc: 'دا پلاتفورم د خوندي عملیاتو، حقوقي جوړښت، د کاروونکي ساتنې او مسؤلانه ودې لپاره له جدي تګلارې سره جوړ شوی دی.',
  },
];

const serviceBlocks = [
  {
    icon: <CircleDollarSign />,
    title: 'نړيوالې تادیې ترلاسه کول',
    desc: 'د فریلنسرانو، اژانسونو، لیرې کارکوونکو او خدمت‌ورکوونکو لپاره مناسب دی چې د پیسو ترلاسه کولو لپاره نړيوال چینل ته اړتیا لري.',
  },
  {
    icon: <Briefcase />,
    title: 'سوداګریزې تادیاتي چارې',
    desc: 'د اشتراکونو، د سافټویر لګښتونو، د ټیم وسایلو، د بازارموندنې تادیاتو او د ډیجیټلي زېربنا لګښتونو ملاتړ کوي.',
  },
  {
    icon: <BarChart3 />,
    title: 'مالي کنټرول',
    desc: 'بیلانسونه په روښانه ډول وګورئ، اسعار جلا وساتئ او خپلې پیسې د لا زیات جوړښت او کمې ګډوډۍ سره مدیریت کړئ.',
  },
  {
    icon: <Sparkles />,
    title: 'عصري کارن تجربه',
    desc: 'دا داسې طرحه شوی چې له آن‌بورډینګ څخه تر ورځني استعمال پورې د پریمیم احساس، چټکتیا، سادګي او باور وړاندې کړي.',
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
  const currentLang = pathname?.split('/')[1] || 'ps';

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
          د ټولو افغانانو لپاره د مالي پولو ماتول
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
            د افغانانو لپاره ډیجیټلي بانکداري
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.14 }}
          className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-7 leading-relaxed font-light"
        >
          SafiPay د افغانانو لپاره یو عصري او نړيوال مالي پلاتفورم جوړوي چې څو ارزي حسابونه، محلي بانکي معلومات، خوندي ډیجیټلي آن‌بورډینګ، او د نړیوالو تادیاتو لپاره فوري مجازي او فزیکي کارتونه پکې شامل دي.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.24 }}
          className="text-base md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
        >
          موخه ساده خو پیاوړې ده: له افرادو، فریلنسرانو، کورنیو او سوداګریو سره مرسته کول څو په لا ډېر امنیت نړيوالو مالي وسایلو ته لاسرسی ومومي، د خپلو شتمنیو ارزښت په قوي اسعارو کې وساتي، او په نړیوال ډیجیټلي اقتصاد کې په لا ډېر باور ګډون وکړي.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.34 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-14 pointer-events-auto"
        >
          {['څو ارزي حسابونه', 'محلي بانکي معلومات', 'فوري ویزا کارتونه', 'نړيوالې تادیې', 'ډیجیټلي KYC', 'د اروپا په کچه امنیت'].map((item, i) => (
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
            SafiPay وپلټئ <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${currentLang}/partners`}
            className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
          >
            <Handshake size={24} /> شراکت ته یوځای کېدل
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic">SafiPay څه شی دی</h2>
            <p className="text-gray-300 text-lg leading-8 mb-6">
              SafiPay یو مسلکي او ډیجیټلي مالي حل دی چې تمرکز یې پر دې دی چې افغانانو ته د نړيوالو بانکي وسایلو لاسرسی برابر کړي – هغه وسایل چې عموماً د دودیزو محلي سیستمونو له لارې ترلاسه کول سخت یا ناشوني وي.
            </p>
            <p className="text-gray-400 leading-8 text-lg">
              دا پلاتفورم داسې طرحه شوی چې نړيواله کارېدنه، ډیجیټلي اسانتیا، قوي اسعارو ته لاسرسی او خوندي تادیات په یوه پریمیم مالي تجربه کې سره یوځای کړي.
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic">د چا لپاره دی</h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>• د افغانو افرادو لپاره چې نړيوال حساب ته اړتیا لري</p>
              <p>• د هغو فریلنسرانو لپاره چې له نړیوالو پیرودونکو پیسې ترلاسه کوي</p>
              <p>• د هغو کورنیو لپاره چې غواړي خپلې سپماوې په قوي اسعارو کې وساتي</p>
              <p>• د هغو سوداګریو لپاره چې نړیوال تادیاتي وړتیا ته اړتیا لري</p>
              <p>• د هغو ټیمونو لپاره چې د اشتراکونو، سافټویر او انلاين وسایلو لپاره پیسې ورکوي</p>
              <p>• د هغو محصلینو او مسلکي کسانو لپاره چې نړيوال ډیجیټلي خدمتونه کاروي</p>
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
          badge="اصلي ننګونه"
          title="بانکي"
          highlight="بحران"
          description="دا برخه د پاک او ریسپانسیف کوډ سره له سره جوړه شوې ده. د یو ناپایدار افقي لې‌اوت پر ځای، کارتونه اوس په یو پیاوړي پریمیم ګرېډ کې پورته انیمېټ کېږي چې ښه لوستلو او په موبایل کې غوره چلند لري."
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
                  <span className="text-red-400/70 text-xs tracking-[0.25em] uppercase">قضیه {String(i + 1).padStart(2, '0')}</span>
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
          badge="د SafiPay حل"
          title="عصري وسایل د"
          highlight="نړيوال لاسرسي لپاره"
          description="SafiPay د نړيوالو حسابونو، قوي اسعارو، ډیجیټلي آن‌بورډینګ او خوندي تادیاتي زېربنا له لارې هغه واقعي مالي ستونزې حل کوي چې د واقعي ورځني استعمال لپاره جوړې شوې دي."
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
          badge="پراخ معلومات"
          title="له یوې ساده"
          highlight="کارتي پلاتفورم څخه ډېر"
          description="دا برخه د دې په اړه لا ډېر وضاحت زیاتوي چې SafiPay واقعاً څه کوي، څو د کورپاڼې محتوا په خپله بشپړه وي او له لومړي لیدنې څخه لیدونکو ته ژور درک ورکړي."
        />

        <motion.div style={{ y: smoothY }} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-[2.5rem] border border-amber-500/10 bg-black/55 backdrop-blur-2xl p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="inline-flex p-4 bg-amber-500/10 rounded-3xl mb-6">
              <Layers3 size={34} className="text-amber-500" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase italic">ولې SafiPay مهم دی</h3>
            <div className="space-y-5 text-gray-300 text-lg leading-8">
              <p>SafiPay یوازې د پیسو د لېږلو لپاره نه دی. دا پلاتفورم د یوې بشپړې ډیجیټلي مالي دروازې په توګه طرحه شوی چې له افغان کاروونکو سره مرسته کوي څو په لا مسلکي ډول عصري نړيوال اقتصاد ته داخل شي.</p>
              <p>دا د دې معنا لري چې قوي اسعارو ته اسانه لاسرسی، غوره تادیاتي وسایل، د انلاين سوداګرۍ لپاره ډېر انعطاف، او د هغو کسانو لپاره لا زیات باور چې د محلي محدودیتونو هاخوا عملي مالي دندو ته اړتیا لري.</p>
              <p>همداراز دا برانډ ته لا قوي ارزښت ورکوي، ځکه لیدونکي سمدلاسه درک کوي چې دا پلاتفورم یو جدي زېربنايي پروژه ده، نه یوازې یوه ساده د اپلکېشن صفحه.</p>
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
          badge="د کارونې موارد"
          title="د حقیقي"
          highlight="کاروونکو لپاره جوړ شوی"
          description="کورپاڼه اوس په روښانه ډول بیانوي چې دا محصول د افرادو، فریلنسرانو او سوداګریو په ورځني ژوند کې په کوم ځای کې کارېدلی شي."
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'د افرادو لپاره',
              text: 'یو نړيوال حساب پرانیزئ، قوي اسعار وساتئ، پیسې ترلاسه کړئ او د لا ډېر باور او اسانتیا سره انلاين تادیات وکړئ.',
            },
            {
              title: 'د فریلنسرانو لپاره',
              text: 'له نړیوالو پیرودونکو پیسې ترلاسه کړئ، د وسایلو او پلاتفورمونو لپاره تادیات وکړئ او خپل کاري عاید په لا مسلکي ډول مدیریت کړئ.',
            },
            {
              title: 'د سوداګریو لپاره',
              text: 'د اشتراکونو، ډیجیټلي عملیاتو، انلاين خدمتونو، نړیوالو پېرودونو او په عصري سوداګرۍ کې د پراخ ګډون ملاتړ وکړئ.',
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
  const currentLang = pathname?.split('/')[1] || 'ps';

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
            د افغانانو لپاره د <br /> نړيوال مالي سیستم بشپړه دروازه
          </h2>
          <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
            SafiPay له کاروونکو سره مرسته کوي چې له لومړۍ لیدنې څخه په دقیقه توګه پوه شي چې دا پلاتفورم څه وړاندې کوي: نړيوال لاسرسی، قوي اسعار، چټک آن‌بورډینګ، خوندي تادیاتي وسایل، او د نړيوال ډیجیټلي اقتصاد پر لور یوه رښتینې لاره.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-amber-500 hover:text-white transition-all"
            >
              د شراکت غوښتنه <Handshake size={28} />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-4 px-12 py-6 border-2 border-white/40 text-white text-2xl font-black rounded-2xl hover:bg-white/10 transition-all"
            >
              نور معلومات <ArrowRight size={26} />
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
    <div className="bg-black text-white overflow-x-hidden selection:bg-amber-500/30 relative" dir="rtl">
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