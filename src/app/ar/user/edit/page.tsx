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
  { value: 'Afghanistan', label: 'أفغانستان' },
  { value: 'Albania', label: 'ألبانيا' },
  { value: 'Algeria', label: 'الجزائر' },
  { value: 'Andorra', label: 'أندورا' },
  { value: 'Angola', label: 'أنغولا' },
  { value: 'Antigua and Barbuda', label: 'أنتيغوا وباربودا' },
  { value: 'Argentina', label: 'الأرجنتين' },
  { value: 'Armenia', label: 'أرمينيا' },
  { value: 'Australia', label: 'أستراليا' },
  { value: 'Austria', label: 'النمسا' },
  { value: 'Azerbaijan', label: 'أذربيجان' },
  { value: 'Bahamas', label: 'الباهاما' },
  { value: 'Bahrain', label: 'البحرين' },
  { value: 'Bangladesh', label: 'بنغلاديش' },
  { value: 'Barbados', label: 'باربادوس' },
  { value: 'Belarus', label: 'بيلاروسيا' },
  { value: 'Belgium', label: 'بلجيكا' },
  { value: 'Belize', label: 'بليز' },
  { value: 'Benin', label: 'بنين' },
  { value: 'Bhutan', label: 'بوتان' },
  { value: 'Bolivia', label: 'بوليفيا' },
  { value: 'Bosnia and Herzegovina', label: 'البوسنة والهرسك' },
  { value: 'Botswana', label: 'بوتسوانا' },
  { value: 'Brazil', label: 'البرازيل' },
  { value: 'Brunei', label: 'بروناي' },
  { value: 'Bulgaria', label: 'بلغاريا' },
  { value: 'Burkina Faso', label: 'بوركينا فاسو' },
  { value: 'Burundi', label: 'بوروندي' },
  { value: 'Cabo Verde', label: 'الرأس الأخضر' },
  { value: 'Cambodia', label: 'كمبوديا' },
  { value: 'Cameroon', label: 'الكاميرون' },
  { value: 'Canada', label: 'كندا' },
  { value: 'Central African Republic', label: 'جمهورية أفريقيا الوسطى' },
  { value: 'Chad', label: 'تشاد' },
  { value: 'Chile', label: 'تشيلي' },
  { value: 'China', label: 'الصين' },
  { value: 'Colombia', label: 'كولومبيا' },
  { value: 'Comoros', label: 'جزر القمر' },
  { value: 'Congo (Congo-Brazzaville)', label: 'الكونغو' },
  { value: 'Costa Rica', label: 'كوستاريكا' },
  { value: 'Croatia', label: 'كرواتيا' },
  { value: 'Cuba', label: 'كوبا' },
  { value: 'Cyprus', label: 'قبرص' },
  { value: 'Czechia (Czech Republic)', label: 'جمهورية التشيك' },
  { value: 'Denmark', label: 'الدنمارك' },
  { value: 'Djibouti', label: 'جيبوتي' },
  { value: 'Dominica', label: 'دومينيكا' },
  { value: 'Dominican Republic', label: 'جمهورية الدومينيكان' },
  { value: 'Ecuador', label: 'الإكوادور' },
  { value: 'Egypt', label: 'مصر' },
  { value: 'El Salvador', label: 'السلفادور' },
  { value: 'Equatorial Guinea', label: 'غينيا الاستوائية' },
  { value: 'Eritrea', label: 'إريتريا' },
  { value: 'Estonia', label: 'إستونيا' },
  { value: 'Eswatini', label: 'إسواتيني' },
  { value: 'Ethiopia', label: 'إثيوبيا' },
  { value: 'Fiji', label: 'فيجي' },
  { value: 'Finland', label: 'فنلندا' },
  { value: 'France', label: 'فرنسا' },
  { value: 'Gabon', label: 'الغابون' },
  { value: 'Gambia', label: 'غامبيا' },
  { value: 'Georgia', label: 'جورجيا' },
  { value: 'Germany', label: 'ألمانيا' },
  { value: 'Ghana', label: 'غانا' },
  { value: 'Greece', label: 'اليونان' },
  { value: 'Grenada', label: 'غرينادا' },
  { value: 'Guatemala', label: 'غواتيمالا' },
  { value: 'Guinea', label: 'غينيا' },
  { value: 'Guinea-Bissau', label: 'غينيا بيساو' },
  { value: 'Guyana', label: 'غيانا' },
  { value: 'Haiti', label: 'هايتي' },
  { value: 'Holy See', label: 'الفاتيكان' },
  { value: 'Honduras', label: 'هندوراس' },
  { value: 'Hungary', label: 'المجر' },
  { value: 'Iceland', label: 'آيسلندا' },
  { value: 'India', label: 'الهند' },
  { value: 'Indonesia', label: 'إندونيسيا' },
  { value: 'Iran', label: 'إيران' },
  { value: 'Iraq', label: 'العراق' },
  { value: 'Ireland', label: 'إيرلندا' },
  { value: 'Israel', label: 'إسرائيل' },
  { value: 'Italy', label: 'إيطاليا' },
  { value: 'Ivory Coast', label: 'ساحل العاج' },
  { value: 'Jamaica', label: 'جامايكا' },
  { value: 'Japan', label: 'اليابان' },
  { value: 'Jordan', label: 'الأردن' },
  { value: 'Kazakhstan', label: 'كازاخستان' },
  { value: 'Kenya', label: 'كينيا' },
  { value: 'Kiribati', label: 'كيريباتي' },
  { value: 'Kuwait', label: 'الكويت' },
  { value: 'Kyrgyzstan', label: 'قيرغيزستان' },
  { value: 'Laos', label: 'لاوس' },
  { value: 'Latvia', label: 'لاتفيا' },
  { value: 'Lebanon', label: 'لبنان' },
  { value: 'Lesotho', label: 'ليسوتو' },
  { value: 'Liberia', label: 'ليبيريا' },
  { value: 'Libya', label: 'ليبيا' },
  { value: 'Liechtenstein', label: 'ليختنشتاين' },
  { value: 'Lithuania', label: 'ليتوانيا' },
  { value: 'Luxembourg', label: 'لوكسمبورغ' },
  { value: 'Madagascar', label: 'مدغشقر' },
  { value: 'Malawi', label: 'مالاوي' },
  { value: 'Malaysia', label: 'ماليزيا' },
  { value: 'Maldives', label: 'المالديف' },
  { value: 'Mali', label: 'مالي' },
  { value: 'Malta', label: 'مالطا' },
  { value: 'Marshall Islands', label: 'جزر مارشال' },
  { value: 'Mauritania', label: 'موريتانيا' },
  { value: 'Mauritius', label: 'موريشيوس' },
  { value: 'Mexico', label: 'المكسيك' },
  { value: 'Micronesia', label: 'ميكرونيزيا' },
  { value: 'Moldova', label: 'مولدوفا' },
  { value: 'Monaco', label: 'موناكو' },
  { value: 'Mongolia', label: 'منغوليا' },
  { value: 'Montenegro', label: 'مونتينيغرو' },
  { value: 'Morocco', label: 'المغرب' },
  { value: 'Mozambique', label: 'موزمبيق' },
  { value: 'Myanmar (Burma)', label: 'ميانمار' },
  { value: 'Namibia', label: 'ناميبيا' },
  { value: 'Nauru', label: 'ناورو' },
  { value: 'Nepal', label: 'نيبال' },
  { value: 'Netherlands', label: 'هولندا' },
  { value: 'New Zealand', label: 'نيوزيلندا' },
  { value: 'Nicaragua', label: 'نيكاراغوا' },
  { value: 'Niger', label: 'النيجر' },
  { value: 'Nigeria', label: 'نيجيريا' },
  { value: 'North Korea', label: 'كوريا الشمالية' },
  { value: 'North Macedonia', label: 'مقدونيا الشمالية' },
  { value: 'Norway', label: 'النرويج' },
  { value: 'Oman', label: 'عُمان' },
  { value: 'Pakistan', label: 'باكستان' },
  { value: 'Palau', label: 'بالاو' },
  { value: 'Palestine State', label: 'فلسطين' },
  { value: 'Panama', label: 'بنما' },
  { value: 'Papua New Guinea', label: 'بابوا غينيا الجديدة' },
  { value: 'Paraguay', label: 'باراغواي' },
  { value: 'Peru', label: 'بيرو' },
  { value: 'Philippines', label: 'الفلبين' },
  { value: 'Poland', label: 'بولندا' },
  { value: 'Portugal', label: 'البرتغال' },
  { value: 'Qatar', label: 'قطر' },
  { value: 'Romania', label: 'رومانيا' },
  { value: 'Russia', label: 'روسيا' },
  { value: 'Rwanda', label: 'رواندا' },
  { value: 'Saint Kitts and Nevis', label: 'سانت كيتس ونيفيس' },
  { value: 'Saint Lucia', label: 'سانت لوسيا' },
  { value: 'Saint Vincent and the Grenadines', label: 'سانت فنسنت والغرينادين' },
  { value: 'Samoa', label: 'ساموا' },
  { value: 'San Marino', label: 'سان مارينو' },
  { value: 'Sao Tome and Principe', label: 'ساو تومي وبرينسيب' },
  { value: 'Saudi Arabia', label: 'المملكة العربية السعودية' },
  { value: 'Senegal', label: 'السنغال' },
  { value: 'Serbia', label: 'صربيا' },
  { value: 'Seychelles', label: 'سيشل' },
  { value: 'Sierra Leone', label: 'سيراليون' },
  { value: 'Singapore', label: 'سنغافورة' },
  { value: 'Slovakia', label: 'سلوفاكيا' },
  { value: 'Slovenia', label: 'سلوفينيا' },
  { value: 'Solomon Islands', label: 'جزر سليمان' },
  { value: 'Somalia', label: 'الصومال' },
  { value: 'South Africa', label: 'جنوب أفريقيا' },
  { value: 'South Korea', label: 'كوريا الجنوبية' },
  { value: 'South Sudan', label: 'جنوب السودان' },
  { value: 'Spain', label: 'إسبانيا' },
  { value: 'Sri Lanka', label: 'سريلانكا' },
  { value: 'Sudan', label: 'السودان' },
  { value: 'Suriname', label: 'سورينام' },
  { value: 'Sweden', label: 'السويد' },
  { value: 'Switzerland', label: 'سويسرا' },
  { value: 'Syria', label: 'سوريا' },
  { value: 'Taiwan', label: 'تايوان' },
  { value: 'Tajikistan', label: 'طاجيكستان' },
  { value: 'Tanzania', label: 'تنزانيا' },
  { value: 'Thailand', label: 'تايلاند' },
  { value: 'Timor-Leste', label: 'تيمور الشرقية' },
  { value: 'Togo', label: 'توغو' },
  { value: 'Tonga', label: 'تونغا' },
  { value: 'Trinidad and Tobago', label: 'ترينيداد وتوباغو' },
  { value: 'Tunisia', label: 'تونس' },
  { value: 'Turkey', label: 'تركيا' },
  { value: 'Turkmenistan', label: 'تركمانستان' },
  { value: 'Tuvalu', label: 'توفالو' },
  { value: 'Uganda', label: 'أوغندا' },
  { value: 'Ukraine', label: 'أوكرانيا' },
  { value: 'United Arab Emirates', label: 'الإمارات العربية المتحدة' },
  { value: 'United Kingdom', label: 'المملكة المتحدة' },
  { value: 'United States of America', label: 'الولايات المتحدة الأمريكية' },
  { value: 'Uruguay', label: 'أوروغواي' },
  { value: 'Uzbekistan', label: 'أوزبكستان' },
  { value: 'Vanuatu', label: 'فانواتو' },
  { value: 'Venezuela', label: 'فنزويلا' },
  { value: 'Vietnam', label: 'فيتنام' },
  { value: 'Yemen', label: 'اليمن' },
  { value: 'Zambia', label: 'زامبيا' },
  { value: 'Zimbabwe', label: 'زيمبابوي' }
];

