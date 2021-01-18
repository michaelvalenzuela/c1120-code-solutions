import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me</button>;
}

ReactDOM.render(
  <div>
    <CustomButton/>
  </div>,
  document.getElementById('root'));
