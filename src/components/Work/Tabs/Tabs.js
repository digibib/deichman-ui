import React from 'react';
import PropTypes from 'prop-types';

import featuredSrc from '../../../../public/images/featured.png';

import './styles.css';

const Tabs = ({ isRecommended }) => {
  return (
    <div className="work-tabs">
      {isRecommended && (
        <span className="work-tabs__tab">
          <img src={featuredSrc} alt="anbefalt" /> Anbefalt
        </span>
      )}
    </div>
  );
};

Tabs.defaultProps = {
  isRecommended: false,
};

Tabs.propTypes = {
  isRecommended: PropTypes.bool,
};

export default Tabs;
