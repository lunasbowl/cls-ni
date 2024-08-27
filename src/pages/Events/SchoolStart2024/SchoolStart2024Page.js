import React from 'react';
import './SchoolStart2024Page.css';

function SchoolStartPage() {
  return (
    <div className='school-start-container'>
      <img
        src={require('./back-to-school.png')}
        alt='School Start 2024'
        className='school-start-img'
      />
    </div>
  );
}

export default SchoolStartPage;
