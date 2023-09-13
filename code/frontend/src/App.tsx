import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reports from "./pages/Reports";

import {
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const navMenus = [
  { key: "0", 
    label: "Home", 
    path: "/", 
    element: <Home />,
    position: "left",
  },
  {
    key: "1",
    label: "Reports",
    path: "/reports",
    element: <Reports />,
    position: "left",
  },
  { 
    key: "2", 
    label: "Log in", 
    path: "/login", 
    element: <Login />,
    position: "right",
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

  const renderMenuItems = () => {
    const leftMenuItems = navMenus
      .filter((menu) => menu.position === "left")
      .map((menu) => (
        <Menu.Item key={menu.key}>
          <Link to={menu.path}>{menu.label}</Link>
        </Menu.Item>
      ));

    const rightMenuItems = navMenus
      .filter((menu) => menu.position === "right")
      .map((menu) => (
        <Menu.Item key={menu.key}>
          <Link to={menu.path}>{menu.label}</Link>
        </Menu.Item>
      ));

    return (
      <>
        {leftMenuItems}
        <Menu.Item style={{ marginLeft: "auto" }}>{rightMenuItems}</Menu.Item>
      </>
    );
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
         {renderMenuItems()}
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Routes>
          {navMenus.map((menu) => (
            <Route path={menu.path} element={menu.element} />
          ))}
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>cepdnaclk ©2023</Footer>
    </Layout>
  );
};

export default App;
