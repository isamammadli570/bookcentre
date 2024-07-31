import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestBooks from "./components/BestBooks";
import Banner from "./components/Banner";
import AppStoreBanner from "./components/AppStoreBanner";
import AllBooks from "./components/AllBooks";
import Testimotional from "./components/Testimotional";
import Footer from "./components/Footer";

import AppLayout from "./AppLayout";
// aos import
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
