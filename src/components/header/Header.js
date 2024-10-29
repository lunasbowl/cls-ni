import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from '../header-top/HeaderTop';
import Nav from '../nav/Nav';
import Logo from '../assets/clsni-logo.png';
import './Header.css';

function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <HeaderTop />
      <div className='header-content'>
        <Link
          to='/'
          onClick={scrollToTop}>
          <img
            className='clsni-logo'
            src={Logo}
            alt='CLSNI Logo'
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
