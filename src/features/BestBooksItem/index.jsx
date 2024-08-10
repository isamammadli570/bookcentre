import React from "react";
import { FaStar } from "react-icons/fa";

function BestBooksItem({ book, handleOrderPopup }) {
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
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
        <h1 className="text-xl font-bold">{book.volumeInfo.title}</h1>
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
}

export default BestBooksItem;
