import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const GridItem = ({ base, small, medium, large, xlarge, children }) => {
  const gridClass = classNames({
    grid__item: true,
    [`${base}`]: base,
    [`${small}`]: small,
    [`${medium}`]: medium,
    [`${large}`]: large,
    [`${xlarge}`]: xlarge,
  });

  return <div className={gridClass}>{children}</div>;
};

GridItem.defaultProps = {
  base: false,
  small: false,
  medium: false,
  large: false,
  xlarge: false,
};

GridItem.propTypes = {
  base: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  xlarge: PropTypes.string,
  children: PropTypes.node,
};

export default GridItem;
