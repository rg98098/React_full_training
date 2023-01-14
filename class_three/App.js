
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const title =(
    <h1 id="title" key="h2">
      Namaste React
    </h1>
  )

// React component 
// Composing component means functional components inside functional component
const HeaderComponent = function (){
  return (
    <div>
    {title}
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);