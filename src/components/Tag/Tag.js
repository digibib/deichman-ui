import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import Icon from '../Icon';

const Tag = ({ text, link, active, onClick, onClear, showClear }) => {
  const tagClass = classNames({
    tag: true,
    'tag--active': active,
    'tag--link': link,
    'tag--button': onClick,
    'tag--show-clear': showClear,
  });
  return (
    <a href={link} className={tagClass}>
      {text}
      {showClear && (
        <button className="tag__clear" onClick={onClear && onClear}>
          <Icon type="close" />
        </button>
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
  onClear: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Tag;
