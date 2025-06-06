import React from 'react';

function Theamechild({ themeName }) {
  console.log(themeName);
  return (
    <div>
      <p>The theme passed from parent is: {themeName}</p>
    </div>
  );
}

export default Theamechild;
