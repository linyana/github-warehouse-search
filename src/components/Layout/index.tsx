import React from "react";
import { Layout } from "antd";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

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
