import React from "react";
import Link from "gatsby-link"

import style from "./Button.module.less"

export default ({ title, path }) => {
  return (
    <Link to={path}>
      <button>{title}</button>
    </Link>
  );
};
