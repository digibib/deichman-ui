import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Overlay = ({ visible }) => {
  const overlayClass = classNames({
    overlay: true,
    'overlay--visible': visible,
  });
  return <div className={overlayClass} />;
};

Overlay.defaultProps = {
  visible: false,
};

Overlay.propTypes = {
  visible: PropTypes.bool,
};

export default Overlay;
