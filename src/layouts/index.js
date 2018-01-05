import React from 'react';
import Helmet from 'react-helmet';

import Header from "./Header.js"
import Footer from "./Footer.js"

import Share from "../components/Share/Share.js"

import style from "./index.module.less"
import './reset.less';
import './font.less';


// TODO remove hardcoded "Lost Astronaut"
const TemplateWrapper = ({ children }) => (
  <div className={style.wrapper}>
    <Helmet
      titleTemplate="%s | Lost Astronaut"
    >
      <html lang="de" />
    </Helmet>
    <Header />
    <div className={style.content}>{children()}</div>

    <Share title="Lost Astronaut"/>

    <Footer />
  </div>
);

export default TemplateWrapper;
