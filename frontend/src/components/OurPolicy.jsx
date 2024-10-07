import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-cols sm:flex-row justify-between gap-12 sm:gap-2 text-center py-20">
      {/* img tag */}
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
        <p className="font-semibold">Exchange Policy</p>
        <p className="text-gray-700">we offer hassle free exchange policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="" />
        <p className="font-semibold">7 Days return Policy</p>
        <p className="text-gray-700">we offer hassle free exchange policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="" />
        <p className="font-semibold">Best Customer Support </p>
        <p className="text-gray-700">we offer hassle free exchange policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
