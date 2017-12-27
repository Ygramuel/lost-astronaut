import React from 'react';
import Helmet from 'react-helmet';

import Header from "./Header.js"
import Footer from "./Footer.js"
import style from "./index.module.less"
import './reset.css';


const TemplateWrapper = ({ children }) => (
  <div className={style.wrapper}>
    <Helmet
    //  titleTemplate="%s | MyAwesomeWebsite.com" 
    >
      <html lang="de" />
    </Helmet>
    <Header />
    <div className={style.content}>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
