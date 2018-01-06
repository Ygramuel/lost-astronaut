import React from "react";
import Link from "gatsby-link"

import style from "./Menu.module.less"

import burgerSVG from './burger.svg'

class Menu extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" name="mobile-menue" className={style.menu_check} />
      	<label for="mobile-menue" className={style.menu_label}>
      	   <img src={burgerSVG} alt="Menu" />
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
