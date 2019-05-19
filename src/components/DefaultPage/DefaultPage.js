import React from "react";
import Helmet from 'react-helmet';
import Img from "gatsby-image"


import style from './DefaultPage.module.less'

export const DefaultPage = ({ title, image, text }) => {
  return (
    <div className={style.wrapper}>

      { title &&
        <div>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <h2 className={style.title}>{title}</h2>
        </div>
      }
      { image &&
        <Img className={style.image} alt="" {...image.childImageSharp} />
      }
      { text &&
        <div className={style.text}>{text}</div>
      }
    </div>
  );
};

export default DefaultPage;
