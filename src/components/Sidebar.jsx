import React from 'react';
import '../Styles/sidebar.css';
import { FaShoppingBag, FaBars, FaStore, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar-icon">
        <FaShoppingBag className="icon top-icon" />
      </NavLink>
      <NavLink to="/" className="sidebar-icon">
        <FaBars className="icon" />
      </NavLink>
      <NavLink to="/" className="sidebar-icon">
        <FaStore className="icon store-icon" />
      </NavLink>
      <NavLink to="/bag" className="sidebar-icon">
        <FaShoppingBag className="icon" />
      </NavLink>
      <NavLink to="/" className="sidebar-icon logout-icon">
        <FaSignOutAlt className="icon bottom-icon" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
