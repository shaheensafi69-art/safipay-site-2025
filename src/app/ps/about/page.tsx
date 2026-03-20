'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Globe,
  Zap,
  ArrowRight,
  Cpu,
  Rocket,
  Target,
  Banknote,
  Landmark,
  ShieldCheck,
  Wallet,
  Network,
  ArrowUpRight,
  Users,
  Briefcase,
  BadgeCheck,
  Layers3,
  Building2,
  CreditCard,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const BRAND_GOLD = '#f59e0b';
const BRAND_GOLD_SOFT = '#ffd27a';

function AboutOrb() {
  const orbRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 1800;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 2.2 + Math.random() * 0.18;
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
      orbRef.current.rotation.y += 0.0028;
      orbRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.35) * 0.06;
      orbRef.current.rotation.z = Math.cos(clock.elapsedTime * 0.2) * 0.03;
    }

    if (ringRef.current) {
      ringRef.current.rotation.y = clock.elapsedTime * 0.18;
      ringRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.12;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.0014;
      particlesRef.current.rotation.x += 0.0007;
    }
  });

  return (
    <group>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={BRAND_GOLD} size={0.02} transparent opacity={0.95} sizeAttenuation />
      </points>

      <mesh ref={orbRef}>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshPhysicalMaterial
          color="#050505"
          emissive={BRAND_GOLD}
          emissiveIntensity={0.12}
          metalness={1}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.12}
          transparent
          opacity={0.98}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.14, 48, 48]} />
        <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>

      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.7, 0.03, 16, 220]} />
          <meshStandardMaterial color={BRAND_GOLD} emissive={BRAND_GOLD} emissiveIntensity={0.22} metalness={1} roughness={0.2} />
        </mesh>

        <mesh rotation={[Math.PI / 2.4, 0.45, 0.2]}>
          <torusGeometry args={[3.25, 0.018, 16, 220]} />
          <meshStandardMaterial color={BRAND_GOLD_SOFT} emissive={BRAND_GOLD} emissiveIntensity={0.14} metalness={1} roughness={0.18} transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingMiniShapes() {
  return (
    <>
      <Float speed={1.2} floatIntensity={0.55} rotationIntensity={0.18}>
        <mesh position={[-5.3, 2.3, -1.8]} rotation={[0.5, 0.4, 0.2]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#1a1a1a" emissive={BRAND_GOLD} emissiveIntensity={0.15} metalness={1} roughness={0.18} />
        </mesh>
      </Float>

      <Float speed={1.7} floatIntensity={0.8} rotationIntensity={0.22}>
        <mesh position={[5.1, -1.7, -1.5]}>
          <icosahedronGeometry args={[0.31, 0]} />
          <meshStandardMaterial color={BRAND_GOLD_SOFT} emissive={BRAND_GOLD} emissiveIntensity={0.18} metalness={1} roughness={0.12} />
        </mesh>
      </Float>

      <Float speed={1.35} floatIntensity={0.6} rotationIntensity={0.16}>
        <mesh position={[5.6, 2.1, -2.3]} rotation={[0.8, 0.3, 0.5]}>
          <boxGeometry args={[0.62, 0.38, 0.06]} />
          <meshStandardMaterial color="#171717" emissive={BRAND_GOLD} emissiveIntensity={0.13} metalness={0.9} roughness={0.22} />
        </mesh>
      </Float>
    </>
  );
}

function AboutScene() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <PerspectiveCamera makeDefault position={[0, 0, 8.5]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[7, 6, 5]} intensity={1.7} color={BRAND_GOLD} />
      <pointLight position={[-6, -4, -6]} intensity={0.9} color="#fff2d4" />
      <pointLight position={[0, 5, -4]} intensity={0.7} color="#ffcf70" />
      <Stars radius={130} depth={80} count={4200} factor={3} saturation={0} fade speed={0.7} />

      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.22}>
          <AboutOrb />
        </Float>
        <FloatingMiniShapes />
      </Suspense>
    </>
  );
}

