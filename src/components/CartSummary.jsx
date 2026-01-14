import CarbonIcon from "/images/icon-carbon-neutral.svg";

const CartSummary = () => {
  return (
    <div className="cart-summary">
      <div className="order-total">
        <span>Order Total</span>
        <h2>$46.50</h2>
      </div>
      <div className="carbon-neutral">
        <img src={CarbonIcon} alt="" />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button className="confirm-btn">Confirm Order</button>
    </div>
  );
};

export default CartSummary;
