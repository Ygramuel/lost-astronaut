import React from 'react';
import Helmet from 'react-helmet';

import Header from "./Header.js"
import Footer from "./Footer.js"

import Share from "../components/Share/Share.js"

import style from "./index.module.less"
import './reset.less';
import './font.less';
import 'typeface-roboto'
import 'typeface-poiret-one'


// TODO remove hardcoded "Lost Astronaut"
const TemplateWrapper = ({ children }) => (
  <div className={style.wrapper}>
    <Helmet
      titleTemplate="%s | Lost Astronaut"
    >
      <html lang="de" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ff6666"/>
      <link rel="shortcut icon" href="/favicons/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
      <meta name="theme-color" content="#ff6666"/>

    </Helmet>
    <Header />
    <div className={style.content}>{children()}</div>

    <Share title="Lost Astronaut"/>

    <Footer />
  </div>
);

export default TemplateWrapper;
