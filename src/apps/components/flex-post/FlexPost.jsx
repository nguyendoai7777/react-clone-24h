import React from 'react';
import './FlexPost.scss';

export default function FlexPost({ imgSrc, title, href }) {
  return (
    <div className='d-flex mt-3'>
      <img src={imgSrc} className='pr-3' alt='' />
      <a className='flex-post__content default-link' href={href}>
        {' '}
        {title}{' '}
      </a>
    </div>
  );
}
