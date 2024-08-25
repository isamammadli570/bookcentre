import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";
import CartProducts from "../../ui/CartProducts";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className="px-24 md:text-2xl gap-3 md:m-6">
        <h1>Your Shopping Cart</h1>
      </div>
      <div className="md:flex">
        <div>
          {cart?.map((book) => (
            <CartProducts book={book} key={book.id}></CartProducts>
          ))}
        </div>

        <div className="p-10 md:relative bg-zinc-200 dark:bg-gray-800">
          <h1 className="text-3xl ">Total: {cart.length} books</h1>
          <button
            className="md:absolute border p-1 rounded-md
          bg-blue-400 hover:bg-blue-500 text-white 
          duration-300 cursor-pointer text-2xl bottom-10"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
