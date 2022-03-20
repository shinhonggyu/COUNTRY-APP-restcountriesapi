import { Country, CartActionTypes } from "./../../types/CartTypes";
import {
  CartReducerState,
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
} from "../../types";

const initState: CartReducerState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};

export default function cartReducer(
  state: CartReducerState = initState,
  action: CartActionTypes
) {
  switch (action.type) {
    case ADD_COUNTRY_TO_CART: {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem) {
        alert("상품이 이미 담겨있습니다");
        return state;
      } else {
        return {
          cart: state.cart.concat(action.payload),
        };
      }
    }
    case REMOVE_COUNTRY_FROM_CART:
      return {
        cart: state.cart.filter((item: Country) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
