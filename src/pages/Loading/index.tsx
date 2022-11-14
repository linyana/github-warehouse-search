import { Spin } from "antd";
import React from "react";

import "./index.css";

const App: React.FC = () => (
  <div className={"loading"}>
    <Spin size="large" tip="Loading..." />
  </div>
);

export default App;
