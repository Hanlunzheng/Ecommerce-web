import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col  ">
        <div>
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        {/* image and description */}
        <div className="flex">
          <div className="flex-1">
            <img className="w-4/5 h-full" src={assets.about_img} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-5 w-3/5">
            <p className="text-gray-700 text-sm">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="text-gray-700 text-sm">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h1 className="font-bold">Our mission</h1>
            <p className="text-gray-700 text-sm">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      {/* why chooes us section */}
      <div className="mt-10 flex flex-col gap-5">
        <div className="flex gap-1 ">
          <h1 className="text-gray-500 text-xl">WHY</h1>
          <h1 className="font-bold text-xl">CHOOSE US</h1>
        </div>
        <div className="flex">
          <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <b className="text-center">Quality Assurance:</b>
            <p className="text-center">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <b className="text-center">Quality Assurance:</b>
            <p className="text-center">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <b className="text-center">Quality Assurance:</b>
            <p className="text-center">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
        </div>
        {/* subcripipe  */}
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default About;
