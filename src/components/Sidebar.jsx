import React from 'react';
import '../Styles/sidebar.css';
import { FaShoppingBag, FaBars, FaStore, FaLock, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <FaShoppingBag className="icon top-icon" />
      </div>
      <div className="sidebar-icon">
        <FaBars className="icon" />
      </div>
      <div className="sidebar-icon">
        <FaStore className="icon store-icon" />
      </div>
      <div className="sidebar-icon">
        <FaShoppingBag className="icon" />
      </div>
      <div className="sidebar-icon logout-icon">
        <FaSignOutAlt className="icon bottom-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
