import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../../index';

import './styles.css';

const Button = ({ onClick, primary, disabled, children, icon }) => {
  const buttonClass = classNames({
    button: true,
    'button--primary': primary,
    'button--disabled': disabled,
    'button--with-icon': icon !== '',
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {icon && <Icon type={icon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  disabled: false,
  icon: '',
};

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
