import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Product />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default App;
