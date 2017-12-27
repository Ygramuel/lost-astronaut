import React from "react";
import Link from "gatsby-link"
import style from "./PortBox.module.less"

export const PortBox = ({ title, path, text, image }) => {
  return (
    <Link to={path}>
        <img src={image} />
        <h3 className={style.title}>{title}</h3>
        <p>{text}</p>
      </Link>
  );
};

export default PortBox;
