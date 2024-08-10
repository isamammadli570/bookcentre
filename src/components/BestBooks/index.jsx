import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { getBestBooksApi } from "../../services/bookApi";

function BestBooks({ handleOrderPopup }) {
  const [search, setSearch] = useState("nietzsche");

  const { data: book } = useQuery({
    queryKey: ["books", { search }],
    queryFn: () => getBestBooksApi(search),
  });

  return (
    <>
      <div id="best" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Discover our handpicked selection of the best books across all
              genres.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {book?.map((book) => {
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
