import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './navbar.scss';

import { NavItems, DirectoryItems } from './navbar.constant';
import logo from '../../../contents/logos/24h_logo_trang_chu_2015.png';

export default function Navbar() {
  const [dover, setDover] = useState(false);
  return (
    <div className='navbar__bg-color pt-3 pb-3'>
      <div className='container position-relative'>
        <div className='row justify-content-between'>
          <a href='/'>
            <img src={logo} alt='Home' title='Go back Home' />
          </a>
          <Button
            onClick={() => setDover(!dover)}
            onBlur={() => setDover(false)}
          >
            <p className='mbtn__btn-custom no-margin'>Directory</p>
          </Button>
          {NavItems.map((item) => (
            <Button key={item.id}>
              <p className='mbtn__btn-custom no-margin'>{item.title}</p>
            </Button>
          ))}
        </div>

        <div className={`navbar__directory ${dover ? 'mn-show' : 'mn-hide'}`}>
          {DirectoryItems.map((item) => (
            <div
              key={item.id}
              className='navbar__directory-item pt-1 pb-1 pl-4 pr-3 d-flex align-items-center cursor-default'
            >
              <p className='no-margin navbar__directory-item-content position-relative text-capitalize'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
