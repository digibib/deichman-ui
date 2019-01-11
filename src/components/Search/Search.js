import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
import classNames from 'classnames';

import magnifierSrc from '../../assets/images/magnifier.png';

import { Tag } from '../../index';

import './styles.css';

const ALL_FILTERS = [
  {
    value: 'Aktør',
    highlight: '/ak',
    text: 'tør',
    example: '[aktør]',
    description: 'Hamsun, Knut',
  },
  {
    value: 'Emne',
    highlight: '/em',
    text: 'ne',
    example: '[emne]',
    description: 'Nordlys, Arbeidsliv, Familie, etc',
  },
  {
    value: 'Sjanger',
    highlight: '/sj',
    text: 'anger',
    example: '[sjanger]',
    description: 'Drama, Science fiction, etc',
  },
];

class Search extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      value: '',
      showSuggestions: false,
      showFilters: false,
      activeFilters: [],
      suggestedFilters: [],
    };
  }

  onKeyDown(e) {
    const { value, activeFilters } = this.state;
    // Check if we should delete any filters
    if (e.keyCode === 8 && value.length === 0 && activeFilters.length > 0) {
      // Backspace pressed
      const newFilters = [...activeFilters];
      newFilters.pop();

      this.setState({
        activeFilters: newFilters,
      });
    }
  }

  onChange(e) {
    const { value = '' } = e.target;
    const firstChar = value.charAt(0);

    this.setState({
      value,
    });

    // Check if user has typed a "/" (show filters)
    if (firstChar === '/') {
      this.showFilters();
      this.updateSuggestedFilters();
    }
    if (this.state.showFilters && firstChar !== '/') {
      this.hideFilters();
    }
  }

  showFilters() {
    this.setState({
      showFilters: true,
    });
  }

  hideFilters() {
    this.setState({
      showFilters: false,
    });
  }

  updateSuggestedFilters() {
    const { value = '' } = this.state;
    const valueArr = value.split(' ');
    const matches = ALL_FILTERS.filter(f => f.highlight.includes(valueArr[0]));
    this.setState({
      suggestedFilters: matches,
    });
  }

  addFilter(type, value) {
    const newFilter = {
      type,
      value,
    };

    this.setState({
      activeFilters: [...this.state.activeFilters, newFilter],
      value: '',
      showFilters: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { value = '' } = this.state;
    const valueArr = value.split(' ');

    const matchingFilter = ALL_FILTERS.find(f => f.highlight === valueArr[0]);
    this.addFilter(matchingFilter.value, value.substr(3));
  }

  render() {
    const { value, showFilters, showSuggestions, activeFilters, suggestedFilters } = this.state;

    const searchClass = classNames({
      search: true,
      'search--show-suggestions': showSuggestions,
      'search--show-filters': showFilters,
    });

    return (
      <form className={searchClass} onSubmit={this.onSubmit}>
        <img src={magnifierSrc} alt="Søk" />

        <div className="search__inner">
          <ul className="search__active-filters">
            {activeFilters.map((filter, i) => (
              <div className="search__active-filter" key={i}>
                <Tag>
                  {filter.type}: {filter.value}
                </Tag>
              </div>
            ))}
          </ul>

          <div className="search__input-wrapper">
            <input
              className="search__input"
              placeholder="Søk på utgivelser, forfattere, etc"
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              value={value}
            />
            <div className="search__autocomplete">
              <li className="search__suggestions" isVisible={showSuggestions}>
                <p>Forslag</p>
              </li>
              <ul className="search__filters" isVisible={showFilters}>
                {suggestedFilters.map(filter => (
                  <li className="search__filter" key={filter.value}>
                    <div>
                      <strong>{filter.highlight}</strong>
                      <span>{filter.text}</span>
                    </div>
                    <div>{filter.example}</div>
                    <p>{filter.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  navItems: PropTypes.arrayOf({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Search;
