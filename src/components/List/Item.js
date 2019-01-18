import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Row = ({ children }) => {
  return <li className="list__item">{children}</li>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
