import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Row = ({ children }) => {
  return <tr className="table__row">{children}</tr>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
