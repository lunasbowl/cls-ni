import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Gallery from '../components/gallery/Gallery';
import { Card } from '../components/card/Card';
import { homePageCards } from '../data/homePageCards';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='homepage'>
        <div className='heading-h1'>
          <h1 className='welcome'>{t('welcome')}</h1>
          <h1 className='line'>&mdash;</h1>
          <h1 className='welcome-school'>{t('school')}</h1>
          <p>- {t('slogan')} -</p>
        </div>
        <div className='hp-gallery'>
          <Gallery />
        </div>
        <div
          className='event-cards'
          id='eventsSection'>
          {homePageCards.map((card) => (
            <Card
              key={card.link}
              imgSrc={card.imageSrc}
              imgAlt={card.imageAlt}
              title={t(card.titleKey)}
              description={t(card.descriptionKey)}
              buttonText={t('read-more')}
              link={card.link}
            />
          ))}
        </div>

        <button
          type='button'
          className={`homepage-back-to-top ${showBackToTop ? 'is-visible' : ''}`}
          onClick={scrollToTop}
          aria-label='Back to top'>
          <span aria-hidden='true'>↑</span>
          <span>Top</span>
        </button>
      </div>
    </>
  );
}

export default HomePage;
