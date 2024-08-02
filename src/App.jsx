import React, { useEffect, useState } from "react";
import AppLayout from "./AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
// aos import
import AOS from "aos";
import "aos/dist/aos.css";
import Details from "./pages/Details";

const apiKey = "AIzaSyBbjWuSxjD4ZBIpl9o2TazEMiT0j7OvnGM";

function App() {
  const [search, setSearch] = useState("nietzsche");
  const [books, setBooks] = useState([]);

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  async function fetchBooks(query) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const { items } = await res.json();
      console.log(items);
      setBooks(items || []);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  }
  

  useEffect(() => {
    if (search !== "") {
      fetchBooks(search);
    }
  }, [search]);

  useEffect(() => {
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
        <Route
          index
          element={
            <AppLayout
              orderPopup={orderPopup}
              handleOrderPopup={handleOrderPopup}
              search={search}
              setSearch={setSearch}
              books={books}
              setBooks={setBooks}
            />
          }
        />
        <Route
          path="books"
          element={
            <Books
              search={search}
              setSearch={setSearch}
              books={books}
              setBooks={setBooks}
            />
          }
        />
        <Route path=":id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
