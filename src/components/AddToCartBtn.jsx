import CartIcon from "/images/icon-add-to-cart.svg";

const AddToCartBtn = () => {
  return (
    <button className="add-to-cart-btn">
      <img src={CartIcon} alt="" />
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
