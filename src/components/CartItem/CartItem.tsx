import "./cartitem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { removeCountryFromCart } from "../../redux/actions";
import React from "react";

interface CartItemProps {
  id: string;
  flag: string;
  name: string;
}

const CartItem = ({ id, flag, name }: CartItemProps) => {
  const dispatch: Dispatch = useDispatch();

  const onDeleteCartItem = (
    id: string,
    e: React.MouseEvent<HTMLOrSVGElement>
  ) => {
    e.stopPropagation();
    dispatch(removeCountryFromCart(id));
  };

  return (
    <div className="cart__content-item">
      <div className="cart__content-item-left">
        <img src={flag} alt="" />
      </div>
      <div className="cart__content-item-right">
        <div className="cart__content-item-right-name">{name}</div>
        <DeleteIcon
          className="cursor-pointer"
          onClick={(e) => onDeleteCartItem(id, e)}
        />
      </div>
    </div>
  );
};

export default CartItem;
