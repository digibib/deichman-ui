import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Input = ({
  type,
  value,
  placeholder,
  error,
  disabled,
  showClear,
  onClear,
  onChange,
  full,
}) => {
  const inputClass = classNames({
    input: true,
    'input--disabled': disabled,
    'input--error': error,
    'input--show-clear': showClear,
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
      {showClear && (
        <button className="input__clear" onClick={onClear}>
          <Icon type="close" />
        </button>
      )}
      {error && <div className="input__error">{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  error: false,
  disabled: false,
  showClear: false,
  full: false,
  onClear: () => {},
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  showClear: PropTypes.bool,
  error: PropTypes.bool,
  onClear: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  full: PropTypes.bool,
};

export default Input;
