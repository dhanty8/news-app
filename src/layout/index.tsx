import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col w-full px-14 py-5 gap-8 bg-pearlBush min-h-screen dark:bg-black">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
