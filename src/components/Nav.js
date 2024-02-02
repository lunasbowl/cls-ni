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


    return (
        <nav className={`nav ${isNavOpen ? "active" : ""}`}>
            <button className="navbar-toggle" onClick={toggleNav}>
                ☰
            </button>
            <div className="nav-items">
                <div className="nav-item dropdown">
                    <Link to="/" onClick={() => {window.location.href="/"}}>{t('home')}</Link>
                </div>
                <div className="nav-item dropdown">
                    <span className="nav-link">{t('about')}</span>
                    <div className="dropdown-content">
                        <Link to="/about-constitution" className="dropdown-item" onClick={() => {window.location.href="/about-constitution"}}>
                            {t('constitution')}
                        </Link>
                        <Link to="/about-history" className="dropdown-item" onClick={() => {window.location.href="/about-history"}}>
                            {t('history')}
                        </Link>
                        <Link to="/about-management-committee" className="dropdown-item" onClick={() => {window.location.href="/about-management-committee"}}>
                            {t('management-committee')}
                        </Link>
                        <Link to="/about-faculty-and-staff" className="dropdown-item" onClick={() => {window.location.href="/about-faculty-and-staff"}}>
                            {t('teachers')}
                        </Link>
                        <Link to="/about-parent-committee" className="dropdown-item" onClick={() => {window.location.href="/about-parent-committee"}}>
                            {t('parent-committee')}
                        </Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/events" onClick={() => {window.location.href="/events"}}>{t('events')}</Link>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/policy" onClick={() => {window.location.href="/policy"}}>{t('policy')}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;