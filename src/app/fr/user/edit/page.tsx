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
  { value: 'Albanie', label: 'Albanie' },
  { value: 'Algérie', label: 'Algérie' },
  { value: 'Andorre', label: 'Andorre' },
  { value: 'Angola', label: 'Angola' },
  { value: 'Antigua-et-Barbuda', label: 'Antigua-et-Barbuda' },
  { value: 'Argentine', label: 'Argentine' },
  { value: 'Arménie', label: 'Arménie' },
  { value: 'Australie', label: 'Australie' },
  { value: 'Autriche', label: 'Autriche' },
  { value: 'Azerbaïdjan', label: 'Azerbaïdjan' },
  { value: 'Bahamas', label: 'Bahamas' },
  { value: 'Bahreïn', label: 'Bahreïn' },
  { value: 'Bangladesh', label: 'Bangladesh' },
  { value: 'Barbade', label: 'Barbade' },
  { value: 'Biélorussie', label: 'Biélorussie' },
  { value: 'Belgique', label: 'Belgique' },
  { value: 'Belize', label: 'Belize' },
  { value: 'Bénin', label: 'Bénin' },
  { value: 'Bhoutan', label: 'Bhoutan' },
  { value: 'Bolivie', label: 'Bolivie' },
  { value: 'Bosnie-Herzégovine', label: 'Bosnie-Herzégovine' },
  { value: 'Botswana', label: 'Botswana' },
  { value: 'Brésil', label: 'Brésil' },
  { value: 'Brunéi', label: 'Brunéi' },
  { value: 'Bulgarie', label: 'Bulgarie' },
  { value: 'Burkina Faso', label: 'Burkina Faso' },
  { value: 'Burundi', label: 'Burundi' },
  { value: 'Cap-Vert', label: 'Cap-Vert' },
  { value: 'Cambodge', label: 'Cambodge' },
  { value: 'Cameroun', label: 'Cameroun' },
  { value: 'Canada', label: 'Canada' },
  { value: 'République centrafricaine', label: 'République centrafricaine' },
  { value: 'Tchad', label: 'Tchad' },
  { value: 'Chili', label: 'Chili' },
  { value: 'Chine', label: 'Chine' },
  { value: 'Colombie', label: 'Colombie' },
  { value: 'Comores', label: 'Comores' },
  { value: 'Congo (Congo-Brazzaville)', label: 'Congo (Congo-Brazzaville)' },
  { value: 'Costa Rica', label: 'Costa Rica' },
  { value: 'Croatie', label: 'Croatie' },
  { value: 'Cuba', label: 'Cuba' },
  { value: 'Chypre', label: 'Chypre' },
  { value: 'Tchéquie (République tchèque)', label: 'Tchéquie (République tchèque)' },
  { value: 'Danemark', label: 'Danemark' },
  { value: 'Djibouti', label: 'Djibouti' },
  { value: 'Dominique', label: 'Dominique' },
  { value: 'République dominicaine', label: 'République dominicaine' },
  { value: 'Équateur', label: 'Équateur' },
  { value: 'Égypte', label: 'Égypte' },
  { value: 'Salvador', label: 'Salvador' },
  { value: 'Guinée équatoriale', label: 'Guinée équatoriale' },
  { value: 'Érythrée', label: 'Érythrée' },
  { value: 'Estonie', label: 'Estonie' },
  { value: 'Eswatini', label: 'Eswatini' },
  { value: 'Éthiopie', label: 'Éthiopie' },
  { value: 'Fidji', label: 'Fidji' },
  { value: 'Finlande', label: 'Finlande' },
  { value: 'France', label: 'France' },
  { value: 'Gabon', label: 'Gabon' },
  { value: 'Gambie', label: 'Gambie' },
  { value: 'Géorgie', label: 'Géorgie' },
  { value: 'Allemagne', label: 'Allemagne' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Grèce', label: 'Grèce' },
  { value: 'Grenade', label: 'Grenade' },
  { value: 'Guatemala', label: 'Guatemala' },
  { value: 'Guinée', label: 'Guinée' },
  { value: 'Guinée-Bissau', label: 'Guinée-Bissau' },
  { value: 'Guyana', label: 'Guyana' },
  { value: 'Haïti', label: 'Haïti' },
  { value: 'Saint-Siège', label: 'Saint-Siège' },
  { value: 'Honduras', label: 'Honduras' },
  { value: 'Hongrie', label: 'Hongrie' },
  { value: 'Islande', label: 'Islande' },
  { value: 'Inde', label: 'Inde' },
  { value: 'Indonésie', label: 'Indonésie' },
  { value: 'Iran', label: 'Iran' },
  { value: 'Irak', label: 'Irak' },
  { value: 'Irlande', label: 'Irlande' },
  { value: 'Israël', label: 'Israël' },
  { value: 'Italie', label: 'Italie' },
  { value: "Côte d'Ivoire", label: "Côte d'Ivoire" },
  { value: 'Jamaïque', label: 'Jamaïque' },
  { value: 'Japon', label: 'Japon' },
  { value: 'Jordanie', label: 'Jordanie' },
  { value: 'Kazakhstan', label: 'Kazakhstan' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'Kiribati', label: 'Kiribati' },
  { value: 'Koweït', label: 'Koweït' },
  { value: 'Kirghizistan', label: 'Kirghizistan' },
  { value: 'Laos', label: 'Laos' },
  { value: 'Lettonie', label: 'Lettonie' },
  { value: 'Liban', label: 'Liban' },
  { value: 'Lesotho', label: 'Lesotho' },
  { value: 'Libéria', label: 'Libéria' },
  { value: 'Libye', label: 'Libye' },
  { value: 'Liechtenstein', label: 'Liechtenstein' },
  { value: 'Lituanie', label: 'Lituanie' },
  { value: 'Luxembourg', label: 'Luxembourg' },
  { value: 'Madagascar', label: 'Madagascar' },
  { value: 'Malawi', label: 'Malawi' },
  { value: 'Malaisie', label: 'Malaisie' },
  { value: 'Maldives', label: 'Maldives' },
  { value: 'Mali', label: 'Mali' },
  { value: 'Malte', label: 'Malte' },
  { value: 'Îles Marshall', label: 'Îles Marshall' },
  { value: 'Mauritanie', label: 'Mauritanie' },
  { value: 'Maurice', label: 'Maurice' },
  { value: 'Mexique', label: 'Mexique' },
  { value: 'Micronésie', label: 'Micronésie' },
  { value: 'Moldavie', label: 'Moldavie' },
  { value: 'Monaco', label: 'Monaco' },
  { value: 'Mongolie', label: 'Mongolie' },
  { value: 'Monténégro', label: 'Monténégro' },
  { value: 'Maroc', label: 'Maroc' },
  { value: 'Mozambique', label: 'Mozambique' },
  { value: 'Myanmar (Birmanie)', label: 'Myanmar (Birmanie)' },
  { value: 'Namibie', label: 'Namibie' },
  { value: 'Nauru', label: 'Nauru' },
  { value: 'Népal', label: 'Népal' },
  { value: 'Pays-Bas', label: 'Pays-Bas' },
  { value: 'Nouvelle-Zélande', label: 'Nouvelle-Zélande' },
  { value: 'Nicaragua', label: 'Nicaragua' },
  { value: 'Niger', label: 'Niger' },
  { value: 'Nigéria', label: 'Nigéria' },
  { value: 'Corée du Nord', label: 'Corée du Nord' },
  { value: 'Macédoine du Nord', label: 'Macédoine du Nord' },
  { value: 'Norvège', label: 'Norvège' },
  { value: 'Oman', label: 'Oman' },
  { value: 'Pakistan', label: 'Pakistan' },
  { value: 'Palaos', label: 'Palaos' },
  { value: 'État de Palestine', label: 'État de Palestine' },
  { value: 'Panama', label: 'Panama' },
  { value: 'Papouasie-Nouvelle-Guinée', label: 'Papouasie-Nouvelle-Guinée' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'Pérou', label: 'Pérou' },
  { value: 'Philippines', label: 'Philippines' },
  { value: 'Pologne', label: 'Pologne' },
  { value: 'Portugal', label: 'Portugal' },
  { value: 'Qatar', label: 'Qatar' },
  { value: 'Roumanie', label: 'Roumanie' },
  { value: 'Russie', label: 'Russie' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'Saint-Christophe-et-Niévès', label: 'Saint-Christophe-et-Niévès' },
  { value: 'Sainte-Lucie', label: 'Sainte-Lucie' },
  { value: 'Saint-Vincent-et-les-Grenadines', label: 'Saint-Vincent-et-les-Grenadines' },
  { value: 'Samoa', label: 'Samoa' },
  { value: 'Saint-Marin', label: 'Saint-Marin' },
  { value: 'Sao Tomé-et-Principe', label: 'Sao Tomé-et-Principe' },
  { value: 'Arabie saoudite', label: 'Arabie saoudite' },
  { value: 'Sénégal', label: 'Sénégal' },
  { value: 'Serbie', label: 'Serbie' },
  { value: 'Seychelles', label: 'Seychelles' },
  { value: 'Sierra Leone', label: 'Sierra Leone' },
  { value: 'Singapour', label: 'Singapour' },
  { value: 'Slovaquie', label: 'Slovaquie' },
  { value: 'Slovénie', label: 'Slovénie' },
  { value: 'Îles Salomon', label: 'Îles Salomon' },
  { value: 'Somalie', label: 'Somalie' },
  { value: 'Afrique du Sud', label: 'Afrique du Sud' },
  { value: 'Corée du Sud', label: 'Corée du Sud' },
  { value: 'Soudan du Sud', label: 'Soudan du Sud' },
  { value: 'Espagne', label: 'Espagne' },
  { value: 'Sri Lanka', label: 'Sri Lanka' },
  { value: 'Soudan', label: 'Soudan' },
  { value: 'Suriname', label: 'Suriname' },
  { value: 'Suède', label: 'Suède' },
  { value: 'Suisse', label: 'Suisse' },
  { value: 'Syrie', label: 'Syrie' },
  { value: 'Taïwan', label: 'Taïwan' },
  { value: 'Tadjikistan', label: 'Tadjikistan' },
  { value: 'Tanzanie', label: 'Tanzanie' },
  { value: 'Thaïlande', label: 'Thaïlande' },
  { value: 'Timor oriental', label: 'Timor oriental' },
  { value: 'Togo', label: 'Togo' },
  { value: 'Tonga', label: 'Tonga' },
  { value: 'Trinité-et-Tobago', label: 'Trinité-et-Tobago' },
  { value: 'Tunisie', label: 'Tunisie' },
  { value: 'Turquie', label: 'Turquie' },
  { value: 'Turkménistan', label: 'Turkménistan' },
  { value: 'Tuvalu', label: 'Tuvalu' },
  { value: 'Ouganda', label: 'Ouganda' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'Émirats arabes unis', label: 'Émirats arabes unis' },
  { value: 'Royaume-Uni', label: 'Royaume-Uni' },
  { value: "États-Unis d'Amérique", label: "États-Unis d'Amérique" },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Ouzbékistan', label: 'Ouzbékistan' },
  { value: 'Vanuatu', label: 'Vanuatu' },
  { value: 'Venezuela', label: 'Venezuela' },
  { value: 'Viêt Nam', label: 'Viêt Nam' },
  { value: 'Yémen', label: 'Yémen' },
  { value: 'Zambie', label: 'Zambie' },
  { value: 'Zimbabwe', label: 'Zimbabwe' }
];

