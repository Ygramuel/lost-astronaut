import React from 'react';

import style from "./TextBox.module.less"

export default ({ title, subtitle, text }) => {
return (
  <div className={style.textbox}>
    { title &&
      <h4 className={style.title}>{title}</h4>
    }
    { subtitle &&
      <h6 className={style.subtitle}>{subtitle}</h6>
    }
    { text &&
      <p className={style.text}>{text}</p>
    }
  </div>
); }
