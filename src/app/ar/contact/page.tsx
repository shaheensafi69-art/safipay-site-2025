'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Mail,
  Send,
  MapPin,
  Globe,
  ShieldCheck,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Sparkles,
  Headphones,
  BadgeCheck,
  ArrowUpRight,
} from 'lucide-react';
import { useMemo, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const BRAND_GOLD = '#f59e0b';
const BRAND_GOLD_SOFT = '#ffd27a';

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -2]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.9, 0.03, 16, 200]} />
        <meshStandardMaterial color={BRAND_GOLD} emissive={BRAND_GOLD} emissiveIntensity={0.25} metalness={1} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0, -2.4]} rotation={[Math.PI / 2.4, 0.5, 0]}>
        <torusGeometry args={[3.6, 0.02, 16, 200]} />
        <meshStandardMaterial color="#fff1c7" emissive={BRAND_GOLD} emissiveIntensity={0.18} metalness={1} roughness={0.18} transparent opacity={0.85} />
      </mesh>

      <mesh position={[0, 0, -2.8]} rotation={[Math.PI / 1.8, -0.4, 0.2]}>
        <torusGeometry args={[4.4, 0.018, 16, 220]} />
        <meshStandardMaterial color={BRAND_GOLD_SOFT} emissive={BRAND_GOLD} emissiveIntensity={0.15} metalness={1} roughness={0.18} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function ContactOrb() {
  const orbRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 1400;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 1.6 + Math.random() * 0.25;
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
      orbRef.current.rotation.y += 0.003;
      orbRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.08;
      orbRef.current.rotation.z = Math.cos(clock.elapsedTime * 0.25) * 0.04;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.0018;
      particlesRef.current.rotation.x += 0.0008;
    }
  });

  return (
    <group position={[0, 0.2, 0]}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={BRAND_GOLD} size={0.018} transparent opacity={0.95} sizeAttenuation />
      </points>

      <mesh ref={orbRef}>
        <sphereGeometry args={[1.42, 64, 64]} />
        <meshPhysicalMaterial
          color="#050505"
          emissive={BRAND_GOLD}
          emissiveIntensity={0.14}
          metalness={1}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.12}
          transparent
          opacity={0.98}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function FloatingMiniShapes() {
  return (
    <>
      <Float speed={1.4} floatIntensity={0.7} rotationIntensity={0.18}>
        <mesh position={[-4.8, 1.7, -1.2]} rotation={[0.5, 0.4, 0.2]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#1a1a1a" emissive={BRAND_GOLD} emissiveIntensity={0.16} metalness={1} roughness={0.18} />
        </mesh>
      </Float>

      <Float speed={1.8} floatIntensity={0.8} rotationIntensity={0.2}>
        <mesh position={[4.7, -1.8, -1.5]}>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color={BRAND_GOLD_SOFT} emissive={BRAND_GOLD} emissiveIntensity={0.2} metalness={1} roughness={0.12} />
        </mesh>
      </Float>

      <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0.16}>
        <mesh position={[5.1, 2.2, -2.3]} rotation={[0.8, 0.3, 0.5]}>
          <boxGeometry args={[0.55, 0.35, 0.06]} />
          <meshStandardMaterial color="#171717" emissive={BRAND_GOLD} emissiveIntensity={0.14} metalness={0.9} roughness={0.22} />
        </mesh>
      </Float>
    </>
  );
}

