import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import { Icon } from '../../index';

const Tag = ({ text, link, active, onClick, removable }) => {
  const tagClass = classNames({
    tag: true,
    'tag--active': active,
    'tag--link': link,
    'tag--button': onClick,
    'tag--show-remove': removable,
  });
  return (
    <a href={link} className={tagClass}>
      {text}
      {removable && <Icon type="arrow-right" />}
    </a>
  );
};

Tag.defaultProps = {
  text: '',
  active: false,
  removable: false,
  link: false,
  onClick: false,
};

Tag.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  removable: PropTypes.bool,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Tag;
