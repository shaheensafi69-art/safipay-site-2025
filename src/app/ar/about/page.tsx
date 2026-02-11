'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPageAR() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="rtl">
      
      {/* قسم الهيرو - مقدمة عامة */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm"
          >
            تغيير النموذج المالي في أفغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-l from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            نحن نعيد تعريف <br /> الحدود المصرفية
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            سافي بي (SafiPay) ليس مجرد تطبيق؛ إنه بنية تحتية ثورية تهدف إلى إضفاء الطابع الديمقراطي على الوصول إلى الأنظمة المالية الدولية لكل مواطن أفغاني، في أي مكان في العالم.
          </motion.p>
        </div>
      </section>

      {/* قسم المؤسسين */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* شاهين صافي - المدير التنفيذي */}
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                المؤسس والرئيس التنفيذي
              </div>
              <h2 className="text-4xl font-bold">شاهين صافي <span className="text-gray-500 text-2xl font-light">(Shaheen Safi)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  شاهين صافي (مواليد 2003)، خبير استراتيجي في التكنولوجيا المالية (FinTech) ومهندس لأنظمة الدفع الرقمي. من خلال رؤيته العابرة للحدود التقليدية، يتولى مسؤولية التوجيه الاستراتيجي لمشروع SafiPay والإشراف على تطوير البنية التحتية التقنية.
                </p>
                <p>
                  بفضل إلمامه بالأنظمة المصرفية الأوروبية وفهمه العميق للتحديات الاقتصادية في أفغانستان، تمكن شاهين من تصميم نموذج يجمع بين الأمان بمستوى المعايير العالمية وسهولة الوصول للمستخدمين المحليين. خبرته في حل القضايا المصرفية المعقدة وإدارة الأزمات المالية هي المحرك الأساسي لـ SafiPay في طريقها لتصبح أول نيو-بنك (Neobank) أفغاني.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">الخبرة التقنية</h4>
                  <p className="text-sm text-gray-400">هندسة الأنظمة السحابية، أمن الدفع، والبلوكشين</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">القيادة</h4>
                  <p className="text-sm text-gray-400">الإدارة الاستراتيجية وتطوير الأعمال الدولية</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* مجتبى رحماني - المؤسس المشارك */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4">
                المؤسس المشارك ورئيس الاتصالات
              </div>
              <h2 className="text-4xl font-bold">مجتبى رحماني <span className="text-gray-500 text-2xl font-light">(Mujtaba Rahmani)</span></h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  مجتبى رحماني (مواليد 2006)، متخصص في الاتصالات الاستراتيجية وتطوير العلامات التجارية. يتولى المسؤولية الحيوية لإدارة العلاقات العامة، وتوسيع نفوذ العلامة التجارية في الأسواق العالمية، وبناء جسور التواصل بين SafiPay والمجتمع الأفغاني الكبير في الخارج.
                </p>
                <p>
                  باستخدام قدراته الفريدة في التفاوض وفهم سيكولوجية السوق، يلعب مجتبى دوراً محورياً في كسب ثقة المستثمرين ورسم صورة SafiPay كمؤسسة مالية مستقرة وقريبة من الناس. مهمته تتجاوز الإعلان؛ إنها تتعلق بخلق ثقافة مالية جديدة للجيل الشاب في أفغانستان.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">الاتصالات</h4>
                  <p className="text-sm text-gray-400">العلامات التجارية الاستراتيجية، المفاوضات التجارية، والعلاقات العامة</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">التطوير</h4>
                  <p className="text-sm text-gray-400">توسيع شبكة العملاء وجذب الدعم الدولي</p>
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

      {/* قسم الرؤية والمهمة */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">مهمتنا</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              مهمتنا في SafiPay هي منح القوة المالية لكل أفغاني. من خلال الاستفادة من التقنيات الناشئة، نسعى لتقليل تكاليف تحويل الأموال وتوفير الوصول إلى بطاقات الائتمان الدولية والحسابات متعددة العملات التي كانت يوماً ما حلماً لشعبنا، وتحويلها إلى واقع يومي.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">رؤية 2030</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              نحن نبني مستقبلاً لا يتم فيه استبعاد أي أفغاني من الاقتصاد الرقمي بسبب موقعه الجغرافي. رؤيتنا هي أن نصبح أكبر بنية تحتية مالية في المنطقة والشركة الرائدة في تقديم خدمات النيو-بنك للمجتمعات النامية.
            </p>
          </div>
        </div>
      </section>

      {/* القيم المؤسسية */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">الركائز الأخلاقية والتقنية لـ SafiPay</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "الشفافية المطلقة", 
              desc: "نحن نؤمن بأن الثقة لا تُكتسب بالكتمان. يتم الإبلاغ عن جميع العمليات المالية والتكاليف في SafiPay بشفافية تامة." 
            },
            { 
              title: "أمن مصرفي متطور", 
              desc: "باستخدام بروتوكولات التشفير المتقدمة والتحقق من الهوية البيومترية، نضمن أمن أصول المستخدمين بما يتجاوز المعايير التقليدية." 
            },
            { 
              title: "الشمول المالي", 
              desc: "تم تصميم خدماتنا دون تمييز جنسي أو طبقي أو جغرافي لربط أبعد المناطق في أفغانستان بالأسواق العالمية." 
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

      {/* دعوة للتعاون */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6">كن جزءاً من هذه الثورة المالية</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            نحن نغير المصير المالي لأمة كاملة. سواء كنت مستخدماً أو مستثمراً، هناك مكان لك في SafiPay.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/ar/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">الاستثمار</Link>
            <Link href="/ar/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">اتصل بالفريق التنفيذي</Link>
          </div>
        </div>
      </section>

    </div>
  );
}