import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import "./index.css";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Content className="site-layout">
        <Outlet />
      </Content>
    </>
  );
};

export default App;
