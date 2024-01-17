import React from "react";
import { Link } from 'react-router-dom';
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";
import Logo from "./assets/clsni-logo.png";
import './Header.css';

function Header () {
    return (
        <header>
            <HeaderTop />
            <div className="header-content">
                <Link to="/">
                    <img className="clsni-logo" src={Logo} alt="CLSNI Logo" />
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;