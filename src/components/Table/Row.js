import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Row = ({ children }) => {
  const rowClass = classNames({
    table__row: true,
    'table__row--gray': gray,
    'table__row--white': white,
  });
  return <tr className={rowClass}>{children}</tr>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
