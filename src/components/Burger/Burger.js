import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Burger = ({ open, openText, closeText, onClick }) => {
  const burgerClass = classNames({
    burger: true,
    'burger--open': open,
  });

  return (
    <button className={burgerClass} onClick={onClick}>
      <span className="burger__text">{open ? closeText : openText}</span>
      <span className="burger__inner">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18H20" />
          <path d="M4 12H20" />
          <path d="M4 6H20" />
        </svg>
      </span>
    </button>
  );
};

Burger.defaultProps = {
  open: false,
  openText: 'Meny',
  closeText: 'Lukk',
};

Burger.propTypes = {
  open: PropTypes.bool,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
