import "./countrycard.scss";
import Button from "@mui/material/Button";
import React, { memo } from "react";
import { Country } from "../../types";
import { useDispatch } from "react-redux";
import { addCountryToCart } from "../../redux/actions";
import { Dispatch } from "redux";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const dispatch: Dispatch = useDispatch();

  const onAddCountyToCart = (country: Country) => {
    dispatch(addCountryToCart(country));
  };

  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <img src={country.flag} alt={country.name} />
        <h2 className="country-card__name">{country.name}</h2>
        <h2 className="country-card__region">{country.region}</h2>
        <div className="country-card__action">
          <Button
            className="btn btn__primary"
            onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
              e.stopPropagation();
              onAddCountyToCart(country);
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CountryCard);
