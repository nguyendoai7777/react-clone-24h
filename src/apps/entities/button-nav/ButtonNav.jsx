import React from 'react';
import './ButtonNav.scss';

export default function ButtonNav({ type, content, href }) {
  return (
    <a className={`pl-1 pr-1 mn-btn ${type ? 'mn-btn__nav text-black' : 'mn-btn__main text-white'}`} href={href}>
      {content}
    </a>
  );
}
