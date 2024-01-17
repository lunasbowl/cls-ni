import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Nav.css';

function Nav () {
    const { t } = useTranslation();

    return (
        <nav className="nav">
            <div className="nav-item dropdown">
                <span className="nav-link">≡ {t('about')}</span>
                <div className="dropdown-content">
                    <Link to="/about-constitution" className="dropdown-item">
                        {t('constitution')}
                    </Link>
                    <Link to="/about-history" className="dropdown-item">
                        {t('history')}
                    </Link>
                </div>
            </div>
            <div className="nav-item dropdown">
                <span className="nav-link">≡ {t('events')}</span>
            </div>
            <div className="nav-item dropdown">
                <span className="nav-link">≡ {t('resources')}</span>
            </div>
        </nav>
    );
};

export default Nav;