import React from "react";
import { changeTheme } from "../../store/theme";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

import MyNavLink from "../MyNavLink";

import "./index.css";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <div className="header">
      <div className="navs">
        <MyNavLink to="home">首页</MyNavLink>
        <MyNavLink to="list">列表</MyNavLink>
      </div>
      <button onClick={handleChangeTheme}>改变主题</button>
    </div>
  );
};

export default App;
