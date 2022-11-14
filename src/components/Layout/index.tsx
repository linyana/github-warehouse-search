import React from "react";
import { Layout } from "antd";
import Header from "../Header";
import Content from "../Content";

import "./index.css";

const App: React.FC = () => {
	return (
		<Layout>
			<Header />
			<Content />
		</Layout>
	);
};

export default App;
