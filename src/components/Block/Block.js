import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Block = ({ top, bottom, left, right, responsive, children }) => {
  const blockClass = classNames({
    block: true,
    [`block--top-${top}`]: top,
    [`block--bottom-${bottom}`]: bottom,
    [`block--left-${left}`]: left,
    [`block--right-${right}`]: right,
    'block--responsive': responsive,
  });

  return <div className={blockClass}>{children}</div>;
};

Block.defaultProps = {
  top: false,
  bottom: false,
  left: false,
  right: false,
  responsive: false,
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  responsive: PropTypes.bool,
};

export default Block;
