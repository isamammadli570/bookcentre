import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";
import CartProducts from "../../ui/CartProducts";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart?.map((book) => (
        <CartProducts book={book} key={book.id}></CartProducts>
      ))}
    </div>
  );
}

export default Cart;
