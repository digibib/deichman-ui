import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.openByDefault,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { text, name, children } = this.props;

    const accordionClass = classNames({
      accordion: true,
      'accordion--open': isOpen,
    });

    return (
      <section className={accordionClass}>
        <button className="accordion__button" name={name} onClick={this.onToggle}>
          <div className="accordion__button-inner">
            <h4>{text}</h4>
            <Icon type={isOpen ? 'arrow-up' : 'arrow-down'} />
          </div>
        </button>
        <div className="accordion__contents">{isOpen && children}</div>
      </section>
    );
  }
}

Accordion.defaultProps = {
  name: 'Accordion',
  text: 'Show contents',
  openByDefault: false,
};

Accordion.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  openByDefault: PropTypes.bool,
};

export default Accordion;
