import React from 'react';
import ReactDOM from 'react-dom';

import CheckBoxGroup from './checkbox_group';



function Root() {
  return(
    <div>
      <CheckBoxGroup />
    </div>
  );
}


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root/>, main);
});
