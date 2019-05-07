import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Button = ({
  onClick,
  primary,
  disabled,
  loading,
  small,
  condensed,
  children,
  full,
  icon,
  type,
  label,
  ...props
}) => {
  const buttonClass = classNames({
    button: true,
    'button--primary': primary,
    'button--disabled': disabled,
    'button--loading': loading,
    'button--small': small,
    'button--condensed': condensed,
    'button--with-icon': icon !== '',
    'button--full': full,
  });

  const ariaProps = {};

  if (label) {
    ariaProps['aria-label'] = label;
  }

  if (loading) {
    ariaProps['aria-busy'] = true;
    ariaProps['aria-label'] = 'laster';
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      {...ariaProps}
      {...props}
    >
      {icon && <Icon type={icon} />}
      {loading && <span className="button__loader" />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  label: false,
  primary: false,
  disabled: false,
  loading: false,
  small: false,
  condensed: false,
  full: false,
  icon: '',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  small: PropTypes.bool,
  condensed: PropTypes.bool,
  full: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
