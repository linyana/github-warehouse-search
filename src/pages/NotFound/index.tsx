import React from "react";
import Header from "../../components/Header";

import "./index.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="notfound">
        <div className="notfound_title">404</div>
        <div className="notfound_text">页面找不到了</div>
      </div>
    </>
  );
}
