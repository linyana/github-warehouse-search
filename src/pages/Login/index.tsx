import React, { MutableRefObject, useRef } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router";

import "./index.css";

const App = () => {
  const loginInput: MutableRefObject<any> = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginValue = loginInput.current.value;
    if (loginValue !== null && String(loginInput).trim() !== "") {
      window.localStorage.setItem("author", loginValue);
      navigate("/user/list", { replace: false });
    } else {
      navigate("/user/list", { replace: false });
    }
  };

  return (
    <>
      <Header></Header>
      <div className="login">
        <div className="login_left">
          <img src={require("../../assets/images/loginBanner.png")} alt="" />
        </div>
        <div className="login_right">
          <div className="login_box">
            <div className="login_total_title">登录</div>
            <div className="login_input">
              <input type="text" ref={loginInput} placeholder="请输入账号" />
            </div>
            <div className="login_input">
              <input type="password" placeholder="密码" />
            </div>
            <div className="button">
              <button onClick={handleLogin}>登录</button>
              <button
                onClick={() => {
                  navigate("/user/list", { replace: false });
                }}
              >
                游客
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
