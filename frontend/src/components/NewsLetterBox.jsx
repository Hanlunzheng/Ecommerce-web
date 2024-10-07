import React from "react";

const NewsLetterBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center py-20 ">
      <p className="font-bold text-3xl">Subscribe now & get 20% off</p>
      <p className="text-gray-500 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex mt-7 justify-center items-center"
        type="submit"
      >
        <input
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Enter your email"
        />
        <button className="cursor-pointer px-4 py-2 text-white bg-black rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
