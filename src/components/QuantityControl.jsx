const QuantityControl = ({ counter, onMinus, onPlus }) => {
  return (
    <div className="quantity-controls">
      <button className="qty-btn" onClick={() => onMinus(counter)}>
        -
      </button>
      <span>{counter}</span>
      <button className="qty-btn" onClick={() => onPlus(counter)}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
