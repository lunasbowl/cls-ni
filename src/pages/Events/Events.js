import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { eventLinks } from '../../data/eventLinks';
import './Events.css';

function getEventLabel(eventLink, t) {
  const baseLabel = eventLink.label || t(eventLink.titleKey);
  const newBadge = '\uD83C\uDD95';

  return eventLink.isNew ? `${baseLabel} ${newBadge}` : baseLabel;
}

function Events() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const linksPerPage = 10;

  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = eventLinks.slice(indexOfFirstLink, indexOfLastLink);
  const totalPages = Math.ceil(eventLinks.length / linksPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className='event-section'>
      <div className='recent-events recent-events-hero'>
        <h1>{t('recent-events')}</h1>
      </div>

      <div>
        {currentLinks.map((link) =>
          link.isExternal === false ? (
            <Link
              key={link.to}
              to={link.to}
              className='event-link'>
              {getEventLabel(link, t)}
            </Link>
          ) : (
            <a
              key={link.to}
              href={link.to}
              className='event-link'
              target='_blank'
              rel='noopener noreferrer'>
              {getEventLabel(link, t)}
            </a>
          )
        )}
      </div>

      <div className='pagination-controls'>
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}>
          &laquo;
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}>
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default Events;
