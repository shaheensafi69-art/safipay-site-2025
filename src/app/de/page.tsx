'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertCircle, CheckCircle2, Globe, Shield, Zap, 
  CreditCard, ArrowRight, BarChart3, Handshake 
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function GlobalScene() {
  const meshRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#f59e0b" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
      
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group ref={meshRef}>
            <points>
              <sphereGeometry args={[3, 64, 64]} />
              <pointsMaterial color="#f59e0b" size={0.025} transparent opacity={0.3} sizeAttenuation={true} />
            </points>
            <mesh>
              <sphereGeometry args={[2.98, 32, 32]} />
              <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.03} />
            </mesh>
          </group>
        </Float>
      </Suspense>
    </>
  );
}

export default function HomePageDE() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'de';

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30 relative font-sans" dir="ltr">
      
      {/* 3D Hintergrund */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <GlobalScene />
        </Canvas>
      </div>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-6xl pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase pointer-events-auto"
          >
            Finanzielle Freiheit für alle Afghanen
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              Digital Banking für Afghanistan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Empowerment für Millionen mit der ersten internationalen Digitalbank. 
            Keine Grenzen, keine Einschränkungen – einfach nahtlose globale Finanzen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
          >
            <Link
              href="#problems"
              className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              Herausforderungen <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${currentLang}/partners`}
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
            >
              <Handshake size={24} /> Partner werden
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Problems Section --- */}
      <section id="problems" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-24 text-center">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic">
              Die <span className="text-red-600">Bankenkrise</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl font-light">
              Das aktuelle Finanzsystem in Afghanistan ist isoliert, veraltet und bricht zusammen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85% ohne Konto', desc: 'Die Mehrheit der Bevölkerung, insbesondere Frauen, hat keinen Zugang zu Basiskonten.' },
              { title: 'SWIFT Isolation', desc: 'Die Trennung vom globalen Netzwerk macht internationale Überweisungen unmöglich.' },
              { title: 'Ungültige Karten', desc: 'Inländische Karten funktionieren nicht auf Plattformen wie Amazon, Netflix oder Google.' },
              { title: '15% Gebühren', desc: 'Informelle Systeme führen zu massiven finanziellen Verlusten und fehlender Transparenz.' },
              { title: 'Hohe Inflation', desc: 'Es gibt kaum Möglichkeiten, Ersparnisse in stabilen Währungen wie USD oder EUR zu halten.' },
              { title: 'Kein Digital-KYC', desc: 'Kontoeröffnungen erfordern noch immer physische Präsenz und veraltete Bürokratie.' },
              { title: 'Mangelnde Transparenz', desc: 'Schwache Infrastruktur führt zu hohen Risiken für Betrug und Geldwäsche.' },
              { title: 'Offline-Wirtschaft', desc: 'Unternehmen können keine globalen Zahlungen annehmen, was das Wachstum stoppt.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, borderColor: 'rgba(239, 68, 68, 0.4)', backgroundColor: 'rgba(5, 5, 5, 0.9)' }}
                className="bg-[#050505]/70 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Solutions Section --- */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
              Die <span className="text-amber-500">Zukunft</span> ist hier
            </h2>
            <p className="text-gray-400 text-xl font-light italic">
              SafiPay ist nicht nur eine App – es ist eine Brücke zum globalen Markt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Globaler Zugang', desc: 'Sofortige internationale Konten ohne physische Bankbesuche.' },
              { icon: <CreditCard />, title: 'Virtuelle Karten', desc: 'Echte Visa/Mastercards für globales Shopping und Abonnements.' },
              { icon: <Zap />, title: '1% Gebühren', desc: 'Umgehung teurer Hawala-Systeme durch schnelle, transparente Transfers.' },
              { icon: <Shield />, title: 'Top Sicherheit', desc: 'Banken-Verschlüsselung und digitales KYC für maximale Sicherheit.' },
              { icon: <BarChart3 />, title: 'Multi-Währung', desc: 'USD, EUR und mehr halten, um sich vor lokaler Inflation zu schützen.' },
              { icon: <CheckCircle2 />, title: 'Full Compliance', desc: 'Betrieb innerhalb globaler Rechtsrahmen für die Unbanked-Bevölkerung.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -12, 
                  borderColor: 'rgba(245, 158, 11, 0.5)', 
                  boxShadow: '0 20px 40px rgba(245, 158, 11, 0.1)',
                  backgroundColor: 'rgba(5, 5, 5, 0.8)'
                }}
                className="group p-10 bg-black/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] transition-all duration-500 cursor-pointer"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-125 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)] transition-transform"
          >
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
              Bereit, Afghanistans <br /> Wirtschaft neu zu bauen?
            </h2>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-amber-500 hover:text-white transition-all transform"
            >
              Partnerschaft anfragen <Handshake size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}