import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Media = ({ children }) => {
  return <div className="overflow">{children}</div>;
};

Media.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Media;
