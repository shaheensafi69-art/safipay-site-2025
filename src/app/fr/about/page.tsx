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
  const currentLang = pathname?.split('/')[1] || 'fr';

  const coreValues = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'La sécurité d’abord',
      desc: 'Chaque couche de l’écosystème SafiPay a été conçue sur la base de la confiance, de la protection, de l’accès chiffré et de la stabilité à long terme de la plateforme.',
    },
    {
      icon: <Globe size={22} />,
      title: 'Accès mondial',
      desc: 'We are building pathways that help Afghans connect with international financial tools, modern digital payments, and borderless opportunity.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Vitesse et simplicité',
      desc: 'L’accès financier ne devrait pas être lent, confus ou dépendre de systèmes anciens. SafiPay est conçu pour offrir une expérience rapide, propre et moderne.',
    },
    {
      icon: <Target size={22} />,
      title: 'Utilité réelle',
      desc: 'Notre mission n’est pas seulement une innovation visuelle. Notre objectif est de créer un impact concret pour les freelances, les entreprises, les familles et les professionnels du numérique.',
    },
  ];

  const ecosystemBlocks = [
    {
      icon: <Landmark size={22} />,
      title: 'Accès financier international',
      desc: 'SafiPay vise à offrir aux utilisateurs afghans un accès à des outils financiers plus solides et plus pratiques, les reliant à une économie numérique plus large.',
    },
    {
      icon: <Wallet size={22} />,
      title: 'Capacité multidevise',
      desc: 'Détenir et gérer de la valeur dans les grandes devises offre plus de protection, davantage de flexibilité et une confiance financière renforcée.',
    },
    {
      icon: <CreditCard size={22} />,
      title: 'Infrastructure de cartes numériques',
      desc: 'Les solutions de cartes virtuelles et physiques font partie d’une vision plus large permettant les achats, les abonnements, les services mondiaux et le commerce en ligne.',
    },
    {
      icon: <Banknote size={22} />,
      title: 'Mouvement d’argent plus intelligent',
      desc: 'Nous nous concentrons sur la réduction des frictions, la diminution de la dépendance aux systèmes inefficaces et l’amélioration de la manière dont les utilisateurs déplacent la valeur au-delà des frontières.',
    },
    {
      icon: <Network size={22} />,
      title: 'Écosystème financier connecté',
      desc: 'SafiPay n’a pas été planifié comme un produit à fonctionnalité unique. Il se développe comme un écosystème où paiements, accès, sécurité et facilité d’utilisation fonctionnent ensemble.',
    },
    {
      icon: <BadgeCheck size={22} />,
      title: 'Approche sérieuse de la conformité',
      desc: 'La croissance à long terme dépend d’opérations structurées, de la responsabilité, d’un onboarding contrôlé et d’une architecture financière responsable.',
    },
  ];

  const useCases = [
    {
      icon: <Users size={22} />,
      title: 'Pour les particuliers',
      desc: 'Les personnes qui ont besoin d’un moyen plus moderne d’accéder aux services financiers, de conserver la valeur de manière plus sûre et de participer aux paiements en ligne.',
    },
    {
      icon: <Briefcase size={22} />,
      title: 'Pour les freelances',
      desc: 'Les professionnels qui souhaitent un meilleur système pour recevoir de l’argent, payer leurs outils et travailler avec des clients internationaux.',
    },
    {
      icon: <Building2 size={22} />,
      title: 'Pour les entreprises',
      desc: 'Les entreprises et équipes numériques qui ont besoin d’abonnements, de paiements internationaux, de flexibilité opérationnelle et d’une visibilité financière renforcée.',
    },
  ];

  const technologyLayers = [
    {
      icon: <Cpu size={24} />,
      title: 'Logique de risque alimentée par l’IA',
      desc: 'La surveillance avancée et les systèmes intelligents peuvent soutenir la conscience du risque, la réduction de la fraude et l’amélioration des couches de décision.',
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      icon: <Network size={24} />,
      title: 'Infrastructure transparente',
      desc: 'Une infrastructure moderne, distribuée et orientée numérique contribue à créer une meilleure visibilité, un contrôle plus fort et une logique financière évolutive.',
      color: 'text-blue-500 bg-blue-500/10',
    },
    {
      icon: <Wallet size={24} />,
      title: 'Architecture de portefeuille intelligent',
      desc: 'Une expérience de portefeuille premium doit prendre en charge la commodité, la séparation des devises, la clarté des comptes et un contrôle utilisateur plus fluide.',
      color: 'text-green-500 bg-green-500/10',
    },
    {
      icon: <Layers3 size={24} />,
      title: 'Conception d’un écosystème évolutif',
      desc: 'SafiPay a été imaginé comme une structure fintech en couches pouvant évoluer vers des produits plus larges, des intégrations et des services financiers de plus grande valeur.',
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
            Réécrire l’avenir financier de l’Afghanistan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mt-8 mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter leading-[0.95]"
          >
            ÉCOSYSTÈME <br /> SAFIPAY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-4xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed font-light"
          >
            SafiPay est une vision moderne de la fintech transfrontalière, conçue pour réduire l’isolement financier, ouvrir l’accès international et construire un pont plus solide entre l’Afghanistan et l’économie numérique mondiale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="max-w-4xl mx-auto mt-6 text-base md:text-xl text-gray-500 leading-relaxed font-light"
          >
            Ce systeme n’est pas simplement un outil de paiement, mais un concept d’écosystème centré sur l’utilisabilité, l’inclusion financière, l’infrastructure numérique, la sécurité et la valeur stratégique à long terme pour les particuliers et les entreprises afghanes.
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
              Pourquoi SafiPay est né
            </h2>
            <div className="space-y-5 text-gray-300 text-lg leading-8 font-light">
              <p>
                L’Afghanistan a été confronté à une forte fragmentation financière. L’accès bancaire traditionnel reste limité, la connectivité internationale demeure faible et de nombreuses personnes sont encore exclues des systèmes financiers modernes.
              </p>
              <p>
                Les freelances ont du mal à recevoir de l’argent. Les entreprises rencontrent des difficultés pour payer des outils mondiaux. Les familles n’ont pas de moyen simple de protéger la valeur de leurs actifs dans des devises plus fortes. Les professionnels, eux aussi, restent éloignés d’opportunités qui devraient déjà être à leur portée.
              </p>
              <p>
                SafiPay est né de la nécessité de changer cette reality. L’objectif est de créer une expérience financière plus pratique, plus sûre et plus internationale, façonnée précisément autour des besoins réels des Afghans.
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
              Mission principale
            </h2>
            <div className="space-y-4">
              {[
                'Briser l’isolement financier des utilisateurs afghans',
                'Créer un accès à la finance numérique internationale',
                'Réduire la dépendance aux systèmes anciens',
                'Soutenir les freelances, les familles et les entreprises',
                'Construire une marque fintech sérieuse, sûre et évolutive',
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
              La crise que <span className="text-amber-500">nous résolvons</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              SafiPay se construit autour de problèmes structurels réels, et non imaginaires. C’est une réponse à de véritables douleurs financières auxquelles des millions de personnes sont confrontées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe size={22} />,
                title: 'Isolement mondial',
                desc: 'La faible intégration avec les systèmes bancaires internationaux rend la participation numérique bien plus difficile qu’elle ne devrait l’être.',
              },
              {
                icon: <Banknote size={22} />,
                title: 'Transferts coûteux',
                desc: 'Les canaux informels et inefficaces créent souvent des coûts plus élevés, moins de transparence et une confiance financière plus faible.',
              },
              {
                icon: <CreditCard size={22} />,
                title: 'Obstacles au paiement',
                desc: 'De nombreux utilisateurs rencontrent encore des difficultés pour payer les plateformes, les abonnements, les services, l’hébergement, les outils et le commerce en ligne.',
              },
              {
                icon: <Landmark size={22} />,
                title: 'Accès moderne limité',
                desc: 'Les outils financiers professionnels courants ailleurs restent inaccessibles ou fragmentés pour de nombreux Afghans.',
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
            Ce qui rend <span className="text-amber-500">SafiPay différent</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            SafiPay a été conçu comme un écosystème financier à forte valeur ajoutée, et non comme une interface limitée à une seule fonctionnalité.
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
                Valeurs fondamentales et principes stratégiques
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
                  Technologie de l’écosystème
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
            Pour qui <span className="text-amber-500">SafiPay est conçu</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Cette plateforme est conçue pour un usage économique réel, et non pour un langage de marque abstrait.
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
              Équipe dirigeante
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Les esprits stratégiques qui portent la vision de SafiPay se concentrent sur la construction d’un écosystème financier crédible, tourné vers l’avenir et d’une réelle importance régionale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Shaheen Safi',
                role: 'Fondateur et PDG',
                img: '/shaheen.jpeg',
                href: `/${currentLang}/founder/shaheen-safi`,
                color: 'border-amber-500/30',
              },
              {
                name: 'Mujtaba Rahmani',
                role: 'Co-fondateur et directeur technique',
                img: '/mujtaba.jpeg',
                href: `/${currentLang}/founder/mujtaba-rahmani`,
                color: 'border-blue-500/30',
              },
              {
                name: 'Sahel Salem',
                role: 'Responsable de l’écosystème',
                img: '/sahel.jpeg',
                href: `/${currentLang}/founder/sahel-salem`,
                color: 'border-green-500/30',
              },
              {
                name: 'Shirin Gol Ahmadi',
                role: 'Manager de SafiPay',
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
              Êtes-vous prêt à rejoindre <br /> l’économie mondiale
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10">
              SafiPay est en cours de construction comme un pont financier sérieux pour la prochaine génération d’utilisateurs afghans. Si vous souhaitez faire partie de cette mission, explorez les opportunités de partenariat et contribuez à façonner l’avenir.
            </p>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-5 bg-amber-500 text-black font-black text-lg rounded-2xl hover:bg-white transition-all group"
            >
              Partenaire avec nous
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}