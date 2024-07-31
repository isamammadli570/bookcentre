import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestBooks from "./components/BestBooks";
import Banner from "./components/Banner";
import AppStoreBanner from "./components/AppStoreBanner";
import AllBooks from "./components/AllBooks";
import Testimotional from "./components/Testimotional";
import Footer from "./components/Footer";

function AppLayout() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <BestBooks />
      <Banner />
      <AppStoreBanner />
      <AllBooks />
      <Testimotional />
      <Footer />
    </div>
  )
}

export default AppLayout