import React from 'react';
import Gallery from '../components/gallery/Gallery';
import { Card } from '../components/card/Card';

import { useTranslation } from 'react-i18next';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
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
              imgSrc={require('../components/assets/events/42nd-anniversary.jpg')}
              imgAlt='Card Image 15'
              title={t('event-title-15')}
              description={t('event-description-15')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s/UeGc0BigdXQSx26_WsZFMA'
            />
            <Card
              imgSrc={require('../components/assets/events/myname.png')}
              imgAlt='Card Image 19'
              title={t('event-title-19')}
              description={t('event-description-19')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s/yADRD6lneMyvGJ-gdVCMaA'
            />
          </div>

          <div className='col'>
            <Card
              imgSrc={require('../components/assets/events/manian.jpeg')}
              imgAlt='Card Image 20'
              title={t('event-title-20')}
              description={t('event-description-20')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s/4N2yjFGJpLHzgPCDjWZmYA'
            />
            <Card
              imgSrc={require('../components/assets/events/halloween.jpg')}
              imgAlt='Card Image 22'
              title={t('event-title-22')}
              description={t('event-description-22')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s/ZgSOejRfyPJvIrrG7h6XWw'
            />
          </div>

          <div className='col'>
            <Card
              imgSrc={require('../components/assets/events/nanyuecamp.jpeg')}
              imgAlt='Card Image 18'
              title={t('event-title-18')}
              description={t('event-description-18')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s/vSCXgqgBFusRZ2QeA0PoXw'
            />
            <Card
              imgSrc={require('../components/assets/events/winter-music.jpeg')}
              imgAlt='Card Image 21'
              title={t('event-title-21')}
              description={t('event-description-21')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s/pbYfDMGfyFBeAmaparnxbQ'
            />
          </div>

          <div className='col'>
            <Card
              imgSrc={require('../components/assets/events/opera.jpg')}
              imgAlt='Card Image 4'
              title={t('event-title-4')}
              description={t('event-description-4')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd'
            />
            <Card
              imgSrc={require('../components/assets/events/jiaozi.jpg')}
              imgAlt='Card Image 5'
              title={t('event-title-5')}
              description={t('event-description-5')}
              buttonText={t('read-more')}
              link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487565&idx=1&sn=498e4ed9f36525f212f7a8c59e237a48&chksm=e829ad96df5e2480e645834b27861ad7349508a3293fdbe6b4c9e8dc96cfd4e8684a3bb6aa27&token=701621739&lang=zh_CN#rd'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
