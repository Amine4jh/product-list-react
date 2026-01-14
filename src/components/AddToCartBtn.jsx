import CartIcon from "/images/icon-add-to-cart.svg";

const AddToCartBtn = ({ onSelect }) => {
  const handleSelect = () => {
    onSelect(true);
  };
  return (
    <button className="add-to-cart-btn" onClick={handleSelect}>
      <img src={CartIcon} alt="" />
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
