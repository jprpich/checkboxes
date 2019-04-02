import React from 'react';
import ReactDOM from 'react-dom';

import CheckBoxGroup from './checkbox_group';



function Root() {
  return(
    <div>
      <div className='interactive'>
        <CheckBoxGroup />
      </div>
    </div>
  );
}


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root/>, main);
});
