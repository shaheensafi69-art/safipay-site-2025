'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, Cpu, Landmark, BadgeCheck, ShieldAlert
} from 'lucide-react';

export default function PashtoElitePartnership() {
  const containerRef = useRef(null);
  
  // د موټر لپاره د سینمايي سکرول تنظیمات
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 25, 
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30" dir="rtl">
      
      {/* --- 1. HERO: د مالي قدرت مرکز --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              د ۲۰۲۶ خپلواک مالي شبکه
            </span>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] mb-16 italic tracking-tighter">
              بې سارې <br/> <span className="text-amber-500 text-glow">واکمني.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed italic">
              صافي ایکوسیستم د اروپا د غوره فینټیک او د منځنۍ اسیا د مخ پر ودې بازارونو ترمنځ حتمي پل دی.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PILLAR I: WALLESTER AS --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">لومړی ستراتیژیک ستون: Wallester AS</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">اروپايي <br/> بانکي مرکز.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              موږ له **Wallester AS** سره مستقیمه لومړۍ درجه ملګرتیا جوړه کړې، چې په ایستونیا کې یو جواز لرونکی مالي بنسټ او د VISA اصلي غړی دی. دا د سیمې کمزوري بانکي سیسټمونه شاته پریږدي او زموږ کاروونکو ته د اروپایي اتحادیې له مالي شبکې سره مستقیمه اړیکه ورکوي.
            </p>
            <div className="grid grid-cols-2 gap-8 text-right">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">د امنیت اعظمي معیارونه</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">د ویزا کارت مستقیم صدور</p>
                </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(245,158,11,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden transition-all duration-500 shadow-2xl"
          >
             <CreditCard size={180} className="absolute -left-10 -top-10 opacity-5" />
             <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> شخصي اروپايي IBAN حسابونه</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> د ویزا کارتونو سمدستي ورکړه</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> د SEPA او SWIFT نړیوال لیږدونه</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> په یورو ولاړ ملټي کرنسی والټونه</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 3. PILLAR II: DING GLOBAL --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 transition-all duration-500"
          >
                <h4 className="text-blue-500 font-black mb-8 text-center">د شبکې سرعت</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">500+</div>
                        <div className="text-[10px] text-gray-500 uppercase">نړیوال آپریټران</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">150+</div>
                        <div className="text-[10px] text-gray-500 uppercase">پوښل شوي هیوادونه</div>
                    </div>
                </div>
          </motion.div>
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">دوهم ستراتیژیک ستون: Ding شبکه</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">بې حده <br/> نښلول.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              **Ding** په نړۍ کې د موبایل ارزښت لیږدولو ترټولو پیاوړی انجن دی. صافي ټاپ‌اپ دا زیربنا کاروي ترڅو کاروونکو ته سمدستي کریډیټ او E-SIM خدمات چمتو کړي. د لومړي ځل لپاره، په نامستحکم بازارونو کې کاروونکي کولی شي د ۰.۱ ثانیې په سرعت سره له نړۍ سره وصل پاتې شي.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">په ژوندۍ بڼه تادیه</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">د 5G E-SIM لپاره چمتو</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES CATALOGUE --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">د <span className="text-amber-500 text-glow">خدمتونو</span> جال.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light italic">غوره مالي وسایل چې د عصري دور لپاره ډیزاین شوي.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { t: "مجازي VISA کارت", d: "په څو ثانیو کې صادریږي. د فیسبوک اعلاناتو، ګوګل کلاوډ، نیټ فلیکس او ۱۰۰ میلیونه پلورونکو لپاره کار کوي.", icon: <CreditCard className="text-amber-500" size={40}/> },
                { t: "شخصي IBAN", d: "خپل نړیوال معاشونه او پیسې په مستقیم ډول له اروپا او امریکا څخه ترلاسه کړئ. د اروپايي اتحادیې د قانون لاندې.", icon: <Globe className="text-amber-500" size={40}/> },
                { t: "نړیوال E-SIM", d: "د ۱۵۰ هیوادونو لپاره سمدستي فعالیږي. له کابل څخه دوبۍ او لندن ته پرته له فزیکي سیم کارت بدلولو سفر وکړئ.", icon: <Smartphone className="text-amber-500" size={40}/> },
                { t: "کریپټو پل (Bridge)", d: "ډیجیټل شتمنۍ سمدستي په ویزا کارت کې په ډالرو یا یورو بدل کړئ. له لوړ پوړ امنیت سره.", icon: <Coins className="text-amber-500" size={40}/> },
                { t: "سوداګریز انجن", d: "د هغو شرکتونو لپاره حسابونه چې غواړي نړیوالو عرضه کونکو ته پرته له ځنډه ډالر یا یورو واستوي.", icon: <Briefcase className="text-amber-500" size={40}/> },
                { t: "د شتمنۍ هوش (AI)", d: "زموږ ځانګړي الګوریتمونه چې د اسعارو بدلونونه څاري او تاسو ته د ګټې او پانګونې لارې ښيي.", icon: <Cpu className="text-amber-500" size={40}/> }
            ].map((srv, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ y: -15, backgroundColor: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.3)' }}
                    className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 transition-all duration-300 group"
                >
                    <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{srv.icon}</div>
                    <h4 className="text-2xl font-black mb-6 italic">{srv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{srv.d}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- 5. REGIONAL SUPERIORITY --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">بشپړ <span className="text-amber-500">برتري.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <motion.div whileHover={{ scale: 0.98 }} className="p-12 bg-black rounded-[4rem] border border-red-500/20">
                    <ShieldAlert className="text-red-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-red-500 uppercase tracking-tighter">پخواني سیمه ییز بانکونه</h3>
                    <ul className="space-y-6 text-gray-600 text-sm font-bold">
                        <li>• درانه بندیزونه او محدودې شبکې</li>
                        <li>• د کاغذ پر مخ پیژندنه (KYC) چې ۷ تر ۱۴ ورځې اخلي</li>
                        <li>• له نړیوالو ډیجیټل مارکیټونو سره نه وصلیدل</li>
                        <li>• لوړ فیسونه او زاړه SWIFT سیسټمونه</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <BadgeCheck className="text-amber-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-amber-500 uppercase tracking-tighter">د صافي نړیوال ایکوسیستم</h3>
                    <ul className="space-y-6 text-amber-400 text-sm font-bold italic">
                        <li>• په اروپا کې جواز لرونکی او د ویزا کارت اصلي غړی</li>
                        <li>• هوشمنه پیژندنه (KYC) یوازې په ۱۲۰ ثانیو کې</li>
                        <li>• په ټولو نړیوالو اعلاناتي او تفریحي سایټونو کې منل کیدل</li>
                        <li>• د API له لارې سمدستي او چټک تادیات</li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- 6. MISSION ROADMAP --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-7xl font-black text-center mb-60 italic tracking-tighter uppercase">د ماموریت <span className="text-amber-500 text-glow">پلان.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]">
          {/* د حرکت لاره */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            />
          </div>

          {/* لوکس موټر */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50 flex flex-col items-center"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90 transition-transform duration-500">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* پړاوونه */}
          {[
            { phase: "لومړی پړاو", title: "بنسټیزه پیل", desc: "د اروپايي بانکي پروتوکولونو ترلاسه کول. له Wallester AS سره د سیسټمونو نښلول.", year: "Q1 2026", y: "10%", side: "left" },
            { phase: "دوهم پړاو", title: "د شبکې پراختیا", desc: "له Ding Global سره نښلیدل. د ۵۰۰+ آپریټرانو پوښښ او د 5G E-SIM وړاندې کول.", year: "Q2 2026", y: "35%", side: "right" },
            { phase: "دریم پړاو", title: "عمومي وړاندې کول", desc: "د صافي پې (SafiPay) اپلیکیشن رسمي پیل. د نړیوالو کاروونکو لپاره د ویزا کارت او IBAN ورکړه.", year: "Q3 2026", y: "60%", side: "left" },
            { phase: "څلورم پړاو", title: "فزیکي واکمني", desc: "د تیتانیم فزیکي کارتونو صدور. په لوکس مرکزونو کې د تادیې سیسټمونه.", year: "Q4 2026", y: "85%", side: "right" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${step.side === "left" ? "justify-start text-right" : "justify-end text-left"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.5)' }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] transition-all shadow-2xl cursor-default"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em] uppercase">{step.year}</span>
                    <h4 className="text-amber-600 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm italic">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. STRATEGIC INQUIRY FORM --- */}
      <section className="py-60 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic leading-[0.8]">له موږ سره <br/> <span className="text-amber-500">ملګري شئ.</span></h2>
                <p className="text-gray-400 text-2xl font-light italic leading-relaxed">
                  "موږ د ۲۰۲۶ کال د دریم پړاو لپاره ۵ ستراتیژیک ملګري ټاکو. خپله غوښتنه وسپارئ."
                </p>
                <div className="flex items-center gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10">
                    <Landmark size={40} className="text-amber-500" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">بنسټیزه کچه</p>
                        <p className="font-bold">د ۲۴ ساعتونو دننه ځواب</p>
                    </div>
                </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl relative overflow-hidden"
            >
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">د شرکت یا بنسټ نوم</label>
                            <input name="entity" type="text" required placeholder="بانک / شرکت" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-sans" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">رسمي بریښنالیک</label>
                            <input name="email" type="email" required placeholder="ceo@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-sans" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">د ملګرتیا ډول</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400 font-bold">
                            <option>بنسټیزه پانګونه</option>
                            <option>د زیربنا چمتو کونکی</option>
                            <option>د مارکیټ پراختیا / فرنچائز</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">ستاسو وړاندیز</label>
                        <textarea name="proposal" rows={6} required placeholder="خپل لیدلوری دلته ولیکئ..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none font-sans text-right"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all shadow-[0_30px_60px_rgba(245,158,11,0.3)]">
                        ستراتیژیکې خبرې پیل کړئ
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-10 opacity-20 italic font-black text-[9px] uppercase tracking-[1em]">
            <span>Wallester Licensed</span>
            <span>Ding Official</span>
            <span>VISA Principal Member</span>
        </div>
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em]">د صافي پې نړیواله زیربنا ۲۰۲۶ © | د راتلونکي بازارونو لپاره جوړ شوی.</p>
      </footer>
    </div>
  );
}