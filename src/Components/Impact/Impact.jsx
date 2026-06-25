import React from "react";

const Impact = () => {
  return (
    <div className="">
      <div className="h-60 bg-linear-to-r from-[#4f39f6] to-[#9514fa] my-30 py-2 grid grid-cols-3 items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white">50K+</h1>
          <p className="text-white text-xl my-2">Active Users</p>
        </div>
        <div className="flex flex-col items-center justify-center border-x border-x-gray-200 ">
          <h1 className="text-6xl font-extrabold text-white">200+</h1>
          <p className="text-white text-xl my-2">Premium Tools</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white">4.9</h1>
          <p className="text-white text-xl my-2">Rating</p>
        </div>
      </div>
      <div className="text-center mb-5 ">
        <h2 className="mb-2 text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="text-xl text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
    </div>
  );
};

export default Impact;
