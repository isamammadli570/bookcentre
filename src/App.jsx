import React from "react";
import AppLayout from "./AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
// aos import
import AOS from "aos";
import "aos/dist/aos.css";

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
