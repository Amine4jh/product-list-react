const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>Classic Tiramisu</h4>
        <div className="item-price-info">
          <span className="item-qty">1x</span>
          <span className="item-unit-price">@ $5.50</span>
          <span className="item-total-price">5.50</span>
        </div>
      </div>
      <button className="remove-btn">x</button>
    </div>
  );
};

export default CartItem;
