import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Text = ({ bold, gray, highlight, dropCap, strikeThrough, children }) => {
  const textClass = classNames({
    text: true,
    'text--bold': bold,
    'text--gray': gray,
    'text--highlight': highlight,
    'text--drop-cap': dropCap,
    'text--strikeThrough': strikeThrough,
  });
  return <span className={textClass}>{children}</span>;
};

Text.defaultProps = {
  bold: false,
  gray: false,
  highlight: false,
  dropCap: false,
  strikeThrough: false,
};

Text.propTypes = {
  bold: PropTypes.bool,
  gray: PropTypes.bool,
  highlight: PropTypes.bool,
  dropCap: PropTypes.bool,
  strikeThrough: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Text;
