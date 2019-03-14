import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Button = ({
  onClick,
  primary,
  disabled,
  small,
  condensed,
  children,
  full,
  icon,
  type,
  label,
}) => {
  const buttonClass = classNames({
    button: true,
    'button--primary': primary,
    'button--disabled': disabled,
    'button--small': small,
    'button--condensed': condensed,
    'button--with-icon': icon !== '',
    'button--full': full,
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={label}
      {...props}
    >
      {icon && <Icon type={icon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  label: false,
  primary: false,
  disabled: false,
  small: false,
  condensed: false,
  full: false,
  icon: '',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  condensed: PropTypes.bool,
  full: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
