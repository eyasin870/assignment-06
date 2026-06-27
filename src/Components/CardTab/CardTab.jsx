import React, { useState } from "react";

const CardTab = () => {
  const [activeCard, setActiveCard] = useState("plan-starter");
  const carts = [
    {
      id: "plan-free",
      name: "Free",
      description:
        "Explore essential resume tools.\nPerfect for getting started.",
      price: 5,
      period: "one-time",
      tag: "popular",
      tagType: "popular",
      features: [
        "5+ modern templates",
        "Basic ATS optimization",
        "PDF export",
        "Limited customization",
      ],
      icon: "🌱",
    },
    {
      id: "plan-starter",
      name: "Starter",
      description:
        "Build professional resumes easily.\nIdeal for students and graduates.",
      price: 9,
      period: "one-time",
      tag: "new",
      tagType: "most popular",
      features: [
        "20+ professional templates",
        "ATS friendly resumes",
        "PDF & Word export",
        "Cover letter builder",
      ],
      icon: "⭐",
    },
    {
      id: "plan-pro",
      name: "Pro",
      description:
        "Unlock advanced career features.\nBest for active job seekers.",
      price: 19,
      period: "one-time",
      tag: "best seller",
      tagType: "best seller",
      features: [
        "100+ premium templates",
        "Advanced ATS optimization",
        "AI content writer",
        "Unlimited exports",
        "LinkedIn optimizer",
      ],
      icon: "🚀",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="mt-30 space-y-3">
        <h2 className="font-bold text-5xl text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="flex justify-center my-20 gap-2">
        {carts.map((product) => (
          <div key={product.id}
            onClick={() => setActiveCard(product.id)}
            className={`card h-full  w-96 bg-base-100 shadow-sm 
            ${
              activeCard === product.id
                ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-xl scale-105"
                : "bg-base-100 shadow-sm"
            } `}
          >
            <div className="card-body   ">
              <div className="flex justify-center">
                {activeCard === product.id ?<span
                  className={`badge badge-xs
                              ${product.tagType === "popular" && "badge-warning"}
                                 ${product.tagType === "most popular" && "badge-success"}
                                  ${product.tagType === "best seller" && "badge-primary"}
                                 `}
                >
                  {product.tagType}
                </span>:""}
              </div>

              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{product.name}</h2>
              </div>
              <p>{product.description}</p>
              <div className="text-2xl">
                <span className="text-2xl font-extrabold">
                  ${product.price}
                </span>
                /{product.period}
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {product.features.map((featuer, id) => (
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
                <button className={`text-2xl w-full py-2 px-5 rounded-full btn font-bold ${activeCard === product.id? 'bg-white text-green-700':'text-white bg-[#4f39f6]'}`} >
                  {activeCard === product.id
                    ? "Start Pro Trial"
                    : "Contact sales"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTab;
