import React, { useState, useEffect } from "react";
import { changeTheme } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

import MyNavLink from "../MyNavLink";

import "./index.css";

const App: React.FC = () => {
  const [loginSrc, setLoginSrc] = useState<string>();
  const dispatch: AppDispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  const theme = useSelector((state: RootState) => state.theme.theme);

  const navigate = useNavigate();

  const handleExit = () => {
    window.localStorage.removeItem("author");
    window.localStorage.removeItem("authorImg");
    navigate("/login", { replace: false });
  };

  const themeSrc =
    theme === "dark"
      ? require("../../assets/images/dark.png")
      : require("../../assets/images/light.png");

  const exitSrc =
    theme === "dark"
      ? require("../../assets/images/outdark.png")
      : require("../../assets/images/outlight.png");

  const authorImg = window.localStorage.getItem("authorImg");

  useEffect(() => {
    if (authorImg !== null) {
      setLoginSrc(authorImg);
    } else {
      setLoginSrc(
        theme === "dark"
          ? require("../../assets/images/logindark.png")
          : require("../../assets/images/loginlight.png")
      );
    }
  }, [authorImg, theme]);

  return (
    <div className="header">
      <div className="navs">
        <MyNavLink to="/user/home">首页</MyNavLink>
        <MyNavLink to="/user/list">列表</MyNavLink>
      </div>
      <div className="nav_right">
        <div className="change_theme" onClick={handleChangeTheme}>
          <img src={themeSrc} alt="" />
        </div>
        <div
          className="login_img"
          onClick={() => {
            navigate("/login", { replace: false });
          }}
        >
          <img src={loginSrc} alt="" />
        </div>
        <div className="exit" onClick={handleExit}>
          <img src={exitSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
