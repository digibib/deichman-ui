import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        <button
          className="accordion__button"
          onClick={this.onToggle}
          id={`accordion-${name}`}
          aria-controls={`accordion-section-${name}`}
          aria-expanded={isOpen}
        >
          <div className="accordion__button-inner">
            <h4>{text}</h4>
            <span className="accordion__icon" />
          </div>
        </button>
        <div
          className="accordion__contents"
          id={`accordion-section-${name}`}
          aria-labelledby={`accordion-${name}`}
        >
          {isOpen && children}
        </div>
      </section>
    );
  }
}

Accordion.defaultProps = {
  text: 'Show contents',
  openByDefault: false,
};

Accordion.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  openByDefault: PropTypes.bool,
};

export default Accordion;
