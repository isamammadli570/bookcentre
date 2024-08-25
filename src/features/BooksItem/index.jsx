import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ContextProvider";
import { FaCartShopping } from "react-icons/fa6";

//toastify import
/* import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; */

function BooksItem({ book }) {
  const { dispatch } = useContext(CartContext);
  /* const notify = () => toast("Wow so easy!"); */

  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div key={book.id} className="p-6">
      <div
        className="relative text-center w-[250px] h-[380px] mb-2.5 p-6 rounded-2xl
      dark:border-gray-800 border-gray-300 border"
      >
        <div>
          <Link to={`/${book.id}?id=${book.id}`}>
            <div>
              <img
                className="h-[250px] rounded shadow-2xl"
                src={thumbnail}
                alt=""
              />
              <div className="flex flex-col mt-1">
                <h3 className="text-sm line-clamp-1 mb-1 duration-200 dark:text-white">
                  {book.volumeInfo.title}
                </h3>
                <p className="duration-200 line-clamp-1 font-semibold dark:text-white">
                  {book.volumeInfo.authors?.join(", ")}
                </p>
              </div>
            </div>
          </Link>

          <div className="flex items-center absolute right-3">
            <button
              onClick={() => dispatch({ type: "Add", book: book })}
              className="text-[#666] dark:text-[#b8b8b8] rounded-md p-1 mt-1 hover:scale-[1.1]
              hover:text-green-800 duration-200"
            >
              <FaCartShopping size={24} />
            </button>
            <label className="px-0 container block relative cursor-pointer select-none ">
              <input
                className="absolute opacity-0 cursor-pointer h-0 w-0 "
                type="checkbox"
              />
              <svg
                className="relative top-0 left-0 h-[30px] w-[30px] duration-300
               fill-[#666] dark:fill-[#b8b8b8] hover:scale-[1.1]  "
                version="1.0"
                viewBox="0 0 24 24"
              >
                <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
              </svg>
            </label>
          </div>

          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
}

export default BooksItem;
