import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";

function CartProducts({ book }) {
  const { dispatch } = useContext(CartContext);

  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="flex bg-stone-100 border md:w-[80rem] px-24 py-10 gap-3 md:m-6">
      <img src={thumbnail} className="md:w-24 md:h-full w-10 h-10" alt="" />
      <div className="ms-4">
        <h4>{book.volumeInfo.title}</h4>
        <div className="mt-5 text-gray-500">
          <p className="line-clamp-2">{book.searchInfo.textSnippet}</p>
        </div>
        <button
          className="border border-red-500 text-red-500 rounded-md p-1
          hover:bg-red-500 hover:text-white duration-200 mt-2"
          onClick={() => dispatch({ type: "Remove", id: book.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProducts;
