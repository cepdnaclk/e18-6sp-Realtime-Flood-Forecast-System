import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Home from "./pages/Home";
import {
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const navMenus = [
  { key: "0", label: "Home", path: "/", element: <Home /> },
  {
    key: "1",
    label: "Reports",
    path: "/reports",
    element: <div>Add Reports Page Here</div>,
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedNav, setSelectedNav] = useState("0"); // State to track the selected navbar item

  const handleNavClick = (key: string) => {
    setSelectedNav(key); // Update the selected navbar item when clicked
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedNav]} // Pass the selected key to highlight the active navbar item
          onClick={({ key }) => handleNavClick(key)} // Handle navbar item click
        >
          {navMenus.map((menu) => (
            <Menu.Item key={menu.key}>
              <Link to={menu.path}>{menu.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Routes>
          {navMenus.map((menu) => (
            <Route path={menu.path} element={menu.element} />
          ))}
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        cepdnaclk ©2023
      </Footer>
    </Layout>
  );
};

export default App;
