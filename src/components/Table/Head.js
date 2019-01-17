import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Head = ({ children }) => {
  return <thead className="table__head">{children}</thead>;
};

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
