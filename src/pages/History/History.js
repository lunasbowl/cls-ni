import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './History.css';

function getHeaderOffset() {
  const header = document.querySelector('header');

  if (!header) {
    return 24;
  }

  const headerStyles = window.getComputedStyle(header);

  if (headerStyles.position !== 'fixed') {
    return 24;
  }

  return Math.ceil(header.getBoundingClientRect().height) + 16;
}

function History() {
  const { t } = useTranslation();
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);

  const historySections = [
    {
      id: 'history-beginnings',
      ref: targetRef1,
      titleKey: 'history-section-1',
      paragraphs: ['history-page-para1', 'history-page-para2'],
    },
    {
      id: 'history-growth',
      ref: targetRef2,
      titleKey: 'history-section-2',
      paragraphs: ['history-page-para3', 'history-page-para4'],
    },
    {
      id: 'history-resilience',
      ref: targetRef3,
      titleKey: 'history-section-3',
      paragraphs: ['history-page-para5', 'history-page-para6'],
    },
    {
      id: 'history-community',
      ref: targetRef4,
      titleKey: 'history-section-4',
      paragraphs: ['history-page-para7', 'history-page-para8'],
    },
  ];

  const scrollToTarget = (targetRef) => {
    if (targetRef?.current) {
      const offset = targetRef.current.offsetTop - getHeaderOffset();

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className='about-history'>
      <div className='history-hero'>
        <p className='history-eyebrow'>{t('history-page-eyebrow')}</p>
        <h1>{t('history-page-title')}</h1>
        <h2>{t('history-page-author')}</h2>
      </div>

      <div className='history-layout'>
        <aside className='history-sidebar'>
          <div className='history-sidebar-card'>
            <h3>{t('history-page-guide')}</h3>
            <ol>
              {historySections.map((section) => (
                <li key={section.id}>
                  <button onClick={() => scrollToTarget(section.ref)}>
                    {t(section.titleKey)}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className='history-main'>
          {historySections.map((section) => (
            <article
              key={section.id}
              ref={section.ref}
              id={section.id}
              className='history-section-card'>
              <h3>{t(section.titleKey)}</h3>
              {section.paragraphs.map((paragraphKey) => (
                <p key={paragraphKey}>{t(paragraphKey)}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default History;
