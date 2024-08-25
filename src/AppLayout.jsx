import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Testimotional from "./ui/Testimotional";
import { Outlet } from "react-router-dom";
import ResponsiveNav from "./ui/ResponsiveNav";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-stone-100 dark:bg-gray-900 dark:text-white ">
      <div
        className={
          isOpen
            ? "fixed top-0 right-0 w-[300px] h-screen bg-stone-100 dark:bg-gray-900 z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-stone-100 dark:bg-gray-900 z-10 duration-300"
        }
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
