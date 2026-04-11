import React from 'react';
import { teacherCategories } from '../../components/TeacherImages';
import './Teachers.css';
import { useTranslation } from 'react-i18next';

function Teachers() {
  const { t } = useTranslation();

  return (
    <div className='teacher'>
      <h1>{t('meet-teachers')}</h1>
      {teacherCategories.map((category) => (
        <section className='teacher-section' key={category.key}>
          <h2 className='teacher-section-heading'>{t(category.key)}</h2>
          <div className='teacher-grid'>
            {category.images.map((image, index) => (
              <div className='teacher-photo' key={index}>
                <img src={image} alt={`${t(category.key)} ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Teachers;
