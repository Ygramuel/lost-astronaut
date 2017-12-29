import React from "react";
import Link from 'gatsby-link'

import Menu from "../components/Menu/Menu"

import style from "./Footer.module.less"
import data from "./footer.json"

export const Footer = ({  }) => {
  return (
    <footer>
      <div>
        <h6>{data.left.title}</h6>
        <p>{data.left.text}</p>
      </div>

      <div>
        <h6>{data.middle.title}</h6>
        <ul>
          {data.middle.nav.map(elem =>
            <li><Link to={elem.path}>{elem.title}</Link></li>
          )}
        </ul>
      </div>

      <div>
        <h6>{data.right.title}</h6>
        <a href={data.right.facebook}>FACEBOOK</a>
      </div>
    </footer>
  );
};

export default Footer;
