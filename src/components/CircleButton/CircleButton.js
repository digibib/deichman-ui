import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const CircleButton = ({ label, onClick, inverted, icon }) => {
  const buttonClass = classNames({
    'circle-button': true,
    'circle-button--inverted': inverted,
  });

  return (
    <button className={buttonClass} onClick={onClick} aria-label={label}>
      <span className="circle-button__inner">
        <Icon type={icon} />
      </span>
    </button>
  );
};

CircleButton.defaultProps = {
  inverted: false,
};

CircleButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
  icon: PropTypes.string.isRequired,
};

export default CircleButton;
