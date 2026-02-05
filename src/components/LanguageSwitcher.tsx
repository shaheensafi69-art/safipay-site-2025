// src/components/LanguageSwitcher.tsx
'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => changeLanguage('fa')}
        className={`px-3 py-1 rounded ${i18n.language === 'fa' ? 'bg-amber-600 text-white' : 'hover:bg-amber-900'}`}
      >
        FA
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-amber-600 text-white' : 'hover:bg-amber-900'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ps')}
        className={`px-3 py-1 rounded ${i18n.language === 'ps' ? 'bg-amber-600 text-white' : 'hover:bg-amber-900'}`}
      >
        PS
      </button>
    </div>
  );
}