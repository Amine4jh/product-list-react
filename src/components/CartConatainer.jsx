import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartConatainer = () => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart (0)</h2>
      <div className="cart-list">
        <CartItem />
      </div>
      <CartSummary />
    </div>
  );
};

export default CartConatainer;
