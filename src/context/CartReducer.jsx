/* eslint-disable no-unused-expressions */
const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.book];
      

    case "Remove":
      return state.filter((book) => book !== action);

      /* if (action.type === "ACTION_DELETE_FAVORITE") {
        return {
          ...state,
          favorites: state.favorites.filter(
            (fav) => fav.idDrink !== action.payload && fav.idMeal !== action.payload
          ),
        };
      } */

    default:
      state;
  }
};

export default CartReducer;
