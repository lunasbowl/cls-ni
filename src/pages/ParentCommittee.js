import React from "react";
import './ParentCommittee.css';
import TableComponent from "../components/Table";
import { useTranslation } from "react-i18next";

function ParentCommittee () {

    const { t } = useTranslation();

    const tableData2 = [
        ["Name"],
        ["迟档玲"],
        ["余钦霞"],
        ["孔秋萍"],
        ["李静"],
        ["张燕"],
        ["譚慧尚"],
        ["钟沛沛"],
        ["古健雅"],
        ["陈美蓉"],
        ["黄刘咏诗"],
        ["郑国仪"],
        ["任雪"],
        ["刘迪彦"],
        ["伍銘德"],
        ["湯岩"],
        ["谭焕玉"],
        ["胡复艳"],
        ["白福丽"]
    ];

    return (
        <>
            <div className="parent">
                <h1>{t('parent-committee')}</h1>
                <h2>{t('school')} (2023-2024) </h2>
                <div className="table"><TableComponent data={tableData2} /></div>
            </div>
        </>
    )
};

export default ParentCommittee;