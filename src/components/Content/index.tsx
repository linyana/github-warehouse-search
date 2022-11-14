import { Breadcrumb, Layout } from "antd";
import React from "react";

const { Content } = Layout;

const App: React.FC = () => (
	<>
		<Content
			className="site-layout"
			style={{ padding: "0 50px", marginTop: 64 }}
		>
			<Breadcrumb style={{ margin: "16px 0" }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
			<div
				className="site-layout-background"
				style={{ padding: 24, minHeight: 380 }}
			>
				Content
			</div>
		</Content>
	</>
);

export default App;
