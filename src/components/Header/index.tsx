import React from "react";
import { changeTheme } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useNavigate } from "react-router";

import MyNavLink from "../MyNavLink";

import "./index.css";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  const theme = useSelector((state: RootState) => state.theme.theme);

  const navigate = useNavigate();

  const themeSrc =
    theme === "dark"
      ? require("../../assets/images/dark.png")
      : require("../../assets/images/light.png");

  const loginSrc =
    theme === "dark"
      ? require("../../assets/images/logindark.png")
      : require("../../assets/images/loginlight.png");

  return (
    <div className="header">
      <div className="navs">
        <MyNavLink to="home">首页</MyNavLink>
        <MyNavLink to="list">列表</MyNavLink>
      </div>
      <div className="nav_right">
        <div className="change_theme" onClick={handleChangeTheme}>
          <img src={themeSrc} alt="" />
        </div>
        <div
          className="login"
          onClick={() => {
            navigate("/login", { replace: false });
          }}
        >
          <img src={loginSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
