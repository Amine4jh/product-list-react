import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import data from "./data/data.json"
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <div className="products-container">
          {data.map((product) => (
            <Product product={product} />
          )) }
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default App;
