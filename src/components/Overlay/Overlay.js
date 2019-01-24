import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Overlay = ({ visible, onClick }) => {
  const overlayClass = classNames({
    overlay: true,
    'overlay--visible': visible,
  });
  return onClick ? (
    <button className={overlayClass} onClick={onClick} />
  ) : (
    <div className={overlayClass} />
  );
};

Overlay.defaultProps = {
  visible: false,
  onClick: false,
};

Overlay.propTypes = {
  visible: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Overlay;
