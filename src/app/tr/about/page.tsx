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
  const currentLang = pathname?.split('/')[1] || 'tr';

  const coreValues = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'Önce Güvenlik',
      desc: 'SafiPay ekosisteminin her katmanı güven, koruma, şifreli erişim ve uzun vadeli platform dayanıklılığı üzerine tasarlanmıştır.',
    },
    {
      icon: <Globe size={22} />,
      title: 'Küresel Erişim',
      desc: 'Afganların uluslararası finansal araçlara, modern dijital ödemelere ve sınırsız fırsatlara bağlanmasına yardımcı olan yollar inşa ediyoruz.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Hız & Sadelik',
      desc: 'Finansal erişim yavaş, kafa karıştırıcı veya modası geçmiş sistemlere bağımlı olmamalıdır. SafiPay hızlı, temiz ve modern hissettirecek şekilde tasarlanmıştır.',
    },
    {
      icon: <Target size={22} />,
      title: 'Gerçek Fayda',
      desc: 'Misyonumuz sadece görsel inovasyon değil; serbest çalışanlar, işletmeler, ailelerและ dijital profesyoneller için pratik bir etki yaratmaktır.',
    },
  ];

  const ecosystemBlocks = [
    {
      icon: <Landmark size={22} />,
      title: 'Uluslararası Finansal Erişim',
      desc: 'SafiPay, Afgan kullanıcılara onları daha geniş dijital ekonomiye bağlayan daha güçlü ve pratik finansal araçlara erişim sunmayı amaçlar.',
    },
    {
      icon: <Wallet size={22} />,
      title: 'Çoklu Para Birimi Yeteneği',
      desc: 'Büyük para birimlerinde değer tutmak ve yönetmek daha fazla koruma, daha fazla esneklik ve daha güçlü bir finansal güven yaratır.',
    },
    {
      icon: <CreditCard size={22} />,
      title: 'Dijital Kart Altyapısı',
      desc: 'Sanal ve fiziksel kart çözümleri; satın alma, abonelik, küresel hizmetler ve çevrimiçi ticareti etkinleştirmeye yönelik daha geniş bir vizyonun parçasıdır.',
    },
    {
      icon: <Banknote size={22} />,
      title: 'Daha Akıllı Para Hareketi',
      desc: 'Sürtünmeyi azaltmaya, verimsiz sistemlere olan bağımlılığı düşürmeye ve kullanıcıların sınırların ötesine değer taşıma şeklini iyileştirmeye odaklanıyoruz.',
    },
    {
      icon: <Network size={22} />,
      title: 'Bağlantılı Finansal Ekosistem',
      desc: 'SafiPay tek özellikli bir ürün olarak planlanmadı. Ödemelerin, erişimin, güvenliğin ve kullanılabilirliğin birlikte çalıştığı bir ekosistem olarak şekillendiriliyor.',
    },
    {
      icon: <BadgeCheck size={22} />,
      title: 'Ciddi Uyum Anlayışı',
      desc: 'Uzun vadeli büyüme; yapılandırılmış operasyonlara, hesap verebilirliğe, kontrollü ilk katılım süreçlerine ve sorumlu finansal mimariye bağlıdır.',
    },
  ];

  const useCases = [
    {
      icon: <Users size={22} />,
      title: 'Bireyler İçin',
      desc: 'Finansal hizmetlere erişmek, değerleri daha güvenli tutmak ve çevrimiçi ödemelere katılmak için daha modern bir yola ihtiyaç duyan insanlar.',
    },
    {
      icon: <Briefcase size={22} />,
      title: 'Freelancerlar İçin',
      desc: 'Para almak, araçlar için ödeme yapmak ve uluslararası müşterilerle çalışmak için daha iyi bir sistem isteyen profesyoneller.',
    },
    {
      icon: <Building2 size={22} />,
      title: 'İşletmeler İçin',
      desc: 'Aboneliklere, uluslararası ödemelere, operasyonel esnekliğe ve daha güçlü finansal görünürlüğe ihtiyaç duyan şirketler ve dijital ekipler.',
    },
  ];

  const technologyLayers = [
    {
      icon: <Cpu size={24} />,
      title: 'Yapay Zeka Destekli Risk Mantığı',
      desc: 'Gelişmiş izleme ve akıllı sistemler risk farkındalığını, dolandırıcılığın azaltılmasını ve daha iyi karar alma katmanlarını destekleyebilir.',
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      icon: <Network size={24} />,
      title: 'Şeffaf Altyapı',
      desc: 'Modern, dağıtık ve dijital öncelikli altyapı, daha güçlü görünürlük, daha iyi kontrol ve ölçeklenebilir finansal mantık oluşturmaya yardımcı olur.',
      color: 'text-blue-500 bg-blue-500/10',
    },
    {
      icon: <Wallet size={24} />,
      title: 'Akıllı Cüzdan Mimarisi',
      desc: 'Premium bir cüzdan deneyimi kolaylığı, para birimi ayrımını, hesap netliğini и daha sorunsuz kullanıcı kontrolünü desteklemelidir.',
      color: 'text-green-500 bg-green-500/10',
    },
    {
      icon: <Layers3 size={24} />,
      title: 'Ölçeklenebilir Ekosistem Tasarımı',
      desc: 'SafiPay, daha geniş ürünlere, entegrasyonlara ve daha yüksek değerli finansal hizmetlere dönüşebilen katmanlı bir fintech yapısı olarak öngörülmektedir.',
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
            Afganistan'ın Finansal Geleceğini Yeniden Yazıyoruz
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mt-8 mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter leading-[0.95]"
          >
            SAFIPAY <br /> EKOSİSTEMİ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-4xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed font-light"
          >
            SafiPay, finansal izolasyonu azaltmak, uluslararası erişimin kilidini açmak ve Afganistan ile küresel dijital ekonomi arasında daha güçlü bir köprü oluşturmak için kurulmuş modern bir sınır ötesi fintech vizyonudur.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="max-w-4xl mx-auto mt-6 text-base md:text-xl text-gray-500 leading-relaxed font-light"
          >
            Bir ödeme aracından daha fazlası olarak tasarlanmıştır. Afgan bireyler ve işletmeler için kullanılabilirlik, finansal kapsayıcılık, dijital altyapı, güvenlik ve uzun vadeli stratejik değere odaklanan bir ekosistem konseptidir.
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
              SafiPay Neden Doğdu?
            </h2>
            <div className="space-y-5 text-gray-300 text-lg leading-8 font-light">
              <p>
                Afganistan ciddi bir finansal parçalanmayla karşı karşıya kaldı. Geleneksel bankacılık erişimi sınırlı olmaya devam ediyor, uluslararası bağlantı zayıf ve birçok insan hala modern finansal sistemlerin dışında tutuluyor.
              </p>
              <p>
                Freelancerlar para almakta zorlanıyor. İşletmeler küresel araçlar için ödeme yaparken güçlük çekiyor. Aileler değerlerini daha güçlü para birimlerinde korumanın basit yollarından yoksun. Profesyoneller ise zaten ulaşılabilir olması gereken fırsatlardan uzak kalıyor.
              </p>
              <p>
                SafiPay bu gerçekliği değiştirme ihtiyacından doğdu. Hedef, tamamen gerçek Afgan ihtiyaçları etrafında şekillendirilmiş, daha pratik, güvenli ve uluslararası düzeyde bilinçli bir finansal deneyim yaratmaktır.
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
              Temel Misyon
            </h2>
            <div className="space-y-4">
              {[
                'Afgan kullanıcılar için malisel izolasyonu kırmak',
                'Uluslararası dijital finansa erişim inşa etmek',
                'Eski sistemlere olan bağımlılığı azaltmak',
                'Freelancerları, aileleri ve işletmeleri desteklemek',
                'Ciddi, güvenli ve ölçeklenebilir bir fintech markası yaratmak',
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
              Çözdüğümüz <span className="text-amber-500">Kriz</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              SafiPay hayali sorunlar etrafında değil, gerçek yapısal sorunlar etrafında şekilleniyor. Bu, milyonlarca insanın karşı karşıya kaldığı gerçek finansal zorluklara bir yanıttır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe size={22} />,
                title: 'Küresel İzolasyon',
                desc: 'Uluslararası bankacılık sistemleriyle zayıf entegrasyon, dijital katılımı olması gerekenden çok daha zor hale getiriyor.',
              },
              {
                icon: <Banknote size={22} />,
                title: 'Pahalı Transferler',
                desc: 'Kayıt dışı ve verimsiz kanallar genellikle daha yüksek maliyetler, daha düşük şeffaflık ve daha zayıf finansal güven yaratır.',
              },
              {
                icon: <CreditCard size={22} />,
                title: 'Ödeme Engelleri',
                desc: 'Birçok kullanıcı hala platformlar, abonelikler, hizmetler, barındırma, araçlar ve çevrimiçi ticaret için ödeme yapmakta zorluk çekiyor.',
              },
              {
                icon: <Landmark size={22} />,
                title: 'Sınırlı Modern Erişim',
                desc: 'Başka yerlerde yaygın olan profesyonel finansal araçlar, birçok Afgan için erişilemez veya parçalanmış durumda kalmaya devam ediyor.',
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
            SafiPay'i <span className="text-amber-500">Farklı Kılan Ne?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            SafiPay, dar ve tek özellikli bir arayüz değil, yüksek değerli bir finansal ekosistem olarak öngörülmektedir.
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
                Temel Değerler & Stratejik İlkeler
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
                  Ekosistem Teknolojisi
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
            SafiPay Kimler İçin <span className="text-amber-500">Geliştirildi?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Platform, soyut bir marka dili için değil, gerçek ekonomik kullanım için tasarlanmıştır.
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
              Liderlik Ekibi
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              SafiPay vizyonunun arkasındaki stratejik zihinler, ciddi bölgesel öneme sahip, güvenilir ve geleceğe yönelik bir finansal ekosistem inşa etmeye odaklanmıştır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Shaheen Safi',
                role: 'Kurucu & CEO',
                img: '/shaheen.jpeg',
                href: `/${currentLang}/founder/shaheen-safi`,
                color: 'border-amber-500/30',
              },
              {
                name: 'Mujtaba Rahmani',
                role: 'Kurucu Ortak & CTO',
                img: '/mujtaba.jpeg',
                href: `/${currentLang}/founder/mujtaba-rahmani`,
                color: 'border-blue-500/30',
              },
              {
                name: 'Sahel Salem',
                role: 'Ekosistem Lideri',
                img: '/sahel.jpeg',
                href: `/${currentLang}/founder/sahel-salem`,
                color: 'border-green-500/30',
              },
              {
                name: 'Shirin Gol Ahmadi',
                role: 'SafiPay Müdürü',
                img: '/shirin.jpeg',
                href: `/${currentLang}/founder/shirin-gol-ahmadi`,
                color: 'border-purple-500/30',
              },
            ].map((member, i) => (
              <Link key={i} href={member.href} className="block group">
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`p-4 rounded-[2.5rem] bg-white/[0.02] border ${member.color} hover:bg-white/[0.05] transition-all overflow-hidden h-full`}
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
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0">
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
              Küresel Ekonomiye <br /> Katılmaya Hazır mısınız?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10">
              SafiPay, yeni nesil Afgan kullanıcılar için ciddi bir finansal köprü olarak inşa ediliyor. Bu misyonun bir parçası olmak istiyorsanız, ortaklık fırsatlarını keşfedin ve geleceği şekillendirmeye yardımcı olun.
            </p>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-5 bg-amber-500 text-black font-black text-lg rounded-2xl hover:bg-white transition-all group"
            >
              Bizimle Ortak Olun
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}