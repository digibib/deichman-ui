import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './styles.css';

const Select = ({ name, selected, options, onChange, label, full }) => {
  const selectClass = classNames({
    select: true,
    'select--full': full,
  });

  return (
    <Fragment>
      {label && (
        <div>
          <label htmlFor={name} className="caption">
            {label}
          </label>
        </div>
      )}
      <div className={selectClass}>
        <div className="select__arrow">
          <Icon type="arrow-down" />
        </div>
        <select className="select__field" name={name} value={selected} onChange={onChange}>
          {options
            .filter(option => !option.disabled)
            .map(option => (
              <option
                key={`${name}-${option.value}`}
                value={option.value}
                disabled={option.notSelectable}
              >
                {option.text}
              </option>
            ))}
        </select>
      </div>
    </Fragment>
  );
};

Select.defaultProps = {
  label: '',
  full: false,
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  full: PropTypes.bool,
};

export default Select;
