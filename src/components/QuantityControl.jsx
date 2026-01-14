const QuantityControl = ({ onMinus, onPlus }) => {
  return (
    <div className="quantity-controls">
      <button className="qty-btn">-</button>
      <span>1</span>
      <button className="qty-btn">+</button>
    </div>
  );
};

export default QuantityControl;
