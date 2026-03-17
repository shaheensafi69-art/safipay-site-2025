'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { createClientSideSupabase } from '@/lib/supabase';
import { User, Mail, Lock, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MiniRotatingGlobe() {
  const meshRef = useRef<any>(null);
  useFrame(() => { if (meshRef.current) meshRef.current.rotation.y += 0.004; });
  return (
    <group ref={meshRef}>
      <points>
        <sphereGeometry args={[1.2, 48, 48]} />
        <pointsMaterial size={0.015} color="#f59e0b" transparent opacity={0.6} />
      </points>
      <Sphere args={[1.22, 32, 32]}>
        <meshBasicMaterial color="#f59e0b" wireframe opacity={0.02} transparent />
      </Sphere>
    </group>
  );
}

export default function SignUpPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'en';
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const supabase = createClientSideSupabase();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: { data: { first_name: formData.firstName, last_name: formData.lastName } }
    });

    if (error) { setError(error.message as any); setLoading(false); }
    else { window.location.href = `/${lang}/user/verify-email`; }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col md:flex-row overflow-hidden relative" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* پس‌زمینه کاینات */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
          <Stars radius={150} depth={50} count={5000} factor={6} fade speed={1.5} />
        </Canvas>
      </div>

      {/* بخش کره چرخان */}
      <div className="hidden md:flex flex-[0.6] relative items-center justify-center z-10">
        <div className="w-[300px] h-[300px]">
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <MiniRotatingGlobe />
          </Canvas>
        </div>
      </div>

      {/* فرم ثبت‌نام عریض (Landscape) */}
      <div className="flex-[1.4] flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[850px] bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
            
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-amber-500">
                <Sparkles size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Join the Future</span>
              </div>
              <h1 className="text-4xl font-black tracking-tighter leading-none">CREATE <br/> <span className="text-amber-500">ACCOUNT</span></h1>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                {isRtl 
                  ? "به اولین سیستم بانکی متصل افغانستان و جهان بپیوندید. تمام فیلدها را با دقت و مطابق با اسناد قانونی خود پر کنید."
                  : "Join the first connected banking system for Afghanistan and the world. Fill all fields carefully."
                }
              </p>
              
              <div className="space-y-3 pt-4">
                {[
                  { id: 1, text: isRtl ? "تایید آنی هویت" : "Instant Identity Check" },
                  { id: 2, text: isRtl ? "دسترسی به حساب Multi-Currency" : "Multi-Currency Access" }
                ].map(item => (
                  <div key={item.id} className="flex items-center gap-2 text-zinc-400 text-xs font-bold">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-[1.2] w-full">
              <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* نام */}
                <div className="relative group">
                  <User className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="text" required placeholder={isRtl ? "نام" : "First Name"}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm"
                  />
                </div>
                {/* نام خانوادگی */}
                <div className="relative group">
                  <User className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="text" required placeholder={isRtl ? "نام خانوادگی" : "Last Name"}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm"
                  />
                </div>
                {/* ایمیل */}
                <div className="md:col-span-2 relative group">
                  <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="email" required placeholder="Email Address"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm"
                  />
                </div>
                {/* پسورد */}
                <div className="md:col-span-2 relative group">
                  <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="password" required placeholder="Password"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm"
                  />
                </div>

                {error && <p className="md:col-span-2 text-red-500 text-[10px] font-bold uppercase text-center">{error}</p>}

                <button 
                  type="submit" disabled={loading}
                  className="md:col-span-2 bg-white text-black font-black py-5 rounded-2xl hover:bg-amber-500 transition-all duration-500 flex items-center justify-center gap-3 group mt-2 shadow-xl shadow-white/5"
                >
                  <span className="uppercase tracking-widest text-xs">{loading ? 'Creating...' : 'Register Securely'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="text-center pt-6">
                <Link href={`/${lang}/user/login`} className="text-zinc-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-all">
                  Already a member? <span className="text-amber-500">Secure Login</span>
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}