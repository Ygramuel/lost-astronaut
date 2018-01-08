import React from 'react';
import style from "./Zeile.module.less"

export default ({ elements }) => {
return (
  <div className={style.zeile}>
    { elements }
    {/*elements.map((element) =>
      <div>{element}</div>
    )*/}
  </div>
); }
