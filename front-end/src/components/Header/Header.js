import React from 'react';
import './style.scss';

export default function Header() {
  return (
    <header>
      <img src='./images/Logo.png' className='test-image' />
      <div class="search_box">
        <input type="text" placeholder="search" />
      </div>
      Header components
      <div className='container_right_justified'>
        <img src='./images/Ellipse176.png' className='ellipse' />
      </div>
    </header>
  );
}

