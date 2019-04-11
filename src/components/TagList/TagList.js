import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
import classNames from 'classnames';

import debounce from '../../helpers/debounce';

import Item from './Item';

import './styles.css';

class TagList extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      rows: 0,
      isExpanded: false,
    };
    this.delayedCallback = debounce(this.calculateHeight, 100);
    this.container = React.createRef();
  }

  componentDidMount() {
    this.calculateHeight();
    window.addEventListener('resize', this.delayedCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.delayedCallback);
  }

  calculateHeight() {
    const height = this.container.current.scrollHeight;
    this.setState({ rows: height / 49 });
  }

  onToggleExpand(e) {
    e.preventDefault();
    this.setState({
      isExpanded: true,
    });
  }

  render() {
    const { rows } = this.state;
    const { children, limited, maxRows, expanded } = this.props;
    const limitActive = limited && rows > maxRows;
    const tagListClass = classNames({
      'tag-list': true,
      'tag-list--limited': limitActive,
      [`tag-list--max-rows-${maxRows}`]: limitActive,
      'tag-list--expanded': this.state.isExpanded || expanded,
    });

    return (
      <div className={tagListClass}>
        <ul className="tag-list__list" ref={this.container}>
          {children}
        </ul>
        {limitActive && (
          <a className="tag-list__show-more" href="#expand" onClick={this.onToggleExpand}>
            + Vis mer
          </a>
        )}
      </div>
    );
  }
}

TagList.defaultProps = {
  limited: false,
  expanded: false,
  maxRows: 2,
};

TagList.propTypes = {
  children: PropTypes.node.isRequired,
  limited: PropTypes.bool,
  maxRows: PropTypes.number,
  expanded: PropTypes.bool,
};

TagList.Item = Item;

export default TagList;
