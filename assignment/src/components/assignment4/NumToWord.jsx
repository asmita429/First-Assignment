import React from "react";
import numberToWords from "./numToWord";

const NumToWord = () => {
  let number = 113;
  const result = numberToWords(number);
  return (
    <div
      className=" mt-[-96px] w-full h-screen mx-auto text-center 
  flex flex-col justify-center"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6">
        Given a number from the user convert into its word representation.
      </h1>

      <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        The Number in digits is: {number} <br />
        equivalent word expression is: {result}
      </p>
    </div>
  );
};

export default NumToWord;
