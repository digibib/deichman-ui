import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Icon = ({ size, type, title, light, dark, full }) => {
  const iconClass = classNames({
    icon: true,
    'icon--full': full,
    'icon--light': light,
    'icon--dark': dark,
  });

  return (
    <span className={iconClass}>
      <svg role="img" title={title} width={size} height={size}>
        <use xlinkHref={`icon-map#${type}`} />
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
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  full: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
};

export default Icon;
