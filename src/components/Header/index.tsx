import { Layout, Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const App: React.FC = () => (
  <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={[
        {
          key: "index",
          label: <NavLink to="home">首页</NavLink>,
        },
        {
          key: "list",
          label: <NavLink to="list">列表</NavLink>,
        },
      ]}
    />
  </Header>
);

export default App;
