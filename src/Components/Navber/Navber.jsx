import React from "react";

const Navber = () => {
  return (
    <div className="flex justify-between items-center py-10 container mx-auto">
      <h2 className="p-1 text-4xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
        DigiTools
      </h2>
      <div className="text-[#101727] flex gap-5">
        <p>Products</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>FAQ</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="indicator relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />{" "}
          </svg>
          <span className="badge badge-sm indicator-item font-extrabold absolute -top-4 text-xl left-1 text-red-900">
            8
          </span>
        </div>
        <div>
          <button className="btn text-[#101727] px-4 py-2 rounded-2xl">
            Login
          </button>
          <button className="btn text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-4 py-2 rounded-4xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
