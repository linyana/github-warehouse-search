import React, { MutableRefObject, useRef } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router";
import { message } from "antd";

import "./index.css";

const success = (msg: string) => {
  message.success(msg);
};

const warning = (msg: string) => {
  message.warning(msg);
};

const App = () => {
  const loginInput: MutableRefObject<any> = useRef(null);
  const passwordInput: MutableRefObject<any> = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (): void => {
    const loginValue = loginInput.current.value;
    if (loginInput !== null && String(loginInput.current.value).trim() !== "") {
      window.localStorage.setItem("author", loginValue);
      navigate("/user/list", { replace: false });
      success("登录成功");
      /*     setTimeout(() => {
        window.location.reload();
      }, 200); */
    } else {
      navigate("/user/list", { replace: false });
      warning("成功以游客身份登录");
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
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    passwordInput.current.focus();
                  }
                }}
                ref={loginInput}
                placeholder="请输入账号"
              />
            </div>
            <div className="login_input">
              <input
                type="password"
                ref={passwordInput}
                placeholder="密码"
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    handleLogin();
                  }
                }}
              />
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
