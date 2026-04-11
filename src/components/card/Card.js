import React from 'react';
import './Card.css';

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link,
}) => {
  return (
    <a
      href={link}
      className='card-container'
      target='_blank'
      rel='noopener noreferrer'>
      {imgSrc && imgAlt && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className='card-img'
        />
      )}
      <div className='card-body'>
        {title && <h1 className='card-title'>{title}</h1>}
        {description && <p className='card-description'>{description}</p>}
      </div>
    </a>
  );
};
