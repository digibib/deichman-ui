import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Block = ({ top, bottom, left, right, children }) => {
  const blockClass = classNames({
    block: true,
    [`block--top-${top}`]: top,
    [`block--bottom-${bottom}`]: bottom,
    [`block--left-${left}`]: left,
    [`block--right-${right}`]: right,
  });

  return <div className={blockClass}>{children}</div>;
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

export default Block;
