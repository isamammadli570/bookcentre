import React from "react";
import Hero from "../../ui/Hero";
import BestBooks from "../../ui/BestBooks";
import Banner from "../../ui/Banner";
import AppStoreBanner from "../../ui/AppStoreBanner";
import AllBooks from "../../ui/AllBooks";

function Home({ handleOrderPopup, orderPopup }) {
  return (
    <div>
      <Hero handleOrderPopup={handleOrderPopup} />
      <BestBooks handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStoreBanner />
      <AllBooks />
    </div>
  );
}

export default Home;
