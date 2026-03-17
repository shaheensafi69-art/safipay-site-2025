'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, User, Lock, Save, ChevronLeft, Loader2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { createClientSideSupabase } from '@/lib/supabase';
import Select from 'react-select';

const countryOptions = [
  { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Germany', label: 'Germany' },
  { value: 'United States', label: 'United States' },
  { value: 'Canada', label: 'Canada' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'Poland', label: 'Poland' },
];

export default function EditProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  // استفاده ایمن از پارامترها در سمت کلاینت
  const locale = params?.locale || 'en';
  const supabase = createClientSideSupabase();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
  });

  const customSelectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderColor: state.isFocused ? '#f59e0b' : 'rgba(255, 255, 255, 0.1)',
      borderRadius: '1.25rem',
      padding: '0.5rem',
      color: 'white',
      boxShadow: 'none',
      '&:hover': { borderColor: '#f59e0b' }
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: '#0a0a0a',
      borderRadius: '1.25rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      zIndex: 100
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f59e0b' : 'transparent',
      color: state.isFocused ? 'black' : 'white',
      cursor: 'pointer',
      padding: '12px 20px',
      fontSize: '14px',
      '&:active': { backgroundColor: '#f59e0b' }
    }),
    singleValue: (base: any) => ({ ...base, color: 'white', fontWeight: '600' }),
    input: (base: any) => ({ ...base, color: 'white' }),
    placeholder: (base: any) => ({ ...base, color: '#52525b' })
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (authUser) {
        setUser(authUser);
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', authUser.id)
          .single();

        if (profile) {
          const names = profile.full_name?.split(' ') || [];
          setFormData({
            firstName: names[0] || '',
            lastName: names.slice(1).join(' ') || '',
            phone: profile.phone_number || '',
            country: profile.country || '',
          });
        }
      }
    };
    fetchUserData();
  }, [supabase]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      
      const { error: dbError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: fullName,
          phone_number: formData.phone,
          country: formData.country,
          updated_at: new Date().toISOString(),
        });

      if (dbError) throw dbError;
      
      await supabase.auth.updateUser({
        data: { first_name: formData.firstName, last_name: formData.lastName }
      });

      setStatus({ type: 'success', msg: 'Identity Updated Successfully' });
    } catch (error: any) {
      setStatus({ type: 'error', msg: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) return;
      const file = event.target.files[0];
      const filePath = `${user.id}/avatar-${Date.now()}.${file.name.split('.').pop()}`;

      const { error: uploadError } = await supabase.storage.from('profiles').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from('profiles').getPublicUrl(filePath);

      await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id);
      await supabase.auth.updateUser({ data: { avatar_url: publicUrl } });

      setUser({ ...user, user_metadata: { ...user.user_metadata, avatar_url: publicUrl } });
      setStatus({ type: 'success', msg: 'Photo Synchronized' });
    } catch (error: any) {
      setStatus({ type: 'error', msg: 'Upload failed' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <Link href={`/${locale}/user/dashboard`} className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-all group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-black text-[10px] uppercase tracking-[0.2em]">Dashboard</span>
          </Link>
          
          <AnimatePresence>
            {status && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className={`px-5 py-3 rounded-2xl border text-[10px] font-black uppercase tracking-widest flex items-center gap-3 ${status.type === 'success' ? 'bg-amber-500/10 border-amber-500/40 text-amber-500' : 'bg-red-500/10 border-red-500/40 text-red-500'}`}>
                {status.type === 'success' ? <CheckCircle2 size={16} /> : <div className="w-2 h-2 bg-red-500 rounded-full" />}
                {status.msg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center backdrop-blur-3xl shadow-2xl">
              <div className="relative group cursor-pointer mb-8" onClick={() => fileInputRef.current?.click()}>
                <div className="absolute -inset-3 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition duration-500" />
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-amber-500/30 bg-zinc-800">
                  {user?.user_metadata?.avatar_url ? (
                    <Image src={user.user_metadata.avatar_url} alt="SafiPay User" fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600"><User size={60} /></div>
                  )}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {uploading ? <Loader2 className="animate-spin text-amber-500" /> : <Camera className="text-amber-500" />}
                  </div>
                </div>
              </div>
              <h2 className="font-black italic uppercase tracking-tighter text-xl">SafiPay <span className="text-amber-500">ID</span></h2>
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} hidden accept="image/*" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleUpdate} className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-8 lg:p-12 backdrop-blur-3xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">First Name</label>
                  <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Phone</label>
                  <input type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Country</label>
                  <Select
                    options={countryOptions}
                    styles={customSelectStyles}
                    value={countryOptions.find(c => c.value === formData.country)}
                    onChange={(val: any) => setFormData({...formData, country: val.value})}
                    placeholder="Select..."
                  />
                </div>
              </div>

              <div className="mb-12">
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Registered Email</label>
                <div className="relative mt-3">
                  <input type="text" value={user?.email || ''} disabled className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-600 cursor-not-allowed" />
                  <Lock size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800" />
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl shadow-amber-500/10">
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={18} /> Sync with SafiPay Database</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}