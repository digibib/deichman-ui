import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Container = ({ children, color, preventCollapse, noGutters, ...props }) => {
  const containerClass = classNames({
    container: true,
    'container--gray': color === 'gray',
    'container--dark': color === 'dark',
    'container--prevent-collapse': preventCollapse,
    'container--no-gutters': noGutters,
  });

  return (
    <div className={containerClass} {...props}>
      <div className="container__inner">{children}</div>
    </div>
  );
};

Container.defaultProps = {
  color: 'default',
  preventCollapse: false,
  noGutters: false,
};

Container.propTypes = {
  color: PropTypes.string,
  preventCollapse: PropTypes.bool,
  noGutters: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
