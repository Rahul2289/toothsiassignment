import React from "react";
import Filters from "./../components/Filters/Filters";
import Products from "./../components/Products/Products";
import { ToastContainer } from "react-toastify";

const ProductListing = ({
  query,
  setQuery,
  setCategory,
  category,
  setsize,
  size,
  addToCartProducts,
  products,
}) => {
  return (
    <>
      <div
        style={{
          maxwidth: "100vw",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Filters
          setQuery={setQuery}
          setCategory={setCategory}
          setsize={setsize}
          query={query}
          category={category}
          size={size}
        />
        <Products
          query={query}
          category={category}
          size={size}
          addToCartProducts={addToCartProducts}
          products={products}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductListing;
