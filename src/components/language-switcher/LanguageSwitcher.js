// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LANGUAGE_STORAGE_KEY = 'clsni-language';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const languages = [
    { code: 'zh', label: '\u7b80\u4f53\u4e2d\u6587' },
    { code: 'hk', label: '\u7e41\u9ad4\u4e2d\u6587' },
    { code: 'en', label: 'English' },
  ];

  const changeLanguage = (lng) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
    }

    i18n.changeLanguage(lng);
  };

  return (
    <div className='LanguageSwitcher'>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type='button'
          className={currentLanguage === code ? 'is-active' : ''}
          onClick={() => changeLanguage(code)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
