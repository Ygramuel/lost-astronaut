import React from "react";
import Helmet from 'react-helmet';

import Share from "../../components/Share/Share.js"

import style from './DefaultPage.module.less'

export const DefaultPage = ({ title, image, text }) => {
  image = encodeURI(image);
  return (
    <div className={style.wrapper}>
      <Share title={title}/>

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
