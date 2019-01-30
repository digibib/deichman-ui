import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
import classNames from 'classnames';

import Item from './Item';

import './styles.css';

class TagList extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      isExpanded: false,
    };
  }

  onToggleExpand(e) {
    e.preventDefault();
    this.setState({
      isExpanded: true,
    });
  }

  render() {
    const { children, limited, expanded } = this.props;
    const tagListClass = classNames({
      'tag-list': true,
      'tag-list--limited': limited,
      'tag-list--expanded': this.state.isExpanded || expanded,
    });

    return (
      <div className={tagListClass}>
        <ul className="tag-list__list">{children}</ul>
        {limited && (
          <li className="tag-list__show-more">
            <a href="#expand" onClick={this.onToggleExpand}>
              + Vis mer
            </a>
          </li>
        )}
      </div>
    );
  }
}

TagList.defaultProps = {
  limited: false,
  expanded: false,
};

TagList.propTypes = {
  children: PropTypes.node.isRequired,
  limited: PropTypes.bool,
  expanded: PropTypes.bool,
};

TagList.Item = Item;

export default TagList;
