import React, { useEffect } from "react";
import AppLayout from "./AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Details from "./pages/Details";

// aos import
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./pages/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 1000,
  },
});

function App() {
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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
