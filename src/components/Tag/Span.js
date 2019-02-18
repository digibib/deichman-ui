import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ tagClass, children }) => {
  return <span className={tagClass}>{children}</span>;
};

Span.defaultProps = {
  tagClass: '',
};

Span.propTypes = {
  tagClass: PropTypes.string,
};

export default Span;
