import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import QuantityControl from "./QuantityControl";

const ProductCard = ({ category, name, price, imgSrc }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleSelect = (status) => {
    setIsSelected(status);
  };

  const handlePlus = (currentCounter) => {
    setCounter(currentCounter + 1);
  };

  const handleMinus = (currentCounter) => {
    setCounter(currentCounter - 1);
    if (counter === 1) {
      setIsSelected(false);
      setCounter(1);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={imgSrc}
          className={`product-image ${isSelected && "selected"}`}
        />
        {isSelected ? (
          <QuantityControl
            counter={counter}
            onMinus={handleMinus}
            onPlus={handlePlus}
          />
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
