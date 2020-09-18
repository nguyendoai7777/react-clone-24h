import React from 'react'
import './TitleDecoration.scss';


export default function TitleDecoration({img, imgSrc, title, color}) {
  return (
    <div className="d-flex align-items-center title-decotation" style={{borderBottomColor: color}}>
     {img && <img className="title-decotation__icon" src={imgSrc} alt=""/>} 
     <div className="title-decotation__content text-uppercase"
      style={{color: color}}
     >
     {title}</div>
    </div>
  )
}
