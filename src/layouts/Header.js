import React from "react";
import Link from "gatsby-link"
import Menu from "../components/Menu/Menu"
import style from "./Header.module.less"

import data from './header.json'
import logo from '../img/LostAstronaut.svg'

export const Header = ({  }) => {
  return (
    <header className={style.header}>
      <Link to='/'>
        <img src={logo} className={style.logo} alt='Home'/>
      </Link>
      <Menu elements={data.menu}/>
    </header>
  );
};

export default Header;
