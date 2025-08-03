const FilledCart = () => {
  return (
    <div className="filled-cart">
      <div className="cartProdContainer">
        
        {/* Start Cart Products */}
        <div className="cartProd">
          <div className="cartProdInfos">
            <h3>Classic Tiramisu</h3>
            <span id="quantity">
              <small>1</small>x
            </span>
            <span id="unitPrice">
              @ $<small>5.50</small>
            </span>
            <span id="totalPrice">
              $<small>5.50</small>
            </span>
          </div>
          <img src="assets/images/icon-remove-item.svg" alt="x" />
        </div>
        {/* End Cart Products */}

      </div>
      <div className="cartContent">
        <div className="total">
          <p>Order Total</p>
          <h1>
            $<span>46.50</span>
          </h1>
        </div>
        <div className="carbon-neutral">
          <img src="assets/images/icon-carbon-neutral.svg" />
          This is <b>carbon-neutral</b> delivery
        </div>
        <button>Confirm Order</button>
      </div>
    </div>
  );
};

export default FilledCart;
