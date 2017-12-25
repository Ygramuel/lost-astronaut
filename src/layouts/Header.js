import React from "react";
import Link from "gatsby-link"
import Menu from "../components/Menu/Menu"
import style from "./Header.module.less"

import data from './header.json'

export const Header = ({  }) => {
  return (
    <header>
      {/* TODO replace this with a picture */}
      <Link to='/'>{data.title}</Link>
      <Menu elements={data.menu}/>
    </header>
  );
};

export default Header;
