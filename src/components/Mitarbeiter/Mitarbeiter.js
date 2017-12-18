import React from "react";
import Link from "gatsby-link"
import style from "./Mitarbeiter.module.less"

export const Mitarbeiter = ({ name, mail, beschreibung }) => {
  return (
    <div>
      <h5 className={style.name}>{name}</h5>
      <a href="mailto:{mail}">{mail}</a>
      <p>{beschreibung}</p>
    </div>
  );
};

export default Mitarbeiter;
