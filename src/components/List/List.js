import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from './Item';

import './styles.css';

const List = ({ bulleted, numbered, children }) => {
  const listClass = classNames({
    list: true,
    'list--bulleted': bulleted,
    'list--numbered': numbered,
  });

  return numbered ? (
    <ol className={listClass}>{children}</ol>
  ) : (
    <ul className={listClass}>{children}</ul>
  );
};

List.defaultProps = {
  bulleted: false,
  numbered: false,
};

List.propTypes = {
  bulleted: PropTypes.bool,
  numbered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

List.Item = Item;

export default List;
