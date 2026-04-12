import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRouteById, navigationItems } from '../../config/routes';
import './Nav.css';

function Nav() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => {
      const nextValue = !prevIsNavOpen;

      if (!nextValue) {
        setOpenGroup(null);
      }

      return nextValue;
    });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setIsNavOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (labelKey) => {
    setOpenGroup((currentGroup) =>
      currentGroup === labelKey ? null : labelKey
    );
  };

  return (
    <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
      <button
        className='navbar-toggle'
        type='button'
        onClick={toggleNav}
        aria-label='Toggle navigation'
        aria-expanded={isNavOpen}>
        <span />
        <span />
        <span />
      </button>
      <div className='nav-items'>
        {navigationItems.map((item) => {
          if (item.type === 'group') {
            const isGroupActive = item.children.some((routeId) => {
              const route = getRouteById(routeId);
              return route.path === location.pathname;
            });

            const isGroupOpen = openGroup === item.labelKey;

            return (
              <div
                key={item.labelKey}
                className={`nav-item dropdown ${isGroupActive ? 'is-current' : ''} ${
                  isGroupOpen ? 'is-open' : ''
                }`}>
                <button
                  type='button'
                  className='nav-link nav-group-trigger'
                  onClick={() => toggleGroup(item.labelKey)}
                  aria-expanded={isGroupOpen}>
                  {t(item.labelKey)}
                </button>
                <div className='dropdown-content'>
                  {item.children.map((routeId) => {
                    const route = getRouteById(routeId);
                    const isCurrent = route.path === location.pathname;

                    return (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={`dropdown-item ${isCurrent ? 'is-current' : ''}`}
                        onClick={scrollToTop}>
                        {t(route.labelKey)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          const route = getRouteById(item.routeId);

          return (
            <div
              key={route.path}
              className={`nav-item ${route.path === location.pathname ? 'is-current' : ''}`}>
              <Link
                className='nav-link'
                to={route.path}
                onClick={scrollToTop}>
                {t(route.labelKey)}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
