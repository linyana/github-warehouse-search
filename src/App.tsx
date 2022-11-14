import React, { Suspense } from "react";
import Routes from "./router";
import { useRoutes } from "react-router-dom";

import Loading from "./pages/Loading";

import "./App.css";

export default function App() {
  const route = useRoutes(Routes);
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>{route}</Suspense>
    </>
  );
}
