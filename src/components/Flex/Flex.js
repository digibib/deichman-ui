import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Flex = ({ align, justify, wrap, children }) => {
  const flexClass = classNames({
    flex: true,
    [`flex--align-${align}`]: align,
    [`flex--justify-${justify}`]: justify,
    'flex--wrap': wrap,
  });

  return <div className={flexClass}>{children}</div>;
};

Flex.defaultProps = {
  align: 'center',
  justify: 'flex-start',
  wrap: false,
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.bool,
};

export default Flex;
