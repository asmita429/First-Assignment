import React from "react";
import areAnagram from "./Anagram";

const Anagram = () => {
  let string1 = "tac";
  let string2 = "act";
  const result = areAnagram(string1, string2);
  return (
    <>
      <div
        className=" mt-[-96px] w-full h-screen mx-auto text-center 
        flex flex-col justify-center"
      >
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6">
          Check if the given strings are Anagram or not
        </h1>

        <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
          {string1} and {string2} are Anagram: {result.toString().toUpperCase()}
        </p>
      </div>
    </>
  );
};

export default Anagram;
