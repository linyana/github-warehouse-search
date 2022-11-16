/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { NavLink } from "react-router-dom";

const App = (props: any) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => "nav" + (isActive ? " nav_active" : "")}
    ></NavLink>
  );
};

export default App;
