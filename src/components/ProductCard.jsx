import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import QuantityControl from "./QuantityControl";

const ProductCard = ({ category, name, price, imgSrc }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (status) => {
    setIsSelected(status);
  };

  const handleCounter = (counter) => {
    counter == 1 && setIsSelected(false);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={imgSrc}
          className={`product-image ${isSelected && "selected"}`}
        />
        {isSelected ? (
          <QuantityControl onMinus={handleCounter} onPlus={handleCounter} />
        ) : (
          <AddToCartBtn onSelect={handleSelect} />
        )}
      </div>
      <div className="product-info">
        <span className="category">{category}</span>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
