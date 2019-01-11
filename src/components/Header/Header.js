import React from 'react';
import PropTypes from 'prop-types';

import logoSrc from '../../assets/images/logo.svg';
import personSrc from '../../assets/images/person.png';
import searchSrc from '../../assets/images/search.png';

import './styles.css';

const Header = ({ navItems }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoSrc} alt="Deichman.no" />
      </div>
      <nav className="header__nav">
        {navItems.map(item => (
          <a className="header__nav-item" href={item.url}>
            {item.text}
          </a>
        ))}
      </nav>
      <div className="header__actions">
        <a href="#" className="header__action">
          <img src={personSrc} alt="Din konto" />
          <span>Din konto</span>
        </a>
        <a href="#" className="header__action">
          <img src={searchSrc} alt="Søk" />
          <span>Søk</span>
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  navItems: PropTypes.arrayOf({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
