import React from 'react';

export default ({ elements }) => {
return (
  <div>
    {elements.map((element) =>
      <div>{element}</div>
    )}
  </div>
); }
