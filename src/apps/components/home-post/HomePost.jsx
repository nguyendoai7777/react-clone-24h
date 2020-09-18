import React from 'react';
import ButtonNav from '../../entities/button-nav/ButtonNav';
import './HomePost.scss';

import { smallNav, preNav } from './HomePost.constant';

export default function HomePost() {
  return (
    <div className='home__block-post'>
      <div className='d-flex'>
        {smallNav.map((item) => (
          <ButtonNav
            type={item.type}
            content={item.title}
            key={item.id}
            href={item.href}
          />
        ))}
      </div>
      <div className='block__post-title'></div>
      <div className='d-flex mt-2'>
        <div className='bl__img'>
          <img
            src='https://cdn.24h.com.vn/upload/3-2020/images/2020-09-17//120x90/1600331070-5cefcd921c02176bfef0bfd5de0cd025.jpg'
            alt=''
          />
        </div>
        <div className='bl__body ml-2'>
          <div className='bl__body-content'>
            Cơ quan điều tra cho rằng một trong những đồng phạm với ông Nguyễn
            Thành Tài còn có Đào Thị Hương Lan, cựu giám đốc Sở...
          </div>
          <a className='bl__body-nav pl-3' href='/'>
            Thời sự
          </a>
        </div>
      </div>
      {preNav.map((item) => (
        <div className='bl__post-botnav pl-3' key={item.id}>
          <a href={item.href}>{item.title}</a>
        </div>
      ))}
    </div>
  );
}
