const h1 = React.createElement("h1",{className:"title", id:"name",style:{color:"red"}},"Hello Rahul");
const h2 = React.createElement("h2",{className:"sub-title",id:"address"},"I am from Noida");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([h1,h2])