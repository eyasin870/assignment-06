import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Impact from "./Components/Impact/Impact";
import Navber from "./Components/Navber/Navber";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CardTab from "./Components/CardTab/CardTab";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const productPromise = getProducts();

function App() {
  const [activeTab,setActiveTab]= useState("Products");
  const [carts,setCarts]= useState([])
  
  // console.log(carts)
  
  return (
    <>
      <Navber carts={carts}/>
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
          aria-label={`Cart (${carts.length})`}
          onClick={()=>setActiveTab("cart")}
        />
      </div>
      {activeTab === "Products" && <Products setCarts={setCarts} carts={carts} productPromise={productPromise} />}
      {activeTab === "cart" && <Cart setCarts={setCarts} carts={carts}/>}
      <CardTab/>
      <WorkFlow/>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
