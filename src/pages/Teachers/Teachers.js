import React from 'react';
import './Teachers.css';
import { useTranslation } from 'react-i18next';
import { teacherSections } from '../../data/teachers';

function Teachers() {
  const { t, i18n } = useTranslation();
  const isTraditionalChinese = (i18n.resolvedLanguage || i18n.language) === 'hk';

  return (
    <div className='teacher'>
      <div className='teacher-shell'>
        <div className='teacher-hero'>
          <p className='teacher-eyebrow'>{t('teachers')}</p>
          <h1>{t('meet-teachers')}</h1>
          <p className='teacher-intro'>{t('teachers-intro')}</p>
        </div>

        <div className='teacher-directory'>
          {teacherSections.map((section) => (
            <section
              key={section.key}
              className='teacher-section'>
              <div className='teacher-section-heading'>
                <h2>{t(section.key)}</h2>
              </div>

              <div className='teacher-grid'>
                {section.staff.map((member) => (
                  <article
                    key={`${member.nameEn}-${member.roleKey || member.role}`}
                    className='teacher-card'>
                    <div className={`teacher-card-image${member.imageStyle === 'circle' ? ' teacher-card-image-circle' : ''}`}>
                      <div className='teacher-card-photo'>
                      <img
                        src={member.image}
                        style={{ '--portrait-scale': member.imageScale, '--portrait-position': member.imagePosition }}
                        alt={`${member.nameEn} - ${member.roleKey ? t(member.roleKey) : member.role}`}
                      />
                      </div>
                    </div>
                    <div className='teacher-card-body'>
                      <p className='teacher-card-name-zh'>
                        {isTraditionalChinese ? member.nameHk : member.nameZh}
                      </p>
                      <h3>{member.nameEn}</h3>
                      <p className='teacher-card-role'>
                        {member.roleKey ? t(member.roleKey) : member.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teachers;
