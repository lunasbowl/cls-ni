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
        <div className='marquee-strip'>
          <div className='marquee-content'>
            <span>北爱中文学校</span><span>✦</span>
            <span>CLSNI</span><span>✦</span>
            <span>Chinese Language School Northern Ireland</span><span>✦</span>
            <span>北爱中文学校</span><span>✦</span>
            <span>CLSNI</span><span>✦</span>
            <span>Chinese Language School Northern Ireland</span><span>✦</span>
            <span>北爱中文学校</span><span>✦</span>
            <span>CLSNI</span><span>✦</span>
            <span>Chinese Language School Northern Ireland</span><span>✦</span>
            <span>北爱中文学校</span><span>✦</span>
            <span>CLSNI</span><span>✦</span>
            <span>Chinese Language School Northern Ireland</span><span>✦</span>
          </div>
        </div>
        <div className='hp-gallery'>
          <Gallery />
        </div>
        <div
          className='event-cards'
          id='eventsSection'>
          <Card
            imgSrc={require('../components/assets/events/42nd-anniversary.jpg')}
            imgAlt='CLSNI 42nd Anniversary'
            title={t('event-title-15')}
            description={t('event-description-15')}
            link='https://mp.weixin.qq.com/s/UeGc0BigdXQSx26_WsZFMA'
          />
          <Card
            imgSrc={require('../components/assets/events/myname.png')}
            imgAlt='My Name Exhibition'
            title={t('event-title-19')}
            description={t('event-description-19')}
            link='https://mp.weixin.qq.com/s/yADRD6lneMyvGJ-gdVCMaA'
          />
          <Card
            imgSrc={require('../components/assets/events/manian.jpeg')}
            imgAlt='Year of the Horse Spring Festival'
            title={t('event-title-20')}
            description={t('event-description-20')}
            link='https://mp.weixin.qq.com/s/4N2yjFGJpLHzgPCDjWZmYA'
          />
          <Card
            imgSrc={require('../components/assets/events/halloween.jpg')}
            imgAlt='Halloween Holiday Camp'
            title={t('event-title-22')}
            description={t('event-description-22')}
            link='https://mp.weixin.qq.com/s/ZgSOejRfyPJvIrrG7h6XWw'
          />
          <Card
            imgSrc={require('../components/assets/events/nanyuecamp.jpeg')}
            imgAlt='South China Summer Camp'
            title={t('event-title-18')}
            description={t('event-description-18')}
            link='https://mp.weixin.qq.com/s/vSCXgqgBFusRZ2QeA0PoXw'
          />
          <Card
            imgSrc={require('../components/assets/events/winter-music.jpeg')}
            imgAlt='Winter Music Concert'
            title={t('event-title-21')}
            description={t('event-description-21')}
            link='https://mp.weixin.qq.com/s/pbYfDMGfyFBeAmaparnxbQ'
          />
          <Card
            imgSrc={require('../components/assets/events/opera.jpg')}
            imgAlt='Chinese Opera Culture Class'
            title={t('event-title-4')}
            description={t('event-description-4')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd'
          />
          <Card
            imgSrc={require('../components/assets/events/jiaozi.jpg')}
            imgAlt='Dumpling Workshop'
            title={t('event-title-5')}
            description={t('event-description-5')}
            link='https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487565&idx=1&sn=498e4ed9f36525f212f7a8c59e237a48&chksm=e829ad96df5e2480e645834b27861ad7349508a3293fdbe6b4c9e8dc96cfd4e8684a3bb6aa27&token=701621739&lang=zh_CN#rd'
          />
          <Card
            imgSrc={require('../components/assets/events/yunnan2024.jpeg')}
            imgAlt='Yunnan Summer Camp 2024'
            title={t('event-title-8')}
            description={t('event-description-8')}
            link='https://mp.weixin.qq.com/s/vSCXgqgBFusRZ2QeA0PoXw'
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
