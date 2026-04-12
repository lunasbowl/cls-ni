import React from 'react';
import { useTranslation } from 'react-i18next';
import TableComponent from '../../components/table/Table';
import { managementCommitteeData } from '../../data/committees';
import './ManagementCommittee.css';

function ManagementCommittee() {
  const { t } = useTranslation();

  return (
    <>
      <div className='management'>
        <div className='management-hero'>
          <h1>{t('management-committee')}</h1>
          <h2>{t('school')} (2023)</h2>
        </div>
        <div className='table'>
          <TableComponent data={managementCommitteeData} />
        </div>
      </div>
    </>
  );
}

export default ManagementCommittee;