export default function EditProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  // Utilisation sécurisée des paramètres côté client
  const locale = params?.locale || 'fr';
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

      setStatus({ type: 'success', msg: 'Identité mise à jour avec succès' });
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
      setStatus({ type: 'success', msg: 'Photo synchronisée' });
    } catch (error: any) {
      setStatus({ type: 'error', msg: 'Échec du téléchargement' });
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
            <span className="font-black text-[10px] uppercase tracking-[0.2em]">Tableau de bord</span>
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
                    <Image src={user.user_metadata.avatar_url} alt="Utilisateur SafiPay" fill className="object-cover" />
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
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Prénom</label>
                  <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Nom de famille</label>
                  <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Téléphone</label>
                  <input type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">Pays</label>
                  <Select
                    options={countryOptions}
                    styles={customSelectStyles}
                    value={countryOptions.find(c => c.value === formData.country)}
                    onChange={(val: any) => setFormData({...formData, country: val.value})}
                    placeholder="Sélectionner..."
                  />
                </div>
              </div>

              <div className="mb-12">
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-2 tracking-widest">E-mail enregistré</label>
                <div className="relative mt-3">
                  <input type="text" value={user?.email || ''} disabled className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-600 cursor-not-allowed" />
                  <Lock size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800" />
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl shadow-amber-500/10">
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={18} /> Synchroniser avec la base de données SafiPay</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}