import React from 'react';
import { useTranslation } from 'react-i18next';
import './Events.css';

import { Link } from 'react-router-dom';

function Events() {
  const { t } = useTranslation();

  const links = [
    {
      to: '/school-start-2024',
      name: '中文学校马上要开学啦！Chinese School Will Start Soon! 🔝',
    },
    {
      to: '/hiring',
      name: '北爱中文学校招聘启事（2024-2025学年）🔝',
    },
    {
      to: 'https://mp.weixin.qq.com/s/JqDq8LeWK_qUTxNWQAi3-A?poc_token=HHeNYGajarWqVKfsFh-ssQq61WoDtUQdxFQDZsL2',
      name: '北爱中文学校2024-2025学年入学报名',
    },

    {
      to: 'https://mp.weixin.qq.com/s/aM-SBsqott07-bHDtVmz9w',
      name: `${t('event-title-8')} 🆕`,
    },
    {
      to: 'https://mp.weixin.qq.com/s/RwNdHI29350rKXLVk63fng',
      name: t('event-title-7'),
    },
    {
      to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486175&idx=1&sn=8d4e7133ceaecb06ae94e518d1cd72c1&chksm=e829b704df5e3e128ecf51443828608ac8a6c93620cffbe4855aa9e4e624dfff3156699c58b0&token=1193322797&lang=zh_CN#rd',
      name: t('event-title-1'),
    },
    {
      to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487497&idx=1&sn=3b5498e90bbeff9988261e83d4f0502b&chksm=e829add2df5e24c4698d5197824708199b3e328ea281ceb7d9ca7b46b91ce0a775a7cb02c223&token=701621739&lang=zh_CN#rd',
      name: t('event-title-2'),
    },
    {
      to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487410&idx=1&sn=0fc6b9866ab3b792881e720b80cf13c7&chksm=e829b269df5e3b7f6a48e7afe0fc2415b1e8f8f7b5c4a2f77afc4cba91e20988433c7217554e&token=1193322797&lang=zh_CN#rd',
      name: t('event-title-3'),
    },
    {
      to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd',
      name: t('event-title-4'),
    },
    {
      to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487565&idx=1&sn=498e4ed9f36525f212f7a8c59e237a48&chksm=e829ad96df5e2480e645834b27861ad7349508a3293fdbe6b4c9e8dc96cfd4e8684a3bb6aa27&token=701621739&lang=zh_CN#rd',
      name: t('event-title-5'),
    },
    {
      to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487629&idx=1&sn=3a499ac043c676f14013869b05cc3286&chksm=e829ad56df5e2440fc1a50224fa5164cd87c8815699870636654a62fa0df35ecb9c6638b1f4a&token=701621739&lang=zh_CN#rd',
      name: t('event-title-6'),
    },
  ];

  const imageLink = {
    imageSrc: '../../public/hiring-img.jpg',
    altText: 'HIRING2024',
  };

  return (
    <div className='event-section'>
      <div className='recent-events'>
        <h1>{t('recent-events')}</h1>
      </div>
      <div>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className='event-link'
            target='_blank'
            rel='noopener noreferrer'>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Events;
