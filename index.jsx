import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
   return <h3>Hello From React</h3>
}

root.render(<App />);