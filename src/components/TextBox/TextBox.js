import React from 'react';

import style from "./TextBox.module.less"

export default ({ title, subtitle, text }) => {
return (
  <div className={style.textbox}>
    { title &&
      <h2 className={style.title}>{title}</h2>
    }
    { subtitle &&
      <h6 className={style.subtitle}>{subtitle}</h6>
    }
    { text &&
      <div className={style.text}>{text}</div>
    }
  </div>
); }
