import React from "react";
import Gallery from "../components/Gallery";
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
            <div className="hp-card">
                
            </div>
        </>
    );
};

export default HomePageEn;