import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Button = ({ name, label, onClick, checked, disabled, full }) => {
  const checkboxClass = classNames({
    checkbox: true,
    'checkbox--full': full,
    'checkbox--checked': checked,
    'checkbox--disabled': disabled,
  });

  return (
    <label className={checkboxClass} onClick={onClick} htmlFor={name} disabled={disabled}>
      <input className="checkbox__input" type="checkbox" name={name} id={name} checked={checked} />
      <span className="checkbox__box">
        <Icon type="check" />
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

Button.defaultProps = {
  checked: false,
  disabled: false,
  full: false,
  icon: '',
};

Button.propTypes = {
  name: PropTypes.bool.isRequired,
  label: PropTypes.bool.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
