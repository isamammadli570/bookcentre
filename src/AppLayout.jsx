import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Testimotional from "./ui/Testimotional";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Outlet />
      <Testimotional />
      <Footer />
    </div>
  );
}

export default AppLayout;
