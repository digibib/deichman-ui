import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import Container from '../Container';

import './styles.css';

const Alert = ({ name, type, centered, children, showClose, closeLabel, onClose }) => {
  const alertClass = classNames({
    alert: true,
    [`alert--${type}`]: true,
    'alert--centered': centered,
    'alert--show-close': showClose,
  });

  return (
    <aside
      className={alertClass}
      role="dialog"
      aria-labelledby={`${name}-alert`}
      aria-hidden={false}
    >
      <p className="dialog__title sr" id={`${name}-alert`}>
        {name}
      </p>
        <div className="alert__inner">
          {children}
          {showClose && (
            <button className="alert__close" onClick={onClose} label={closeLabel}>
              <Icon type="close" />
            </button>
          )}
        </div>
    </aside>
  );
};

Alert.defaultProps = {
  name: 'Info alert',
  type: 'notification',
  centered: false,
  showClose: true,
  closeLabel: 'Close',
};

Alert.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['notification', 'warning']),
  centered: PropTypes.bool,
  showClose: PropTypes.bool,
  closeLabel: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;
