import React from "react";
import {Outlet} from "react-router-dom";
import NavigationBar from "../components/Navbar";

const Layout = () => {
  // sets the Layout of the page with NavigationBar and Outlet
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;