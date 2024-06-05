import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import './Gallery.css';

import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();

  const images = [
    {
      original: './gallery/enroll2024.jpg',
      description: (
        <div>
          <a
            href='https://mp.weixin.qq.com/s/JqDq8LeWK_qUTxNWQAi3-A?poc_token=HHeNYGajarWqVKfsFh-ssQq61WoDtUQdxFQDZsL2'
            className='button'
            target='_blank'>
            {t('read-more')}
          </a>
        </div>
      ),
    },
    {
      original: './gallery/hiring.jpg',
      description: (
        <div>
          <a
            href='/hiring'
            className='button'>
            {t('read-more')}
          </a>
        </div>
      ),
    },
    {
      original: './gallery/gallery-1.jpg',
      description: (
        <div>
          {t('school')}
          <br />
          <a
            href='/about-history'
            className='button'>
            {t('read-more')}
          </a>
        </div>
      ),
    },
    {
      original: './gallery/gallery-2.jpg',
      description: (
        <div>
          {t('see-events')}
          <br />
          <a
            href='/events'
            className='button'>
            {t('read-more')}
          </a>
        </div>
      ),
    },
    {
      original: './gallery/gallery-3.jpg',
      description: (
        <div>
          {t('staff')}
          <br />
          <a
            href='/about-faculty-and-staff'
            className='button'>
            {t('read-more')}
          </a>
        </div>
      ),
    },
  ];

  return (
    <div>
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={6000}
      />
    </div>
  );
}

export default Gallery;
