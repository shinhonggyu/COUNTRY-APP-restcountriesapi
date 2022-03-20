import "./countrycard.scss";
import Button from "@mui/material/Button";
import { memo } from "react";

type ContryCardProps = {
  flag: string;
  name: string;
  region: string;
};

const CountryCard = ({ flag, name, region }: ContryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <img src={flag} alt={name} />
        <h2 className="country-card__name">{name}</h2>
        <h2 className="country-card__region">{region}</h2>
        <div className="country-card__action">
          <Button className="btn btn__primary">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CountryCard);
