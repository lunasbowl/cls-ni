import React from 'react';
import './Footer.css';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>School Location:</h4>
          <p>Central Building, Stranmillis University College</p>
          <p>Stranmillis Road</p>
          <p>Belfast BT9 5DY</p>
          <p>E-mail: chinese.school.ni@gmail.com</p>
        </div>
        <div className='qr-code'>
          <img src={require('../assets/qrcode-personal.pic.jpg')} />
          <p>{t('scan1')}</p>
        </div>
        <div className='qr-code'>
          <img src={require('../assets/qrcode-gongzhonghao.pic.jpg')} />
          <p>{t('scan2')}</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 CLSNI. All rights reserved. </p>
      </div>
    </footer>
  );
}
