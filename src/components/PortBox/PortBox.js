import React from "react";
import Link from "gatsby-link"
import style from "./PortBox.module.less"
import { graphql } from 'gatsby'

import Img from "gatsby-image"
import largeImage from "../IMGFragment"

export const PortBox = ({ title, path, image, icon }) => {
  return (
    <Link className={style.box} to={path}>
        <Img className={style.image} {...image.childImageSharp} />
        <h3 className={style.title}>{title}</h3>
        { icon &&
          <img className={style.icon} src={icon} />
        }
    </Link>
  );
};

export default PortBox;


export const portBoxData = graphql`
fragment portBoxData on MarkdownRemark {
  frontmatter {
    title
    titleimage{...largeImage }
    path
    icons{
      icon
    }
  }
}

`;
