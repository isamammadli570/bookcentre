import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";

function CartProducts({ book }) {
  const { cart, dispatch } = useContext(CartContext);

  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="flex border px-24 py-10">
      <img src={thumbnail} className="w-25 h-25" alt="" />
      <div className="ms-4">
        <h4>{book.volumeInfo.title}</h4>

        <button
          className="bg-yellow-300 text-gray-600 rounded-md p-1 hover:bg-yellow-400"
          onClick={() => dispatch({ type: "Remove", id: book.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProducts;
