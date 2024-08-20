import React from 'react';
import Gallery from '../components/Gallery';
import { Card } from '../components/Card';

import { useTranslation } from 'react-i18next';
import './HomePageEn.css';

function HomePageEn() {
  const { t } = useTranslation();

  return (
    <div className='homepage'>
      <div className='heading-h1'>
        <h1 className='welcome'>{t('welcome')}</h1>
        <h1 className='line'>—</h1>
        <h1 className='welcome-school'>{t('school')}</h1>
        <p>- {t('slogan')} -</p>
      </div>
      <div className='hp-gallery'>
        <Gallery />
      </div>
      <div
        className='event-cards'
        id='eventsSection'>
        <div className='col'>
          <Card
            imgSrc={require('../components/assets/events/yunnan2024.jpeg')}
            imgAlt='Card Image 8'
            title={t('event-title-8')}
            description={t('event-description-8')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s/aM-SBsqott07-bHDtVmz9w'
          />
          <Card
            imgSrc={require('../components/assets/events/langsongfusai.jpeg')}
            imgAlt='Card Image 7'
            title={t('event-title-7')}
            description={t('event-description-7')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s/RwNdHI29350rKXLVk63fng'
          />
        </div>
        <div className='col'>
          <Card
            imgSrc={require('../components/assets/events/winter-music.jpg')}
            imgAlt='Card Image 1'
            title={t('event-title-1')}
            description={t('event-description-1')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487331&idx=1&sn=3b4eaf58e9778b4893ad7855353a95f7&chksm=e829b2b8df5e3bae8af48e7b0bbd01e4c7288ac8bcf773728e1b96e42eeaa325d4a3c1a9e29f&token=1193322797&lang=zh_CN#rd'
          />
          <Card
            imgSrc={require('../components/assets/events/new-year.jpg')}
            imgAlt='Card Image 2'
            title={t('event-title-2')}
            description={t('event-description-2')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487497&idx=1&sn=3b5498e90bbeff9988261e83d4f0502b&chksm=e829add2df5e24c4698d5197824708199b3e328ea281ceb7d9ca7b46b91ce0a775a7cb02c223&token=701621739&lang=zh_CN#rd'
          />
        </div>
        <div className='col'>
          <Card
            imgSrc={require('../components/assets/events/huayinfeiyang.jpg')}
            imgAlt='Card Image 3'
            title={t('event-title-3')}
            description={t('event-description-3')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487410&idx=1&sn=0fc6b9866ab3b792881e720b80cf13c7&chksm=e829b269df5e3b7f6a48e7afe0fc2415b1e8f8f7b5c4a2f77afc4cba91e20988433c7217554e&token=1193322797&lang=zh_CN#rd'
          />
          <Card
            imgSrc={require('../components/assets/events/opera.jpg')}
            imgAlt='Card Image 4'
            title={t('event-title-4')}
            description={t('event-description-4')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd'
          />
        </div>
        <div className='col'>
          <Card
            imgSrc={require('../components/assets/events/jiaozi.jpg')}
            imgAlt='Card Image 5'
            title={t('event-title-5')}
            description={t('event-description-5')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487565&idx=1&sn=498e4ed9f36525f212f7a8c59e237a48&chksm=e829ad96df5e2480e645834b27861ad7349508a3293fdbe6b4c9e8dc96cfd4e8684a3bb6aa27&token=701621739&lang=zh_CN#rd'
          />
          <Card
            imgSrc={require('../components/assets/events/langsong.jpg')}
            imgAlt='Card Image 6'
            title={t('event-title-6')}
            description={t('event-description-6')}
            buttonText={t('read-more')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487629&idx=1&sn=3a499ac043c676f14013869b05cc3286&chksm=e829ad56df5e2440fc1a50224fa5164cd87c8815699870636654a62fa0df35ecb9c6638b1f4a&token=701621739&lang=zh_CN#rd'
          />
        </div>
      </div>
    </div>
  );
}

export default HomePageEn;
