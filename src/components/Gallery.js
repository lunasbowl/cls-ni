import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import './Gallery.css';

import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();

  const images = [
    {
      original: './gallery/school-start2024.jpg',
      description: (
        <div>
          <a
            href='/school-start-2024'
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
