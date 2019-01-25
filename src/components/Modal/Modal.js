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
    if (e.keyCode === 27) {
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
    const { name, visible, onClose, children } = this.props;

    const modalClass = classNames({
      modal: true,
      'modal--visible': visible,
    });

    return (
      <div className={modalClass}>
        <Overlay visible={visible} onClick={onClose} />
        <div className="modal__inner" role="dialog" aria-labelledby={name} aria-hidden={!visible}>
          {children}
        </div>
      </div>
    );
  }
}

Overlay.defaultProps = {
  visible: false,
  onClose: false,
};

Modal.propTypes = {
  visible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  children: PropTypes.node.isRequired,
};

export default Modal;
