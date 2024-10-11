import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import Home from "./src/Home/Home";
import NavBar from "./src/components/navbar/NavBar";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path:"/navBar",
    element:<NavBar/>
  }
]);

root.render(<RouterProvider router={router} />);
