/* eslint-disable no-unused-expressions */
const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.book];
      

    case "Remove":
      return state.filter((book) => book.id !== action.id);

    default:
      state;
  }
};

export default CartReducer;
