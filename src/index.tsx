import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

container.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
