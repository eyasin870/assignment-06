import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
  };
  const handleDelete =(cart)=>{
    const filteredArray = carts.filter(c=>c.id !==cart.id);
    setCarts(filteredArray)
  }
  return (
    <div className="container mx-auto bg-white ">
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      <div>
      {
        carts.length === 0?<div className="flex flex-col items-center justify-center text-gray-500 my-25 space-y-5">
        <span className="text-8xl"><IoCartOutline /></span>
          <h2 className="text-2xl font-medium">your cart is empty</h2>
        </div>:
        <div>
          {carts.map((cart) => (
            <div className="flex items-center justify-between bg-gray-200 py-3 px-6 my-8 shadow-2xl rounded-2xl">
              <div className="flex gap-4 items-center">
                <span className="text-3xl">{cart.icon}</span>
                <div>
                  <h2 className="font-bold text-2xl ">{cart.name}</h2>
                  <p className="font-medium text-2xl ">${cart.price}</p>
                </div>
              </div>
              <div>
                <button
                onClick={()=>handleDelete(cart)}
                 className="text-red-700 text-xl font-medium cursor-pointer ">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      }
      </div>
        <div className="flex justify-between items-center px-5 bg-gray-100 mb-2">
          <p className="text-2xl my-5 font-medium text-gray-700">Total</p>
          <h2 className="font-bold text-2xl">${totalPrice}</h2>
        </div>
        <button
          onClick={handlePayment}
          className="btn w-full bg-blue-600 text-white rounded-2xl font-bold text-xl  py-6 mb-8"
        >
          Proceed to Checkout
        </button>
    </div>
  );
};

export default Cart;
