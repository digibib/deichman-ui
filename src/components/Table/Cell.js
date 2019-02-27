import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Cell = ({ isHeadCell, label, children }) => {
  return isHeadCell ? (
    <th className="table__cell" data-label={label}>
      {children}
    </th>
  ) : (
    <td className="table__cell" data-label={label}>
      {children}
    </td>
  );
};

Cell.defaultProps = {
  isHeadCell: false,
  label: '',
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  isHeadCell: PropTypes.bool,
};

export default Cell;
