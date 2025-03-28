import React from 'react';
import './style.css';

function Profile() {
    return (
        <div className='info-component'>
          <div className='info-left'>
            <img src="src\assets\image.png" alt="" />
          </div>
          <div className='info-right'>
            <b>Hello!</b>
            <p className='para'>I am a web developer from India, I build websites & write code which make money for client</p>
            <button className='info-btn'>Contact</button>
          </div>
        </div>
      );
}

export default Profile;
