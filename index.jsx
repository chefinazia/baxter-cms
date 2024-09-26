import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  }
]);



root.render(<RouterProvider router={router} />);