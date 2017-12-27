import React from 'react';

export default ({ title, image, text }) => {
return (
  <div>
    <img src={image}/>
    <h6>{title}</h6>
    <p>{text}</p>
  </div>
); }
