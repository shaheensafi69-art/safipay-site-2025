'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, User, Lock, Save, ChevronRight, Loader2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { createClientSideSupabase } from '@/lib/supabase';
import Select from 'react-select';

const countryOptions = [
  { value: 'Afghanistan', label: 'افغانستان' },
  { value: 'Albania', label: 'آلبانیا' },
  { value: 'Algeria', label: 'الجزایر' },
  { value: 'Andorra', label: 'آندورا' },
  { value: 'Angola', label: 'آنگولا' },
  { value: 'Antigua and Barbuda', label: 'آنتیگوا و باربودا' },
  { value: 'Argentina', label: 'آرژانتین' },
  { value: 'Armenia', label: 'ارمنستان' },
  { value: 'Australia', label: 'استرالیا' },
  { value: 'Austria', label: 'اتریش' },
  { value: 'Azerbaijan', label: 'آذربایجان' },
  { value: 'Bahamas', label: 'باهاما' },
  { value: 'Bahrain', label: 'بحرین' },
  { value: 'Bangladesh', label: 'بنگله‌دیش' },
  { value: 'Barbados', label: 'باربادوس' },
  { value: 'Belarus', label: 'بلاروس' },
  { value: 'Belgium', label: 'بلجیم' },
  { value: 'Belize', label: 'بلیز' },
  { value: 'Benin', label: 'بنین' },
  { value: 'Bhutan', label: 'بوتان' },
  { value: 'Bolivia', label: 'بولیویا' },
  { value: 'Bosnia and Herzegovina', label: 'بوسنیا و هرزگوینا' },
  { value: 'Botswana', label: 'بوتسوانا' },
  { value: 'Brazil', label: 'برازیل' },
  { value: 'Brunei', label: 'برونئی' },
  { value: 'Bulgaria', label: 'بلغاریا' },
  { value: 'Burkina Faso', label: 'بورکینافاسو' },
  { value: 'Burundi', label: 'بوروندی' },
  { value: 'Cabo Verde', label: 'کیپ ورد' },
  { value: 'Cambodia', label: 'کمبودیا' },
  { value: 'Cameroon', label: 'کامرون' },
  { value: 'Canada', label: 'کانادا' },
  { value: 'Central African Republic', label: 'جمهوری افریقای مرکزی' },
  { value: 'Chad', label: 'چاد' },
  { value: 'Chile', label: 'چیلی' },
  { value: 'China', label: 'چین' },
  { value: 'Colombia', label: 'کلمبیا' },
  { value: 'Comoros', label: 'کومور' },
  { value: 'Congo (Congo-Brazzaville)', label: 'کانگو' },
  { value: 'Costa Rica', label: 'کاستاریکا' },
  { value: 'Croatia', label: 'کرواسیا' },
  { value: 'Cuba', label: 'کوبا' },
  { value: 'Cyprus', label: 'قبرس' },
  { value: 'Czechia (Czech Republic)', label: 'جمهوری چک' },
  { value: 'Denmark', label: 'دنمارک' },
  { value: 'Djibouti', label: 'جیبوتی' },
  { value: 'Dominica', label: 'دومینیکا' },
  { value: 'Dominican Republic', label: 'جمهوری دومینیکن' },
  { value: 'Ecuador', label: 'اکوادور' },
  { value: 'Egypt', label: 'مصر' },
  { value: 'El Salvador', label: 'السالوادور' },
  { value: 'Equatorial Guinea', label: 'گینه استوایی' },
  { value: 'Eritrea', label: 'اریتره' },
  { value: 'Estonia', label: 'استونیا' },
  { value: 'Eswatini', label: 'اسواتینی' },
  { value: 'Ethiopia', label: 'اتیوپیا' },
  { value: 'Fiji', label: 'فیجی' },
  { value: 'Finland', label: 'فنلند' },
  { value: 'France', label: 'فرانسه' },
  { value: 'Gabon', label: 'گابن' },
  { value: 'Gambia', label: 'گامبیا' },
  { value: 'Georgia', label: 'گرجستان' },
  { value: 'Germany', label: 'آلمان' },
  { value: 'Ghana', label: 'غنا' },
  { value: 'Greece', label: 'یونان' },
  { value: 'Grenada', label: 'گرنادا' },
  { value: 'Guatemala', label: 'گواتمالا' },
  { value: 'Guinea', label: 'گینه' },
  { value: 'Guinea-Bissau', label: 'گینه بیسائو' },
  { value: 'Guyana', label: 'گویانا' },
  { value: 'Haiti', label: 'هایتی' },
  { value: 'Holy See', label: 'واتیکان' },
  { value: 'Honduras', label: 'هندوراس' },
  { value: 'Hungary', label: 'مجارستان' },
  { value: 'Iceland', label: 'آیسلند' },
  { value: 'India', label: 'هند' },
  { value: 'Indonesia', label: 'اندونیزیا' },
  { value: 'Iran', label: 'ایران' },
  { value: 'Iraq', label: 'عراق' },
  { value: 'Ireland', label: 'آیرلند' },
  { value: 'Israel', label: 'اسرائیل' },
  { value: 'Italy', label: 'ایتالیا' },
  { value: 'Ivory Coast', label: 'ساحل عاج' },
  { value: 'Jamaica', label: 'جامائیکا' },
  { value: 'Japan', label: 'جاپان' },
  { value: 'Jordan', label: 'اردن' },
  { value: 'Kazakhstan', label: 'قزاقستان' },
  { value: 'Kenya', label: 'کینیا' },
  { value: 'Kiribati', label: 'کیریباتی' },
  { value: 'Kuwait', label: 'کویت' },
  { value: 'Kyrgyzstan', label: 'قرغیزستان' },
  { value: 'Laos', label: 'لائوس' },
  { value: 'Latvia', label: 'لتونیا' },
  { value: 'Lebanon', label: 'لبنان' },
  { value: 'Lesotho', label: 'لسوتو' },
  { value: 'Liberia', label: 'لیبریا' },
  { value: 'Libya', label: 'لیبیا' },
  { value: 'Liechtenstein', label: 'لیختن‌اشتاین' },
  { value: 'Lithuania', label: 'لیتوانیا' },
  { value: 'Luxembourg', label: 'لوکزامبورگ' },
  { value: 'Madagascar', label: 'ماداگاسکار' },
  { value: 'Malawi', label: 'مالاوی' },
  { value: 'Malaysia', label: 'مالیزیا' },
  { value: 'Maldives', label: 'مالدیو' },
  { value: 'Mali', label: 'مالی' },
  { value: 'Malta', label: 'مالتا' },
  { value: 'Marshall Islands', label: 'جزایر مارشال' },
  { value: 'Mauritania', label: 'موریتانیا' },
  { value: 'Mauritius', label: 'موریس' },
  { value: 'Mexico', label: 'مکسیکو' },
  { value: 'Micronesia', label: 'میکرونزیا' },
  { value: 'Moldova', label: 'مولداوی' },
  { value: 'Monaco', label: 'موناکو' },
  { value: 'Mongolia', label: 'مغولستان' },
  { value: 'Montenegro', label: 'مونته‌نگرو' },
  { value: 'Morocco', label: 'مراکش' },
  { value: 'Mozambique', label: 'موزامبیک' },
  { value: 'Myanmar (Burma)', label: 'میانمار' },
  { value: 'Namibia', label: 'نامیبیا' },
  { value: 'Nauru', label: 'نائورو' },
  { value: 'Nepal', label: 'نیپال' },
  { value: 'Netherlands', label: 'هالند' },
  { value: 'New Zealand', label: 'نیوزیلند' },
  { value: 'Nicaragua', label: 'نیکاراگوا' },
  { value: 'Niger', label: 'نیجر' },
  { value: 'Nigeria', label: 'نیجریه' },
  { value: 'North Korea', label: 'کوریای شمالی' },
  { value: 'North Macedonia', label: 'مقدونیه شمالی' },
  { value: 'Norway', label: 'ناروی' },
  { value: 'Oman', label: 'عمان' },
  { value: 'Pakistan', label: 'پاکستان' },
  { value: 'Palau', label: 'پالائو' },
  { value: 'Palestine State', label: 'فلسطین' },
  { value: 'Panama', label: 'پاناما' },
  { value: 'Papua New Guinea', label: 'پاپوا گینه نو' },
  { value: 'Paraguay', label: 'پاراگوئه' },
  { value: 'Peru', label: 'پیرو' },
  { value: 'Philippines', label: 'فلیپین' },
  { value: 'Poland', label: 'پولند' },
  { value: 'Portugal', label: 'پرتگال' },
  { value: 'Qatar', label: 'قطر' },
  { value: 'Romania', label: 'رومانی' },
  { value: 'Russia', label: 'روسیه' },
  { value: 'Rwanda', label: 'رواندا' },
  { value: 'Saint Kitts and Nevis', label: 'سنت کیتس و نویس' },
  { value: 'Saint Lucia', label: 'سنت لوسیا' },
  { value: 'Saint Vincent and the Grenadines', label: 'سنت وینسنت و گرنادین‌ها' },
  { value: 'Samoa', label: 'ساموآ' },
  { value: 'San Marino', label: 'سان مارینو' },
  { value: 'Sao Tome and Principe', label: 'سائوتومه و پرنسیپ' },
  { value: 'Saudi Arabia', label: 'عربستان سعودی' },
  { value: 'Senegal', label: 'سینگال' },
  { value: 'Serbia', label: 'صربستان' },
  { value: 'Seychelles', label: 'سیشل' },
  { value: 'Sierra Leone', label: 'سیرا لئون' },
  { value: 'Singapore', label: 'سنگاپور' },
  { value: 'Slovakia', label: 'سلواکیا' },
  { value: 'Slovenia', label: 'سلوانیا' },
  { value: 'Solomon Islands', label: 'جزایر سلیمان' },
  { value: 'Somalia', label: 'سومالیا' },
  { value: 'South Africa', label: 'افریقای جنوبی' },
  { value: 'South Korea', label: 'کوریای جنوبی' },
  { value: 'South Sudan', label: 'سودان جنوبی' },
  { value: 'Spain', label: 'اسپانیا' },
  { value: 'Sri Lanka', label: 'سریلانکا' },
  { value: 'Sudan', label: 'سودان' },
  { value: 'Suriname', label: 'سورینام' },
  { value: 'Sweden', label: 'سویدن' },
  { value: 'Switzerland', label: 'سوئیس' },
  { value: 'Syria', label: 'سوریه' },
  { value: 'Taiwan', label: 'تایوان' },
  { value: 'Tajikistan', label: 'تاجیکستان' },
  { value: 'Tanzania', label: 'تانزانیا' },
  { value: 'Thailand', label: 'تایلند' },
  { value: 'Timor-Leste', label: 'تیمور شرقی' },
  { value: 'Togo', label: 'توگو' },
  { value: 'Tonga', label: 'تونگا' },
  { value: 'Trinidad and Tobago', label: 'ترینیداد و توباگو' },
  { value: 'Tunisia', label: 'تونس' },
  { value: 'Turkey', label: 'ترکیه' },
  { value: 'Turkmenistan', label: 'ترکمنستان' },
  { value: 'Tuvalu', label: 'تووالو' },
  { value: 'Uganda', label: 'اوگاندا' },
  { value: 'Ukraine', label: 'اوکراین' },
  { value: 'United Arab Emirates', label: 'امارات متحده عربی' },
  { value: 'United Kingdom', label: 'بریتانیا' },
  { value: 'United States of America', label: 'ایالات متحده امریکا' },
  { value: 'Uruguay', label: 'یوروگوئه' },
  { value: 'Uzbekistan', label: 'ازبکستان' },
  { value: 'Vanuatu', label: 'وانواتو' },
  { value: 'Venezuela', label: 'ونزوئلا' },
  { value: 'Vietnam', label: 'ویتنام' },
  { value: 'Yemen', label: 'یمن' },
  { value: 'Zambia', label: 'زامبیا' },
  { value: 'Zimbabwe', label: 'زیمبابوه' }
];

