'use client';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Target, ShieldCheck, ArrowLeft, 
  Rocket, Globe, Landmark, CreditCard, ChevronDown 
} from 'lucide-react';
import { useState } from 'react';

export default function InvestPagePS() {
  const CAMPAIGN_LINK = "https://gogetfunding.com/safipay-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%a8%d8%a7%d9%86%da%a9-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84-%d8%a8%d8%b1%d8%a7%db%8c-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86%d9%87%d8%a7-%d8%a7/";
  const raised = 0;
  const goal = 80000;
  const percentage = Math.round((raised / goal) * 100);
  const donors = 0;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const roadmap = [
    {
      stage: "لومړۍ مرحله",
      title: "بنسټ او ټولنه",
      status: "روان کار",
      desc: "د نړۍوالې پانګونې کمپاین پیل، د ۱۰ زره ملاتړو ټولنه جوړول او د سیسټم لومړنۍ طرحه بشپړول.",
      icon: <Users className="text-amber-500" />
    },
    {
      stage: "دویمه مرحله",
      title: "جوازونه او قانوني چارې",
      status: "پلان شوی",
      desc: "د EMI نړۍوالو جوازونو ترلاسه کول او په ستراتیژیکو هېوادونو کې د قانوني دفترونو پرانیستل.",
      icon: <Landmark className="text-amber-500" />
    },
    {
      stage: "دریمه مرحله",
      title: "ازمایښتي پیل (Beta)",
      status: "پلان شوی",
      desc: "لومړنیو کاروونکو ته د اپلیکیشن وړاندې کول، د فوري پیسو لېږد او ډیجیټل بټو فعالول.",
      icon: <Rocket className="text-amber-500" />
    },
    {
      stage: "څلورمه مرحله",
      title: "نړۍوال کارتونه",
      status: "پلان شوی",
      desc: "له نړۍوالو شبکو سره تړون او په ټوله نړۍ کې د فزیکي او مجازی SafiPay کارتونو وېشل.",
      icon: <CreditCard className="text-amber-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* --- هیرو برخه --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -mr-48 -mt-48" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-8"
          >
            <Target size={16} />
            <span>د پانګونې او ولسي ملاتړ رسمي کمپاین</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent leading-tight"
          >
            د افغانستان مالي راتلونکی <br /> پخپلو لاسونو جوړ کړو
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay د افغانانو لپاره لومړنی نړۍوال ډیجیټل بانک جوړوي. ستاسو په ملاتړ، موږ جوازونه ترلاسه کوو او د ملیونونو خلکو مالي ستونزې هواروو.
          </motion.p>
        </div>
      </section>

      {/* --- د پرمختګ برخه --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-l from-amber-600/20 to-amber-900/20 blur-3xl opacity-30 rounded-[3rem]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-900/50 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="text-right">
                <span className="text-gray-500 uppercase tracking-widest font-bold text-sm">د کمپاین هدف</span>
                <div className="text-5xl md:text-7xl font-black text-white mt-2" dir="ltr">
                  ${goal.toLocaleString()}
                </div>
              </div>
              <div className="text-left">
                <div className="text-6xl md:text-8xl font-black text-amber-500" dir="ltr">
                  {percentage}%
                </div>
                <span className="text-amber-500/60 uppercase tracking-widest font-bold text-sm">بشپړ شوی</span>
              </div>
            </div>

            <div className="relative w-full h-8 bg-black/50 rounded-full border border-white/5 overflow-hidden mb-12 shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 2, ease: "circOut" }}
                className="absolute top-0 right-0 h-full bg-gradient-to-l from-amber-700 via-amber-500 to-yellow-400 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1" dir="ltr">${raised.toLocaleString()}</div>
                <div className="text-sm text-gray-500 font-bold tracking-tighter uppercase">ټوله شوې مرسته</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{donors.toLocaleString()}</div>
                <div className="text-sm text-gray-500 font-bold tracking-tighter uppercase">ملاتړي</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-amber-500/80 font-mono">نیټه: {new Date().toLocaleDateString('ps-AF')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- د کار لاره (Roadmap) --- */}
      <section className="py-24 container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">زموږ کاري پلان</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">له لید څخه تر حقیقت پورې؛ موږ څنګه SafiPay نړۍوال کوو.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-16">
            {roadmap.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute right-8 md:right-1/2 w-12 h-12 bg-gray-900 border border-amber-500/50 rounded-full flex items-center justify-center z-10 transform translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  {step.icon}
                </div>

                <div className="w-full md:w-1/2 pr-20 md:pr-0">
                  <div className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all group ${index % 2 === 0 ? 'text-right' : 'md:text-left'}`}>
                    <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">{step.stage}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                    <div className={`mt-6 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${step.status === 'روان کار' ? 'bg-amber-500/20 text-amber-500' : 'bg-white/5 text-gray-500'}`}>
                      {step.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- د مرستې کارتونه --- */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">د ملاتړ کچه وټاکئ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { amount: 10, label: "همدرد ملاتړی", desc: "کوچنۍ مرسته، لویه هیله" },
              { amount: 25, label: "د ودې ملګری", desc: "د بنسټونو پیاوړتیا" },
              { amount: 100, label: "سفیر", desc: "په بریا کې بنسټیز رول" },
              { amount: "خپله خوښه", label: "ستراتیژیک شریک", desc: "خپل میراث جوړ کړئ", custom: true }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.custom ? CAMPAIGN_LINK : `${CAMPAIGN_LINK}?amount=${item.amount}`}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-[2rem] border transition-all flex flex-col items-center justify-center gap-4 ${
                  item.amount === 100 ? 'bg-amber-500 border-amber-500 text-black' : 'bg-gray-900/50 border-white/10 hover:border-amber-500/50 shadow-xl'
                }`}
              >
                <span className={`text-4xl font-black ${item.amount === 100 ? 'text-black' : 'text-amber-500'}`} dir="ltr">
                  {typeof item.amount === 'number' ? `$${item.amount}` : item.amount}
                </span>
                <div className="text-center">
                  <div className={`font-bold tracking-widest text-sm uppercase ${item.amount === 100 ? 'text-black/80' : 'text-white'}`}>
                    {item.label}
                  </div>
                  <div className={`text-xs mt-1 ${item.amount === 100 ? 'text-black/60' : 'text-gray-500'}`}>
                    {item.desc}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ برخه --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">ډیری پوښتل شوې پوښتنې</h2>
          <div className="space-y-4">
            {[
              { q: "زما مرسته په کومو چارو لګول کیږي؟", a: "ستاسو مرستې په مستقیم ډول د نړۍوالو بانکي جوازونو، تخنیکي زیربناوو او قانوني چارو په سمبالولو لګول کیږي." },
              { q: "ایا SafiPay یو رسمي شرکت دی؟", a: "SafiPay اوس مهال په لومړنۍ مرحله کې دی. موږ د دویمې مرحلې سره سم د نړۍوالو مالي قوانینو په رڼا کې خپل قانوني چوکاټ بشپړوو." },
              { q: "ملاتړو ته کوم امتیازات ورکول کیږي؟", a: "د لومړني افغان ډیجیټل بانک د ملاتړ ترڅنګ، ځانګړي ملاتړي به د SafiPay 'Founder Edition' کارتونه او لومړنی لاسرسی ولري." }
            ].map((faq, i) => (
              <div key={i} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-right hover:bg-white/5 transition-all"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-amber-500' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-8 pb-6 text-gray-400 leading-relaxed font-light"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- روڼتیا (Transparency) --- */}
      <section className="py-24 container mx-auto px-6 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-right">
            <h2 className="text-4xl font-bold">بشپړه روڼتیا</h2>
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-amber-500" />, title: "خوندي معاملې", text: "ټولې پیسې د GoGetFunding نړۍوال پلیټ فارم له لارې په پوره امنیت لېږدول کیږي." },
                { icon: <TrendingUp className="text-amber-500" />, title: "ستراتیژیک پلان", text: "پیسې یوازې د بانکي جوازونو او تخنیکي پرمختګ لپاره لګول کیږي." },
                { icon: <Users className="text-amber-500" />, title: "میاشتني راپورونه", text: "ملاتړي په هرو ۳۰ ورځو کې د کاري پرمختګ تفصیلي راپور ترلاسه کوي." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-600 to-amber-900 p-12 rounded-[3rem] text-center shadow-2xl shadow-amber-900/20">
            <h3 className="text-3xl font-black mb-6 italic text-white leading-tight">"پر یوه ملت پانګونه وکړئ، <br /> نه یوازې پر یوه بانک."</h3>
            <p className="text-white/80 mb-8 font-light italic">ستاسو هره مرسته موږ د افغانانو مالي خپلواکۍ ته نږدې کوي.</p>
            <motion.a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg"
            >
              د پانګونې څانګې سره اړیکه <ArrowLeft size={18} />
            </motion.a>
          </div>
        </div>
      </section>

    </div>
  );
}