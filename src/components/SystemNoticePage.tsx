'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Clock,
  CheckCircle2,
  Lock,
  Landmark,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  FileText,
  ShieldCheck,
  Building2,
  Sparkles,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';

interface SystemNoticeProps {
  lang: string;
}

export default function SystemNoticePage({ lang }: SystemNoticeProps) {
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);

  const contentByLang: Record<string, any> = {
    fa: {
      statusBadge: 'اطلاعیه رسمی سیستم بانکی صافی‌پی • در حال اعتبارسنجی نهایی اروپا',
      heading: 'سیستم تا این لحظه فعال نشده است',
      subheading:
        'پورتال حساب کاربری، ثبت‌نام و ورود دیجیتال صافی‌پی به منظور اعمال بالاترین استانداردهای امنیتی بانکداری اروپا و تکمیل مراحل قانونی در حال حاضر فعال نیست.',
      leadText:
        'به اطلاع کلیه هموطنان گرامی، تجار و کاربران بین‌المللی می‌رساند که پلتفرم بانکداری دیجیتال صافی‌پی (SafiPay) مراحل زیرساختی خود را با نظارت بر ضوابط دقیق بانکی اتحادیه اروپا به پیش می‌برد. دسترسی عمومی به بخش ورود و ایجاد حساب جدید تا پایان تست‌های نهایی امنیتی و پروتکل‌های ضد پولشویی مسدود بوده و به زودی با رونمایی رسمی در دسترس قرار خواهد گرفت.',
      detailsTitle: 'چرا ورود و ثبت‌نام در این لحظه غیرفعال است؟',
      detailsList: [
        {
          title: 'رعایت مقررات سخت‌گیرانه بانکی اروپا (EBA & PSD2)',
          desc: 'سیستم‌های تسویه و حساب‌های اختصاصی IBAN تحت استانداردهای اداره بانکداری اروپا (European Banking Authority) و دستورالعمل خدمات پرداخت (PSD2/PSD3) در حال هماهنگ‌سازی نهایی با شرکای بانکی دارای لایسنس معتبر اروپایی هستند.',
        },
        {
          title: 'تست نفوذپذیری، رمزنگاری و حفاظت داده‌ها (GDPR & ISO 27001)',
          desc: 'کلیه بسترهای تبادل ارز، نگهداری موجودی و اطلاعات مشتریان تحت سیستم رمزنگاری پیشرفته سخت‌افزاری (HSM) و مقررات عمومی حفاظت از داده‌های اتحادیه اروپا (GDPR) مورد ارزیابی قرار دارند تا نفوذناپذیری کامل دارایی‌ها تضمین گردد.',
        },
        {
          title: 'پیاده‌سازی مکانیزم‌های بین‌المللی مبارزه با پولشویی (AML & KYC)',
          desc: 'برای ارتقای بالاترین سطح انطباق بانکی بین‌المللی و تضمین تراکنش‌های شفاف و بدون وقفه در مقیاس جهانی، سیستم‌های هوشمند احراز هویت خودکار و پایش تراکنش‌ها (AMLD5/AMLD6) قبل از گشایش عمومی حساب‌ها در حال استقرار نهایی می‌باشند.',
        },
        {
          title: 'آماده‌سازی خطوط تسویه SEPA و کارت‌های بین‌المللی',
          desc: 'اتصال کامل به شبکه تسویه فوری اروپا (SEPA Instant) و تخصیص کارت‌های فیزیکی و مجازی برای تضمین دسترسی بی‌وقفه و کارمزد عادلانه در جریان پیاده‌سازی است.',
        },
      ],
      founderNoteTitle: 'پیام شاهین صافی (بنیان‌گذار و مدیر ارشد اجرایی صافی‌پی)',
      founderNote:
        '«هدف ما در صافی‌پی تنها ساخت یک برنامه موقت نبود؛ هدف ما خلق یک شاهراه مالی پایدار، مقتدر و بین‌المللی برای اتصال کاربران سراسر جهان به زیرساخت بانکداری پیشرفته اروپا و اقتصاد جهانی است. ما به هیچ عنوان کیفیت، امنیت و استانداردهای قانونی بین‌المللی را فدای شتاب‌زدگی نخواهیم کرد. تیم فنی و حقوقی ما شبانه‌روزی در حال کار هستند تا اولین تجربه شما از بازگشایی حساب، بدون کوچک‌ترین اختلال و در اوج امنیت بانکی رقم بخورد. از شکیبایی، همراهی و اعتماد ارزشمند شما صمیمانه سپاسگزاریم.»',
      timelineTitle: 'مراحل آمادگی فنی و حقوقی سیستم',
      steps: [
        { name: 'معماری هسته بانکداری و چندارزی', status: 'تکمیل شد (۱۰۰٪)', done: true },
        { name: 'یکپارچه‌سازی پروتکل‌های شتاب و IBAN اروپا', status: 'تکمیل شد (۱۰۰٪)', done: true },
        { name: 'ارزیابی‌های امنیتی، تست نفوذ و انطباق قانونی', status: 'مرحله پایانی (۹۰٪)', done: false, active: true },
        { name: 'افتتاح عمومی ثبت‌نام و فعال‌سازی پنل کاربری', status: 'به‌زودی', done: false },
      ],
      whatsappBtn: 'ارتباط مستقیم با تیم مدیریت در واتساپ',
      homeBtn: 'بازگشت به صفحه اصلی',
      privacyBtn: 'مطالعه سیاست حفظ حریم خصوصی بانکی',
      termsBtn: 'مطالعه شرایط و استانداردهای خدمات اروپا',
      contactInfo: 'در صورت نیاز به هماهنگی‌های تجاری، نمایندگی یا سرمایه‌گذاری با مدیریت صافی‌پی مستقیماً در ارتباط باشید:',
    },
    ps: {
      statusBadge: 'د صافي پي بانکي سیستم رسمي خبرتیا • په اروپا کې د وروستي اعتبارسنجۍ پړاو',
      heading: 'سیستم تر دې دمه فعال شوی نه دی',
      subheading:
        'د صافي پي د کاروونکي حساب، نوم لیکنې او ننووتلو ډیجیټلي پورتال د اروپا د بانکدارۍ د لوړو امنیتي معیارونو او قانوني پړاوونو د پوره کولو لپاره تر دې مهاله فعال نه دی.',
      leadText:
        'ټولو درنو هیوادوالو، سوداګرو او نړیوالو کاروونکو ته خبر ورکول کیږي چې د صافي پي (SafiPay) ډیجیټلي بانکدارۍ سیستم خپلې بنسټیزې چارې د اروپا د اتحادیې د سختو بانکي قوانینو سره سم پرمخ وړي. د نوي حساب پرانیستل او ننوتل تر هغو چې وروستۍ امنیتي پلټنې او د پیسو سپینولو ضد پروسې بشپړې نشي، په رسمي ډول بند دي او ډیر ژر به په ټولیزه توګه فعال شي.',
      detailsTitle: 'ولې تر دې دمه ننووتل او نوم لیکنه غیرفعال دي؟',
      detailsList: [
        {
          title: 'د اروپا د بانکدارۍ د مقرراتو بشپړ پلي کول (EBA & PSD2)',
          desc: 'د اروپا د بانکدارۍ ادارې او د تادیاتو خدماتو لارښودونو (PSD2/PSD3) سره سم د حسابونو د IBAN اختصاص او تادیاتو سیستمونه د اروپا له بااعتباره بانکونو سره په وروستي همغږۍ کې دي.',
        },
        {
          title: 'سخت امنیتي ازموینې او د معلوماتو ساتنه (GDPR & ISO 27001)',
          desc: 'د کاروونکو د شتمنیو د بشپړ خوندیتوب لپاره ټول مالي او هویتي معلومات د هارډویري کریپټوګرافي (HSM) او د اروپا د عمومي معلوماتو ساتنې مقرراتو (GDPR) تر چتر لاندې خوندي کیږي.',
        },
        {
          title: 'د پیسو سپینولو ضد نړیوال پړاوونه (AML & KYC)',
          desc: 'د دې لپاره چې د نړیوالو کاروونکو مالي راکړې ورکړې خوندي، شفافې او له نړیوالو معیارونو سره سمې وساتل شي، پرمختللي اتوماتیک هویت تاییدونکي سیستمونه او د معاملو څارنه د عامه پیل څخه مخکې په وروستي ازمایښت کې دي.',
        },
        {
          title: 'د SEPA چټکو انتقالاتو او نړیوالو کارتونو چمتووالی',
          desc: 'د اروپا په کچه د SEPA چټک شبکې سره نښلول او د فزیکي او مجازي کارتونو ویش تر بشپړ پلان لاندې تر کار لاندې دي.',
        },
      ],
      founderNoteTitle: 'د شاهین صافي (د صافي پي بنسټګر او اجرایوي مشر) پیغام',
      founderNote:
        '«په صافي پي کې زموږ نیت یوازې یو لنډمهاله اپلیکیشن جوړول نه و؛ موږ غواړو یو داسې پیاوړی، قانوني او تلپاتې مالي پل جوړ کړو چې کاروونکي او نړیوال سوداګر د نړۍ او اروپا له پرمختللي اقتصاد سره وتړي. موږ هیڅکله د سرعت لپاره کیفیت، امنیت او نړیوال بانکي قوانین تر پښو نه لاندې کوو. ډاډه اوسئ کله چې دروازې پرانیستل شي، تاسو به تر ټولو خوندي او بااعتباره تجربه ولرئ. ستاسو له بې ساري ملاتړ او باور څخه مننه کوو.»',
      timelineTitle: 'د سیستم د چمتووالي پړاوونه',
      steps: [
        { name: 'د مرکزي بانکدارۍ معمارۍ او څو اسعارو زیربنا', status: 'بشپړ شوی (۱۰۰٪)', done: true },
        { name: 'د اروپا د IBAN او SEPA پروتوکولونو نښلول', status: 'بشپړ شوی (۱۰۰٪)', done: true },
        { name: 'امنیتي ارزیابي، ازموینې او قانوني انطباق', status: 'وروستی پړاو (۹۰٪)', done: false, active: true },
        { name: 'د حساب پرانیستلو او ننووتلو عمومي پیل', status: 'ډیر ژر', done: false },
      ],
      whatsappBtn: 'په واټس‌اپ کې د مدیریت سره مستقیمه اړیکه',
      homeBtn: 'اصلي پاڼې ته ستنیدل',
      privacyBtn: 'د بانکي محرمیت تګلاره ولولئ',
      termsBtn: 'د اروپا د خدماتو شرایط او معیارونه ولولئ',
      contactInfo: 'د سوداګریزو اړیکو، شراکتونو او پوښتنو لپاره له مدیریت سره اړیکه ونیسئ:',
    },
    en: {
      statusBadge: 'SAFIPAY OFFICIAL BANKING NOTICE • EUROPEAN REGULATORY FINAL STAGING',
      heading: 'The System Is Not Yet Active',
      subheading:
        'The SafiPay digital banking user portal, customer registration, and account authentication systems are currently held in private institutional staging to finalize European regulatory compliance and bank-grade security audits.',
      leadText:
        'Please be advised that SafiPay is currently executing final deployment stages in accordance with European Union banking standards and international financial crime directives. Direct public user signup and online account login are temporarily disabled while institutional clearance, automated KYC/AML pipelines, and European IBAN allocation engines complete regulatory validation. Public access will be officially activated upon formal completion.',
      detailsTitle: 'Why Are Login and Registration Closed At This Time?',
      detailsList: [
        {
          title: 'European Banking Authority (EBA) & PSD2/PSD3 Regulatory Alignment',
          desc: 'Our clearing rails, dedicated multi-currency IBAN issuing infrastructure, and Open Banking APIs are being aligned with licensed European credit institutions under the Payment Services Directive (PSD2/PSD3) and EBA technical standards.',
        },
        {
          title: 'Bank-Grade Cryptographic Security & GDPR Certification',
          desc: 'We are conducting comprehensive third-party penetration testing and hardware security module (HSM) key hardening to guarantee absolute protection of customer funds and full compliance with the European General Data Protection Regulation (EU GDPR 2016/679).',
        },
        {
          title: 'Automated AML/CFT and Global Sanctions Gateways',
          desc: 'To maintain the highest standards of global financial compliance and ensure seamless cross-border flows, state-of-the-art AMLD5/AMLD6 screening algorithms and biometric identity verification mechanisms are undergoing strict institutional calibration.',
        },
        {
          title: 'SEPA Instant Clearing & Multi-Currency Payment Cards',
          desc: 'Direct integration with the Single Euro Payments Area (SEPA & SEPA Instant) network alongside Mastercard/Visa virtual and physical debit card issuance channels is reaching production readiness.',
        },
      ],
      founderNoteTitle: 'Executive Statement by Shaheen Safi (Founder & CEO, SafiPay)',
      founderNote:
        '"Our objective with SafiPay has never been to launch a quick, compromised utility. We are architecting an unyielding, internationally recognized financial highway that legitimately connects global users and enterprises with the modern European economy. We refuse to compromise on security, compliance, or regulatory rigor. Our engineering and compliance divisions are working around the clock so that when our portal opens, you experience a flawless, secure European-standard digital banking service. We deeply appreciate your patience, high anticipation, and unwavering trust."',
      timelineTitle: 'System Readiness & Activation Milestones',
      steps: [
        { name: 'Core Banking Engine & Multi-Currency Ledger', status: 'Completed (100%)', done: true },
        { name: 'European SEPA & IBAN Integration Framework', status: 'Completed (100%)', done: true },
        { name: 'Penetration Testing, Security Audits & AML Certification', status: 'Final Phase (90%)', done: false, active: true },
        { name: 'Public Retail Launch & Dashboard Gateway Activation', status: 'Activating Soon', done: false },
      ],
      whatsappBtn: 'Contact Executive Leadership on WhatsApp',
      homeBtn: 'Return to SafiPay Home',
      privacyBtn: 'Read European Privacy Policy',
      termsBtn: 'Read European Banking Terms',
      contactInfo: 'For priority institutional onboarding, corporate partnerships, or press inquiries, contact the executive team directly:',
    },
    de: {
      statusBadge: 'OFFIZIELLE BANKMITTEILUNG • REGULATORISCHE ABSCHLUSSPHASE IN EUROPA',
      heading: 'Das System ist derzeit noch nicht aktiv',
      subheading:
        'Das SafiPay-Digital-Banking-Portal, die Kundenregistrierung und die Konten-Authentifizierung befinden sich derzeit in einer geschlossenen institutionellen Bereitstellungsphase, um die Einhaltung europäischer Bankenstandards und Sicherheitsprüfungen abzuschließen.',
      leadText:
        'Wir möchten Sie darüber informieren, dass SafiPay derzeit die letzten Phasen der Bereitstellung gemäß den Richtlinien der Europäischen Union und internationalen Finanzvorschriften durchläuft. Der öffentliche Zugang für Registrierungen und Logins ist vorübergehend deaktiviert, während europäische IBAN-Zuweisungen und KYC/AML-Systeme behördlich validiert werden.',
      detailsTitle: 'Warum sind Login und Registrierung derzeit geschlossen?',
      detailsList: [
        {
          title: 'Einhaltung der Standards der Europäischen Bankenaufsichtsbehörde (EBA & PSD2)',
          desc: 'Unsere Abrechnungswege und IBAN-Systeme werden mit lizenzierten europäischen Kreditinstituten gemäß den Richtlinien für Zahlungsdienste (PSD2/PSD3) und EBA-Standards harmonisiert.',
        },
        {
          title: 'Bankensicherheit, HSM-Verschlüsselung & DSGVO-Konformität',
          desc: 'Wir führen umfangreiche Sicherheitsprüfungen und Penetrationstests durch, um den uneingeschränkten Schutz der Kundengelder und die strikte Einhaltung der Datenschutz-Grundverordnung (EU-DSGVO) zu gewährleisten.',
        },
        {
          title: 'Internationale Systeme zur Bekämpfung von Geldwäsche (AML & KYC)',
          desc: 'Zur Sicherstellung stabiler und rechtskonformer internationaler Geldflüsse werden automatisierte Prüfprotokolle (AMLD5/AMLD6) vor der Freigabe kalibriert.',
        },
        {
          title: 'SEPA-Echtzeitüberweisungen & Digitale Zahlungskarten',
          desc: 'Die direkte Anbindung an das SEPA-Instant-Netzwerk und die Ausgabe von Debitkarten stehen kurz vor dem produktiven Rollout.',
        },
      ],
      founderNoteTitle: 'Erklärung von Shaheen Safi (Gründer & CEO von SafiPay)',
      founderNote:
        '„Unser Ziel bei SafiPay ist es, eine nachhaltige, international anerkannte Finanzbrücke zu schaffen. Wir machen keine Kompromisse bei Sicherheit, gesetzlichen Vorschriften und europäischer Compliance. Vielen Dank für Ihre Geduld und Ihr Vertrauen.“',
      timelineTitle: 'Meilensteine der Systembereitschaft',
      steps: [
        { name: 'Kernbankensystem & Multi-Währungs-Ledger', status: 'Abgeschlossen (100%)', done: true },
        { name: 'Europäische SEPA- & IBAN-Infrastruktur', status: 'Abgeschlossen (100%)', done: true },
        { name: 'Sicherheitsaudits, Penetrationstests & AML-Zertifizierung', status: 'Endphase (90%)', done: false, active: true },
        { name: 'Öffentliche Freigabe des Dashboards & Registrierungen', status: 'In Kürze', done: false },
      ],
      whatsappBtn: 'Geschäftsleitung auf WhatsApp kontaktieren',
      homeBtn: 'Zur Startseite',
      privacyBtn: 'Datenschutzrichtlinie lesen',
      termsBtn: 'Europäische Nutzungsbedingungen lesen',
      contactInfo: 'Für institutionelle Partnerschaften und dringende Anfragen kontaktieren Sie uns direkt:',
    },
    fr: {
      statusBadge: 'AVIS BANCAIRE OFFICIEL • ÉTAPE FINALE DE CONFORMITÉ EUROPÉENNE',
      heading: "Le système n'est pas encore actif",
      subheading:
        "Le portail bancaire numérique SafiPay, l'enregistrement des utilisateurs et l'authentification des comptes sont actuellement en phase finale de déploiement institutionnel afin de finaliser la conformité réglementaire européenne.",
      leadText:
        "Veuillez noter que SafiPay finalise actuellement son infrastructure conformément aux normes bancaires de l'Union européenne et aux directives internationales de lutte contre la criminalité financière. L'accès public à la connexion et à la création de compte est temporairement suspendu.",
      detailsTitle: "Pourquoi la connexion et l'inscription sont-elles fermées ?",
      detailsList: [
        {
          title: "Alignement réglementaire ABE (EBA) et DSP2/DSP3",
          desc: "Nos systèmes de compensation et nos IBAN dédiés sont en cours d'intégration finale avec des établissements de crédit européens agréés.",
        },
        {
          title: 'Sécurité bancaire, cryptographie HSM et conformité RGPD',
          desc: 'Des tests de pénétration rigoureux sont menés pour garantir la protection absolue des fonds et la stricte conformité au RGPD (Règlement UE 2016/679).',
        },
        {
          title: 'Systèmes automatisés de lutte contre le blanchiment (AML/KYC)',
          desc: 'Des algorithmes avancés de vérification d’identité et de conformité aux directives 5AMLD/6AMLD sont en cours de calibrage final.',
        },
        {
          title: 'Virements SEPA Instantanés et cartes bancaires internationales',
          desc: 'L’interconnexion directe avec le réseau SEPA et l’émission de cartes physiques et virtuelles entrent en phase de mise en production.',
        },
      ],
      founderNoteTitle: 'Déclaration de Shaheen Safi (Fondateur & PDG de SafiPay)',
      founderNote:
        '« Notre vision avec SafiPay est de bâtir un pont financier robuste et durable connectant les utilisateurs du monde entier à l’infrastructure bancaire européenne et à l’économie moderne. Nous ne faisons aucun compromis sur la sécurité et la légitimité juridique. Merci pour votre patience et votre confiance. »',
      timelineTitle: 'Étapes de préparation du système',
      steps: [
        { name: 'Moteur bancaire central et registre multidevises', status: 'Terminé (100%)', done: true },
        { name: 'Intégration SEPA et infrastructure IBAN européenne', status: 'Terminé (100%)', done: true },
        { name: 'Audits de sécurité, tests et conformité LCB-FT', status: 'Phase finale (90%)', done: false, active: true },
        { name: 'Lancement public et ouverture du tableau de bord', status: 'Bientôt disponible', done: false },
      ],
      whatsappBtn: 'Contacter la direction sur WhatsApp',
      homeBtn: 'Retour à l’accueil',
      privacyBtn: 'Lire la politique de confidentialité',
      termsBtn: 'Lire les conditions européennes',
      contactInfo: 'Pour les partenariats institutionnels ou demandes officielles, contactez la direction :',
    },
    ar: {
      statusBadge: 'إشعار مصرفي رسمي من صافي باي • المرحلة النهائية للاعتماد الأوروبي',
      heading: 'النظام غير مفعّل حتى هذه اللحظة',
      subheading:
        'بوابة الحساب المصرفي الرقمي والتسجيل وتسجيل الدخول في صافي باي مغلقة حالياً في مرحلة النشر المؤسسي المغلق بهدف استكمال أعلى معايير الأمان المصرفي والامتثال للقوانين الأوروبية.',
      leadText:
        'نحيطكم علماً بأن منصة صافي باي المصرفية الرقمية تمضي قدماً في استكمال بنيتها التحتية المتقدمة وفقاً لضوابط الهيئة المصرفية الأوروبية (EBA) والمعايير المالية الدولية. تم حجب التسجيل العام وتسجيل الدخول مؤقتاً لحين الانتهاء من الفحوصات الأمنية النهائية وتراخيص أرقام الآيبان الأوروبية، وسيتم الإطلاق الرسمي قريباً.',
      detailsTitle: 'لماذا تسجيل الدخول وإنشاء الحساب غير متاحين حالياً؟',
      detailsList: [
        {
          title: 'الامتثال لمعايير الهيئة المصرفية الأوروبية (EBA & PSD2)',
          desc: 'يجري العمل على ربط قنوات التسوية وتخصيص أرقام الحسابات الدولية (IBAN) مع مؤسسات ائتمانية أوروبية مرخصة وفقاً لتوجيهات خدمات الدفع (PSD2/PSD3).',
        },
        {
          title: 'أعلى مستويات الأمان التشفيري وحماية البيانات (GDPR & ISO 27001)',
          desc: 'تخضع جميع أنظمتنا لاختبارات اختراق دقيقة وتشفير عتادي (HSM) لضمان حماية أصول العملاء والامتثال للائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR).',
        },
        {
          title: 'أنظمة متقدمة لمكافحة غسل الأموال واعرف عميلك (AML & KYC)',
          desc: 'لحماية السمعة المالية للمجتمع الدولي وضمان تدفقات نقدية قانونية، يجري الانتهاء من معايرة أنظمة التحقق الذاتي ومطابقة القوائم الدولية.',
        },
        {
          title: 'التحويلات الأوروبية الفورية SEPA والبطاقات المصرفية',
          desc: 'يتم حالياً وضع اللمسات الأخيرة للربط المباشر بشبكة الدفع الأوروبية الموحدة (SEPA Instant) وإصدار البطاقات الرقمية والفعلية.',
        },
      ],
      founderNoteTitle: 'رسالة شاهين صافي (المؤسس والرئيس التنفيذي لصافي باي)',
      founderNote:
        '«هدفنا في صافي باي هو بناء صرح مالي دولي رصين ومستدام يربط المستخدمين ورواد الأعمال حول العالم بالاقتصاد الأوروبي والعالمي الحديث. لن نساوم أبداً على الأمان والامتثال القانوني الأوروبي الصارم. نشكركم على صبركم وثقتكم الكبيرة بنا، ونعدكم بتجربة مصرفية استثنائية عند الافتتاح الرسمي.»',
      timelineTitle: 'مراحل الجاهزية الفنية والقانونية',
      steps: [
        { name: 'المحرك المصرفي وسجل الحسابات متعدد العملات', status: 'مكتمل (۱۰۰٪)', done: true },
        { name: 'بروتوكولات الآيبان الأوروبي وشبكة SEPA', status: 'مكتمل (۱۰۰٪)', done: true },
        { name: 'التدقيق الأمني ومكافحة غسل الأموال والامتثال', status: 'المرحلة النهائية (۹۰٪)', done: false, active: true },
        { name: 'الافتتاح العام وتسجيل الحسابات واللوحة', status: 'قريباً جداً', done: false },
      ],
      whatsappBtn: 'التواصل المباشر مع الإدارة عبر واتساب',
      homeBtn: 'العودة إلى الصفحة الرئيسية',
      privacyBtn: 'قراءة سياسة الخصوصية المصرفية',
      termsBtn: 'قراءة شروط ومعايير الخدمات الأوروبية',
      contactInfo: 'للتنسيق التجاري والمؤسسي أو الاستفسارات المباشرة مع إدارة صافي باي:',
    },
    ru: {
      statusBadge: 'ОФИЦИАЛЬНОЕ УВЕДОМЛЕНИЕ SAFIPAY • ФИНАЛЬНАЯ ЕВРОПЕЙСКАЯ СЕРТИФИКАЦИЯ',
      heading: 'Система на данный момент не активна',
      subheading:
        'Портал учетных записей, регистрация и вход в систему цифрового банкинга SafiPay в настоящее время временно закрыты для завершения европейских регуляторных процедур и аудитов безопасности банковского уровня.',
      leadText:
        'Информируем вас о том, что SafiPay завершает финальные этапы развертывания инфраструктуры в строгом соответствии со стандартами Европейского банковского управления (EBA) и международными директивами по борьбе с финансовыми преступлениями. Публичный доступ к регистрации и входу временно приостановлен.',
      detailsTitle: 'Почему вход и регистрация закрыты в настоящее время?',
      detailsList: [
        {
          title: 'Соответствие стандартам Европейского банковского управления (EBA & PSD2)',
          desc: 'Интеграция европейских счетов IBAN и клиринговых шлюзов с лицензированными банками ЕС находится на завершающей стадии.',
        },
        {
          title: 'Банковская безопасность, криптография HSM и регламент GDPR',
          desc: 'Проводятся углубленные тесты на проникновение и аппаратное шифрование для гарантированной защиты активов согласно регламенту ЕС GDPR 2016/679.',
        },
        {
          title: 'Автоматизированный мониторинг и стандарты AML/KYC',
          desc: 'Внедряются протоколы противодействия отмыванию средств (5AMLD/6AMLD) и биометрическая проверка для обеспечения легитимности трансграничных операций.',
        },
        {
          title: 'Мгновенные расчеты SEPA и выпуск банковских карт',
          desc: 'Подключение к сети мгновенных европейских платежей SEPA Instant и шлюзам выпуска дебетовых карт выходит на финишную прямую.',
        },
      ],
      founderNoteTitle: 'Заявление Шахина Сафи (Основатель и генеральный директор SafiPay)',
      founderNote:
        '«Наша цель в SafiPay — создать непоколебимый, международно признанный финансовый мост, открывающий пользователям по всему миру доступ к европейской и современной глобальной экономике. Мы не идем на компромиссы в вопросах безопасности и европейского комплаенса. Благодарим за ваше доверие и терпение.»',
      timelineTitle: 'Этапы готовности системы',
      steps: [
        { name: 'Основной банковский движок и мультивалютный реестр', status: 'Завершено (100%)', done: true },
        { name: 'Европейская интеграция SEPA и IBAN', status: 'Завершено (100%)', done: true },
        { name: 'Аудит безопасности, тестирование и комплаенс AML', status: 'Финальная стадия (90%)', done: false, active: true },
        { name: 'Публичный запуск и открытие личного кабинета', status: 'Скоро открытие', done: false },
      ],
      whatsappBtn: 'Связаться с руководством в WhatsApp',
      homeBtn: 'На главную страницу',
      privacyBtn: 'Политика банковской конфиденциальности',
      termsBtn: 'Европейские условия обслуживания',
      contactInfo: 'Для институционального партнерства и прямого взаимодействия с руководством:',
    },
    tr: {
      statusBadge: 'RESMİ SAFIPAY BİLDİRİMİ • AVRUPA MEVZUATI NİHAİ DOĞRULAMA AŞAMASI',
      heading: 'Sistem Şu Anda Henüz Aktif Değildir',
      subheading:
        'SafiPay dijital bankacılık kullanıcı portalı, kayıt ve kimlik doğrulama sistemleri; Avrupa bankacılık standartları ve üst düzey güvenlik denetimlerinin tamamlanması amacıyla şu anda kapalıdır.',
      leadText:
        'SafiPay dijital bankacılık altyapısının, Avrupa Birliği bankacılık direktifleri ve uluslararası finansal suçlarla mücadele standartları çerçevesinde son aşamalarına geldiğini bildirmek isteriz. Genel kullanıcı kaydı ve giriş işlemleri, denetimler ve IBAN tahsis sistemleri tamamlanana kadar geçici olarak erişime kapalıdır.',
      detailsTitle: 'Giriş ve Kayıt Neden Şu Anda Kapalı?',
      detailsList: [
        {
          title: 'Avrupa Bankacılık Otoritesi (EBA) & PSD2/PSD3 Uyumluluğu',
          desc: 'Takas altyapımız ve çoklu para birimli IBAN tahsis sistemlerimiz, lisanslı Avrupa kredi kuruluşlarıyla entegrasyonun son aşamasındadır.',
        },
        {
          title: 'Banka Düzeyinde Güvenlik, HSM Şifreleme ve GDPR Standartları',
          desc: 'Müşteri fonlarının mutlak güvenliği ve AB Genel Veri Koruma Tüzüğü (GDPR) gereksinimleri için kapsamlı penetrasyon testleri uygulanmaktadır.',
        },
        {
          title: 'Otomatik Kara Para Aklamayı Önleme (AML & KYC) Sistemleri',
          desc: 'Küresel finansal entegrasyonu korumak adına gelişmiş AMLD5/AMLD6 tarama algoritmaları ve biyometrik kimlik onay sistemleri hazırlanmaktadır.',
        },
        {
          title: 'SEPA Anlık Ödeme ve Uluslararası Banka Kartları',
          desc: 'Tek Euro Ödeme Alanı (SEPA Instant) ağı ve fiziksel/sanal kart tahsis hatları üretim ortamına alınmaktadır.',
        },
      ],
      founderNoteTitle: 'Shaheen Safi’den Açıklama (SafiPay Kurucusu ve CEO’su)',
      founderNote:
        '“SafiPay ile amacımız geçici bir çözüm değil; dünya genelindeki kullanıcıları Avrupa bankacılık altyapısına ve modern küresel ekonomiye bağlayan güvenli bir finans köprüsü kurmaktır. Güvenlik ve yasal standartlardan asla ödün vermeyeceğiz. Sabrınız ve güveniniz için teşekkür ederiz.”',
      timelineTitle: 'Sistem Hazırlık Aşamaları',
      steps: [
        { name: 'Çekirdek Bankacılık Motoru ve Çoklu Para Defteri', status: 'Tamamlandı (%100)', done: true },
        { name: 'Avrupa SEPA ve IBAN Entegrasyonu', status: 'Tamamlandı (%100)', done: true },
        { name: 'Güvenlik Denetimleri, Testler ve AML Uyumluluğu', status: 'Son Aşama (%90)', done: false, active: true },
        { name: 'Genel Kullanıcı Kayıtlarının ve Panelin Açılışı', status: 'Yakında Aktif', done: false },
      ],
      whatsappBtn: 'WhatsApp Üzerinden Yönetimle İletişime Geçin',
      homeBtn: 'Ana Sayfaya Dön',
      privacyBtn: 'Gizlilik Politikasını Oku',
      termsBtn: 'Avrupa Hizmet Şartlarını Oku',
      contactInfo: 'Kurumsal ortaklıklar ve resmi görüşmeler için doğrudan yönetimle irtibata geçebilirsiniz:',
    },
  };

  const t = contentByLang[lang] || contentByLang.en;
  const whatsappUrl = `https://wa.me/447476620282?text=${encodeURIComponent(
    lang === 'fa'
      ? 'سلام جناب شاهین صافی / تیم مدیریت صافی‌پی. در رابطه با بازگشایی سیستم و درخواست عضویت زودهنگام پیام می‌دهم.'
      : lang === 'ps'
      ? 'سلام د صافي پي درانه مدیریت. د سیستم د فعالیدو او غړیتوب په اړه معلومات غواړم.'
      : lang === 'ar'
      ? 'مرحباً بإدارة صافي باي. أود الاستفسار عن موعد التفعيل الرسمي للنظام المصرفي.'
      : 'Hello SafiPay Executive Team, I am inquiring regarding the upcoming public launch and early institutional access.'
  )}`;

  return (
    <div
      className="min-h-screen w-full bg-[#020202] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans antialiased selection:bg-amber-500/30"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top Status Alert Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl text-amber-400 text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(245,158,11,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <AlertTriangle size={16} className="text-amber-400 shrink-0" />
            <span className="tracking-wide text-center">{t.statusBadge}</span>
          </div>
        </motion.div>

        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient banner line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />

          {/* Icon and Main Title */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.2)]">
              <ShieldAlert size={42} />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {t.heading}
            </h1>

            <p className="text-base sm:text-lg text-amber-300/90 font-medium leading-relaxed mb-6">
              {t.subheading}
            </p>

            <div className="p-4 sm:p-6 rounded-2xl border border-white/6 bg-white/[0.02] text-gray-300 text-sm sm:text-base leading-relaxed text-start sm:text-justify mb-10">
              {t.leadText}
            </div>
          </div>

          {/* Development Milestones Timeline */}
          <div className="mb-12 border-t border-b border-white/10 py-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-6 text-center">
              {t.timelineTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.steps.map((step: any, index: number) => (
                <div
                  key={index}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-all ${
                    step.done
                      ? 'border-emerald-500/20 bg-emerald-500/[0.04]'
                      : step.active
                      ? 'border-amber-500/30 bg-amber-500/[0.05] shadow-[0_0_20px_rgba(245,158,11,0.08)]'
                      : 'border-white/5 bg-white/[0.01]'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {step.done ? (
                      <CheckCircle2 size={18} className="text-emerald-400" />
                    ) : step.active ? (
                      <Clock size={18} className="text-amber-400 animate-spin" />
                    ) : (
                      <Lock size={18} className="text-gray-500" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white mb-1">{step.name}</p>
                    <p
                      className={`text-xs font-medium ${
                        step.done
                          ? 'text-emerald-400'
                          : step.active
                          ? 'text-amber-300'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Regulatory Reasons Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <Landmark size={22} className="text-amber-500" />
              <span>{t.detailsTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.detailsList.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/6 bg-white/[0.015] p-5 hover:border-amber-500/20 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 text-xs font-black">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Quote Card */}
          <div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-black/40 to-transparent p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles size={20} className="text-amber-400" />
              <h4 className="text-xs font-black tracking-wider uppercase text-amber-400">
                {t.founderNoteTitle}
              </h4>
            </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic font-light">
              {t.founderNote}
            </p>
          </div>

          {/* European Banking Compliance Badges */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-center">
            {['EBA GUIDELINES COMPLIANT', 'PSD2 / PSD3 SCA READY', 'EU GDPR (2016/679)', 'SEPA INSTANT ARCHITECTURE', 'ISO 27001 STAGING'].map(
              (badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-400 uppercase"
                >
                  {badge}
                </span>
              )
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/10 pt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#25D366] text-black font-black text-sm tracking-wide shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageCircle size={18} />
              <span>{t.whatsappBtn}</span>
            </a>

            <Link
              href={`/${lang}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold text-sm hover:border-amber-500/30 hover:bg-white/[0.06] transition-all"
            >
              {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              <span>{t.homeBtn}</span>
            </Link>
          </div>

          {/* Quick Legal links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <Link
              href={`/${lang}/privacy`}
              className="hover:text-amber-400 underline underline-offset-4 transition-colors"
            >
              {t.privacyBtn}
            </Link>
            <span>•</span>
            <Link
              href={`/${lang}/terms`}
              className="hover:text-amber-400 underline underline-offset-4 transition-colors"
            >
              {t.termsBtn}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
