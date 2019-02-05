import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Overlay = ({ visible, opaque, white, onClick }) => {
  const overlayClass = classNames({
    overlay: true,
    'overlay--visible': visible,
    'overlay--opaque': opaque,
    'overlay--white': white,
  });
  return onClick ? (
    <button className={overlayClass} onClick={onClick} />
  ) : (
    <div className={overlayClass} />
  );
};

Overlay.defaultProps = {
  visible: false,
  opaque: false,
  white: false,
  onClick: false,
};

Overlay.propTypes = {
  visible: PropTypes.bool,
  opaque: PropTypes.bool,
  white: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Overlay;
