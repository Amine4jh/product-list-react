import EmptyCart from "./EmptyCart";

const Cart = () => {
  return (
    <div className="cart">
      <h2>
        Your Cart (<span>0</span>)
      </h2>
      <EmptyCart />
      <div className="filled-cart">
        <div className="cartProdContainer">
          <div className="cartProd">
            <div className="cartProdInfos">
              <h3>Classic Tiramisu</h3>
              <span id="quantity"><small>1</small>x</span>
              <span id="unitPrice">@ $<small>5.50</small></span>
              <span id="totalPrice">$<small>5.50</small></span>
            </div>
            <img src="assets/images/icon-remove-item.svg" alt="x" />
          </div>
          <div className="cartProd">
            <div className="cartProdInfos">
              <h3>Classic Tiramisu</h3>
              <span id="quantity"><small>1</small>x</span>
              <span id="unitPrice">@ $<small>5.50</small></span>
              <span id="totalPrice">$<small>5.50</small></span>
            </div>
            <img src="assets/images/icon-remove-item.svg" alt="x" />
          </div>
        </div>
        <div className="cartContent">
          <div className="total">
            <p>Order Total</p>
            <h1>$<span>46.50</span></h1>
          </div>
          <div className="carbon-neutral">
            <img src="assets/images/icon-carbon-neutral.svg" />
            This is <b>carbon-neutral</b> delivery
          </div>
          <button>Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
