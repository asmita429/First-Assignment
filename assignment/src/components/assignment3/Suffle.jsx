import React from "react";
import moveItems from "./suffle";

const Suffle = () => {
  let list = ["apple", "banana", "cherry", "durian", "emblica"];
  const result = moveItems(list);
  return (
    <div
      className=" mt-[-96px] w-full h-screen mx-auto text-center 
  flex flex-col justify-center"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6">
        write functionality to move each item in the list to a different
        position on the list
      </h1>
      <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        Original List items are: <br />
        {list.map((item, index) => (
          <span key={index}>{item},</span>
        ))}
        <br />
      </p>
      <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        After suffled list items are: <br />
        {result.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </p>
    </div>
  );
};

export default Suffle;
