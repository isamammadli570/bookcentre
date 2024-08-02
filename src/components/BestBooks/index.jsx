import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const apiKey = "AIzaSyBbjWuSxjD4ZBIpl9o2TazEMiT0j7OvnGM";

function BestBooks({ handleOrderPopup }) {
  const [search, setSearch] = useState("nietzsche");
  const [books, setBooks] = useState([]);

  async function fetchBooks(query) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=3`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const { items } = await res.json();
      console.log(items);
      setBooks(items || []);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  }

  useEffect(() => {
    if (search !== "") {
      fetchBooks(search);
    }
  }, [search]);
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Discover our handpicked selection of the best books across all
              genres.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {books.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              return (
                <div
                  key={book.id}
                  data-aos="zoom-in"
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                   dark:hover:bg-primary hover:text-white relative
                    shadow-xl duration-high group max-w-[300px] h-[350px] "
                >
                  <div className="h-[100px]">
                    <img
                      src={thumbnail}
                      alt=""
                      className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold">
                      {book.volumeInfo.title}
                    </h1>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {book.volumeInfo.description}
                    </p>
                    <button
                      className="bg-primary hover:scale-105 duration-300
                       text-white py-1 px-4 rounded-full mt-4 
                        group-hover:bg-white group-hover:text-primary"
                      onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestBooks;
