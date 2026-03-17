'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, User, Mail, Phone, Lock, 
  Save, ChevronLeft, ShieldCheck, Loader2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { createClientSideSupabase } from '@/lib/supabase';

export default function EditProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const locale = params.locale || 'en';
  const supabase = createClientSideSupabase();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setFormData({
          firstName: user.user_metadata?.first_name || '',
          lastName: user.user_metadata?.last_name || '',
          phone: user.user_metadata?.phone || '',
        });
      }
    };
    fetchUser();
  }, [supabase]);

  // --- Handle Real-time Profile Update ---
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    const { error } = await supabase.auth.updateUser({
      data: { 
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone 
      }
    });

    if (!error) {
      setStatus({ type: 'success', msg: 'Profile updated successfully!' });
    } else {
      setStatus({ type: 'error', msg: error.message });
    }
    setLoading(false);
  };

  // --- Handle Instant Image Upload ---
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) return;
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Math.random()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('profiles') // Make sure you have a bucket named 'profiles'
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profiles')
        .getPublicUrl(filePath);

      // 3. Update User Metadata (Database)
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });

      if (updateError) throw updateError;

      // Update Local State
      setUser({ ...user, user_metadata: { ...user.user_metadata, avatar_url: publicUrl } });
      setStatus({ type: 'success', msg: 'Photo updated instantly!' });

    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link href={`/${locale}/user/dashboard`} className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-all mb-4 group">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-black text-[10px] uppercase tracking-[0.2em]">Back to Dashboard</span>
            </Link>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">
              Edit <span className="text-amber-500">Profile</span>
            </h1>
          </div>
          
          {status && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} 
              className={`px-6 py-3 rounded-2xl flex items-center gap-3 border ${status.type === 'success' ? 'bg-amber-500/10 border-amber-500/50 text-amber-500' : 'bg-red-500/10 border-red-500/50 text-red-500'}`}>
              <CheckCircle2 size={20} />
              <span className="text-xs font-black uppercase tracking-widest">{status.msg}</span>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Avatar Section */}
          <div className="lg:col-span-4">
            <motion.div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center text-center backdrop-blur-3xl">
              <div 
                className="relative group cursor-pointer mb-6"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-600 to-yellow-200 rounded-full opacity-30 blur-md group-hover:opacity-60 transition duration-500" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-black bg-zinc-800 shadow-2xl">
                  {user?.user_metadata?.avatar_url ? (
                    <Image src={user.user_metadata.avatar_url} alt="Profile" fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700">
                      <User size={60} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                    {uploading ? <Loader2 className="animate-spin text-amber-500" size={32} /> : <Camera size={32} className="text-amber-500" />}
                  </div>
                </div>
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
              <h2 className="font-black text-xl uppercase tracking-tighter italic">Personal Identity</h2>
              <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-[0.2em]">Click photo to change</p>
            </motion.div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-8">
            <motion.form onSubmit={handleUpdate} className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl backdrop-blur-3xl">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-10 flex items-center gap-3 italic">
                Account Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">First Name</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Last Name</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Official Email (Locked)</label>
                  <div className="relative">
                    <input type="email" value={user?.email || ''} disabled className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-600 cursor-not-allowed" />
                    <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-800" size={16} />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Phone Number</label>
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+44 000 000 000"
                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-5 rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[11px]"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={18} /> Update Database</>}
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
}