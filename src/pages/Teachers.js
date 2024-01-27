import React from "react";
import CardSlider from "../components/CardSlider";
import './Teachers.css';
import { useTranslation } from "react-i18next";

function Teachers () {

    const { t } = useTranslation();

    return (
        <div className="teacher">
            <h1>{t('meet-teachers')}</h1>
            <CardSlider />
            <p>{t('drag-see-more')}</p>
        </div>
    );
};

export default Teachers;