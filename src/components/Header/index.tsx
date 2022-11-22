import React, { useState, useEffect } from "react";
import { changeTheme } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

import { message } from "antd";

import MyNavLink from "../MyNavLink";

import "./index.css";
import { GetImg } from "../../store/img";

const error = (msg: string) => {
  message.error(msg);
};

const success = (msg: string) => {
  message.success(msg);
};

const App: React.FC = () => {
  const [loginSrc, setLoginSrc] = useState<string>();
  const dispatch: AppDispatch = useDispatch();
  const handleChangeTheme = (): void => {
    dispatch(changeTheme());
  };
  const theme: string = useSelector((state: RootState) => state.theme.theme);
  const img: string | null = useSelector((state: RootState) => state.img.img);

  const navigate = useNavigate();

  const handleExit = (): void => {
    if (
      window.localStorage.getItem("author") !== null &&
      window.localStorage.getItem("author")?.trim() !== ""
    ) {
      window.localStorage.removeItem("author");
      window.localStorage.removeItem("authorImg");
      dispatch(GetImg());
      navigate("/login", { replace: false });
      success("注销成功");
    } else {
      error("未登录");
    }
  };

  const handleLogin = (): void => {
    if (
      window.localStorage.getItem("author") !== null &&
      window.localStorage.getItem("author")?.trim() !== ""
    ) {
      error("请勿重复登录");
    } else {
      navigate("/login", { replace: false });
    }
  };

  const themeSrc =
    theme === "dark"
      ? require("../../assets/images/dark.png")
      : require("../../assets/images/light.png");

  const exitSrc =
    theme === "dark"
      ? require("../../assets/images/outdark.png")
      : require("../../assets/images/outlight.png");

  useEffect(() => {
    if (img !== null && img.trim() !== "") {
      setLoginSrc(img);
    } else {
      setLoginSrc(
        theme === "dark"
          ? require("../../assets/images/logindark.png")
          : require("../../assets/images/loginlight.png")
      );
    }
  }, [img, theme]);

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
        <div className="login_img" onClick={handleLogin}>
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
