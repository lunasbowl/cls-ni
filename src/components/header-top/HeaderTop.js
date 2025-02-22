import React from 'react';
import './HeaderTop.css';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

function HeaderTop() {
  return (
    <div
      className='header-top'
      role='banner'>
      <LanguageSwitcher />
    </div>
  );
}

export default HeaderTop;
