'use client';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, Send, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function ContactPageTR() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Formspree otomatik çalışır, bu işlem sadece kullanıcıya bilgi vermek içindir.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* --- Cinematic Hero Bölümü --- */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Arka Plan Işık Efektleri */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -ml-64 -mt-64" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -mr-32 -mb-32" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            AKTİF VE KÜRESEL DESTEK
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent px-2">Bizimle</span> İletişime Geçin
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed"
          >
            Dijital bankacılığın geleceği hakkındaki sorularınızı yanıtlamaya hazırız.
            SafiPay ekibi her adımda yanınızda.
          </motion.p>
        </div>
      </section>

      {/* --- Ana İçerik --- */}
      <section className="pb-32 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* İletişim Bilgileri Sütunu */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">İLETİŞİM KANALLARI</h2>
                <div className="h-1 w-20 bg-amber-500 rounded-full" />
              </div>

              <div className="space-y-6">
                {[
                  { icon: <MessageSquare />, title: "RESMİ WHATSAPP", value: "+33 7 53 92 89 13", link: "https://wa.me/33753928913", color: "hover:text-green-400" },
                  { icon: <Phone />, title: "DESTEK HATTI", value: "+33 7 53 92 89 13", link: "tel:+33753928913", color: "hover:text-amber-400" },
                  { icon: <Mail />, title: "RESMİ YAZIŞMALAR", value: "safipay@hotmail.com", link: "mailto:safipay@hotmail.com", color: "hover:text-blue-400" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center gap-5 p-5 rounded-2xl bg-black/40 border border-white/5 transition-all group ${item.color}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{item.title}</h4>
                      <p className="text-lg font-bold tracking-tight text-white/90">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-amber-500/80 mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">GİZLİLİK GARANTİSİ</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Gönderdiğiniz tüm mesajlar uçtan uca şifrelenir ve doğrudan yönetim ekibi tarafından incelenir.
                </p>
              </div>
            </div>
          </motion.div>

          {/* İletişim Formu Sütunu */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="h-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              
              <h3 className="text-3xl font-black mb-10 tracking-tight">DOĞRUDAN MESAJ GÖNDER</h3>
              
              <form
                action="https://formspree.io/f/maqbrkgq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest block text-left">AD VE SOYAD</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Örn: Shaheen Safi"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-amber-500/50 focus:bg-amber-500/5 focus:outline-none transition-all placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest block text-left">E-POSTA ADRESİ</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e-posta@adresiniz.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-amber-500/50 focus:bg-amber-500/5 focus:outline-none transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest block text-left">MESAJINIZ</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Talebinizin detaylarını buraya yazın..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-amber-500/50 focus:bg-amber-500/5 focus:outline-none transition-all resize-none placeholder:text-gray-700"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(245, 158, 11, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all uppercase tracking-tighter"
                >
                  GÜVENLİ MESAJI GÖNDER
                  <Send size={20} />
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center text-green-400 text-sm font-bold"
                >
                  Mesajınız SafiPay protokolüne başarıyla iletildi.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bilgi Footer Bölümü */}
      <section className="py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-gray-600 font-bold uppercase tracking-widest text-[10px]">
             <div className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-default">
               <MapPin size={16} /> Paris, Fransa
             </div>
             <div className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-default">
               <Globe size={16} /> Küresel Operasyonlar
             </div>
             <div className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-default">
               <ShieldCheck size={16} /> AES-256 Şifreleme
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}