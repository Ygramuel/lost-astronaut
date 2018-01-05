import React from "react";
import Link from "gatsby-link"
import style from "./Menu.module.less"

class Menu extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" />
            {/* This is the Burger-menu
                With some CSS magic */}
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
          </label>

          <ul className={style.menu}>
            {this.props.elements.map(elem =>
              <li className={style.item} key={elem.path}>
                <Link to={elem.path}>
                  {elem.title}
                </Link>
              </li>
            )}
          </ul>
      </div>
    );
  }
}

export default Menu;
