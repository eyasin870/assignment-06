import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-15 text-center space-y-3 ">
      <h2 className="text-4xl font-bold">Ready to Transform Your Workflow?</h2>
      <p>
        Join thousands of professionals who are already using Digitools to work
        smarter.
        <br />
         Start your free trial today.
      </p>
      <div className="space-x-2 my-5 flex justify-center items-center">
        <button className="bg-white px-6 py-3 rounded-4xl "><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-semibold">Explore Products</span></button>
        <button className="text-white px-6 py-3 rounded-4xl border border-amber-50 ">View Pricing</button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default WorkFlow;
