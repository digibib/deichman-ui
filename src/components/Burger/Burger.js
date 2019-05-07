import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Burger = ({ open, openText, closeText, label, onClick, ...props }) => {
  const burgerClass = classNames({
    burger: true,
    'burger--open': open,
  });

  return (
    <button className={burgerClass} onClick={onClick} aria-label={label} {...props}>
      <span className="burger__text">{open ? closeText : openText}</span>
      <span className="burger__inner">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6H19" />
          <path d="M5 12H19" />
          <path d="M5 18H19" />
        </svg>
      </span>
    </button>
  );
};

Burger.defaultProps = {
  open: false,
  openText: 'Meny',
  closeText: 'Lukk',
  label: 'Open main menu',
};

Burger.propTypes = {
  open: PropTypes.bool,
  label: PropTypes.string,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
