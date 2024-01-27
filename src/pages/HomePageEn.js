import React from "react";
import Gallery from "../components/Gallery";
import { Card } from "../components/Card";

import { useTranslation } from "react-i18next";
import './HomePageEn.css';

function HomePageEn () {

    const { t } = useTranslation();

    return (
        <>
            <div className="hp-gallery">
                <Gallery />
            </div>
            <div className="heading-h1">
                <h1 className="welcome">{t('welcome')}</h1>
                <h1 className="line">—</h1>
                <h1 className="welcome-school">{t('school')}</h1>
                <p>- {t('slogan')} -</p>
            </div>
            <div className="event-cards" id="eventsSection">
                <div className="col">
                    <Card
                        imgSrc={require('../components/assets/events/winter-music.jpg')}
                        imgAlt="Card Image 1"
                        title={t('event-title-1')}
                        description={t('event-description-1')}
                        buttonText={t('read-more')}
                        link="https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487331&idx=1&sn=3b4eaf58e9778b4893ad7855353a95f7&chksm=e829b2b8df5e3bae8af48e7b0bbd01e4c7288ac8bcf773728e1b96e42eeaa325d4a3c1a9e29f&token=1193322797&lang=zh_CN#rd"
                    />
                    <Card
                        imgSrc={require('../components/assets/events/new-year.jpg')}
                        imgAlt="Card Image 2"
                        title={t('event-title-2')}
                        description={t('event-description-2')}
                        buttonText={t('read-more')}
                        link="https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd"
                    />
                </div>
                <div className="col">
                    <Card
                        imgSrc={require('../components/assets/events/huayinfeiyang.jpg')}
                        imgAlt="Card Image 3"
                        title={t('event-title-3')}
                        description={t('event-description-3')}
                        buttonText={t('read-more')}
                        link="https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487410&idx=1&sn=0fc6b9866ab3b792881e720b80cf13c7&chksm=e829b269df5e3b7f6a48e7afe0fc2415b1e8f8f7b5c4a2f77afc4cba91e20988433c7217554e&token=1193322797&lang=zh_CN#rd"
                    />
                    <Card
                        imgSrc={require('../components/assets/events/opera.jpg')}
                        imgAlt="Card Image 4"
                        title={t('event-title-4')}
                        description={t('event-description-4')}
                        buttonText={t('read-more')}
                        link="https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd"
                    />
                </div>
            </div>
        </>
    );
};

export default HomePageEn;