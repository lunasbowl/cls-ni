import React from 'react';
import './ManagementCommittee.css';
import TableComponent from '../../components/Table';
import { useTranslation } from 'react-i18next';

function ManagementCommittee() {
  const { t } = useTranslation();

  const tableData1 = [
    ['Position', 'Name'],
    ['Chair Person', 'YuanYuan McCoo Zhang'],
    ['Vice Chair Person', 'Mo Yuen Lee'],
    ['Member', 'Lili Li'],
    ['Treasurer', 'Min Guo'],
    ['Member', 'Yuet Kwan Lee'],
    ['Member', 'Hong Xin'],
    ['Member', 'Huiru Zheng'],
    ['Member', 'Yan Tang'],
    ['Member', 'Min Shen'],
    ['Member', 'Wai Cheong Lee'],
    ['Member', 'Yee Wan Rita Ku'],
    ['Secretary', 'Yue Deng'],
    ['Member', 'Mai Dung Tran'],
    ['Member', 'Louisa Wing Sze Lau Wong'],
    ['Member', 'Peipei Zhong'],
  ];

  return (
    <>
      <div className='management'>
        <h1>{t('management-committee')}</h1>
        <h2>{t('school')} (2023) </h2>
        <div className='table'>
          <TableComponent data={tableData1} />
        </div>
      </div>
    </>
  );
}

export default ManagementCommittee;
