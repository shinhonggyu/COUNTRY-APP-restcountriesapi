import "./countrylist.scss";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../redux/actions";
import { AppState } from "../../types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Contry = {
  id: string;
  name: string;
  region: string;
  flag: string;
};

const CountryList = () => {
  const dispatch = useDispatch();
  const contries = useSelector(
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
          contries &&
          contries.map((contry: Contry) => (
            <CountryCard
              key={contry.id}
              flag={contry.flag}
              name={contry.name}
              region={contry.region}
            />
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
