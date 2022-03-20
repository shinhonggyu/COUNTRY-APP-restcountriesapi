import { combineReducers } from "redux";
import countryReducer from "./CountryReducer";
import cartReducer from "./CartReducer";

const rootReducer = () => {
  return combineReducers({
    countryReducer,
    cartReducer,
  });
};

export default rootReducer;
