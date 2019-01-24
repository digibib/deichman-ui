import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Container = ({ children, color, width }) => {
  const containerClass = classNames({
    container: true,
    'container--narrow': width === 'narrow',
    'container--wide': width === 'wide',
    'container--gray': color === 'gray',
    'container--dark': color === 'dark',
  });

  return <div className={containerClass}>{children}</div>;
};

Container.defaultProps = {
  color: 'default',
  width: 'default',
};

Container.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
