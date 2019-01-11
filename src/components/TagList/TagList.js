import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import './styles.css';

const TagList = ({ tags, limited }) => {
  return (
    <ul className="tag-list">
      {tags.map(tag => (
        <li className="tag-list__item">
          <Tag text={tag.text} link={tag.link} />
        </li>
      ))}
      {limited && (
        <li className="tag-list__show-more">
          <a href="#">+ Vis mer</a>
        </li>
      )}
    </ul>
  );
};

TagList.defaultProps = {
  tags: [],
  limited: false,
};

TagList.propTypes = {
  tags: PropTypes.array,
  limited: PropTypes.bool,
};

export default TagList;
