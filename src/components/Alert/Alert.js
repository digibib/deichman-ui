import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Alert = ({ type, centered, children, closeLabel, onClose }) => {
  const alertClass = classNames({
    alert: true,
    [`alert--${type}`]: true,
    'alert--centered': centered,
    'alert--show-close': !!onClose,
  });

  return (
    <aside className={alertClass} role="dialog" aria-hidden={false}>
      <div className="alert__inner">
        {children}
        {!!onClose && (
          <button className="alert__close" onClick={onClose} aria-label={closeLabel}>
            <Icon type="close" />
          </button>
        )}
      </div>
    </aside>
  );
};

Alert.defaultProps = {
  type: 'notification',
  centered: false,
  closeLabel: 'Close',
};

Alert.propTypes = {
  type: PropTypes.oneOf(['notification', 'warning']),
  centered: PropTypes.bool,
  closeLabel: PropTypes.string,
  onClose: PropTypes.func ,
  children: PropTypes.node.isRequired,
};

export default Alert;
