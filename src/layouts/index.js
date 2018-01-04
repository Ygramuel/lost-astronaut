import React from 'react';
import Helmet from 'react-helmet';

import Header from "./Header.js"
import Footer from "./Footer.js"
import Offline from "./Offline.js"

import style from "./index.module.less"
import './reset.less';
import './font.less';



const TemplateWrapper = ({ children }) => (
  <div className={style.wrapper}>
    <Helmet
    //  titleTemplate="%s | MyAwesomeWebsite.com"
    >
      <html lang="de" />
    </Helmet>
    <Header />
    <Offline />
    <div className={style.content}>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
