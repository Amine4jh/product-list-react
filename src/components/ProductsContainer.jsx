import ProductCard from "./ProductCard";
import products from "../data.json";

const ProductsContainer = () => {
  return (
    <div className="products-container">
      <h1>Desserts</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            category={product.category}
            name={product.name}
            price={product.price.toFixed(2)}
            imgSrc={product.image.desktop}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
