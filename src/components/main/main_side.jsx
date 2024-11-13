import React from 'react'
import './main_side.css';

import User from '../../assets/man.png';
import Message from '../../assets/message.png';
import Compass from '../../assets/compass.png';
import Code from '../../assets/code.png';
import Bulb from '../../assets/bulb.png';
import AddPhoto from '../../assets/addphoto.png';
import Send from '../../assets/send.png';
import Mic from '../../assets/mic.png';

const Main = () => {
    return (
        
        <div className='main'>
            <div className='nav'>
                
            <p>Gemini</p>
            
        
            <img className="icon" src={User} alt="User"/>
            
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello,John.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img className="compass " src={Compass}/>
                    </div>
                    <div className='card'>
                        <p>Briefly summarize this concept: urban planning</p>
                        <img className="message " src={Message}/>
                    </div>
                    <div className='card'>
                        <p>Suggestion for breakfast</p>
                        <img className="bulb " src={Bulb}/>
                    </div>
                    <div className='card'>
                        <p>improve security in notion webapp</p>
                        <img className="code " src={Code}/>
                    </div>
                </div>
                <div className='main-bottom'>
                    <div className="search-box">
                        <input type='text' placeholder='Enter a prompt here'/>
                        <div>
                            <img src={AddPhoto} alt=''/>
                            <img src={Mic} alt=''/>
                            <img src={Send} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Main;
