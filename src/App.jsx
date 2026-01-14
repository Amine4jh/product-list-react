import CartConatainer from "./components/CartConatainer";
import ProductsContainer from "./components/ProductsContainer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ProductsContainer />
      <CartConatainer />
    </div>
  );
}

export default App;
