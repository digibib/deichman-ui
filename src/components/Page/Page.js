import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Page = ({ children }) => {
  const pageClass = classNames({
    page: true,
  });

  return <main className={pageClass}>{children}</main>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
