import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

const App: React.FC = () => (
  <div className="header">
    <NavLink to="home">首页</NavLink>,<NavLink to="list">列表</NavLink>,
  </div>
);

export default App;
