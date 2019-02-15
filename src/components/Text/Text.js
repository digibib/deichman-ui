import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Text = ({ bold, gray, highlight, strikeThrough, children }) => {
  const textClass = classNames({
    text: true,
    'text--bold': bold,
    'text--gray': gray,
    'text--highlight': highlight,
    'text--strikeThrough': strikeThrough,
  });
  return <span className={textClass}>{children}</span>;
};

Text.defaultProps = {
  bold: false,
  gray: false,
  highlight: false,
  strikeThrough: false,
};

Text.propTypes = {
  bold: PropTypes.bool,
  gray: PropTypes.bool,
  highlight: PropTypes.bool,
  strikeThrough: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Text;
