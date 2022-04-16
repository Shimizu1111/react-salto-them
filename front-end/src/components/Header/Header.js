import React, { useEffect, useState } from 'react';
import './style.scss';
import { Avatar } from '@mui/material';
import { fontSize, height, style } from '@mui/system';
import { blue, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';

export default function Header() {
  //const [hidden, setHidden] = useState(false);
  const hidden = useSelector((state) => state.setIcon);

  return (
    <header>
      <img src='./images/Logo.png' className='test-image' />
      <div class='search_box'>
        <input type='text' placeholder='search' />
      </div>
      <div className='container_right_justified'>
        <img src='./images/Ellipse176.png' className='ellipse' />
        <img src='./images/Notification.png' className='notification' />
        <img src='./images/Group.png' className='group' />
        {/* <img src='./images/Beared-guy.png' className='beared-guy' /> */}
        {hidden.icon
          ? <Avatar src='./images/Beared-guy.png' className='beared-guy' />
          : <Avatar className='beared-guy' />
        }
        <div className='profile'>
          <p>shimiu katsunori</p>
          <p>admin</p>
        </div>
        <a href='/login' onClick={() => localStorage.clear()}  className="login">ログアウト</a>
      </div>
    </header>
  );
}