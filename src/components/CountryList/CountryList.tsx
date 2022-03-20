import "./countrylist.scss";
import CountryCard from "../CountryCard/CountryCard";

const CountryList = () => {
  return (
    <div className="country-list">
      {/* sorting */}
      <div className="country-list__sort"></div>
      {/* country list */}
      <div className="country-list__cardswrapper">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
      {/* pagination */}
      <div className="country-list__pagination"></div>
    </div>
  );
};

export default CountryList;
