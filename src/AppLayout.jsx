import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Testimotional from "./ui/Testimotional";
import { Outlet } from "react-router-dom";
import ResponsiveNav from "./ui/ResponsiveNav";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div
        className={`absolute h-full transform border-x z-[1000] bg-stone-100 ${
          !isOpen ? "hidden -translate-x-full opacity-0" : "translate-x-0"
        } h-screen right-0 w-72 transition-transform duration-700`}
      >
        {isOpen && <ResponsiveNav setIsOpen={setIsOpen} />}
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Testimotional />
      <Footer />
    </div>
  );
}

export default AppLayout;
