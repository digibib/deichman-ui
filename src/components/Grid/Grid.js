import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Grid = ({ full, reversed, right, center, middle, children }) => {
  const gridClass = classNames({
    grid: true,
    'grid--full': full,
    'grid--rev': reversed,
    'grid--right': right,
    'grid--center': center,
    'grid--middle': middle,
  });

  return <div className={gridClass}>{children}</div>;
};

Grid.defaultProps = {
  full: false,
  reversed: false,
  right: false,
  center: false,
  middle: false,
};

Grid.propTypes = {
  full: PropTypes.bool,
  reversed: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  children: PropTypes.node,
};

export default Grid;
