import React from "react";
import Link from "gatsby-link"
import style from "./PortBox.module.less"

export const PortBox = ({ title, path, image }) => {
  return (
    <Link className={style.box} to={path}>
        <img className={style.image} src={image} />
        <h3 className={style.title}>{title}</h3>
    </Link>
  );
};

export default PortBox;
