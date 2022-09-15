import React from "react";
import CartList from "./../components/cart/CartList";
import style from "../components/cart/Cart.module.css";
import { ToastContainer } from "react-toastify";
const Cart = ({ cart, removeFromCart, decrementBtn, incrementBtn }) => {
  let total = cart.reduce((acc, cur) => acc + cur.price * cur.cartQuantity, 0);
  console.log(total);

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <table>
            <tbody>
              <tr>
                <th className={style.product}>product</th>
                <th className={style.price}>price</th>
                <th className={style.quantity}>quantity</th>
                <th className={style.subtotal}>subtotal</th>
              </tr>
              {cart.map((item) => {
                return (
                  <CartList
                    key={item.id}
                    cartItem={item}
                    removeFromCart={removeFromCart}
                    decrementBtn={decrementBtn}
                    incrementBtn={incrementBtn}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={style.right}>
          <h1>Cart totals</h1>
          <div className={style.subtotal}>
            <h5>subtotal</h5>
            <p>${total}</p>
          </div>
          <div className={style.total}>
            <h5>Total</h5>
            <p>${total}</p>
          </div>
          <button>proceed to checkout</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
