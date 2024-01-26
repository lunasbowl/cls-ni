import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Nav.css';

function Nav () {
    const { t } = useTranslation();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        console.log('Toggle clicked');
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`nav ${isNavOpen ? "active" : ""}`}>
            <button className="navbar-toggle" onClick={toggleNav}>
                ☰
            </button>
            <div className="nav-items">
                <div className="nav-item dropdown">
                    <Link to="/" >≡ {t('home')}</Link>
                </div>
                <div className="nav-item dropdown">
                    <span className="nav-link">≡ {t('about')}</span>
                    <div className="dropdown-content">
                        <Link to="/about-constitution" className="dropdown-item">
                            {t('constitution')}
                        </Link>
                        <Link to="/about-history" className="dropdown-item">
                            {t('history')}
                        </Link>
                        <Link to="/about-management-committee" className="dropdown-item">
                            {t('management-committee')}
                        </Link>
                        <Link to="/about-faculty-and-staff" className="dropdown-item">
                            {t('teachers')}
                        </Link>
                        <Link to="/about-parent-committee" className="dropdown-item">
                            {t('parent-committee')}
                        </Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/events">≡ {t('events')}</Link>
                </div>
                <div className="nav-item dropdown">
                    <span className="nav-link">≡ {t('resources')}</span>
                </div>
                <div className="nav-item dropdown">
                    <span className="nav-link">≡ {t('contacts')}</span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;