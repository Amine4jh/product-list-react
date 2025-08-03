import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart = () => {
  return (
    <div className="cart">
      <h2>
        Your Cart (<span>0</span>)
      </h2>
      <EmptyCart />
      <FilledCart />
    </div>
  );
};

export default Cart;
