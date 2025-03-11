import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
