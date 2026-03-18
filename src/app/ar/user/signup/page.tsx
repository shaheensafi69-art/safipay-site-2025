'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { createClientSideSupabase } from '@/lib/supabase';
import { User, Mail, Lock, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// قسم الجزيئات لمحاكاة الألعاب النارية
function ConfettiParticle({ color }: { color: string }) {
  const [position] = useState(() => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  ]);
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
      animate={{ 
        x: (Math.random() - 0.5) * 500, 
        y: (Math.random() - 0.5) * 500, 
        opacity: 0, 
        scale: Math.random() * 2 
      }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute w-2 h-2 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}

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
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<any>(null);

  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.split('/')[1] || 'fa';
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const supabase = createClientSideSupabase();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: { 
          data: { 
            first_name: formData.firstName, 
            last_name: formData.lastName 
          } 
        }
      });

      if (error) throw error;

      setShowSuccess(true);
      
      setTimeout(() => {
        router.push(`/${lang}/user/dashboard`);
      }, 2500);

    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col md:flex-row overflow-hidden relative" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* حركة النجاح */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-black/60"
          >
            {/* تأثير الألعاب النارية */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 50 }).map((_, i) => (
                <ConfettiParticle key={i} color={i % 2 === 0 ? '#f59e0b' : '#22c55e'} />
              ))}
            </div>

            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
              <div className="bg-zinc-900 border border-green-500/30 p-12 rounded-[4rem] flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <CheckCircle2 size={50} className="text-black" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">مرحباً بك في SafiPay</h2>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">جارٍ تأمين مستقبلك المالي...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* خلفية الكون */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
          <Stars radius={150} depth={50} count={5000} factor={6} fade speed={1.5} />
        </Canvas>
      </div>

      {/* قسم الكرة الدوارة */}
      <div className="hidden md:flex flex-[0.6] relative items-center justify-center z-10">
        <div className="w-[300px] h-[300px]">
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <MiniRotatingGlobe />
          </Canvas>
        </div>
      </div>

      {/* نموذج التسجيل */}
      <div className="flex-[1.4] flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[850px] bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className={`${isRtl ? 'absolute -bottom-32 -right-32' : 'absolute -bottom-32 -left-32'} w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]`} />
          
          <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
            <div className={`flex-1 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center gap-2 text-amber-500 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                <Sparkles size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">انضم إلى المستقبل</span>
              </div>
              <h1 className="text-4xl font-black tracking-tighter leading-none">
                إنشاء <br /> <span className="text-amber-500">حساب</span>
              </h1>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                {isRtl 
                  ? "انضم إلى أول نظام مصرفي متصل لأفغانستان والعالم. املأ جميع الحقول بعناية ووفقاً لوثائقك القانونية."
                  : "Join the first connected banking system for Afghanistan and the world. Fill all fields carefully."
                }
              </p>
            </div>

            <div className="flex-[1.2] w-full">
              <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="text"
                    required
                    placeholder={isRtl ? "الاسم الأول" : "First Name"}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    className={`w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm ${isRtl ? 'text-right' : 'text-left'}`}
                  />
                </div>
                <div className="relative group">
                  <User className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="text"
                    required
                    placeholder={isRtl ? "اسم العائلة" : "Last Name"}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    className={`w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm ${isRtl ? 'text-right' : 'text-left'}`}
                  />
                </div>
                <div className="md:col-span-2 relative group">
                  <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="email"
                    required
                    placeholder={isRtl ? "عنوان البريد الإلكتروني" : "Email Address"}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    dir="ltr"
                    className={`w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm text-left`}
                  />
                </div>
                <div className="md:col-span-2 relative group">
                  <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-5' : 'right-5'} text-zinc-600 group-focus-within:text-amber-500 w-4 h-4`} />
                  <input 
                    type="password"
                    required
                    placeholder={isRtl ? "كلمة المرور" : "Password"}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    dir="ltr"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 text-white font-bold text-sm text-left"
                  />
                </div>

                {error && <p className="md:col-span-2 text-red-500 text-[10px] font-bold uppercase text-center">{error}</p>}

                <button 
                  type="submit"
                  disabled={loading}
                  className="md:col-span-2 bg-white text-black font-black py-5 rounded-2xl hover:bg-amber-500 transition-all duration-500 flex items-center justify-center gap-3 group mt-2 shadow-xl shadow-white/5"
                >
                  <span className="uppercase tracking-widest text-xs">
                    {loading ? <Loader2 className="animate-spin" /> : 'تسجيل آمن'}
                  </span>
                  {!loading && (
                    isRtl ? (
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )
                  )}
                </button>
              </form>

              <div className="text-center pt-6">
                <Link href={`/${lang}/user/login`} className="text-zinc-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-all">
                  هل أنت عضو بالفعل؟ <span className="text-amber-500">تسجيل دخول آمن</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}