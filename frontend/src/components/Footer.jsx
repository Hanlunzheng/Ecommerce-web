import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-5 my-12">
        <div className="flex-1 flex-cols ">
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen boo
          </p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between gap-20 px-20">
            <div className=" flex flex-col">
              <p className="text-xl font-medium mb-5">Company</p>
              <ul className="flex flex-col gap-1 text-gray-500">
                <li>HOME</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className=" flex flex-col">
              <p className="text-xl font-medium mb-5">Contact Designer</p>
              <ul className="flex flex-col gap-1 text-gray-500">
                <li>Aaron Fang</li>
                <li>hzheng16@umd.ued</li>
                {/* <li>Delivery</li>
                <li>Privacy Policy</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-400 mb-6" />
      {/* copyright */}
      <div className="text-center pb-4">
        <p className="text-[15px]">
          Copyright 2024@ Aaron Fang - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
