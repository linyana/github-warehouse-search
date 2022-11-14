import { Breadcrumb, Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const App: React.FC = () => (
  <>
    <Content className="site-layout">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background">
        <Outlet />
      </div>
    </Content>
  </>
);

export default App;
