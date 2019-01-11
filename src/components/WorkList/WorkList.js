import React from 'react';
import PropTypes from 'prop-types';

import Work from '../Work';

import './styles.css';

const WorkList = ({ items }) => {
  return (
    <ul className="work-list">
      {items.map(item => (
        <li className="work-list__item" key={item.data.id}>
          <Work data={item.data} size={item.size} isRecommended={item.isRecommended} />
        </li>
      ))}
    </ul>
  );
};

WorkList.defaultProps = {
  items: [],
};

WorkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        media: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        languages: PropTypes.array.isRequired,
        selectedLanguage: PropTypes.string.isRequired,
        author: PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.string,
        }).isRequired,
      }).isRequired,
      size: PropTypes.string,
      isRecommended: PropTypes.bool,
    }),
  ),
};

export default WorkList;
