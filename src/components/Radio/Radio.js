import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Radio = ({ name, value, label, onChange, checked, disabled, full, ...props }) => {
  const radioClass = classNames({
    radio: true,
    'radio--full': full,
    'radio--checked': checked,
    'radio--disabled': disabled,
  });

  return (
    <label className={radioClass}>
      <input
        className="radio__input"
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span className="radio__box">
        <span className="radio__dot" />
      </span>
      <span className="radio__label">{label}</span>
    </label>
  );
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  full: false,
  icon: '',
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
