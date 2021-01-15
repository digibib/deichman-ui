import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Overlay from '../Overlay';

import './styles.css';
import CircleButton from '../CircleButton';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }

  keyDown(e) {
    if (this.props.visible && e.keyCode === 27) {
      this.props.onClose && this.props.onClose(e);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown, false);
  }

  render() {
    const { name, width, visible, showClose, onClose, children, sizeW } = this.props;
    const sizeWidth = sizeW && sizeW !== "0px" ? {maxWidth: sizeW} : {};

    const modalClass = classNames({
      modal: true,
      'modal--visible': visible,
      'modal--with-close': showClose,
      'modal--narrow': width === 'narrow',
      'modal--medium': width === 'medium',
      'modal--wide': width === 'wide',
      'modal--full': width === 'full',
    });

    return (
      <div className={modalClass}>
        <Overlay visible={visible} onClick={onClose} forModal />
        <div
          className="modal__inner"
          role="dialog"
          aria-labelledby={`${name}-modal`}
          aria-hidden={!visible}
          style={sizeWidth}
        >
          <h1 className="modal__title sr" id={`${name}-modal`}>
            {name}
          </h1>
          {children}
        </div>
        {showClose && (
          <div className="modal__close" style={sizeWidth}>
            <CircleButton icon="close" label="close" onClick={onClose} />
          </div>
        )}
      </div>
    );
  }
}

Overlay.defaultProps = {
  visible: false,
  showClose: false,
  onClose: false,
  width: 'default',
  sizeW: "0px"
};

Modal.propTypes = {
  visible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  showClose: PropTypes.bool,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  children: PropTypes.node.isRequired,
  sizeW: PropTypes.string
};

export default Modal;
