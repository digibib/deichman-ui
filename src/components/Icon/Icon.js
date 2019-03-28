import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import test from '../../../public/icons.svg';

import './styles.css';

const Icon = ({ size, type, title, light, dark, full, rotation }) => {
  const iconClass = classNames({
    icon: true,
    'icon--full': full,
    'icon--light': light,
    'icon--dark': dark,
  });

  const inlineStyle = rotation ? { transform: `rotate(${rotation}deg)` } : {};

  return (
    <span className={iconClass} style={inlineStyle}>
      <svg role="img" title={title} width={size} height={size}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </span>
  );
};

Icon.defaultProps = {
  title: 'ikon',
  size: 24,
  full: false,
  light: false,
  dark: false,
  rotation: 0,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rotation: PropTypes.number,
  full: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
};

export default Icon;