function ContactScene() {
  return (
    <>
      <color attach="background" args={['#020202']} />
      <PerspectiveCamera makeDefault position={[0, 0, 8.5]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[7, 6, 5]} intensity={1.7} color={BRAND_GOLD} />
      <pointLight position={[-6, -4, -6]} intensity={0.9} color="#fff2d4" />
      <pointLight position={[0, 5, -4]} intensity={0.7} color="#ffcf70" />
      <Stars radius={120} depth={70} count={3500} factor={3} saturation={0} fade speed={0.7} />

      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.22}>
          <ContactOrb />
          <FloatingRings />
        </Float>
        <FloatingMiniShapes />
      </Suspense>
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
  link,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -6 }}
      className={`group flex flex-row-reverse items-center gap-5 rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl transition-all ${color}`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-amber-500 transition-all group-hover:bg-amber-500 group-hover:text-black">
        {icon}
      </div>

      <div className="min-w-0 flex-1 text-right">
        <h4 className="mb-1 text-[10px] font-black uppercase tracking-[0.24em] text-gray-500">
          {title}
        </h4>
        <p dir="ltr" className="truncate text-left text-base md:text-lg font-bold tracking-tight text-white/90">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

function SocialCard({
  icon,
  name,
  link,
}: {
  icon: React.ReactNode;
  name: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -4 }}
      className="group flex flex-row-reverse items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all hover:border-amber-500/30 hover:bg-amber-500/[0.06]"
    >
      <div className="text-gray-400 transition-colors group-hover:text-amber-500">{icon}</div>
      <span className="text-sm font-bold text-gray-300 transition-colors group-hover:text-white">
        {name}
      </span>
    </motion.a>
  );
}

function InfoBadge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-row-reverse items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.22em] text-gray-300">
      <span className="text-amber-500">{icon}</span>
      {text}
    </div>
  );
}

