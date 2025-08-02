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
          <div className="add">
            <img src="assets/images/icon-add-to-cart.svg" />
            <p>Add to Cart</p>
          </div>
          <div className="product-content">
            <h6>{product.category}</h6>
            <h5>{product.name}</h5>
            <span>{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
