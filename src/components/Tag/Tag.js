import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Tag = ({ text, link }) => {
  return (
    <a href={link} className="tag">
      {text}
    </a>
  );
};

Tag.defaultProps = {
  text: '',
  link: '',
};

Tag.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Tag;
