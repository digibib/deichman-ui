import React from 'react';
import PropTypes from 'prop-types';

import logoSrc from '../../../public/images/logo.svg';
import { Icon } from '../../index';

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
          <Icon type="user" />
          <span>Din konto</span>
        </a>
        <a href="#" className="header__action">
          <Icon type="search" />
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
