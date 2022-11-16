import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import { store } from "./store";

const container = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

container.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
