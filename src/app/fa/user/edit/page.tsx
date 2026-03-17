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
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' },
  { value: 'Andorra', label: 'Andorra' },
  { value: 'Angola', label: 'Angola' },
  { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Armenia', label: 'Armenia' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Austria', label: 'Austria' },
  { value: 'Azerbaijan', label: 'Azerbaijan' },
  { value: 'Bahamas', label: 'Bahamas' },
  { value: 'Bahrain', label: 'Bahrain' },
  { value: 'Bangladesh', label: 'Bangladesh' },
  { value: 'Barbados', label: 'Barbados' },
  { value: 'Belarus', label: 'Belarus' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Belize', label: 'Belize' },
  { value: 'Benin', label: 'Benin' },
  { value: 'Bhutan', label: 'Bhutan' },
  { value: 'Bolivia', label: 'Bolivia' },
  { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
  { value: 'Botswana', label: 'Botswana' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Brunei', label: 'Brunei' },
  { value: 'Bulgaria', label: 'Bulgaria' },
  { value: 'Burkina Faso', label: 'Burkina Faso' },
  { value: 'Burundi', label: 'Burundi' },
  { value: 'Cabo Verde', label: 'Cabo Verde' },
  { value: 'Cambodia', label: 'Cambodia' },
  { value: 'Cameroon', label: 'Cameroon' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Central African Republic', label: 'Central African Republic' },
  { value: 'Chad', label: 'Chad' },
  { value: 'Chile', label: 'Chile' },
  { value: 'China', label: 'China' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'Comoros', label: 'Comoros' },
  { value: 'Congo (Congo-Brazzaville)', label: 'Congo (Congo-Brazzaville)' },
  { value: 'Costa Rica', label: 'Costa Rica' },
  { value: 'Croatia', label: 'Croatia' },
  { value: 'Cuba', label: 'Cuba' },
  { value: 'Cyprus', label: 'Cyprus' },
  { value: 'Czechia (Czech Republic)', label: 'Czechia (Czech Republic)' },
  { value: 'Denmark', label: 'Denmark' },
  { value: 'Djibouti', label: 'Djibouti' },
  { value: 'Dominica', label: 'Dominica' },
  { value: 'Dominican Republic', label: 'Dominican Republic' },
  { value: 'Ecuador', label: 'Ecuador' },
  { value: 'Egypt', label: 'Egypt' },
  { value: 'El Salvador', label: 'El Salvador' },
  { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
  { value: 'Eritrea', label: 'Eritrea' },
  { value: 'Estonia', label: 'Estonia' },
  { value: 'Eswatini', label: 'Eswatini' },
  { value: 'Ethiopia', label: 'Ethiopia' },
  { value: 'Fiji', label: 'Fiji' },
  { value: 'Finland', label: 'Finland' },
  { value: 'France', label: 'France' },
  { value: 'Gabon', label: 'Gabon' },
  { value: 'Gambia', label: 'Gambia' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Greece', label: 'Greece' },
  { value: 'Grenada', label: 'Grenada' },
  { value: 'Guatemala', label: 'Guatemala' },
  { value: 'Guinea', label: 'Guinea' },
  { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
  { value: 'Guyana', label: 'Guyana' },
  { value: 'Haiti', label: 'Haiti' },
  { value: 'Holy See', label: 'Holy See' },
  { value: 'Honduras', label: 'Honduras' },
  { value: 'Hungary', label: 'Hungary' },
  { value: 'Iceland', label: 'Iceland' },
  { value: 'India', label: 'India' },
  { value: 'Indonesia', label: 'Indonesia' },
  { value: 'Iran', label: 'Iran' },
  { value: 'Iraq', label: 'Iraq' },
  { value: 'Ireland', label: 'Ireland' },
  { value: 'Israel', label: 'Israel' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Ivory Coast', label: 'Ivory Coast' },
  { value: 'Jamaica', label: 'Jamaica' },
  { value: 'Japan', label: 'Japan' },
  { value: 'Jordan', label: 'Jordan' },
  { value: 'Kazakhstan', label: 'Kazakhstan' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'Kiribati', label: 'Kiribati' },
  { value: 'Kuwait', label: 'Kuwait' },
  { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
  { value: 'Laos', label: 'Laos' },
  { value: 'Latvia', label: 'Latvia' },
  { value: 'Lebanon', label: 'Lebanon' },
  { value: 'Lesotho', label: 'Lesotho' },
  { value: 'Liberia', label: 'Liberia' },
  { value: 'Libya', label: 'Libya' },
  { value: 'Liechtenstein', label: 'Liechtenstein' },
  { value: 'Lithuania', label: 'Lithuania' },
  { value: 'Luxembourg', label: 'Luxembourg' },
  { value: 'Madagascar', label: 'Madagascar' },
  { value: 'Malawi', label: 'Malawi' },
  { value: 'Malaysia', label: 'Malaysia' },
  { value: 'Maldives', label: 'Maldives' },
  { value: 'Mali', label: 'Mali' },
  { value: 'Malta', label: 'Malta' },
  { value: 'Marshall Islands', label: 'Marshall Islands' },
  { value: 'Mauritania', label: 'Mauritania' },
  { value: 'Mauritius', label: 'Mauritius' },
  { value: 'Mexico', label: 'Mexico' },
  { value: 'Micronesia', label: 'Micronesia' },
  { value: 'Moldova', label: 'Moldova' },
  { value: 'Monaco', label: 'Monaco' },
  { value: 'Mongolia', label: 'Mongolia' },
  { value: 'Montenegro', label: 'Montenegro' },
  { value: 'Morocco', label: 'Morocco' },
  { value: 'Mozambique', label: 'Mozambique' },
  { value: 'Myanmar (Burma)', label: 'Myanmar (Burma)' },
  { value: 'Namibia', label: 'Namibia' },
  { value: 'Nauru', label: 'Nauru' },
  { value: 'Nepal', label: 'Nepal' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'New Zealand', label: 'New Zealand' },
  { value: 'Nicaragua', label: 'Nicaragua' },
  { value: 'Niger', label: 'Niger' },
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'North Korea', label: 'North Korea' },
  { value: 'North Macedonia', label: 'North Macedonia' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Oman', label: 'Oman' },
  { value: 'Pakistan', label: 'Pakistan' },
  { value: 'Palau', label: 'Palau' },
  { value: 'Palestine State', label: 'Palestine State' },
  { value: 'Panama', label: 'Panama' },
  { value: 'Papua New Guinea', label: 'Papua New Guinea' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'Peru', label: 'Peru' },
  { value: 'Philippines', label: 'Philippines' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Portugal', label: 'Portugal' },
  { value: 'Qatar', label: 'Qatar' },
  { value: 'Romania', label: 'Romania' },
  { value: 'Russia', label: 'Russia' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
  { value: 'Saint Lucia', label: 'Saint Lucia' },
  { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
  { value: 'Samoa', label: 'Samoa' },
  { value: 'San Marino', label: 'San Marino' },
  { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia' },
  { value: 'Senegal', label: 'Senegal' },
  { value: 'Serbia', label: 'Serbia' },
  { value: 'Seychelles', label: 'Seychelles' },
  { value: 'Sierra Leone', label: 'Sierra Leone' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Slovakia', label: 'Slovakia' },
  { value: 'Slovenia', label: 'Slovenia' },
  { value: 'Solomon Islands', label: 'Solomon Islands' },
  { value: 'Somalia', label: 'Somalia' },
  { value: 'South Africa', label: 'South Africa' },
  { value: 'South Korea', label: 'South Korea' },
  { value: 'South Sudan', label: 'South Sudan' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Sri Lanka', label: 'Sri Lanka' },
  { value: 'Sudan', label: 'Sudan' },
  { value: 'Suriname', label: 'Suriname' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Switzerland', label: 'Switzerland' },
  { value: 'Syria', label: 'Syria' },
  { value: 'Taiwan', label: 'Taiwan' },
  { value: 'Tajikistan', label: 'Tajikistan' },
  { value: 'Tanzania', label: 'Tanzania' },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Timor-Leste', label: 'Timor-Leste' },
  { value: 'Togo', label: 'Togo' },
  { value: 'Tonga', label: 'Tonga' },
  { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
  { value: 'Tunisia', label: 'Tunisia' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'Turkmenistan', label: 'Turkmenistan' },
  { value: 'Tuvalu', label: 'Tuvalu' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'United States of America', label: 'United States of America' },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Uzbekistan', label: 'Uzbekistan' },
  { value: 'Vanuatu', label: 'Vanuatu' },
  { value: 'Venezuela', label: 'Venezuela' },
  { value: 'Vietnam', label: 'Vietnam' },
  { value: 'Yemen', label: 'Yemen' },
  { value: 'Zambia', label: 'Zambia' },
  { value: 'Zimbabwe', label: 'Zimbabwe' }
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