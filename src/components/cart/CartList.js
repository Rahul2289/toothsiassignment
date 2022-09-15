import React from "react";
import style from "./Cart.module.css";
const CartList = ({ cartItem, removeFromCart, decrementBtn, incrementBtn }) => {
  return (
    <tr>
      <td className={style.product}>
        <span onClick={() => removeFromCart(cartItem.id)}>X</span>
        <img src={cartItem.image} alt={cartItem.name} />
        <p>{cartItem.name}</p>
      </td>

      <td className={style.price}>${cartItem.price}</td>

      <td className={style.quantity}>
        <div>
          <button onClick={() => incrementBtn(cartItem.id)}>+</button>
          <span>{cartItem.cartQuantity}</span>
          <button onClick={() => decrementBtn(cartItem.id)}>-</button>
        </div>
      </td>

      <td className={style.subtotal}>
        ${cartItem.price * cartItem.cartQuantity}
      </td>
    </tr>
  );
};

export default CartList;
