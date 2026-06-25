import "./App.css";
import Banner from "./Components/Banner/Banner";
import Impact from "./Components/Impact/Impact";
import Navber from "./Components/Navber/Navber";
import Products from "./Components/Products/Products";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const productPromise = getProducts();

function App() {
  return (
    <>
      <Navber />
      <Banner />
      <Impact />
   
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Cart (2)"
        />
      </div>
      <Products productPromise={productPromise} />
    </>
  );
}

export default App;
