import React from 'react';
import './Sidebar.css'; // Optional: For custom styling
import menuIcon from '../../assets/menu.png';
import pluseIcon from '../../assets/plus.png';
import chatIcon from '../../assets/chat.png';
import questionIcon from '../../assets/question.png';
import historyIcon from '../../assets/history.png';
import settingIcon from '../../assets/setting.png';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='top'>
        <img className="icon menu" src={menuIcon} alt="Menu Icon" />
        <div className="new-chat">
          <img className="icon close" src={pluseIcon}/>
          <p>New Chat</p>
        </div>
        <div className='recent'>
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img className="icon msg" src={chatIcon} alt="MSG Icon"/>
            <p>What is react</p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className="boton-item recent-entry">
          <img className="icon question" src={questionIcon} alt="question Icon"/>
          <p>Help</p>
        </div>
        <div className="boton-item recent-entry">
          <img className="icon history" src={historyIcon} alt="history Icon"/>
          <p>History</p>
        </div>
        <div className="boton-item recent-entry">
          <img className="icon history" src={settingIcon} alt="setting Icon"/>
          <p>Setting</p>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
