import React from "react";
import Link from "gatsby-link"

import Menu from "../components/Menu/Menu"
import Offline from "../components/Offline/Offline.js"

import style from "./Header.module.less"

import data from './header.json'
import logo from '../img/LostAstronaut.svg'
import instagram from '../img/instagram.svg'

export const Header = ({  }) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link to=''>
          <img src={logo} className={style.logo} alt='Home' width='148' height='80'/>
        </Link>
        <Menu elements={data.menu}/>
        <a href="https://www.instagram.com/astronautlost/" target="_blank" rel="noopener">
          <img src={instagram} className={style.insta}  alt='Instagram' width='56' height='56'/>
        </a>
      </div>
      <Offline>
        <p>Du bist offline!</p>
      </Offline>
    </header>
  );
};

export default Header;
