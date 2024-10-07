import React from 'react';
import './Sidebar.css'; // Optional: For custom styling
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';
import emailIcon from '../../assets/email.png';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='top'>
        <img className="icon menu" src={menuIcon} alt="Menu Icon" />
        <div className="new-chat">
          <img className="icon close" src={closeIcon}/>
          <p>New Chat</p>
        </div>
        <div className='recent'>
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img className="icon msg" src={emailIcon} alt="MSG Icon"/>
          </div>
        </div>
      </div>
      <div className='bottom'>

      </div>
      
    </div>
  );
};

export default Sidebar;
