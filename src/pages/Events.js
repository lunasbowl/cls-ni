import React from "react";
import { useTranslation } from "react-i18next";
import './Events.css';

import { Link } from "react-router-dom";

function Events () {

    const { t } = useTranslation();

    const links = [
        {
            to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486175&idx=1&sn=8d4e7133ceaecb06ae94e518d1cd72c1&chksm=e829b704df5e3e128ecf51443828608ac8a6c93620cffbe4855aa9e4e624dfff3156699c58b0&token=1193322797&lang=zh_CN#rd',
            name: t('event-title-1')
        },
        {
            to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd',
            name: t('event-title-2')
        },
        {
            to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247487410&idx=1&sn=0fc6b9866ab3b792881e720b80cf13c7&chksm=e829b269df5e3b7f6a48e7afe0fc2415b1e8f8f7b5c4a2f77afc4cba91e20988433c7217554e&token=1193322797&lang=zh_CN#rd',
            name: t('event-title-3')
        },
        {
            to: 'https://mp.weixin.qq.com/s?__biz=MzIyMjczNTU0MA==&mid=2247486381&idx=2&sn=0b81449b8820cb03e53fc1f0857a7522&chksm=e829b676df5e3f60330f9f2c60e4b98b9d44eca9b28b47d81fafd9aee248ff78596274a13d23&token=1193322797&lang=zh_CN#rd',
            name: t('event-title-4')
        }
    ];

    return (
        <div className="event-section">
            <div className="recent-events">
                <h1>{t('recent-events')}</h1>
            </div>
            <div>
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="event-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Events;