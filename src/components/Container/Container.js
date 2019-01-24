import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Container = ({ children }) => {
  const pageClass = classNames({
    page: true,
  });

  return <div className={pageClass}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
