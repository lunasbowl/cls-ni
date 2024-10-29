// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // console.log('Changing language to:', lng); // Add this line for debugging
    i18n.changeLanguage(lng);
  };

  return (
    <div className='LanguageSwitcher'>
      <button onClick={() => changeLanguage('zh')}>简体中文</button>
      <button onClick={() => changeLanguage('hk')}>繁體中文</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
