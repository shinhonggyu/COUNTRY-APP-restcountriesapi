import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountryActions,
} from "../../types";

export function fetchAllCountries(): CountryActions {
  return {
    type: FETCH_COUNTRIES,
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
