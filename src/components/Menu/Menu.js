import React from "react";
import Link from "gatsby-link"
import style from "./Menu.module.less"

class Menu extends React.Component {
  render() {
    return (
      <ul className={style.menu}>
        {this.props.elements.map(elem =>
          <li className={style.item}><Link to={elem.path}>{elem.title}</Link></li>
        )}
      </ul>
    );
  }
}

export default Menu;
