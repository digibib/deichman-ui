import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Sidebar = ({ open, children }) => {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--open': open,
  });

  return (
    <aside className={sidebarClass}>
      <div className="sidebar__inner">{children}</div>
    </aside>
  );
};

Sidebar.defaultProps = {
  open: false,
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
