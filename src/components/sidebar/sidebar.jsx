import React from 'react';
import './Sidebar.css'; // Optional: For custom styling
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='top'>
        <img className="icon menu" src={menuIcon} alt="Menu Icon" />
        <div className="new-chat">
          <img className="icon close" src={closeIcon}/>
          <p>New Chat</p>
        </div>
      </div>
      <div className='bottom'>

      </div>
      
    </div>
  );
};

export default Sidebar;
