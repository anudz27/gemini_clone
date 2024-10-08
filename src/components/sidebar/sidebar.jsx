import React, { useState } from 'react';
import './Sidebar.css'; // Optional: For custom styling
import menuIcon from '../../assets/menu.png';
import pluseIcon from '../../assets/plus.png';
import chatIcon from '../../assets/chat.png';
import questionIcon from '../../assets/question.png';
import historyIcon from '../../assets/history.png';
import settingIcon from '../../assets/setting.png';


const Sidebar = () => {
  const [extended,setExtended] = useState(false)

  return (
    <div className="sidebar">
      <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className="icon menu" src={menuIcon} alt="Menu Icon" />
        <div className="new-chat">
          <img className="icon close" src={pluseIcon}/>
          {extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className='recent'>
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img className="icon msg" src={chatIcon} alt="MSG Icon"/>
            <p>What is react</p>
          </div>
        </div>:null}
      </div>
      <div className='bottom'>
        <div className="boton-item recent-entry">
          <img className="icon question" src={questionIcon} alt="question Icon"/>
          {extended?<p>Help</p>:null}
        </div>
        <div className="boton-item recent-entry">
          <img className="icon history" src={historyIcon} alt="history Icon"/>
          {extended?<p>Historyt</p>:null}
        </div>
        <div className="boton-item recent-entry">
          <img className="icon setting" src={settingIcon} alt="setting Icon"/>
          {extended?<p>Settings</p>:null}
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
