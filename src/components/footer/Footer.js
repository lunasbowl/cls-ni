import React from 'react';
import './Footer.css';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='site-footer'>
      <div className='footer-content'>
        <div className='footer-brand'>
          <p className='footer-eyebrow'>{t('footer-eyebrow')}</p>
          <h3>{t('school')}</h3>
          <p className='footer-tagline'>{t('slogan')}</p>
        </div>

        <div className='footer-section footer-contact'>
          <h4>{t('footer-location-title')}</h4>
          <p>{t('footer-location-line-1')}</p>
          <p>{t('footer-location-line-2')}</p>
          <p>{t('footer-location-line-3')}</p>
          <a href='mailto:chinese.school.ni@gmail.com'>
            {t('footer-email')}
          </a>
        </div>

        <div className='footer-qr-group'>
          <div className='qr-code'>
            <img
              src={require('../assets/qrcode-personal.pic.jpg')}
              alt='Personal QR code'
            />
            <p>{t('scan1')}</p>
          </div>
          <div className='qr-code'>
            <img
              src={require('../assets/qrcode-gongzhonghao.pic.jpg')}
              alt='Public account QR code'
            />
            <p>{t('scan2')}</p>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>{t('footer-copyright')}</p>
      </div>
    </footer>
  );
}
