// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';


function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='LanguageSwitcher'>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
    </div>
  );
}

export default LanguageSwitcher;