export default function AboutUsPageEnglish() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ps';

  const coreValues = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'امنیت لومړی',
      desc: 'د SafiPay د ایکوسیستم هره طبقه د باور، ساتنې، کوډشوي لاسرسي او د پلاتفورم د اوږدمهال ثبات پر بنسټ طرحه شوې ده.',
    },
    {
      icon: <Globe size={22} />,
      title: 'نړیوال لاسرسی',
      desc: 'موږ داسې لارې جوړوو چې افغانان له نړیوالو مالي وسایلو، عصري ډیجیټل تادیاتو او بې سرحده فرصتونو سره ونښلوي.',
    },
    {
      icon: <Zap size={22} />,
      title: 'چټکتیا او ساده‌والی',
      desc: 'مالي لاسرسی باید ورو، ګډوډ یا په زړو سیستمونو پورې تړلی نه وي. SafiPay داسې طرحه شوی چې چټک، پاک او عصري احساس ورکړي.',
    },
    {
      icon: <Target size={22} />,
      title: 'ریښتینی کارېدنه',
      desc: 'زموږ ماموریت یوازې ظاهري نوښت نه دی. زموږ هدف دا دی چې د فریلنسرانو، سوداګریو، کورنیو او ډیجیټلي مسلکي کسانو لپاره عملي اغېز رامنځته کړو.',
    },
  ];

  const ecosystemBlocks = [
    {
      icon: <Landmark size={22} />,
      title: 'نړیوال مالي لاسرسی',
      desc: 'SafiPay هڅه کوي افغان کاروونکو ته داسې پیاوړي او عملي مالي وسایل برابر کړي چې هغوی له پراخې ډیجیټل اقتصاد سره ونښلوي.',
    },
    {
      icon: <Wallet size={22} />,
      title: 'د څو اسعارو وړتیا',
      desc: 'په لویو اسعارو کې د ارزښت ساتل او اداره کول لا ډېره ساتنه، لوړه انعطاف‌پذیري او قوي مالي باور برابروي.',
    },
    {
      icon: <CreditCard size={22} />,
      title: 'د ډیجیټل کارتونو زېربنا',
      desc: 'مجازي او فزیکي کارت‌حللارې د یوې پراخې لیدلوري برخه ده چې پېرودنې، اشتراکونه، نړیوال خدمات او آنلاین سوداګري فعاله کړي.',
    },
    {
      icon: <Banknote size={22} />,
      title: 'هوښیار د پیسو لېږد',
      desc: 'موږ د خنډونو په کمولو، له ناکارو سیستمونو د تړاو په راټیټولو او د سرحدونو هاخوا د ارزښت د لېږد په ښه کولو تمرکز لرو.',
    },
    {
      icon: <Network size={22} />,
      title: 'یو له بل سره تړلی مالي ایکوسیستم',
      desc: 'SafiPay د یوه واحد فیچر لرونکي محصول په توګه نه دی طرحه شوی. دا د داسې ایکوسیستم په توګه وده کوي چې پکې تادیات، لاسرسی، امنیت او کارېدنه یوځای کار کوي.',
    },
    {
      icon: <BadgeCheck size={22} />,
      title: 'د انطباق جدي تګلاره',
      desc: 'اوږدمهاله وده په منظم عملیاتو، حساب‌ورکولو، کنټرول شوي آن‌بورډینګ او مسؤل مالي جوړښت پورې تړلې ده.',
    },
  ];

  const useCases = [
    {
      icon: <Users size={22} />,
      title: 'د افرادو لپاره',
      desc: 'هغه کسان چې مالي خدماتو ته د لاسرسي، د ارزښت په خوندي ډول د ساتلو او په آنلاین تادیاتو کې د ګډون لپاره یوې عصري لارې ته اړتیا لري.',
    },
    {
      icon: <Briefcase size={22} />,
      title: 'د فریلنسرانو لپاره',
      desc: 'هغه مسلکي کسان چې غواړي د پیسو د ترلاسه کولو، د وسایلو د لګښت ورکولو او له نړیوالو مشتریانو سره د کار کولو لپاره غوره سیستم ولري.',
    },
    {
      icon: <Building2 size={22} />,
      title: 'د شرکتونو لپاره',
      desc: 'هغه شرکتونه او ډیجیټلي ټیمونه چې اشتراکونو، نړیوالو تادیاتو، عملیاتي انعطاف او پیاوړي مالي لید ته اړتیا لري.',
    },
  ];

  const technologyLayers = [
    {
      icon: <Cpu size={24} />,
      title: 'د مصنوعي ځیرکتیا پر بنسټ د خطر منطق',
      desc: 'پرمختللې څارنه او هوښیار سیستمونه کولی شي د خطر پوهاوي، د درغلۍ کمولو او د پرېکړې د غوره طبقو ملاتړ وکړي.',
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      icon: <Network size={24} />,
      title: 'شفافه زېربنا',
      desc: 'عصري، وېشل شوې او ډیجیټل‌محوره زېربنا د ښه لید، قوي کنټرول او د پراخېدو وړ مالي منطق په جوړولو کې مرسته کوي.',
      color: 'text-blue-500 bg-blue-500/10',
    },
    {
      icon: <Wallet size={24} />,
      title: 'د هوښیار والټ معمارۍ',
      desc: 'یوه پریمیم والټ تجربه باید اسانتیا، د اسعارو جلاوالی، د حساب روڼتیا او د کاروونکي نرم کنټرول ملاتړ کړي.',
      color: 'text-green-500 bg-green-500/10',
    },
    {
      icon: <Layers3 size={24} />,
      title: 'د پراخېدونکي ایکوسیستم ډیزاین',
      desc: 'SafiPay د څو طبقو فین‌ټېک جوړښت په توګه تصور شوی چې کولی شي لا پراخو محصولاتو، یوځای‌کېدنو او لوړ ارزښت لرونکو مالي خدماتو ته وده وکړي.',
      color: 'text-purple-400 bg-purple-500/10',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative" dir="ltr">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
          <AboutScene />
        </Canvas>
      </div>

      <section className="relative z-10 pt-40 pb-28 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-[11px] font-black tracking-[0.28em] uppercase"
          >
            <Sparkles size={14} />
            د افغانستان د مالي راتلونکې بیا لیکنه
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mt-8 mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter leading-[0.95]"
          >
            د SAFIPAY <br /> ایکوسیستم
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-4xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed font-light"
          >
            SafiPay د پولې هاخوا فین‌ټېک یوه عصري لیدلوري ده چې د مالي انزوا د کمولو، نړیوال لاسرسي د پرانیستلو او د افغانستان او نړیوال ډیجیټل اقتصاد ترمنځ د لا قوي پله د جوړولو لپاره رامنځته شوې ده.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="max-w-4xl mx-auto mt-6 text-base md:text-xl text-gray-500 leading-relaxed font-light"
          >
            دا سیستم یوازې د تادیې وسیله نه ده، بلکې د ایکوسیستم یو مفهوم دی چې د کارونې اسانتیا، مالي شمولیت، ډیجیټلي زېربنا، امنیت او د افغان افرادو او شرکتونو لپاره پر اوږدمهال ستراتیژیک ارزښت تمرکز کوي.
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/8 bg-white/[0.03] p-8 md:p-10 backdrop-blur-2xl"
          >
            <div className="inline-flex p-4 rounded-3xl bg-amber-500/10 text-amber-500 mb-6">
              <Rocket size={30} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-6">
              SafiPay ولې رامنځته شو
            </h2>
            <div className="space-y-5 text-gray-300 text-lg leading-8 font-light">
              <p>
                افغانستان له سخت مالي ټوټې‌ټوټې کېدو سره مخ و. دودیز بانکي لاسرسی لا هم محدود دی، نړیواله نښلونکې کمزورې ده او ډېر خلک لا هم له عصري مالي سیستمونو بې برخې دي.
              </p>
              <p>
                فریلنسران د پیسو په ترلاسه کولو کې ستونزه لري. شرکتونه د نړیوالو وسایلو د لګښت ورکولو کې له ستونزو سره مخ دي. کورنۍ د خپلو شتمنیو د ارزښت د ساتلو لپاره په پیاوړو اسعارو کې ساده لاره نه لري. مسلکي کسان هم له هغو فرصتونو لرې پاتې دي چې باید لا دمخه ورته لاسرسی ولري.
              </p>
              <p>
                SafiPay د همدې واقعیت د بدلولو له اړتیا څخه پیدا شو. موخه دا ده چې یوه لا عملي، خوندي او نړیواله مالي تجربه جوړه شي چې د افغانانو د ریښتینو اړتیاوو پر بنسټ سمه برابره شوې وي.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2.5rem] border border-amber-500/15 bg-gradient-to-br from-amber-500/10 to-transparent p-8 md:p-10"
          >
            <div className="inline-flex p-4 rounded-3xl bg-white/5 text-amber-400 mb-6">
              <Target size={30} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-6">
              اساسي ماموریت
            </h2>
            <div className="space-y-4">
              {[
                'د افغان کاروونکو لپاره د مالي انزوا ماتول',
                'نړیوالې ډیجیټلي مالي سرچینو ته لاسرسی جوړول',
                'په زړو سیستمونو د تړاو کمول',
                'د فریلنسرانو، کورنیو او شرکتونو ملاتړ',
                'یوه جدي، خوندي او د پراخېدو وړ فین‌ټېک نښه جوړول',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                  <p className="text-lg leading-7">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-28 bg-[#080808]/80 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
              هغه بحران چې <span className="text-amber-500">موږ یې حل کوو</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              SafiPay د واقعي جوړښتي ستونزو پر بنسټ رامنځته کېږي، نه خیالي مسایلو. دا د هغو ریښتینو مالي دردونو ځواب دی چې میلیونونه خلک ورسره مخ دي.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe size={22} />,
                title: 'نړیواله انزوا',
                desc: 'له نړیوالو بانکي سیستمونو سره کمزوری ادغام ډیجیټلي ګډون تر هغه ډېر سخت کوي چې باید وای.',
              },
              {
                icon: <Banknote size={22} />,
                title: 'ګران لېږدونه',
                desc: 'غیررسمي او ناکاره لارې ډېر وخت لوړې بیې، کمه روڼتیا او کمزوری مالي باور رامنځته کوي.',
              },
              {
                icon: <CreditCard size={22} />,
                title: 'د تادیې خنډونه',
                desc: 'ډېر کاروونکي لا هم د پلاتفورمونو، اشتراکونو، خدماتو، هاستینګ، وسایلو او آنلاین سوداګرۍ د تادیې پر مهال له ستونزو سره مخ دي.',
              },
              {
                icon: <Landmark size={22} />,
                title: 'محدود عصري لاسرسی',
                desc: 'هغه مسلکي مالي وسایل چې په نورو ځایونو کې عادي دي، لا هم د ډېرو افغانانو لپاره نه‌لاسرسی یا ټوټه‌ټوټه پاتې دي.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-7 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 italic">{item.title}</h3>
                <p className="text-gray-500 leading-7 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
            څه شی <span className="text-amber-500">SafiPay بېلوي</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            SafiPay د لوړ ارزښت لرونکي مالي ایکوسیستم په توګه تصور شوی، نه د یوه محدود واحد فیچر لرونکي انٹرفیس په توګه.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ecosystemBlocks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-amber-500/10 bg-white/[0.02] p-8 hover:border-amber-500/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 italic">{item.title}</h3>
              <p className="text-gray-500 leading-7 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-28 bg-[#080808]/80 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-8">
                اساسي ارزښتونه او ستراتیژیک اصول
              </h2>
              <div className="grid gap-5">
                {coreValues.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 rounded-[1.8rem] border border-white/6 bg-white/[0.03] p-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-white text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-500 leading-7 font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
              <div className="relative rounded-[2.7rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8 md:p-10">
                <div className="inline-flex p-4 rounded-3xl bg-amber-500/10 text-amber-500 mb-6">
                  <Layers3 size={30} />
                </div>
                <h3 className="text-3xl font-black text-white mb-8 italic uppercase">
                  د ایکوسیستم ټکنالوژي
                </h3>
                <div className="space-y-6">
                  {technologyLayers.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-black mb-2">{item.title}</h4>
                        <p className="text-gray-500 leading-7 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
            SafiPay <span className="text-amber-500">د چا لپاره جوړ شوی</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            دا پلاتفورم د واقعي اقتصادي کارونې لپاره طرحه شوی، نه د مجرد برانډ ژبې لپاره.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 italic">{item.title}</h3>
              <p className="text-gray-500 leading-7 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-32 bg-[#080808]/80 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-4">
              د رهبرۍ ټیم
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              هغه ستراتیژیک ذهنونه چې د SafiPay لید پر مخ وړي، د باور وړ، راتلونکې‌محور او د سیمې لپاره له ریښتینې ارزښت لرونکي مالي ایکوسیستم پر جوړولو تمرکز کوي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Shaheen Safi',
                role: 'بنسټ‌ايښودونکی او اجرائیه رئیس',
                img: '/shaheen.jpeg',
                href: `/${currentLang}/founder/shaheen-safi`,
                color: 'border-amber-500/30',
              },
              {
                name: 'Mujtaba Rahmani',
                role: 'شریک بنسټ‌ايښودونکی او تخنیکي رئیس',
                img: '/mujtaba.jpeg',
                href: `/${currentLang}/founder/mujtaba-rahmani`,
                color: 'border-blue-500/30',
              },
              {
                name: 'Sahel Salem',
                role: 'د ایکوسیستم مسؤل',
                img: '/sahel.jpeg',
                href: `/${currentLang}/founder/sahel-salem`,
                color: 'border-green-500/30',
              },
            ].map((member, i) => (
              <Link key={i} href={member.href} className="block group">
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`p-4 rounded-[2.5rem] bg-white/[0.02] border ${member.color} hover:bg-white/[0.05] transition-all overflow-hidden`}
                >
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-end px-2 pb-2">
                    <div>
                      <h4 className="text-xl font-black text-white italic">{member.name}</h4>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">{member.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 container mx-auto px-6">
        <div className="relative p-12 md:p-16 rounded-[3rem] overflow-hidden text-center border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase leading-tight">
              ایا تاسو چمتو یاست چې <br /> نړیوال اقتصاد سره یوځای شئ
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10">
              SafiPay د افغان کاروونکو د راتلونکې نسل لپاره د یوه جدي مالي پله په توګه جوړېږي. که تاسو غواړئ د دې ماموریت برخه شئ، د شراکت فرصتونه وڅېړئ او د راتلونکې په جوړولو کې مرسته وکړئ.
            </p>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-5 bg-amber-500 text-black font-black text-lg rounded-2xl hover:bg-white transition-all group"
            >
              له موږ سره شریک شئ
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
