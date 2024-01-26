import React from "react";
import './History.css';
import { useTranslation } from "react-i18next";

function History () {

    const { t } = useTranslation();

    return (
        <>
            <section className="about-history">
                <div className="history-title">
                    <h1>{t('history-page-title')}</h1>
                    <h2>{t('history-page-author')}</h2>
                </div>
                <div className="history-main">
                    <p>{t('history-page-para1')}</p>
                    <p>{t('history-page-para2')}</p>
                    <p>{t('history-page-para3')}</p>
                    <p>{t('history-page-para4')}</p>
                    <p>{t('history-page-para5')}</p>
                    <p>{t('history-page-para6')}</p>
                    <p>{t('history-page-para7')}</p>
                    <p>{t('history-page-para8')}</p>
                </div>
            </section>
        </>
    );
};

export default History;