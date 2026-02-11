'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="ltr">
      
      {/* Hero Section - Genel Tanıtım */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm"
          >
            Afganistan'ın Finansal Paradigmasını Değiştiriyoruz
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            Bankacılık Sınırlarını <br /> Yeniden Çiziyoruz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay sadece bir uygulama değildir; dünyanın neresinde olursa olsun her Afgan vatandaşı için uluslararası finans sistemlerine erişimi demokratikleştirmeyi amaçlayan devrimsel bir altyapıdır.
          </motion.p>
        </div>
      </section>

      {/* Founders Section - Detaylı Bilgiler */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* Shaheen Safi - CEO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/shaheen.jpeg" 
                alt="Shaheen Safi - Founder & CEO" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Founder & Chief Executive Officer
              </div>
              <h2 className="text-4xl font-bold">Shaheen Safi <span className="text-gray-500 text-2xl font-light"> (Kurucu ve CEO)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Shaheen Safi (2003 doğumlu), bir fintech stratejisti ve dijital ödeme sistemleri mimarıdır. Geleneksel sınırların ötesindeki vizyonuyla, SafiPay projesinin genel yönetiminden ve teknik altyapı geliştirme süreçlerinden sorumludur.
                </p>
                <p>
                  Shaheen, Avrupa bankacılık ekosistemlerine hakimiyeti ve Afganistan'ın ekonomik zorluklarına dair derin bilgisiyle, küresel standartlardaki güvenliği yerel kullanıcılar için erişim kolaylığıyla birleştiren bir model tasarlamıştır. Karmaşık bankacılık sorunlarını çözme ve finansal kriz yönetimi konusundaki uzmanlığı, SafiPay'in Afganistan'ın ilk neobankası olma yolundaki itici gücüdür.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Teknik Uzmanlık</h4>
                  <p className="text-sm text-gray-400">Bulut sistem mimarisi, ödeme güvenliği ve blokzincir</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Liderlik</h4>
                  <p className="text-sm text-gray-400">Stratejik yönetim ve uluslararası iş geliştirme</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - Co-Founder */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                Co-Founder & Chief Communications Officer
              </div>
              <h2 className="text-4xl font-bold">Mujtaba Rahmani <span className="text-gray-500 text-2xl font-light"> (Kurucu Ortak)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Mujtaba Rahmani (2006 doğumlu), stratejik iletişim ve marka geliştirme uzmanıdır. Halkla ilişkiler yönetimi, markanın küresel pazarlardaki etkisinin artırılması ve SafiPay ile yurtdışındaki geniş Afgan topluluğu arasında köprüler kurulması gibi kritik sorumlulukları üstlenmektedir.
                </p>
                <p>
                  Mujtaba, müzakere konusundaki benzersiz yetenekleri ve pazar psikolojisi anlayışıyla, yatırımcıların güvenini kazanmada ve SafiPay markasının istikrarlı ve halka yakın bir finans kurumu olarak konumlandırılmasında kilit rol oynamaktadır. Misyonu, sadece reklamın ötesinde, Afganistan'ın genç nesli için yeni bir finans kültürü yaratmaktır.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">İletişim</h4>
                  <p className="text-sm text-gray-400">Stratejik markalaşma, ticari müzakereler ve PR</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Geliştirme</h4>
                  <p className="text-sm text-gray-400">Müşteri ağı genişletme ve uluslararası destek toplama</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/mujtaba.jpeg" 
                alt="Mujtaba Rahmani - Co-Founder" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Misyonumuz</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              SafiPay'deki misyonumuz, her Afgan'a finansal güç kazandırmaktır. Gelişmekte olan teknolojilerden yararlanarak para transferi maliyetlerini minimuma indiriyoruz; uluslararası kredi kartlarına ve çok dövizli hesaplara erişimi -ki bu bir zamanlar halkımız için bir rüyaydı- günlük bir gerçekliğe dönüştürüyoruz.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">2030 Vizyonu</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hiçbir Afgan'ın coğrafi konumu nedeniyle dijital ekonomiden dışlanmadığı bir gelecek inşa ediyoruz. Vizyonumuz, bölgedeki en büyük finansal altyapı haline gelmek ve gelişmekte olan toplumlar için neobankacılık hizmetlerinde lider olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">SafiPay'in Etik ve Teknik Sütunları</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Mutlak Şeffaflık", 
              desc: "Güvenin gizlilikle kazanılmayacağına inanıyoruz. SafiPay'deki tüm finansal süreçler ve maliyetler tam bir şeffaflıkla raporlanır." 
            },
            { 
              title: "Gelişmiş Bankacılık Güvenliği", 
              desc: "Gelişmiş şifreleme protokolleri ve biyometrik kimlik doğrulama kullanarak, kullanıcı varlıklarının güvenliğini geleneksel standartların üzerinde garanti ediyoruz." 
            },
            { 
              title: "Finansal Kapsayıcılık", 
              desc: "Hizmetlerimiz; Afganistan'ın en uzak noktalarını küresel pazarlara bağlamak için cinsiyet, sınıf veya coğrafi ayrım gözetmeksizin tasarlanmıştır." 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900/30 border border-white/5 rounded-3xl hover:border-amber-500/50 transition-all"
            >
              <h4 className="text-2xl font-bold text-amber-500 mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6">Bu Finansal Devrime Ortak Olun</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Bir milletin finansal kaderini değiştiriyoruz. İster kullanıcı, ister yatırımcı olarak SafiPay'de yeriniz hazır.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">Yatırım Yapın</Link>
            <Link href="/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Yönetim Ekibiyle İletişime Geçin</Link>
          </div>
        </div>
      </section>

    </div>
  );
}