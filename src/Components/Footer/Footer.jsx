import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="pt-10 bg-[#101727] text-white">
      <div className="container mx-auto ">
        <div className=" grid grid-cols-5 pb-10">
          <div className="space-y-4 mr-5">
            <h2 className="font-bold text-3xl">DigiTools</h2>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium text-2xl ">Product</h2>
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium text-2xl ">Company</h2>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
            <p>About</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium text-2xl ">Resources</h2>
            <p>Documentation</p>
            <p>Community</p>
            <p>Contact</p>
            <p>Help Center</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium text-2xl ">Social Links</h2>
            <div className="flex gap-2 ml-2">
              <p className="bg-white p-1 rounded-full text-black">
                <BiLogoInstagramAlt />
              </p>
              <p className="bg-white p-1 rounded-full text-black">
                <ImFacebook2 />
              </p>
              <p className="bg-white p-1 rounded-full text-black">
                <RiTwitterXLine />
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-10 border-t border-[#e5e7eb]">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-3 items-center mb-20">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
