// i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import zhTranslation from '../locales/zh.json';
import hkTranslation from '../locales/hk.json';

const LANGUAGE_STORAGE_KEY = 'clsni-language';

const resources = {
  en: {
    translation: enTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
  hk: {
    translation: hkTranslation,
  },
};

function getInitialLanguage() {
  if (typeof window !== 'undefined') {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage && resources[savedLanguage]) {
      return savedLanguage;
    }
  }

  if (typeof navigator !== 'undefined') {
    const browserLanguages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    for (const language of browserLanguages) {
      const normalizedLanguage = language?.toLowerCase();

      if (!normalizedLanguage) {
        continue;
      }

      if (normalizedLanguage.startsWith('en')) {
        return 'en';
      }

      if (
        normalizedLanguage.startsWith('zh-hk') ||
        normalizedLanguage.startsWith('zh-tw') ||
        normalizedLanguage.startsWith('zh-mo')
      ) {
        return 'hk';
      }

      if (normalizedLanguage.startsWith('zh')) {
        return 'zh';
      }
    }
  }

  return 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
