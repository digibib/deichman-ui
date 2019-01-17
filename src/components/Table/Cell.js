import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Cell = ({ isHeadCell, children }) => {
  return isHeadCell ? (
    <th className="table__cell">{children}</th>
  ) : (
    <td className="table__cell">{children}</td>
  );
};

Cell.defaultProps = {
  isHeadCell: false,
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  isHeadCell: PropTypes.bool,
};

export default Cell;
