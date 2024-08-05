import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const apiKey = "AIzaSyBbjWuSxjD4ZBIpl9o2TazEMiT0j7OvnGM";

function AllBooks() {
  const [search, setSearch] = useState("books");
  const [books, setBooks] = useState([]);

  async function fetchBooks(query) {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=5`
    );
    const { items } = await res.json();
    console.log(items);
    setBooks(items || []);
  }

  useEffect(() => {
    if (search !== "") {
      fetchBooks(search);
    }
  }, [search]);
  return (
    <>
      <div id="top" className="mt-14 mb-12">
        <div className="container">
          {/* header hissesi */}
          <div
            data-aos="slide-up"
            className="text-center mb-10 max-w-[600px] mx-auto"
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Explore our top picks and find your next favorite book from our
              carefully curated selection.
            </p>
          </div>

          {/* esas hisse */}
          <div data-aos="slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {books.map((book) => {
                let thumbnail =
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.smallThumbnail;
                return (
                  <div key={book.id} className="div space-y-3">
                    <img
                      src={thumbnail}
                      alt=""
                      className="h-[220px] w-[150px] object-cover rounded-md r "
                    />
                    <div>
                      <h3 className="font-semibold">{book.volumeInfo.title}</h3>
                      <p className="text-sm text-gray-700">
                        {book.volumeInfo.authors?.join(", ")}
                      </p>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <NavLink
                to="/books"
                className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md"
              >
                View All Books
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBooks;
