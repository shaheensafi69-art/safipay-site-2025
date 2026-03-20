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
    'Afganistan odaklı kullanıcılar ve küresel hizmet sağlayıcılar için profesyonel uluslararası hesap açılışı',
    'EUR, USD, GBP, PLN, SEK, NOK, RON, HUF, CZK ve DKK dahil çoklu para birimi bakiyeleri',
    'Ödemelerin, operasyonel transferlerin ve uluslararası mutabakatların daha sorunsuz alınması için yerel banka bilgileri',
    'Premium kullanıcı deneyimi ve hızlı erişim için tasarlanmış anında sanal ve fiziksel kart ihracı',
    'Modern finansal operasyonlar için güçlü dijital onboarding ve Avrupa seviyesinde güvenlik mantığı',
    'Freelancerlar, kurucular, işletmeler, uzaktan çalışan ekipler ve uluslararası gelir sahipleri için ciddi bir platform',
  ];

  const topupFeatures = [
    '150’den fazla ülkede mobil yükleme ve mobil kredi teslimatı',
    '700’den fazla uluslararası operatör kapsaması',
    'Küresel veri paketleri ve dijital bağlantı hizmetleri',
    'Sınır ötesi kullanım için dijital hediye kartı ve oyun kartı dağıtımı',
    'Uluslararası ön ödemeli fatura ödemeleri ve dijital hizmetlere daha geniş erişim',
    'Hacim bazlı ortaklık modelleri için ideal, hızlı ve dinamik bir dijital ticaret katmanı',
  ];

  const partnershipTracks = [
    {
      icon: <Landmark size={24} />,
      title: 'Bankacılık ve fintech ortakları',
      desc: 'Çok para birimli ve kart tabanlı büyüme fırsatları arayan kurumlar, fintech operatörleri, ödeme altyapısı sağlayıcıları ve markalar için idealdir.',
    },
    {
      icon: <Wifi size={24} />,
      title: 'Dijital dağıtım ve telekomünikasyon',
      desc: 'Yükleme agregatörleri, operatör ağları, eSIM sağlayıcıları, dijital ürün distribütörleri ve top-up satıcıları için uygundur.',
    },
    {
      icon: <Building2 size={24} />,
      title: 'Stratejik bölgesel genişleme',
      desc: 'Pazara giriş ortakları, yerel ticari ortaklar ve her iki uygulamayı yeni pazarlarda ölçeklendirmek isteyen kuruluşlar için tasarlanmıştır.',
    },
  ];

  const metrics = [
    { label: 'Ülke kapsaması', val: '150+', icon: Globe },
    { label: 'Operatör erişimi', val: '700+', icon: Server },
    { label: 'Ana platformlar', val: '2 Apps', icon: Layers },
    { label: 'Ortaklık kapasitesi', val: 'Multi-Sector', icon: Briefcase },
  ];

  const infrastructure = [
    { icon: Database, title: 'Finans çekirdeği', desc: 'SafiPay katmanını güçlendiren hesap, kart, para birimi ve yerel bankacılık mantığı.' },
    { icon: Smartphone, title: 'Premium kullanıcı deneyimi', desc: 'Güven, dönüşüm ve ciddi günlük kullanım için oluşturulmuş hızlı, temiz ve modern bir arayüz katmanı.' },
    { icon: Layers, title: 'Dağıtım motoru', desc: 'Yüklemeler, paketler, oyun kartları ve ön ödemeli hizmetlerin arkasındaki dijital teslimat mimarisi.' },
    { icon: Lock, title: 'Güvenlik ve kontrol', desc: 'Güven, uyumluluk yönelimi, operasyonel dayanıklılık ve daha güvenli uzun vadeli ölçeklenebilirlik üzerine güçlü odak.' },
  ];

  const timeline = [
    {
      phase: '01',
      title: 'Erişim katmanı',
      desc: 'Bağlı bir ekosistem olarak SafiPay ve Safi TopUp etrafında farkındalık, kurumsal güven ve daha güçlü bir ortak hikâyesi oluşturmak.',
      icon: <Rocket size={24} />,
    },
    {
      phase: '02',
      title: 'Dağıtım büyümesi',
      desc: 'Operatör erişimini, dijital ürün derinliğini, ülke kapsamasını ve ortaklığa dayalı ticari dağıtım kanallarını genişletmek.',
      icon: <Network size={24} />,
    },
    {
      phase: '03',
      title: 'Finansal genişleme',
      desc: 'Hesaplar, yerel banka bilgileri, çoklu para birimi bakiyeleri ve kart tabanlı deneyimler etrafında finansal kullanıcı katmanını derinleştirmek.',
      icon: <Wallet size={24} />,
    },
    {
      phase: '04',
      title: 'Ekosistem ölçeklendirmesi',
      desc: 'Safi markasını daha güçlü sınır ötesi öneme ve daha derin ticari ortaklıklara sahip daha geniş bir stratejik ağa dönüştürmek.',
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
                  Safi ortaklık dünyası
                </span>
              </MagneticElement>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-[7.5rem] font-black italic tracking-tighter leading-[0.92] uppercase mb-6 sm:mb-8">
                Birlikte inşa edin
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-blue-500 bg-clip-text text-transparent">
                  bir sonraki çift ağı
                </span>
              </h1>

              <p className="max-w-3xl mx-auto lg:ml-0 lg:mr-auto text-gray-300 text-base sm:text-lg md:text-xl xl:text-2xl font-light italic leading-relaxed text-left">
                SafiPay ve Safi TopUp, daha büyük bir ticari ekosistem içindeki iki bağlantılı motordur. Biri uluslararası finansal erişime, çoklu para birimi altyapısına ve modern kart tabanlı bankacılık deneyimlerine odaklanır.
                Diğeri ise küresel dijital dağıtıma, yüklemeye, veriye, hediye kartlarına, oyun ürünlerine ve dijital hizmetlerin büyük ölçekte günlük kullanımına odaklanır.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/fa/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 bg-amber-500 text-black font-black rounded-2xl hover:bg-white transition-all"
                >
                  Ortaklığı başlat
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#ecosystem"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-black rounded-2xl hover:border-amber-500/40 transition-all"
                >
                  Ekosistemi keşfet
                  <ChevronDown size={18} />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Finans', icon: Landmark },
                  { label: 'Top-up', icon: Wifi },
                  { label: 'Kartlar', icon: CreditCard },
                  { label: 'Büyüme', icon: BarChart3 },
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
                    { icon: Globe, title: 'Küresel erişim', text: 'Finansal ve dijital hizmetleri genişletme mantığıyla sınır ötesi hazırlık.' },
                    { icon: ShieldCheck, title: 'Güvenilir yapı', text: 'Verimlilik, ölçek ve uzun vadeli değer üzerine kurulu daha güçlü bir ortaklık anlatısı.' },
                    { icon: Cpu, title: 'Modern altyapı', text: 'Daha derin entegrasyonlar ve gelecekteki büyüme kapasitesine sahip iki bağlantılı hizmet katmanı.' },
                    { icon: TimerReset, title: 'Hızlı aktivasyon', text: 'Daha hızlı yayılım ve daha geniş erişim isteyen ortaklar için dijital öncelikli konumlandırma.' },
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
              Safi ekosistemini keşfedin
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
            İki uygulama <span className="text-amber-500">tek stratejik vizyon</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed italic">
            Bu tek amaçlı bir ürün hikâyesi değildir. Bu, entegre bir ekosistemin ciddi bir teklifidir. SafiPay finans katmanını sağlar. Safi TopUp dijital dağıtım katmanını inşa eder.
            Birlikte büyüme, ortaklıklar ve pazar önemi için daha fazla alan oluştururlar.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 items-stretch">
          <BentoCard className="group border-amber-500/20 hover:border-amber-500/40 text-left">
            <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-amber-500 font-black text-[10px] sm:text-xs tracking-[0.25em] uppercase">SafiPay</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mt-3 tracking-tighter">
                  Küresel bankacılık katmanı
                </h3>
              </div>
              <Landmark className="text-amber-500 shrink-0 group-hover:scale-110 transition-transform" size={46} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 font-light mb-8 sm:mb-10 italic text-left">
              SafiPay, uluslararası hesap altyapısına, premium çoklu para birimi verimliliğine, yerel banka bilgilerine ve anında kart ihracına ciddi şekilde ihtiyaç duyan kullanıcılar ve ortaklar için tasarlanmıştır.
              Platform, Afganlar ve bu pazara daha güçlü araçlarla hizmet vermek isteyen kuruluşlar için küresel finansa açılan modern bir kapı olarak konumlandırılmıştır.
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
                  <div className="text-[8px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-1">Destekleniyor</div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="group border-blue-500/20 hover:border-blue-500/40 text-left">
            <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-blue-400 font-black text-[10px] sm:text-xs tracking-[0.25em] uppercase">Safi TopUp</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mt-3 tracking-tighter">
                  Küresel dijital dağıtım
                </h3>
              </div>
              <Wifi className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" size={46} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 font-light mb-8 sm:mb-10 italic text-left">
              Safi TopUp ölçek için tasarlanmıştır. Bu uygulama, geniş bir uluslararası kapsamda yüklemeleri, mobil kredileri, veri paketlerini, dijital hediye kartlarını, oyun ürünlerini ve ön ödemeli hizmet ihtiyaçlarını kapsar.
              Ortaklara, hızlı, pratik ve küresel ölçekte ölçeklenebilir yüksek frekanslı bir dijital hizmet modeline erişim sağlar.
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
                { label: 'Yükleme', icon: Smartphone },
                { label: 'Veri', icon: Radio },
                { label: 'Hediye kartı', icon: Gift },
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
                <span className="text-amber-500 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase">Ortaklık değeri</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mt-3 tracking-tighter">
                  Bu ekosistem neden kaldıraç etkisi yaratıyor
                </h3>
              </div>
              <Briefcase className="text-amber-500 shrink-0" size={46} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Marka güvenilirliği',
                  desc: 'İki uygulamadan oluşan bir ekosistem, ortaklara sınırlı tek amaçlı bir üründen daha güçlü bir hikâye sunar. Bu yapı ciddiyet, kapsam ve genişleme mantığı taşır.',
                },
                {
                  icon: Globe,
                  title: 'Küresel ölçeklenebilirlik',
                  desc: 'Uluslararası bankacılık katmanlarından dijital hizmetlerin dünya çapında sunumuna kadar bu model bölgesel ve uluslararası genişleme için oluşturulmuştur.',
                },
                {
                  icon: CreditCard,
                  title: 'Birden fazla gelir akışı',
                  desc: 'Ortaklık modeli tek bir akışla sınırlı değildir. Bu yapı hesapları, kartları, top-up’ı, hediye kartlarını, veriyi ve daha geniş dijital hizmetleri birbirine bağlayabilir.',
                },
                {
                  icon: BarChart3,
                  title: 'Uzun vadeli büyüme mantığı',
                  desc: 'Ekosistem yapısı, gelecekteki ürünler, daha derin entegrasyonlar ve zaman içinde daha geniş platform değeri için alan yaratır.',
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
                İki
                <br />
                uygulamanın
                <br />
                avantajı
              </h4>
              <p className="font-bold text-sm uppercase opacity-80 italic leading-relaxed">
                Tek ekosistem. İki farklı pazar motoru. Stratejik ortaklar için daha büyük ticari fırsat.
              </p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* TRACKS */}
      <section className="relative z-10 py-24 sm:py-28 md:py-36 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Ortaklık <span className="text-blue-500">yolları</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            Farklı ortaklar, Safi ekosisteminin farklı katmanlarına karşılık gelir. Bu yapı herkese uyan tek tip bir model değildir. Platform, fintech’i, telekomu, altyapıyı ve büyüme odaklı ticari ittifakları karşılamak üzere tasarlanmıştır.
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
            Altyapı <span className="text-blue-500">katmanları</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            Görsel kimliğin arkasında ekosistem gerçek operasyonel katmanlara dayanır: finans, dağıtım, kullanıcı deneyimi, güvenlik ve uzun vadeli büyüme mimarisi.
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
                Eski modeller ile <span className="text-amber-500">SAFI ekosistemi</span> karşı karşıya
              </h2>

              <div className="grid md:grid-cols-2 gap-10 sm:gap-14 text-left">
                <div className="space-y-6 sm:space-y-8 opacity-45">
                  <h4 className="text-xl sm:text-2xl font-black italic uppercase border-b border-white/10 pb-4">
                    Geleneksel modeller
                  </h4>
                  {[
                    'Sadece tek ve sınırlı hizmet',
                    'Zayıf uluslararası ölçeklenebilirlik',
                    'Ürün genişlemesi için sınırlı mantık',
                    'Ağır ve eski kullanıcı deneyimi',
                  ].map((text) => (
                    <div key={text} className="flex gap-4 items-center text-gray-500 font-light uppercase text-xs sm:text-sm italic line-through">
                      <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> {text}
                    </div>
                  ))}
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <h4 className="text-xl sm:text-2xl font-black italic uppercase border-b border-amber-500/30 pb-4 text-amber-500">
                    Safi modeli
                  </h4>
                  {[
                    'Farklı pazar rollerine sahip iki bağlantılı uygulama',
                    'Bölgesel ve küresel büyüme için gerçek kapasite',
                    'Ortaklar için çoklu gelir imkânları',
                    'Modern tasarım, daha yüksek güven, daha hızlı deneyim',
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
            Büyüme <span className="text-amber-500">yol haritasının</span> mantığı
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            Bu ekosistem statik değildir. Zaman içinde ortaklıkların, altyapının, finansal hizmetlerin ve dijital dağıtımın birlikte büyümesini sağlayacak şekilde farklı aşamalarda genişlemek üzere tasarlanmıştır.
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
              Haydi
              <br />
              <span className="text-amber-500">bir sonraki ağı inşa edelim</span>
            </h2>
          </MagneticElement>

          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-10 sm:mb-12">
            Uluslararası finansal altyapıyı büyük ölçekli dijital dağıtımla birleştiren, geleceğe dönük bir markayla ortaklık arıyorsanız, konuşma tam burada başlıyor.
            SafiPay ve Safi TopUp birlikte daha ciddi, daha ölçeklenebilir ve ticari açıdan daha çekici bir ortaklık teklifi yaratır.
          </p>

          <Link
            href="/fa/contact"
            className="inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-amber-500 text-black font-black text-base sm:text-lg rounded-2xl hover:bg-white transition-all group"
          >
            Ortaklık görüşmesini başlat
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-16 sm:mt-24 text-[10px] font-black uppercase tracking-[0.24em] sm:tracking-[0.4em] text-gray-700 border-t border-white/5 pt-12 sm:pt-14">
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Uygulamalar</p>
              <p className="text-white tracking-[0.12em]">SafiPay / Safi TopUp</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Odak</p>
              <p className="text-white tracking-[0.12em]">Finans + dijital hizmetler</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Ölçek</p>
              <p className="text-green-500 tracking-[0.12em]">Dünyaya hazır</p>
            </div>
            <div>
              <p className="text-amber-500 mb-3 sm:mb-4 uppercase">Vizyon</p>
              <p className="text-white tracking-[0.12em]">Uzun vadeli büyüme için tasarlandı</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
