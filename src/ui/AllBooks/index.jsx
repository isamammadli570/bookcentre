import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllBooksApi } from "../../services/bookApi";
import AllBooksItem from "../../features/AllBooksItem";

function AllBooks() {
  const [search] = useState("books");

  const { data: book } = useQuery({
    queryKey: ["books", { search }],
    queryFn: () => getAllBooksApi(search),
  });
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
              Trending Books
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
              {book?.map((book) => {
                return <AllBooksItem book={book} key={book.id}/>
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
