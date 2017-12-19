import React from "react";
import Link from "gatsby-link"
import style from "./PortBox.module.less"

export const PortBox = ({ title, path }) => {
  return (
    <div>
      <Link to={path}>
        <h5>{title}</h5>
      </Link>
    </div>
  );
};

export default PortBox;
