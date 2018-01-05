import React from "react";
import Helmet from 'react-helmet';

import style from './DefaultPage.module.less'

export const DefaultPage = ({ title, image, text }) => {
  image = encodeURI(image);
  return (
    <div className={style.wrapper}>

      { title &&
        <div>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <h5 className={style.title}>{title}</h5>
        </div>
      }
      { image &&
        <img src={image} className={style.image} alt="" />
      }
      { text &&
        <div className={style.text}>{text}</div>
      }
    </div>
  );
};

export default DefaultPage;
