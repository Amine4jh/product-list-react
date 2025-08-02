import data from "../data/data.json";

const Product = () => {
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
          <div className="add-to-cart-zeroCount">
            <img src="assets/images/icon-add-to-cart.svg" />
            <p>Add to Cart</p>
          </div>
					<div className="add-more-to-cart">
            <img src="assets/images/icon-decrement-quantity.svg" id="minusIcon" />
            <p>1</p>
            <img src="assets/images/icon-increment-quantity.svg" id="plusIcon" />
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
