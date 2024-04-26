import React from "react";

const Button = ({ props }) => {
  return (
    <button
      className=" w-[160px] rounded-md font-medium my-6 mx-auto py-3 
    text-black bg-gradient-to-r from-green-400 to-blue-500 
    hover:from-blue-400 hover:to-green-400 "
    >
      {props}
    </button>
  );
};

export default Button;
