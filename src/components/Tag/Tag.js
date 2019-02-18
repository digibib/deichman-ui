import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from './Link';
import Button from './Button';
import Span from './Span';

import './styles.css';
import Icon from '../Icon';

const componentMap = {
  link: Link,
  button: Button,
  span: Span,
};

const Tag = ({ text, link, active, onClick, showClear }) => {
  const tagClass = classNames({
    tag: true,
    'tag--active': active,
    'tag--interactive': onClick || link,
    'tag--show-clear': showClear,
  });

  let tagType = 'span';
  if (link) {
    tagType = 'link';
  }
  if (onClick || showClear) {
    tagType = 'button';
  }
  const TagComponent = componentMap[tagType];

  return (
    <TagComponent onClick={onClick} link={link} tagClass={tagClass}>
      {text}
      {showClear && (
        <div className="tag__clear">
          <Icon size="16" type="close" />
        </div>
      )}
    </TagComponent>
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
