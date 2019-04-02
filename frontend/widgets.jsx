import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];


function Root() {
  return(
    <div>
      <div className='interactive'>
        <Tabs panes={panes} />
      </div>
    </div>
  );
}


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root/>, main);
});
