import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Overflow = ({ children }) => {
  return <div className="overflow">{children}</div>;
};

Overflow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Overflow;
