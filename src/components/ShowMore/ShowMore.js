import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ShowMore = ({ text, ARIAControls, onClick }) => {
  return (
    <div className="show-more">
      <button
        className="show-more__button"
        onClick={onClick}
        aria-expanded="false"
        aria-controls={ARIAControls}
      >
        + {text}
      </button>
    </div>
  );
};

ShowMore.defaultProps = {
  text: 'Show more',
  ARIAControls: '',
};

ShowMore.propTypes = {
  text: PropTypes.string,
  ARIAControls: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ShowMore;
