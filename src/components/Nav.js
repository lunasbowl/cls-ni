import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav className="nav">
            <Link to="/" className="nav-item">HomePage</Link>
            <Link to="/about-en" className="nav-item">About</Link>
        </nav>
    );
};

export default Nav;