import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

const DURATION = 6000;

const SLIDES = [
  {
    img: './gallery/gallery-1.jpg',
    labelKey: 'school',
    link: '/about-history',
    linkKey: 'read-more',
  },
  {
    img: './gallery/gallery-2.jpg',
    labelKey: 'see-events',
    link: '/events',
    linkKey: 'read-more',
  },
  {
    img: './gallery/gallery-3.jpg',
    labelKey: 'staff',
    link: '/about-faculty-and-staff',
    linkKey: 'read-more',
  },
];

function Gallery() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const TICK = 50;

    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + (TICK / DURATION) * 100, 100));
    }, TICK);

    timerRef.current = setTimeout(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
      setProgress(0);
    }, DURATION);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [current]);

  return (
    <div className="gallery-hero">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`gallery-slide${i === current ? ' active' : ''}`}
          aria-hidden={i !== current}
        >
          {/* Blurred backdrop — fills empty space on letterboxed images */}
          <div
            className="gallery-slide-bg"
            style={{ backgroundImage: `url(${slide.img})` }}
          />
          {/* Full image, never cropped */}
          <img
            className="gallery-slide-img"
            src={slide.img}
            alt=""
            aria-hidden="true"
          />
          <div className="gallery-overlay" />
          <div className="gallery-caption">
            <p className="gallery-caption-text">{t(slide.labelKey)}</p>
            <Link to={slide.link} className="gallery-caption-btn">
              {t(slide.linkKey)} →
            </Link>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="gallery-arrow gallery-arrow-prev" onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className="gallery-arrow gallery-arrow-next" onClick={next} aria-label="Next slide">
        ›
      </button>

      {/* Slide counter */}
      <div className="gallery-counter">
        {current + 1} / {SLIDES.length}
      </div>

      {/* Dots */}
      <div className="gallery-dots" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            className={`gallery-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="gallery-progress" aria-hidden="true">
        <div className="gallery-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default Gallery;
