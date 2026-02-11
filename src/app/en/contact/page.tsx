'use client';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, Send, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // نکته: Formspree به صورت اتوماتیک عمل می‌کند، این هندلر برای نمایش وضعیت موفقیت است.
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30" dir="ltr">
      
      {/* --- بخش هیرو (Hero Section) --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm"
          >
            Available 24/7 Worldwide
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            Have a question about our banking services or interested in a partnership? 
            The SafiPay executive team is here to ensure your financial journey is seamless.
          </motion.p>
        </div>
      </section>

      {/* --- بخش اصلی محتوا --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* ستون اطلاعات تماس (سمت چپ) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-gray-400">Choose the most convenient way to reach us.</p>
            </div>

            <div className="grid gap-6">
              {/* کارت‌های اطلاعات تماس */}
              {[
                { icon: <Phone size={24} />, title: "France HQ", value: "+33 7 53 92 89 13", link: "tel:+33753928913" },
                { icon: <Phone size={24} />, title: "Global Support", value: "+1 (934) 203-2497", link: "tel:+19342032497" },
                { icon: <MessageSquare size={24} />, title: "WhatsApp Business", value: "+1 (934) 203-2497", link: "https://wa.me/19342032497" },
                { icon: <Mail size={24} />, title: "Direct Email", value: "ssafi9241@hotmail.com", link: "mailto:ssafi9241@hotmail.com" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-gray-900/40 border border-white/5 rounded-2xl hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-bold uppercase tracking-wider">{item.title}</h4>
                    <p className="text-lg text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* بخش اعتماد (Trust) */}
            <div className="p-8 bg-gradient-to-br from-amber-600/10 to-transparent border border-amber-600/20 rounded-[2rem] space-y-4">
              <div className="flex items-center gap-3 text-amber-500">
                <ShieldCheck size={28} />
                <h3 className="text-xl font-bold italic">SafiPay Security</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your data is encrypted with military-grade 256-bit AES encryption. 
                We prioritize your privacy and financial security in every interaction.
              </p>
            </div>
          </motion.div>

          {/* ستون فرم تماس (سمت راست) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            {/* بک‌گراند نوری پشت فرم */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[2.5rem] blur opacity-20" />
            
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Send an Executive Inquiry</h3>
              
              <form
                action="https://formspree.io/f/maqbrkgq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Message Detail</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="How can we help you today?"
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-amber-900/20 transition-all"
                >
                  <Send size={20} />
                  Transmit Message
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-center text-green-400"
                >
                  <p className="font-bold text-lg">Message Encrypted & Sent!</p>
                  <p className="text-sm opacity-80">We have received your inquiry and will respond within 24 hours.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- بخش فوتر کوچک (Global Presence) --- */}
      <section className="py-20 bg-black/40 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            <div className="flex items-center gap-2"><MapPin size={20} /> Paris, France</div>
            <div className="flex items-center gap-2"><Globe size={20} /> Global Operations</div>
            <div className="flex items-center gap-2"><ShieldCheck size={20} /> Secure Protocol</div>
          </div>
        </div>
      </section>

    </div>
  );
}