import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Text = ({ bold, gray, highlight, dropCap, uppercase, strikeThrough, error, children }) => {
  const textClass = classNames({
    text: true,
    'text--bold': bold,
    'text--gray': gray,
    'text--highlight': highlight,
    'text--drop-cap': dropCap,
    'text--uppercase': uppercase,
    'text--strikeThrough': strikeThrough,
    'text--error': error,
  });
  return <span className={textClass}>{children}</span>;
};

Text.defaultProps = {
  bold: false,
  gray: false,
  highlight: false,
  dropCap: false,
  uppercase: false,
  strikeThrough: false,
  error: false,
};

Text.propTypes = {
  bold: PropTypes.bool,
  gray: PropTypes.bool,
  highlight: PropTypes.bool,
  dropCap: PropTypes.bool,
  uppercase: PropTypes.bool,
  strikeThrough: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Text;
