import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className=" mt-[-96px] w-full h-screen mx-auto text-center 
        flex flex-col justify-center"
    >
      <p className="text-[#00df9a] font-bold p-2">GROWING WITH NEW IDEAS</p>
      <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
        Diagonal Technologies Pvt. Ltd.
      </h1>

      <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        Technical Test II - Assignment Questions - Internship, 2024
      </p>
      <Button props={"Get Started"} />
    </div>
  );
};

export default Hero;
