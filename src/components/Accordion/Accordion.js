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
    const { text, name, large, showDividers, children } = this.props;

    const accordionClass = classNames({
      accordion: true,
      'accordion--open': isOpen,
      'accordion--large': large,
      'accordion--show-dividers': showDividers,
    });

    const ariaName = name || text;

    return (
      <section className={accordionClass}>
        <button
          className="accordion__button"
          onClick={this.onToggle}
          id={`accordion-${ariaName}`}
          aria-controls={`accordion-section-${ariaName}`}
          aria-expanded={isOpen}
        >
          <div className="accordion__button-inner">
            <h2 className="accordion__title">{text}</h2>
            <span className="accordion__icon" />
          </div>
        </button>
        <div
          className="accordion__contents"
          id={`accordion-section-${ariaName}`}
          aria-labelledby={`accordion-${ariaName}`}
        >
          {isOpen && children}
        </div>
      </section>
    );
  }
}

Accordion.defaultProps = {
  name: '',
  text: 'Show contents',
  large: false,
  openByDefault: false,
};

Accordion.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  large: PropTypes.bool,
  openByDefault: PropTypes.bool,
};

export default Accordion;
