import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Impact from "./Components/Impact/Impact";
import Navber from "./Components/Navber/Navber";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const productPromise = getProducts();

function App() {
  const [activeTab,setActiveTab]= useState("Products")
  console.log(activeTab)
  return (
    <>
      <Navber />
      <Banner />
      <Impact />
   
      <div className="tabs tabs-box justify-center bg-transparent ">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
          aria-label="Products"
           onClick={()=>setActiveTab("Products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label="Cart (2)"
          onClick={()=>setActiveTab("cart")}
        />
      </div>
      {activeTab === "Products" && <Products productPromise={productPromise} />}
      {activeTab === "cart" && <Cart/>}
    </>
  );
}

export default App;
