import React from 'react';
import PropTypes from 'prop-types';

import bookSrc from '../../../../public/images/book.png';

const WORK_TYPES = {
  book: 'Bok',
  film: 'Film',
  music: 'Musikk',
};

const MEDIA_ICONS = {
  book: bookSrc,
  film: '#',
  music: '#',
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
