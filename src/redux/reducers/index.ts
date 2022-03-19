import { combineReducers } from "redux";
import countryReducer from "./CountryReducer";

const rootReducer = () => {
  return combineReducers({
    countryReducer,
  });
};

export default rootReducer;
