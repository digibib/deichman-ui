import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Input = ({ type, value, placeholder, error, disabled, onChange }) => {
  const inputClass = classNames({
    input: true,
    'input--disabled': disabled,
    'input--error': error,
  });

  return (
    <div className={inputClass}>
      <input
        className="input__inner"
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  error: false,
  disabled: false,
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Input;
