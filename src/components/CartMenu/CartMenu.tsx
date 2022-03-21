import "./cartmenu.scss";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { AppState } from "../../types";
import React, { useEffect, useRef } from "react";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const cart = useSelector(({ cartReducer }: AppState) => cartReducer.cart);

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("menu click");
    e.stopPropagation();
  };

  const domClick = (e: any) => {
    console.log("global click");
    console.log(menuRef.current?.contains(e.target));
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    console.log("mount");
    document.addEventListener("click", domClick);
    return () => {
      console.log("unmount");
      document.removeEventListener("click", domClick);
    };
  }, []);

  return (
    <div ref={menuRef} className="menu__content">
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
