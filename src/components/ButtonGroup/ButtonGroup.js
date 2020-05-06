import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './styles.css';

const ButtonGroup = ({ groupId, items, checked, handleChange }) => {
  return (
    <div className="button-group">
      {items.map(item => {
        const { text, value, icon } = item;
        const key = `${groupId}-${value}`;
        return (
          <label className="button-group__item" key={key}>
            <input
              className="button-group__input"
              type="radio"
              name={groupId}
              value={value}
              checked={value === checked}
              onChange={handleChange}
            />
            <span className="button-group__button">
              {icon && <Icon type={icon} />}
              {text}
            </span>
          </label>
        );
      })}
    </div>
  );
};

ButtonGroup.propTypes = {
  groupId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired,
};

export default ButtonGroup;
