import { Dispatch } from "redux";
import axios from "axios";
import {
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountryActions,
} from "../../types";

export function fetchAllCountriesLoading(): CountryActions {
  return {
    type: FETCH_COUNTRIES_LOADING,
  };
}

export function fetchAllCountriesSuccess(countries: []): CountryActions {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
}

export function fetchAllCountriesFailure(error: string): CountryActions {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
}

// create thunk for fetch all countries
export const fetchAllCountries = () => async (dispatch: Dispatch) => {
  dispatch(fetchAllCountriesLoading());
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    dispatch(fetchAllCountriesSuccess(data));
  } catch (error: any) {
    dispatch(fetchAllCountriesFailure(error.message));
  }
};
