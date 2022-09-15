import styles from "./Filters.module.css";
import { MdRestartAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Filters = ({ query, setQuery, category, setCategory, size, setsize }) => {
  const navigate = useNavigate();

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangeSize = (e) => {
    setsize(e.target.value);
  };
  const handleReset = () => {
    setQuery("");
    setCategory("");
    setsize("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleChangeCategory}
        >
          <option value={""}>Category(All)</option>
          <option value="hoodies" name="hoodies">
            Hoodies
          </option>
          <option value="jacket" name="jacket">
            jackets
          </option>
        </select>
        <select name="size" id="size" value={size} onChange={handleChangeSize}>
          <option value={""}>Size(All)</option>
          <option value="s" name="s">
            S
          </option>
          <option value="m" name="m">
            M
          </option>
          <option value="xl" name="xl">
            XL
          </option>
        </select>
        <button type="button" onClick={handleReset}>
          <i>
            <MdRestartAlt color="blue" />
          </i>
          <span>Reset</span>
        </button>
      </div>
      <div className={styles.right}>
        <label>Search:</label>
        <input
          type="text"
          value={query}
          placeholder="search product name ..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={() => navigate("/cart")}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Filters;
