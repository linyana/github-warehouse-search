import React, { Suspense } from "react";
import Routes from "./router";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import Loading from "./pages/Loading";

import "./App.css";
import "./theme/index.css";

export default function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const route = useRoutes(Routes);
  return (
    <div className={theme}>
      <Suspense fallback={<Loading></Loading>}>{route}</Suspense>
    </div>
  );
}
