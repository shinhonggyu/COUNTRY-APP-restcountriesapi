import "./appbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../Search/Search";

const Appbar = () => {
  return (
    <div className="appbar">
      <div className="appbar__content container">
        <div className="appbar__content-left">
          <img
            src={process.env.PUBLIC_URL + "images/COUNTRY APP.svg"}
            alt="contry api text"
          />
        </div>
        <div className="appbar__content-search">
          <Search />
        </div>
        <div className="appbar__content-right">
          <div className="appbar__content-cart">
            <ShoppingCartIcon className="cartIcon" />
            <div className="appbar__content-cart-counter">10</div>
          </div>
          <MenuIcon className="menuIcon" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
