import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Sorter = ({ active, direction, children, onClick }) => {
  const sorterClass = classNames({
    sorter: true,
    'sorter--asc': active && direction === 'asc',
    'sorter--des': active && direction === 'des',
  });

  return (
    <button className={sorterClass} onClick={onClick}>
      <span className="sorter__inner">
        {children}
        <span className="sorter__icons">
          <span className="sorter__icon-up">
            <Icon type="arrow-up" size="23" />
          </span>
          <span className="sorter__icon-down">
            <Icon type="arrow-down" size="23" />
          </span>
        </span>
      </span>
    </button>
  );
};

Sorter.defaultProps = {
  active: false,
  direction: '',
};

Sorter.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sorter;
