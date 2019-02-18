import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import Icon from '../Icon';

const Tag = ({ text, link, active, onClick, showClear }) => {
  const tagClass = classNames({
    tag: true,
    'tag--active': active,
    'tag--link': link,
    'tag--button': onClick,
    'tag--show-clear': showClear,
  });
  return (
    <a href={link} className={tagClass} onClick={onClick ? onClick : undefined}>
      {text}
      {showClear && (
        <div className="tag__clear">
          <Icon size="16" type="close" />
        </div>
      )}
    </a>
  );
};

Tag.defaultProps = {
  text: '',
  active: false,
  showClear: false,
  link: false,
  onClick: false,
  onClear: false,
};

Tag.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  showClear: PropTypes.bool,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Tag;
