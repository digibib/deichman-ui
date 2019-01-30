import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Item = ({ children }) => <li className="tag-list__item">{children}</li>;

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;
