import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestBooks from "./components/BestBooks";
import Banner from "./components/Banner";
import AppStoreBanner from "./components/AppStoreBanner";
import AllBooks from "./components/AllBooks";
import Testimotional from "./components/Testimotional";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function AppLayout({
  search,
  setSearch,
  books,
  setBooks,
  handleOrderPopup,
  orderPopup,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero
        search={search}
        setSearch={setSearch}
        books={books}
        setBooks={setBooks}
        handleOrderPopup={handleOrderPopup}
      />
      <BestBooks handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStoreBanner />
      <AllBooks />
      <Testimotional />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
}

export default AppLayout;
