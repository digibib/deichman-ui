import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Textarea = ({
  value,
  rows,
  placeholder,
  error,
  disabled,
  onChange,
  label,
  full,
  ...props
}) => {
  const textAreaClass = classNames({
    textarea: true,
    'textarea--disabled': disabled,
    'textarea--error': error,
    'textarea--full': full,
  });

  return (
    <div className={textAreaClass}>
      {label && (
        <label htmlFor={name} className="caption">
          {label}
        </label>
      )}
      <textarea
        className="textarea__field"
        rows={rows}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {error && <div className="textarea__error">{error}</div>}
    </div>
  );
};

Textarea.defaultProps = {
  placeholder: '',
  label: '',
  rows: 3,
  error: false,
  disabled: false,
  full: false,
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  full: PropTypes.bool,
};

export default Textarea;
