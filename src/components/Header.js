import React from "react";
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";
import Logo from "./assets/clsni-logo.png";
import './Header.css';

function Header () {
    return (
        <header>
            <HeaderTop />
            <div className="header-content">
                <img className="clsni-logo" src={Logo} alt="CLSNI Logo" />
                <Nav />
            </div>
        </header>
    );
};

export default Header;