import { useState, useEffect } from "react";
import styles from "./Products.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillEmojiSmileFill, BsEmojiAngryFill } from "react-icons/bs";
const Products = ({ query, category, size, addToCartProducts, products }) => {
  const [data, setData] = useState(products);

  useEffect(() => {
    try {
      if (query) {
        const filterDAta = products.filter((item) =>
          item.name.toLowerCase().trim().includes(query.toLowerCase().trim())
        );
        setData(filterDAta);
      } else if (category) {
        const filterDAta = products.filter(
          (item) => item.category === category
        );
        setData(filterDAta);
      } else if (size) {
        const filterSize = products.filter((item) => item.size === size);
        setData(filterSize);
      } else {
        setData(products);
      }
    } catch (error) {
      console.log(error);
    }
  }, [query, category, size, products, setData]);

  return (
    <div className={styles.Wrapper}>
      <table>
        <tbody>
          <tr>
            <th className={styles.image}>Image</th>
            <th className={styles.name}>Name</th>
            <th className={styles.color}>color</th>
            <th className={styles.stock}>Stock</th>
            <th className={styles.price}>price</th>
            <th className={styles.buy}>Buy</th>
          </tr>
          {data.length === 0 ? (
            <p>No products found</p>
          ) : (
            <>
              {" "}
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className={styles.image}>
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td className={styles.name}>
                      <p>{item.name}</p>
                    </td>
                    <td className={styles.color}>
                      <div style={{ background: `${item.color}` }}></div>
                      <p>{item.color}</p>
                    </td>
                    <td className={styles.stock}>
                      {item.inStock ? (
                        <>
                          <div style={{ color: "green" }}>
                            <BsFillEmojiSmileFill />
                          </div>
                          <div style={{ color: "green" }}>{"In stock"}</div>
                        </>
                      ) : (
                        <>
                          <div style={{ color: "red" }}>
                            <BsEmojiAngryFill />
                          </div>
                          <div style={{ color: "red" }}>{"Out of stock"}</div>
                        </>
                      )}
                    </td>
                    <td className={styles.price}>
                      <p>${item.price}</p>
                    </td>
                    <td className={styles.buy}>
                      <input type="number" min="1" max="10" value={"1"} />
                      <button
                        type="button"
                        onClick={() => addToCartProducts(item)}
                      >
                        <AiOutlineShoppingCart />
                      </button>
                      <input
                        type="checkbox"
                        value={item.id}
                        onClick={() => addToCartProducts(item)}
                      />
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
