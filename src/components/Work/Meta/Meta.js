import React from 'react';
import PropTypes from 'prop-types';

const WORK_TYPES = {
  book: 'Bok',
  film: 'Film',
  music: 'Musikk',
};

const Meta = ({ media, category }) => {
  return (
    <p className="overline">
      <span>{WORK_TYPES[media]}</span>
      <span> &bull; </span>
      <span>{category}</span>
    </p>
  );
};

Meta.propTypes = {
  media: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Meta;
