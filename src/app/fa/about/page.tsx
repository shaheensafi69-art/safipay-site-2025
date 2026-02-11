'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Schema.org برای هر دو نفر + سازمان */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "شاهین صفی",
              "alternateName": "Shaheen Safi",
              "jobTitle": "بنیان‌گذار و مدیرعامل SafiPay",
              "image": "/shaheen.jpeg",
              "description": "کارآفرین جوان افغانستانی و بنیان‌گذار SafiPay – اولین بانک دیجیتال بین‌المللی ویژه مردم افغانستان. متولد ۲ آوریل ۲۰۰۳ در کابل، با هدف حل مشکلات بانکی میلیون‌ها افغان در داخل و خارج کشور.",
              "birthDate": "2003-04-02",
              "nationality": "Afghan",
              "url": "https://www.safipay.net/about",
              "sameAs": [
                "https://www.linkedin.com/in/shaheen-safi-b73a30299",
                "https://www.instagram.com/top_g_official1",
                "https://www.facebook.com/share/1H1vuV1i9Z/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "مجتبی رحمانی",
              "alternateName": "Mujtaba Rahmani",
              "jobTitle": "هم‌بنیان‌گذار و مدیر فنی (CTO) SafiPay",
              "image": "/mujtaba.jpeg",
              "description": "متولد ۲۸ جولای ۲۰۰۶. متخصص برجسته در فناوری، زیرساخت‌های دیجیتال و امنیت سیستم‌ها. مجتبی رحمانی مسئولیت توسعه فنی، طراحی معماری مقیاس‌پذیر و حفاظت از امنیت کاربران SafiPay را بر عهده دارد.",
              "birthDate": "2006-07-28",
              "nationality": "Afghan",
              "url": "https://www.safipay.net/about"
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SafiPay",
              "url": "https://www.safipay.net",
              "logo": "/logo.png",
              "description": "اولین بانک دیجیتال بین‌المللی ویژه مردم افغانستان – حساب چندارزی، کارت ویزا، انتقال سریع پول و اپلیکیشن امن برای همه افغان‌ها در داخل و خارج کشور.",
              "founder": [
                { "@type": "Person", "name": "شاهین صفی" },
                { "@type": "Person", "name": "مجتبی رحمانی" }
              ],
              "foundingDate": "2025",
              "sameAs": [
                "https://www.linkedin.com/company/safipay",
                "https://www.instagram.com/safipay.official"
              ]
            }
          ])
        }}
      />

      <div className="min-h-screen bg-gray-950 text-white" dir="rtl">
        {/* هیرو بزرگ */}
        <section className="relative py-32 md:py-40 border-b border-amber-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-black pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative max-w-md mx-auto md:mx-0 order-2 md:order-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-transparent rounded-3xl blur-3xl animate-pulse-slow" />
                  <div className="relative overflow-hidden rounded-3xl border-4 border-amber-700/50 shadow-2xl shadow-amber-900/60">
                    <Image
                      src="/shaheen.jpeg"
                      alt="شاهین صفی - بنیان‌گذار SafiPay"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              <div className="text-right order-1 md:order-2">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
                >
                  درباره <span className="text-amber-500">SafiPay</span> و بنیان‌گذارانش
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                >
                  SafiPay فقط یک پروژه نیست؛ یک رویای ملی است برای بازگرداندن حق بانکی به میلیون‌ها افغان.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* بنیان‌گذاران – دو نفر با عکس دایره‌ای */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              بنیان‌گذاران SafiPay
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
              {/* شاهین صفی */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8 text-right"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-amber-600 shadow-2xl shadow-amber-900/50">
                  <Image
                    src="/shaheen.jpeg"
                    alt="شاهین صفی - بنیان‌گذار و مدیرعامل"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-3">
                    شاهین صفی
                  </h3>
                  <p className="text-2xl text-gray-400 mb-6">
                    بنیان‌گذار و مدیرعامل SafiPay
                  </p>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p>
                      شاهین صافی متولد ۲ آوریل ۲۰۰۳ در کابل است؛ جایی که زندگی روزمره با محدودیت‌های بی‌شمار همراه بود. از کودکی سؤال‌های بزرگی در ذهنش شکل گرفت: چرا مردم ما نمی‌توانند مثل بقیه دنیا پولشان را آزادانه جابه‌جا کنند؟ چرا یک دختر روستایی حتی حساب بانکی ندارد؟ چرا جوانان افغان از دنیای دیجیتال و خرید آنلاین محروم هستند؟
                    </p>
                    <p>
                      این سؤال‌ها به مرور به یک آتش تبدیل شدند. شاهین در حالی که دسترسی به منابع آموزشی بسیار محدود بود، خودش شروع به یادگیری کرد. شب‌ها تا صبح کد می‌زد، خطا می‌گرفت، دوباره تلاش می‌کرد. برنامه‌نویسی، امنیت سایبری، فین‌تک، بلاکچین و سیستم‌های پرداخت را خودآموخته یاد گرفت.
                    </p>
                    <p>
                      سال ۲۰۲۵ بود که دیگر نتوانست سکوت کند. دید که میلیون‌ها افغان برای ارسال پول به خانواده‌شان ماه‌ها منتظر می‌مانند و کارمزدهای سنگین می‌پردازند. دید که تحریم‌ها و قطع ارتباط بانکی، زندگی روزمره مردم را فلج کرده است.
                    </p>
                    <p className="text-amber-400 font-semibold text-xl">
                      «من نمی‌خواستم فقط شکایت کنم. می‌خواستم راه‌حل بسازم.»
                    </p>
                    <p>
                      SafiPay از همین باور متولد شد: بانکی که متعلق به مردم افغانستان باشد؛ بدون مرز، بدون تبعیض، بدون کارمزدهای نجومی، بدون نیاز به شعبه فیزیکی. بانکی که هر افغان بتواند حساب چندارزی داشته باشد، کارت ویزا بگیرد، آنلاین خرید کند و در اقتصاد جهانی شرکت کند.
                    </p>
                    <p>
                      شاهین با پشتکار شبانه‌روزی، وب‌سایت و اپلیکیشن اولیه را ساخت، زیرساخت‌های امنیتی را طراحی کرد و کمپین جذب سرمایه را راه‌اندازی کرد. امروز SafiPay دیگر یک ایده نیست؛ یک حرکت ملی است که هزاران نفر از آن حمایت کرده‌اند.
                    </p>
                    <p className="italic text-amber-300">
                      «SafiPay برای من یعنی دادن قدرت به مردم تا خودشان آینده‌شان را بسازند – نه اینکه منتظر دیگران بمانند.»
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* مجتبی رحمانی */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8 text-right"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-amber-600 shadow-2xl shadow-amber-900/50">
                  <Image
                    src="/mujtaba.jpeg"
                    alt="مجتبی رحمانی - هم‌بنیان‌گذار و مدیر فنی"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-3">
                    مجتبی رحمانی
                  </h3>
                  <p className="text-2xl text-gray-400 mb-6">
                    هم‌بنیان‌گذار و مدیر فنی (CTO)
                  </p>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p>
                      مجتبی رحمانی متولد ۲۸ جولای ۲۰۰۶ است؛ از نسلی که در دل محدودیت‌ها و امیدها بزرگ شد. از همان سنین پایین شیفته دنیای کد، سرورها، امنیت و زیرساخت‌های دیجیتال بود. وقتی هم‌سن‌وسال‌هایش با بازی‌های موبایلی سرگرم بودند، او در تلاش بود بفهمد چطور یک سیستم می‌تواند میلیون‌ها تراکنش را بدون خطر و با سرعت بالا پردازش کند.
                    </p>
                    <p>
                      مجتبی ساعت‌ها مطالعه کرد، پروژه‌های شخصی ساخت، خطاهای پیچیده را رفع کرد و یاد گرفت چطور سیستمی طراحی کند که هم سریع باشد، هم امن، هم آماده رشد تا میلیون‌ها کاربر. تخصص او در معماری سیستم‌های توزیع‌شده، امنیت سایبری، بهینه‌سازی عملکرد و زیرساخت‌های ابری، او را به یکی از کلیدی‌ترین اعضای تیم فنی SafiPay تبدیل کرد.
                    </p>
                    <p>
                      وقتی شاهین ایده SafiPay را با او مطرح کرد، مجتبی فوراً متوجه شد که این فقط یک پروژه نیست؛ یک مسئولیت بزرگ ملی است. او می‌دانست میلیون‌ها نفر قرار است به این پلتفرم اعتماد کنند، پولشان را در آن نگه دارند، زندگی‌شان را با آن بسازند. پس با تمام توان وارد کار شد.
                    </p>
                    <p>
                      مجتبی مسئولیت طراحی معماری فنی، پیاده‌سازی لایه‌های امنیتی، تست نفوذ، بهینه‌سازی سرعت و آماده‌سازی زیرساخت برای میلیون‌ها کاربر را بر عهده دارد. او کسی است که شب‌ها تا صبح کد می‌زند تا مطمئن شود هیچ نقطه ضعفی وجود ندارد.
                    </p>
                    <p className="text-amber-400 font-semibold text-xl">
                      «فناوری باید عدالت بیاورد، نه فاصله بیشتر ایجاد کند. SafiPay برای من یعنی دادن قدرت به مردم تا خودشان آینده‌شان را بسازند.»
                    </p>
                    <p>
                      مجتبی نه تنها یک برنامه‌نویس است؛ او یک معمار فنی است که می‌خواهد سیستمی بسازد که سال‌ها بعد هم پایدار و امن بماند. ترکیب دانش عمیق فنی او با ویژن شاهین، SafiPay را به یک پروژه قوی و قابل اعتماد تبدیل کرده است.
                    </p>
                    <p className="italic text-amber-300">
                      «هر خط کدی که می‌نویسم، برای مادری است که منتظر پول فرزندش است، برای جوانی که می‌خواهد رویای خود را دنبال کند، و برای آینده‌ای که افغان‌ها شایسته آن هستند.»
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* بقیه بخش‌های صفحه (داستان، چشم‌انداز، ارزش‌ها، کال‌تو‌اکشن) */}
        {/* می‌تونی همین بخش‌ها را از کد قبلی‌ات کپی کنی یا اگر می‌خوای تغییر بدم بگو */}
        {/* ... */}
      </div>
    </>
  );
}