export default function ContactPageEN() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white font-sans selection:bg-amber-500/30 text-right" dir="rtl">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
          <ContactScene />
        </Canvas>
      </div>

      <section className="relative z-10 overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.10),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" />

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-amber-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
            </span>
            الدعم العالمي متاح 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter"
          >
            تواصل مع <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">الجيل القادم</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mb-10 max-w-3xl text-lg md:text-xl font-light leading-relaxed text-gray-300"
          >
            إذا كانت لديك أسئلة حول الخدمات المصرفية الرقمية الدولية أو الشراكات أو الدعم أو الوصول المالي العالمي،
            فإن قنوات SafiPay التنفيذية جاهزة للرد
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <InfoBadge icon={<Headphones size={14} />} text="دعم مباشر" />
            <InfoBadge icon={<ShieldCheck size={14} />} text="اتصال آمن" />
            <InfoBadge icon={<BadgeCheck size={14} />} text="قنوات موثقة" />
            <InfoBadge icon={<Sparkles size={14} />} text="مساعدة مميزة" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-6 lg:px-10 pb-28">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="h-full rounded-[2.5rem] border border-white/8 bg-white/[0.04] p-7 md:p-9 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.30)] text-right">
              <div className="mb-8">
                <div className="mb-4 inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-amber-400">
                  قنوات التواصل
                </div>
                <h2 className="mb-3 text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                  تواصل مع SafiPay
                </h2>
                <div className="h-1 w-20 rounded-full bg-amber-500 mr-0 ml-auto" />
              </div>

              <div className="space-y-4">
                <ContactCard
                  icon={<MessageSquare size={22} />}
                  title="واتساب الرسمي"
                  value="+44 7476 620282"
                  link="https://wa.me/447476620282"
                  color="hover:border-green-500/30"
                />
                <ContactCard
                  icon={<Phone size={22} />}
                  title="خط الدعم"
                  value="+44 7476 620282"
                  link="tel:+447476620282"
                  color="hover:border-amber-500/30"
                />
                <ContactCard
                  icon={<Mail size={22} />}
                  title="البريد الإلكتروني الرسمي"
                  value="safipay@hotmail.com"
                  link="mailto:safipay@hotmail.com"
                  color="hover:border-blue-500/30"
                />
              </div>

              <div className="my-8 border-t border-white/6 pt-8">
                <h4 className="mb-5 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">
                  تواصل معنا
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SocialCard icon={<Facebook size={20} />} name="فيسبوك" link="https://www.facebook.com/share/1FDnCCnwJ4/" />
                  <SocialCard icon={<Instagram size={20} />} name="إنستغرام" link="https://www.instagram.com/safipay2022?igsh=ZW9tdHRidHI1d2gz" />
                  <SocialCard icon={<Linkedin size={20} />} name="لينكدإن" link="https://www.linkedin.com/company/safipay" />
                  <SocialCard icon={<Twitter size={20} />} name="إكس (تويتر)" link="https://x.com/safipay" />
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-amber-500/15 bg-gradient-to-br from-amber-500/10 to-transparent p-5">
                <div className="mb-3 flex flex-row-reverse items-center gap-3 text-amber-400">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em]">
                    الخصوصية مضمونة
                  </span>
                </div>
                <p className="text-sm leading-7 text-gray-400">
                  تتم جميع الاتصالات عبر القنوات الرسمية والآمنة مع معالجة احترافية تركّز على الخصوصية
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/8 bg-white/[0.04] p-7 md:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.30)] text-right">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <div className="absolute -top-24 right-0 h-60 w-60 rounded-full bg-amber-500/8 blur-[100px]" />

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="mb-4 inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-amber-400">
                    استفسار مباشر
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    أرسل رسالتك الآمنة
                  </h3>
                </div>

                <form
                  action="https://formspree.io/f/maqbrkgq"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  <div className="grid gap-7 md:grid-cols-2">
                    <div className="space-y-3 text-right">
                      <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        dir="rtl"
                        placeholder="مثال: شاهين صافي"
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-right text-white outline-none transition-all placeholder:text-gray-700 focus:border-amber-500/40 focus:bg-amber-500/[0.04]"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-gray-400 text-right">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        dir="ltr"
                        placeholder="name@email.com"
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-left text-white outline-none transition-all placeholder:text-gray-700 focus:border-amber-500/40 focus:bg-amber-500/[0.04]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 text-right">
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                      تفاصيل الرسالة
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      dir="rtl"
                      placeholder="اشرح سؤالك أو طلب الشراكة أو مشكلة الدعم أو تفاصيل مشروعك..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-right text-white outline-none transition-all placeholder:text-gray-700 focus:border-amber-500/40 focus:bg-amber-500/[0.04]"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: '0 0 40px rgba(245, 158, 11, 0.18)' }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 py-5 text-base md:text-lg font-black uppercase tracking-[0.18em] text-black transition-all hover:bg-amber-400"
                  >
                    إرسال رسالة آمنة
                    <Send size={20} />
                  </motion.button>
                </form>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center text-sm font-bold text-green-400"
                  >
                    تم إرسال طلبك بنجاح إلى قنوات SafiPay
                  </motion.div>
                )}

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-black/25 p-4 text-right">
                    <div className="mb-2 text-amber-500">
                      <MapPin size={18} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">الموقع</p>
                    <p className="mt-2 text-sm font-bold text-white">باريس، فرنسا</p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/25 p-4 text-right">
                    <div className="mb-2 text-amber-500">
                      <Globe size={18} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">العمليات</p>
                    <p className="mt-2 text-sm font-bold text-white">تغطية عالمية</p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/25 p-4 text-right">
                    <div className="mb-2 text-amber-500">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">الأمان</p>
                    <p className="mt-2 text-sm font-bold text-white">محمي بتشفير AES-256</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/5 bg-black/20 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { icon: <MapPin size={16} />, text: 'باريس، فرنسا' },
              { icon: <Globe size={16} />, text: 'عمليات عالمية' },
              { icon: <ShieldCheck size={16} />, text: 'تشفير AES-256' },
              { icon: <ArrowUpRight size={16} />, text: 'استجابة إدارية سريعة' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex flex-row-reverse items-center gap-2 rounded-full border border-white/6 bg-white/[0.03] px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-gray-400 transition-all hover:border-amber-500/20 hover:text-amber-400"
              >
                {item.icon}
                {item.text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}