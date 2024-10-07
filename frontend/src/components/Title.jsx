import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <h1 className="text-gray-500 text-3xl">{text1}</h1>
      <h1 className="font-bold text-3xl">{text2}</h1>
    </div>
  );
};

export default Title;
