'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, Cpu, Landmark, BadgeCheck, ShieldAlert
} from 'lucide-react';

export default function ArabicElitePartnership() {
  const containerRef = useRef(null);
  
  // إعدادات التمرير لحركة السيارة الانسيابية جداً
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, 
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30 text-right" dir="rtl">
      
      {/* --- ۱. قسم الهيرو (البداية القوية) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              الشبكة المالية المستقلة العالمية ٢٠٢٦
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.75] mb-16 italic tracking-tighter">
              قوة <br/> <span className="text-amber-500 text-glow text-8xl md:text-[12rem]">بلا منازع.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed">
              نظام "صافي" ليس مجرد تطبيق؛ إنه بنية تحتية عالمية تعيد تعريف السيادة المالية لأكثر من ٤٠ مليون مستخدم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ۲. والستر (الركيزة المصرفية) --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">الركيزة الاستراتيجية الأولى: Wallester AS</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">النواة المصرفية <br/> الأوروبية.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              لقد دخلنا في شراكة مباشرة مع **Wallester AS**، المؤسسة المالية المرخصة وعضو VISA الرئيسي في إستونيا. هذا ليس مجرد ربط تقني؛ بل هو وصول مباشر إلى الشبكة المالية الأوروبية. بينما تواجه بنوك المنطقة العقوبات والأنظمة القديمة، يتمتع مستخدمو "صافي بي" بالمزايا التالية:
            </p>
            <div className="grid grid-cols-2 gap-8 text-right">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold">أعلى مستوى أمان عالمي</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold">إصدار رسمي لبطاقات فيزا</p>
                </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(245,158,11,0.4)' }}
            className="lg:col-span-6 order-1 lg:order-2 p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden transition-all duration-500 shadow-2xl"
          >
             <CreditCard size={180} className="absolute -left-10 -top-10 opacity-5" />
             <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> حسابات IBAN أوروبية شخصية</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> إصدار فوري لبطاقات فيزا الافتراضية</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> تسويات عالمية عبر SEPA و SWIFT</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> إدارة الأصول المرتبطة باليورو</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- ۳. دينغ (الاتصال العالمي) --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 transition-all duration-500"
          >
                <h4 className="text-blue-500 font-black mb-8 text-center">نطاق البنية التحتية</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">500+</div>
                        <div className="text-[10px] text-gray-500 uppercase">مشغل عالمي</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">150+</div>
                        <div className="text-[10px] text-gray-500 uppercase">دولة مغطاة</div>
                    </div>
                </div>
          </motion.div>
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">الركيزة الاستراتيجية الثانية: Ding Network</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">اتصال <br/> لا يتوقف.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              تعتبر **Ding** أكبر محرك لشحن رصيد الموبايل في العالم. يوفر "صافي تاپ‌آپ" من خلال هذه الشبكة شحناً فورياً، وباقات إنترنت، وخدمات E-SIM. لأول مرة، يمكن للمستخدمين في المناطق الصعبة البقاء على اتصال بالعالم بتأخير لا يتجاوز ٠.١ ثانية.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">تسوية فورية</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">جاهز لخدمات E-SIM 5G</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ۴. خدمات صافي --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">قائمة الخدمات <span className="text-amber-500 text-glow">الحصرية.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">ما تختبره في "صافي" يسبق الخدمات المصرفية التقليدية بسنوات ضوئية.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { t: "بطاقة فيزا الافتراضية", d: "إصدار خلال ثوانٍ. صالحة لإعلانات فيسبوك، جوجل كلاود، نتفليكس، وأمازون وفي أكثر من ١٠٠ مليون متجر حول العالم.", icon: <CreditCard className="text-amber-500" size={40}/> },
                { t: "حساب IBAN أوروبي", d: "استلم راتبك أو دفعاتك المستقلة مباشرة من أوروبا وأمريكا، تحت إشراف الهيئات المالية في الاتحاد الأوروبي.", icon: <Globe className="text-amber-500" size={40}/> },
                { t: "شريحة E-SIM الإلكترونية", d: "تفعيل فوري لـ ١٥٠ دولة. ابقَ متصلاً من كابول إلى دبي وباريس دون الحاجة لتبديل الشريحة الفعلية.", icon: <Smartphone className="text-amber-500" size={40}/> },
                { t: "جسر تحويل الكريبتو", d: "حول أصولك الرقمية فوراً إلى رصيد قابل للإنفاق في بطاقة فيزا الخاصة بك. أسرع مسار للسيولة.", icon: <Coins className="text-amber-500" size={40}/> },
                { t: "لوحة تحكم تجارية", d: "للأعمال التي تحتاج لتسديد دفعات بالعملات الأجنبية للموردين الدوليين دون قيود وبيروقراطية.", icon: <Briefcase className="text-amber-500" size={40}/> },
                { t: "حماية الأصول الذكية", d: "ذكاء اصطناعي يراقب نفقاتك ويقترح أفضل وقت لتحويل العملات لحماية قيمة أموالك.", icon: <Cpu className="text-amber-500" size={40}/> }
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

      {/* --- ۵. مقارنة مع بنوك المنطقة --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">تجاوز <span className="text-amber-500">الحدود.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 font-bold text-right">
                <motion.div whileHover={{ scale: 0.98 }} className="p-12 bg-black rounded-[4rem] border border-red-500/20">
                    <ShieldAlert className="text-red-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-red-500">البنوك التقليدية الإقليمية</h3>
                    <ul className="space-y-6 text-gray-600 text-sm">
                        <li>• شبكات محدودة وخاضعة لعقوبات شديدة</li>
                        <li>• توثيق الهوية ورقي (يستغرق أسابيع)</li>
                        <li>• عدم دعم المدفوعات العالمية (نتفليكس/الإعلانات)</li>
                        <li>• رسوم حوالات باهظة وأنظمة متهالكة</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <BadgeCheck className="text-amber-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-amber-500">منظومة "صافي" العالمية</h3>
                    <ul className="space-y-6 text-amber-400 text-sm">
                        <li>• بنية تحتية مرخصة أوروبياً وعضو في VISA</li>
                        <li>• توثيق الهوية بالذكاء الاصطناعي (جاهز في دقيقتين)</li>
                        <li>• قبول بنسبة ١٠٠٪ في كافة بوابات الدفع العالمية</li>
                        <li>• تسويات فورية قائمة على تقنيات API الحديثة</li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- ۶. خارطة الطريق مع السيارة المتحركة --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-7xl font-black text-center mb-60 italic tracking-tighter uppercase">مسار <span className="text-amber-500 text-glow">التقدم.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]">
          {/* الطريق */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full"
            />
          </div>

          {/* السيارة الهادئة والفاخرة */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50 flex flex-col items-center"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* مراحل جاده */}
          {[
            { phase: "المرحلة الأولى", title: "الولادة المؤسسية", desc: "استكمال بروتوكولات الترخيص الأوروبي. التكامل الكامل لـ API مع النواة المصرفية لـ Wallester. إنشاء جسور السيولة من الفئة الأولى.", year: "Q1 2026", y: "10%" },
            { phase: "المرحلة الثانية", title: "تطوير الاتصال", desc: "الشراكة الرسمية مع Ding Global. إطلاق صافي تاپ‌آپ لـ ٥٠٠+ مشغل. طرح باقات الإنترنت العالمية E-SIM.", year: "Q2 2026", y: "35%" },
            { phase: "المرحلة الثالثة", title: "السيطرة على السوق", desc: "الإطلاق العام لتطبيق 'صافي بي' (iOS/Android). إصدار بطاقات فيزا وحسابات IBAN لعامة المستخدمين.", year: "Q3 2026", y: "60%" },
            { phase: "المرحلة الرابعة", title: "السيادة الفيزيائية", desc: "إصدار بطاقات صافي 'تيتانيوم' الفعلية. تركيب أجهزة الدفع في الأسواق الفاخرة في إسطنبول، دبي، وكابول.", year: "Q4 2026", y: "85%" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${i % 2 !== 0 ? "justify-start text-right" : "justify-end text-left"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: i % 2 !== 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.5)' }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] transition-all shadow-2xl cursor-default"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em]">{step.year}</span>
                    <h4 className="text-amber-600 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ۷. نموذج طلب التعاون --- */}
      <section className="py-60 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic leading-[0.8]">انضم إلى <br/> <span className="text-amber-500">فريق القيادة.</span></h2>
                <p className="text-gray-400 text-2xl font-light">نحن بصدد اختيار ٥ شركاء استراتيجيين لمرحلة التوسع Q3. قدم طلبك الآن لحجز مكانك.</p>
                <div className="flex items-center gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10">
                    <Landmark size={40} className="text-amber-500" />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-black">مستوى التعاون المؤسسي</p>
                        <p className="font-bold tracking-tighter">مراجعة الطلب في أقل من ٢٤ ساعة</p>
                    </div>
                </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl relative overflow-hidden text-right"
            >
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">اسم المنظمة / الكيان</label>
                            <input name="entity" type="text" required placeholder="بنك / شركة" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all text-right font-sans" dir="rtl" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">البريد الإلكتروني الرسمي</label>
                            <input name="email" type="email" required placeholder="ceo@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all text-left font-sans" dir="ltr" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">نوع التعاون الاستراتيجي</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400 font-sans">
                            <option>استثمار مؤسسي</option>
                            <option>مزود بنية تحتية</option>
                            <option>تطوير السوق والوكالة</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">المقترح التنفيذي</label>
                        <textarea name="proposal" rows={6} required placeholder="رؤيتكم وإمكانات التعاون معكم..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all shadow-[0_30px_60px_rgba(245,158,11,0.3)]">
                        بدء المحادثات الاستراتيجية
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* --- ۸. فوتر الإرث --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-10 opacity-20 italic font-black text-[9px] uppercase tracking-[0.8em] font-sans">
            <span>Wallester Licensed</span>
            <span>Ding Official</span>
            <span>VISA Principal</span>
        </div>
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em] font-sans">SafiPay Global Infrastructure © 2026 | Built for the Frontier Markets.</p>
      </footer>
    </div>
  );
}