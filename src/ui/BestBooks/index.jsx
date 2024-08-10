import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getBestBooksApi } from "../../services/bookApi";
import BestBooksItem from "../../features/BestBooksItem";

function BestBooks({ handleOrderPopup }) {
  const [search] = useState("nietzsche");

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
              return (
                <BestBooksItem
                  book={book}
                  key={book.id}
                  handleOrderPopup={handleOrderPopup}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestBooks;
