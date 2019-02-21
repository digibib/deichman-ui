import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Container = ({ children, color, width, preventCollapse, noGutters }) => {
  const containerClass = classNames({
    container: true,
    'container--narrow': width === 'narrow',
    'container--wide': width === 'wide',
    'container--gray': color === 'gray',
    'container--dark': color === 'dark',
    'container--prevent-collapse': preventCollapse,
    'container--no-gutters': noGutters,
  });

  return <div className={containerClass}>{children}</div>;
};

Container.defaultProps = {
  color: 'default',
  width: 'default',
  preventCollapse: false,
  noGutters: false,
};

Container.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  preventCollapse: PropTypes.bool,
  noGutters: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
