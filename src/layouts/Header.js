import React from "react";
import Link from "gatsby-link"

import Menu from "../components/Menu/Menu"
import Offline from "../components/Offline/Offline.js"

import style from "./Header.module.less"

import data from './header.json'
import logo from '../img/LostAstronaut.svg'

export const Header = ({  }) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link to='/'>
          <img src={logo} className={style.logo} alt='Home'/>
        </Link>
        <Menu elements={data.menu}/>
      </div>
      <Offline />
    </header>
  );
};

export default Header;
