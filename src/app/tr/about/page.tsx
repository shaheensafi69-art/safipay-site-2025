'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageTR() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'tr';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Hero Bölümü (Giriş) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Afganistan'ın Finansal Paradigmasını Dönüştürüyoruz
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Bankacılık Sınırlarını <br /> Yeniden Çiziyoruz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay sadece bir uygulama değil; dünyanın her yerindeki her Afgan vatandaşı için küresel finansal sistemlere erişimi demokratikleştirmek üzere tasarlanmış devrim niteliğinde bir altyapıdır.
          </motion.p>
        </div>
      </section>

      {/* --- Kurucular Bölümü --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* Shaheen Safi - Kurucu & CEO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Shaheen Safi - Kurucu & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block text-white font-black italic tracking-widest text-lg uppercase">
                CEO / KURUCU
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> Liderlik & Strateji
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Shaheen Safi <span className="text-gray-600 text-3xl font-light block mt-2">Kurucu & Genel Müdür</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  Shaheen Safi (d. 2003), FinTech stratejisti ve SafiPay ekosisteminin baş mimarıdır. Afganistan'ın finansal izolasyonuna son verme vizyonuyla hareket ederek, makro stratejiyi yönetmekte ve küresel bankacılık liderleriyle uluslararası ortaklıkları koordine etmektedir.
                </p>
                <p>
                  Bulut tabanlı finansal teknolojiler ve modern Avrupa bankacılık standartlarındaki uzmanlığıyla Shaheen, SafiPay'in Afganistan'ın ilk gerçek neobankası olarak güvenliği yeniden tanımlamasını sağladı. Misyonu net: "Afgan finansal kimliğinin küresel ölçekte itibarını ve güvenilirliğini yeniden tesis etmek."
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-left">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Stratejik Yönetim</h4>
                  <p className="text-sm text-gray-500">İş modelleme ve küresel bankacılık ortaklıkları.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors text-left">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Finansal Kriz Çözümleri</h4>
                  <p className="text-sm text-gray-500">Küresel pazarlara erişim için çözüm tasarımı.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - Kurucu Ortak & CTO */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> Mühendislik & Güvenlik
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Mujtaba Rahmani <span className="text-gray-600 text-3xl font-light block mt-2">Kurucu Ortak & CTO</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  Mujtaba Rahmani (d. 2006), SafiPay'in CTO'su ve siber güvenlik mimarıdır. Gerçek zamanlı işlem sistemlerinin mutlak güvenliğini ve ölçeklenebilirliğini sağlamaktan sorumlu olan teknolojik omurgadır.
                </p>
                <p>
                  Ölçeklenebilir yazılım geliştirme konusundaki dehası ve ödeme altyapılarına dair derin bilgisiyle Mujtaba, hız ve hassasiyet açısından dünyanın en büyük bankalarıyla yarışan bir sistem tasarladı. Misyonu, kullanıcı varlıklarının her koşulda korunduğu bir "Dijital Kale" inşa etmektir.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-left">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Sistem Mimarisi</h4>
                  <p className="text-sm text-gray-500">Backend geliştirme ve finansal mikro hizmetler.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors text-left">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">Siber Güvenlik</h4>
                  <p className="text-sm text-gray-500">Gelişmiş şifreleme protokolleri ve veri koruma.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani - CTO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / MİMAR
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Vizyon & Değerler --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mutlak Güvenlik", desc: "İşlem bütünlüğünü garanti altına almak için çok katmanlı şifreleme protokolleri kullanımı.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "Küresel Bağlantı", desc: "Geleneksel aracılar olmadan Afganistan için dijital ekonominin kapılarını açmak.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "Sürekli İnovasyon", desc: "Gelecek neslin ihtiyaçlarını karşılamak için neobanka yeteneklerinin sürekli gelişimi.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all text-left"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA Bölümü --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">Stratejik Ortaklığa Hazır mısınız?</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                SafiPay olarak, geleceği birlikte şekillendirmek için küresel finans elitleri ve uluslararası stratejik ortaklar arıyoruz.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                Ortaklık Talebi <ArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}