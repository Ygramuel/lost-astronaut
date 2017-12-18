import React from 'react';

import Helmet from 'react-helmet';

import Header from "./Header.js"
import Footer from "./Footer.js"

import './global.less';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
