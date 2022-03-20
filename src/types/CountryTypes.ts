// constants
export const FETCH_COUNTRIES_LOADING = "FETCH_COUNTRIES_LOADING";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";

// reducer types
export type CountryReducerState = {
  countries: [];
  isLoading: boolean;
  error: string;
};

// action Types
export type FetchAllCountriesLoadingAction = {
  type: typeof FETCH_COUNTRIES_LOADING;
};

export type FetchAllCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload: [];
};

export type FetchAllCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload: string;
};

export type CountryActions =
  | FetchAllCountriesLoadingAction
  | FetchAllCountriesSuccessAction
  | FetchAllCountriesFailureAction;
