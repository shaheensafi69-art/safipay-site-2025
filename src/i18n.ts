// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(initReactI18next) // اتصال به React
  .use(LanguageDetector) // تشخیص زبان مرورگر
  .use(
    resourcesToBackend((language: any, namespace: any) =>
      import(`../public/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    fallbackLng: 'fa',
    supportedLngs: ['fa', 'ps', 'en', 'fr'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    detection: {
      order: ['path', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;