import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* left side */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
            placeholder="first name"
            type="text"
            name=""
            id=""
          />
          <input
            className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
            placeholder="last name"
            type="text"
            name=""
            id=""
          />
        </div>
        <input
          className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
          placeholder="Email"
          type="email"
          name=""
          id=""
        />
        <input
          className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
          placeholder="Stree"
          type="text"
          name=""
          id=""
        />
        <div className="flex gap-3">
          <input
            className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
            placeholder="city"
            type="text"
            name=""
            id=""
          />
          <input
            className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
            placeholder="state"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
            placeholder="zip code"
            type="number"
            name=""
            id=""
          />
          <input
            className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
            placeholder="country"
            type="text"
            name=""
            id=""
          />
        </div>
        <input
          className="border boder-gray-300 rounded py-1.5 px-3.5 w-full "
          placeholder="phone"
          type="number"
          name=""
          id=""
        />
      </div>
      {/* right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="m-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* payemnt selection */}
          <div className="flex mt-5 gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className=" flex items-center justify-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razirpay")}
              className=" flex items-center justify-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razirpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className=" flex items-center justify-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-color text-sm font-medium">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/order")}
              className="bg-black px-16 text-white py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
