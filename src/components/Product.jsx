import data from "../data/data.json";
import { useState } from "react";

const Product = () => {
	const [count, setCount] = useState(0);
	
  return (
    <div className="products-container">
      {data.map((product) => (
        <div className="product">
          <img
            src={product.image.desktop}
            id="prodImg"
            alt="Product image"
            width={250}
          />
          <div
            className="add-to-cart-zeroCount"
            onClick={(e) => {
              setCount((count) => count + 1);
              e.currentTarget.parentElement.classList.add("addedToCart");
            }}
          >
            <img src="assets/images/icon-add-to-cart.svg" />
            <p>Add to Cart</p>
          </div>
          <div className="add-more-to-cart">
            <img
              src="assets/images/icon-decrement-quantity.svg"
              id="minusIcon"
              onClick={() => setCount((count) => count - 1)}
            />
            <p>{count}</p>
            <img
              src="assets/images/icon-increment-quantity.svg"
              id="plusIcon"
              onClick={() => setCount((count) => count + 1)}
            />
          </div>
          <div className="product-content">
            <h6>{product.category}</h6>
            <h4>{product.name}</h4>
            <span>${product.price.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