export default function EditProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  // استخدام آمن للبارامترات في جهة العميل
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

      setStatus({ type: 'success', msg: 'تم تحديث البيانات بنجاح' });
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
      setStatus({ type: 'success', msg: 'تمت مزامنة الصورة بنجاح' });
    } catch (error: any) {
      setStatus({ type: 'error', msg: 'فشل رفع الصورة' });
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
            <span className="font-black text-[10px] uppercase tracking-[0.2em]">لوحة التحكم</span>
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
                    <Image src={user.user_metadata.avatar_url} alt="مستخدم SafiPay" fill className="object-cover" />
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
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">الاسم الأول</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none text-right"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">اسم العائلة</label>
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
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">رقم الهاتف</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    dir="ltr"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none text-left"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">الدولة</label>
                  <Select
                    options={countryOptions}
                    styles={customSelectStyles}
                    isRtl={true}
                    value={countryOptions.find(c => c.value === formData.country)}
                    onChange={(val: any) => setFormData({...formData, country: val.value})}
                    placeholder="اختر..."
                  />
                </div>
              </div>

              <div className="mb-12">
                <label className="text-[10px] font-black uppercase text-zinc-500 mr-2 tracking-widest">البريد الإلكتروني المسجل</label>
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
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={18} /> مزامنة مع قاعدة بيانات SafiPay</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}