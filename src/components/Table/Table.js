import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Head from './Head';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';

import './styles.css';

const Table = ({ full, children }) => {
  const tableClass = classNames({
    table: true,
    'table--full': full,
  });

  return <table className={tableClass}>{children}</table>;
};

Table.defaultProps = {
  full: false,
};

Table.propTypes = {
  full: PropTypes.bool,
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
