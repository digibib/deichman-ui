import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Breakpoint = ({ children, small, medium, large, xlarge, up, down }) => {
  const breakpointClass = classNames({
    breakpoint: true,
    'breakpoint--small': small && !up && !down,
    'breakpoint--medium': medium && !up && !down,
    'breakpoint--large': large && !up && !down,
    'breakpoint--xlarge': xlarge && !up && !down,
    'breakpoint--small-up': small && up,
    'breakpoint--medium-up': medium && up,
    'breakpoint--large-up': large && up,
    'breakpoint--small-down': small && down,
    'breakpoint--medium-down': medium && down,
    'breakpoint--large-down': large && down,
  });
  return <div className={breakpointClass}>{children}</div>;
};

Breakpoint.defaultProps = {
  small: false,
  medium: false,
  large: false,
  xlarge: false,
  up: false,
  down: false,
};

Breakpoint.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  up: PropTypes.bool,
  down: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Breakpoint;
