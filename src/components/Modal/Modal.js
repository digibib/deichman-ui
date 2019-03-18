import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Overlay from '../Overlay';

import './styles.css';

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
    const { name, width, visible, onClose, children } = this.props;

    const modalClass = classNames({
      modal: true,
      'modal--visible': visible,
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
        >
          <h1 className="modal__title sr" id={`${name}-modal`}>
            {name}
          </h1>
          {children}
        </div>
      </div>
    );
  }
}

Overlay.defaultProps = {
  visible: false,
  onClose: false,
  width: 'default',
};

Modal.propTypes = {
  visible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  children: PropTypes.node.isRequired,
};

export default Modal;
