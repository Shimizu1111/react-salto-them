import React from 'react';
import './style.scss';
import { Avatar } from '@mui/material';
import { height } from '@mui/system';

export default function Header() {
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
        <Avatar src='./images/Beared-guy.png' sizes='small' className='beared-guy'>helloo</Avatar>
        <div className='profile'>
          <p>shimiu katsunori</p>
          <p>admin</p>
        </div>
      </div>
    </header>
  );
}