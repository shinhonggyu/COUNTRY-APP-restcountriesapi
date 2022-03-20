// constants
export const ADD_COUNTRY_TO_CART = "ADD_COUNTRY_TO_CART";
export const REMOVE_COUNTRY_FROM_CART = "REMOVE_COUNTRY_FROM_CART";

export interface Country {
  id: string;
  name: string;
  region: string;
  flag: string;
}

// reducer types
export type CartReducerState = {
  cart: Country[];
};

// action Types
export type AddCountryToCartAction = {
  type: typeof ADD_COUNTRY_TO_CART;
  payload: Country;
};

export type RemoveCountryFromCartAction = {
  type: typeof REMOVE_COUNTRY_FROM_CART;
  payload: string;
};

export type CartActionTypes =
  | AddCountryToCartAction
  | RemoveCountryFromCartAction;
