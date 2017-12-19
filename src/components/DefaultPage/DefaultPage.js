import React from "react";

export const DefaultPage = ({ title, image, text }) => {
  image = encodeURI(image);
  return (
    <div>
      <h5>{title}</h5>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default DefaultPage;
