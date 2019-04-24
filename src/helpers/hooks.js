import { useState } from 'react';

const makeSortComparator = ({ sortKey }) => {
  return (a, b) => {
    return a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
  };
};

const useTableSort = (array, initialSortKey) => {
  const [state, setState] = useState({
    direction: 'asc',
    sortKey: initialSortKey,
  });

  const comparator = makeSortComparator(state);
  let sortedData = array.slice().sort(comparator);

  if (state.direction === 'des') {
    sortedData.reverse();
  }

  return {
    ...state,
    sortedData,
    handleSort: sortKey =>
      setState(state => ({
        ...state,
        sortKey,
        direction: state.direction === 'des' ? 'asc' : 'des',
      })),
  };
};

export { useTableSort };
