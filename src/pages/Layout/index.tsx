import React from "react";
import { Layout } from "antd";

import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

import "./index.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default App;
