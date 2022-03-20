import "./cartmenu.scss";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { AppState } from "../../types";
import React, { useEffect } from "react";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const cart = useSelector(({ cartReducer }: AppState) => cartReducer.cart);

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("menu click");
    e.stopPropagation();
  };

  useEffect(() => {
    console.log("mount");
    document.addEventListener("click", onClose);
    return () => {
      console.log("unmount");
      document.removeEventListener("click", onClose);
    };
  }, []);

  return (
    <div className="menu__content" onClick={handleMenuClick}>
      <div className="menu__content-wrapper">
        {cart.length === 0 && (
          <div className="menu__content-empty">
            <h2>No items in the cart..</h2>
          </div>
        )}
        {cart.map((country) => (
          <CartItem key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
};

export default CartMenu;
