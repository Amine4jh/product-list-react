const Cart = () => {
  return (
    <div>
      <h2>
        Your Cart (<span>0</span>)
      </h2>
      <div className="empty-cart">
        <img
          src="assets/images/illustration-empty-cart.svg"
          alt="Empty Cart Image"
        />
        <h4>Your added items will appear here</h4>
      </div>
      <div className="full-cart"></div>
    </div>
  );
};

export default Cart;
