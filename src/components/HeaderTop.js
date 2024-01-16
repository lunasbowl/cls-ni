import React from "react";
import './HeaderTop.css';
import FacebookIcon from './assets/Facebook_Logo_2023.png';

function HeaderTop() {
    return (
        <div className="header-top">
            <div className="social-links">
                <a href="https://www.facebook.com/chinesewelfareassociation" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="Facebook" />
                </a>
            </div>
        </div>
    );
}

export default HeaderTop;