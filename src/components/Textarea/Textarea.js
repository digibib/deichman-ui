import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Textarea = ({ value, rows, placeholder, error, disabled, onChange, full }) => {
  const textAreaClass = classNames({
    textarea: true,
    'textarea--disabled': disabled,
    'textarea--error': error,
    'textarea--full': full,
  });

  return (
    <div className={textAreaClass}>
      <textarea
        className="textarea__field"
        rows={rows}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <div className="textarea__error">{error}</div>}
    </div>
  );
};

Textarea.defaultProps = {
  placeholder: '',
  rows: 3,
  error: false,
  disabled: false,
  full: false,
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  full: PropTypes.bool,
};

export default Textarea;
