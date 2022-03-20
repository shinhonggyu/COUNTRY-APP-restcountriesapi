import "./countrycard.scss";
import Button from "@mui/material/Button";
import { memo } from "react";

const CountryCard = () => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <img
          src="https://media.istockphoto.com/photos/ukraine-flag-waving-picture-id1362736360?b=1&k=20&m=1362736360&s=170667a&w=0&h=TtOgClPIiuYRAJNHUD-jzR-hzGcvg9Iyby0J0QAmihA="
          alt="country name"
        />
        <h2 className="country-card__name">Ukraine</h2>
        <h2 className="country-card__region">Europe</h2>
        <div className="country-card__action">
          <Button className="btn btn__primary">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CountryCard);
