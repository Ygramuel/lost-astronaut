import React from "react";
import Link from "gatsby-link"

import style from "./Menu.module.less"

class Menu extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="mobile-menue" className={style.menu_check} />
      	<label htmlFor="mobile-menue" className={style.burger}>
          {/* Inline SVG is required in order to be animated with CSS */}
          <svg viewBox="0 0 800 600" width="60" height="60">
              <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
              <path d="M300,320 L540,320" id="middle"></path>
              <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
          </svg>
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
