import React from 'react';
import './Main.css';  
import User from '../../assets/man.png';

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
            <p>Gemini</p>
            <img className="user d3" src={User} alt="User"/>
            </div>
            
        </div>
    );
}

export default Main;
