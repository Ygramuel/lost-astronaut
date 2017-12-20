import React from "react";
import Helmet from 'react-helmet';

export const DefaultPage = ({ title, image, text }) => {
  image = encodeURI(image);
  return (
    <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
      <h5>{title}</h5>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default DefaultPage;
