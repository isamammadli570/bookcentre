import React from "react";
import { FaStar } from "react-icons/fa";

function AllBooksItem({ book }) {
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
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
          <span>4.7</span>
        </div>
      </div>
    </div>
  );
}

export default AllBooksItem;
