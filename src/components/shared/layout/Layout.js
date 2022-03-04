import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./LayoutStyles.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ height: "90vh", padding: "24px" }}>{children}</main>
    </div>
  );
};

export default Layout;
