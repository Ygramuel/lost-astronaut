import React from "react";
import Link from "gatsby-link"
import Menu from "../components/Menu/Menu"
//import style from "./Header.module.less"

export const Header = ({  }) => {
  const menuItems = [
     {title:"Home", path:"/"},
     {title:"Team", path:"/team/"},
     {title:"Kontakt", path:"/kontakt/"},
     {title:"Portfolio", path:"/portfolio/"}
  ];

  return (
    <header>
      <Menu elements={menuItems}/>
    </header>
  );
};

export default Header;
