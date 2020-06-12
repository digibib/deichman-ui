import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Sidebar = ({ open, position, children }) => {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--position-right': position === "right",
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
  position: "left",
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  position: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
