import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ContextProvider";

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
      <div className="relative text-center w-[250px] h-[380px] mb-2.5 p-6 rounded-2xl border-2">
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
          <button
            onClick={() => dispatch({ type: "Add", book: book })}
            className="border border-green-500 text-green-500 rounded-md 
            p-1 mt-1 hover:bg-green-400 hover:text-white duration-200"
          >
            
            Add to Cart
          </button>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
}

export default BooksItem;
