import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Overlay = ({ visible, opaque, forModal, white, onClick, children }) => {
  const overlayClass = classNames({
    overlay: true,
    'overlay--visible': visible,
    'overlay--opaque': opaque,
    'overlay--for-modal': forModal,
    'overlay--white': white,
  });
  return onClick ? (
    <button className={overlayClass} onClick={onClick} tabIndex="-1" aria-hidden="true">
      {children}
    </button>
  ) : (
    <div className={overlayClass} tabIndex="-1" aria-hidden="true">
      {children}
    </div>
  );
};

Overlay.defaultProps = {
  visible: false,
  opaque: false,
  forModal: false,
  white: false,
  onClick: false,
};

Overlay.propTypes = {
  visible: PropTypes.bool,
  opaque: PropTypes.bool,
  white: PropTypes.bool,
  forModal: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Overlay;
