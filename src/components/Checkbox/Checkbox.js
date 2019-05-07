import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Button = ({ name, label, onChange, checked, disabled, full, ...props }) => {
  const checkboxClass = classNames({
    checkbox: true,
    'checkbox--full': full,
    'checkbox--checked': checked,
    'checkbox--disabled': disabled,
  });

  return (
    <label className={checkboxClass} htmlFor={name}>
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        id={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Button;
