import React from 'react'
import './main_side.css';

import User from '../../assets/man.png';


const Main = () => {
    return (
        
        <div className='main'>
            <div className='nav'>
                
            <p>Gemini</p>
            
        
            <img className="icon" src={User} alt="User"/>
            
            </div>
           
            
        </div>
    );
}

export default Main;
