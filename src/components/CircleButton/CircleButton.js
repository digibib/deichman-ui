import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const CircleButton = ({ label, onClick, inverted, disabled, icon, ...props }) => {
  const buttonClass = classNames({
    'circle-button': true,
    'circle-button--disabled': disabled,
    'circle-button--inverted': inverted,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} aria-label={label} {...props}>
      <span className="circle-button__inner">
        <Icon type={icon} />
      </span>
    </button>
  );
};

CircleButton.defaultProps = {
  inverted: false,
  disabled: false,
  onClick: () => {},
};

CircleButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
};

export default CircleButton;
