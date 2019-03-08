import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import Container from '../Container';

import './styles.css';

const Banner = ({ name, type, centered, children, showClose, closeLabel, onClose }) => {
  const bannerClass = classNames({
    banner: true,
    [`banner--${type}`]: true,
    'banner--centered': centered,
    'banner--show-close': showClose,
  });

  return (
    <aside
      className={bannerClass}
      role="dialog"
      aria-labelledby={`${name}-banner`}
      aria-hidden={false}
    >
      <p className="dialog__title sr" id={`${name}-banner`}>
        {name}
      </p>
      <Container>
        <div className="banner__inner">
          {children}
          {showClose && (
            <button className="banner__close" onClick={onClose} label={closeLabel}>
              <Icon type="close" light />
            </button>
          )}
        </div>
      </Container>
    </aside>
  );
};

Banner.defaultProps = {
  name: 'Info banner',
  type: 'notification',
  centered: false,
  showClose: true,
  closeLabel: 'Close',
};

Banner.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['notification', 'warning']),
  centered: PropTypes.bool,
  showClose: PropTypes.bool,
  closeLabel: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Banner;
