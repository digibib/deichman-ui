import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block';

import Meta from './Meta';
import Languages from './Languages';
import Tabs from './Tabs';

import './styles.css';

const Work = ({ data, size, isRecommended }) => {
  const workClass = classNames({
    work: true,
    'work--small': size === 'small',
    'work--medium': size === 'medium',
    'work--large': size === 'large',
    'work--show-tabs': isRecommended,
  });

  return (
    <article className={workClass}>
      <div className="work__header">
        <Tabs isRecommended={isRecommended} />
      </div>
      <img className="work__image" src={data.image} alt={data.title} />
      <div className="work__meta">
        <Meta media={data.media} category={data.category} />
      </div>
      <div className="work__title">
        <strong>{data.title}</strong>
      </div>
      <a href={`/authors/${data.author.id}`} className="work__author">
        {data.author.name}
      </a>
      <div className="work__footer">
        <Languages selected={data.selectedLanguage} languages={data.languages} />
      </div>
    </article>
  );
};

Work.defaultProps = {
  size: 'small',
  isRecommended: false,
};

Work.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
};

export default Work;
