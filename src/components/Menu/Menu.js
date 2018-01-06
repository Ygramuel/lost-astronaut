import React from "react";
import Link from "gatsby-link"

import style from "./Menu.module.less"

import menuSVG from './menu.svg'

class Menu extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="mobile-menue" className={style.menu_check} />
      	<label htmlFor="mobile-menue" className={style.menu_label}>
      	   <img src={menuSVG} alt="Menu" />
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