export default function EditProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  // استفاده ایمن از پارامترها در سمت کلاینت
  const locale = params?.locale || 'fa';
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
      zIndex: 100,
      textAlign: 'right' as const
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f59e0b' : 'transparent',
      color: state.isFocused ? 'black' : 'white',
      cursor: 'pointer',
      padding: '12px 20px',
      fontSize: '14px',
      textAlign: 'right' as const,
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

      setStatus({ type: 'success', msg: 'مشخصات با موفقیت به‌روزرسانی شد' });
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
      setStatus({ type: 'success', msg: 'عکس با موفقیت همگام‌سازی شد' });
    } catch (error: any) {
      setStatus({ type: 'error', msg: 'آپلود موفق نشد' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <Link href={`/${locale}/user/dashboard`} className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-all group">
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-black text-[10px] uppercase tracking-[0.2em]">داشبورد</span>
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
                    <Image src={user.user_metadata.avatar_url} alt="کاربر SafiPay" fill className="object-cover" />
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
            <form onSubmit={handleUpdate} className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-8 lg:p-12 backdrop-blur-3xl shadow-2xl text-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">نام</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none text-right"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">تخلص</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">شماره تلفن</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    dir="ltr"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none text-left"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">کشور</label>
                  <Select
                    options={countryOptions}
                    styles={customSelectStyles}
                    isRtl={true}
                    value={countryOptions.find(c => c.value === formData.country)}
                    onChange={(val: any) => setFormData({...formData, country: val.value})}
                    placeholder="انتخاب کنید..."
                  />
                </div>
              </div>

              <div className="mb-12">
                <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">ایمیل ثبت‌شده</label>
                <div className="relative mt-3">
                  <input
                    type="text"
                    value={user?.email || ''}
                    disabled
                    dir="ltr"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-600 cursor-not-allowed text-left"
                  />
                  <Lock size={14} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-800" />
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl shadow-amber-500/10">
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={18} /> همگام‌سازی با دیتابیس SafiPay</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}