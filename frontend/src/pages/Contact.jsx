import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  return (
    <div className="my-10">
      <Title text1={"CONTACT"} text2={"US"} />
      <div className="mt-10 flex flex-col gap-5 justify-center items-center sm:flex-row">
        <img className="w-1/2 sm:w-2/5" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="font-bold text-xl">Our Store</h1>
          <p className="text-gray-700 text-l">
            111 greenbury drive, Washington, USA
          </p>
          <p className="text-gray-700 text-l">Email: hzheng16@umd.com</p>
          <h1 className="font-bold text-xl">Careers at Forever</h1>
          <p className="text-gray-700 text-l">
            Learn more about our teams and job openings.
          </p>
          <button
            onClick={() => (window.location.href = "https://www.linkedin.com")}
            className="border px-4 py-2 cursor-pointer border-black"
          >
            Explore Job
          </button>
        </div>
      </div>
      <div className="mt-10">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
