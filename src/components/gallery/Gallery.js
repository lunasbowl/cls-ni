import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import { gallerySlides } from '../../data/gallerySlides';
import './Gallery.css';

function Gallery() {
  const { t } = useTranslation();
  const galleryRef = useRef(null);

  const images = gallerySlides.map((slide) => ({
    original: slide.original,
    renderItem: () => (
      <div className='gallery-slide'>
        <img
          src={slide.original}
          alt={t(slide.titleKey)}
          className='gallery-slide-image'
          style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
        />
        <div className='gallery-slide-overlay' />
        <div className='gallery-slide-content'>
          <p className='gallery-slide-eyebrow'>{t(slide.eyebrowKey)}</p>
          <h3 className='gallery-slide-title'>{t(slide.titleKey)}</h3>
          <p className='gallery-slide-description'>{t(slide.descriptionKey)}</p>
          {slide.isExternal === false ? (
            <Link
              to={slide.to}
              className='gallery-slide-button'>
              {t('read-more')}
            </Link>
          ) : (
            <a
              href={slide.to}
              target='_blank'
              rel='noopener noreferrer'
              className='gallery-slide-button'>
              {t('read-more')}
            </a>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div
      className='gallery-shell'
      onMouseEnter={() => galleryRef.current?.pause()}
      onMouseLeave={() => galleryRef.current?.play()}>
      <ReactImageGallery
        ref={galleryRef}
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={6000}
        additionalClass='modern-gallery'
      />
    </div>
  );
}

export default Gallery;
