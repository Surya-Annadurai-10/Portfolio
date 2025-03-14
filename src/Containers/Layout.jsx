import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div data-scroll-container className="w-full min-h-screen  bg-[#0E100F] text-white ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
