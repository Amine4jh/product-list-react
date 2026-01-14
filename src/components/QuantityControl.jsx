import { useState } from "react";

const QuantityControl = ({ onMinus, onPlus }) => {
  const [counter, setCounter] = useState(1);

  const handlePlus = () => {
    setCounter(counter + 1);
    onMinus(counter);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
    onPlus(counter);
  };

  return (
    <div className="quantity-controls">
      <button className="qty-btn" onClick={handleMinus}>
        -
      </button>
      <span>{counter}</span>
      <button className="qty-btn" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
