import {
  Country,
  AddCountryToCartAction,
  RemoveCountryFromCartAction,
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
} from "../../types";

export function addCountryToCart(cart: Country): AddCountryToCartAction {
  return {
    type: ADD_COUNTRY_TO_CART,
    payload: cart,
  };
}

export function removeCountryFromCart(id: string): RemoveCountryFromCartAction {
  return {
    type: REMOVE_COUNTRY_FROM_CART,
    payload: id,
  };
}
