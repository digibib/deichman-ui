import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconMap from '../../../public/icons.svg';

import './styles.css';

const Icon = ({ size, type, title, inverted, full }) => {
  const iconClass = classNames({
    icon: true,
    'icon--full': full,
    'icon--inverted': inverted,
  });

  return (
    <span className={iconClass}>
      <svg role="img" title={title} width={size} height={size}>
        <use xlinkHref={`${iconMap}#${type}`} />
      </svg>
    </span>
  );
};

Icon.defaultProps = {
  inverted: false,
  title: 'ikon',
  size: 24,
  full: false,
  inverted: false,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  full: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default Icon;
