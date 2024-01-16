import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav () {
    return (
        <nav className="nav">
            <div className="nav-item dropdown">
                <span className="about-link">≡ About</span>
                <div className="dropdown-content">
                    <Link to="/about-constitution" className="dropdown-item">
                        Constitution
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;