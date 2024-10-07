import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* left size */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Our best Sell</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg-text-5xl">Latest Sell</h1>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
          </div>
        </div>
      </div>
      {/* right size */}
      <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
