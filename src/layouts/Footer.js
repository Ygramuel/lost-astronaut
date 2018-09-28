import React from "react";
import Link from 'gatsby-link'

import Menu from "../components/Menu/Menu"

import style from "./Footer.module.less"
import data from "./footer.json"

export const Footer = ({  }) => {
  return (
    <footer>
      <div className={style.wrapper}>
        <div className={style.left}>
          <h6>{data.left.title}</h6>
          <p>Lühnstiege 8-9<br />
              48151 Münster<br />
              <a href="mailto:mail@lost-astronaut.com">mail@lost-astronaut.com</a><br />
              <a href="tel:+4925139653914">0251 39653914</a>
          </p>
        </div>

        <div className={style.middle}>
          <h6>{data.middle.title}</h6>
          <ul>
            {data.middle.nav.map(elem =>
              <li key={elem.title}><Link to={elem.path}>{elem.title}</Link></li>
            )}
          </ul>
        </div>


      <div className={style.right}>
        <h6>{data.right.title}</h6>
        <a href={data.right.facebook}>Instagram</a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
