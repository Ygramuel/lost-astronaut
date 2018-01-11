import React from "react";
import Helmet from 'react-helmet';

import SEO from '../SEO/SEO'

import style from './DefaultPage.module.less'

export const DefaultPage = (props) => {
  const { title, image, text, path } = props
  return (
    <div className={style.wrapper}>
      <SEO description={text} title="hi" path="HI" image="HI" />

      { title &&
        <div>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <h5 className={style.title}>{title}</h5>
        </div>
      }
      { image &&
        <img src={encodeURI(image)} className={style.image} alt="" />
      }
      { text &&
        <div className={style.text}>{text}</div>
      }
    </div>
  );
};

export default DefaultPage;
