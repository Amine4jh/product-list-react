import { useState } from "react";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="product" key={product.id}>
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
          onClick={(e) => {
            setCount((count) => {
              if (count === 1) {
                e.target.parentElement.parentElement.classList.remove("addedToCart");
              }
              return count - 1;
            });
          }}
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
  );
};

export default Product;
