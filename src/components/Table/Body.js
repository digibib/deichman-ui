import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Body = ({ children }) => {
  return <tbody className="table__body">{children}</tbody>;
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
