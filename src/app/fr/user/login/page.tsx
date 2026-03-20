'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { createClientSideSupabase } from '@/lib/supabase';
import { Mail, Lock, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function SmallRotatingGlobe() {
  const meshRef = useRef<any>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.006;
    }
  });

  return (
    <group ref={meshRef}>
      <points>
        <sphereGeometry args={[1.5, 64, 64]} />
        <pointsMaterial size={0.02} color="#f59e0b" transparent opacity={0.8} sizeAttenuation />
      </points>
      <Sphere args={[1.52, 32, 32]}>
        <meshBasicMaterial color="#f59e0b" wireframe opacity={0.03} transparent />
      </Sphere>
    </group>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'fr';
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const supabase = createClientSideSupabase();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: loginError } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    } else {
      // Utilisation de router.push pour une redirection sécurisée et rapide vers le tableau de bord
      router.push(`/${lang}/user/dashboard`);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col md:flex-row overflow-hidden relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Arrière-plan galactique SafiPay */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
          <Stars radius={150} depth={50} count={7000} factor={6} saturation={0} fade speed={1} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none"></div>
      </div>

      <div className="hidden md:flex flex-[0.8] relative items-center justify-center z-10">
        <div className="w-[400px] h-[400px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#f59e0b" intensity={2} />
            <SmallRotatingGlobe />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
        </div>
      </div>

      <div className="flex-[1.2] flex items-center justify-center p-6 lg:p-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[750px] bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-[4rem] p-10 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px]" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <ShieldCheck className="text-black w-7 h-7" />
                </div>
                <h2 className="text-xs font-black tracking-[0.3em] text-zinc-600 uppercase">ID sécurisée Safi</h2>
              </div>
              
              <h1 className="text-5xl font-black tracking-tighter leading-[0.9] text-white uppercase italic">
                Accès <br/> <span className="text-amber-500 text-6xl">global</span>
              </h1>
              
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Déverrouillez votre passerelle privée vers SafiPay. La sécurité est notre priorité absolue.
              </p>
            </div>

            <div className="w-full lg:w-[320px] space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative group">
                  <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 transition-colors w-5 h-5`} />
                  <input 
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="w-full bg-black/50 border border-white/10 rounded-3xl px-7 py-5 outline-none focus:border-amber-500/50 focus:bg-black transition-all text-white font-bold text-sm"
                  />
                </div>

                <div className="relative group">
                  <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 transition-colors w-5 h-5`} />
                  <input 
                    type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className="w-full bg-black/50 border border-white/10 rounded-3xl px-7 py-5 outline-none focus:border-amber-500/50 focus:bg-black transition-all text-white font-bold text-sm"
                  />
                </div>

                {error && <p className="text-red-500 text-[10px] font-bold text-center uppercase tracking-tighter">{error}</p>}

                <button 
                  type="submit" disabled={loading}
                  className="w-full bg-amber-500 text-black font-black py-5 rounded-3xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group"
                >
                  <span className="uppercase tracking-widest text-xs">{loading ? 'Vérification...' : 'Déverrouiller la passerelle'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="text-center pt-2">
                <Link href={`/${lang}/user/signup`} className="group flex items-center justify-center gap-2">
                  <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Nouveau ici ?</span>
                  <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest group-hover:border-b border-amber-500 transition-all">Rejoindre la liste d’attente</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}