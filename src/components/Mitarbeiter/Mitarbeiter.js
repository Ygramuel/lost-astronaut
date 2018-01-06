import React from "react";
import Link from "gatsby-link"

import style from "./Mitarbeiter.module.less"

import mailIcon from './mail.svg'

export const Mitarbeiter = ({ name, mail, text, bild }) => {
  bild = encodeURI(bild);
  return (
    <div className={style.person}>
      <img src={bild} />
      <h5 className={style.name}>{name}</h5>
      <p className={style.function}>{text}</p>
      <a href={"mailto:" + mail}>
        <img src={mailIcon} alt={mail} />
      </a>
    </div>
  );
};

export default Mitarbeiter;
