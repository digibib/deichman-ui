import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const GridItem = ({ base, small, medium, large, xlarge, children }) => {
  const gridClass = classNames({
    grid__item: true,
    [`${base}`]: base,
    [`small--${small}`]: small,
    [`medium--${medium}`]: medium,
    [`large--${large}`]: large,
    [`xlarge--${xlarge}`]: xlarge,
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
  base: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  small: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  medium: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  large: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  xlarge: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
};

export default GridItem;
