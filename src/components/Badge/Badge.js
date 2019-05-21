import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Badge = ({ text, theme }) => {
  const badgeClass = classNames({
    badge: true,
    [`col-${theme}`]: true,
  });

  return (
    <div className={badgeClass}>
      <span className="badge__inner">{text}</span>
    </div>
  );
};

Badge.defaultProps = {
  text: '',
  theme: 'ok-1',
};

Badge.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
};

export default Badge;
