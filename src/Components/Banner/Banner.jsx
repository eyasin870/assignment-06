import React from "react";
import BannerImg from "../../assets/banner.png";
import { FaGooglePlay } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="flex justify-between items-center container mx-auto gap-10 mt-20">
      <div className="space-y-5">
        <div className="bg-[#e1e7ff]  py-2 px-4 w-70 rounded-full  ">
          <p className="badge font-medium bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h2 className="text-7xl font-extrabold text-[#101727]">
          Supercharge Your <br /> Digital Workflow
        </h2>
        <div className="text-[#627382] space-y-3">
          <p>
            Access premium AI tools, design assets, templates, and
            productivity{" "}
          </p>
          <p>software—all in one place. Start creating faster today. </p>
          <p>Explore Products</p>
        </div>
        <div className="flex gap-3">
          <button className="btn px-4 py-2 rounded-4xl text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            Explore Products
          </button>
          <button className="btn px-4 py-2 rounded-4xl border  btn-outline flex items-center">
            {" "}
            <CiPlay1 />
            <span className="ml-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
      <div>
        <img className="w-[90%]" src={BannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
