import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import products from "./data/data.json";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [size, setsize] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const addToCartProducts = (product) => {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      cart[itemIndex].cartQuantity += 1;
    } else {
      const tempProduct = { ...product, cartQuantity: 1 };
      cart.push(tempProduct);
    }
    toast.success("product added to cart", options);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const removeFromCart = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.success("product removed from cart", options);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const incrementBtn = (id) => {
    try {
      let itemIndex = cart.findIndex((item) => item.id === id);
      if (cart[itemIndex].cartQuantity >= 1) {
        cart[itemIndex].cartQuantity += 1;
      }
    } catch (error) {
      console.log(error);
    }
    toast.success("Increased product quantity", options);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const decrementBtn = (id) => {
    let itemIndex = cart.findIndex((item) => item.id === id);
    if (cart[itemIndex].cartQuantity > 1) {
      cart[itemIndex].cartQuantity -= 1;
    } else if (cart[itemIndex].cartQuantity === 1) {
      let updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    }
    toast.success("Decreased product quantity", options);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductListing
              query={query}
              setQuery={setQuery}
              category={category}
              setCategory={setCategory}
              size={size}
              setsize={setsize}
              addToCartProducts={addToCartProducts}
              products={products}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              decrementBtn={decrementBtn}
              incrementBtn={incrementBtn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
