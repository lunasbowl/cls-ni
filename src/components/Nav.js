import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Nav.css';

function Nav () {
    const { t } = useTranslation();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const scrollToTop = () => {
        window.scrollTo(0,0);
        setIsNavOpen(false);
    };


    return (
        <nav className={`nav ${isNavOpen ? "active" : ""}`}>
            <button className="navbar-toggle" onClick={toggleNav}>
                ☰
            </button>
            <div className="nav-items">
                <div className="nav-item dropdown">
                    <Link to="/" onClick={scrollToTop}>{t('home')}</Link>
                </div>
                <div className="nav-item dropdown">
                    <span className="nav-link">{t('about')}</span>
                    <div className="dropdown-content">
                        <Link to="/about-constitution" className="dropdown-item" onClick={scrollToTop}>
                            {t('constitution')}
                        </Link>
                        <Link to="/about-history" className="dropdown-item" onClick={scrollToTop}>
                            {t('history')}
                        </Link>
                        <Link to="/about-management-committee" className="dropdown-item" onClick={scrollToTop}>
                            {t('management-committee')}
                        </Link>
                        <Link to="/about-faculty-and-staff" className="dropdown-item" onClick={scrollToTop}>
                            {t('teachers')}
                        </Link>
                        <Link to="/about-parent-committee" className="dropdown-item" onClick={scrollToTop}>
                            {t('parent-committee')}
                        </Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/events" onClick={scrollToTop}>{t('events')}</Link>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/policy" onClick={scrollToTop}>{t('policy')}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;