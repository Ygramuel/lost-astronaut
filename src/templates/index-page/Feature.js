import React from 'react';
import style from "./Feature.module.less"

export default ({ title, image, text }) => {
return (
  <div className={style.feature}>
    <img className={style.icon} src={image}/>
    <h6 className={style.title}>{title}</h6>
    <p className={style.text}>{text}</p>
  </div>
); }
