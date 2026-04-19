import React from 'react';
import { useTranslation } from 'react-i18next';
import admission2026Image from './admission2026.png';
import './Admissions2026Page.css';

const REGISTRATION_FORM_URL = 'https://forms.gle/hwT1DhjzaC9mP7kG6';

function Admissions2026Page() {
  const { t } = useTranslation();

  return (
    <div className='admissions-2026-page'>
      <div className='admissions-2026-envelope'>
        <div className='admissions-2026-envelope-back' />
        <div className='admissions-2026-envelope-flap' />
        <div className='admissions-2026-poster'>
          <img
            src={admission2026Image}
            alt={t('event-title-23')}
            className='admissions-2026-image'
          />
          <a
            href={REGISTRATION_FORM_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='admissions-2026-button'>
            {t('admissions-2026-button')}
          </a>
        </div>
        <div className='admissions-2026-seal'>
          <span>CLSNI</span>
        </div>
        <div className='admissions-2026-envelope-front' />
      </div>
    </div>
  );
}

export default Admissions2026Page;
