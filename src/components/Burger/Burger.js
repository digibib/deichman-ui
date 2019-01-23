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
        <Icon type={open ? 'close' : 'menu'} />
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
