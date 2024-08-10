import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Popup from "./ui/Popup";
import { Outlet } from "react-router-dom";

function AppLayout({ handleOrderPopup, orderPopup }) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
}

export default AppLayout;
