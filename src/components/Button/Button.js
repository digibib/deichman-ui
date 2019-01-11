import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Button = ({ onClick, primary, disabled, children }) => {
  const buttonClass = classNames({
    button: true,
    'button--primary': primary,
    'button--disabled': disabled,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  disabled: false,
};

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
