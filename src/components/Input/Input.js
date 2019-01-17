import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Input = ({ type, value, placeholder, error, disabled, onChange, full }) => {
  const inputClass = classNames({
    input: true,
    'input--disabled': disabled,
    'input--error': error,
    'input--full': full,
  });

  return (
    <div className={inputClass}>
      <input
        className="input__field"
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <div className="input__error">{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  error: false,
  disabled: false,
  full: false,
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  full: PropTypes.bool,
};

export default Input;
