import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, tagClass, children }) => {
  return (
    <button className={tagClass} onClick={onClick} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  tagClass: '',
};

Button.propTypes = {
  tagClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
