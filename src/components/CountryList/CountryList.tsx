import "./countrylist.scss";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../redux/actions";
import { AppState, Country } from "../../types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(
    ({ countryReducer }: AppState) => countryReducer.countries
  );
  const isLoading = useSelector(
    ({ countryReducer }: AppState) => countryReducer.isLoading
  );

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div className="country-list">
      {/* sorting */}
      <div className="country-list__sort"></div>
      {/* country list */}
      <div className="country-list__cardswrapper">
        {isLoading && <Loading />}
        {!isLoading &&
          countries &&
          countries.map((country: Country) => (
            <CountryCard key={country.id} country={country} />
          ))}
      </div>
      {/* pagination */}
      <div className="country-list__pagination"></div>
    </div>
  );
};

function Loading() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

export default memo(CountryList);
