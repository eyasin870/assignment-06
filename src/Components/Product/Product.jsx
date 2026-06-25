import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Product = ({ product,carts,setCarts }) => {
 const [isSubscribe,setIsSubscribe] = useState(false)
 const handleBuyNowBtn =()=>{
    setIsSubscribe(true);
    
    const exist = carts.find(cart=>cart.id === product.id)
    if(exist){
      return;
    }else{
      setCarts([...carts,product]);

    }
    
    
    

 }
  return (
    <div>
      <div className="card h-full  w-96 bg-base-100 shadow-sm  ">
        <div className="card-body   ">
          <div className="flex justify-end">
            <span
              className={`badge badge-xs
                  ${product.tag === "popular" && "badge-warning"}
                     ${product.tag === "new" && "badge-success"}
                      ${product.tag === "best seller" && "badge-primary"}
                     `}
            >
              {product.tag}
            </span>
          </div>
          <div className="text-3xl">{product.icon}</div>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{product.name}</h2>
          </div>
          <p>{product.description}</p>
          <div className="text-2xl">
            <span className="text-2xl font-extrabold">${product.price}</span>/
            {product.period}
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {product.features.map((featuer,id) => (
              <li key={id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{featuer}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button 
           onClick={handleBuyNowBtn}
               

           
            className={`btn  btn-block rounded-full ${isSubscribe?'bg-green-500 text-white':'btn-primary'}`}>{isSubscribe?<IoMdCheckmark />:''} {isSubscribe? 'Added to Cart':'Buy Now'} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
