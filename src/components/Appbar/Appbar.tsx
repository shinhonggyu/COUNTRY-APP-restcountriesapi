import "./appbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../Search/Search";
import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../types";
import CartMenu from "../CartMenu/CartMenu";

interface AppbarProps {
  onClick: Function;
}

const Appbar = ({ onClick }: AppbarProps) => {
  const cart = useSelector(({ cartReducer }: AppState) => cartReducer.cart);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onClose = () => {
    console.log("close");
    setOpen(false);
  };

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
            <ShoppingCartIcon
              className="cartIcon cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            <div className="appbar__content-cart-counter">{cart.length}</div>
            {/* Menu Component */}
            {open && <CartMenu onClose={onClose} />}
          </div>
          <MenuIcon onClick={() => onClick(true)} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default memo(Appbar);
