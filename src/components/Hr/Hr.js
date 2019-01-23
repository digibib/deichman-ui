import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Hr = ({ color }) => {
  const hrClass = classNames({
    hr: true,
    'hr--dark': color === 'dark',
    'hr--light': color === 'light',
  });
  return <hr className={hrClass} />;
};

Hr.defaultProps = {
  color: 'default',
};

Hr.propTypes = {
  color: PropTypes.string,
};

export default Hr;
