import React from 'react';
import './Sidebar.css'; // Optional: For custom styling
import menuIcon from '../../assets/menu.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <img src={menuIcon} alt="Menu Icon" className="sidebar-menu-icon" />
      
    </div>
  );
};

export default Sidebar;
