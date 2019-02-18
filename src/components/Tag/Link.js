import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ link, tagClass, children }) => {
  return (
    <a href={link} className={tagClass}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  link: '',
  tagClass: '',
};

Link.propTypes = {
  link: PropTypes.string,
  tagClass: PropTypes.string,
};

export default Link;
